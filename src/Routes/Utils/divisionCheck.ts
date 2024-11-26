import { TDivisiones } from "../../interfaces";

export default function divisionChecker (division: string): TDivisiones {
    if(division === "A") return division
    else if(division === "B") return division
    else if(division === "C") return division
    else if(division === "D") return division
    else return "D"
}