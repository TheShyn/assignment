import axios from "axios";
import { router, useEffect, useState } from "../../lib"
const Login = function () {
    const [data, setData] = useState([])
    useEffect(function() {
        axios.get('http://localhost:3000/users')
        .then(function(dataFetch) {
            setData(dataFetch.data)
        });     
    }, [])
    function showErr(input, message) {
        let parent = input.parentElement
        let err = parent.querySelector('.form-message')
        err.innerHTML = message
    }
    function success(input, message = '') {
        let parent = input.parentElement
        let err = parent.querySelector('.form-message')
        err.innerHTML = message
    }
    function checkEmpty(list) {
        let isErr = false
        list.forEach(function (input) {
            input.value = input.value.trim()
            if (!input.value) {
                isErr = false
                showErr(input, 'Không được bỏ trống')
            } else {
                isErr = true
                success(input, '')
            }
        })
        return isErr
    }
    function checkEmail(input){
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        input.value = input.value.trim()
        let isMailErr = false
        if(!regex.test(input.value)){
            isMailErr=false
            showErr(input, 'Mail không hợp lệ')
        }else{
            isMailErr=true
            success(input, '')
        }
        return isMailErr
    }
    useEffect(() => {
        let form_input = document.querySelectorAll('.form_input')
        let form = document.querySelector('#form-1')
        let email = document.querySelector('#email')
        let password = document.querySelector('#password')
        form.onsubmit  = async function (e) {
            e.preventDefault()
            let isEmpty = checkEmpty(form_input)
            let isMailErr = checkEmail(email)
            data.forEach(item =>{
                if(isEmpty && isMailErr){
                    if(item.email === email.value && item.password === password.value && item.status === 'enabled'){
                        form_input.forEach(item=> success(item,''))
                        localStorage.setItem('user',JSON.stringify(item))
                        localStorage.setItem('quantityCart',JSON.stringify(item.cart.length))
                        router.navigate('/')
                        
                    }else{
                        form_input.forEach(item=> showErr(item,'Tài khoản hoặc mật khẩu không phù hợp'))
                    }
                }
            })
        }
    })
    return /*html */`
        <main class='flex relative bg-gradient-to-b from-[#9fe1f9] to-[#d1effa] h-[100vh]'>
            <div class='min-w-[400px] m-auto '>
                <div class='w-full rounded bg-white py-[10px] px-[15px]'>
                    <div class='flex items-center gap-[10px] text-normal'>
                        <ion-icon class='text-[50px]' name="person-circle-outline"></ion-icon>
                        <div class='flex flex-col'>
                            <span class='text-[15px]'>Đăng nhập</span>
                            <span>Bạn chưa có tài khoản ? <a class='text-border' href =''>đăng ký</a> ngay</span>
                        </div>
                    </div>
                    <form id='form-1' class='text-normal mt-[20px] flex flex-col'>
                        <div class=' form-group mb-[15px]'>
                            <input id='email' type="text " class='border rounded w-full px-[10px] py-[8px] outline-none form_input' placeholder='Nhập email hoặc sđt'/>
                            <span class="form-message text-price italic font-normal ml-[3x]"></span>
                        </div>
                        <div class=' form-group'>
                            <input id='password' type="text " class='border rounded w-full px-[10px] py-[8px] outline-none form_input' placeholder='Nhập mật khẩu'/>
                            <span class="form-message text-price italic font-normal ml-[3x]"></span>
                        </div>
                        <span class="form-message"></span>
                  
                        <div class='text-normal mt-[20px]'>
                            <p>Quên mật khẩu ? nhấn vào <a class='text-border' href=''>đây</a></p>
                        </div>
                        <div class='pb-[40px]'>
                            <button class='bg-price font-[600] rounded mt-[30px] w-full text-white py-[10px] text-[14px]
                            active:bg-white active:text-price active:border-price active:border border-price border'>Đăng nhập</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class='absolute w-[80%] top-[85%] left-[50%] translate-x-[-50%]'>
                <img class='w-full' src ='/imgs/city.png'/>
            </div>
        </main>
    `
}
export default Login