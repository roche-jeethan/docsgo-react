import React from "react";
import { FaXTwitter, FaLinkedinIn, FaGithub, FaInstagram, FaDiscord } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Footer = () =>{
    return(
        <footer className="p-4 sm:px-8">
            <div className="flex flex-col items-center justify-center">
                <p>© 2025 DocsGo. All rights reserved.</p>
                <div className="flex items-center space-x-4 m-4">
                    <p className="mr-4">Contact for improvements!</p>
                    <address><a href="mailto:jeethanroche@gmail.com"> <MdEmail/> </a></address>
                </div>
                <p className="mb-4">Creator's Profile</p>
                <div className="flex space-x-4">
                    <a className="w-5 h-5" href="https://x.com/RocheJeethan" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter />
                    </a>
                    <a className="w-5 h-5" href="https://github.com/roche-jeethan" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a className="w-5 h-5" href="https://www.linkedin.com/in/roche-jeethan/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </a>
                    <a className="w-5 h-5" href="https://www.instagram.com/roche_jeethan/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a className="w-5 h-5" href="https://www.discordapp.com/users/1146725860276183040" target="_blank" rel="noopener noreferrer">
                        <FaDiscord />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;