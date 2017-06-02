import {Directive, ElementRef, HostListener} from '@angular/core';
import  {Renderer2} from '@angular/core';
@Directive({
    selector: '[bookmark]',
})

export class BookmarkDirective {
    constructor(private _el: ElementRef, private _renderer: Renderer2) {

    }

    @HostListener('click', ['$event']) onClick(e) {      
        this._el.nativeElement.remove();
    }



}
