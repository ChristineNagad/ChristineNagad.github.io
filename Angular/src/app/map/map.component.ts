import { Component, OnInit } from '@angular/core';
import OlMap from 'ol/Map';
import OlTile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import OlView from 'ol/View';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Vector } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import { DataService } from '../services/data.service';
@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
	map;
	ville;
	coordinates=[];
	constructor(private dataservice:DataService) { }

	ngOnInit() {
		this.dataservice.getData().subscribe(
			res=>{
				this.ville=this.dataservice.killDuplicate(res,'adresse_administrative_ville_du_tiers_beneficiaire');
				for (let i = 0; i <this.ville.length; i++) {
					for(let j=0;j<res.length;j++){
						if(this.ville[i]===res[j].fields.adresse_administrative_ville_du_tiers_beneficiaire){
							this.coordinates.push(res[j].fields.wgs84);
							break;
						}
					}
				}
				for(let i=0;i<this.coordinates.length;i++){
					let tmp=this.coordinates[i][0];
					this.coordinates[i][0]=this.coordinates[i][1];
					this.coordinates[i][1]=tmp;
				}
				this.markerOnMap();
		});
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
	markerOnMap() {;
		for (let i = 0; i < this.coordinates.length; i++) {
			let marker = new Feature({
				geometry: new Point(
					fromLonLat(this.coordinates[i])
				)
			});
			let vectorSource = new Vector({
				features: [marker]
			});
			let markerVectorLayer = new VectorLayer({
				source: vectorSource,
			});
			this.map.addLayer(markerVectorLayer);
		}
	}
	
}