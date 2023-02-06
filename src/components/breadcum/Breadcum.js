const Breadcum = function(params = []){
    let length = params?.length;
    let breadcum = params.map((item,i)=>{
        return `
        <div class='flex items-center gap-[5px]'>
            <a href ='${item.href}'>${item.name}</a>
            ${i < length - 1 ? `<span class= 'pt-[3px]'><ion-icon name="chevron-forward-outline"></ion-icon></span>` : ''}
            
        </div>
        `
    })
    
    return `
        <div class=' flex items-center py-[10px] gap-[5px]'>
            ${breadcum.join(' ')}
        </div>
    `
}
export default Breadcum