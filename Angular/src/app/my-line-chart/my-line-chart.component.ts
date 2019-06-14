import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})
export class MyLineChartComponent implements OnInit {
     LineChart;
     lineChartDate=[];
     countA = [];

  constructor(private dataservice:DataService) { }

  ngOnInit() {
    this.dataservice.getData().subscribe(
      res => {
        this.lineChartDate = this.dataservice.killDuplicate(res,'exercice_de_la_premiere_decision');
        this.countA=this.lineChartDate.map(value=>0);
        for (let i=0 ;i<4 ; i++) {
          for (let j=0 ; j < res.length ; j++) {
            if (this.lineChartDate[i]==res[j].fields.exercice_de_la_premiere_decision){
                this.countA[i]+=res[j].fields.montant_vote;
            }
          }
        }
        //line chart:
        this.LineChart = new Chart ('lineChart',{
          type:'line',
          data:{
            labels:this.lineChartDate.map(value=>value.toString()),
            datasets:[{
              label:'Financial by year',
              data:this.countA,
              fill:true,
              lineTension:0.2,
              borderColor:"blue",
              borderWidth:1,
              backgroundColor:"blue"
            }]},
          options:{
            title:{
              text:"Line Chart",
              display:true
            },
            scales:{
              yAxes:[{
                ticks:{
                  beginAtZero:true
                }
              }]
            }
          }
        }); 
      }
    );
  }
}
