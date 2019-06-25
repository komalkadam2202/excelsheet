import { Component, OnInit } from '@angular/core';
import { ExcelService } from '../shared/excel.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  fileData;
  formData= new FormData;
  exceldata;
  filetype;
  constructor(private excelservice:ExcelService, private routing:Router) { }

  ngOnInit() {
    
  }

  onFileChange(event){
    // const reader = new FileReader();
    this.fileData = <File>event.target.files[0];
    console.log(event.target.files[0]);
    this.formData.append('productImage', this.fileData );
    this.filetype = event.target.files[0].name.split(".").pop();
    
    
  }

    upload(){
       
        console.log( "----------------------------",this.fileData)
        this.excelservice.uploadfile(this.formData);  
       
     
    }

}
