const Filter = function(){
    return `
    <div class='setup-active'>
        <ul class='flex gap-[11px] border-b border-[#F2F2F2] border-solid text-normal'>
            <a href='/home?status=all' data-status ='all' class='p-[16px] cursor-pointer text-border border-b-[4px] border-[#0d5cb5] border-solid filter_books'>Phổ biến</a>
            <a href='/home?status=best_seller' data-status ='best_seller' class='p-[16px] cursor-pointer filter_books'>Bán chạy</a>
            <a href='/home?status=new_books' data-status ='new_books' class='p-[16px] cursor-pointer filter_books'>Hàng mới</a>
            <a href='/home?status=chip_books' data-status ='chip_books' class='p-[16px] cursor-pointer filter_books'>Giá thấp</a>
            <a href='/home?status=expensive_books' data-status ='expensive_books' class='p-[16px] cursor-pointer filter_books'>Giá cao</a>
        </ul>
    
    </div>
    `
}
export default Filter