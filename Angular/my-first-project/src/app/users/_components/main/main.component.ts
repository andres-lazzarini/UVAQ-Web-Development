import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  userID = '';
  catID = '';
  constructor(private route: ActivatedRoute) {
    this.userID = this.route.snapshot.params['userID'];
    this.catID = this.route.snapshot.params['catID'];
  }

  ngOnInit(): void {}
}
