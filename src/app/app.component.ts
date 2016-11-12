import {Component, ViewChild} from '@angular/core';
import {ModalComponent} from "./ng2-modal/modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Modal Test!';

  @ViewChild(ModalComponent) modal;

  simpleModalOpen(){
    this.modal.modalTitle = "SIMPLE MODAL TEST";
    this.modal.modalFooter = true;
    this.modal.modalMessage = true;
    this.modal.message = "This is a simple modal test.";
    this.modal.open();
  }

  getData(event: any) {
    console.log(event);
  }
}
