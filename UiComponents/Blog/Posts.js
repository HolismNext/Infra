import Link from 'next/link'

const Posts = ({
    posts,

}) => {
    /*
    title
    categories, tags
    date
    subtitle
    featured image
    x min read
    
    */
    return <div className=" md:grid md:grid-cols-2 gap-4 xl:grid-cols-3 xl:gap-6 xl:my-12">
        {
            Object.keys(posts).map(key => {
                const post = posts[key];
                const url = key.startsWith('/') ? key : `/${key}`;
                return <div key={key} className="bg-white border-b md:border-b-0 p-6 xl:h-48 xl:rounded-md">
                    <div>
                        <Link href={url}>
                            <a className="prose text-2xl">{post.title}</a>
                        </Link>
                        <div className="text-sm text-slate-400">{post.date}</div>
                    </div>
                </div>
            })
        }
    </div>
}

export default Posts;