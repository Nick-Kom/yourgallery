import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpModule} from "@angular/http";

import {AlbumComponent} from './album.component';
import {AlbumService} from "./album.service";
import {AlbumListModule} from "./album-list/album-list.module";
import {ImageModule} from "../image/image.module";
import {DropzoneModule} from "ngx-dropzone-wrapper";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        DropzoneModule,
        ImageModule,
        MaterialModule,
        AlbumListModule,
        BrowserAnimationsModule,
        HttpModule
    ],
    declarations: [
        AlbumComponent
    ],
    providers: [
        AlbumService
    ],
    exports: [
        AlbumComponent
    ]
})

export class  AlbumModule { }
