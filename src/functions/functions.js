
export const Mode = (mode, setMode) => {

  mode === "dark" ? setMode("light") : setMode("dark")

}

export const toggleList = (list, setList) => {

  list === "close" ? setList("open") : setList("close")

}

export const SetRegion = (region, setRegion, setList) => {

  setRegion(region);
  setList("close");

}