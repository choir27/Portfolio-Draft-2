import React from "react"
import Header from "../components/Header"
import Project from "../components/Project"
import Nav from "../components/Nav"
import "../assets/css/global.css"
import "../assets/css/globalMediaQuery.css"
import styles from "../assets/css/main.module.css"
import kPop from "../images/kpopwired.png"
import autoAligners from "../images/autoaligners.png"
import theRealEstate from "../images/therealestatebeast.png"

export default function Home(){
    return(
    <main>

        <Nav/>


        <Header/>

        <section id = "project">
            <h3>My Projects</h3>

            <section className ={`${styles.flex} ${styles["justify-between"]} ${styles["flex-wrap"]} ${styles["align-center"]} projects`}>
            <Project projectName = "AutoAligners" codeURL = "https://github.com/choir27/autoAligners" demoURL = "" projectIMG = {autoAligners.src} projectALT = "website landing page preview of AutoAligners" projectTech = {["TypeScript", "AppWrite", "Vite"]} projectDescription="AutoAligners allows the client to reserve various car services and submit an estimate for a car service.  Employees are able to manage aspects of the client, ranging from the purchases they made, to the reservations they made."/>

            <Project projectName = "The Real Estate Beast" codeURL = "https://github.com/choir27/The-Real-Estate-Beast" demoURL = "https://therealestatebeast.netlify.app" projectIMG = {theRealEstate.src} projectALT="website landing page preview of The Real Estate Beast" projectTech = {["CSS", "HTML"]} projectDescription = "The Real Estate Beast is a real estate website that demonstrates Carleton Badgers' history of satisfied clients, while also providing home value estimations and available homes for purchase."/>

            <div className="flex justify-center">
                <Project classNames = "width-100" projectName = "Kpop Wired" codeURL = "https://github.com/choir27/Kpop-Wired" demoURL = "https://kpopwired.netlify.app" projectIMG = {kPop.src} projectALT="website landing page preview of Kpop Wired" projectTech = {["React", "MongoDB", "Node"]} projectDescription = "K-pop Wired is an audio service web application where users are able to add their own music tracks. Users can also create playlists where they add music tracks from various users, includings themselves."/>
            </div>

            </section>

        </section>

      
    </main>
    )
}