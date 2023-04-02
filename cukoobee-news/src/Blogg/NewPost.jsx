import React,{useState} from 'react'

export default function NewPost() {
    const [post,newpost]=useState([]);
    const [mepost,setNewPost]=useState('');

    const handlePostChange=(event)=>{
        setNewPost(event.target.value);
    }

    const handleSetPost=(event)=>{
        event.preventDefault();
        newpost([...post,mepost]);
        setNewPost('');
    }
  return (
    
    <div className="container">
    <h1 style={{ marginTop: '80px' }}> </h1>
    <form onSubmit={handleSetPost}>
        <textarea type="text" value={mepost} onChange={handlePostChange}/>
        <button>Post!!</button>
    </form>
    <ul>
        {post.map((posts,index)=>(
            <li key={index}>{posts}</li>
        ))}
    </ul>
  </div>
  );
}
