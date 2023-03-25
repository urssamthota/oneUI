import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  public behaviorSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  public toggle() {
    return this.behaviorSubject.next(null);
  }
}
