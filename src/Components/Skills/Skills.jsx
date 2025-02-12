import './Skills.css';
import { FaPython, FaHtml5, FaBootstrap, FaCss3, FaReact,FaGit, FaGithub, } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import oopImage from '../../Assets/oop.png';
import dsImage from '../../Assets/ds.png';
import AlgorithmsImage from '../../Assets/Algorthims.png';

const Skills = () =>{

    const skills_array = [
        {id:1, name: 'React.Js', icon: <FaReact  size={100}/>},
        {id:2, name: 'JavaScript', icon: <IoLogoJavascript size={100}/> },
        {id:3, name: 'Bootstrap', icon: <FaBootstrap  size={100}/>},
        {id:4, name: 'HTML5', icon: <FaHtml5 size={100}/>},
        {id:5, name: 'CSS3', icon: <FaCss3  size={100}/>},
        {id:6, name: 'Python', icon: <FaPython size={100}/>},
        {id:7, name: 'Git', icon: <FaGit size={100}/>},
        {id:8, name: 'GitHub', icon: <FaGithub size={100}/>},
        {id:9, name: 'VS Code', icon: <VscVscode size={100}/>},
        {id:10, name: 'OOPs', icon: <img src={oopImage} alt='oopImage' width={100}/>},
        {id:11, name: 'Data Structures', icon: <img src={dsImage} alt='dsImage' width={100}/>},
        {id:12, name: 'Algorithms', icon: <img src={AlgorithmsImage} alt='AlgorithmsImage' width={100}/>},
        {id:13, name: 'MySQL', icon: <SiMysql size={100}/>}
    ];
    
    return (
        <div className='skills_container' id='Skills'>
            <h1 className='heading'>Skills</h1>
            <ul className='skills_list'>
                {skills_array.map((skill)=>(
                    <li className='skills_listItem' key={skill.id}>
                        <div className='skills_icon' >
                            {skill.icon}
                        </div>
                    <div className="skills_name">{skill.name}</div>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default Skills;