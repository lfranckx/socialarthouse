import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "../styles/BlogPosts.scss";


const BlogPostItem = () => {

    let params = useParams();
    const postId = params.postid;

    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://blog.lfxmedia.net/wp/wp-json/wp/v2/posts/${postId}?_embed`);
        
                if (!response.ok) {
                    throw new Error(`An error occurred: ${response.statusText}`);
                }
        
                const data = await response.json();
                setPost(data);
            } catch (error) {
                setError(error.message);
            }
        };
      
        fetchData();
    }, [postId]);

    const renderPost = () => {
        if (!post) {
            return <div className='loader'><div className='spinner'></div></div>
        }

        return (
            <div className='article-content'>
                <div className='list-item-wrap'>
                    <h2 className='post_title' dangerouslySetInnerHTML={{__html: post.title.rendered}}></h2>
                    <img className='featured_img'
                        src={post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : "https://socialarthouse.s3.us-east-2.amazonaws.com/Logos/SAH_BIG.png"} 
                        alt={post.title.rendered} 
                    />
                    <div className='post_content' dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
                </div>
            </div>
        );
    }

    return (
        <main>
            <div id="blog-article">
                {error ? <h2>There was an error: {error}</h2> : renderPost()}
            </div>
        </main>
    )
}

export default BlogPostItem;