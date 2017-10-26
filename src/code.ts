import * as data from "./data.json";

export namespace States {

  const statesData: [{name:string, abbr:string} ] = <any>data; 

  const tupled = statesData.map(d => [d.abbr.toLowerCase(), d.name])
  const abbr2Name = statesData.reduce( (map:{[key:string]: string}, data:{name:string, abbr:string}) => {
    map[data.abbr.toLowerCase()] = data.name;
    return map; 
  }, {})
  const name2Abbr = statesData.reduce( (map:{[key:string]: string}, data:{name:string, abbr:string}) => {
    map[data.name.toLowerCase()] = data.abbr;
    return map; 
  }, {})

  export function getName(abbr: string): string {
    const lcAbbr = abbr.toLowerCase()
    return abbr2Name[lcAbbr]
  }
  export function getAbbr(name: string): string {
    const lcName = name.toLowerCase()
    return name2Abbr[lcName]
  }
}