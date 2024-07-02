function Benefit() {

    const data = [
        'Accessible and Convenient',
        'Personalized Suggestions',
        'Improved Financial Management',
        'Automated expenses'
    ]

    const listBenefit = data.map((data, index) => (
        <div key={ index } className="flex flex-row gap-[16px] items-center font-pop text-xl">
            <img src="assets/list.png" alt="" className="scale-75"/>
            <p>{ data }</p>
        </div>
    ))
    return(
        <div className="flex flex-col sm:flex-row items-center px-4 sm:px-[160px] h-fit justify-between pt-12 gap-y-8">
            <img src="assets/benefit.png" alt="" className="rounded-xl hidden sm:block md:w-[240px] lg:w-[320px] xl:w-[360px] object-covers"/>
            <div className="text-wrap font-pop sm:w-1/2 flex flex-col gap-[16px]">
                <h1 className="text-3xl md:text-3xl lg:text-4xl font-semibold ">Benefits</h1>
                <h4 className="md:text-lg">
                Designed to help you take control of your finances and achieve your financial goals. 
                Our app is easy to use and provides a complete overview of your finances, allowing you 
                to manage your money with confidence.
                </h4>
                <div className="flex flex-col gap-[8px] md:text-lg">
                    { listBenefit }
                </div>
            </div>
        </div>
    )
}

export default Benefit