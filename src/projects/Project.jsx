import './Project.css'
import project1 from '../assets/p8.jpg'
import project2 from '../assets/p2.png'
import project3 from '../assets/p3.png'
import project4 from '../assets/p4.png'
import project5 from '../assets/p5.png'
import project6 from '../assets/p6.png'
import project7 from '../assets/p7.png'
import project8 from '../assets/p9.png'
import project9 from '../assets/p10.png'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'

function Project(){

    const projects = [
        {
            id : 1,
            title : "Online Bus Reservation",
            image : project1,
            description : "React-based web application for booking bus tickets with seat selection and dynamic pricing",
            site : "https://payanam-onlinebus-app.vercel.app/",
            btn : "View Website"
        },
        {
            id : 2,
            title : "Real Estate Application",
            image : project8,
            description : "MERN stack application with property listings, authentication using oAuth",
            site : "#",
            btn : "View Source Code"
        },
        {
            id : 3,
            title : "AI Chatbot Application",
            image : project9,
            description : "MERN-based AI chatbot with authentication and real-time responses",
            site : "https://github.com/Shashankan-PKS/AiThink-App",
            btn : "View Source Code"
        },
        {
            id : 4,
            title : "To-Do List Application",
            image : project2,
            description : "Simple task management app built using HTML, CSS, and JavaScript",
            site : "https://shashankan-pks.github.io/todoapp/",
            btn : "View Website"
        },
        {
            id : 5,
            title : "Weather Application",
            image : project3,
            description : "Simple weather checking app built using HTML, CSS, and JavaScript",
            site : "https://shashankan-pks.github.io/checkweather/",
            btn : "View Website"
        },
        {
            id : 6,
            title : "Calculator",
            image : project4,
            description : "To understanding the function and built in methods",
            site : "https://shashankan-pks.github.io/calculator/index.html",
            btn : "View Website"
        },
        {
            id : 7,
            title : "Temperature Conversion",
            image : project5,
            description : "Temperature conversion website using HTML,CSS and Javascript",
            site : "https://shashankan-pks.github.io/calculator/Calculator/temperature%20converter/temp.html",
            btn : "View Website"
        },
        {
            id : 8,
            title : "Length conversion",
            image : project6,
            description : "Length conversion website using HTML,CSS and Javascript",
            site : "https://shashankan-pks.github.io/calculator/Calculator/length%20convertor/leng.html",
            btn : "View Website"
        },
        {
            id : 9,
            title : "Speed conversion",
            image : project7,
            description : "Speed conversion website using HTML,CSS and Javascript",
            site : "https://shashankan-pks.github.io/calculator/Calculator/speed%20converter/speed.html",
            btn : "View Website"
        }
    ]
    return(
        <>
            <Box sx={{ display : "flex", justifyContent : "center", flexDirection : "column", textAlign : "center"}}>
                <Typography variant='h5' sx={{ fontWeight : 550, padding : "10px", fontFamily : "Poppins"}}> My Projects </Typography>
                <Grid container spacing={4} sx={{ padding: "20px" }}>
                    {projects.map((project) => (
                        <Grid item size={{xs: 12, sm: 6, md: 4}} key={project.id}>
                            <Card sx={{ height: "100%", borderRadius: 3 , background : "rgb(56,56,56)", textAlign : "center"}}>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={project.image}
                                    sx={{ width: "fitContent",transition: "transform 0.6s ease", "&:hover": { transform: "scale(1.1)" }}}
                                    alt="Online Bus Reservation App"
                                />
                                <CardContent>
                                    <Typography variant="h6" fontWeight={600} sx={{color : "rgb(255,30,0)", fontFamily : "Poppins"}}>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" mt={1} sx={{color : "whitesmoke", fontFamily : "Poppins"}}>
                                        {project.description}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ paddingX: 2, paddingBottom: 2 ,display : "flex", justifyContent : "center"}}>
                                    <Button size="small" variant="contained" href={project.site} target="_blank" sx={{ textTransform : "none", background : "rgb(255,30,0)", borderRadius : "20px", padding : "10px", fontFamily : "Poppins"}}>
                                    {project.btn}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}

export default Project