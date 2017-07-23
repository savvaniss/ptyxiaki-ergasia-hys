import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html'
})
export class SignInComponent {

    @Output() changeToSignUp = new EventEmitter<boolean>();

    onSignUpSelected() {
        this.changeToSignUp.emit(true);
        console.log("Change to sign up");

    }

}