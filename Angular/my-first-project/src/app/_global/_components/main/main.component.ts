import { GlobalService } from './../../_services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public serveGlobal: GlobalService) { }

  ngOnInit(): void {
    // this.serveGlobal.showGlobalLoader();

    // setTimeout(() => {
    //   this.serveGlobal.hideGlobalLoader();
    // }, 3000);
  }

}
