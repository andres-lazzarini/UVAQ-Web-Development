import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchBox = 'default text';

  constructor() {}

  ngOnInit(): void {}
}
