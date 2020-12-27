import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { User } from '../models/User';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string = 'http://10.0.2.2:4000/graphql';
  //private apiUrl: string = 'http://localhost:4000/graphql';

  constructor(private http: HttpClient) { }

  public async requestAuth(user: User): Promise<User>{
    return new Promise(async (resolve, reject) => {
      const payload: any = {query: `query {users(username: "${user.getUsername()}", userpasswort: "${user.getPassword()}"){username,userpasswort}}`};
      try{
        let response: any = await this.http.post(this.apiUrl, payload,{headers: {'Content-Type' : 'application/json'}}).toPromise();
        resolve(new User(response.data.users[0].username,response.data.users[0].userpasswort));
      } catch(e){
        console.log(e);
        reject("User not found");
       
      }
    });
  }

  public async fetchProducts(): Promise<Product[]>{
    return new Promise(async (resolve, reject) => {
      const payload: any = {query: `query {produkte{id,produktcode,produktname,gewicht,einheit,menge,produkticon,kategorie,mindesthaltbarkeit,bemerkung}}`};
      try{
        let response: any = await this.http.post(this.apiUrl, payload,{headers: {'Content-Type' : 'application/json'}}).toPromise();
        console.log(response.data.produkte)
        let productList: Product[] = [];
        response.data.produkte.forEach(p => {
          productList.push(new Product(p.id,p.produktcode, p.produktname,p.gewicht,p.einheit,p.menge,p.produkticon,p.kategorie,p.mindesthaltbarkeit,p.bemerkung));
        });
        resolve(productList);
      } catch(e){
        reject(e);
      }
    });
  }

  public async createProduct(product: Product): Promise<void>{
    return new Promise(async (resolve, reject) => {
      const payload: any = {query: `mutation {addProdukt(produktname: "${product.getProduktName()}", gewicht: ${product.getGewicht()},einheit: "${product.getEinheit()}",menge: ${product.getMenge()},produkticon: ${product.getProdukticon()},kategorie: "${product.getKategorie()}",mindesthaltbarkeit: "${product.getMHD()}",bemerkung: "${product.getBemerkung()}",){id,produktname}}`};
      try{
        let response: any = await this.http.post(this.apiUrl, payload,{headers: {'Content-Type' : 'application/json'}}).toPromise();
        
        if(response.errors){
          throw Error(JSON.stringify(response.errors));
        }
        resolve();
      } catch(e){
        reject("Product could not be created");
      }
    });
  }

  public async testApi():Promise<void>{
    return new Promise(async(resolve, reject)=>{
      const payload: any = 42143819;

      try{
        let response:any = await this.http.get("http://calapi.inadiutorium.cz/api/v0/en/calendars/default/1994/9/1").toPromise();

        console.log(response);
        resolve();
      }catch(e){
        console.log(e);
      }
    })
  }

}
