import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from "@angular/material";

import {AppComponent} from './app.component';
import {AlbumModule} from './components/album/album.module';
import {AlbumService} from "./components/album/album.service";
import {ImageService} from "./components/image/image.service";
import {ImageModule} from "./components/image/image.module";
import {AppService} from "./app.service";

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        AlbumModule,
        ImageModule,
        MaterialModule
    ],
    providers:[
        AlbumService,
        ImageService,
        AppService
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule{}