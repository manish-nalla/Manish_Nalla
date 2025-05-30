import './Experience.css';
import capgemini from '../../Assets/capgemini.jpg';

const Experience = () => {
    return (
        <section className="mainexperience" id='Experience'>
            <h3 className="heading">Experience</h3>
            <div className="container">
                <div className="company_logo">
                    <img src={capgemini} alt="Capgemini" className="logo" />
                    <p className="role">Software Engineer Intern</p>
                    <p className="company_name">@Capgemini</p>
                    <p className="year"><i className="fa-regular fa-calendar"></i> March 2022 - July 2023</p>
                </div>
                <div className="description">
                    <ul className="desc-list">
                        <li className="list1">Developed and optimized C code for Linux-based system-level applications, achieving a 70% increase in productivity through efficient resource utilization and high-performance implementation. </li>
                        <li className="list1">Debugged and resolved complex software issues, including Linux kernel-level problems, by utilizing advanced debugging tools (like GDB debugger) and techniques to enhance system stability. </li>
                        <li className="list1">Designed and implemented custom Linux device drivers and real-time data processing systems, demonstrating strong problem-solving skills and technical expertise. </li>
                        <li className="list1">Automated repetitive tasks by writing efficient shell scripts, reducing manual efforts by 50% and improving workflow efficiency.</li>
                        <li className="list1">Collaborated with cross-functional teams to ensure system reliability, resulting in a 75% improvement in overall performance and operational stability. </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Experience;