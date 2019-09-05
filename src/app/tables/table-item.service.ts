import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableItem } from './table-item';

@Injectable({
  providedIn: 'root'
})
export class TableItemService {

  constructor(private httpClient: HttpClient) { }

  getItems() {
    return this.httpClient.get<TableItem[]>('http://www.mocky.io/v2/5c9e523f3000005500ee97cf');
  }
}
