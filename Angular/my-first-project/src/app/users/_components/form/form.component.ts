import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UsersService } from '../../_services/users.service';
import { GlobalService } from '../../../_global/_services/global.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  loadView = false;

  form: FormGroup = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  constructor(
    private route: ActivatedRoute,
    private servGlobal: GlobalService,
    private servUsers: UsersService
  ) {}

  ngOnInit(): void {
    const userID = this.route.snapshot.params['userID'];

    this.servGlobal.showGlobalLoader();
    this.servUsers.getUsers(userID).subscribe((response: any) => {
      this.form.patchValue({
        firstName: response.data.first_name,
        lastName: response.data.last_name,
        email: response.data.email,
      });
      this.servGlobal.hideGlobalLoader();
      this.loadView = true;
    });
  }

  save() {
    if (this.form.invalid) {
      this.form.reset();
      return;
    }

    console.log(this.form.getRawValue());
  }
}
