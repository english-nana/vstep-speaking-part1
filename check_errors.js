const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));
  await page.goto('file:///Users/nguyenminhtung/Ta%CC%A3o%20Website/vstep-speaking-part01/index.html', {waitUntil: 'networkidle0'});
  await browser.close();
})();
