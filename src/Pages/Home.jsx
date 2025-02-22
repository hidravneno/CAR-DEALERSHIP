import "./Home.css";
import {Link} from 'react-router-dom'


function Home() {
    return (
        <div className='Home page'>
            <h1> Experience the Finest Rides</h1>
            <img src='./images/carlogo.jpg' alt=''></img>

            <div className="info">
                <h3>sale cars </h3> 
                
            </div>
            <div className="controls">
                <Link className="btn btn-success" to="/catalog"> Check Away</Link>

            </div>
        </div>
    );
}
export default Home ;