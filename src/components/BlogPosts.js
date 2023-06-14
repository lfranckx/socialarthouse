import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import "../styles/BlogPosts.scss";
import { Link } from 'react-router-dom';

const BlogList = () => {
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://blog.lfxmedia.net/wp/wp-json/wp/v2/posts?_embed");
        
                if (!response.ok) {
                    throw new Error(`An error occurred: ${response.statusText}`);
                }
        
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                setError(error.message);
            }
        };
      
        fetchData();
    }, []);

    const renderPosts = () => {
        if (!posts) {
            return (
                <div className='loader'>
                    <div className='spinner'></div>
                </div>
            );
        }

        if (posts) {
            return (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <Link to={`/${post.id}`}>
                                <div className='list-item-wrap'>
                                    <h2 className='post_title' dangerouslySetInnerHTML={{__html: post.title.rendered}}></h2>
                                    <img className='featured_img'
                                        src={post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : "https://socialarthouse.s3.us-east-2.amazonaws.com/Logos/SAH_BIG.png"} 
                                        alt={post.title.rendered} 
                                    />
                                    <div className='post_content' dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            );
        }
    }

    return (
        <main>
            <animated.div style={props} id="blog-posts">
                {error ? <h2>There was an error: {error}</h2> : renderPosts()}
            </animated.div>
        </main>
    );
}

export default BlogList;