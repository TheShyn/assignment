import {  render, router } from "../lib"
import HomePage from "./pages/home"
import './style/main.css'
import Detail from "./pages/detail"
import Cart from "./pages/cart"
import Login from "./pages/login"
import Dashboard from "./pages/admin/dashboard"
import ManaProducts from "./pages/admin/ManaProducts"
import UpdateProduct from "./pages/admin/updateProduct"
import ManaUser from "./pages/admin/manaUser"
import UpdateUser from "./pages/admin/updateUser"
// Khai bao DOM
var app = document.querySelector("#app")
// app.innerHTML = ProductPage()
router.on('/', function() {
    render(HomePage, app)
})
router.on('/home', function() {
    render(HomePage, app)
})
router.on('/login', function() {
    render(Login, app)
})
router.on('/detail/:id', function({data}) {
    console.log("Product page");
    render(()=>Detail(data.id), app)
})
router.on('/cart', function() {
    render(Cart, app)
})
router.on('/admin', function() {
    render(Dashboard, app)
})
router.on('/admin/products', function() {
    render(ManaProducts, app)
})
router.on('/admin/products/:id', function({data}) {
    render(()=>UpdateProduct(data.id), app)
})
router.on('/admin/users', function({data}) {
    render(ManaUser, app)
})
router.on('/admin/users/:id', function({data}) {
    render(()=>UpdateUser(data.id), app)
})

router.resolve()

