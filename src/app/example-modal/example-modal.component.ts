import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ModalDirective} from 'ngx-bootstrap';
import {MessagingService} from '../messaging.service';

@Component({
  selector: 'app-example-modal',
  templateUrl: './example-modal.component.html',
  styleUrls: ['./example-modal.component.css']
})
export class ExampleModalComponent implements OnInit, OnDestroy {
  @ViewChild('childModal') childModal: ModalDirective;

  subscription: Subscription;

  constructor(private messagingService: MessagingService) { }

  /**
   * If you subscribe to an Observable (such as the one returned by our service) but
   * don't unsubscribe from it before leaving the component, the ngx bootstrap backdrop
   * objects will pile up.
   */
  ngOnInit() {
    this.subscription = this.messagingService.getMessenger().subscribe(nil => this.showChildModal());
  }

  /**
   * Leave this content of this method commented out if you want to reproduce the
   * modal backdrop issue.
   *
   * Uncomment the content of this method if you want to verify that unsubscribing
   * from observables will prevent modal backdrop objects from piling up.
   */
  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

  showChildModal(): void {
    this.childModal.show();
  }

  hideChildModal(): void {
    this.childModal.hide();
  }
}
