import Lottie from "react-lottie-player"


import introAnimation from "../../../animations/main-page/blogs-character.json"
import blogsBackgroud from "../../../animations/main-page/blogs-wave.json"
import { Icon } from "@iconify/react"
import MaxLineText from "../../cutsome-components/Text/MaxLineText"
import BlogAccordion from "../../cutsome-components/accordion/BlogAccordion"

const BlogPage = () => {

    blogsBackgroud.fr = 4


    const items = [
        {
            "title": "The Power of Social Media Engagement",
            "date": "2023-08-15",
            "image": "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvY2lhbCUyMG1lZGlhJTIwbWFya2V0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            "excerpt": "In today's digital age, harnessing the power of social media engagement has become a cornerstone of successful brand strategies. The ability to connect with your audience on platforms like Facebook, Instagram, Twitter, and more can greatly influence brand loyalty and even conversion rates. By engaging with your followers through comments, likes, shares, and interactive content, you're not only building a community around your brand but also establishing a two-way communication channel that humanizes your business. This blog post delves deep into the strategies and tactics that can help you effectively leverage social media engagement to its fullest potential. Whether it's responding promptly to customer inquiries or creating content that resonates emotionally, understanding the nuances of engagement can truly set your brand apart in the competitive digital landscape. [Read more](https://example.com/blog/power-of-social-media-engagement)"
        },
        {
            "title": "Crafting Compelling Content for Instagram",
            "date": "2023-07-25",
            "image": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29jaWFsJTIwbWVkaWElMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            "excerpt": "Instagram's visual-centric nature demands content that doesn't just catch the eye but also tells a story. Crafting compelling content for this platform goes beyond the superficial, focusing on creating posts that convey a narrative and evoke emotions. From stunning imagery to attention-grabbing captions, each element plays a role in capturing and"
        },
        {
            "title": "Unlocking the Potential of LinkedIn for B2B",
            "date": "2023-06-10",
            "image": "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29jaWFsJTIwbWVkaWElMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            "excerpt": "LinkedIn isn't just a platform for professional networking; it's also a goldmine for B2B opportunities. This blog post explores how businesses can strategically utilize LinkedIn to build industry authority, forge meaningful connections with fellow professionals, and generate valuable leads. The B2B landscape thrives on trust and credibility, and LinkedIn provides the perfect setting to establish these qualities. From optimizing your company page to creating and sharing insightful content, this guide uncovers the methods that can help your brand unlock the true potential of LinkedIn in the B2B realm. [Read more](https://example.com/blog/unlocking-potential-of-linkedin-for-b2b)"
        },
        {
            "title": "Mastering Twitter: Strategies for Effective Marketing",
            "date": "2023-05-02",
            "image": "https://images.unsplash.com/photo-1491951931722-5a446214b4e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNvY2lhbCUyMG1lZGlhJTIwbWFya2V0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            "excerpt": "With its concise yet impactful format, Twitter offers a unique platform for effective marketing. Mastering this platform involves more than just succinct messages; it requires an understanding of the platform's dynamics, audience engagement tactics, and trend utilization. This blog post delves into strategies that empower brands to make the most out of Twitter's 280-character limit. From hashtag campaigns to fostering real-time interactions, every tweet can become an opportunity to amplify your brand's message and presence. Explore how to navigate the fast-paced world of Twitter marketing and create a meaningful impact in a compact space. [Read more](https://example.com/blog/mastering-twitter-strategies-for-marketing)"
        },
        {
            "title": "Visual Storytelling on Pinterest: A Guide for Brands",
            "date": "2023-04-12",
            "image": "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvY2lhbCUyMG1lZGlhJTIwbWFya2V0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            "excerpt": "In the visual realm of Pinterest, storytelling takes on a new dimension. This guide delves into the art of visual storytelling on Pinterest, where images and aesthetics are at the forefront. For brands, it's not just about showcasing products; it's about weaving narratives that resonate with the audience's aspirations and inspirations. Through carefully curated boards, captivating imagery, and strategic pinning, brands can communicate their essence and connect with users on a deeper level. Discover the methods to harness the power of visual storytelling on Pinterest and learn how to effectively engage users through imagery that speaks volumes. [Read more](https://example.com/blog/visual-storytelling-on-pinterest-guide-for-brands)"
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
                                <div className="item-info">
                                    <div className="sender">
                                        <div className="sender-image">
                                            <img src={require("../../../images/panel/panel-header/avatar.jpg")} alt="" />
                                        </div>
                                        <div className="sender-info">
                                            <div className="name">
                                                Alex Jorden
                                            </div>
                                            <div className="role">
                                                Project Manager
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item-body">
                                <MaxLineText
                                    content={item.title}
                                    maxLine={1}
                                    isMarquee={false}
                                    targetClass={"title"}
                                />

                                 <MaxLineText
                                    content={
                                        <div className="content">
                                            {item.excerpt}
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consequatur debitis tempore nesciunt, earum odit temporibus nulla aliquid alias vitae id atque, pariatur dignissimos. Nostrum eveniet nisi nulla eos dolor.
                                            </p>
                                        </div>
                                    }
                                    maxLine={4}
                                    targetClass={"excerpt"}
                                />



                            </div>
                            <div className="item-buttons">
                                <div className="left">
                                    <button>
                                        <Icon icon="logos:twitter" />
                                    </button>
                                    <button>
                                        <Icon icon="logos:telegram" />
                                    </button>
                                    <button>
                                        <Icon icon="skill-icons:instagram" />
                                    </button>
                                </div>
                                <div className="right">
                                    <button className="submit">
                                        <span>
                                            Read More
                                        </span>
                                        <Icon icon="iconamoon:send-fill" />
                                    </button>
                                </div>
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