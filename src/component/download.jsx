import Platform from "./platform"

function Download() {
    return(
        <div className="bg-navy h-fit sm:h-[280px] px-4 pt-8 sm:pl-[80px] flex flex-col sm:flex-row justify-between sm:pr-[240px] sm:relative items-center">
            <div className="justify-center gap-[28px] flex flex-col md: lg:w-5/6">
                <h1 className="font-pop text-white text-4xl sm:text-3xl font-semibold text-wrap">More your control for your money</h1>
                <Platform/>
            </div>
            <img src="assets/app.png" alt="" className="w-[280px] lg:w-[320px] object-contain md:right-20 lg:right-40 bottom-0 sm:absolute"/>
        </div>
    )
}

export default Download