// import { useState } from "react";
import useFetch from "../Hooks/useFetch";
import BlogList from "./BlogList";

const Home = () => {

    const { data, isPending, error } = useFetch("http://localhost:8000/blogs");

    return ( 
        <div className="home">
            <h2>My feed</h2>
            { isPending && <p>Loading...</p>}
            { error && <p>Some error occured, please try again</p>}
            { data && <BlogList blogs={data} /> }
        </div>
    );
}
 
export default Home;