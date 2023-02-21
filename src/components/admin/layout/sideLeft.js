const SideLeft = function (){
    return `
    <div class='px-[10px]'>
        <div class='flex flex-col items-center mt-[15px] '>
            <div class='max-w-[70px]'>
                <img class='w-full' src ='http://127.0.0.1:5173/imgs/Logo.png'/>
            </div>
        </div>
        <div class='border border-[#ccc] my-[30px]'></div>
        <div class=''>
            <a href ='/admin' class='text-[14px] flex ml-[10px] items-center gap-[10px] text-white'>
                <ion-icon name="browsers-outline"></ion-icon>
                <span>Dashboard</span>
            </a>
            <div class='border border-[#ccc] my-[30px]'></div>
            <div class='text-[14px]'>
                <span class=' text-[#ccc]'>MANAGE</span>
                <ul class='ml-[10px] mt-[10px]'>
                    <li class='mb-[15px]'>
                        <a href='/admin/products' class='flex items-center gap-[10px] text-white'>
                            <ion-icon name="book-outline"></ion-icon>
                            <span>Products</span>
                        </a>
                    </li>
                    <li>
                        <a href='/admin/users' class='flex items-center gap-[10px] text-white'>
                            <ion-icon name="people-outline"></ion-icon>
                            <span>User</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    `
}
export default SideLeft