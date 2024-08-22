import { Tariff, BasicTariff, PackagedTariff } from './Tariff';

interface TariffResult {
  name: string;
  cost: number;
}

class TariffCalculator {
  private tariffs: Tariff[];

  constructor() {
    this.tariffs = [new BasicTariff(), new PackagedTariff()];
  }

  getTariffCosts(consumption: number): TariffResult[] {
    return this.tariffs
      .map((tariff) => ({
        name: tariff.getName(),
        cost: tariff.calculateAnnualCost(consumption),
      }))
      .sort((a, b) => a.cost - b.cost);
  }
}

export default TariffCalculator;
