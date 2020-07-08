"use strict";
const path = require('path');
const {
    openBrowser,
    closeBrowser,
    goto,
    text,
    click,
    screenshot
} = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({
        headless: headless
    });
});

afterSuite(async () => {
    await closeBrowser();
});

// gauge截图辅助函数
gauge.customScreenshotWriter = async () => {
    const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'], `screenshot-${process.hrtime.bigint()}.png`);
    await screenshot({
        path: screenshotFilePath
    });
    return path.basename(screenshotFilePath);
};

// 测试代码，每一个step对应需求的一个步骤
step("Verify the greeting message", async () => {
    let msg = "This is the new world, and in this world, you can be whoever the fuck you want!";
    await goto('http://localhost:8010');
    await click('Hello');
    assert.ok(await text(msg).exists());
    gauge.screenshot();
});
