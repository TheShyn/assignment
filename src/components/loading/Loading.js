const Loading = function(){
    return /*html*/ `
    <div class='flex items-center justify-center min-h-[50vh] flex-col w-full tracking-[2px]'>
        <p class='text-[16px]'>Loading...</p>
        <div class='mt-[25px] flex justify-center items-center w-full'>
            <div class='w-[40%] overflow-hidden h-[20px] border-[2px] border-solid border-[#267191] rounded-[20px]'>
                <div class='h-[20px] bg-[#67D295] rounded-[20px] animate-loading'></div>
            </div>
        </div>
    </div>
    `
}
export default Loading