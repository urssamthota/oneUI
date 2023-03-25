import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
 
  constructor(private sS: SharedService) { }

  @ViewChild('sidenav') public sidenav!: MatSidenav;

// toggleRightSidenav2() {
//    this.sidenav.toggle();
// }
  ngOnInit(): void {
    this.sS.behaviorSubject.subscribe(()=> {
      // this.sidenav.mode = 'over';
      this.sidenav.toggle();
      
    });
  }

  // ngAfterViewInit() {
  //   this.observer
  //     .observe(['(max-width: 800px)'])
  //     .pipe(delay(1))
  //     .subscribe((res) => {
  //       if (res.matches) {
  //         this.sidenav.mode = 'over';
  //         this.sidenav.close();
  //       } else {
  //         this.sidenav.mode = 'side';
  //         this.sidenav.open();
  //       }
  //     });

  // }
}
