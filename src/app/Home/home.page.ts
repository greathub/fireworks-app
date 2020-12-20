import {Component, OnInit} from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  public fireworksForm: FormGroup;
  emoji = Emojis;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.fireworksForm = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
      wishes: ['', Validators.compose([Validators.maxLength(255), Validators.required])]
    });
  }

  fireEmoji(emoji: string): void {
    console.log(emoji);
    this.removeClass(emoji);
    setTimeout(() => this.addClass(emoji), 450);
  }

   removeClass(emoji: string) {
    const element = document.getElementById(emoji);
    element.classList.remove('gray');
  }

  addClass(emoji: string) {
    const element = document.getElementById(emoji);
    element.classList.add('gray');
  }
}

export const Emojis = ['😍', '🤣', '😫', '🤶'];

export const EmojisExtended = ['😍', '🤣', '😫', '🤶', 'lol', 'xd'];
