import HeaderAdmin from "../../components/admin/layout/header"
import SideLeft from "../../components/admin/layout/sideLeft"

const Dashboard = function(){
    return /*html*/ `
        <main class="relative ">
            <div class='fixed w-[80%] top-0 right-[0]'>
                ${HeaderAdmin()}
            </div>
            <div class='fixed w-[20%] left-0 top-0 bg-[#4075f0] h-[100vh]'>
                ${SideLeft()}
            </div>
            <div class='mt-[70px] ml-[20%]'>
                <div class='p-[2px]'>
                    <h1 class='text-title text-[#ccc] mt-[30px] ml-[20px]'>Dashboard</h1>
                </div>
            </div>
        </main>
    `
}
export default Dashboard