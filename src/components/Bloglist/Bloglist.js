//NOTE - this is a child component of Home component

function Bloglist ({blogs, title, handleDelete}) {
    // NOTE - pass (props) as an argument
    // const blogs = props.blogs;
    // const title = props.title;

    console.log(title)
    

    return(
        <div className="blog-list" >
            <h2> {title} </h2>
          {blogs.map((blog) =>  (
               <div className="blog-preview" key={blog.id} > 
                    <h2> {blog.title} </h2>
                    <p> written by {blog.author} </p>
                    <button onClick={() => handleDelete(blog.id)} >Delete Blog</button>
               </div>
           ))} 
        </div>

    )
}

export default Bloglist