import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyByYearBarChartComponent } from './my-by-year-bar-chart/my-by-year-bar-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { MyHorizontalBarComponent } from './my-horizontal-bar/my-horizontal-bar.component';
import { MyHoritontalBarDeptComponent} from './my-horitontal-bar-dept/my-horitontal-bar-dept.component';
import { MyHorizontalBarVilleComponent} from './my-horizontal-bar-ville/my-horizontal-bar-ville.component';
import { MapComponent } from './map/map.component';
import { HeatmapComponent } from './heatmap/heatmap.component';

const routes: Routes = [
	{ path:'bar-chart', component: MyBarChartComponent },
	{ path:'by-year-bar-chart', component: MyByYearBarChartComponent },
	{ path:'pie-chart', component: MyPieChartComponent },
	{ path:'line-chart', component: MyLineChartComponent },
  { path:'map', component: MapComponent },
  { path:'heat-map', component: HeatmapComponent },
	{ 
    path:'horizontal-chart',
    component: MyHorizontalBarComponent,
    children: [                          //<---- child components declared here
            {
                path:'Departement',
                component: MyHoritontalBarDeptComponent
            },
            {
                path:'Ville',
                component: MyHorizontalBarVilleComponent
            }
      ]
  },
	{ path:'**', component: MyBarChartComponent }
];

@NgModule({
  imports: [
  	RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
