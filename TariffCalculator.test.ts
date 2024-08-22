import { describe, it, expect } from 'vitest';
import { BasicTariff, PackagedTariff } from './Tariff';
import TariffCalculator from './TariffCalculator';

describe('Tariff Calculations', () => {
  it('Basic Tariff should calculate correct costs', () => {
    const basicTariff = new BasicTariff();
    expect(basicTariff.calculateAnnualCost(3500)).toBe(830);
    expect(basicTariff.calculateAnnualCost(4500)).toBe(1050);
    expect(basicTariff.calculateAnnualCost(6000)).toBe(1380);
  });

  it('Packaged Tariff should calculate correct costs', () => {
    const packagedTariff = new PackagedTariff();
    expect(packagedTariff.calculateAnnualCost(3500)).toBe(800);
    expect(packagedTariff.calculateAnnualCost(4500)).toBe(950);
    expect(packagedTariff.calculateAnnualCost(6000)).toBe(1400);
  });

  it('Tariff Calculator should sort tariffs correctly', () => {
    const calculator = new TariffCalculator();
    const results = calculator.getTariffCosts(4500);
    expect(results[0].name).toBe('Packaged Tariff');
    expect(results[1].name).toBe('Basic Electricity Tariff');
  });
});
