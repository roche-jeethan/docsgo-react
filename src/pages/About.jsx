import React, { useState }  from "react";
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

function About() {
    const [darkMode, setDarkMode] = useState();
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
};
    return(
        <div className={darkMode ? 'dark' : ''}>
            <div className={`min-h-screen bg-cover ${darkMode ? 'bg-dark-theme' : 'bg-light-theme'} text-black dark:text-white`}>
                <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <div>
                    <h1 className="text-3xl font-bold text-center mt-10">Hello, I am Jeethan Roche</h1>
                    <p className="text-xl font-italic text-center m-10">All documentations at one place, with one click!</p>
                </div>
                <main className="p-4 sm:px-8">
                </main>
                <Footer />
            </div>
      </div>
    );
};

export default About;