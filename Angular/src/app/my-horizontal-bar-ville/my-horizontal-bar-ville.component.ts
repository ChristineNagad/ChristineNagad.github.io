import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-my-horizontal-bar-ville',
  templateUrl: './my-horizontal-bar-ville.component.html',
  styleUrls: ['./my-horizontal-bar-ville.component.css']
})
export class MyHorizontalBarVilleComponent implements OnInit {
	public barChartOptions = {
		scaleShowVerticalLines:false,
		responsive:true
	};
	public barChartLabels = [];
	public barChartLegend = true;
	public barChartType = 'horizontalBar';
	public selectedyear=2011;

	public barChartData =[
	{data:[], label: this.selectedyear}
	]

  constructor(private dataservice:DataService) { }

  ngOnInit() {
  	this.loadChartBar()
  	this.chartLoop();
  }
    chartLoop(){
  	let timer = setTimeout(()=>{
  		if (this.selectedyear<2014) {
  			this.selectedyear+=1;
  			this.barChartData[0].label=this.selectedyear;
  		}else{
  			this.selectedyear=2011;
  			this.barChartData[0].label=this.selectedyear;
  		}
  		this.loadChartBar()
  		this.chartLoop();
  	},5000);
  }

	loadChartBar(){
	this.dataservice.getData().subscribe(
			res => {
				this.barChartLabels=this.dataservice.killDuplicate(res,'adresse_administrative_ville_du_tiers_beneficiaire');
				this.barChartData[0].data=this.barChartLabels.map(value=>0);
				for (let i=0; i<this.barChartLabels.length; i++) {
		          for (let j=0; j<res.length;j++){
		            if ((this.barChartLabels[i]==res[j].fields.adresse_administrative_ville_du_tiers_beneficiaire)
		            && (this.selectedyear==res[j].fields.exercice_de_la_premiere_decision)){
		              this.barChartData[0].data[i]+=res[j].fields.montant_vote;
		            }
		          }
		        }
		        let newDataObject={
	        	label:[],
	        	data:[]
	        	};
	        	newDataObject.label=this.barChartLabels;
	        	newDataObject.data=this.barChartData[0].data;
		        let sortedDataObject= this.sortObject(newDataObject);
	        	this.barChartLabels=sortedDataObject.label;
	        	this.barChartData[0].data=sortedDataObject.data;
			}
		);
	}
	  sortObject(objectInput){
  	let objectCopie={
  		data:objectInput.data,
  		label:objectInput.label,
  	}
  	for (var i = 0; i < objectCopie.data.length-1; ++i) {
  		for (var j = i+1; j < objectCopie.data.length; ++j) {
  			if(objectCopie.data[i]<objectCopie.data[j]){
  				let tmp={
  					data:objectCopie.data[i],
  					label:objectCopie.label[i],
  				}
  				objectCopie.data[i]=objectCopie.data[j];
  				objectCopie.label[i]=objectCopie.label[j];
  				objectCopie.data[j]=tmp.data;
  				objectCopie.label[j]=tmp.label;
  			}
  		}
  	}
  	return objectCopie;
  }
}
