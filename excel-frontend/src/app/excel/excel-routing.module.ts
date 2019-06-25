import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { PreviewComponent } from './preview/preview.component';
import { DownloadComponent } from './download/download.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', component: UploadComponent },
  { path: 'preview', component: PreviewComponent,canActivate:[AuthGuard] },
  { path: 'download', component: DownloadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExcelRoutingModule { }
