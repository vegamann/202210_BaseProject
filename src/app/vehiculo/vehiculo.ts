export class Vehiculo {

  id:number;
  marca:string;
  linea:string;
  referencia:string;
  modelo:number;
  kilometraje:number;
  color:string;
  imagen:String;

  constructor (
    id:number,
    marca:string,
    linea:string,
    referencia:string,
    modelo:number,
    kilometraje:number,
    color:string,
    imagen:String
    ){

      this.id = id;
      this.marca = marca;
      this.linea = linea;
      this.referencia = referencia;
      this.modelo = modelo;
      this.kilometraje = kilometraje;
      this.color = color;
      this.imagen = imagen;
    }
}
