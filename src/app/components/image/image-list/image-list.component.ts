import {Component, Input} from '@angular/core';
import {Image} from "../image";

@Component({
    selector: 'image-list',
    templateUrl: 'image-list.template.html',
    styleUrls: ['image-list.less']
})
export class ImageListComponent {
    @Input() images: Image[];

}