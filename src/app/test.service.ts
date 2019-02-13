import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  data: any;
  formData = [];
  constructor() { }

  setData(data) {
    this.data = data;
    console.log("Data from service", this.data);
    this.formData.push(this.data);
  }

  getData() {
    return this.formData;
  }

}
