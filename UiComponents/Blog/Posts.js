import Link from 'next/link'

const Posts = ({ posts }) => {
    /*
    title
    categories, tags
    date
    subtitle
    featured image
    x min read
    
    */
    return <div>
        {
            Object.keys(posts).map(key => {
                const post = posts[key];
                return <div key={key}>
                    <Link href={key}><a className="text-red-400">{post.title}</a></Link>
                    {post.date}
                </div>
            })
        }
    </div>
}

export default Posts;