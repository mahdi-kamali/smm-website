import Lottie from "react-lottie-player"


import introAnimation from "../../../animations/main-page/blogs-character.json"
import blogsBackgroud from "../../../animations/main-page/blogs-wave.json"
import { Icon } from "@iconify/react"

const BlogPage = () => {

    blogsBackgroud.fr = 4


    const items = [
        {
            "title": "The Power of Social Media Engagement",
            "date": "2023-08-15",
            "image": "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvY2lhbCUyMG1lZGlhJTIwbWFya2V0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            "excerpt": "Discover how effective engagement on social media platforms can drive brand loyalty and increase conversion rates.",
            "link": "https://example.com/blog/power-of-social-media-engagement"
        },
        {
            "title": "Crafting Compelling Content for Instagram",
            "date": "2023-07-25",
            "image": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29jaWFsJTIwbWVkaWElMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            "excerpt": "Learn valuable tips on creating visually stunning and engaging content for Instagram that captivates your audience.",
            "link": "https://example.com/blog/crafting-compelling-content-for-instagram"
        },
        {
            "title": "Unlocking the Potential of LinkedIn for B2B",
            "date": "2023-06-10",
            "image": "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29jaWFsJTIwbWVkaWElMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            "excerpt": "Explore how businesses can leverage LinkedIn to build industry authority, connect with professionals, and generate leads.",
            "link": "https://example.com/blog/unlocking-potential-of-linkedin-for-b2b"
        },
        {
            "title": "Mastering Twitter: Strategies for Effective Marketing",
            "date": "2023-05-02",
            "image": "https://images.unsplash.com/photo-1491951931722-5a446214b4e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNvY2lhbCUyMG1lZGlhJTIwbWFya2V0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            "excerpt": "Dive into the world of Twitter marketing and discover tactics for maximizing your brand's impact in 280 characters.",
            "link": "https://example.com/blog/mastering-twitter-strategies-for-marketing"
        },
        {
            "title": "Visual Storytelling on Pinterest: A Guide for Brands",
            "date": "2023-04-12",
            "image": "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvY2lhbCUyMG1lZGlhJTIwbWFya2V0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            "excerpt": "Learn how to harness the power of visual storytelling on Pinterest to showcase your brand and inspire users.",
            "link": "https://example.com/blog/visual-storytelling-on-pinterest-guide-for-brands"
        }

    ]



    return (
        <main className="blog-page">
            <div className="intro">
                <div className="left">
                    <Lottie
                        animationData={introAnimation}
                        play
                        loop />

                </div>
                <div className="right">
                    <h1>
                        SMM PANEL BLOG
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis numquam sapiente harum molestias? Architecto distinctio aperiam assumenda est minima numquam vero deserunt nobis, error magni maiores recusandae, velit tempora. Esse.
                    </p>
                </div>

            </div>

            <div className="blog-items">
                {
                    items.map((item, index) => {
                        return <div className="item" key={index}>
                            <div className="item-header">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="item-body">
                                <h1 className="title">
                                    {item.title}
                                </h1>
                                <p className="excerpt">
                                    {item.excerpt}
                                </p>

                            </div>
                            <div className="item-buttons">
                                <button className="submit">
                                    <span>
                                        Read More
                                    </span>
                                    <Icon icon="iconamoon:send-fill" />
                                </button>
                                <button className="share">
                                    <span>
                                        Share
                                    </span>
                                </button>
                            </div>
                        </div>
                    })
                }

            </div>

            <div className="background">
                <Lottie
                    className="wave"
                    animationData={blogsBackgroud}
                    play
                    loop />
            </div>

        </main>
    )
}

export default BlogPage