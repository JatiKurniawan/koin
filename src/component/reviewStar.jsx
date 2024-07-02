/* eslint-disable react/prop-types */
function ReviewStar({ count }) {
    const stars = []

    for (let i=1; i<= count; i++) (
        stars.push(
            <div key={ i }>
                <img src="assets/star.png" alt="" />
            </div>
        )
    )

    return(
        <div className="flex flex-row gap-1">{ stars }</div>
    )
}

export default ReviewStar