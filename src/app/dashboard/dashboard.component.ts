import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Route, Router} from "@angular/router";
import {Chart} from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;
  @ViewChild('studentsChart') studentsChart: any;
  @ViewChild('feeChart') feeChart: any;
  @ViewChild('paymentChart') paymentChart: any;
  tilesbreakpoint: number = 600;
  tilesrowHeight: string = "150px"
  graphbreakpoint: number = 600;
  constructor( private router: Router) { }

  ngOnInit(): void {
    this.tilesbreakpoint = (window.innerWidth <= 600) ? 1 : 4;
    this.tilesrowHeight = (window.innerWidth <= 600) ? "100px" : "150px";
    this.graphbreakpoint = (window.innerWidth <= 600) ? 1 : 2;

  }

  ngAfterViewInit() {
    this.creategenderChart();
    this.createclassChart();
    this.createfeeChart();
    this.createpaymentChart();
  }
  handleSize(event: any): void{
    this.tilesbreakpoint = (event.target.innerWidth <= 600) ? 1 : 4;
    this.tilesrowHeight = (window.innerWidth <= 600) ? "100px" : "150px";
    this.graphbreakpoint = (window.innerWidth <= 600) ? 1 : 2;

  }
  creategenderChart(): void{

    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    const myChart = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
        labels: ['Male', 'Female'],
        datasets: [{
          label: 'Gender Distribution',
          data: [20, 3],
          backgroundColor: [
            "#3498DB",
            "#9B59B6",
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,

      }
    });

  }
  createclassChart(): void{
  this.canvas = this.studentsChart.nativeElement;
  this.ctx = this.canvas.getContext('2d');
    const myChart = new Chart(this.ctx, {
      type: 'polarArea',
      data: {
        labels: ["Form 1", "Form 2", "Form 3", "Form 4"],
        datasets: [{
          label: 'Students Per Class',
          data: [4, 8, 6, 5],
          backgroundColor: ["#50e991", "#b3d4ff", "#3498DB", "#AA4A44"],
          borderColor: ["#34495E", "#CFD4D8", "#49A9EA", "#b3d4ff"],
          borderWidth: 1,
        }]
      },
      options: {

        responsive: true,
      }
    });

  }

  createfeeChart(): void{

    this.canvas = this.feeChart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    const myChart = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
        labels: ["Form 1 Balance", "Form 2 Balance", "Form 3 Balance", "Form 4 Balance"],
        datasets: [{
          label: 'Fee Balance Per Class',
          data: [-74399.75, 5345.50, 2700.50, 0.00],
          backgroundColor: ["#50e991", "#b3d4ff", "#3498DB", "#9B59B6"],
          borderColor: ["#34495E", "#CFD4D8", "#49A9EA", "#B370CF"],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
      }
    });

  }
  createpaymentChart(): void{

    this.canvas = this.paymentChart.nativeElement;
    this.ctx = this.canvas.getContext('2d');    const myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: ["CHEQUE", "MPESA"],
        datasets: [{
          label: 'Fee Per Payment Mode',
          data: [263227.40, 20810.50],
          backgroundColor: ["#9B59B6", "#88B04B"],
          borderColor: ["#34495E", "#CFD4D8"],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
      }
    });

  }
}

