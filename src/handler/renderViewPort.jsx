import { Suspense, useRef} from "react"
import useFirstViewportEntry from "./firstViewPort"

const renderViewportEntry = ({
    children,
    threshold = 0,
    root = null,
    rootMargin = "0px 0px 0px 0px",
    ...wrapperDivProps
}) => {
    const ref = useRef()
    const entered = useFirstViewportEntry(ref, {threshold, root, rootMargin})

    return (
        <div {...wrapperDivProps} ref={ref}>
            {entered && <Suspense>{ children }</Suspense>}
        </div>
    )
}

export default renderViewportEntry