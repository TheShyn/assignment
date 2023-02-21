import axios from "axios"
import { router, useEffect, useState } from "../../lib"
import VND from "../components/Fomat"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/header"

const Cart = function(){
    let user = JSON.parse(localStorage.getItem('user'))
    const [data, setData] = useState([])
    const [cart,setCart] =useState([])
    console.log(cart);
    let allMoney = cart && cart.map((curr)=>{
        return curr.quantity * curr.price
    }).reduce((accumulator, currentValue) => accumulator + currentValue,0)
    useEffect(function() {
        axios.get('http://localhost:3000/users')
        .then(function(dataFetch) {
            setData(dataFetch.data)
        });
        if(user){
            setCart(user.cart)

        }else{
            router.navigate('/login')

        }
    }, [])
    useEffect(function(){
        let downs = document.querySelectorAll('.down')
        let increase = document.querySelectorAll('.increase')
        downs.forEach(item=>{
            item.onclick = function(){
                let idProduct = item.getAttribute("data-id");
                setCart(prev => {
                    prev.forEach(item =>{
                        if(item.product === Number(idProduct)){
                            if(item.quantity > 1){
                                item.quantity -= 1
                            }
                        }
                    })
                    return prev
                })
                let newData= {
                    ...user,
                    cart
                }
                localStorage.setItem('user',JSON.stringify(newData))
                axios.put(`http://localhost:3000/users/${Number(idProduct)}`,
                    newData
                )
                .then(data => console.log(data))
                .catch(err => console.log(err))


            }
        })
        increase.forEach(item=>{
            item.onclick = function(){
                let idProduct = item.getAttribute("data-id");
                setCart(prev => {
                    prev.forEach(item =>{
                        if(item.product === Number(idProduct)){
                                item.quantity += 1
                        }
                    })
                    return prev
                })
                let newData= {
                    ...user,
                    cart
                }
                localStorage.setItem('user',JSON.stringify(newData))
                axios.put(`http://localhost:3000/users/${Number(idProduct)}`,
                    newData
                )
                .then(data => console.log(data))
                .catch(err => console.log(err))

            }
        })
        let delete_cart = document.querySelectorAll('#delete_cart')
        delete_cart.forEach(item=>{
            item.onclick = function() {
               let id=  item.getAttribute('data-id')
               let delete_product = cart.filter(item => item.product !== Number(id))
               setCart(delete_product)
               let newDataUser = {
                ...user,
                cart : delete_product
               }
               localStorage.setItem('user',JSON.stringify(newDataUser))
               axios.put(`http://localhost:3000/users/${Number(user.id)}`,
                newDataUser
                )
                .then(data => console.log(data))
                .catch(err => console.log(err))
            }
        })
    })
    return /*html*/`
    <div>
        ${Header()}
    </div>
    <main class='bg-[#f5f5f7] pb-[140px] flex justify-center'>
        <div class='ml-primary mr-[100px] pt-[20px]'>
            <p class=' text-title'>Giỏ hàng</p>
            <div class='flex mt-[30px] gap-[20px]'>
                <div class='max-w-[910px]'>
                    <div class=' text-normal'>
                        <div class=' bg-white px-[10px] py-[8px] rounded grid grid-cols-[3fr,2fr,2fr,2fr,1fr]'> 
                            <div class='flex gap-[15px] items-center px-[10px]'>
                                <input type ='checkbox' />
                                <span>Tất cả sản phẩm </span>
                            </div>
                            <div class='px-[10px]'>
                                Đơn giá
                            </div>
                            <div class='px-[10px]'>
                                Số lượng
                            </div>
                            <div class='px-[10px]'>
                                Thành tiền
                            </div>
                            <div class='flex items-center px-[10px] cursor-pointer'>
                                <ion-icon name="trash-outline"></ion-icon>
                            </div>
                        </div>
                    </div>
                    
                    <div class='mt-[20px] bg-white text-[14px] flex flex-col gap-[30px] py-[10px]'>
                        ${cart.map(item=> /*html */`
                            <div class='px-[10px] py-[8px] rounded grid lg:grid-cols-[3fr,2fr,2fr,2fr,1fr]'>
                                <div class='px-[10px] flex items-center gap-[15px]'>
                                    <input type ='checkbox' />
                                    <div class='flex gap-[3px]'>
                                        <div class='flex items-center'>
                                            <img class='max-w-[80px]' src = '${item?.image}'/>
                                        </div>
                                        <div class='flex flex-col gap-[5px]'>
                                            <span class='mt-[5px]'>${item?.name}</span>
                                            <span>Free ship</span>
                                        </div>
                                    </div>
                                </div>
                                <div class='px-[10px] my-auto'>${VND.format(item?.price)}</div>
                                <div class='flex items-center my-auto'>
                                    <span data-id='${item?.product}' class='border px-[10px] cursor-pointer down'>-</span>
                                    <span class='border px-[10px]'>${item?.quantity}</span>
                                    <span data-id='${item?.product}' class='border px-[10px] cursor-pointer increase'>+</span>
                                </div>
                                <div class='px-[10px] text-price font-[600] my-auto'>${VND.format(item?.price * item?.quantity)}</div>
                                <div data-id='${item?.product}' class='px-[10px] cursor-pointer my-auto' id='delete_cart'>
                                    <ion-icon name="trash-outline"></ion-icon>
                                </div>
                            </div>
                        `)}
                        
                    </div>
                </div>
                <div class='flex flex-col'>
                    <div class=' bg-white px-[15px] py-[10px] rounded  text-normal'>
                        <p class='font-[600]'>Tiki khuyến mãi</p>
                        <div class='flex items-center gap-[5px] mt-[20px] justify-between'>
                            <input type='text' class='border outline-none rounded p-[5px] w-[70%]'/>
                            <button class='border bg-border text-white p-[5px] rounded active:bg-white active:text-black'>Áp dụng</button>
                        </div>
                    </div> 
                    <div class=' bg-white px-[15px] py-[10px] rounded mt-[20px] text-[14px]'>
                        <div class='flex justify-between'>
                            <span>Tạm tính</span>
                            <span class='font-[600]'>${VND.format(allMoney)}</span>
                        </div>
                        <div class='border my-[20px]'></div>
                        <div class='flex justify-between items-end'>
                            <span class='mb-[2px]'>Tổng tiền</span>
                            <span class='font-[600] text-[20px] text-price'>${VND.format(allMoney)}</span>
                        </div>
                        <div class='pb-[40px]'>
                            <button class='bg-price font-[600] rounded mt-[30px] min-w-[250px] text-white py-[10px] text-[14px]
                            active:bg-white active:text-price active:border-price active:border border-price border'>Mua hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <div class='mt-[20px]'>
        ${Footer()}
    </div>
    `
}
export default Cart