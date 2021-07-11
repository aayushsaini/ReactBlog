import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { useHistory } from "react-router";

const BlogDetails = () => {

    const { id } = useParams();
    const {data, isPending, error} = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();

    const handleDelete = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method:'DELETE'
        })
        .then(() => {
            alert("Successfully Deleted!");
            history.push('/');
        })
    }

    return (  
        <div className="blog-details">
            { isPending && <div>Loading blog...</div> }
            { error && <div>Oops! We ran into a bug</div> }
            { data && (
                <article>
                    <h2>{ data.title }</h2>
                    <p>Written by - {data.author}</p><br/>
                    <p>{data.body}</p><br />
                    <button onClick={handleDelete}>Delete blog</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;