import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import Navbar from "./navbar";
function Home() {

    return (
        <div className="contain shadow ">
            <div className="img-div">
                <div>
                    <div className="img-show mx-4"></div>
                    <div className="my-5 mx-3">
                        <h2 className="ptSerif name">Ademilua Oluseun Gabriel</h2>
                    </div>
                </div>
            </div>
            <div className="content">
                <Navbar/>
                <div className="m-3">
                    <h2 className="header">DESCRIPTION</h2>
                    <p className="ptSerif">I am a talented software engineer with a strong skill set in Java,
                        Spring Boot Framework, Hibernate, HTML, CSS, and React.js.
                        With experience working on various projects such as a Facebook clone,
                        Fashion Blog API, Activity Tracker, and a budget calculator,
                        i have demonstrated your ability to deliver high-quality software solutions.
                        My proficiency in these technologies has enabled you to make valuable contributions
                        to both individual and collaborative projects.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
