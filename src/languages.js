// src/languages.js
import { FaJs, FaPython, FaJava, FaPhp, FaRust, FaSwift, FaHtml5, FaCss3Alt } from 'react-icons/fa';

const languages = [
  { name: 'JavaScript', description: 'A versatile scripting language.', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: <FaJs /> },
  { name: 'Python', description: 'A powerful high-level programming language.', url: 'https://docs.python.org/3/', icon: <FaPython /> },
  { name: 'Java', description: 'A class-based, object-oriented programming language.', url: 'https://docs.oracle.com/en/java/', icon: <FaJava /> },
  { name: 'PHP', description: 'A popular general-purpose scripting language.', url: 'https://www.php.net/docs.php', icon: <FaPhp /> },
  { name: 'Rust', description: 'A language empowering everyone to build reliable and efficient software.', url: 'https://www.rust-lang.org/learn', icon: <FaRust /> },
  { name: 'Swift', description: 'A powerful and intuitive programming language for macOS, iOS, watchOS, and tvOS.', url: 'https://swift.org/documentation/', icon: <FaSwift /> },
  { name: 'HTML5', description: 'The standard markup language for creating web pages.', url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', description: 'A style sheet language used for describing the presentation of a document written in a markup language.', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: <FaCss3Alt /> },
  // Add more languages as needed
];

export default languages;