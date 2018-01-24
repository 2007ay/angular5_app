import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { HttpService } from '../../services/http.service';

import * as _ from 'underscore';
import { debug } from 'util';

@Injectable()
export class HomeService {

  private apiUrl = './assets/questions.json';
  constructor(private httpService: HttpService) { }

  public getQuestionList(): any {
    return this.httpService.httpGetRequest(this.apiUrl, null);
  }

  public submitQuestions(formData: any) {
    const data = _.map(formData.questions, (d: any) => {
      return {
        question: d.question,
        answear: d.answear
      };
    });
    return this.httpService.httpPostRequest(this.apiUrl, data);
  }

}
