const {Builder, By, Key, util} = require("selenium-webdriver")
    async function StressTest(){
    let driver =  new Builder().forBrowser("chrome").build();
    let etapa=0;

     driver.get("http://localhost:4200/");
     await driver.findElement(By.id("login-form-email")).sendKeys("testejmeter@teste.com");
     await driver.findElement(By.id("login-form-password")).sendKeys("123456789",Key.ENTER);
     
     let check = setInterval(()=>{

        if(etapa == 4){clearInterval(check)}

        if(etapa == 0){
            driver.findElement(By.id('entendi')).click();
            driver.findElement(By.id('btn-cerveja-sem-qr')).click();
        }if(etapa == 1){
            driver.findElement(By.className('alinhando-checkbox-stella')).click();
        }if(etapa == 2){
            driver.findElement(By.id('enviar')).sendKeys(Key.ENTER)
        }if(etapa == 3){
            driver.findElement(By.id('voltar')).sendKeys(Key.ENTER)
        }
        etapa = etapa + 1
            },4000)
                 
        
     }
            StressTest();
        