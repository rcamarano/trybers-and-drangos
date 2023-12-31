import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static createdInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.createdInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return this.createdInstances;
  }
}

export default Mage;