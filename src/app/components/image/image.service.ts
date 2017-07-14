import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Image} from "./image";
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ImageService {
    apiUrl = 'https://api.imgur.com/3/account/';
    token: any;
    userName: any;
    albumId: string;
    private subjectEndLoading = new Subject<any>();
    private subjectAlbumTitle = new Subject<any>();

    constructor(private  http: Http) {
    }

    getHeaders() {
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + this.token);
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        return new RequestOptions({headers: headers});
    }

    getDataImages(): Observable<Image[]> {
        return this.http.get(
            this.apiUrl + this.userName + '/album/' + this.albumId,
            this.getHeaders())
            .map((response: Response) => {
                this.subjectAlbumTitle.next(response.json().data.title)
                if (response.status == 200) {
                    this.subjectEndLoading.next(false)
                }
                return response.json().data.images;
            })
            .catch(this.handleError)
    }

    endLoading(): Observable<any> {
        return this.subjectEndLoading.asObservable();
    }

    albumTitle(): Observable<any> {
        return this.subjectAlbumTitle.asObservable();
    }

    private handleError(error: any) {
        console.error('Error occured', error);
        return Observable.throw(error.message || error);
    }
}