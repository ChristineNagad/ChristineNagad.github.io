import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-my-horizontal-bar',
  templateUrl: './my-horizontal-bar.component.html',
  styleUrls: ['./my-horizontal-bar.component.css']
})
export class MyHorizontalBarComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
  	this.router.navigate([`/horizontal-chart/Departement`]);
	}
  navigation(event){
  	this.router.navigate([`/horizontal-chart/${event.target.value}`]);
  }
}
