import ReviewStar from "./reviewStar"
import { useState } from "react";

/* eslint-disable react/no-unescaped-entities */
function ReviewDetail() {

    const data = [
        {
            head: 'Game Changer',
            text: 'It`s been a game changer for me. Before, I would often overspend without realizing it. But with this app, I can easily see where my money is going and set budgets to stay on track.',
            image: 'assets/review_1.png',
            name: 'Chamlikra Shevin',
            location: 'London',
            star: 5
        },
        {
            head: 'More control of my finances',
            text: 'I`ve been able to save more money and feel more in control of my finances. I would definitely recommend this app to anyone who wants to take control of their finances.',
            image: 'assets/review_2.png',
            name: 'John Nima',
            location: 'New Castle',
            star: 5
        },
    ]

    const reviewAll = data.map((data, index) => (
        <div key={index} className="font-pop flex flex-col gap-[20px] w-[500px] rounded-lg shadow-xl bg-white p-[24px]">
            <h3 className="font-semibold text-xl">{ data.head }</h3>
            <h4>{ data.text }</h4>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-[24px]">
                    <img src={ data.image } alt="" className="w-[80px] object-contain rounded-full" />
                    <div>
                        <h3 className="font-semibold text-xl">{ data.name }</h3>
                        <h4>{ data.location }</h4>
                    </div>
                </div>
                <ReviewStar count={data.star} />
            </div>
        </div>
    ))

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const previousReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    return(
        <>
            <div className="hidden lg:flex flex-row gap-[20px]">{ reviewAll }</div>
            <div className="flex flex-col gap-8 items-center lg:hidden">
                <div className="w-4/5 rounded-lg shadow-xl bg-white p-[24px] font-pop flex flex-col gap-[20px]">
                    <h3 className="font-semibold text-xl">{ data[currentIndex].head }</h3>
                    <h4>{ data[currentIndex].text }</h4>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center gap-[24px]">
                            <img src={ data[currentIndex].image } alt="" className="w-[80px] object-contain rounded-full" />
                            <div>
                                <h3 className="font-semibold text-xl">{ data[currentIndex].name }</h3>
                                <h4>{ data[currentIndex].location }</h4>
                            </div>
                        </div>
                        <ReviewStar count={data[currentIndex].star} />
                        </div>
                </div> 
                <div className="flex flex-row gap-24">
                    <button onClick={previousReview}><img src="assets/arrow_left.png"/></button>
                    <button onClick={nextReview}><img src="assets/arrow_right.png"/></button>
                </div>         
            </div>
        </>
    )
}

export default ReviewDetail