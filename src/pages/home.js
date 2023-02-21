import Breadcum from "../components/breadcum/Breadcum"
import {  useState, useEffect} from "/lib"
import Categories from "../components/categories/Categories"
import Filter from "../components/filter/Filter"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/header"
import Products from "../components/product/Product"
import axios from "axios"
import Loading from "../components/loading/Loading"
import { router } from "../../lib"
var HomePage = function () {
    let url = new URLSearchParams(location.search)
    let filterCate = url.get('idCate')
    let status = url.get('status')
    const [data, setData] = useState([])
    const[render,setRender] = useState([])
   
    const [filterCats,setFilterCats] =  useState([])
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
            setRender(dataFetch.data)
        });     

        if(filterCate) {
            axios.get(`http://localhost:3000/books?categories.id=${Number(filterCate)}`)
            .then((data)=>{
                setFilterCats(data.data)
            })
        }
    }, [])
    useEffect(()=>{
        const filterBooks = document.querySelectorAll('.filter_books')
        filterBooks.forEach(item=>{
            if(status){
                let a = document.querySelector('.text-border.border-solid.filter_books')
                if(a){
                    a.classList.remove('text-border','border-b-[4px]','border-border','border-solid')
                }
                //attribute === status &&  item.classList.add('border-b-[4px]','border-border','border-solid','text-[#0d5cb6]')
                const best_seller = data.filter(item => item?.quantity_sold?.text && item?.quantity_sold?.text.split(' ').pop().length > 4)
                const attribute = item.getAttribute('data-status')
                console.log(status == attribute);
                const chip_books = data.filter(item => Number(item.original_price) < 200000)
                status == 'all' && setRender(data)
                status == 'best_seller' && setRender(best_seller)
                status == 'new_books' && setRender(chip_books)
                // status == 'chip_books' && setRender(data.slice(0,8))
            }
            
            // attribute == 'all' &&  setRender(data)
            // attribute == 'best_seller' &&  setRender(best_seller)
            // attribute == 'new_books' &&  setRender(data)
            // attribute == 'chip_books' &&  setRender(data)
            // attribute == 'expensive_books' &&  setRender(data)
        })
    },[status, data])
    return `
    <div>
        ${Header()}
    </div>
    ${data.length ? 
    
    `    <main value='1'>
            <div>
                <div class='px-primary bg-[#F5F5FA] text-normal'>
                    ${Breadcum(
                    [
                        {
                            name: 'Trang chủ',
                            href: '/'
                        },
                        {
                            name: 'Tất cả sản phẩm',
                            href: '/'
                        },
                    ]
                )}
                </div>
                
                <div class='mt-[14px] flex justify-center  gap-[20px] '>
                    <div class=' ml-primary max-w-[200px]'>
                        ${Categories(notDuplicate)}
                    </div>
                    <div class='mt-[16px]']>
                        <h2 class='mb-[12px] pl-[15px] text-[20px] font-bold'>NHÀ SÁCH TIKI</h2>
                        <div class='max-w-[900px] '>
                            <img src ='/imgs/banner.png' alt='Banner'/>
                        </div>
                        <div class='mt-[28px]'>
                            ${Filter()}
                        </div>
                        <div class='mt-[17px] '>
                            <div class='flex gap-[10px]'>
                                <button class='py-[5px] px-[18px] bg-[#EEEEEE] rounded-[50px]'>
                                    <img src ='./imgs/Tikinow.png' class='w-[70px]' alt='service' />
                                <button>
                                <button class='py-[5px] px-[18px] bg-[#EEEEEE] rounded-[50px]'>
                                    <img src ='./imgs/Freeship.png' class='w-[90px]' alt='service' />
                                <button>
                            </div>
                            <div class='mt-[23px] grid grid-cols-4 gap-[47px]'>
                                ${((filterCate && filterCats ) || (status && render) || data).map((item) => {
                                    return Products(item)
                                }).join(' ')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>`
    :
        `${Loading()}`
    }
    <div class='mt-[130px]'>
        ${Footer()}
    
    </div>
    `
}

export default HomePage