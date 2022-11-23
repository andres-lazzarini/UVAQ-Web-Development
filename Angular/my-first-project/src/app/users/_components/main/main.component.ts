import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GlobalService } from '../../../_global/_services/global.service';
import { UsersService } from '../../_services/users.service';
import { RemoveVocalsPipe } from '../../_pipes/remove-vocals.pipe';
import { User } from '../../_interfaces/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [RemoveVocalsPipe],
})
export class MainComponent implements OnInit {
  users: Array<User> = [];
  user: User | undefined;
  loadView = false;

  constructor(
    private route: ActivatedRoute,
    private servGlobal: GlobalService,
    private servUsers: UsersService,
    private pipeRemove: RemoveVocalsPipe
  ) {
    this.servGlobal.moduleTitle = 'Users';
  }

  ngOnInit(): void {
    this.servGlobal.showGlobalLoader('Loading users..');
    this.servUsers.getUsers().subscribe((response: any) => {
      this.servGlobal.hideGlobalLoader();

      const users = response.data;

      for (const user of users) {
        user.first_name = this.pipeRemove.transform(user.first_name);
      }

      this.users = users;
      this.loadView = true;
    });
  }
}
