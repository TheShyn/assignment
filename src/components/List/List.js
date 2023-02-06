const List = function (caption = '',param = []) {
    const length = param.length;
    return `
        <div>
            <h3 class ='text-[16px] font-medium mb-[12px]'>${caption}</h3>
            <ul >
                ${param.map((item, i) =>{
                const length = param.length;
                    return `<li class='${i < length - 1 ? `mb-[9px]`: ''} text-normal'><a class ='text-[#808089] '  href = '${item.href}' >${item.text} ${item.span ? `<span class=' ${item.attributesSpan}'>: ${item.span}</span>`: ''}</a></li>`
                }).join('')}
                
            </ul>
        </div>
    `
}
export default List