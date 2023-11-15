"use client"

// styles
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/app/page.scss"

// components
import Header from "@/components/header.js";
import Countries from "@/components/countries";
import Country from "@/components/country";

// helpers
import { createContext, useEffect, useState } from "react"
import Axios from "axios";
import MoonLoader from "react-spinners/MoonLoader";

export const MODE = createContext();
export const COUNTRY = createContext();

export default function Home() {

  const [mode, setMode] = useState("light");
  const [country, setCountry] = useState("none");
  const [countries, setCountries] = useState(null);

  useEffect(() => {

    Axios.get("./json/data.json").then(
      (res) => {
        setInterval(() => {
          setCountries(res.data);
        }, 3000)
      }
    )

  }, [])

  return (
    <>
      {
        countries ?

        <div className={`container-fluid ${mode}`}>

          <MODE.Provider value={{mode, setMode}}>
          <Header />
          </MODE.Provider>


          <COUNTRY.Provider value={{country, setCountry, countries, setCountries}}>

          {
            country === "none" ? <Countries /> : <Country />
          }

          </COUNTRY.Provider>

        </div>

        :

        <MoonLoader
          cssOverride={{
            display:"block",
            margin:"43vh auto"
          }}
          color="rgb(0, 93, 255)"
        />

      }

    </>
  )
}
