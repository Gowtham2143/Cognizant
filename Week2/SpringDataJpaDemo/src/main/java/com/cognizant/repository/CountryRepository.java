package com.cognizant.repository;

import com.cognizant.entity.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CountryRepository extends JpaRepository<Country, String> {

    @Query("FROM Country")
    List<Country> getAllCountriesHQL();

    @Query(value = "SELECT * FROM country", nativeQuery = true)
    List<Country> getAllCountriesNative();

    Country findByCode(String code);

    Country findByName(String name);

    List<Country> findByNameContaining(String keyword);
}