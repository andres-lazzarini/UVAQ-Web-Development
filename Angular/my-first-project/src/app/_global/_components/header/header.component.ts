import { Component, OnInit } from '@angular/core';

import {GlobalService} from '../../_services/global.service';

@Component({
  selector: 'app-global-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchBox = 'Default text';

  constructor() { }

  ngOnInit(): void {
  }

}
