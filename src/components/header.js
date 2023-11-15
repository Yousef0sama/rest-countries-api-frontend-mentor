"use client"

import { MODE } from "@/app/page";
import { Mode } from "@/functions/functions";

import { useContext } from "react"

export default function Header() {

  const mode = useContext(MODE);

  return (
    <div className="row header element">
      <div className="col col-7">
        <h5>Where in the world?</h5>
      </div>
      <div className="col col-5">
        <span className="float-end" onClick={() => {Mode(mode.mode, mode.setMode)}}> <i className={`bi bi-moon${mode.mode === "dark" ? "-fill" : ""}`}></i> Dark Mode </span>
      </div>
    </div>
  )
}