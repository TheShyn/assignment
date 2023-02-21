import axios from "axios"
import { useEffect, useState } from "../../../lib"
import HeaderAdmin from "../../components/admin/layout/header"
import SideLeft from "../../components/admin/layout/sideLeft"

const ManaUser = function (){
    const user = JSON.parse(localStorage.getItem('user'))
    
    const [data, setData] = useState([])
    useEffect(function() {
        axios.get('http://localhost:3000/users')
        .then(function(dataFetch) {
            setData(dataFetch.data)
        });     
    }, [])
    return /*html*/`
    <main class="relative ">
        <div class='fixed w-[80%] top-0 right-[0]'>
            ${HeaderAdmin()}
        </div>
        <div class='fixed w-[20%] left-0 top-0 bg-[#4075f0] h-[100vh]'>
            ${SideLeft()}
        </div>
        <div class='mt-[70px] ml-[20%]'>
            <div class='p-[2px]'>
                <h1 class='text-title text-[#ccc] mt-[30px] ml-[20px]'>Quản lí người dùng</h1>
                <div class='px-[20px] mt-[30px]'>
                    <div class="shadow-md sm:rounded-lg max-h-[70vh]  overflow-y-scroll">
                        <table class="rounded overflow-hidden w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-4">
                                        Người dùng
                                    </th>
                                    <th scope="col" class="px-6 py-4">
                                        Email
                                    </th>
                                    <th scope="col" class="px-6 py-4">
                                        Chức vụ
                                    </th>
                                    <th scope="col" class="px-6 py-4">
                                        Trạng thái
                                    </th>
                                    <th scope="col" class="px-6 py-4">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                ${data.filter(item => item.id !== user.id).map(item => `
                                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-3 font-medium text-gray-900 dark:text-white">

                                            <span class=' max-w-[200px]'>${item?.username}</span>
                                        </th>
                                        <td scope="row"  class="px-6 py-3">
                                            ${item?.email}
                                        </td>
                                        <td scope="row"  class="px-6 py-3">
                                            ${item?.role}
                                        </td>
                                        <td scope="row"  class="px-6 py-3">
                                            ${item?.status}
                                        </td>
                                        <td class="px-6 py-3">
                                            <div class=''>
                                                <a href="/admin/users/${item.id}" class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-[7px]">Thông tin</a>
                                            </div>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
    </main>
    
    `
}
export default ManaUser