import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DatepickerOptions } from 'ng2-datepicker';
import { HomeService } from './home.service';
import { debug } from 'util';

import * as _ from 'underscore';

class Question {
  question: string;
  answear: string;
  options: [string];
}

class TrainingForm {
  date: string;
  titleAndLocation: string;
  trainer: string;
  instrucation: string;
  questions: [Question];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
          ]))]), { optional: true })
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {

  public date: any = new Date();
  public trainingForm: TrainingForm = new TrainingForm();

  constructor(private service: HomeService) { }

  buildDefaultOptions(question: Question) {
    question.options = ['stronglyAgree', 'agree', 'neutral', 'disagree', 'stronglyDisagree'];
  }

  ngOnInit() {
    this.service.getQuestionList().subscribe((questions) => {
      _.each(questions, (question: Question) => {
        this.buildDefaultOptions(question);
      });
      this.trainingForm.questions = questions;
    });
  }

  onSelectionChange(selectedOption: string, question: Question): void {
    question.answear = selectedOption;
  }

  submitQuestions() {
    this.service.submitQuestions(this.trainingForm);
  }

}
