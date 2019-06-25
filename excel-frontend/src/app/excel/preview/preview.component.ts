import { Component, OnInit } from '@angular/core';
import { ExcelService } from '../shared/excel.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  public data;
  datas1;
  datas2;
  datas;
  datas3;
  formData= new FormData;
  constructor(private excelservice:ExcelService, private routing:Router,private toastr: ToastrService) { }

  ngOnInit() {
    this.datas1 = this.excelservice.data1;
    this.datas2 = this.excelservice.data2;
    this.datas3 = this.excelservice.data3;
    this.datas = this.excelservice.data;
    console.log( "++++++++++++++++",this.datas1);
    console.log( "++++++++++++++++",this.datas2);
  }

  submitExcel(){
  console.log("In download")
  console.log(this.datas1);
  
    this.excelservice.sendexcel(this.datas1).subscribe((res : any)=>{
      console.log("submittttttttttt", res)
          
    })
  
    this.excelservice.sendmngexcel(this.datas2).subscribe((res : any)=>{
      console.log("submittt", res)
          
    })
   
    this.routing.navigate(['/'])
    this.toastr.success("File submitted successfully");
  }

  deleteExcel(){

    console.log("data issssssssssssss",this.datas3)
    this.excelservice.deleteexcel(this.datas3).subscribe((res : any)=>{
      this.routing.navigate(['/'])
      this.toastr.success("File deleted successfully");
          
    })
  }
  

  }



