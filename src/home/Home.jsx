import './Home.css'
import pic from '../assets/picdummy.jpg'

function Home() {
    return(
        <>
            <div className="content">
                <div className='container'>
                    <div className="profile">
                        <div className="profilepicture">
                            <img src={pic} />
                            <h2 className='mt-3'>Shashankan P K</h2>
                        </div>
                        <div className="personalskills">
                            <h5>Hi 👋 , I’m Shashankan, Graduated as an Engineer in the Electronics and Communication Engineering. A passionate Web Developer who loves building clean, modern, and user-friendly websites.  
                                I specialize in turning ideas into interactive digital experiences. <br/> <br /> check me out here <br /> <br />
                                <div class="socials">
                                    <a href="https://github.com/Shashankan-PKS" target="_blank"><i class="fa-brands fa-github mx-4"></i></a>
                                    <a href="https://www.instagram.com/pks_1503/" target="_blank"><i class="fa-brands fa-instagram mx-4"></i></a>
                                    <a href="https://www.linkedin.com/in/shashankan-p-k-5b09a2216/" target="_blank"><i class="fa-brands fa-linkedin mx-4"></i></a>
                                </div>
                            </h5>
                        </div>
                    </div>
                    <div class="res">
                        <button type="button"> <i class="fa-regular fa-file"></i> Resume Download</button>
                    </div>
                </div>
            </div>
                
        </>
    )
}
export default Home