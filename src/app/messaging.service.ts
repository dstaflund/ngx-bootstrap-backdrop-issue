import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MessagingService {
  private messenger: Subject<void> = new Subject<void>();

  constructor() { }

  getMessenger(): Observable<void> {
    return this.messenger.asObservable();
  }

  notify() {
    this.messenger.next();
  }
}
