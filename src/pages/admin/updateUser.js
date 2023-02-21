import axios from "axios"
import { router, useEffect, useState } from "../../../lib"
import HeaderAdmin from "../../components/admin/layout/header"
import SideLeft from "../../components/admin/layout/sideLeft"

const UpdateUser = function(id){
    const [data, setData] = useState({})
    let allRoles = ['admin','user']
    let roles = allRoles.filter(item => item != data.role )
    useEffect(function() { 
        axios.get(`http://localhost:3000/users/${id}`)
        .then((data)=>{
            setData(data.data)
        })

    }, [])
    const updateUser = function(e){
        e.preventDefault()
        const username = document.querySelector('#name').value
        const email = document.querySelector('#email').value
        const role = document.querySelector('#role').value
        const statuss = document.querySelectorAll('.status')
        let status  = '';
        statuss.forEach(item => {
            if(item.checked){
                status = item.value
            }
        })
        axios.put(`http://localhost:3000/users/${id}`,{
            ...data,
            username,
            email,
            role,
            status
        })
        .then(data => {
            router.navigate('/admin/users')
            console.log(data);
        })
    }
    useEffect(function(){
        const form_update = document.querySelector('#form_update_user')
        form_update.onsubmit = updateUser
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
                    <h2 class="mb-4 text-xl font-bold text-gray-900 ">Sửa thông tin người dùng</h2>
                    <form action="#" id='form_update_user'>
                        <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                            <div class="sm:col-span-2">
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Họ và tên</label>
                                <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " value="${data?.username}" placeholder="" required="">
                            </div>
                            <div class="w-full">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                                <input type="email" readonly name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " value="${data?.email}" placeholder="" required="">
                            </div>
                            <div class="w-full">
                                <label for="role" class="block mb-2 text-sm font-medium text-gray-900 ">Chức vụ</label>
                                <select id="role" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                    <option value="${data.role}">${data.role}</option>
                                    ${roles.map(item =>`<option value="${item}">${item}</option>`)}
                                </select>
                            </div> 
                            <div class="sm:col-span-2 flex gap-[25px] items-center">
                                <div class="flex items-center">
                                    <input ${data?.status =='enabled' ? 'checked' : ''} id="default-radio-1" type="radio" value="enabled"  name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-2  status">
                                    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900" >Mở</label>
                                </div>
                                <div class="flex items-center">
                                    <input  ${data?.status =='disabled' ? 'checked' : ''} id="text-gray-900" type="radio" value="disabled" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  focus:ring-2  status">
                                    <label for="text-gray-900" class="ml-2 text-sm font-medium text-price">Cấm</label>
                                </div>
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
export default UpdateUser