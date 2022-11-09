import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
      target: '',
      icon: 'ni-shop'
    },
    {
      code: 'users',
      label: 'Users',
      target: 'users',
      icon: 'ni-single-02'
    },
    {
      code: 'tiers',
      label: 'Tiers',
      target: 'tiers',
      icon: 'ni-bullet-list-67'
    },
    {
      code: 'products',
      label: 'Products',
      target: 'products',
      icon: 'ni-tag'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changeSiteName(){
    this.siteName = "XXX";
  }

  setMenu(item: any){
    this.currentMenu = item.code;
    this.router.navigateByUrl(item.target);
  }

}
