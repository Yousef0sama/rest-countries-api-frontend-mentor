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
import { createContext, useState } from "react"

export const MODE = createContext();
export const COUNTRY = createContext();

export default function Home() {

  const [mode, setMode] = useState("light");
  const [country, setCountry] = useState("none");

  return (
    <div className={`container-fluid ${mode}`}>

      <MODE.Provider value={{mode, setMode}}>
        <Header />
      </MODE.Provider>

      <COUNTRY.Provider value={{country, setCountry}}>

        {
          country === "none" ? <Countries /> : <Country />
        }

      </COUNTRY.Provider>

    </div>
  )
}
