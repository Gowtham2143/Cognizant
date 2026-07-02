package com.cognizant.repository;

import com.cognizant.entity.Country;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CountryRepository extends JpaRepository<Country, String> {

    Country findByCode(String code);

    Country findByName(String name);

    List<Country> findByNameContaining(String keyword);
}