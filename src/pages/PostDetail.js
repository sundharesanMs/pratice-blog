// import {useEffect, useState} from 'react';
// import { useParams} from 'react-router-dom';
// import axios from 'axios';

// export default function PostDetail() {
//     const [post, setPost] = useState(null);
//     const { id } = useParams();

//     const fetchPost = async () => {
//         try {
//             const response = await axios.get(`http://localhost:8000/api/posts/${id}`)
//             setPost(response.data);
//         } catch (error) {
//             console.error('Error fetching post:', error)
//         // }
//     }
//     useEffect(() => {
//         fetchPost();
//     }, [])

//     if (!post) {
//         return <p>Loading...</p>
//     }

    

//     return  <main class="container my-4">
//     <div class="row">
//         <article class="col-lg-8">
//             <h2 class="blog-post-title">{post.title}</h2>
//             <p class="blog-post-meta">{formattedDate} by <a href="#">{post.author}</a></p>
//             <img class="mb-3 img-fluid" src={post.image} alt="" />

//             <div class="blog-post-content">
//                 <p>{post.content}</p>
//             </div>
//         </article>
//     </div>
// </main>
// }
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function PostDetail() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const fetchPost = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/posts/${id}`);
      console.log(response);
      setPost(response.data);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
} 

    useEffect(() => {
        fetchPost()
    }, []);
    
    if (!post) {
        return <p>Loading...</p>
    }
    // date format  
    const formattedDate = Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: "numeric",
        year: "numeric"
    }).format(new Date(post.createdAt))
  
  return (
    <div>
      <main class="container my-4">
        <div class="row">
          <article class="col-lg-8">
            <h2 class="blog-post-title">{post.title}</h2>
            <p class="blog-post-meta">
              January 1, 2024 by <a href="#">{post.author}</a>
            </p>

            <img
              class="mb-3 img-fluid"
              src={post.image}
              alt=""
            />

            <div class="blog-post-content">
              <p>
                {post.content}
              </p>
              <p>
                You can include text, images, videos, and any other media that
                enriches your blog post.
              </p>
            </div>
          </article>

          <aside class="col-lg-4">
            <div class="p-4 bg-light">
              <h3 class="mb-4">Related Posts</h3>

              <div class="mb-4">
                <div class="row align-items-center">
                  <div class="col-auto">
                    <img
                      src="https://via.placeholder.com/100"
                      class="img-fluid rounded"
                      alt="Related Post Image"
                    />
                  </div>
                  <div class="col">
                    <h4>
                      <a href="#" class="text-decoration-none">
                        Related Post Title 1
                      </a>
                    </h4>
                    <p>
                      Short description or excerpt of the related post. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>

              <div class="mb-4">
                <div class="row align-items-center">
                  <div class="col-auto">
                    <img
                      src="https://via.placeholder.com/100"
                      class="img-fluid rounded"
                      alt="Related Post Image"
                    />
                  </div>
                  <div class="col">
                    <h4>
                      <a href="#" class="text-decoration-none">
                        Related Post Title 2
                      </a>
                    </h4>
                    <p>
                      Short description or excerpt of the related post. Sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
