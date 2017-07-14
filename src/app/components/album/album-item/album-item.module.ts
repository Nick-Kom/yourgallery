import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {MaterialModule} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";
import {AlbumItemComponent} from "./album-item.component";

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    declarations: [
        AlbumItemComponent
    ],
    exports: [
        AlbumItemComponent
    ]
})

export class AlbumItemModule {
}