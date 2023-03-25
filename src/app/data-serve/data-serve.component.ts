import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DataServeformComponent } from '../data-serveform/data-serveform.component';
import { DataMainService } from '../shared/data-main.service';

@Component({
  selector: 'app-data-serve',
  templateUrl: './data-serve.component.html',
  styleUrls: ['./data-serve.component.scss']
})
export class DataServeComponent implements OnInit {

  constructor(private dialog: MatDialog,
    public dataMainService: DataMainService
  ) { }

  displayedColumns: any
  dataSource: any

  ngOnInit(): void {
    this.displayedColumns = this.dataMainService.displayedColumns
    this.dataSource = this.dataMainService.getAllRows()
  }
  
  removeData(idx: number, row: any) {
    this.dataMainService.removeData(idx, row).subscribe(
      res => {
        this.dataSource = this.dataMainService.getAllRows()
      }
    )
  }
  addData(){
    this.dataMainService.formActionType = "Create"

    this.dataMainService.addForm()
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "auto";
    dialogConfig.height = "auto";
    this.dialog.open(DataServeformComponent, dialogConfig);

    // this.dataMainService.PlusRow().subscribe(
    //   res => {
    //     this.dataSource = this.dataMainService.getAllRows()
    //   }
    // )    
  }

  updateRow(idx: number, row: any) {
    this.dataMainService.formActionType = "Update"
    this.dataMainService.populateForm(idx, row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "auto";
    dialogConfig.height = "auto";
    this.dialog.open(DataServeformComponent, dialogConfig);
  }

  approveRequest(idx: number, row: any) {
    this.dataMainService.approveRequest(idx, row).subscribe(
      res => {
        this.dataSource = this.dataMainService.getAllRows()
      })
  }
}