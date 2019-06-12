import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Idatagouv } from "../datagouv";

@Injectable({
  providedIn: 'root'
})
export class DataService {
	private _url: string = "assets/data/data.json";
	private alldata;
	private data=[];
	constructor( private http: HttpClient) { }
	getData(): Observable<Idatagouv[]> {
		this.alldata= this.http.get<Idatagouv[]>(this._url);
		return this.alldata;
  	}
  	killDuplicate(res,value){
		let data=res.map(function(res){
			let path=`res.fields.${value}`;
  			return eval(path);
		});
		let noDuplicate=data.filter((item,index)=>data.indexOf(item)==index);
		return noDuplicate; 		
  	}
}
