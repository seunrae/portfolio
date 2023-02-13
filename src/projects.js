import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import Navbar from "./navbar";
function projects() {

    return (

        <div className="contain shadow ">
            <div className="img-div">
                <div>
                    <div className="img-show"></div>
                    <div className="my-5 mx-3">
                        <h2 className="ptSerif name">Ademilua Oluseun Gabriel</h2>
                    </div>
                </div>
            </div>

            <div className="content">
               <Navbar/>
                <div className="m-3">
                    <h2 className="header">PROJECTS</h2>
                    <ul>
                        <li><a href="https://github.com/seunrae/ci-cd-project">https://github.com/seunrae/ci-cd-project</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default projects;
