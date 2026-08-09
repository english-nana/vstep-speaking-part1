const fs = require('fs');
const http = require('http');
const path = require('path');
const puppeteer = require('puppeteer');
const projectRoot = path.resolve(__dirname, '..');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.mp3': 'audio/mpeg'
};

const serveProject = (request, response) => {
  const requestPath = decodeURIComponent(new URL(request.url, 'http://127.0.0.1').pathname);
  const filePath = path.resolve(projectRoot, `.${requestPath === '/' ? '/index.html' : requestPath}`);

  if (!filePath.startsWith(`${projectRoot}${path.sep}`)) {
    response.writeHead(403);
    response.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(error.code === 'ENOENT' ? 404 : 500);
      response.end(error.code === 'ENOENT' ? 'Not found' : 'Server error');
      return;
    }

    response.writeHead(200, {
      'Content-Type': mimeTypes[path.extname(filePath)] || 'application/octet-stream'
    });
    response.end(content);
  });
};

(async () => {
  const server = http.createServer(serveProject);
  const browser = await puppeteer.launch();

  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  const page = await browser.newPage();
  let hasErrors = false;

  page.on('console', (message) => {
    if (message.type() === 'error') {
      hasErrors = true;
      console.error('PAGE ERROR:', message.text());
    }
  });
  page.on('pageerror', (error) => {
    hasErrors = true;
    console.error('PAGE ERROR:', error.message);
  });
  page.on('requestfailed', (request) => {
    hasErrors = true;
    console.error('REQUEST FAILED:', request.url(), request.failure()?.errorText || 'unknown error');
  });

  try {
    await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: 'networkidle0' });
    await page.waitForSelector('#root > *');
    console.log('Page loaded successfully.');
  } finally {
    await browser.close();
    server.close();
  }

  process.exitCode = hasErrors ? 1 : 0;
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
