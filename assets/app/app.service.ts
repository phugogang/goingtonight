import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class AppService {
    resultsSave;
    displayData = [];

    constructor(private _http: Http) {

    }

    login(username: string, password: string) {
       return this._http.post('/auth/login', {username, password}, this.tokenHeader)
                .map((res: Response) => res.json())          
    }

    register(users: any) {
        return this._http.post('/auth/register', users, this.tokenHeader)
                    .map((res: Response) => res.json())
    }

    get username() {
        return localStorage.getItem('username');
    }

    get isAuthenticated() {
        return localStorage.getItem('token');
    }

    set setResults(results) {
        this.resultsSave = results;
    }



    getBars(location: string) {
        return this._http.post('/api/search-bars', {location: location}, this.tokenHeader)
                    .map((res: Response) => {                      
                        return res.json()})
    }

    getReviews(bar_id: string) {
        return this._http.post('/api/search-reviews', {bar_id}, this.tokenHeader)
                    .map((res: Response) => res.json())
    }


    postBookmark(bar) {      
        return this._http.post('/api/bookmark-bars', bar, this.tokenHeader)
                    .map((res: Response) => res.json())
    }

    getAllBookMark() {
        return this._http.get('/profile/bookmark', this.tokenHeader)
                    .map((res: Response) => res.json());
    }

    removeBookmark(id: number) {
        return this._http.delete(`/api/bookmarks/${id}`, this.tokenHeader)
                    .map((res: Response) => res.json())
    }
    


    get tokenHeader() {        
        var headers = new Headers({
            'Authorization': 'Bearer ' + localStorage.getItem('token'), 
            'Content-type': 'application/json',                      
        });
        return new RequestOptions({headers: headers})
    }

}