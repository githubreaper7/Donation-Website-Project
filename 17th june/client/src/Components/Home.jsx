import { Link } from "react-router-dom";

const Home = () => {
    return (  
        <div>
            <div>Home</div>
            {/* <button type="submit">Join Us</button> */}
            <button><Link to="/choose">Joins us</Link></button>
        </div>
    );
}
 
export default Home;
