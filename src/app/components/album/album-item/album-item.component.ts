import {Component, Input} from '@angular/core';
import {Album} from "../album"
import {ImageService} from "../../image/image.service";
import {AlbumService} from "../album.service";

@Component({
    selector: 'album-item',
    templateUrl: 'album-item.template.html',
    styleUrls: ['album-item.less']
})
export class AlbumItemComponent {
    @Input() album: Album;

    constructor(private imageService: ImageService,
                private albumService: AlbumService) {

    }

    openAlbum(albumId: string) {
        this.imageService.albumId = albumId;
        this.albumService.hideAlbums(false);
        this.albumService.showImages(true);
    }


}