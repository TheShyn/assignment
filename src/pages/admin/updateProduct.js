import axios from "axios";
import { router, useEffect, useState } from "../../../lib";
import HeaderAdmin from "../../components/admin/layout/header"
import SideLeft from "../../components/admin/layout/sideLeft"

const UpdateProduct = function (id){
    const [data, setData] = useState([])
    const [product,setProduct] = useState({})
    const [seller,setSeller] = useState({})
    const [persen,setPersen] = useState({})
    let categories = data?.length && data.map(item=>{
        const {categories} = item
        return categories
    })
    const notDuplicate = categories?.length && categories.filter(
        (obj, index) =>
        categories.findIndex((item) => item.id === obj.id) === index
    );
    useEffect(function() {
        axios.get('http://localhost:3000/books')
        .then(function(dataFetch) {
            setData(dataFetch.data)

        });     

        axios.get(`http://localhost:3000/books/${id}`)
        .then((data)=>{
            setProduct(data.data)
            setSeller(data.data.current_seller)
            setPersen(100 - data.data.current_seller?.price / data.data.original_price * 100)
        })

    }, [])
    const updateBook = function(e){
        e.preventDefault()
        const name = document.querySelector('#name').value
        const original_price = document.querySelector('#price').value
        const category = document.querySelector('#category').value
        const description = document.querySelector('#description').value
        let categories = notDuplicate.filter(item => item.id === Number(category))[0]
        console.log( original_price * (persen/100));
        axios.put(`http://localhost:3000/books/${id}`,{
            ...product,
            categories,
            description,
            original_price,
            name,
            current_seller: {
                ...seller,
                price: original_price - (original_price * (persen/100))
            }
        })
        .then(data => {
            router.navigate('/admin/products')
            console.log(data);
        })
    }
    useEffect(function(){
        const form_update = document.querySelector('#form_update')
        form_update.onsubmit = updateBook
    })
    return /*html */`
    <main class="relative ">
        <div class='fixed w-[80%] top-0 right-[0]'>
            ${HeaderAdmin()}
        </div>
        <div class='fixed w-[20%] left-0 top-0 bg-[#4075f0] h-[100vh]'>
            ${SideLeft()}
        </div>
        <div class='mt-[70px] ml-[20%]'>
            <section class="bg-white ">
                <div class="max-w-2xl px-4 py-8 mx-auto lg:py-16">
                    <h2 class="mb-4 text-xl font-bold text-gray-900 ">Sửa sản phẩm</h2>
                    <form action="#" id='form_update'>
                        <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                            <div class="sm:col-span-2">
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Tên sản phẩm</label>
                                <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " value="${product?.name}" placeholder="Type product name" required="">
                            </div>
                            <div class="w-full">
                                <label for="price" class="block mb-2 text-sm font-medium text-gray-900 ">Giá</label>
                                <input type="text" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " value="${product?.original_price}" placeholder="Product price" required="">
                            </div>
                            <div class="w-full">
                                <label for="category" class="block mb-2 text-sm font-medium text-gray-900 ">Thể loại</label>
                                <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                    <option value="${product?.categories?.id}">${product?.categories?.name}</option>
                                    ${notDuplicate && notDuplicate.filter(item => item?.id !== product?.categories?.id).map(item => `<option value="${item?.id}">${item?.name}</option>`)}
                                </select>
                            </div> 
                            <div class="sm:col-span-2">
                                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 ">Mô tả</label>
                                <textarea id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Write a product description here...">
                                ${product?.description}</textarea>
                            </div>
                        </div>
                        <div class="space-x-4">
                            <button type="submit" class="text-white border border-border bg-border  hover:bg-white hover:text-border font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Lưu 
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    </main>
    `
}
export default UpdateProduct