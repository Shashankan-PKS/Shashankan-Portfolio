import './Skills.css'
import materialui from '../assets/icons8-material-ui.svg'
import express from '../assets/icons8-express-js.svg'
import mangodb from '../assets/icons8-mongo-db-38.png'

function Skills(){

    return(
        <>
            <div className="skillcontent">
                <h4>Developer's Skills <i class="fa-solid fa-code"></i></h4>
                <div className="skillscontainer">
                    <div className="skillsets">
                        <div class="skills">
                            <i class="fa-brands fa-html5"></i>
                            <p>HTML</p>
                        </div>
                        <div class="skills">
                            <i class="fa-brands fa-css3-alt"></i>
                            <p>CSS</p>
                        </div>
                        <div class="skills">
                            <i class="fa-brands fa-js"></i>
                            <p>Javascript</p>
                        </div>
                        <div class="skills">
                            <i class="fa-brands fa-react"></i>
                            <p>React Js</p>
                        </div>
                        <div class="skills">
                            <i class="fa-brands fa-python"></i>
                            <p>Python</p>
                        </div>
                        <div class="skills">
                            <i class="fa-solid fa-c"></i>
                            <p>C Programming</p>
                        </div>
                        <div class="skills">
                            <i class="fa-brands fa-php"></i>
                            <p>PHP</p>
                        </div>
                        <div class="skills">
                            <i class="fa-brands fa-bootstrap"></i>
                            <p>Bootstrap</p>
                        </div>
                        <div class="skills">
                            <i class="fa-brands fa-node-js"></i>
                            <p>Node Js</p>
                        </div>
                        <div class="skills">
                            <img src={materialui} alt="" />
                            <p>Material ui</p>
                        </div>
                        <div class="skills">
                            <img src={express} alt="" />
                            <p>Express Js</p>
                        </div>
                        <div class="skills">
                            <img src={mangodb} alt="" />
                            <p>Mango DB</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills