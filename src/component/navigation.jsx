import { useState } from "react";

function Navigation() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toogleNavbar = () => {
        setIsNavOpen(!isNavOpen)
        console.log(isNavOpen)
    }
    return (
    <>
        <div className="flex flex-row justify-between px-4 py-2 md:pl-[77px] md:pr-[82px] md:pt-[16px] items-center sticky top-0 z-999">
            <h1 className="font-pop font-semibold text-3xl sm:text-4xl lg:text-6xl text-white">K<span className="text-[#BC8AFC]">o</span>in</h1>
            <div className="hidden lg:flex flex-row gap-[59px] items-center text-white font-pop text-xl">
                <h4>Home</h4>
                <h4>About</h4>
                <h4>Payment</h4>
                <h4>Services</h4>
                <h4>Contact US</h4>
                <div className="bg-[#BC8AFC] pl-[25px] pt-[12px] pb-[13px] pr-[32px] rounded-lg text-black font-medium">
                    <h4>Sign In</h4>
                </div>
            </div>
            <button className="block lg:hidden" onClick={toogleNavbar}>
                <img src="assets/navigation.png" alt=""
            /></button>
        </div>
        {isNavOpen && (
            <div className="flex flex-col gap-[59px] items-center text-white font-pop text-xl absolute top-20 md:top-32 z-50 w-full bg-navy pb-10">
                <h4>Home</h4>
                <h4>About</h4>
                <h4>Payment</h4>
                <h4>Services</h4>
                <h4>Contact US</h4>
                <div className="bg-[#BC8AFC] pl-[25px] pt-[12px] pb-[13px] pr-[32px] rounded-lg text-black font-medium">
                    <h4>Sign In</h4>
                </div>
            </div>
        )}
    </> 
    )
}

export default Navigation