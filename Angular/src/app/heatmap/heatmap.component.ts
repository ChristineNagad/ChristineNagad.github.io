import { Component, OnInit } from '@angular/core';
import Heatmap from 'ol/layer/Heatmap';
import OlMap from 'ol/Map';
import OlTile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import OlView from 'ol/View';
import { fromLonLat } from 'ol/proj';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapComponent implements OnInit {
	map;
  constructor() { }

  ngOnInit() {
    this.initializeMap();
  }

      initializeMap() {			// carte centree sur Paris
		this.map = new OlMap({
			target: 'map',
			layers: [
				new OlTile({
					source: new OSM()
				})
			],
			view: new OlView({
				center: fromLonLat([2.35, 48.85]),
				zoom: 10
			})
		});
	}
}
