import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

export class AppModule { }

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent{
  constructor(
    private DataService: DataService,
    private router: Router,
    private _snackBar: MatSnackBar,
    ) {}

  // ngOnInit(): void {
   
  // }
  registerUser(){
    const email = (<HTMLInputElement>document.getElementById('email')).value;
    const password = (<HTMLInputElement>document.getElementById('password')).value;
    const emailErr = (<HTMLInputElement>document.getElementById('emailErr'));
    const passErr =  (<HTMLInputElement>document.getElementById('passErr'));

    if(email == ""){
      emailErr.style.display = "block";
    }
    else if (password == ""){
      passErr.style.display = "block"; 
    }
    else{
      //add or register the user
      this.DataService.addUser(email, password,).subscribe(() => {
        this.router.navigate(['/login']);
        this._snackBar.open("Registered Successfully", "OK");
      });     
      emailErr.style.display = "none";
      passErr.style.display = "none"; 
    }  
  }
}
