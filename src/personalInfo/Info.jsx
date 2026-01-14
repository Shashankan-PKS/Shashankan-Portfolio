import './Info.css'

function Info(){
    return(
        <>
            <div className="info">
                <h3>Personal Information</h3>
                <div className="infocontent">
                    <div className="infocontainer">
                        <div className="information">
                            <h5><span><i class="fa-solid fa-user"></i> Name : </span>Shashankan P K</h5>
                            <h5><span><i class="fa-solid fa-calendar"></i> DOB : </span>May 1, 2003</h5>
                            <h5><span><i class="fa-solid fa-phone"></i> Mobile : </span>9600314640</h5>
                            <h5><span><i class="fa-solid fa-envelope"></i> Email : </span>pksshashankan@gmail.com</h5>
                            <h5><span><i class="fa-solid fa-location-dot"></i> Address : </span>Ramapuram , Chennai, Tamil Nadu</h5>
                            <h5><span><i class="fa-solid fa-graduation-cap"></i> Degree : </span>Bachelor's Degree in Electronics and Communication Engineering</h5>
                        </div>
                        <div className="eduqual">
                            <h4><i class="fa-solid fa-user-graduate"></i> Educational Qualification</h4>
                            <div className="academic">
                                <h5>2020 - 2024</h5>
                                <h6>Bachelor of Engineering(B.E), Electronics and Communication Engineering <br /> <br /> 
                                Government College of Engineering, Sengipatti, Thanjavur, Tamil Nadu <br /> <br />
                                <span>CGPA : 7.80 </span></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Info