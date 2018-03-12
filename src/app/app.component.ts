import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { DropdownModule } from 'primeng/dropdown';
import { SelectItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import { Offer } from './model/Offer';
import { Table } from 'primeng/components/table/table';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'app';
  offers: Offer[];
  cols: any[];

  offerTypeList: SelectItem[];
  channelsList: SelectItem[];
  productTypesList: SelectItem[];

  constructor() {
// Mock Dropdown Data
this.getAllData();
  }


  ngOnInit() {
// Mock Table Data
   this.offers = [
        {channel: 'Web', offerType: 'Fisso', productType: 'All', productName: 'Nome Prodotto'},
        {channel: 'App', offerType: 'Mobile', productType: 'Ricarica', productName: 'Ricarica 5 €'}
   ];

// Columns can be instantiated using an array as well by iterating with ngFor
    this.cols = [
        {field: 'channel', header: 'Channel'},
        {field: 'offerType', header: 'Tipo Offerta'},
        {field: 'productType', header: 'Tipo Prodotto'},
        {field: 'productName', header: 'Nome Prodotto'}
    ];

}
private reset(table: Table) {
    table.reset();
  }

  // Mock Dropdown Data
  private getAllData() {
    this.channelsList = [
        {label: 'Web', value: 'Web'},
        {label: 'App', value: 'App'}
    ];
    this.offerTypeList = [
        {label: 'Fisso', value: 'Fisso'},
        {label: 'Mobile', value: 'Mobile'}
    ];
    this.productTypesList = [
        {label: 'Bene Fisico', value: 'Bene Fisico'},
        {label: 'Ricarica', value: 'Ricarica'},
        {label: 'SIM', value: 'SIM'}
    ];
}
}
