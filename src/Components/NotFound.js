import { Link } from "react-router-dom"

const NotFound = () => {
    return (  
        <div className="not-found">
            <h1>Error 404</h1>
            <h2>Page does not exists</h2>
            <Link to="/">Go home</Link>
        </div>
    );
}
 
export default NotFound;