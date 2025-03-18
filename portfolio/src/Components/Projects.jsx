import React from 'react';
import "../Styles/project.css";
import reactimg from "../Images/mini-icons/icons8-react-native.svg"
import bootstrap from '../Images/mini-icons/icons8-bootstrap-48.png'
import chakraui from "../Images/mini-icons/icons8-chakra-ui.svg"
import nodejs from "../Images/icons8-node-js.svg"
import express from "../Images/icons8-express-js.svg"
import mongoDB from "../Images/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png"
import notes from "../Images/Notes Img.png"
import dunzo from "../Images/Dunzo.png"
import zustand from "../Images/zustand.png"

import { Tooltip } from '@chakra-ui/react';
import { AiFillGithub } from "react-icons/ai";
import { VscLiveShare } from "react-icons/vsc";


const Projects = () => {

    const dunzolink = () => {
        window.open(""); // Depolyed link is pending
    }
    const dunzogithublink = () => {
        window.open("https://github.com/rahul-adepu/DunzoProject");
    }

    const noteslink = () => {
        window.open(""); // Deployed link is pending
    }
    const notesgithublink = () => {
        window.open("https://github.com/rahul-adepu/Notes-App");
    }








    return (
        <div className='Projects-maindiv' id='projects'>
            <div className='heading project-title-div'>
                <button className='heading-textbtn'>
                    <h1 className='mainheading'>My <span style={{ color: "#0e4166" }}>Projects</span></h1>
                </button>
            </div>


            <div className='Projectcards-div'>

                {/* Dunzo project */}

                <div className="card project-card">
                    <div>
                        <img className='projectimage' src={dunzo} alt="eduhub" />
                        <div className='btnhover'>


                            <button className="Btn project-deployed-link" onClick={dunzolink}>
                                <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>

                                <div className="text">Live</div>
                            </button>


                            <button className="Btn project-github-link" onClick={dunzogithublink}>
                                <div className="gitnubicon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='svgicon' viewBox="0 0 64 64" width="30px" height="30px"><path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" /></svg>
                                </div>
                                <div className="text">Github</div>
                            </button>





                        </div>

                        <div className='Tabscreenbtns'>
                            <button onClick={dunzolink}>
                                <div>
                                    <VscLiveShare />
                                    <p>Live</p>
                                </div>
                            </button>
                            <button onClick={dunzogithublink}>
                                <div className='mobilegitbtn'>
                                    <AiFillGithub />
                                    <p>Github</p>
                                </div>
                            </button>
                        </div>


                    </div>
                    <div className="content">
                        <p className="heading project-title">Dunzo Clone</p>



                        <p className="para project-description">
                            The Dunzo Clone is a web application built using the MERN stack, focusing primarily on an intuitive and visually appealing UI. It features store-wise product listings with an add-to-cart functionality, ensuring a seamless browsing experience. The design emphasizes smooth navigation and responsiveness across all devices. The frontend is developed using React.js and Tailwind CSS, while Node.js, Express.js, and MongoDB handle the backend.
                        </p>
                        <div className='project-tech-stack techstacks'>
                            <Tooltip label="Angular" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                                <div className='icon-background'>
                                    <img className='iconimg' src={reactimg} alt="react" />
                                </div>
                            </Tooltip>
                            <Tooltip label="Bootstrap" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                                <div className='icon-background'>
                                    <img className='iconimg' src={bootstrap} alt="bootstrap" />
                                </div>
                            </Tooltip>
                            <Tooltip label="Node.JS" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                                <div className='icon-background'>
                                    <img className='iconimg' src={nodejs} alt="nodejs" />
                                </div>
                            </Tooltip>
                            <Tooltip label="Express" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                                <div className='icon-backgroundforexpress'>
                                    <img className='iconimg' src={express} alt="express" />
                                </div>
                            </Tooltip>
                            <Tooltip label="MongoDB" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                                <div className='icon-backgroundforexpress'>
                                    <img className='iconimg' src={mongoDB} alt="mongoDB" />
                                </div>
                            </Tooltip>
                        </div>
                    </div>
                    <div className='smallscreenbtns'>
                        <button onClick={dunzolink}>
                            <div>
                                <VscLiveShare />
                                <p>Live</p>
                            </div>
                        </button>
                        <button onClick={dunzogithublink}>
                            <div className='mobilegitbtn'>
                                <AiFillGithub />
                                <p>Github</p>
                            </div>
                        </button>
                    </div>

                </div>


                {/* Notes project */}

                <div className="card project-card">
                    <div>
                        <img className='projectimage' src={notes} alt="stylespot" />
                        <div className='btnhover'>


                            <button className="Btn project-deployed-link" onClick={noteslink}>
                                <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>

                                <div className="text">Live</div>
                            </button>


                            <button className="Btn project-github-link" onClick={notesgithublink}>
                                <div className="gitnubicon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='svgicon' viewBox="0 0 64 64" width="30px" height="30px"><path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" /></svg>
                                </div>
                                <div className="text">Github</div>
                            </button>





                        </div>

                        <div className='Tabscreenbtns'>
                            <button onClick={noteslink}>
                                <div>
                                    <VscLiveShare />
                                    <p>Live</p>
                                </div>
                            </button>
                            <button onClick={notesgithublink}>
                                <div className='mobilegitbtn'>
                                    <AiFillGithub />
                                    <p>Github</p>
                                </div>
                            </button>
                        </div>


                    </div>
                    <div className="content">
                        <p className="heading project-title">Notes App</p>



                        <p className="para project-description">
                            The Notes App is a responsive web application built using the MERN stack, allowing users to create, edit, and delete notes effortlessly. The UI is designed to be clean and user-friendly, ensuring a smooth experience across all devices. With a focus on simplicity and efficiency, users can manage their notes seamlessly. The frontend is built using React.js and Tailwind CSS, while Node.js, Express.js, and MongoDB handle the backend. This project highlights my skills in building intuitive and responsive interfaces.
                        </p>
                        <div className='project-tech-stack techstacks'>
                            <Tooltip label="React" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                                <div className='icon-background'>
                                    <img className='iconimg' src={reactimg} alt="react" />
                                </div>
                            </Tooltip>
                            <Tooltip label="Zustand" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                                <div className='icon-background'>
                                    <img className='iconimg' src={zustand} alt="zustand" />
                                </div>
                            </Tooltip>
                            <Tooltip label="Chakra-UI" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                                <div className='icon-background'>
                                    <img className='iconimg' src={chakraui} alt="chakraui" />
                                </div>
                            </Tooltip>
                            
                            <Tooltip label="Nodejs" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                                <div className='icon-background'>
                                    <img className='iconimg' src={nodejs} alt="nodejs" />
                                </div>
                            </Tooltip>
                            <Tooltip label="Express" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                                <div className='icon-backgroundforexpress'>
                                    <img className='iconimg' src={express} alt="express" />
                                </div>
                            </Tooltip>
                            <Tooltip label="MongoDB" hasArrow bg={"#0e4166"} paddingLeft={"5px"} paddingRight={"5px"} fontSize={"0.8rem"} color={"white"} aria-label='A tooltip'>
                                <div className='icon-backgroundforexpress'>
                                    <img className='iconimg' src={mongoDB} alt="mongoDB" />
                                </div>
                            </Tooltip>

                        </div>
                    </div>
                    <div className='smallscreenbtns'>
                        <button onClick={noteslink}>
                            <div>
                                <VscLiveShare />
                                <p>Live</p>
                            </div>
                        </button>
                        <button onClick={notesgithublink}>
                            <div className='mobilegitbtn'>
                                <AiFillGithub />
                                <p>Github</p>
                            </div>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects;