import {bindable} from 'aurelia-framework';
import { AuNotification } from 'helpers/au-notification';

export class AuNotifications {
  
  @bindable notifications: AuNotification[] = [];

  @bindable
  notificationClicked : Function;
  active: boolean = false;

  // Array para almacenar las notificacionesque se veran de forma temporal
  singleNotifications: AuNotification[] = [];


  pushNotification(notification:AuNotification){
    this.notifications.unshift(notification);
    if (!this.active) {
      this.showSingleNotification(notification);
    }
  }
  
  showSingleNotification(notification){
    this.singleNotifications.push(notification)
    // La single notification dure solo 2s activa

    setTimeout(() => {
      debugger;
      this.singleNotifications.splice(this.singleNotifications.indexOf(notification), 1);
      this.singleNotifications;
    }, 5000);

  }

  setNotifications(notifications:AuNotification[]){
    this.notifications = notifications;
  }
  
  toggle(){
    debugger;
    this.active = !this.active;
  }

  close(){
    this.active = false;
  }


}
