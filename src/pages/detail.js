import Breadcum from "../components/breadcum/Breadcum"
import { useState, useEffect } from "/lib"
import VND from "../components/Fomat"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/header"
import Products from "../components/product/Product"
import axios from "axios"
import Loading from "../components/loading/Loading"
import { router } from "../../lib"
/*html*/
const Detail = function (id) {
    const user = JSON.parse(localStorage.getItem('user'))
    const [cart,setCart] =useState([])
    const [quantity, setQuantity] = useState(1)
    const [data, setData] = useState({})
    const [datas, setDatas] = useState([])
    // lấy 5 sản phẩm liên quan
    const relate = datas.filter(item => {
        return item?.categories.id === data?.categories?.id && item.id !== Number(id)
    }).slice(0, 5)
    useEffect(function () {
        axios.get(`http://localhost:3000/books/${id}`)
            .then(function (dataFetch) {
                setData(dataFetch.data)
            });
        axios.get(`http://localhost:3000/books`)
            .then(function (dataFetch) {
                setDatas(dataFetch.data)
            });
            if(user){
                setCart(user.cart)    

            }
    }, [])
    const showMore = function () {
        const btnShow = document.querySelector('#showMore_btn')
        const shortBtn = document.querySelector('#short_btn')
        const desc = document.querySelector('#desc')
        desc.innerHTML = `${data?.description}`

        btnShow.classList.add('hidden')
        shortBtn.classList.remove('hidden')
    }
    const shortCut = function () {
        const btnShow = document.querySelector('#showMore_btn')
        const shortBtn = document.querySelector('#short_btn')
        const desc = document.querySelector('#desc')
        desc.innerHTML = `${data?.short_description}`

        btnShow.classList.remove('hidden')
        shortBtn.classList.add('hidden')
    }
    useEffect(function () {
        const increaseBtn = document.querySelector('#increase-btn')
        if (increaseBtn) {
            increaseBtn.onclick =  () => {
                setQuantity(quantity + 1)
            }
        }
        const downBtn = document.querySelector('#down-btn')
        if (downBtn) {
            downBtn.onclick =  () => {
                quantity > 1 && setQuantity(quantity - 1)
            }
        }
        
        const btnShow = document.querySelector('#showMore_btn')
        const shortBtn = document.querySelector('#short_btn') 
        if (btnShow) {
            btnShow.onclick = showMore
        }
        if(shortBtn){
            shortBtn.onclick = shortCut
        }
        const imgs_small = document.querySelectorAll('.imgs_small')
        const big_img = document.querySelector('#big_img')
        if(imgs_small){
            imgs_small.forEach(item=>{
                item.onclick = ()=>{
                    document.querySelector('.border.border-blue-700.imgs_small').classList.remove('border','border-blue-700')
                    item.classList.add('border-blue-700','border')
                    big_img.src = item.src
                }
            })
        }
        const addToCart_btn = document.querySelector('#addToCart_btn')
        if(addToCart_btn){
            addToCart_btn.onclick = ()=>{
                if(!user){
                    router.navigate("/login")
                }else{
                    let newProduct = {
                        product : data.id,
                        name: data?.name,
                        quantity,
                        price: Number(data?.original_price),
                        image: data?.images?.[0]?.base_url,
                        seller_price: data?.current_seller?.price
                    }
                    console.log(newProduct);
                    let duplicateArr = {}
                    cart.forEach(item=>{
                        if(item.product === newProduct.product){
                            duplicateArr ={
                                ...item,
                                quantity: item.quantity + newProduct.quantity
                            }
                        }
                    })
                    let cartItem = [
                        ...cart.filter(item => item.product !== newProduct.product),
                        Object.entries(duplicateArr).length ? duplicateArr : newProduct
                    ]
                    let newData = {
                        ...user,
                        cart: cartItem
                    }
                    // let newData = 
                    //     [
                    //         {
                    //           product: 1,
                    //           quantity: 4,
                    //           price: 138000,
                    //           name: "101 BÍ KÍP SỐNG SÓT NƠI CÔNG SỞ-Sửa lần 6",
                    //           image: "https://salt.tikicdn.com/ts/product/82/82/80/c542073200c6e95d3e89840b2f41ce2e.jpg",
                    //           seller_price: 131100
                    //         }
                    //       ]
                    
                    localStorage.setItem('user',JSON.stringify(newData))
                    localStorage.setItem('quantityCart',JSON.stringify(newData.cart.length))
                    let number_cart = document.querySelector('.number_cart')
                    number_cart.innerHTML = newData.cart.length
                    axios.put(`http://localhost:3000/users/${user.id}`,newData)
                }

            }
        }



    })


    return /*html */`
    <div>
        ${Header()}
    </div>

    ${!data.length && !datas.length ?
            `${Loading()}`
            :
            `<main>
        <div class='px-primary bg-[#F5F5FA] text-normal'>
            ${Breadcum(
                [
                    {
                        name: 'Trang chủ',
                        href: '/'
                    },
                    {
                        name: `${data.categories.name}`,
                        href: `/home?cate=${data.categories.id}`
                    },
                    {
                        name: `${data.name}`,
                        href: `/detail/${data.id}`
                    },
                ]
            )}
        </div>
        <div class='pl-[110px] mt-[20px] flex gap-[30px]'>
            <div class=''>
                <img id='big_img' class='w-[444px] border h-[444px] object-cover ' src ='${data?.images?.[0]?.base_url}' />
                <div class= 'flex gap-[20px] mt-[10px]'>
                    ${data?.images?.map((item, i) => {
                if (i == 0) {
                    return `<img class=' cursor-pointer max-w-[62px] border border-blue-700 imgs_small' src ='${item.base_url}' />`
                } else {
                    return `<img class=' cursor-pointer max-w-[62px] imgs_small' src ='${item?.base_url}' />`
                }
            }).slice(0, 4).join('')}
                </div>
            </div> 
            <div class='ml-[30px] border-l pl-[20px] max-w-[700px]'>
                <ul class='text-normal flex gap-[10px]'>
                    ${data.specifications?.[0].attributes.map((item, i) => {
                if (i < 3) {
                return /*html */ `
                        <li>${item.name}: <span class='text-blue-500'>${item.value}</span></li>
                    `
                }
            }).join('')}
                </ul>
                <h1 class='text-title mt-[10px]'>${data.name}</h1>
                <div class='mt-[8px] flex gap-[7px] text-normal dsd items-center'>
                    <div class='flex'>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                    </div>
                    <p class='text-[#787878] text-normal'>(Xem 2942 đánh giá)</p>
                    <span> | </span>
                    <p class='text-[#787878] text-normal'>${data?.quantity_sold?.text || 'đã bán 1000+'}</p>
                </div>
                <div class ='flex items-end gap-[8px] mt-[20px] bg-[#FAFAFA] p-[15px] pb-[30px]'>
                    <p class='text-[32px] font-medium text-price'>${VND.format(data?.current_seller?.price)}</p>
                    <p class='text-[#787878] mb-[8px] text-normal'>${VND.format(data?.original_price)}</p>
                    <p class='border mb-[8px] border-price rounded-[5px] bg-bgPrice text-price text-normal'>${(100 - data?.current_seller?.price / data?.original_price * 100).toFixed(1)}%</p>
                </div>
                <div class=' mt-[30px] py-[50px] border-y'>
                    <p class='font-medium'>Số lượng</p>
                    <div class='flex items-center'>
                        <button id="down-btn" class='border px-[10px]'>-</button>
                        <p  class='border px-[10px]' >${quantity > 0 ? quantity : 1}</p>
                        <button id="increase-btn" class='border px-[10px]'>+</button>
                    </div>
                </div>
                <div class='border-b pb-[40px]'>
                    <button id='addToCart_btn' class='active:bg-white active:text-price active:border-price active:border border-price border
                     bg-price mt-[30px] min-w-[300px] text-white py-[10px] text-[14px]'>Chọn mua</button>
                
                </div>
            </div> 
        </div>
        <div class='px-primary text-[20px]'>
            <p class=' mt-[55px]'>Sản Phẩm Tương Tự</p>
            <div class='mt-[23px] grid grid-cols-5 gap-[24px]'>
                ${relate.map(item => Products(item)).join('')}
            </div>
        </div>
        <div class='px-primary text-[20px] mt-[55px] max-w-[1000px]'>
            <p class=''>${data.specifications?.[0].name}</p> 
            <div class='mt-[8px] '>
                <table class='w-full'>
                    ${data.specifications?.[0].attributes.map((item, i) => {
                i += 1
                return /*html */ `
                        <tr class='' >
                            <td class='bg-[#EFEFEF] w-[220px] text-normal py-[8px] pl-[15px]'>${item.name}</td>
                            <td class='text-normal pl-[15px] ${i % 2 == 0 ? 'bg-[#FAFAFA]' : ''}'>${item.value}</td>
                        </tr>
                        `
            }).join('')}
                    
                </table>
            </div>   
        </div>
        <div class='px-primary text-[20px] mt-[55px] max-w-[1000px]'>
            <p class='mb-[11px]'>Mô tả sản phẩm</p> 
            <p id='desc' class='text-normal desc_detail'>${data.short_description}</p>
            <div class='flex justify-center'>
                <button id='showMore_btn' class='border border-[#189EFF] text-[14px] text-[#189EFF] mt-[30px] min-w-[250px] py-[6px] hover:text-white duration-500 hover:bg-[#189EFF] '
                >Xem thêm nội dung</button>
                <button id='short_btn' class='hidden border border-[#189EFF] text-[14px] text-[#189EFF] mt-[30px] min-w-[250px] py-[6px] hover:text-white duration-500 hover:bg-[#189EFF] '
                >Ẩn bớt nội dung</button>
            </div>
        </div>
    </main>
    `
        }

    <div class='mt-[130px]'>
        ${Footer()}
    </div>
`
}

export default Detail