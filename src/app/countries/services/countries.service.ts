import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map, tap, delay } from 'rxjs';

import { Country } from '../interfaces/country';

@Injectable({
    providedIn: 'root'
})

export class CountriesService {

    private apiUrl: string = 'https://restcountries.com/v3.1';

    constructor(private http: HttpClient) { }

    private getCountriesRequest(url: string): Observable<Country[]> {
        return this.http.get<Country[]>(url)
            .pipe(
                catchError( () => of([]) ),
                //delay(2000)
            );
    }

    // Buscar por el código del país
    searchCountryByAlphaCode(code: string): Observable<Country | null> {
        const url = `${this.apiUrl}/alpha/${code}`;    
        return this.http.get<Country[]>(url)
            .pipe(
                map(countries => countries.length > 0 ? countries[0] : null),
                catchError( () => of(null) )
            );
    }    

    // Buscar por la capital
    searchCapital(capital: string): Observable<Country[]> {
        const url = `${this.apiUrl}/capital/${capital}`;
        return this.getCountriesRequest(url);
    }

    // Buscar por el país
    searchCountry(name: string): Observable<Country[]> {
        const url = `${this.apiUrl}/name/${name}`;
        return this.getCountriesRequest(url);
    }
    
    // Buscar por la región
    searchRegion(region: string): Observable<Country[]> {    
        const url = `${this.apiUrl}/region/${region}`;
        return this.getCountriesRequest(url);
    }    
}