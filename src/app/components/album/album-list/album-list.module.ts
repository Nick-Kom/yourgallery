import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {AlbumListComponent} from "./album-list.component";
import {AlbumItemModule} from "../album-item/album-item.module";

@NgModule({
    imports: [
        BrowserModule,
        AlbumItemModule
    ],
    declarations: [
        AlbumListComponent
    ],
    exports: [
        AlbumListComponent
    ]
})

export class AlbumListModule {
}