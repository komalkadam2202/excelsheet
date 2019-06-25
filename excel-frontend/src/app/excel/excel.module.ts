import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcelService } from '../excel/shared/excel.service';
import { ExcelRoutingModule } from './excel-routing.module';
import { UploadComponent } from './upload/upload.component';
import { PreviewComponent } from './preview/preview.component';
import { DownloadComponent } from './download/download.component';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [UploadComponent, PreviewComponent, DownloadComponent],
  providers: [ExcelService],
  imports: [
    CommonModule,
    ExcelRoutingModule,
    ToastrModule.forRoot()
  ]
})
export class ExcelModule { }
