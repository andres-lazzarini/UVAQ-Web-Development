import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  siteName = 'My Little Store';
  imageAlt = 'This is my alt image';
  imageSrc = '../assets/img/logo-ct-dark.png';

  currentMenu = 'dashboard';
  menu = [
    {
      code: 'dashboard',
      label: 'Dashboard',
      target: null,
      icon: 'ni-shop',
    },
    {
      code: 'users',
      label: 'Users',
      target: null,
      icon: 'ni-single-02',
    },
    {
      code: 'tiers',
      label: 'Tiers',
      target: null,
      icon: 'ni-bullet-list-67',
    },
    {
      code: 'products',
      label: 'Products',
      target: null,
      icon: 'ni-tag',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  changeSiteName() {
    this.siteName = 'XXXXX';
  }

  setMenu(code: string) {
    this.currentMenu = code;
  }
}
