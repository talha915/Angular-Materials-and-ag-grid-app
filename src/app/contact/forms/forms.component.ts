import { Component, OnInit } from '@angular/core';

/* Reactive Form */
import { FormBuilder, FormControl, FormGroup, Validators , FormsModule, NgForm, FormGroupDirective } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

/* Components */
import { ViewDataComponent } from '../view-data/view-data.component';

/* Services */
import { TestService } from '../../test.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  formGroup: FormGroup;
  formData = [];
  sendData: any;
  
  columnDefs = [
    {headerName: 'Date of birth', field: 'DOB' },
    {headerName: 'Gender', field: 'Gender' },
    {headerName: 'comments', field: 'comments'},
    {headerName: 'email', field: 'email'},
    {headerName: 'name', field: 'name'}
  ];

  rowData: any;
  
  constructor(private fb: FormBuilder, private myService: TestService) {
    this.formGroup = this.fb.group({    
      'name': [null, [Validators.required]],
      'email': [null, [Validators.required]],
      'DOB': [null, [Validators.required]],     
      'Gender': [null, [Validators.required]],
      'comments': [null, [Validators.required]]
    });
  }

  ngOnInit() {
  }

  submitData() {
    console.log("Form Data: ", this.formGroup.value);
    this.formData.push(this.formGroup.value);
    console.log("Forms Datas..", this.formData);
    this.sendData = true;
    this.rowData = this.formData;
    console.log("This.rowData", this.rowData);
    this.myService.setData(this.formGroup.value);
  }
}
