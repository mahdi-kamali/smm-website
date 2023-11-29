import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetch } from '../../../lib/useFetch'
import { API, SERVER } from '../../../lib/envAccess'
import { Icon } from '@iconify/react';



export default function BlogDetailPage() {


  const { blogID } = useParams()
  const navigator = useNavigate()


  const [blog, error, loading, setUrl, refresh] = useFetch(
    API.PUBLIC.BLOGS.BLOG.GET + blogID
  )





  if (error) {
    navigator("/404")
  }




  return (
    <main className='blog-detail-page'>
      <div className="poster">
        <img src={SERVER.BASE_URL + blog.image} alt="" />
      </div>

      <div className="info">
        <div className="header">
          <div className="left">
            <h1>{blog.title}</h1>
          </div>
          <div className="right">
            <div className="date">
              <Icon icon="clarity:date-solid" />
              <span>
                {new Date(blog.createdAt).toUTCString()}
              </span>
            </div>
          </div>
        </div>
        <div className="body">
          <p>
            {blog.description}
          </p>
        </div>
      </div>




      <div className="comments">
        <div className="item">

        </div>
      </div>

    </main>
  )
}
