import { Component } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import { FormBuilder, Validators } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {BehaviorSubject, Observable} from 'rxjs';
import {CdkTableModule} from '@angular/cdk/table';


export interface FreightTransport {
  name: string;
  id: number;
  userid: number;
  type: string;
  quantity: number;
  from: string;
}

const ELEMENT_DATA: FreightTransport[] = [
  {name: 'Washing Machine', id: 2010, userid: 1, type: 'H',quantity: 4500, from: 'India'},
  {name: 'Washing Machine', id: 2010, userid: 2, type: 'H',quantity: 4500, from: 'India'},
  {name: 'Washing Machine', id: 2011, userid: 3, type: 'H',quantity: 4500, from: 'India'},
  {name: 'Washing Machine', id: 2012, userid: 4, type: 'H',quantity: 4500, from: 'India'},
  {name: 'Washing Machine', id: 2016, userid: 5, type: 'H',quantity: 4500, from: 'India'},
  {name: 'Washing Machine', id: 2013, userid: 6, type: 'H',quantity: 4500, from: 'India'},
  {name: 'Washing Machine', id: 2015, userid: 7, type: 'H',quantity: 4500, from: 'India'},
  {name: 'Washing Machine', id: 2014, userid: 8, type: 'H',quantity: 4500, from: 'India'},
  {name: 'Washing Machine', id: 2020, userid: 9, type: 'H',quantity: 4500, from: 'India'},
  
];



@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent {
  addressForm = this.fb.group({
   
  });
  
  displayedColumns: string[] = ['name', 'id', 'userid', 'type', 'quantity', 'from'];
  dataSource = new ExampleDataSource();

 
  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
export class ExampleDataSource extends DataSource<FreightTransport> {
  /** Stream of data that is provided to the table. */
  data = new BehaviorSubject<FreightTransport[]>(ELEMENT_DATA);

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<FreightTransport[]> {
    return this.data;
  }

  disconnect() {}
}
