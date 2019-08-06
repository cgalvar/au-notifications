import { AuNotification } from "resources";
import { AuNotifications } from "elements/au-notifications";

export class App {
  public message: string = 'from Aurelia!';

  public notifications: AuNotification[] = [

    {
      title: 'Notificacion',
      text: "Hey!, esta es una notificacion chida!",
      fragment: "hola",
    },

    {
      title: 'Notificacion',
      text: "Hey!, esta es una notificacion chida!",
      fragment: "hola",
    }

  ];
  auNotifications: AuNotifications;

  clicked() {
    // eslint-disable-next-line no-alert
    alert('A primary button click or a touch');
  }

  startNotifications(){

    let i = 0;

      let intervalID = setInterval(() => {
        
        if (i == 5) {
          clearInterval(intervalID);
        }
        
        i++;
        let notification = {title: 'Notificacion ' + i, text: 'hola' + i};
        this.auNotifications.pushNotification(notification);
      }, 2000);
      
  }

}
