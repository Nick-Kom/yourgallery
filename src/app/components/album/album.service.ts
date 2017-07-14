import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Album} from "./album";

import {Subject} from "rxjs";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {Image} from "../image/image";


@Injectable()
export class AlbumService {
    apiUrl = 'https://api.imgur.com/3/account/';
    token: any;
    userName: any;
    userId: any;
    private subjectEndLoading = new Subject<any>();
    private subjectHideAlbums = new Subject<any>();
    private subjecShowImages = new Subject<any>();
    private subjecalbumsTabName = new Subject<any>();
    private subjecShowImage = new Subject<any>();

    constructor(private  http: Http) {
    }

    getHeaders() {
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + this.token);
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        return new RequestOptions({headers: headers});
    }

    getDataAlbums(): Observable<Album[]> {
        return this.http.get(this.apiUrl + this.userName + '/albums', this.getHeaders())
            .map((response: Response) => {
                if (response.status == 200) {
                    this.subjectEndLoading.next(false)
                }
                return response.json().data;
            })
            .catch(this.handleError)
    }

    hideAlbums(hideAlbums: boolean) {
        this.subjectHideAlbums.next(hideAlbums);
    }

    hideAlbumsSub() {
        return this.subjectHideAlbums.asObservable();
    }

    showImages(hideAlbums: boolean) {
        this.subjecShowImages.next(hideAlbums);
    }

    showImage(image: Image) {
        this.subjecShowImage.next(image);
    }
    showSingleImage() {
        return this.subjecShowImage.asObservable();
    }

    albumsTab(albumsTabName: string) {
        this.subjecalbumsTabName.next(albumsTabName);
    }

    albumsTabName() {
        return this.subjecalbumsTabName.asObservable();
    }

    showImagesSub() {
        return this.subjecShowImages.asObservable();
    }

    endLoading() {
        return this.subjectEndLoading.asObservable();
    }

    private handleError(error: any) {
        console.error('Error occured', error);
        return Observable.throw(error.message || error);
    }
}