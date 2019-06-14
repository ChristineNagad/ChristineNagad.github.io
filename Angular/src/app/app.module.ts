import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { MyByYearBarChartComponent } from './my-by-year-bar-chart/my-by-year-bar-chart.component';
import { MyHorizontalBarComponent } from './my-horizontal-bar/my-horizontal-bar.component';
import { MyHoritontalBarDeptComponent } from './my-horitontal-bar-dept/my-horitontal-bar-dept.component';
import { MyHorizontalBarVilleComponent } from './my-horizontal-bar-ville/my-horizontal-bar-ville.component';
import { MapComponent } from './map/map.component';
import { HeatmapComponent } from './heatmap/heatmap.component';

@NgModule({
  declarations: [
    AppComponent,
    MyBarChartComponent,
    MyPieChartComponent,
    MyLineChartComponent,
    MyByYearBarChartComponent,
    MyHorizontalBarComponent,
    MyHoritontalBarDeptComponent,
    MyHorizontalBarVilleComponent,
    MapComponent,
    HeatmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
