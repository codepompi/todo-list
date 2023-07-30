import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  languages:any= ["English","ಕನ್ನಡ","മലയാളം","தமிழ்","తెలుగు","हिंदी","मराठी","বাংলা","ગુજરાતી"];
  userProfile:any=['LogIn','CREATE AN ACCOUNT'];
  catagories:any=["Crop Tonics","Fertilizer","Pesticide","Traps","Seeds"];
}