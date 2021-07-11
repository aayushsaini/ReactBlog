import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [body, setBody] = useState("");
    const [isPublishing, setIsPublishing] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (author === "") {
            alert("Please select the author");
        }
        else{
            setIsPublishing(true);
            const blog = {title, author, body};
            fetch('http://localhost:8000/blogs', {
                method:'POST',
                headers: {'Content-Type':'Application/json'},
                body: JSON.stringify(blog)
            })
            .then(() => {
                setIsPublishing(false);
                history.push('/success');
            });
        }
    }

    return (  
        <div className="create">
            <h2>Create new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title..."
                required
                ></input>
                <label>Select Author</label>
                <select 
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option defaultValue value="">Select</option>
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                <label>Blog Body</label>
                <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
                ></textarea>
                {!isPublishing && <button>Publish</button>}
                {isPublishing && <button disabled>Publishing...</button>}
            </form>
            <p style={{marginTop:'30px'}}>Preview</p>
            <h2>{title}</h2>
            <div>{author && (<p>Written by - {author} </p>)}</div>
            <p>{body}</p>
        </div>
    );
}
 
export default Create;