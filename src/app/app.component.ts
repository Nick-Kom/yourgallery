import {Component} from '@angular/core';
import {AlbumService} from "./components/album/album.service";
import {ImageService} from "./components/image/image.service";
declare const OAuth: any;

@Component({
    selector: 'my-app',
    templateUrl: 'app.template.html',
    styleUrls: ['app.style.less']
})
export class AppComponent {
    authorized: boolean = false;
    showImages: boolean = false;
    userName: string;

    constructor(private albumService: AlbumService,
                private imageService: ImageService) {
    }

    authorize() {
        let token: any;
        OAuth.initialize('qOx7JukXIepYyqo8o3-8wC6g2qU');
        OAuth.popup('imgur')
            .done((result: any) => {
                token = result.access_token;
                result.me()
                    .done((data: any) => {
                        this.userName = data.alias;
                        let userId = data.raw.data.id;
                        this.albumService.userId = userId;
                        this.albumService.token = token;
                        this.imageService.token = token;
                        this.imageService.userName = this.userName;
                        this.albumService.userName = this.userName;
                        this.authorized = true;
                    })
            })
    }
}