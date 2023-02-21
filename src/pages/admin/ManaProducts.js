import axios from "axios"
import { useEffect, useState } from "../../../lib"
import HeaderAdmin from "../../components/admin/layout/header"
import SideLeft from "../../components/admin/layout/sideLeft"
import VND from "../../components/Fomat"
const ManaProducts = function (){
    const [data, setData] = useState([])
    console.log(data)
    useEffect(function() {
        axios.get('http://localhost:3000/books')
        .then(function(dataFetch) {
            setData(dataFetch.data)
        });     
    }, [])
    useEffect(function(){
        let deletes = document.querySelectorAll('.deletes')
        deletes.forEach((item,index,arr) =>{
            item.onclick = function(e){
                let idDelete = data[index].id
                axios.delete(`http://localhost:3000/books/${idDelete}`)
                .then(function(dataFetch) {
                    axios.get('http://localhost:3000/books')
                    .then(function(dataFetch) {
                        setData(dataFetch.data)
                    });     
                });     
            }
        })
    })
    return `
    <main class="relative ">
        <div class='fixed w-[80%] top-0 right-[0]'>
            ${HeaderAdmin()}
        </div>
        <div class='fixed w-[20%] left-0 top-0 bg-[#4075f0] h-[100vh]'>
            ${SideLeft()}
        </div>
        <div class='mt-[70px] ml-[20%]'>
            <div class='p-[2px]'>
                <h1 class='text-title text-[#ccc] mt-[30px] ml-[20px]'>Quản lí sản phẩm</h1>
                <div class='px-[20px] mt-[30px]'>
                    <div class="shadow-md sm:rounded-lg max-h-[70vh]  overflow-y-scroll">
                        <table class="rounded overflow-hidden w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-4">
                                        Sản phẩm
                                    </th>
                                    <th scope="col" class="px-6 py-4">
                                        Giá
                                    </th>
                                    <th scope="col" class="px-6 py-4">
                                        Thể Loại
                                    </th>
                                    <th scope="col" class="px-6 py-4">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                ${data.map(item => `
                                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-3 font-medium text-gray-900 dark:text-white">
                                            <div class='flex items-center gap-[10px]'>
                                                <img class='max-w-[50px]' src = '${item?.images?.[0]?.base_url}' atl='Ảnh minh họa'/>
                                                <span class=' max-w-[200px]'>${item?.name}</span>
                                            </div>
                                        </th>
                                        <td scope="row"  class="px-6 py-3">
                                            ${VND.format(item?.original_price)}
                                        </td>
                                        <td scope="row"  class="px-6 py-3">
                                            ${item?.categories?.name}
                                        </td>
                                        <td class="px-6 py-3">
                                            <div class='flex items-center'>
                                                <a href="/admin/products/${item.id}" class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-[7px]">Sửa</a>
                                                <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline deletes">Xóa</button>
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
export default ManaProducts