import './Skills.css';
import { FaPython, FaHtml5, FaBootstrap, FaCss3, FaReact, FaGit, FaGithub, } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import oopImage from '../../Assets/oop.png';
import dsImage from '../../Assets/ds.png';
import AlgorithmsImage from '../../Assets/Algorthims.png';
import { useState, useEffect } from 'react';

const Skills = () => {
    const [iconSize, setIconSize] = useState(60);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 450) {
                setIconSize(30);
            } else if (window.innerWidth <= 768) {
                setIconSize(50);
            } else {
                setIconSize(60);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const skills_array = [
        { id: 1, name: 'React.Js', icon: <FaReact className='icon_size' size={iconSize} /> },
        { id: 2, name: 'JavaScript', icon: <IoLogoJavascript className='icon_size' size={iconSize} /> },
        { id: 3, name: 'Bootstrap', icon: <FaBootstrap className='icon_size' size={iconSize} /> },
        { id: 4, name: 'HTML5', icon: <FaHtml5 className='icon_size' size={iconSize} /> },
        { id: 5, name: 'CSS3', icon: <FaCss3 className='icon_size' size={iconSize} /> },
        { id: 6, name: 'Python', icon: <FaPython className='icon_size' size={iconSize} /> },
        { id: 7, name: 'Git', icon: <FaGit className='icon_size' size={iconSize} /> },
        { id: 8, name: 'GitHub', icon: <FaGithub className='icon_size' size={iconSize} /> },
        { id: 9, name: 'VS Code', icon: <VscVscode className='icon_size' size={iconSize} /> },
        { id: 10, name: 'OOPs', icon: <img src={oopImage} alt='oopImage' className='icon_size' width={iconSize} /> },
        { id: 11, name: 'Data Structures', icon: <img src={dsImage} alt='dsImage' className='icon_size' width={iconSize} /> },
        { id: 12, name: 'Algorithms', icon: <img src={AlgorithmsImage} alt='AlgorithmsImage' className='icon_size' width={iconSize} /> },
        { id: 13, name: 'MySQL', icon: <SiMysql className='icon_size' size={iconSize} /> }
    ];

    return (
        <section className='skills_container' id='Skills'>
            <h1 className='heading'>Skills</h1>
            <ul className='skills_list'>
                {skills_array.map((skill) => (
                    <li className='skills_listItem' key={skill.id}>
                        <div className='skills_icon' >
                            {skill.icon}
                        </div>
                        <div className="skills_name">{skill.name}</div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Skills;