import {Component} from '@angular/core'

@Component({
    selector:'welcome-app',
    templateUrl:'./welcome.component.html'  
})
export class WelcomeComp {
    apptitle="to my child Component"
    callme($event){
        console.log("i am called",$event)
    }
    myactive=true
}