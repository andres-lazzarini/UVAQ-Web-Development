import { Component, OnInit } from '@angular/core';

import { GlobalService } from '../../_services/global.service';

@Component({
  selector: 'app-global-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchBox = 'default text';

  constructor(public servGlobal: GlobalService) {}

  ngOnInit(): void {}
}
