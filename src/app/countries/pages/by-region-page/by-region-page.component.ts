import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html'
})

export class ByRegionPageComponent implements OnInit {

    public countries: Country[] = [];
    public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
    public selectedRegion?: Region;

    constructor(private _countriesService: CountriesService) { }
    
    ngOnInit(): void {
       
    }

    searchByRegion(region: Region): void {
        this.selectedRegion = region;
        this._countriesService.searchRegion(region)
            .subscribe(countries => {
                this.countries = countries;
            });
    }
}