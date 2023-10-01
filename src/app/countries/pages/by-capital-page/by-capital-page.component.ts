import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
    selector: 'countries-by-capital-page',
    templateUrl: './by-capital-page.component.html'
})

export class ByCapitalPageComponent {

    public countries: Country[] = [];

    constructor(private _countriesService: CountriesService) { }
    
    searchByCapital(term: string): void {
        this._countriesService.searchCapital(term)
            .subscribe(countries => {
                this.countries = countries;
            });
    }
}
