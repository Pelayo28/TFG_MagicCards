import { Component } from '@angular/core';
import {
	AbstractControl,
	FormBuilder,
	FormControl,
	FormGroup,
	ValidatorFn,
	Validators,
} from '@angular/forms';
import { UserService } from '../services/user/user.service';

interface AccountType {
	value: string;
	viewValue: string;
}

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
	registerForm!: FormGroup;
	hide = true;
	hide2 = true;
	accountType: string = '';

	constructor(
		private formBuilder: FormBuilder,
		private userService: UserService
	) {}

	ngOnInit(): void {
		this.registerForm = this.formBuilder.group(
			{
				name: new FormControl('', [Validators.required]),
				lastname: new FormControl('', [Validators.required]),
				username: new FormControl('', [Validators.required]),
				email: new FormControl('', [
					Validators.required,
					Validators.email,
				]),
				address: new FormControl('', Validators.required),
				phone: new FormControl('', [
					Validators.required,
					Validators.pattern('^[0-9]{9}$'),
				]),
				password: new FormControl('', [
					Validators.required,
					Validators.minLength(8),
				]),
				password2: new FormControl('', [Validators.required]),
				accountType: new FormControl('', [Validators.required]),
			},
			{ validator: this.passwordMatchValidator }
		);
	}

	accountTypes: AccountType[] = [
		{ value: 'cliente', viewValue: 'Cliente' },
		{ value: 'proveedor', viewValue: 'Proveedor' },
	];

	onSubmit() {
		console.log(this.registerForm.value);
		if (this.registerForm.valid) {
			const data = {
				name: this.registerForm.get('name')?.value,
				lastName: this.registerForm.get('lastname')?.value,
				username: this.registerForm.get('username')?.value,
				location: this.registerForm.get('address')?.value,
				password: this.registerForm.get('password')?.value,
				email: this.registerForm.get('email')?.value,
				phoneNumber: this.registerForm.get('phone')?.value,
			};

			if (this.registerForm.get('accountType')?.value === 'cliente') {
				this.createBuyer(data);
			} else {
				this.createSeller(data);
			}
		}
	}

	createBuyer(user: any) {
		if (this.registerForm.valid) {
			this.userService.createBuyer(user).subscribe((res) => {
				console.log(res);
			});
		}
	}

	createSeller(user: any) {
		if (this.registerForm.valid) {
			this.userService.createSeller(user).subscribe((res) => {
				console.log(res);
			});
		}
	}

	passwordMatchValidator: ValidatorFn = (
		control: AbstractControl
	): { [key: string]: any } | null => {
		const password = control.get('password')?.value;
		const password2 = control.get('password2')?.value;

		if (password === password2) {
			return null;
		} else {
			control.get('password2')?.setErrors({ passwordMismatch: true });
			return { passwordMismatch: true };
		}
	};
}
