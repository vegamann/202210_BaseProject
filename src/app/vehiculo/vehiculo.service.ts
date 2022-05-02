import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Vehiculo } from './vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
// importa la variable apiUrl de environment
private apiUrl: string = environment.baseUrl;

constructor(private http: HttpClient ) { }

// Se declar la funcion getVehiculos que usa el servicio http para invocar http.get

getVehiculos(): Observable<Vehiculo[]>{
  return this.http.get<Vehiculo[]>(this.apiUrl);
}

}
