import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from '../models/data-main.model';
import { DataMainService } from '../shared/data-main.service';
import { NotificationService } from '../shared/notification.service';
import { Subject } from "rxjs";

@Component({
  selector: 'app-data-serveform',
  templateUrl: './data-serveform.component.html',
  styleUrls: ['./data-serveform.component.scss']
})
export class DataServeformComponent implements OnInit {

  dataChanged = new Subject<PeriodicElement[]>();
  constructor(private notificationService: NotificationService,
    public dataMainService: DataMainService,
    public dialogRef: MatDialogRef<DataServeformComponent>) { }

  ngOnInit(): void {
  }

  onClear() {
    // this.dataServeService.form.reset();
    // this.dataServeService.initializeFormGroup();
  }

  onSubmit() {

    if (this.dataMainService.form.valid && this.dataMainService.form.dirty && this.dataMainService.form.touched) {
      if (this.dataMainService.formActionType == "Update") {
        this.dataMainService.updateRow(this.dataMainService.form.value).subscribe(
          res => {
            this.dataMainService.getAllRows();
          })
      }else if (this.dataMainService.formActionType == "Create") {
        console.log("I am Create call")
        console.log(this.dataMainService.form.value)
        this.dataMainService.addRow(this.dataMainService.form.value).subscribe(
          res => {
            this.dataMainService.getAllRows();
          })
      }
    }
    this.onClose();
  }

  onClose() {
    this.dataMainService.form.reset();
    this.dataMainService.initializeFormGroup();
    this.dialogRef.close();
  }

}
