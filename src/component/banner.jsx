import Navigation from "./navigation"
import StartButton from "./startButton"

function Banner() {
    return (
        <div className="md:h-fit xl:h-screen flex flex-col gap-[20px] md:gap-[80px] bg-navy pb-24">
            <Navigation/>
            <div className="flex flex-col sm:flex-row justify-between px-4 md:px-[80px] gap-y-20">
                <div className=" text-white font-pop text-wrap w-[600px] flex flex-col gap-[32px]">
                    <h1 className="text-6xl lg:text-8xl font-semibold">Your one stop Budgeting tool</h1>
                    <h4 className="text-2xl ">A budget is a plan for every dollar you have. It’s not magic, but it represents more financial freedom and a life with muchless stress A budget is a plan, </h4>
                    <StartButton/>
                </div>
                <div>
                    <img src="assets/card.png" alt="" className=" rotate-[120deg] scale-75 lg:scale-75 xl:scale-90"/>
                    <img src="assets/card.png" alt="" className="absolute -bottom-[320px] md:bottom-20 md:right-2 xl:bottom-16 xl:right-24 scale-75 lg:scale-90 xl:scale-95"/>
                </div>
            </div>
        </div>
    )
}

export default Banner