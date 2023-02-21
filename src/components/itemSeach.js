const ItemSearch = function(data){
    return `
    <div class='flex p-[5px] mb-[10px] border-b gap-[10px]'>
        <a href ='/detail/${data.id}'>
            <img class='max-w-[70px] max-h-[70px]' src ='${data?.images?.[0]?.base_url}'>
        </a>
        <div class='mt-[10px] flex flex-col '>
            <a href ='/detail/${data.id}'>${data?.name}</a>
            <a href='/home?idCate=${data?.categories?.id}' class='mt-[5px] italic'>${data?.categories?.name}</a>
        </div>
    </div>
    `
}
export default ItemSearch