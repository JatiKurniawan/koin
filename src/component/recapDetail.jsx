/* eslint-disable react/prop-types */
function RecapDetail({ text, categories }){
    return (
        <div className="flex flex-col font-pop text-black text-center w-fit py-[24px]">
            <h2 className="text-4xl font-semibold">{ text }<span className="text-[#BC8AFC]">+</span></h2>
            <h4 className="text-xl">{ categories }</h4>
        </div>
    )
}

export default RecapDetail