import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {

    constructor(protected http: Http) {
    }

    public httpGetRequest(url: string, params: object): Observable<any> {
        return this.http.get(url, { params: params })
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }

    public httpPostRequest(url: string, params: object): Observable<any> {
        return this.http.post(url, params)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }

    private extractData(res: Response) {
        return res.json() || {};
    }

    private handleErrorObservable(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
}
