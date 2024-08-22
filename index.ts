import * as readline from 'readline';
import TariffCalculator from './TariffCalculator';
import Table from 'cli-table';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter your annual electricity consumption in kWh: ', (input) => {
  const consumption = parseInt(input);

  if (isNaN(consumption)) {
    console.log('Please enter a valid number.');
    rl.close();
    return;
  }

  console.log('\nCalculations');

  const calculator = new TariffCalculator();

  const table = new Table({
    head: ['Tariff Name', 'Annual Costs'],
  });

  calculator.getTariffCosts(consumption).forEach((result) => {
    table.push([result.name, `€${result.cost.toFixed(2)}`]);
  });

  console.log(table.toString());

  rl.close();
});
