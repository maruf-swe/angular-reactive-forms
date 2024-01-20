import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Reactive Forms';
  reactiveForm: FormGroup;

  ngOnInit(){
    this.reactiveForm = new FormGroup({
      personalDetails: new FormGroup({
        firstname: new FormControl(null, Validators.required),  // for more validation visit 
        lastname: new FormControl(null, Validators.required),   // https://angular.io/api/forms/Validators
        email: new FormControl(null, [Validators.required, Validators.email])
      }),
      gender: new FormControl('male'),
      country: new FormControl('bd'),
      hobbies: new FormControl(null),
      skills: new FormArray([
        new FormControl(null, Validators.required)
      ])

    });
  }

  onSubmit(){
    console.log(this.reactiveForm)

  }

  addSkils(){
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, Validators.required))

  }

  noSpaceAllowed(control: FormControl){
    if(control.value != null && control.value.indexof(' ') != -1){
      return {noSpaceAllowed: true}
    }
    return null;
  }
}
