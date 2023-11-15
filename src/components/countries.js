"use client"

import { useContext, useEffect, useState } from "react"

import { COUNTRY } from "@/app/page"
import { toggleList } from "@/functions/functions";
import { SetRegion } from "@/functions/functions";

export default function Countries() {

  const Countries = useContext(COUNTRY);

  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [list, setList] = useState("close");
  const [regionArr, setRegionArr] = useState(Countries.countries);
  const [arr, setArr] = useState(regionArr);

  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  useEffect(() => {

    const newArr = region === "All" ? Countries.countries : Countries.countries.filter((e) => {return e.region == region});

    setRegionArr(newArr)

  }, [region]);

  useEffect(() => {

    const newArr = search === "" ? regionArr : regionArr.filter((e) => {return e.name.toLowerCase().includes(search.toLowerCase())});

    setArr(newArr)

  }, [search]);

  return (
    <div className="row home">

      {/* filter */}

      <div className="col col-12 row fillter">
        <div className="col col-md-6 col-12">
          <span className="icon"><i className="bi bi-search"></i></span> <input type="text" placeholder="Search for a country..." className="element" onChange={e => setSearch(e.target.value)}/>
        </div>
        <div className="col col-md-6 col-12">
          <span className="select element" onClick={() => {toggleList(list, setList)}} >{region} <i className="bi bi-chevron-down float-end"></i></span>
          <span className={`list element ${list}`}>
            {
              regions.map((item) => {
                return(
                  <span key={item} className="item" onClick={() => {SetRegion(item, setRegion, setList)}}> {item} </span>
                )
              })
            }
          </span>
        </div>
      </div>

      {/* countries */}

      <div className="col col-12 row countries">
        {
          arr.map(({name, population, flag, capital, region}, i) => {
            return(
              <div key={i} className="col col-xxl-3 col-xl-4 col-md-6 col-12 row country">
                <div className="col col-12 row element" onClick={() => {Countries.setCountry(name)}}>
                  <div className="col col-12 flag">
                    <img src={flag} alt={name}/>
                  </div>
                  <div className="col col-12 name">
                    <h5>{name}</h5>
                  </div>
                  <div className="col col-12 details">
                    <span><b>Population:</b> {population}</span>
                    <span><b>Region:</b> {region}</span>
                    <span><b>Capital:</b> {capital}</span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}