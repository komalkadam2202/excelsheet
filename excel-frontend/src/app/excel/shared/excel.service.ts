import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  data1;
  data2;
  data3;
  data;
  data4;
  x;
  allfile;
  constructor(private http: HttpClient, private routing:Router) { }

  // uploadfile(value){
   
  //   console.log('service call',value);
  //   return this.http.post('http://localhost:4000/upload', value)

  // }

  uploadfile(value){
    console.log('service call',value);
     this.http.post('http://localhost:4000/upload', value).subscribe(
      (res:any) => {
        this.data1 = res.data1;
        this.data2= res.data2;
        this.data = res;
        this.data3 = res.data3
        this.x=true
      
        console.log("******************************",this.data3)
        this.routing.navigate(['/preview'])
      }
    )
 }

  sendexcel(value){
    return this.http.post('http://localhost:4000/sendexcel1', value);
  }

  sendmngexcel(value){
    return this.http.post('http://localhost:4000/sendexcel2', value);
  }


  getdata(){
    console.log("get data")
    return this.http.get('http://localhost:4000/get')
  }

  download(value){

    return this.http.post('http://localhost:4000/download', value,  {responseType: 'text'})
  }

   deleteexcel(value){
     value={
       values: value
     }
        return this.http.post('http://localhost:4000/delexcel', value);
      
   }
}
 