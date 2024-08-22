interface TariffConfig {
  name: string;
}

abstract class Tariff {
  protected name: string;

  constructor(config: TariffConfig) {
    this.name = config.name;
  }

  abstract calculateAnnualCost(consumption: number): number;
  getName(): string {
    return this.name;
  }
}

class BasicTariff extends Tariff {
  private monthlyBaseCost: number = 5;
  private costPerKWh: number = 0.22;

  constructor() {
    super({ name: 'Basic Electricity Tariff' });
  }

  calculateAnnualCost(consumption: number): number {
    return this.monthlyBaseCost * 12 + consumption * this.costPerKWh;
  }
}

class PackagedTariff extends Tariff {
  private annualBaseCost: number = 800;
  private includedKWh: number = 4000;
  private extraCostPerKWh: number = 0.3;

  constructor() {
    super({ name: 'Packaged Tariff' });
  }

  calculateAnnualCost(consumption: number): number {
    if (consumption <= this.includedKWh) {
      return this.annualBaseCost;
    } else {
      return this.annualBaseCost + (consumption - this.includedKWh) * this.extraCostPerKWh;
    }
  }
}

export { Tariff, BasicTariff, PackagedTariff };
