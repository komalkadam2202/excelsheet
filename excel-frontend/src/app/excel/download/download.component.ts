import { Component, OnInit } from '@angular/core';
import { ExcelService } from '../shared/excel.service';
import * as FileSaver from 'file-saver';


@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
 public data;
  constructor(private excelservice:ExcelService) { }

  ngOnInit() {
  }

  downloadExcels(){
   
    console.log("download+++++++++++++++++++++++++++++")
    this.excelservice.getdata().subscribe((res:any )=>{
          
          this.data=res.files;

        
    })
  }

  download(item){
    console.log(item)
    item={
      items:item
    }
  
    this.excelservice.download(item).subscribe((res:any )=>{
      FileSaver.saveAs(res,item)
      console.log("++++++++++++++++++++++++===",res)
   })
 }
 

}
