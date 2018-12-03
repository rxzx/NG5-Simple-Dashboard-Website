import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StorageService } from '../Providers/storageservice';
import { User } from '../shared/models';
import { StorageKey } from '../shared/enums/storagekey';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class PublicSigninComponent implements OnInit {

  public signInForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private storage: StorageService
  ) {
    this.signInForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    let signInData: User = this.signInForm.value;
    if (signInData.username.toLowerCase() === 'admin' && signInData.password.toLowerCase() === 'admin') {
      this.storage.setPropertyFromLS(StorageKey.IsLoggedIn,true);
      this.router.navigate(['user/home']);
    } else {
      this.toastrService.error('Username or password is wrong', 'Error!', { closeButton: true });
    }

  }

}
