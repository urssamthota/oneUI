import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DataServeService {

  constructor() { }

  form: FormGroup = new FormGroup({
    id: new FormControl(),
    apptower: new FormControl(),
    changeid: new FormControl('',Validators.required),
    productname: new FormControl(),
    appname: new FormControl(),
    envtype: new FormControl()
  });

  initializeFormGroup() {
    this.form.setValue({
      id: '',
      apptower: '',
      changeid: '',
      productname: '',
      appname: '',
      envtype: ''
    });
  }

  populateForm(row: any) {
    this.form.setValue(_.omit(row));
  }
}
