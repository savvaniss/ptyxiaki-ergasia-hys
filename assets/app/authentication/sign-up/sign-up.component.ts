import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html'
})
export class SignUpComponent {
    @Output() changeForm = new EventEmitter<boolean>();

    onSignInSelected() {
        this.changeForm.emit(true);
        console.log('change to sign in')
    }
}