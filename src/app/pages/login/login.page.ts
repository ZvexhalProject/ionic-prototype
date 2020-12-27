import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { User } from 'src/app/shared/models/User';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public formFields :{username:string, password:string} = { username: 'WhitneyWisozk', password: 'pBn17UYNSxo_KqB'};
  public errorMsg: string = '';
  constructor(private apiService: ApiService, private router: Router) { }

  async ngOnInit() {
    await this.apiService.testApi();
  }

  public async loginPressed(): Promise<void> {
    const user: User = new User(this.formFields.username, this.formFields.password);
    try{
      let authUser: User = await this.apiService.requestAuth(user);
      this.router.navigate(['/dashboard'], {state: {user: authUser} });
    } catch(e){
      this.errorMsg = e;
    }
  }

  public registerPressed(): void {

  }

}
