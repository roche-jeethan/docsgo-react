import { FaJs, FaPython, FaJava, FaPhp, FaRust, FaSwift, FaHtml5, FaCss3Alt , FaRProject } from 'react-icons/fa';
import { DiRuby, DiScala, DiPerl } from 'react-icons/di';
import { TbBrandCpp, TbBrandCSharp, TbBrandTypescript, TbBrandKotlin, TbBrandGolang } from 'react-icons/tb';
import { SiDart, SiJulia, SiLua, SiHaskell } from 'react-icons/si';



const webLanguages = [
  { name: 'JavaScript', description: 'A versatile scripting language.', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: <FaJs /> },
  { name: 'PHP', description: 'A popular general-purpose scripting language.', url: 'https://www.php.net/docs.php', icon: <FaPhp /> },
  { name: 'HTML5', description: 'The standard markup language for creating web pages.', url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', description: 'A style sheet language used for describing the presentation of a document written in a markup language.', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: <FaCss3Alt /> },
  { name: 'TypeScript', description: 'A typed superset of JavaScript that compiles to plain JavaScript.', url: 'https://www.typescriptlang.org/docs/', icon: <TbBrandTypescript /> },
];

const generalPurposeLanguages = [
  { name: 'Python', description: 'A powerful high-level programming language.', url: 'https://docs.python.org/3/', icon: <FaPython /> },
  { name: 'Java', description: 'A class-based, object-oriented programming language.', url: 'https://docs.oracle.com/en/java/', icon: <FaJava /> },
  { name: 'C++', description: 'A powerful general-purpose programming language.', url: 'https://en.cppreference.com/w/', icon: <TbBrandCpp /> },
  { name: 'C#', description: 'A simple, modern, object-oriented, and type-safe programming language.', url: 'https://docs.microsoft.com/en-us/dotnet/csharp', icon: <TbBrandCSharp /> },
  { name: 'Ruby', description: 'A dynamic, open source programming language with a focus on simplicity and productivity.', url: 'https://www.ruby-lang.org/en/documentation/', icon: <DiRuby /> },
  { name: 'Go', description: 'An open source programming language that makes it easy to build simple, reliable, and efficient software.', url: 'https://golang.org/doc/', icon: <TbBrandGolang/>},
  { name: 'Rust', description: 'A language empowering everyone to build reliable and efficient software.', url: 'https://www.rust-lang.org/learn', icon: <FaRust /> },
  { name: 'Kotlin', description: 'A modern programming language that makes developers happier.', url: 'https://kotlinlang.org/docs/home.html', icon: <TbBrandKotlin /> },
  { name: 'Dart', description: 'A client optimized programming language for apps on multiple platforms.', url: 'https://dart.dev/guides', icon: <SiDart/> },
  { name: 'Scala', description: 'A modern multi-paradigm programming language designed to express common programming patterns in a concise, elegant, and type-safe way.', url: 'https://docs.scala-lang.org/', icon: <DiScala/>},
  { name: 'Perl', description: 'A highly capable, feature-rich programming language with over 30 years of development.', url: 'https://perldoc.perl.org/', icon: <DiPerl/>},
  { name: 'R', description: 'A language and environment for statistical computing and graphics.', url: 'https://cran.r-project.org/doc/manuals/r-release/R-intro.html', icon: <FaRProject /> },
  { name: 'Lua', description: 'A powerful, efficient, lightweight, embeddable scripting language.', url: 'https://www.lua.org/docs.html', icon: <SiLua/>},
  { name: 'Haskell', description: 'An advanced, purely functional programming language.', url: 'https://www.haskell.org/documentation/', icon: <SiHaskell/>},
  { name: 'Shell', description: 'A command language interpreter that executes commands read from a command line string, the standard input, or a file.', url: 'https://www.gnu.org/software/bash/manual/bash.html' },
  { name: 'Objective-C', description: 'An object-oriented programming language that adds Smalltalk-style messaging to the C programming language.', url: 'https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html' },
  { name: 'Elixir', description: 'A dynamic, functional language designed for building scalable and maintainable applications.', url: 'https://hexdocs.pm/elixir/Kernel.html' },
  { name: 'Clojure', description: 'A dynamic, general-purpose programming language, combining the approachability and interactive development of a scripting language with an efficient and robust infrastructure for multithreaded programming.', url: 'https://clojure.org/guides/getting_started' },
  { name: 'Groovy', description: 'A powerful, optionally typed and dynamic language, with static-typing and static compilation capabilities, for the Java platform aimed at improving developer productivity.', url: 'https://groovy-lang.org/documentation.html' },
  { name: 'Erlang', description: 'A general-purpose, concurrent, functional programming language, as well as a garbage-collected runtime system.', url: 'https://erlang.org/documentation.html' },
  { name: 'Julia', description: 'A high-level, high-performance dynamic programming language for technical computing.', url: 'https://docs.julialang.org/en/v1/', icon: <SiJulia /> },
  { name: 'Scheme', description: 'A general-purpose programming language, descended from Lisp and Algol.', url: 'https://schemers.org/' },
];

const mobileLanguages = [
  { name: 'Swift', description: 'A powerful and intuitive programming language for macOS, iOS, watchOS, and tvOS.', url: 'https://swift.org/documentation/', icon: <FaSwift /> },
  { name: 'Kotlin', description: 'A modern programming language that makes developers happier.', url: 'https://kotlinlang.org/docs/home.html', icon: <TbBrandKotlin /> },
  { name: 'Dart', description: 'A client optimized programming language for apps on multiple platforms.', url: 'https://dart.dev/guides', icon: <SiDart/> },
];

const mlAndDsLanguages = [
  { name: 'Python', description: 'A powerful high-level programming language.', url: 'https://docs.python.org/3/', icon: <FaPython /> },
  { name: 'R', description: 'A language and environment for statistical computing and graphics.', url: 'https://cran.r-project.org/doc/manuals/r-release/R-intro.html', icon: <FaRProject /> },
  { name: 'Julia', description: 'A high-level, high-performance dynamic programming language for technical computing.', url: 'https://docs.julialang.org/en/v1/', icon: <SiJulia /> },
];

export { generalPurposeLanguages as general, webLanguages as web, mobileLanguages as mobile, mlAndDsLanguages as mlds };