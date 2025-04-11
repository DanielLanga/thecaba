
import { Header, prin} from "./functions.js"
Header()

//#region banner

let divbanner = document.createElement("div")
divbanner.id = "divbanner"
divbanner.className = "divbanner"
document.body.appendChild(divbanner)
let divimg0 = document.createElement("div")
divimg0.id = "divimg0"
divimg0.className = "divimg0"
divbanner.appendChild(divimg0)
let divcontainer = document.createElement("div")
divcontainer.id = "divcontainer"
divcontainer.className = "divcontainer"
divbanner.appendChild(divcontainer)
let h1 = document.createElement("h1")
h1.id = "h1"
h1.className = "h1"
h1.textContent = "The Caba"
divcontainer.appendChild(h1)

//#endregion banner

//#region 2

    prin()
//#endregion


