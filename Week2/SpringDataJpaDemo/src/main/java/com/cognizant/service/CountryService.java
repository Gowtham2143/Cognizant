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

    public void displayCountry() {

        Country country = countryRepository.findById("IN").orElse(null);

        if (country != null) {
            System.out.println("Country Code : " + country.getCode());
            System.out.println("Country Name : " + country.getName());
        } else {
            System.out.println("Country not found.");
        }
    }
}