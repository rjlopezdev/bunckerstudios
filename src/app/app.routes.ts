import { Routes } from '@angular/router';

export const appRoutes : Routes = [
    {
        path: "",
        loadChildren: "./home/home.module#HomeModule"
    },
    {
        path: "sound",
        loadChildren: "./sound/sound.module#SoundModule"
    },
    {
        path: "gallery",
        loadChildren: "./gallery/gallery.module#GalleryModule"
    },
    {
        path: "contact",
        loadChildren: "./contact/contact.module#ContactModule"
    },
    {
        path: "instrumentals",
        loadChildren: "./instrumentals/instrumentals.module#InstrumentalsModule"
    }
];