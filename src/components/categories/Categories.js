const Categories = function (data){
    return `
        <div class='w-[170px]'>
            <h2 class='text-[17px] mb-[14px]'>Danh mục sản phẩm</h2>
            <ul class='flex flex-col gap-[12px] text-normal'>
                ${data.map(item=> ` 
                <li>
                    <a class='list_cate' href ='/home?idCate=${item.id}'>${item.name}</a>
                </li>`).join('')}
            <ul>
        </div>
    
    `
}
export default Categories