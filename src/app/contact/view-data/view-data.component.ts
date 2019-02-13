import { Component, OnInit, Input } from '@angular/core';

/* Services */
import { TestService } from '../../test.service';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.scss']
})
export class ViewDataComponent implements OnInit {
  columnDefs = [
    {headerName: 'Date of birth', field: 'DOB', sortable: true, filter: true },
    {headerName: 'Gender', field: 'Gender', sortable: true, filter: true },
    {headerName: 'comments', field: 'comments', sortable: true, filter: true},
    {headerName: 'email', field: 'email', sortable: true, filter: true},
    {headerName: 'name', field: 'name', sortable: true, filter: true}
  ];

  rowData: any;
  constructor(private myService: TestService) { }

  ngOnInit() {
    this.rowData = this.myService.getData();
    console.log("Form Data in View Component", this.rowData);
  }

}
