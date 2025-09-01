import './Project.css'
import project1 from '../assets/busreserv_homepage.jpg'
import project2 from '../assets/p2.png'
import project3 from '../assets/p3.png'
import project4 from '../assets/p4.png'
import project5 from '../assets/p5.png'
import project6 from '../assets/p6.png'
import project7 from '../assets/8.png'

function Project(){
    return(
        <>
            <div className="projectcontent">
                <h4>My Projects <i class="fa-solid fa-keyboard"></i> </h4>
                <div className="projectcontainer">
                    <div className="project1">
                        <div className="project1img">
                            <img src={project1} />
                        </div>
                        <div className="project1exp">
                            <h4>Online bus reservation project using HTML, CSS, Javascript, PHP and MySql for Database</h4>
                            <a class="btn" href="https://github.com/Shashankan-PKS/online_busreserv" target="_blank" role="button">view Source code</a>
                        </div>
                    </div>
                    <div className="project2">
                        <div className="project1exp">
                            <h4>To-Do List website using HTML,CSS and Javascript</h4>
                            <a class="btn" href="https://shashankan-pks.github.io/todoapp/" target="_blank" role="button">view Website</a>
                        </div>
                        <div className="project1img">
                            <img src={project2} />
                        </div>
                    </div>
                    <div className="project3">
                        <div className="project1img">
                            <img src={project3} />
                        </div>
                        <div className="project1exp">
                            <h4>Weather Checking website using HTML,CSS and Javascript</h4>
                            <a class="btn" href="https://shashankan-pks.github.io/checkweather/" target="_blank" role="button">view Website</a>
                        </div>
                    </div>
                    <div className="project4">
                        <div className="project1exp">
                            <h4>Calculator website using HTML,CSS and Javascript</h4>
                            <a class="btn" href="https://shashankan-pks.github.io/calculator/index.html" target="_blank" role="button">view Website</a>
                        </div>
                        <div className="project1img">
                            <img src={project4} />
                        </div>
                    </div>
                    <div className="project3">
                        <div className="project1img">
                            <img src={project5} />
                        </div>
                        <div className="project1exp">
                            <h4>Temperature conversion website using HTML,CSS and Javascript</h4>
                            <a class="btn" href="https://shashankan-pks.github.io/calculator/Calculator/temperature%20converter/temp.html" target="_blank" role="button">view Website</a>
                        </div>
                    </div>
                    <div className="project4">
                        <div className="project1exp">
                            <h4>Length conversion website using HTML,CSS and Javascript</h4>
                            <a class="btn" href="https://shashankan-pks.github.io/calculator/Calculator/length%20convertor/leng.html" target="_blank" role="button">view Website</a>
                        </div>
                        <div className="project1img">
                            <img src={project6} />
                        </div>
                    </div>
                    <div className="project3">
                        <div className="project1img">
                            <img src={project7} />
                        </div>
                        <div className="project1exp">
                            <h4>Speed conversion website using HTML,CSS and Javascript</h4>
                            <a class="btn" href="https://shashankan-pks.github.io/calculator/Calculator/speed%20converter/speed.html" target="_blank" role="button">view Website</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project