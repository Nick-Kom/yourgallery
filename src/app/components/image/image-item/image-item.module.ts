import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {MaterialModule} from "@angular/material";
import {ImageItemComponent} from "./image-item.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    declarations: [
        ImageItemComponent
    ],
    exports: [
        ImageItemComponent
    ]
})

export class ImageItemModule {
}