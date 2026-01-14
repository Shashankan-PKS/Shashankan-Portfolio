import './Contact.css'

function Contact(){
    return(
        <>
            <div className="contactcontent">
                <h4><i class="fa-solid fa-comment"></i> Contact Me !</h4>
                <div className="contactcontainer">
                    <form action="mailto:pkstechi2023@gmail.com" autocomplete="off" method="post" >
                        <input type="text" name="name" placeholder="Enter your name" required />
                        <input type="email" name="" placeholder="Enter your Email" required />
                        <input type="text" placeholder="Enter the Subject" required />
                        <textarea name="msg" rows="8" placeholder="Your Message" required></textarea>
                        <button type="submit" class="button" id="btn">Send Message</button>
                    </form>
                </div>
                <div className="footer">
                    <p>&copy; Copyrights <script> document.write(new Date().getFullYear()) </script> owned by Shashankan</p>
                </div>
            </div>
            
        </>
    )
}

export default Contact