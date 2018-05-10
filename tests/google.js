class testGoogleSiteSpeed
{
    getUrls() {
        return [
           "https://google.com",
       ];
    }

    connect(browser) {
        return new Promise(async (resolve, reject) => {
            const page = await browser.newPage();
            await page.goto('https://google.com', {waitUntil: 'load'});
            await page.type('#lst-ib', 'github');
            await page.$eval('input[type=submit]', x => x.click());
            await page.waitForNavigation({waitUntil: 'networkidle2'});
            resolve(browser);
        });
    }
}

module.exports = new testGoogleSiteSpeed();
