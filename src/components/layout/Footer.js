import List from "../List/List"

const Footer = function(){
    return `
        <div class='px-primary mb-[15px] grid gap-[50px] grid-cols-5'>
            <div>
                ${List('Hỗ trợ khách hàng', [
                        {
                            text: 'Hotline',
                            href: '#',
                            span: '1900-6035',
                            information: '(1000 đ/phút, 8-21h kể cả T7, CN)',
                            attributesSpan: 'text-black font-medium',
                        },
                        {
                            text: 'Các câu hỏi thường gặp',
                            href: '#',
                        },
                        {
                            text: 'Gửi yêu cầu hỗ trợ',
                            href:'#'
                        },
                        {
                            text: 'Hướng dẫn đặt hàng',
                            href:'#'
                        },
                        {
                            text: 'Phương thức vận chuyển',
                            href:'#'
                        },
                        {
                            text: 'Chính sách đổi trả',
                            href:'#'
                        },
                        {
                            text: 'Hướng dẫn trả góp',
                            href:'#'
                        },
                        {
                            text: 'Chính sách hàng nhập khẩu',
                            href:'#'
                        },
                        {
                            text: 'Hỗ trợ khách hàng',
                            href:'#',
                            span: 'hotro@tiki.vn',
                            attributesSpan: 'text-[#808089]'
                        },
                        {
                            text: 'Báo lỗi bảo mật',
                            href:'#',
                            span: 'security@tiki.vn',
                            attributesSpan: 'text-[#808089]'
                        },
                    ]
                )}
            </div>
            <div>
                ${List('Về Tiki',[
                    {
                        text: 'Giới thiệu Tiki',
                        href:'#'
                    },
                    {
                        text: 'Tuyển dụng',
                        href:'#'
                    },
                    {
                        text: 'Chính sách bảo mật thanh toán',
                        href:'#'
                    },
                    {
                        text: 'Chính sách bảo mật thông tin cá nhân',
                        href:'#'
                    },
                    {
                        text: 'Chính sách giải quyết khiếu nại',
                        href:'#'
                    },
                    {
                        text: 'Điều khoản sử dụng',
                        href:'#'
                    },
                    {
                        text: 'Giới thiệu Tiki Xu',
                        href:'#'
                    },

                    {
                        text: 'Tiếp thị liên kết cùng Tiki',
                        href:'#'
                    },
                    {
                        text: 'Bán hàng doanh nghiệp',
                        href:'#'
                    },
                    {
                        text: 'Điều kiện vận chuyển',
                        href:'#'
                    },
                ])}
            </div>
            <div>
                ${List('Hợp tác và liên kết',[
                    {
                        text: 'Quy chế hoạt động Sàn GDTMĐT',
                        href: '#'
                    },
                    {
                        text: 'Bán hàng cùng Tiki',
                        href: '#'
                    },
                ])}
                <div class='mt-[25px] '>
                    <h3 class ='text-[16px] font-medium mb-[12px]'>Chứng nhận bởi</h3>
                    <div class='flex items-center gap-[10px] max-w-[160px]'>
                        <img class='w-[40%]' src = 'http://127.0.0.1:5173/imgs/certifi/Rectangle.png' alt = '' />
                        <img class='w-full' src = 'http://127.0.0.1:5173/imgs/certifi/Frame.png' alt = '' />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h3 class ='text-[16px] font-medium mb-[12px]'>Phương thức thanh toán</h3>
                    <div class='flex flex-wrap gap-[10px]'>
                            <img src='http://127.0.0.1:5173/imgs/payments/Tiki.png' alt='' />
                            <img src='http://127.0.0.1:5173/imgs/payments/Visa.png' alt='' />
                            <img src='http://127.0.0.1:5173/imgs/payments/Idk.png' alt='' />
                            <img src='http://127.0.0.1:5173/imgs/payments/Jcb.png' alt='' />
                            <img src='http://127.0.0.1:5173/imgs/payments/Atm.png' alt='' />
                            <img src='http://127.0.0.1:5173/imgs/payments/Momo.png' alt='' />
                            <img src='http://127.0.0.1:5173/imgs/payments/Zalopay.png' alt='' />
                            <img src='http://127.0.0.1:5173/imgs/payments/Moca.png' alt='' />
                            <img src='http://127.0.0.1:5173/imgs/payments/Viettelmoney.png' alt='' />
                            <img src='http://127.0.0.1:5173/imgs/payments/Vnpay.png' alt='' />
                            <img src='http://127.0.0.1:5173/imgs/payments/Idk2.png' alt='' />
                            <img src='http://127.0.0.1:5173/imgs/payments/Traop.png' alt='' />
                    </div>
                </div>
                <div class='mt-[24px]'>
                    <h3 class ='text-[16px] font-medium mb-[12px]'>Dịch vụ giao hàng</h3>
                    <div class='max-w-[70px]'>
                        <img class='w-full' src ='http://127.0.0.1:5173/imgs/Tikinow.png'/>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h3 class ='text-[16px] font-medium mb-[12px]'>Kết nối với chúng tôi</h3>
                    <div class='flex flex-wrap gap-[10px]'>
                        <img src='http://127.0.0.1:5173/imgs/network/Facebook.png' alt='' />
                        <img src='http://127.0.0.1:5173/imgs/network/Youtube.png' alt='' />
                        <img src='http://127.0.0.1:5173/imgs/network/Zalo.png' alt='' />
                    </div>
                </div>
                <div class='mt-[24px]'>
                    <h3 class ='text-[16px] font-medium mb-[12px]'>Dịch vụ giao hàng</h3>
                    <div class= 'flex  gap-[10px]'>
                        <img class='' src ='http://127.0.0.1:5173/imgs/download/Qr.png'/>
                        <div class='flex flex-col justify-between gap-[10px]' >
                            <img class='w-full' src ='http://127.0.0.1:5173/imgs/download/Appstore.png'/>
                            <img class='w-full items-between' src ='http://127.0.0.1:5173/imgs/download/Chplay.png'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class='ml-primary border-t'>
            ${List('', [
                {
                    text:'Trụ sở chính: Tòa nhà Viettel, Số 285, đường Cách Mạng Tháng 8, phường 12, quận 10, Thành phố Hồ Chí Minh'
                },
                {
                    text: 'Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử lý đơn hàng'
                },
                {
                    text: 'Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp lần đầu ngày 06/01/2010 và sửa đổi lần thứ 23 ngày 14/02/2022'
                },
                {
                    text: '© 2022 - Bản quyền của Công ty TNHH Ti Ki'
                }
            ])}
        </div>
    `
}
export default Footer