import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  siteName: string = 'My Little Store';
  isPro = true;
  currentMenu = 'dashboard';

  menu = [
    {
      code: 'dashboard',
      label: 'Dashboard',
      target: null,
      icon: 'ni-shop'
    },
    {
      code: 'users',
      label: 'Users',
      target: null,
      icon: 'ni-single-02'
    },
    {
      code: 'tears',
      label: 'Tears',
      target: null,
      icon: 'ni-bullet-list-67'
    },
    {
      code: 'products',
      label: 'Products',
      target: null,
      icon: 'ni-tag'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeSiteName(){
    this.siteName = "XXX";
  }

  setMenu(code: string){
    this.currentMenu = code;
  }

}
