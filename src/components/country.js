"use client"

import { useContext, useEffect, useState } from "react"

import { COUNTRY } from "@/app/page"


export default function Country() {

  const Countries = useContext(COUNTRY);
  const country = Countries.countries.filter(
    (e) => {
      return e.name == Countries.country
    }
  )[0];

  const [borders, setBorders] = useState([]);

  useEffect (() => {

    if (country.borders != null) {

      const bordersOBJ = Countries.countries.filter(
        (e) => {
          return country.borders.includes(e.alpha3Code);
        }
      );
  
      const borders = bordersOBJ.map(
        (e) => {
          return e.name;
        }
      )

      setBorders(borders)

    }

  }, []);

  return (
    <div className="row country">
      <div className="col col-12 back">
        <span className="element" onClick={() => {Countries.setCountry("none")}}> <i className="bi bi-arrow-left"></i> Back</span>
      </div>
      <div className="col col-12 row details">
        <div className="col col-lg-5 col-12 row">
          <div className="col col-12 flag">
            <img className="element" src={country.flag} alt={country.name} />
          </div>
        </div>
        <div className="col col-lg-7 col-12 detail">
          <div className="name">
            <h3> {country.name} </h3>
          </div>
          <div className="row">
            <div className="col col-md-6 col-12 des">
              <span>
                <b>Native Name: </b>
                <span> {country.nativeName} </span>
              </span>
              <span>
                <b>Population: </b>
                <span> {country.population} </span>
              </span>
              <span>
                <b>Region: </b>
                <span> {country.region} </span>
              </span>
              <span>
                <b>Sub Region: </b>
                <span> {country.subregion} </span>
              </span>
              <span>
                <b>Capital: </b>
                <span> {country.capital} </span>
              </span>
            </div>
            <div className="col col-md-6 col-12 des">
              <span>
                <b>Top Level Domain: </b>
                <span> {country.topLevelDomain} </span>
              </span>
              <span>
                <b>Currencies: </b>
                {
                  country.currencies.map(
                    ({code}, i) => {
                      return(
                        <span key={code}> { i + 1 < country.currencies.length ? code + ", " : code } </span>
                      )
                    }
                  )
                }
              </span>
              <span>
                <b>Languages: </b>
                {
                  country.languages.map(
                    ({name}, i) => {
                      return(
                        <span key={name}> {i + 1 < country.languages.length ? name + ", " : name } </span>
                      )
                    }
                  )
                }
              </span>
            </div>
            <div className="col col-12 des">
            <span>
                <b>Borders: </b>
                <span className="borders row">
                  {
                    borders.map(
                      (border) => {
                        return(
                          <span key={border} className="col col-md-4 col-6">
                            <span className="element"> {border} </span>
                          </span>
                        )
                      }
                    )
                  }
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}