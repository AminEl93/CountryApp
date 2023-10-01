import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';

import { Country } from '../interfaces/country';

@Injectable({
    providedIn: 'root'
})

export class CountriesService {

    private apiUrl: string = 'https://restcountries.com/v3.1'

    constructor(private http: HttpClient) { }

    searchCountryByAlphaCode(code: string): Observable<Country | null> {
        const url = `${this.apiUrl}/alpha/${code}`;    
        return this.http.get<Country[]>(url)
            .pipe(
                map(countries => countries.length > 0 ? countries[0] : null),
                catchError( () => of(null) )
            );
    }    

    // Buscar por capital
    searchCapital(capital: string): Observable<Country[]> {
        const url = `${this.apiUrl}/capital/${capital}`;
        return this.http.get<Country[]>(url)
            .pipe(
                catchError( () => of([]) )
            );
    }

    // Buscar por país
    searchCountry(name: string): Observable<Country[]> {
        const url = `${this.apiUrl}/name/${name}`;
        return this.http.get<Country[]>(url)
            .pipe(
                catchError( () => of([]) )
            );
    }
    
      // Buscar por región
      searchRegion(region: string): Observable<Country[]> {    
        const url = `${this.apiUrl}/region/${region}`;
        return this.http.get<Country[]>(url)
            .pipe(
                catchError( () => of([]) )
            );
    }    
}