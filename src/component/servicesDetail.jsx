function ServicesDetail() {
    const data = [
        {
            image: 'assets/service_1.png',
            head: 'Accessible and Convenient',
            text: 'Access the app from anywhere, anytime, stay on top of your finances. No unnecessary fees, and manage your finances with ease.'
        },
        {
            image: 'assets/service_2.png',
            head: 'Personalized Suggestions',
            text: 'Our app analyzes your spending patterns and offers advice to help you improve your habits, helping you save more and spend less'
        },
        {
            image: 'assets/service_3.png',
            head: 'Improved Financial Management',
            text: 'Our budgeting app provides a complete overview of your finances. Track your spending, set budgets, and monitor your progress.'
        },
        {
            image: 'assets/service_4.png',
            head: 'Automated expenses',
            text: 'Automatically categorizes your transactions, making it easier to monitor your spending and budgeting.'
        },
    ]

    const dataService = data.map((data, index) => (
        <div key={index} className="flex flex-col gap-[16px] font-pop text-xl md:w-[300px] lg:w-[360px] xl:w-[500px]">
            <img src={ data.image } alt="" className="w-[80px]"/>
            <h3 className="text-2xl font-semibold">{ data.head }</h3>
            <h4 className="text-xl">{ data.text }</h4>
        </div>
    ))

    return(
        <div className="flex flex-row flex-wrap justify-between gap-y-[40px]">
            { dataService }
        </div>
    )
}

export default ServicesDetail