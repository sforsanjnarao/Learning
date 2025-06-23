const { default: axios } = require("axios");

async function getBlogs(){
    const res=await axios.get("https://jsonplaceholder.typicode.com/todos/")
    return res.data
}


export default async function Blogs() {
    const blogs=await getBlogs()
    return(
        <div>
            {blogs.map((e, index)=>(
                //  <Todo title={e.title} completed={e.completed}/>
                <div>
                    <p>title: {e.title}</p>
                    <h1>completed:{e.completed ? "done":"not done"}</h1>
                </div>
            ))}
            {/* {JSON.stringify(blogs)} */}
        </div>
    )
}

// function Todo({title, completed}){
//     return <div>
//         {title}{completed? "done": "not done"}
//     </div>
// }