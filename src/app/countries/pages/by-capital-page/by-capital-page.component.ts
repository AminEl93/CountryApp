import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
    selector: 'countries-by-capital-page',
    templateUrl: './by-capital-page.component.html'
})

export class ByCapitalPageComponent implements OnInit {

    public countries: Country[] = [];
    public isLoading: boolean = false;

    constructor(private _countriesService: CountriesService) { }
    
    searchByCapital(term: string): void {
        this.isLoading = true;
        this._countriesService.searchCapital(term)
            .subscribe(countries => {
                this.countries = countries;
                this.isLoading = false;
            });
    }

    ngOnInit(): void {
        
    }
}
