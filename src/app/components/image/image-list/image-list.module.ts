import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {ImageListComponent} from "./image-list.component";
import {ImageItemModule} from "../image-item/image-item.module";

@NgModule({
    imports: [
        BrowserModule,
        ImageItemModule
    ],
    declarations: [
        ImageListComponent
    ],
    exports: [
        ImageListComponent
    ]
})

export class ImageListModule {
}