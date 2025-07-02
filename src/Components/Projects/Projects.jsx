import './Projects.css';
import expenseImage from '../../Assets/expense-tracker-app.png';
import weatherImage from '../../Assets/Weather-Application.png';
import { FaGithub } from "react-icons/fa";

const Projects = () =>{

    const projects_array =[
        {id:1, name:"Expense Tracker", technologies: 'React, JavaScript', icon: <img src={expenseImage} alt='Expense_Tracker'/>, github: 'https://github.com/manish-nalla/expense_tracker'},
        {id:2, name:"Weather App", technologies: 'React, Tailwind, API Integration', icon: <img src={weatherImage} alt='Weather_Application'/>, github: 'https://github.com/manish-nalla/Weather'},
        // {id:3, name:"Weather App", technologies: 'React, Tailwind, API Integration', icon: <img src={weatherImage} alt='Weather_Application'/>, github: 'https://github.com/manish-nalla/Weather'},
        // {id:4, name:"Weather App", technologies: 'React, Tailwind, API Integration', icon: <img src={weatherImage} alt='Weather_Application'/>, github: 'https://github.com/manish-nalla/Weather'},
    ]

    return (
        <div className='projects_container' id='projects'>
            <h1 className='heading'>Projects</h1>
            <div className="card_container">
                    {projects_array.map((project)=>(
                        <div className="card" key={project.id}>
                            <div className="project_icon">{project.icon}</div>
                            <div className="project_name">{project.name}</div>
                            <div className="project_technologies">{project.technologies}</div>
                            <div className="link_btn">
                                <button className='github_link link'><a href={project.github} target='_blank' rel="noopener noreferrer"><FaGithub size={20}/></a></button>
                                {/* <button className='website_link link'><a href={project.live} target='_blank' rel='noopener noreferrer'>Demo</a></button> */}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Projects;