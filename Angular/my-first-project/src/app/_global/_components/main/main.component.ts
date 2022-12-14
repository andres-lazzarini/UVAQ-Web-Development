import { Component, OnInit } from '@angular/core';

import { GlobalService } from '../../_services/global.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(public servGlobal: GlobalService) {}

  ngOnInit(): void {}
}
