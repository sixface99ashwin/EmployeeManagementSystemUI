import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  FirstName:string;
  constructor(private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  // const id = this.activateRoute.snapshot.params['id'];
  loggedin(){
    //console.log(Token)
    this.FirstName=localStorage.getItem('useremail')
    return localStorage.getItem('authToken');
  }
  onLogout(){
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('useremail');
  }


}
