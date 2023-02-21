import VND from "../Fomat"

    
const Products = function(data){
    return /*html*/`
        <div class='max-w-[250px]'>
            <div >
                <a href ='/detail/${data?.id}'>
                    <img class='max-w-[180px] max-h-[180px] object-cover' src ='${data?.images[0].base_url}' alt ='' />
                </a>
            </div>
            <div class='mt-[12px] max-w-[80px] relative'>
                <img class='w-full' src ='http://127.0.0.1:5173/imgs/Tikinow.png' alt='' />
                <img class='max-w-[136px] absolute bottom-full' src='http://127.0.0.1:5173/imgs/logoFreeShip.png' />
            </div>
            <div class='mt-[12px] '>
                <p class='text-service text-normal'>GIAO SIÊU TỐC 2H</p>
                <div class='max-w-[180px]'>
                    <a href ='/detail/${data?.id}' class='mt-[12px]  font-medium text-[13px]'>${data?.name}</a>
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
                        <p class='text-[16px] font-medium text-price'>${VND.format(data.original_price)}</p>
                        <p class='border border-price rounded-[5px] bg-bgPrice text-price text-normal'>${(100 - data?.current_seller?.price / data?.original_price * 100).toFixed(1)}%</p>
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