import { render } from "../lib"
import HomePage from "./pages/home"
import Navigo from "navigo"
import './style/main.css'
import Detail from "./pages/detail"

// Khai bao DOM
var app = document.querySelector("#app")

// app.innerHTML = ProductPage()


const router = new Navigo()
router.on('/', function() {
    console.log("home page");
    render(HomePage(), app)
})

router.on('/detail/:id', function() {
    console.log("Product page");
    render(Detail(), app)
})
// router.on("/detail/:id", ()=>{
//     render(DetailPage(),app)
// })

router.resolve()

