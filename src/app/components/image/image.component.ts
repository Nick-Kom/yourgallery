import {Component} from '@angular/core';
import {Image} from "./image";
import {ImageService} from "./image.service";
import {AlbumService} from "../album/album.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'image',
    templateUrl: 'image.template.html',
    styleUrls: ['image.less']
})
export class ImageComponent {
    images: Image[];
    loader: boolean = true;
    subscription: Subscription;
    albumTitle: string;

    constructor(private imageService: ImageService,
                private albumService: AlbumService) {

        this.subscription = this.imageService.endLoading()
            .subscribe(message => {
                this.loader = message;
            });
        this.subscription = this.imageService.albumTitle()
            .subscribe(message => {
                this.albumTitle = message;
            });
    }

    ngOnInit() {
        this.imageService.getDataImages()
            .subscribe((images: Image[]) => {
                this.images = images;
            });
    }

    backToAlbums() {
        this.albumService.hideAlbums(true);
        this.albumService.showImages(false);
        this.albumService.albumsTab('Albums');
    }

}