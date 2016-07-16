import { Component } from '@angular/core';

export class StatusBar{

}
export class Section{
 Title:string;
}
export class StatusBarSections{
    Count:number;
    Sections:Section[];  
}

@Component({
    selector: 'my-app',
    template: '<h1>{{title}} - {{sections.Count}}</h1><div> <div *ngFor="let section of sections.Sections"><span>{{section.Id}}</span>:{{section.Title}}</div></div>'
})
export class AppComponent { 
title ='App Title';
sections:StatusBarSections{Count:2,Sections:[{Id:'Alerts',Title:'Alerts'},
    {Id:'Status':Title:'Status'}];

}
