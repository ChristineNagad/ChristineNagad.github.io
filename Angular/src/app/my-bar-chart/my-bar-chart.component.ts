import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {
	public barChartOptions = {
		scaleShowVerticalLines:false,
		responsive:true
	};
	public barChartLabels=[];
	public barChartLegend = true;
	public barChartType = 'bar';

	public barChartData =[
	{data:[], label: 'Financial support by department'}
	]
	constructor(private dataservice:DataService) { }

	ngOnInit() {
	  	this.dataservice.getData().subscribe(
			res => {
				this.barChartLabels=this.dataservice.killDuplicate(res,'adresse_administrative_code_departement_du_tiers_beneficiaire');
				this.barChartData[0].data=this.barChartLabels.map(value=>0);
				//decompte des montants par departement
		    	for (let i = 0; i < 8; i++) {
		      		for (let j = 0; j < res.length; j++) {
		       			// console.log('tablDpt:',this.barChartLabels[i],'=',res[j].fields.adresse_administrative_code_departement_du_tiers_beneficiaire);
		        		if (this.barChartLabels[i] == res[j].fields.adresse_administrative_code_departement_du_tiers_beneficiaire) {
		            		this.barChartData[0].data[i] += res[j].fields.montant_vote;
		        		}
		        		// console.log(this.barChartData[0].data);
		      		}
		    	}
			}
		);
	}
}
