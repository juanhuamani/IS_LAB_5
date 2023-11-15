const { Builder, By, Key, until } = require('selenium-webdriver');

async function calcular_porcentaje(num1, num2) {
    driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://www.calculator.net/');
        await driver.manage().window().maximize();
        await driver.findElement(By.xpath(`//*[@id="hl3"]/li[3]/a`)).click();
        await driver.findElement(By.id("cpar1")).sendKeys(num1);
        await driver.findElement(By.id("cpar2")).sendKeys(num2);
        await driver.findElement(By.xpath(`//*[@id="content"]/form[1]/table/tbody/tr[2]/td/input[2]`)).click();
        let result = await driver.findElement(By.xpath(".//*[@id = 'content']/p[2]/font/b")).getText();
        return result
        
    } finally {
        await driver.quit();
    }
}

module.exports = calcular_porcentaje;