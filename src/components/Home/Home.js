import { useState, useEffect } from 'react';
import Bloglist from '../Bloglist/Bloglist';

function Home () {

    const [blogs, setBlogs] = useState ([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const [name, setName] = useState('Mario')

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id )
        setBlogs(newBlogs)
    }
    //this function filters the blogs by id and filters out (deletes) by returning false if the id matches the blog.id(button clicked)
    //blog is defined in the map method on the Bloglist component - it repesents each item of the blogs array
    //the id property is within the blog

    useEffect (() => {
        console.log('use effect ran')
        console.log(name)
    }, );
    //useEffect function fires on every render - every change of data
    //useEffect is useful when you need to tun code on every render
    //add an empty dependency array to only run useEffect function upon loading (1 time)
    //add state to dependency array so that function only runs if the state is changed - e.g. name

    return(
        <div className="home" >
           <Bloglist blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
           <Bloglist blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" handleDelete={handleDelete}  />
           <Bloglist blogs={blogs.filter((blog) => blog.author === 'yoshi' )} title = "Yoshi's Blog" handleDelete={handleDelete} />
        </div>

    )
}

/*
PROPS 
1 - enables you to pass data from a parent compenent (Home) to a child component (Bloglist)
2 - blogs={blogs} passes the blogs data dynamically as a prop called 'blogs' in this case. This is now being passed into the <Bloglist/> component
3 - the prop is received in the child component (Bloglist) by passing props into the Bloglist argument (props) - or the specific key names. e.g. title

.filter() method
1 - 'blog' is a changable word which represents every item in the array being filtered
2 - does NOT mutate the data
3 - define variable for new array to be stored

*/

export default Home