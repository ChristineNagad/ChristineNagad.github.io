export interface Idatagouv{
	datasetid:string;
	recordid:string;
	fields:fields;
}

interface fields{
	wgs84(wgs84: any);
	exercice_de_la_premiere_decision:number;
	adresse_administrative_code_departement_du_tiers_beneficiaire:number;
	adresse_administrative_ville_du_tiers_beneficiaire:string;
	montant_vote:number;
}