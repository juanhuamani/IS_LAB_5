const calcular_porcentaje = require('./seleniumConfig');
const QUnit = require('qunit');

class TestCase {
  constructor() {
    this.assertions = [];
  }

  async setUp() {
    
  }

  async tearDown() {
    
  }

  addAssertion(result, expected, message) {
    this.assertions.push({
      result,
      expected,
      message,
    });
  }

  runTest(testFunction) {
    QUnit.test(testFunction.name, async function (assert) {
      const testCase = new TestCase();
      await testCase.setUp();
      await testFunction.call(testCase, assert);
      await testCase.tearDown();
      testCase.printResults();
    });
  }

  printResults() {
    console.log(`Total de aserciones: ${this.assertions.length}`);
    this.assertions.forEach((assertion, index) => {
      console.log(`Aserción : ${assertion.message}`);
      console.log(
        `  Resultado: ${
          assertion.result === assertion.expected ? 'PASSED' : 'FAILED'
        }`
      );
    });
  }
}

const miCaso = new TestCase();

miCaso.runTest(async function (assert) {
  const result = await calcularPorcentajePositivo(5, 100);
  this.addAssertion(result, "5", 'El resultado debería ser igual a 5');
});

miCaso.runTest(async function (assert) {
  const result = await calcularPorcentajeNegativos(-50, -20);
  this.addAssertion(result, "10", 'El resultado debería ser igual a 10');
});

miCaso.runTest(async function (assert) {
  const result = await calcularPorcentajeErroneo(4, 23);
  this.addAssertion(result, "3", 'El resultado debería ser igual a 3');
});
