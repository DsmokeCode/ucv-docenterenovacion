import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  columnas: string[] = ['codigo', 'descripcion', 'precio'];

  datos: Articulo[] = [
    { codigo: 1, descripcion: 'Hydrogen', precio: 1.0079 },
    { codigo: 2, descripcion: 'Helium', precio: 4.0026 },
    { codigo: 3, descripcion: 'Lithium', precio: 6.941 },
    { codigo: 4, descripcion: 'Beryllium', precio: 9.0122 },
    { codigo: 5, descripcion: 'Boron', precio: 10.811 },
    { codigo: 6, descripcion: 'Carbon', precio: 12.0107 },
    { codigo: 7, descripcion: 'Nitrogen', precio: 14.0067 },
    { codigo: 8, descripcion: 'Oxygen', precio: 15.9994 },
    { codigo: 9, descripcion: 'Fluorine', precio: 18.9984 },
    { codigo: 10, descripcion: 'Neon', precio: 20.1797 },
    { codigo: 11, descripcion: 'Sodium', precio: 22.9897 },
    { codigo: 12, descripcion: 'Magnesium', precio: 24.305 },
    { codigo: 13, descripcion: 'Aluminum', precio: 26.9815 },
    { codigo: 14, descripcion: 'Silicon', precio: 28.0855 },
    { codigo: 15, descripcion: 'Phosphorus', precio: 30.9738 },
    { codigo: 16, descripcion: 'Sulfur', precio: 32.065 },
    { codigo: 17, descripcion: 'Chlorine', precio: 35.453 },
    { codigo: 18, descripcion: 'Argon', precio: 39.948 },
    { codigo: 19, descripcion: 'Potassium', precio: 39.0983 },
    { codigo: 20, descripcion: 'Calcium', precio: 40.078 },
  ];
  dataSource: any;
  foods: Food[] = [
    { value: '0', viewValue: 'Pregrado presencial' },
    { value: '1', viewValue: 'Pregrado semipresencial' },
    { value: '2', viewValue: 'Pregrado distancia' },
  ];
  campus: Food[] = [
    { value: '0', viewValue: 'UCV - Campus Lima Norte' },
    { value: '1', viewValue: 'UCV - Campus Callao' },
    { value: '2', viewValue: 'UCV - Campus Trujillo ' },
  ];
  anos: Food[] = [
    { value: '0', viewValue: '202200' },
    { value: '1', viewValue: '202201' },
    { value: '2', viewValue: '202202 ' },
  ];
  escuelas: Food[] = [
    { value: '0', viewValue: 'Administración' },
    { value: '1', viewValue: 'Contabilidad ' },
    { value: '2', viewValue: 'Ingeniería de Sistemas ' },
  ];
  nombres: Food[] = [{ value: '0', viewValue: 'Cargando...' }];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Articulo>(this.datos);
    this.dataSource.paginator = this.paginator;
  }
}
export class PeriodicElement {
  constructor(
    public name: string,
    public position: number,
    public weight: number,
    public symbol: string
  ) {}
}
export class Articulo {
  constructor(
    public codigo: number,
    public descripcion: string,
    public precio: number
  ) {}
}
