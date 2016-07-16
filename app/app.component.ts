import { Component } from '@angular/core';

export class StatusBar{

}
export class Section{
Id:string;
 Title:string;
}
export class StatusBarSections{
    Count:number;
    Sections:Section[];  
}

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1><div> <div *ngFor="let section of sections.Sections"><span>{{section.Id}}</span>:{{section.Title}}</div></div>'
})
export class AppComponent { 
title ='Angular 2 App';
sections:StatusBarSections={Count:2,Sections:[{Id:'Alerts',Title:'Alerts'},
    {Id:'Status',Title:'Status'}]};

}
