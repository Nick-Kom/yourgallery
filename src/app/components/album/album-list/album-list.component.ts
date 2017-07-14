import {Component, Input} from '@angular/core';
import {Album} from "../album";

@Component({
    selector: 'album-list',
    templateUrl: 'album-list.template.html',
    styleUrls: ['album-list.less']
})
export class AlbumListComponent {
    @Input() albums: Album[];

}