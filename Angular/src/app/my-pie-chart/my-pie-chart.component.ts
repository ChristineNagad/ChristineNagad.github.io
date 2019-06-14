import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-my-pie-chart',
  templateUrl: './my-pie-chart.component.html',
  styleUrls: ['./my-pie-chart.component.css']
})
export class MyPieChartComponent implements OnInit {
	public pieChartLabels=['under 10000','10000 to 50000','upper 50 000'];
	public pieChartData= [0,0,0];
	public pieChartType= 'pie';
  constructor(private dataservice:DataService) { }

  ngOnInit() {
  	this.dataservice.getData().subscribe(
  		res => {
  			this.pieChartData= [0,0,0];
	  		for (let j=0; j<res.length; j++) {
	          if (res[j].fields.montant_vote <10000){
	            this.pieChartData[0]+=res[j].fields.montant_vote;
	          }
	          else if ((res[j].fields.montant_vote >=10000)
	             && (res[j].fields.montant_vote<=50000)) {
	              this.pieChartData[1]+=res[j].fields.montant_vote;
	          } else {
	            this.pieChartData[2]+=res[j].fields.montant_vote;
	          }
	        }
  		}
  	);
  }

}
