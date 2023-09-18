import Lottie from "react-lottie-player"
import { Icon } from "@iconify/react"
import { useState } from "react"



// Animation
import firstSectionAnimation from "../../../../../animations/user-dashboard/free-credits-first-section-left.json"
import trustPioltsAniamtion from "../../../../../animations/user-dashboard/free-credits-trust-pilot.json"
import shareOrTweetAnimation from "../../../../../animations/user-dashboard/free-credits-share.json"

const FreeCredits = () => {
    firstSectionAnimation.fr = 8
    trustPioltsAniamtion.fr = 8
    const [currentSocialGiftSteps, setSocialGiftSteps] = useState(0)

    const socialGifts = [
        {
            title: "Instagram",
            img: require("../../../../../images/main-page/social-media/instagram.png"),
            subTitle: "200 Follower"
        },
        {
            title: "Telegram",
            img: require("../../../../../images/main-page/social-media/telegram.png"),
            subTitle: "200 Member"
        },
    ]



    const [trustPoiletHasImage, setTrustPoiletHasImage] = useState(false)
    const [trustPoiletSteps, setTrustPoiletSteps] = useState(0)

    const onTrustPoilotFileInputChnage = (e) => {
        const file = e.target.files
        setTrustPoiletHasImage(file.length === 1)
    }




    const [shareHasImage, setShareHasImage] = useState(false)
    const [shareSteps, setShareSteps] = useState(0)

    const onShareFileInputChnage = (e) => {
        const file = e.target.files
        setShareHasImage(file.length === 1)
    }





    const [selectedSocialGift, setSelectedSocialGift] = useState(socialGifts[0])

    return (
        <main className="panel-free-creidits">
            <section className="email-verify ">
                <div className="left">
                    <Lottie
                        animationData={firstSectionAnimation}
                        play
                        loop />
                </div>
                <div className="right">
                    <h1>
                        <span>verify</span> your email <br />
                        and get <span>Gifts !</span>
                    </h1>
                    <div className="status">
                        <div className="email step">
                            <h2>
                                <Icon icon="ic:round-email" />
                                Email@example.com
                            </h2>
                            <button onClick={() => setSocialGiftSteps(1)}>
                                Send Code
                                <Icon icon="iconamoon:send-fill" />
                            </button>
                        </div>
                        <div className={`code-box step show-${currentSocialGiftSteps === 1}`}>
                            <input
                                placeholder="Code Here..."
                                type="text"
                                name="code" />
                            <Icon
                                icon="el:ok"
                                onClick={() => setSocialGiftSteps(2)}
                            />
                        </div>
                        <div className={`gift-box step show-${currentSocialGiftSteps == 2 || currentSocialGiftSteps == 3}`}>
                            {
                                socialGifts.map((item, index) => {
                                    return <div
                                        className={`item item-${selectedSocialGift.title === item.title}`}
                                        key={index}
                                        onClick={
                                            () => {
                                                setSelectedSocialGift(item)
                                                setSocialGiftSteps(3)
                                            }

                                        }
                                    >
                                        <div className="item-left">
                                            <img src={item.img} />
                                        </div>
                                        <div className="item-right">
                                            <h2>{item.title}</h2>
                                            <small>{item.subTitle}</small>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                        <div className={`link-box step show-${currentSocialGiftSteps === 3}`}>
                            <input
                                placeholder="Link Here..."
                                type="link"
                                name="code" />
                            <Icon
                                icon="el:ok"
                                onClick={() => setSocialGiftSteps(currentSocialGiftSteps + 1)}
                            />
                        </div>
                        <div className={`gift-status step show-${currentSocialGiftSteps === 4}`}>
                            <li>
                                Gift Claimed
                                <Icon icon="flat-color-icons:ok" />
                            </li>
                        </div>
                    </div>
                </div>
            </section>
            <section className="trust-pilot">
                <div className="left">
                    <Lottie
                        animationData={trustPioltsAniamtion}
                        play
                        loop />
                </div>
                <div className="right">
                    <div className="intro">
                        <h1>
                            Share Your <br />
                            <span>Trust Pilot</span> Review <br />
                            Send Proof <br />
                            And <span>Earn $1</span> Credit!
                        </h1>
                        <p>
                            Your opinion matters!
                            <div className="under-line">
                                Leave a positive review on Trust Pilot</div>, send us proof with a photo, and we'll reward you with a $1 credit. Join us in building trust and spreading positivity!
                        </p>
                    </div>
                    <div className="input-box ">
                        <div className="input step">
                            <label >
                                <h2>
                                    <Icon icon="ic:baseline-image" />
                                    Click For Upload Proof
                                </h2>
                                {
                                    trustPoiletHasImage ? <Icon icon="flat-color-icons:ok" /> : <Icon icon="carbon:close-filled" color="red" />
                                }
                                <input type="file" accept="image/*"
                                    onChange={onTrustPoilotFileInputChnage} />
                            </label>
                            <button
                                className={`show-${trustPoiletHasImage}`}
                                onClick={() => setTrustPoiletSteps(1)}>
                                Submit
                                <Icon icon="iconamoon:send-fill" />
                            </button>
                        </div>
                        <div className={`gift-status step show-${trustPoiletSteps == 1}`}>
                            <li>
                                Thanks! Results coming soon.
                                <Icon icon="flat-color-icons:ok" />
                            </li>
                        </div>
                    </div>
                </div>
            </section>
            <section className="share-tweet">
                <div className="left">
                    <Lottie
                        animationData={shareOrTweetAnimation}
                        play
                        loop />
                </div>
                <div className="right">
                    <div className="intro">
                        <h1>
                            <span>Retweet or Share</span> <br />
                            for Valuable Rewards!
                        </h1>
                        <p>
                            Share a <div className="under-line">
                                positive review about us in any social media platform</div>
                                 and send proof to our support. Get rewarded with $0.5 credit as our way of saying thank you!
                        </p>
                    </div>
                    <div className="input-box ">
                        <div className="input step">
                            <label >
                                <h2>
                                    <Icon icon="ic:baseline-image" />
                                    Click For Upload Proof
                                </h2>
                                {
                                    shareHasImage ? <Icon icon="flat-color-icons:ok" /> : <Icon icon="carbon:close-filled" color="red" />
                                }
                                <input type="file" accept="image/*"
                                    onChange={onShareFileInputChnage} />
                            </label>
                            <button
                                className={`show-${shareHasImage}`}
                                onClick={() => setShareSteps(1)}>
                                Submit
                                <Icon icon="iconamoon:send-fill" />
                            </button>
                        </div>
                        <div className={`gift-status step show-${shareSteps == 1}`}>
                            <li>
                                Thanks! Results coming soon.
                                <Icon icon="flat-color-icons:ok" />
                            </li>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default FreeCredits