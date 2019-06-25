import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate, Router} from '@angular/router';
import { ExcelService } from './shared/excel.service';

@Injectable({
  providedIn: 'root'
})
export class  AuthGuard implements CanActivate {


  constructor(private authservice: ExcelService,  private routing:Router){}

  canActivate(): boolean {
           if(this.authservice.x){
           return true;
    }else{
      this.routing.navigate([''])
      return false;
    }
  }
  
}
