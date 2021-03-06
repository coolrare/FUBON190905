import { Component, OnInit } from '@angular/core';
import { chartAreaDemo } from '../chartAreaDemo';
import { chartPieDemo } from '../chartPieDemo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    chartAreaDemo();
    chartPieDemo();
  }

  goColor(type: number) {
    // this.router.navigateByUrl('/utilities/colors/' + type);
    this.router.navigate(['/utilities/colors', type]);
  }

  goTables() {
    this.router.navigate(['/tables'], {
      queryParams: { num: 10 }
    });
  }
}
