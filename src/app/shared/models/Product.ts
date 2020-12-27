export class Product {
	private id: number;
	private produktcode?: string;
	private produktname: string;
	private gewicht?: number
	private einheit?: string;
	private menge: number;
	private produkticon: number;
	private kategorie: string;
	private mindesthaltbarkeit?: string; //Fri Dec 25 2020 00:00:00 GMT+0100 (GMT+01:00) (kein genauer zeitstempel, nur tag)
	private bemerkung?: string;
	
	constructor(id:number, produktcode: string,produktname: string,gewicht: number,einheit: string,menge: number,produkticon: number,kategorie: string,mindesthaltbarkeit: string, bemerkung:string){
	//Null erlaubt: produktcode, gewicht, einheit, mhd, bemerkung
    this.id = id;
    this.produktcode=produktcode;
    this.produktname=produktname;
    this.gewicht=gewicht;
    this.einheit=einheit;
    this.menge=menge;
    this.produkticon=produkticon;
    this.kategorie=kategorie;
    this.mindesthaltbarkeit=mindesthaltbarkeit;
    this.bemerkung=bemerkung;
  }

    public getProduktcode(){
        return this.produktcode;
    }

    public getProduktName(){
        return this.produktname;
    }

    public getGewicht(){
        return this.gewicht;
    }

    public getEinheit(){
        return this.einheit;
    }

    public getMenge(){
        return this.menge
    }

    public getProdukticon(){
        return this.produkticon;
    }

    public getKategorie(){
        return this.kategorie
    }

    public getMHD(){
        return this.mindesthaltbarkeit;
    }

    public getBemerkung(){
        return this.bemerkung;
    }


}