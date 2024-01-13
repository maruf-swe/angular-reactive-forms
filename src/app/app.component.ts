import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Reactive Forms';
  reactiveForm: FormGroup;

  ngOnInit(){
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),  // for more validation visit 
      lastname: new FormControl(null, Validators.required),   // https://angular.io/api/forms/Validators
      email: new FormControl(null, Validators.required),
      gender: new FormControl('male'),
      country: new FormControl('bd'),
      hobbies: new FormControl(null)

    });
  }

  onSubmit(){
    console.log(this.reactiveForm)

  }
}
