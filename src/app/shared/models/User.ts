export class User { //keiner darf NULL sein, ID wird in DB autozugewiesen
	private id:number;
	private username:string;
	private userpasswort:string;
	private thema:number;
	private kreiert:string;
	private letzterlogin:string;
	private sprache:string;
	private barrieremodus:number;

	constructor(username:string,userpasswort:string) {
        this.username = username;
		this.userpasswort=userpasswort;
		this.thema= 1;
		this.kreiert=new Date().toISOString();
		this.letzterlogin=new Date().toISOString();
		this.sprache='en';
		this.barrieremodus= 1;
  }

  public getUsername(): string{
      return this.username;
  }

  public getPassword(): string{
      return this.userpasswort;
  }
}