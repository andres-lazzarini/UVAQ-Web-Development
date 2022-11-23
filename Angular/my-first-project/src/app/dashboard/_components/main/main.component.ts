import { Component, OnInit } from '@angular/core';

import { GlobalService } from '../../../_global/_services/global.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private servGlobal: GlobalService) {}

  ngOnInit(): void {
    this.servGlobal.moduleTitle = 'Dashboard';
  }
}
