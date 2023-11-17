import Lottie from "react-lottie-player";


import blobBackground from "../../../../../animations/main-page/blobs-background.json"


export default function MainBackground() {
    return (
        <div className="main-background">
            <Lottie
                className='blob'
                animationData={blobBackground}
                play
                loop
            />

        </div>
    )
}
