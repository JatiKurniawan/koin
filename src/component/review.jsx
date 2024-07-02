import ReviewDetail from "./reviewDetail"

function Review() {
    return(
        <div className="flex flex-col items-center bg-service bg-cover px-[100px] py-16">
            <h2 className="font-pop font-semibold text-2xl ">See what our customers have to say</h2>
            <ReviewDetail/>
        </div>
    )
}

export default Review