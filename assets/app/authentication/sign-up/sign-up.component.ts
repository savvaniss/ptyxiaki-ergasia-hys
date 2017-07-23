import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html'
})
export class SignUpComponent {
    @Output() changeToSignIn = new EventEmitter<boolean>();

    onSignInSelected() {
        this.changeToSignIn.emit(true);
        console.log('change to sign in')
    }
}