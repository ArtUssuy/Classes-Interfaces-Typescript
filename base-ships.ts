class Spacecraft{
  constructor(public propulsor: string){}

  jumpIntoHiperspace(){
    console.log(`Jumping into hiperspace with ${this.propulsor}`);
  }
}

interface ContainerShip{
  cargoContainers: number;
}

export {Spacecraft, ContainerShip}
