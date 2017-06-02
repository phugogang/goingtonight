
import { Component, OnInit } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { itemStateTrigger } from '../animations';
import { AppService } from '../app.service';
@Component({
    selector: 'boomark',
    templateUrl: './bookmark.component.html',
    animations: [itemStateTrigger],
    styles: [`       
    

    .nothing_bookmark {
        margin: 50px auto;
         color: white;
         width: 100%;
        
    }

    .nothing_bookmark h1 {
        font-weight: 700;
        text-align: center;
    }

    .thumbnail {
        margin-top: 40px;
        position: relative;   
    
    }
    .xtag_close {
        position: absolute;
        top: -25px;
        right: -25px;
        color: darksalmon;
        /*opacity: 0.9;*/
        transition: all 500ms ease-out;
    }

    .xtag_close:hover {
        cursor: pointer;
        opacity: 1;
        transform: scale(1.2) rotate(90deg);
        color:violet;
    }
     
       

        .remove:after {
            content: '';
            margin-top: 40px;
            margin-bottom: 0;
        }

        .col-md-4:nth-child(3n+1){
            clear: left;
        }



        .row {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display:         flex;
        flex-wrap: wrap;
        }
        .row > [class*='col-'] {
        display: flex;
        flex-direction: row;
        }


    `]
})

export class BookMarkComponent implements OnInit {
    results;
    displayData = [];
    loading: boolean = true;
    constructor(private _appService: AppService) {
        
     }

    ngOnInit() {
     
        this._appService.getAllBookMark()
            .subscribe((data) => {
                
                this.results = data.bars;
                // this.displayData.push(this.results[0]);
                this.displayData.push(this.results[0]);
                this.loading = false;

            })
    }


    onLoadingData(event: AnimationEvent, lastId: number) {
        if (event.fromState != 'void') {
            return;
        }
        if (this.results.length > lastId + 1) {
            // this.displayData.push(this.results[lastId + 1]);
             this.displayData.push(this.results[lastId + 1]);
        } else {

            this.displayData = this.results;
            //  this.displayData = this.results;
        }

    }


    onRemoveBookmark(id: number, index: number) {
        this._appService.removeBookmark(id)
            .subscribe((res) => {
                this.displayData.splice(index, 1);
            })
    }
}