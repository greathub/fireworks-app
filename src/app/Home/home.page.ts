import {Component, OnInit} from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  public fireworksForm: FormGroup;
  name: string;
  wishes: string;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.fireworksForm = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
      wishes: ['', Validators.compose([Validators.maxLength(255), Validators.required])]
    });
  }

}
