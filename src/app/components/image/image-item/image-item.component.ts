import {Component, Input} from '@angular/core';

import {Image} from "../image";
import {AlbumService} from "../../album/album.service";

@Component({
    selector: 'image-item',
    templateUrl: 'image-item.template.html',
    styleUrls: ['image-item.less']
})
export class ImageItemComponent {
    @Input() image: Image;

    constructor(private albumService: AlbumService,) {
    }

    openImage(image: Image) {
        this.albumService.showImages(false);
        this.albumService.showImage(image);
    }
}