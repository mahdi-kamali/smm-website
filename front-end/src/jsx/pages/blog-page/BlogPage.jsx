import Lottie from "react-lottie-player"
import introAnimation from "../../../animations/main-page/blogs-character.json"
import blogsBackgroud from "../../../animations/main-page/blogs-wave.json"
import { Icon } from "@iconify/react"
import MaxLineText from "../../cutsome-components/Text/MaxLineText"
import { put, useFetch } from "../../../lib/useFetch"
import { API, SERVER } from "../../../lib/envAccess"

import { showError, showSuccess } from "../../../lib/alertHandler"
import { useNavigate } from "react-router-dom"


const BlogPage = () => {


    const navigator = useNavigate()


    const [data, error, loading, setUrl, refresh] = useFetch(
        API.PUBLIC.BLOGS.GET
    )

    blogsBackgroud.fr = 4


    const likeBlogs = (blog) => {
        put(API.PUBLIC.BLOGS.BLOG.LIKE.PUT + blog._id)
            .then(resp => {
                showSuccess(resp)
            })
            .catch(err => {
                const errors = err?.response?.data
                showError(errors)
            })
    }

    const goDetailPage = (blog) => {
        navigator("/blog/" + blog._id)
    }



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
                    !loading ? data?.map((blog, index) => {
                        return <div className="item" key={index}>

                            <div className="item-header">
                                <img src={SERVER.BASE_URL + blog.image} alt="" />
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
                                    content={blog.title}
                                    maxLine={1}
                                    isMarquee={false}
                                    targetClass={"title"}
                                />

                                <MaxLineText
                                    content={
                                        <div className="content">
                                            {blog.excerpt}
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
                                        <Icon icon="fa-solid:comments" color="orange" />
                                    </button>
                                    <button>
                                        <Icon icon="ic:sharp-share" color="green" />
                                    </button>
                                    <button
                                        onClick={() => { likeBlogs(blog) }}>
                                        <Icon icon="fluent:thumb-like-16-filled" color="red" />
                                    </button>
                                </div>
                                <div className="right">
                                    <button
                                        className="submit"
                                        onClick={() => { goDetailPage(blog) }}>
                                        <span>
                                            Read More
                                        </span>
                                        <Icon icon="iconamoon:send-fill" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    }) : <h1>Loading...</h1>
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