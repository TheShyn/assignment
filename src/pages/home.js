import Breadcum from "../components/breadcum/Breadcum"
import Categories from "../components/categories/Categories"
import Filter from "../components/filter/Filter"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/header"
import Products from "../components/product/Product"
import data from '/db.json' assert {type: 'json'}
var HomePage = function() {
    return `
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
                },
            ]
        )}
    </div>
    
    <div class='mt-[14px]  flex justify-center  gap-[20px] '>
        <div class=' ml-primary max-w-[200px]'>
            ${Categories()}
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
                    ${data.map((item)=>{
                        return Products(item)
                    }).join(' ')}
                </div>
            </div>
        </div>
    </div>
    <div class='mt-[130px]'>
        ${Footer()}
    
    </div>
    `
}

export default HomePage