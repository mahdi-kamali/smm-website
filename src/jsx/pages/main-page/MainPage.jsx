


import person from "../../../images/main-page/poster/char.svg"


const MainPage = () => {
    return (
        <main className="main-page">
            <section className="poster">
                <div className="left">
                    <h1>
                        WE MAKE BEST <br />
                        IN SOCIAL <br />
                        MARKETING
                    </h1>
                    <small>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a
                    </small>
                    <div className="buttons">
                        <button>Get Started</button>
                        <button>Read More</button>
                    </div>
                </div>
                <div className="right">
                    <img src={person} alt="" />
                </div>
                <div className="background">

                </div>
            </section>

            <section className="intro">
                <div className="start">
                    <h1>Why Choose Us ?</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                </div>
                <div className="road">
                    <div className="right">
                        <h2>Cheapest <span>Prices</span></h2>
                        <p>We are proud to offer the fastest SMM services! Our team works hard to ensure that your order is processed and delivered as quickly as possible!</p>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default MainPage