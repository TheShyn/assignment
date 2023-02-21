import axios from "axios";
import {router, useEffect,useState} from '../../../lib'
import ItemSearch from "../itemSeach";
const Header = function() {
    let cart = localStorage.getItem("quantityCart");
    let user = JSON.parse(localStorage.getItem('user'))
    const [data,setData]= useState([])
    useEffect(function() {
        axios.get('http://localhost:3000/books')
        .then(function(dataFetch) {
            setData(dataFetch.data)
        });  

    }, [])
    useEffect(()=>{
        const search = document.querySelector('.searchEle')
        const inputSeach  = document.querySelector('#search')
        if(inputSeach){
            inputSeach.oninput=function(e){
                let sameEle = data.filter(item => item.name.includes(e.target.value))
                if(sameEle.length){
                    search.innerHTML = ''
                    sameEle.map(item => search.innerHTML += ItemSearch(item))
                    
                }else{
                    search.innerHTML = 'Không có thông tin sản phẩm'
                }
                if(!inputSeach.value.length){
                    search.classList.add('hidden')
                }else{
                    search.classList.remove('hidden')

                }
            }   
        }
        const logout = document.querySelector('#logout')
        if(logout){
            logout.onclick = function(){
                localStorage.clear();
                router.navigate('/login')
            }
        }


    })
    return `
    <div class='bg-primary h-[100px] flex items-center justify-between px-primary'>
        <div class='mr-[110px]'>
            <a href ='/'>
                <img src = 'http://127.0.0.1:5173/imgs/Logo.png' alt ='LOGO'/>
            </a>
        </div>   
        <div class='flex relative'>
            <input type='text' id='search' class='outline-none min-w-[600px] py-[10px] px-[15px]' placeholder='Tìm kiếm'/>
            <button class='bg-[#0D5CB6] py-[10px] px-[15px] text-white flex items-center gap-[5px]'>
                <ion-icon class='text-[20px]' name="search-outline"></ion-icon>
                <span class='text-normal'>Tìm kiếm</span>
            </button>
            <div class='absolute shadow-sm top-[110%] bg-white w-full text-normal searchEle max-h-[500px] overflow-y-scroll'>
            </div>
        </div>
        <div class='ml-[30px] flex'>
            <div>
                ${user ? 
                    `<div href='' class='flex items-center gap-[10px] text-white'>
                        <ion-icon class='text-[20px] cursor-pointer' name="person-outline"></ion-icon>
                        <li class='list-none flex items-center gap-[3px]'>
                            <div class='text-normal cursor-pointer group relative '>
                                <span>Tài khoản</span>
                                <ion-icon name="caret-down-outline"></ion-icon>
                                <ul class='absolute hidden duration-300 group-hover:block rounded py-[4px] w-[200px] shadow-sm bg-white text-black top-[110%] right-0'>
                                    <li class='px-[10px] py-[6px] hover:bg-[#ccc]'>Thông tin cá nhân</li>
                                    ${user.role == 'admin' ? `<li ><a class='px-[10px] py-[6px] hover:bg-[#ccc] block' href='/admin'>Quản trị</a></li>` : ''}
                                    <li class='px-[10px] py-[6px] hover:bg-[#ccc]'>Giỏ hàng</li>
                                    <li id='logout' class='px-[10px] py-[6px] hover:bg-[#ccc]'>Đăng xuất</li>
                                </ul>
                            </div>
                        </li>
                    </div>`
                    : 
                    `<div class='text-white text-normal'>
                        <a href ='/login'>Đăng kí</a>
                        /
                        <a href ='/login'>Đăng nhập</a>
                    </div>`
                }
            </div>
            <div>
                <a href='/cart' class='ml-[30px] flex items-center  text-white relative text-normal'>
                    <ion-icon class='text-[20px]' name="cart-outline"></ion-icon>
                    <span>Giỏ hàng</span>
                    <span class='absolute bg-[#FDD835] px-[7px] bottom-[60%] right-[60%] rounded-full text-black number_cart'>${cart ? cart : '0'}</span>
                </a>
            </div>
        </div>
    
    </div>
    `
}

export default Header;