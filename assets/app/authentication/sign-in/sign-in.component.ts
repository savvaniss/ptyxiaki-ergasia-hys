import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html'
})
export class SignInComponent {

    @Output() changeForm = new EventEmitter<boolean>();

    onSignUpSelected() {
        this.changeForm.emit(true);
        console.log("Change to sign up");

    }

}