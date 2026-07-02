package com.cognizant.service;

import com.cognizant.entity.Country;
import com.cognizant.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    public void addCountry() {

        Country country = new Country("IN", "India");

        countryRepository.save(country);

        System.out.println("Country added successfully.");
    }

    public void findCountryByCode(String code) {

        Country country = countryRepository.findByCode(code);

        if (country != null) {
            System.out.println("Country Found");
            System.out.println("Code : " + country.getCode());
            System.out.println("Name : " + country.getName());
        } else {
            System.out.println("Country not found.");
        }
    }
    public void addNewCountry(String code, String name) {

        Country country = new Country(code, name);

        countryRepository.save(country);

        System.out.println(name + " added successfully.");
    }
    public void displayAllCountries() {

        System.out.println("\nList of Countries:");

        for (Country country : countryRepository.findAll()) {
            System.out.println(country.getCode() + " - " + country.getName());
        }
    }
    public void findCountryByName(String name) {

        Country country = countryRepository.findByName(name);

        if (country != null) {
            System.out.println("\nCountry Found by Name");
            System.out.println("Code : " + country.getCode());
            System.out.println("Name : " + country.getName());
        } else {
            System.out.println("Country not found.");
        }
    }
    public void searchCountries(String keyword) {

        System.out.println("\nCountries containing \"" + keyword + "\"");

        for (Country country : countryRepository.findByNameContaining(keyword)) {
            System.out.println(country.getCode() + " - " + country.getName());
        }
    }
}