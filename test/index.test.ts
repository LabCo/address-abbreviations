import {States} from "../src"
import {} from "jest"

describe("State abreviations", () => {

  it("should give the name from an abbreviation", () => {
    const maName = States.getName("ma")
    expect(maName).toEqual("Massachusetts")    
  })

  it("should give the abbreviation from the name", () => {
    const caAbbr = States.getAbbr("california")
    expect(caAbbr).toEqual("CA")    
  })

})
