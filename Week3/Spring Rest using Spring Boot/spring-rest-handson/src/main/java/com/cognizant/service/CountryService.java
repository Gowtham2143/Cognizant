package com.cognizant.service;

import com.cognizant.bean.Country;
import org.springframework.stereotype.Service;

@Service
public class CountryService {

    public Country getCountry() {

        Country country = new Country();
        country.setCode("IN");
        country.setName("India");

        return country;
    }
}