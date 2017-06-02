import {Component, OnInit, HostBinding} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ElementRef} from '@angular/core';
import {AnimationEvent} from '@angular/animations';
import {searchStateTrigger, itemStateTrigger, displaySearchTrigger} from '../animations';
import 'rxjs/Rx';

import {AppService} from '../app.service';
@Component({
    selector: 'homepage',
    templateUrl: './home.component.html',
    animations: [searchStateTrigger, 
                itemStateTrigger,
                displaySearchTrigger
              ],
    styles: [`
        input {
            background-color: inherit;
            border: 1px solid white;
            color: white;
        }

        input::placeholder {
            color: white;
        }

        .list {
            transition: all 500ms ease-out;
        }
        .list:hover {    
          
            // background-color: #1f699b;     
            box-shadow: 8px 8px 5px black;       
            background: #2980b9;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #2c3e50, #2980b9);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #2980b9, #2c3e50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        }



        .icons i {
            margin-top: 20px;
            display: inline-block;
            margin-right: 15px;
        }


        .bookmark_icon > i {
            color: cornsilk;
            transition: all 500ms ease-out; 
        }

        .bookmark_icon > i:hover {
            cursor: pointer;
            transform: scale(1.3);
            color: #ffff00;
        }

    `]
})

export class HomeComponent implements OnInit {
  
    loading: boolean = false;
    isSearching: boolean = false;
    searchForm: FormGroup;    
    bars;
    
    reviews = [];
    constructor(private _appService: AppService, private _el: ElementRef) {
        this.searchForm = new FormGroup({
            search: new FormControl("")
        });

        if (this._appService.isAuthenticated) {
            this.bars = this._appService.resultsSave;
        }


    }

    ngOnInit() {
        this.searchForm.get('search').valueChanges
            .debounceTime(1000)
            .distinctUntilChanged()
            .flatMap(location => {
                this.isSearching = true;
                this.loading = true;
                return this._appService.getBars(location)
            })
            .subscribe((results) => {               
                this.bars = results;
                for (let i in results) {
                    this._appService.getReviews(results[i].id)                   
                        .subscribe((review) => {                      
                            this.bars[i].reviews = [];                  
                            this.bars[i].reviews.push(review);                                     
                            // this.reviews.push(review);
                            this.loading = false;
                        })
                }
           
                this._appService.resultsSave = this.bars;                
             
            })
        
           
            
    }

 

    onBookMark(result) {         
        let name = result.name;
        let rating  = result.rating;
        let phone = result.phone;
        let image_url = result.image_url || '';
        let photos = result.photos || [];
        let address = result.location.display_address;
        let reviews = [];
       
        for (let i of result.reviews[0]){
            reviews.push(i)
        }
     

        this._appService.postBookmark({name, rating, phone, photos, address, reviews, image_url})
            .subscribe((data) => {
                return;               
            })
    }

}