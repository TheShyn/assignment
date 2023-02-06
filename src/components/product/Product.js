    
const Products = function({name, images,id}){
    return /*html*/`
        <div class='max-w-[250px]'>
            <div >
                <a href ='/detail/${id}'>
                    <img class='max-w-[180px] max-h-[180px] object-cover' src ='${images[0].base_url}' alt ='' />
                </a>
            </div>
            <div class='mt-[12px] max-w-[80px]'>
                <img class='w-full' src ='http://127.0.0.1:5173/imgs/Tikinow.png' alt='' />
            </div>
            <div class='mt-[12px] '>
                <p class='text-service text-normal'>GIAO SIÊU TỐC 2H</p>
                <div class='max-w-[180px]'>
                    <a href ='/detail/${id}' class='mt-[12px]  font-medium text-[13px]'>${name}</a>
                    <div class='mt-[8px] flex gap-[7px] text-normal  items-center'>
                        <div class='flex'>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                        </div>
                        <span> | </span>
                        <p class='text-[#787878] text-normal'>Đã bán 1000+</p>
                    </div>
                    <div class ='flex items-center gap-[8px] '>
                        <p class='text-[16px] font-medium text-price'>100.225₫</p>
                        <p class='border border-price rounded-[5px] bg-bgPrice text-price text-normal'>-35%</p>
                    </div>
                    <div class ='mt-[8px] max-w-[130px]'>
                        <img class='w-full' src ='http://127.0.0.1:5173/imgs/rehonhoantien.png' />
                    </div>
                </div>
            </div>
           
        </div>
        
    `
}

export default Products