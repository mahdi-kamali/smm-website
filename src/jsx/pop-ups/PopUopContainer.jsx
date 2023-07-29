import { useSelector } from "react-redux"

const PopUopContainer = () => {

    const popUp = useSelector(state => state.popUp.value)
    const popUpComponent = popUp.component
    const showing = popUp.type !== "none"

    if (showing) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "auto"
    }

    return (
        <section className={`pop-up ${showing ? "show-pop-up" : "close-pop-up"}`}>
            <div className="pop-up-background">

            </div>
            <div className="pop-up-component">
                {popUpComponent}
            </div>

        </section>
    )
}

export default PopUopContainer