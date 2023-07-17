import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-e-profil',
  templateUrl: './e-profil.component.html',
  styleUrls: ['./e-profil.component.sass']
})
export class EProfilComponent implements OnInit {
  breadscrums = [
    {
      title: 'Accuel',
      items: ['Mes information'],
      active: 'Profil',
    },
  ];

  modifPassword:boolean=false;
  pwdBtnText:string="Changer le mot de passe";
  user:Student;
  constructor() {
    this.user=JSON.parse(localStorage.getItem("currentUser"));
    console.log(this.user);
  }

  ngOnInit(): void {}

  changePassword():void{
    this.modifPassword=!this.modifPassword;
    if(this.modifPassword){
      this.pwdBtnText="Annuler";
    }else{
      this.pwdBtnText="Changer le mot de passe";
    }
  }
}
