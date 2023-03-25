import { getNgModuleById, Injectable } from '@angular/core';
import { PeriodicElement } from '../models/data-main.model';
import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { Observable, ReplaySubject } from 'rxjs';
import { UUID } from 'angular2-uuid';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataMainService {

  readonly inspectionAPIUrl = "http://localhost:5117/api/DeployRequests";
  rowIndex!: number;
  selectedRow: any;
  uuidValue: any;
  formActionType = ""
  constructor(private http:HttpClient) { }

  displayedColumns: string[] = ['id', 'apptower', 'changeid', 'status', 'productname', 'appname', 'envtype', 'action'];
  ELEMENT_DATA: PeriodicElement[] = [
  
  ]
  dataToDisplay = [...this.ELEMENT_DATA];
  dataSource = new ExampleDataSource(this.dataToDisplay);

  removeData(idx: number,row: any) {
    // this.dataToDisplay.splice(idx, 1);
    // this.dataSource.setData(this.dataToDisplay);
    return this.http.delete(`${this.inspectionAPIUrl}/${row.id}`);
  }

   sampleData2: any
   addInitiateForm = 
  {
    id: UUID.UUID(),
    status: 'logged',
    statusdateandtime: new Date().toLocaleString(),
    apptower: '',
    site: '',
    changeid: '',
    defectlist: '',
    tags: '',
    productname: '',
    appname: '',
    release: '',
    envtype: '',
    dobuild: false,
    dodeploy: false,
    dobackout: false,
    doscan: false,
    dota: false,
    dounittest: false,
    buildassettypes: '',
    deployassettypes: '',
    postdeployassettypes: '',
    frameworkoptions: '',
   }
  PlusRow() {
    this.sampleData2 = 
  {
    id: UUID.UUID(),
    status: 'waiting',
    statusdateandtime: new Date().toLocaleString(),
    apptower: 'SS',
    site: 'CGV',
    changeid: 'CHG54321',
    defectlist: '56123',
    tags: '20220211-1',
    productname: 'Salesforce',
    appname: 'Lift',
    release: '2022-02',
    envtype: 'QA',
    dobuild: false,
    dodeploy: false,
    dobackout: false,
    doscan: false,
    dota: false,
    dounittest: false,
    buildassettypes: 'msapp',
    deployassettypes: 'datastage',
    postdeployassettypes: '',
    frameworkoptions: '',
   }

   return this.http.post(this.inspectionAPIUrl,this.sampleData2);

    // const randomElementIndex = Math.floor(Math.random() * this.ELEMENT_DATA.length);
    
    // const data = this.dataToDisplay;
    // data.push(this.sampleData2);
    // this.dataSource.setData(this.dataToDisplay);
  }
  dataListView: any;
  getAllRows() {
    this.dataListView = this.http.get<any>(this.inspectionAPIUrl)
    return this.dataListView;
  }

  updateRow(updatedRow: any) {
    // this.dataToDisplay[this.rowIndex] = updatedRow
    // this.dataSource.setData(this.dataToDisplay);
    return this.http.put(`${this.inspectionAPIUrl}/${updatedRow.id}`, updatedRow);
  }

  addRow(updatedRow: any) {
    // this.dataToDisplay[this.rowIndex] = updatedRow
    // this.dataSource.setData(this.dataToDisplay);
    updatedRow.id = UUID.UUID()
    updatedRow.statusdateandtime = new Date().toLocaleString()
    return this.http.post(this.inspectionAPIUrl,updatedRow);
  }

  approveRequest(idx: number, row: any) {
    row.status = "QA Approved"
    return this.http.put(`${this.inspectionAPIUrl}/${row.id}`, row);
  }

  form: FormGroup = new FormGroup({
    id: new FormControl(),
    status: new FormControl(),
    statusdateandtime: new FormControl(),
    apptower: new FormControl(),
    site: new FormControl(),
    changeid: new FormControl('',Validators.required),
    defectlist: new FormControl(),
    tags: new FormControl(),
    productname: new FormControl(),
    appname: new FormControl(),
    release: new FormControl(),
    envtype: new FormControl(),
    dobuild: new FormControl(),
    dodeploy: new FormControl(),
    dobackout: new FormControl(),
    doscan: new FormControl(),
    dota: new FormControl(),
    dounittest: new FormControl(),
    buildassettypes: new FormControl(),
    deployassettypes: new FormControl(),
    postdeployassettypes: new FormControl(),
    frameworkoptions: new FormControl()
  });

  initializeFormGroup() {
    this.form.setValue({
      id: '',
      status: '',
      statusdateandtime: '',
      apptower: '',
      site: '',
      changeid: '',
      defectlist: '',
      tags: '',
      productname: '',
      appname: '',
      release: '',
      envtype: '',
      dobuild: false,
      dodeploy: false,
      doscan: false,
      dota: false,
      dounittest: false,
      dobackout: false,
      buildassettypes: '',
      deployassettypes: '',
      postdeployassettypes: '',
      frameworkoptions: ''
    });
  }

  populateForm(idx: number, row: any) {
    this.form.setValue(row);
    this.rowIndex = idx;
    this.selectedRow = row
  }

  addForm() {
    this.form.setValue(this.addInitiateForm);
  }
}

class ExampleDataSource extends DataSource<PeriodicElement> {
  private _dataStream = new ReplaySubject<PeriodicElement[]>();

  constructor(initialData: PeriodicElement[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<PeriodicElement[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: PeriodicElement[]) {
    this._dataStream.next(data);
  }
}