
import './Home.css';
import my_image from '../../Assets/my_image.jpg';

const Home = () => {
    return (
        <section className='intro' id='home'>
            <div className="introcontent">
                <span className='hello'>Hello,</span>
                <h3 className='introheading'>I'm
                    <span className="name"> Manish Nalla</span><br></br> I'm a  <span className="position">Front-End Developer</span>
                </h3>
                <p className='intropara'>I am a passionate frontend developer skilled in building responsive and user-friendly web applications. I enjoy solving real-world problems through clean and efficient code and constantly strive to learn and grow in the ever-evolving tech space. Let's create something amazing together! Please feel free to <a href='#contact'>contact me</a>.</p>
                <ul className='social-links'>
                    <li className='social-linkitems'><a href="https://www.linkedin.com/in/manish-nalla/"><i class="fa-brands fa-linkedin"></i></a></li>
                    <li className='social-linkitems'><a href="https://github.com/manish-nalla" ><i class="fa-brands fa-github"></i></a></li>
                    <li className="social-linkitems"><a href='/Manish-Nalla-Resume.pdf' target='_blank' rel='noopener noreferrer'><i class="fa-solid fa-download"></i></a></li>
                </ul>
            </div>
            <img src={my_image} alt="Profile" className="bg" />
        </section>
    );
}

export default Home;