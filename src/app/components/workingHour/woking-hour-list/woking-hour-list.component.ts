import { Component, OnInit } from '@angular/core';
import {Chart,registerables} from 'node_modules/chart.js'
import { WorkingHour } from 'src/app/models/WorkingHour';
import { WorkingHourService } from 'src/app/services/workingHour/working-hour.service';
Chart.register(...registerables)
@Component({
  selector: 'app-woking-hour-list',
  templateUrl: './woking-hour-list.component.html',
  styleUrls: ['./woking-hour-list.component.css']
})
export class WokingHourListComponent implements OnInit {

  // chartdata:any;
  // labeldata:any[]=[];
  // realdata:any[]=[];
  // colordata:any[]=[];
  filterTerm!:string;
  constructor(private workingHourService:WorkingHourService) { }
  workingHours:WorkingHour[]=[];

  ngOnInit(): void {

    this.workingHourService.getAllWorkingDetails()
    .subscribe({
      next: (res) => {
        this.workingHours=res;
        console.log(res);
      },
      error : (response) => {
        console.log(response);
      }
    });
  }

  deleteWorkingHour(id:number){
    this.workingHourService.deleteWorkingDetails(id)
    .subscribe({
      next: (res) => {
        console.log(res);
        alert("WorkingHour details deleted");
      },
      error : (response) => {
        console.log(response);
      }
    });
  }
}


//   ngOnInit(): void {
//     this.workingHourService.getAllWorkingDetails().subscribe(results=>{
//       this.chartdata=results;
//       if(this.chartdata!=null){
//         for(let i=0;i<this.chartdata.lenth;i++){
//           console.log(this.chartdata[i].employeeWorkingHour);
//           this.labeldata.push(this.chartdata[i].empId);
//           this.realdata.push(this.chartdata[i].employeeWorkingHour)
//         }
//       }
//     });
//     this.RenderChart(this.labeldata,this.realdata);
//   }
// RenderChart(labeldata:any,maindata:any){

//   const myChart = new Chart("piechart", {
//     type: 'bar',
//     data: {
//         labels: labeldata,
//         datasets: [{
//             label: '# of Votes',
//             data: maindata,
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

// }
// }
