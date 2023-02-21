import { router, useEffect } from "../../../../lib"

const HeaderAdmin = function(){
    const user = JSON.parse(localStorage.getItem('user'))
    useEffect(()=>{
        if(!user){
            router.navigate('/')
        }
    },[])
    return `
        <header class='bg-white h-[70px] shadow-sm flex items-center justify-between px-[30px]'>
            <div class='flex rounded overflow-hidden'>
                <input type='text' id='search' class='border outline-none min-w-[200px] py-[3px] px-[15px]' placeholder='Tìm kiếm'/>
                <button class='bg-[#0D5CB6] py-[3px] px-[8px] text-white flex items-center gap-[5px]'>
                    <ion-icon class='text-[16px]' name="search-outline"></ion-icon>
                </button>
            </div>
            <div class='flex items-center gap-[50px]'>
                <ion-icon name="notifications-outline" class='cursor-pointer'></ion-icon>
                <div class='flex items-center gap-[5px]'>
                    <span>user</span>
                    <ion-icon class='text-[30px] cursor-pointer' name="person-circle-outline"></ion-icon>
                </div>
            </div>
        </header>
    `
}
export default HeaderAdmin