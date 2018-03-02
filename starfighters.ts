import {Spacecraft, ContainerShip} from './base-ships'

export class MilleniumFalcon extends Spacecraft implements ContainerShip{

  cargoContainers: number;

  constructor(){
    super('Hiperdriver')
    this.cargoContainers = 4
  }
  jumpIntoHiperspace(){
    if(Math.random() >= 0.5)
      console.log(`Jumping into hiperspace with ${this.propulsor}`)
  else
    console.log("Jump failed, your ship was destroyed")
  }
}
