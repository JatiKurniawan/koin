import ServicesDetail from "./servicesDetail"

function Services() {
    return(
        <div className="px-4 md:pl-[80px] md:pr-[180px] pb-48 h-fit content-center flex flex-col gap-[40px] mt-16 bg-service bg-cover">
            <h1 className="text-3xl font-pop font-semibold">Our Services</h1>
            <ServicesDetail/>
        </div>
    )
}

export default Services