import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpModule} from "@angular/http";

import {ImageComponent} from './image.component';
import {ImageService} from "./image.service";
import {ImageListModule} from "./image-list/image-list.module";

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        ImageListModule,
        BrowserAnimationsModule,
        HttpModule,
    ],
    declarations: [
        ImageComponent
    ],
    providers: [
        ImageService
    ],
    exports: [
        ImageComponent
    ]
})

export class ImageModule {
}
