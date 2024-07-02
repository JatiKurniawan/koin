import Platform from "./platform"

function Footer() {
    return (
        <div className="h-fit bg-navy flex flex-col sm:flex-row px-[100px] font-pop text-white justify-between py-[32px] gap-y-8">
            <div className="flex flex-col gap-[20px]">
                <h1 className="font-semibold text-6xl">K<span className="text-[#BC8AFC]">o</span>in</h1>
                <div className="flex flex-col lg:flex-row gap-y-[12px] gap-x-[32px]">
                    <h4>FAQ</h4>
                    <h4>Contact Us</h4>
                    <h4>Terms & Conditions</h4>
                    <h4>Privacy Policy</h4>
                </div>
                <div className="flex flex-row gap-[20px]">
                    <img src="assets/instagram.png" alt="" />
                    <img src="assets/facebook.png" alt="" />
                    <img src="assets/twitter.png" alt="" />
                    <img src="assets/linkedin.png" alt="" />
                </div>
            </div>
            <div className="flex flex-col gap-[20px]">
                <h2 className="text-2xl font-semibold">Join our mailing list</h2>
                <div className="bg-white rounded-lg flex flex-row justify-between items-center md:w-[420px]">
                    <h4 className="text-navy px-[24px]">Enter your Email</h4>
                    <div className="w-[120px] h-[64px] bg-[#BC8AFC] flex items-center justify-center rounded-lg">
                        <h4>Send</h4>
                    </div>
                </div>
                <Platform />
            </div>
        </div>
    )
}

export default Footer