import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  languages:any= ["English","ಕನ್ನಡ","മലയാളം","தமிழ்","తెలుగు","हिंदी","मराठी","বাংলা","ગુજરાતી"];
  userProfile:any=['LogIn','CREATE AN ACCOUNT'];
  catagories:any=["Crop Tonics","Fertilizer","Pesticide","Traps","Seeds"];
}
