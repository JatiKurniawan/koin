import RecapDetail from "./recapDetail";

function Recap() {
    return(
        <div className="w-full flex flex-row justify-center -bottom-[720px] md:-bottom-48 lg:-bottom-48 xl:-bottom-28 px-[80px] absolute">
            <div className="flex flex-col items-center sm:flex-row justify-evenly w-full bg-white rounded-2xl">
                <RecapDetail text={"10K"} categories={"Active Users"}/>
                <RecapDetail text={"$2M"} categories={"Transaction"}/>
                <RecapDetail text={"70"} categories={"Countries"}/>
            </div>
        </div>
    )
}

export default Recap