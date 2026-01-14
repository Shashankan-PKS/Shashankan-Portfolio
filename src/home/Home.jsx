import './Home.css'
import pic from '../assets/Professional_image.png'
import Shashankan_P_K_Resume from '../assets/Shashankan_Resume.pdf'
import { motion } from 'framer-motion'

function Home() {
    return(
        <>
            <div className="content">
                <div className='container'>
                    <div className="profile">
                        <motion.div className="profilepicture"
                            initial = {{ x : "-100vw" }} animate = {{ x : "0vw" }} transition={{type:"tween", duration : 1.5}}
                        >
                            <img src={pic} />
                            <h2 className='mt-3'>Shashankan P K</h2>
                        </motion.div>
                        <motion.div className="personalskills" 
                            initial = {{ x : "100vw" }} animate = {{ x : "0vw" }} transition={{type:"tween", duration : 1.5}}
                        >
                            <h5>Hi 👋 , I’m Shashankan, Graduated as an Engineer in the Electronics and Communication Engineering. A passionate Web Developer who loves building clean, modern, and user-friendly websites.  
                                I specialize in turning ideas into interactive digital experiences. <br/> <br /> check me out here <br /> <br />
                                <div class="socials">
                                    <a href="https://github.com/Shashankan-PKS" target="_blank"><i class="fa-brands fa-github mx-2"></i></a>
                                    <a href="https://www.instagram.com/pks_1503/" target="_blank"><i class="fa-brands fa-instagram mx-4"></i></a>
                                    <a href="https://www.linkedin.com/in/shashankan-p-k-5b09a2216/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                            </h5>
                        </motion.div>
                    </div>
                    <motion.div class="res" initial = {{ y : 1000 }} animate = {{ y : 0 }} transition={{type:"tween", duration : 1.5}}>
                        <button type="button"><a href={Shashankan_P_K_Resume} download='Shashankan_P_K_Resume'> <i class="fa-regular fa-file"></i> Resume Download</a></button>
                    </motion.div>
                </div>
            </div>
                
        </>
    )
}
export default Home