import { Component, OnInit } from "@angular/core";
import Chart from 'chart.js';

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    new Chart("linechart", {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Net income',
          fill: false,
          data: [65, 30, 80, 81, 20, 60, 70, 65, 59, 80, 10, 56],
          backgroundColor: [
            'rgb(238,232,170,0.6)',

          ],
          borderColor: [
            'rgb(255,215,0)',
          ],
          borderWidth: 4,
        }
        ],
      },
      options: {
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              show: true
            },
            gridLines: {
              drawBorder: false,
              display: false,
          }
          }], 
          yAxes: [{
            display: true,
            scaleLabel: {
              show: true
            },
            ticks: {
              beginAtZero: true,
              callback: function (value, index, ticks) {
                return '$' + value;
              }
            },
            gridLines: {
              drawBorder: false,
              display: true,
            }
          }]
        },
      }
    });


    new Chart("incomechart", {
      type: 'pie',
      data: {
        labels: ['Loads', 'Tax', 'Others'],
        datasets: [{
          label: 'Profit',
          data: [60, 20, 20],

          backgroundColor: [

            'rgb(255, 234, 0)',
            'rgb(228, 208, 10)',
            'rgb(255, 215, 0)'
          ],
          borderWidth: 1
        }],

      },
      options: {
        plugins: {
          datalabels: {
            formatter: (value) => {
              return value + '%';
            },
          },
        },
      },
    });


    new Chart("expensechart", {
      type: 'pie',
      data: {
        labels: ['Tax', 'Diesel', 'Others'],
        datasets: [{
          label: 'Profit',
          data: [38, 22, 40],
          backgroundColor: [

            'rgb(255, 234, 0)',
            'rgb(228, 208, 10)',
            'rgb(255, 215, 0)'

          ],
          borderWidth: 1
        }],
        options: {
          scales: {
            y: {
              beginAtZero: true
            },

          }
        }
      }
    });
































  }

}

