/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';
import { VehiculoListaComponent } from './vehiculo-lista.component';
import { Vehiculo } from '../vehiculo';

describe('VehiculoListaComponent', () => {
  let component: VehiculoListaComponent;
  let fixture: ComponentFixture<VehiculoListaComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule ],
      declarations: [ VehiculoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListaComponent);
    component = fixture.componentInstance;

    component.vehiculos = [
      new Vehiculo(
      90,
      "CheVrolet",
      "corsa",
      "Active",
      2019,
      80000,
      "gris",
      faker.image.imageUrl()

      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display one vehicle', () => {
    const vehicleNumbers= debug.queryAll(By.css('.table-group-item-action'));
    expect(vehicleNumbers.length).toBe(0);
  });


});


// id:number,
//     marca:string,
//     linea:string,
//     referencia:string,
//     modelo:number,
//     kilometraje:number,
//     color:string,
//     imagen:String
