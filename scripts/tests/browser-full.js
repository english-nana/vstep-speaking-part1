const path = require('path');
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('LOG:', msg.text()));
  page.on('pageerror', error => console.log('ERROR:', error.message));
  await page.goto('file://' + path.join(__dirname, 'fixtures', 'legacy-full.html'), {waitUntil: 'networkidle0'});
  await browser.close();
})();
