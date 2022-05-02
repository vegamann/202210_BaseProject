import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-lista',
  templateUrl: './vehiculo-lista.component.html',
  styleUrls: ['./vehiculo-lista.component.css']
})
export class VehiculoListaComponent implements OnInit {

 vehiculos: Array<Vehiculo> =[];

  constructor( private vehiculoService: VehiculoService) { }

  getVehiculos():void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
    })
  }
  getRenault(): number {
  let i: number = 0;
    for (let auto of this.vehiculos){
      if (auto.marca == "Renault"){
        i++;
      }

    }

    return i;


}

getChevrolet(): number {
  let i: number = 0;
    for (let auto of this.vehiculos){
      if (auto.marca == "Chevrolet"){
        i++;
      }

    }

    return i;


}

getNissan(): number {
  let i: number = 0;
    for (let auto of this.vehiculos){
      if (auto.marca == "Nissan"){
        i++;
      }

    }

    return i;


}


  ngOnInit() {

    this.getVehiculos();

  }

}
