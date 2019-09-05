import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TableItem } from './table-item';
import { TableItemService } from './table-item.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  items: TableItem[];

  constructor(private route: ActivatedRoute, private tableItemService: TableItemService) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParamMap => {
      console.log(+queryParamMap.get('num'));
      const num = +queryParamMap.get('num') || 100;
      this.tableItemService.getItems().subscribe(data => {
        console.log(data);
        this.items = data.filter((_, index) => index > 0 && index <= num);
      });
    });
  }
}
