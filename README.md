# INGENERIA DE SOFTWARE LABORATORIO 5
## Selenium WebDriver para Calcular Porcentaje

El código en `seleniumConfig.js` proporciona una función `calcular_porcentaje` que utiliza Selenium WebDriver para interactuar con el sitio web [Calculator.net](http://www.calculator.net/). La función toma dos parámetros, realiza operaciones en el sitio y devuelve el resultado del cálculo.

- [Configuracion del Selenium ](seleniumConfig.js)

##  Pruebas de Unidad con QUnit

En el archivo `Pruebas.js`, se han implementado pruebas de unidad utilizando la biblioteca QUnit. Las pruebas verifican el correcto funcionamiento de la función `calcular_porcentaje` en diversos escenarios.

- [QUnit tests ](Pruebas.js)


## Ejecución de las Pruebas

Para ejecutar las pruebas, sigue estos pasos:

-**Instalación de Dependencias:**
> Asegúrate de tener instaladas las dependencias ejecutando:
`npm install selenium-webdriver qunit`

-**Ejecutar las Pruebas:**
> Utiliza el siguiente comando para ejecutar las pruebas:
`npm test`


## Caso de Pruebas


|       ESCENARIO DE PRUEBA     |VALORES DE PRUEBA    |RESULTADO DE PRUEBA    |
|----------------|-------------------------------|-----------------------------|
|this.addAssertion(result,"5")|`calcular_porcentaje(5,100);`|El resultado debería ser igual a 5 |
|this.addAssertion(result,"10")|`calcular_porcentaje(-50,-20);`|El resultado debería ser igual a 10|
|this.addAssertion(result,"3")|`calcular_porcentaje(4,23);`|El resultado debería ser igual a 3|

