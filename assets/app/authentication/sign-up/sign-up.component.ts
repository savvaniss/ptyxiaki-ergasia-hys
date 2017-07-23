import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm, FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
    signUpForm: FormGroup;
    @Output() changeToSignIn = new EventEmitter<boolean>();

    onSignInSelected() {
        this.changeToSignIn.emit(true);
        console.log('change to sign in');
    }

    ngOnInit() {
        this.signUpForm = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    }

    onSubmit(form: NgForm) {
        console.log(form);
    }
}