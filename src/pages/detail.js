import Breadcum from "../components/breadcum/Breadcum"
import VND from "../components/Fomat"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/header"
import Products from "../components/product/Product"
import data from '/db.json' assert {type: 'json'}
/*html*/
const Detail = function() {
    // Lấy id
    let id = Number(window.location.href.split('/').pop())
    const test = data.find((item,i) =>{
        return item.id == id
    })
    // lấy 4 sản phẩm liên quan
    const relate = data.filter(item=>{
        return item?.categories.id === test?.categories.id && item.id !== id
    }).slice(0,4)

    //function xem thêm
    let showMore = function (){
        let desc_detail = document.querySelector('.desc_detail')
        desc_detail.innerHTML = test.description
    }
    return /*html */`
    <div>
        ${Header()}
    </div>
    <div class='px-primary bg-[#F5F5FA] text-normal'>
        ${Breadcum(
            [
                {
                    name: 'Trang chủ',
                    href: '/'
                },
                {
                    name: 'Tất cả sản phẩm',
                    href: '/products'
                }
            ]
        )}
    </div>
    <div class='pl-[110px] mt-[20px] flex gap-[30px]'>
        <div class=''>
            <img class='max-w-[444px] border max-h-[444px] object-cover ' src ='${test?.images[0].base_url}' />
            <div class= 'flex gap-[20px] mt-[10px]'>
                ${test.images.map((item,i)=>{
                    if(i == 0){
                        return `<img class=' cursor-pointer max-w-[62px] border border-blue-700' src ='${item.base_url}' />`
                    }else{
                        return `<img class=' cursor-pointer max-w-[62px] ' src ='${item?.base_url}' />`
                    }
                }).slice(0,4).join('')}
            </div>
        </div> 
        <div class='ml-[30px] border-l pl-[20px]'>
            <ul class='text-normal flex gap-[10px]'>
                <li>Tác giả: <span class='text-blue-500'>Ca Tây</span></li>
                <li>Đứng thứ 13 trong: <span class='text-blue-500'>Top 1000</span></li>
                <li>Sách tư duy - Kỹ năng sống: <span class='text-blue-500'>bán chạy tháng này</span></li>
            </ul>
            <h1 class='text-title mt-[10px]'>${test.name}</h1>
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
                <p class='text-[#787878] text-normal'>Đã bán 1000+</p>
            </div>
            <div class ='flex items-end gap-[8px] mt-[20px] bg-[#FAFAFA] p-[15px] pb-[30px]'>
                <p class='text-[32px] font-medium text-price'>${VND.format(test?.original_price)}</p>
                <p class='text-[#787878] mb-[8px] text-normal'>${VND.format(test?.list_price)}</p>
                <p class='border mb-[8px] border-price rounded-[5px] bg-bgPrice text-price text-normal'>-35%</p>
            </div>
            <div class=' mt-[30px] py-[50px] border-y'>
                <p class='font-medium'>Số lượng</p>
                <div class='flex items-center'>
                    <button class='border px-[10px]'>-</button>
                    <input type='number' class= 'border max-w-[50px] text-center outline-none appearance-none' value='1' min='1'    />
                    <button class='border px-[10px]'>+</button>
                </div>
            </div>
            <div class='border-b pb-[40px]'>
                <button class='bg-price mt-[30px] min-w-[300px] text-white py-[10px] text-[14px]'>Chọn mua</button>
            
            </div>
        </div> 
    </div>
    <div class='px-primary text-[20px]'>
        <p class=' mt-[55px]'>Sản Phẩm Tương Tự</p>
        <div class='mt-[23px] grid grid-cols-4 gap-[47px]'>
            ${relate.map((item)=>{
                return Products(item)
            }).join('')}
        </div>
    </div>
    <div class='px-primary text-[20px] mt-[55px] max-w-[1000px]'>
        <p class=''>${test.specifications[0].name}</p> 
        <div class='mt-[8px] '>
            <table class='w-full'>
                ${test.specifications[0].attributes.map((item,i)=>{
                    i+=1
                    return /*html */ `
                    <tr class='' >
                        <td class='bg-[#EFEFEF] w-[220px] text-normal py-[8px] pl-[15px]'>${item.name}</td>
                        <td class='text-normal pl-[15px] ${i % 2 == 0? 'bg-[#FAFAFA]':''}'>${item.value}</td>
                    </tr>
                    `
                }).join('')}
                
            </table>
        </div>   
    </div>
    <div class='px-primary text-[20px] mt-[55px] max-w-[1000px]'>
        <p class='mb-[11px]'>Mô tả sản phẩm</p> 
        <p class='text-normal desc_detail'>${test.short_description}</p>
        <div class='flex justify-center'>
            <button onclick='showMore()' class='border border-[#189EFF] text-[14px] text-[#189EFF] mt-[30px] min-w-[250px] py-[6px] hover:text-white duration-500 hover:bg-[#189EFF] '>Xem thêm >>></button>
        </div>
    </div>
    <div class='mt-[130px]'>
        ${Footer()}
    </div>
`
}

export default Detail