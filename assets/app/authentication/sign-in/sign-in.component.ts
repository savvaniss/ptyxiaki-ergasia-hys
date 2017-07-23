import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html'
})
export class SignInComponent {
    signUpSelected: boolean = false;
    @Output() changeForm = new EventEmitter<boolean>();

    onSignUpSelected() {
        this.signUpSelected = true;
        this.changeForm.emit(this.signUpSelected);
        console.log("Change to sign up");

    }

}