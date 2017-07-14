import {Component} from '@angular/core';
import {Album} from "./album";
import {AlbumService} from "./album.service";
import {Subscription} from "rxjs";
import {DropzoneConfigInterface} from "ngx-dropzone-wrapper";
import {Image} from "../image/image";

@Component({
    selector: 'album',
    templateUrl: 'album.template.html',
    styleUrls: ['album.less']
})
export class AlbumComponent {
    albums: Album[];
    loader: boolean = true;
    hideAlbums: boolean = true;
    showImages: boolean = false;
    tabName: string = 'Albums';
    subscription: Subscription;
    subscriptionShow: Subscription;
    subscriptionHide: Subscription;
    subscriptionAlbumsTab: Subscription;
    singleImageLink: string;
    dropzoneConfig: DropzoneConfigInterface;
    selectedAlbum: string;
    image: Image;

    constructor(private albumService: AlbumService) {

        this.subscription = this.albumService.endLoading()
            .subscribe(message => {
                this.loader = message;
            });

        this.subscriptionHide = this.albumService.hideAlbumsSub()
            .subscribe(message => {
                this.hideAlbums = message;

            });

        this.subscriptionShow = this.albumService.showImagesSub()
            .subscribe(message => {
                this.showImages = message;
                this.tabName = 'Album';
            });

        this.subscriptionAlbumsTab = this.albumService.albumsTabName()
            .subscribe(message => {
                this.tabName = message;
            });

        this.subscriptionAlbumsTab = this.albumService.showSingleImage()
            .subscribe(image => {
                this.singleImageLink = image.link;
                this.image = image;
                this.tabName = 'Image';
            });
    }

    ngOnInit() {
        this.albumService.getDataAlbums()
            .subscribe((albums: Album[]) => {
                this.albums = albums;
            });

        this.dropzoneConfig = {
            url: 'https://api.imgur.com/3/image?album=',
            paramName: 'image',
            acceptedFiles: 'image/jpeg, images/jpg, image/png',
            method: 'post',
            maxFilesize: 6,
            headers: {
                'Cache-Control': null,
                'X-Requested-With': null,
                'Authorization': 'Bearer ' + this.albumService.token
            },
            autoReset: 1,
        }
    }

    selectAlbum(selectedAlbum: string) {
        this.dropzoneConfig.url = 'https://api.imgur.com/3/image?album=' + selectedAlbum;
        this.selectedAlbum = selectedAlbum;
    }

    backToAlbum() {
        this.albumService.showImages(true);
        this.singleImageLink = ''
    }

    onUploadSuccess(args: any) {
        alert('Your image ' + args[0].name + ' successfully uploaded');
    }


}