import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

// import {User} from '../models/user';
import { global } from './global';

@Injectable()
export class SelectService {
	public url: string;
	constructor(public _http: HttpClient) {
		this.url = global.url;
	}
	getPrograma(): Observable<any> {
		let headers = new HttpHeaders().set(
			'Content-Type',
			'application/x-www-form-urlencoded'
		);
		return this._http.get(this.url + 'programa', { headers: headers });
	}
	getFilial(): Observable<any> {
		let headers = new HttpHeaders().set(
			'Content-Type',
			'application/x-www-form-urlencoded'
		);
		return this._http.get(this.url + 'filial', { headers: headers });
	}
	getEscuela(i: any): Observable<any> {
		let headers = new HttpHeaders().set(
			'Content-Type',
			'application/x-www-form-urlencoded'
		);
		console.log(i);

		if (i == '2') {
			return this._http.get(this.url + 'escuela', { headers: headers });
		} else {
			return this._http.get(this.url + 'filial', { headers: headers });
		}
	}
	getPeriodo(a: any, b: any): Observable<any> {
		let headers = new HttpHeaders().set(
			'Content-Type',
			'application/x-www-form-urlencoded'
		);
		return this._http.get(this.url + 'periodo', { headers: headers });
	}
	getDocente(a: any, b: any, c: any): Observable<any> {
		let headers = new HttpHeaders().set(
			'Content-Type',
			'application/x-www-form-urlencoded'
		);
		return this._http.get(this.url + 'docente', { headers: headers });
	}
}
