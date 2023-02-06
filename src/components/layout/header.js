const Header = function() {
    return `
    <div class='bg-primary h-[100px] flex items-center justify-between px-primary'>
        <div class='mr-[110px]'>
            <img src = 'http://127.0.0.1:5173/imgs/Logo.png' alt ='LOGO'/>
        </div>   
        <div class='flex'>
            <input type='text' class='outline-none min-w-[600px] py-[10px] px-[15px]' placeholder='Tìm kiếm'/>
            <button class='bg-[#0D5CB6] py-[10px] px-[15px] text-white flex items-center gap-[5px]'>
                <ion-icon class='text-[20px]' name="search-outline"></ion-icon>
                <span class='text-normal'>Tìm kiếm</span>
            </button>
        </div>
        <div class='ml-[30px] flex'>
            <div>
                <div class='text-white hidden'>
                    <a href ='#'>Đăng kí</a>
                    /
                    <a href ='#'>Đăng nhập</a>
                </div>
                <div href='' class='flex items-center gap-[10px] text-white'>
                    <ion-icon class='text-[30px]' name="person-outline"></ion-icon>
                    <li class='list-none flex items-center gap-[3px]'>
                        <a href='' class='text-normal'>
                            <span>Tài khoản</span>
                            <ion-icon name="caret-down-outline"></ion-icon>
                        </a>
                    </li>
                </div>
            </div>
            <div>
                <a href='' class='ml-[30px] flex items-center  text-white relative text-normal'>
                    <ion-icon class='text-[30px]' name="cart-outline"></ion-icon>
                    <span>Giỏ hàng</span>
                    <span class='absolute bg-[#FDD835] px-[7px] bottom-[60%] right-[60%] rounded-full text-black'>0</span>
                </a>
            </div>
        </div>
    
    </div>
    `
}

export default Header;