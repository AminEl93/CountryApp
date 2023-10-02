import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
    selector: 'countries-country-page',
    templateUrl: './country-page.component.html'
})

export class CountryPageComponent implements OnInit {

    public country?: Country;
  
    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private _countriesService: CountriesService
    ) { }
  
    ngOnInit(): void {  
        this.activatedRoute.params
            .pipe(
                switchMap( ({id}) => this._countriesService.searchCountryByAlphaCode(id)),
            )
            .subscribe(country => {
                if (!country) { return this.router.navigateByUrl('') };
                return this.country = country;
            });
    } 
}
