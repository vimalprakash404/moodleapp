import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class FeesService {
    constructor(private http: HttpClient) { }
    private apiUrl = 'https://fakestoreapi.com/products';
    getFeesData(): Observable<any> {
        return this.http.get(this.apiUrl);
    }
}
