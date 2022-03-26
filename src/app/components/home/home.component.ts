import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { SelectService } from 'src/app/services/select.service';
import { FormControl } from '@angular/forms';
interface Food {
	value: string;
	viewValue: string;
}

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	// dtOptions: DataTables.Settings = {};
	dtTrigger = new Subject();

	SelectPrograma!: string;
	SelectFilial!: string;
	SelectEscuela!: string;
	SelectPeriodo!: string;

	// Select 1
	public programas: any;
	disableSelectPrograma = false;

	// Select 2
	public filials: any;
	disableSelectFilial = true;

	// Select 3
	public escuelas: any;
	disableSelectEscuela = true;
	// Select 4
	public periodos: any;
	disableSelectPeriodo = true;

	// Tabla Docente
	public docentes: any;

	columnas: string[] = ['idRenovacionDoc', 'ordenMerito', 'cPerCodigoDoc'];

	dataSource: any;

	nombres: Food[] = [{ value: '0', viewValue: 'Cargando...' }];

	constructor(
		private http: HttpClient,
		private _selectService: SelectService
	) {}
	ngOnInit(): void {
		this.getPrograma();
		this.getFilial();

		if (this.SelectPrograma == null) {
			alert('Debe de Seleccionar un Programa');
		}
	}
	@ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

	sPrograma(a: string) {
		this.getEscuela(a);
		this.disableSelectFilial = false;
	}
	sFilial(a: string) {
		this.disableSelectEscuela = false;
	}
	sEscuela(a: string, b: string) {
		this.getPeriodo(a, b);
		this.disableSelectPeriodo = false;
	}
	sPeriodo(a: string, b: string, c: string) {
		this.getDocente(a, b, c);
	}

	getPrograma() {
		this._selectService.getPrograma().subscribe(
			(response) => {
				if (response) {
					this.programas = response.lstItem;
					console.log(this.programas);
				} else {
				}
			},
			(error) => {}
		);
	}
	getFilial() {
		this._selectService.getFilial().subscribe(
			(response) => {
				if (response) {
					this.filials = response.lstItem;
					console.log(this.filials);
				} else {
				}
			},
			(error) => {}
		);
	}
	getEscuela(a: string) {
		this._selectService.getEscuela(a).subscribe(
			(response) => {
				if (response.lstItem[0].nIntCodigo) {
					this.escuelas = response.lstItem;
					console.log(this.escuelas[0].nIntCodigo);
				} else {
					this.escuelas = [];
					console.log(this.escuelas);
				}
			},
			(error) => {}
		);
	}
	getPeriodo(a: string, b: string) {
		this._selectService.getPeriodo(a, b).subscribe(
			(response) => {
				if (response) {
					this.periodos = response.lstItem;
					console.log(this.periodos);
				} else {
				}
			},
			(error) => {}
		);
	}
	getDocente(a: string, b: string, c: string) {
		this._selectService.getDocente(a, b, c).subscribe(
			(response) => {
				if (response) {
					this.docentes = response.lstItem;
					console.log(this.docentes);
					this.dataSource = new MatTableDataSource<Docentes>(
						this.docentes
					);
					this.dataSource.paginator = this.paginator;
				} else {
				}
			},
			(error) => {}
		);
	}
}
export class Docentes {
	constructor(
		public cPerCodigoDoc: any,
		public categoriaDoc: any,
		public dedicacion: any,
		public docente: any,
		public edd: any,
		public idRenovacionDoc: any,
		public medDisciplinarias: any,
		public ordenMerito: any,
		public produccionIntelectual: any,
		public puntajeObtenido: any,
		public renacyt: any,
		public renovacion: any,
		public resultado: any,
		public reunionDelegados: any
	) {}
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
export class Cliente {
	constructor(
		public id_clientes: string,
		public nombres: string,
		public ape_paterno: string,
		public ape_materno: string,
		public sexo: string,
		public n_documento: string,
		public f_nacimiento: any,
		public email: string,
		public telefono_fijo: string,
		public telefono_movil: string,
		public direccion: string,
		public distrito: string,
		public id_tipo_documento: number,
		public id_usuarios: number,
		public updated_at: any,
		public created_at: any
	) {}
}
export class Programas {
	constructor(
		public id_clientes: string,
		public nombres: string,
		public ape_paterno: string,
		public ape_materno: string,
		public sexo: string,
		public n_documento: string,
		public f_nacimiento: any,
		public email: string,
		public telefono_fijo: string,
		public telefono_movil: string,
		public direccion: string,
		public distrito: string,
		public id_tipo_documento: number,
		public id_usuarios: number,
		public updated_at: any,
		public created_at: any
	) {}
}
