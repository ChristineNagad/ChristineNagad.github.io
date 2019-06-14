import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Chart } from 'chart.js';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-my-by-year-bar-chart',
  templateUrl: './my-by-year-bar-chart.component.html',
  styleUrls: ['./my-by-year-bar-chart.component.css']
})
export class MyByYearBarChartComponent implements OnInit {
	public barChartOptions = {
		scaleShowVerticalLines:false,
		responsive:true
	};
	public barChartLabels = [];
	public barChartLegend = true;
	public barChartType = 'bar';
	public selectedyear=2011;

	public barChartData =[
	{data:[], label: 'Financial support by department'}
	]
	constructor(private dataservice:DataService) { }

	ngOnInit() {
	  	this.dataservice.getData().subscribe(
			res => {
				this.barChartLabels=this.dataservice.killDuplicate(res,'adresse_administrative_code_departement_du_tiers_beneficiaire');
				this.barChartData[0].data=this.barChartLabels.map(value=>0);
				for (let i=0; i<8; i++) {
		          for (let j=0; j<res.length;j++){
		            if ((this.barChartLabels[i]==res[j].fields.adresse_administrative_code_departement_du_tiers_beneficiaire)
		            && (this.selectedyear==res[j].fields.exercice_de_la_premiere_decision)){
		              this.barChartData[0].data[i]+=res[j].fields.montant_vote;
		            }
		          }
		        }
			}
		);
	}
	loadChartBar(event){
		this.selectedyear = event.target.value;
		this.dataservice.getData().subscribe(
			res =>{
			this.barChartData[0].data=[0,0,0,0,0,0,0,0];	
			for (let i=0; i<8; i++) {
	          for (let j=0; j<res.length;j++){
	            if ((this.barChartLabels[i]==res[j].fields.adresse_administrative_code_departement_du_tiers_beneficiaire)
	            && (this.selectedyear==res[j].fields.exercice_de_la_premiere_decision)){
	              this.barChartData[0].data[i]+=res[j].fields.montant_vote;
	            }
	          }
			}
		});
	}
}

