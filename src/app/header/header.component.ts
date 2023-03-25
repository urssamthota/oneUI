import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from "../shared.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

constructor(private sidenav: SharedService){}

  ngOnInit(): void {
  }

  // toggleRightSidenav() {
  //   this.sidenav.toggle();
  // }

}
