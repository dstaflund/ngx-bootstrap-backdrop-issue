import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {MessagingService} from '../messaging.service';

@Component({
  selector: 'app-with-modal',
  templateUrl: './with-modal.component.html',
  styleUrls: ['./with-modal.component.css']
})
export class WithModalComponent implements OnInit {
  subscription: Subscription;

  constructor(private messagingService: MessagingService) { }

  ngOnInit() {
  }

  showChildModal(): void {
    this.messagingService.notify();
  }
}
