import { useState } from "react"
import portrait from "./assets/portrait_illustration.svg"
import profile from "./assets/BachDiep-3:2021.jpg"
import stamp from "./assets/stamp.svg"
import resume from "./assets/Bach_Diep_Resume.pdf"

const currentDate = new Date().toJSON().slice(0,10)

const App = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)

  return (
    <div id="top">
      <div className="p-2 bg-yellow-600 text-yellow-100 text-sm text-center flex justify-center">
        ✨ [{ currentDate }] Site is currently under construction! Please enjoy the progress! ✨
      </div>
      <header className="flex flex-row justify-between items-center md:space-x-4 bg-gray-800 py-4 px-6 relative">
        <a href="#top" className="block">
          <span className="sr-only">Bach Diep's Portfolio</span>
          <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center">
            <img className="w-12 h-12" src={ stamp } alt="To Home"/>
          </div>
        </a>
        <div className="mobile-menu" onClick={ handleClick }>
          {click ? (
            <button className="flex justify-center items-center md:hidden w-8 h-8">
              <svg alt="Close navigation menu" className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
          </button>
          ) : (
            <button className="flex justify-center items-center md:hidden w-8 h-8">
              <svg alt="Open navigation menu" className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
            </button>
          )}

        </div>
        <nav className={`absolute md:relative top-24 left-0 md:top-0 z-20 ${click ? "flex flex-col": "hidden md:flex"} md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-gray-800 shadow-md md:shadow-none p-6 pt-0 md:p-0`}>
          <a href="#top" className="block py-1 text-yellow-400 hover:underline" onClick={ closeMenu }>Home</a>
          <a href="#skills" className="block py-1 text-gray-100 hover:underline" onClick={ closeMenu }>Skills</a>
          <a href="#projects" className="block py-1 text-gray-100 hover:underline" onClick={ closeMenu }>Projects</a>
          <a href="#" className="block py-1 text-gray-100 hover:underline" onClick={ closeMenu }>Art</a>
          <a href="mailto:bachdiep.dev@gmail.com" className="block py-1 text-gray-100 hover:underline" onClick={ closeMenu }>Contact</a>
        </nav>
      </header>

      <div className=" my-24 sm:my-72">
        <h1 className="px-12 w-100 text-6xl">
          Hi, I'm <span className="font-bold">Bach</span>,
        </h1>
        <h1 className="px-12 w-100 text-6xl tracking-wide">
          your friendly <span className="tracking-wide font-mono">coder</span>.
        </h1>
        <img className="py-20 mr-2 w-3/4 lg:w-1/2" src={ portrait } alt="Funky illustration of Bach using a laptop"/>
      </div>

      <div className="flex justify-center items-center static">
          <img className="w-28 rounded rounded-full absolute" src={ profile } alt="self portrait of Bach Diep" />
      </div>

      <div className="mx-8 p-8 pt-16 bg-gray-500 text-gray-100 lg:mx-16">
        <p>
          I'm a full stack developer based in San Diego, CA.
        </p>
        <p>
          I'm most interested in how tech and art can bridge the connection between people.
          This is what I love most about web development! It is the culimnation of these two concepts:
        </p>
        <p className="italic">
          (1) It's the challenge of making a digital product tangible and (2) also engaging using effective design
          </p>
      </div>

      <div className="px-8 p-4 flex justify-around">
        <a href="mailto:bachdiep.dev@gmail.com">
          <svg alt="E-mail me!" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
        </a>
        <a href="www.linkedin.com/in/bachdiep" target="_blank" rel="noreferrer">
          <svg alt="LinkedIn" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/></svg>
        </a>
        <a href="https://twitter.com/itsabach" target="_blank" rel="noreferrer">
          <svg alt="Twitter" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787 1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399 3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334 2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791 2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224 1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z"/></svg>
        </a>
        <a href="https://github.com/bndiep" target="_blank" rel="noreferrer">
          <svg alt="GitHub" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"/></svg>
        </a>
        <a href={ resume } target="_blank" rel="noreferrer">
          <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 24 24"><path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-3 17h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z"/></svg>
        </a>
      </div>

      <div className="mx-8 py-20">
        <h2 className="py-2 text-3xl font-bold tracking-widest border-b-2" id="skills">Skills</h2>
        <div className="pt-12 font-mono flex flex-wrap justify-center items-start">
          
          <div className="m-2 w-48 border-t border-l border-r border-black rounded-lg">
            <h3 className="p-2 h-48 text-2xl border-b-2 border-black rounded-lg">Frontend</h3>
            <ul>
              <li className="p-2 border-b-2 border-black rounded-lg">HTML</li>
              <li className="p-2 border-b-2 border-black rounded-lg">CSS</li>
              <li className="p-2 border-b-2 border-black rounded-lg">JavaScript</li>
              <li className="p-2 border-b-2 border-black rounded-lg">Ruby</li>
              <li className="p-2 border-b-2 border-black rounded-lg shadow-md">React</li>
            </ul>
          </div>
          
          <div className="m-2 w-48 border-t border-l border-r border-black rounded-lg">
            <h3 className="p-2 h-48 text-2xl border-b-2 border-black rounded-lg">Backend</h3>
            <ul>
              <li className="p-2 border-b-2 border-black rounded-lg">Ruby on Rails</li>
              <li className="p-2 border-b-2 border-black rounded-lg">PostgreSQL</li>
              <li className="p-2 border-b-2 border-black rounded-lg shadow-md">MySQL</li>
            </ul>
          </div>
          
          <div className="m-2 w-48 border-t border-l border-r border-black rounded-lg">
            <h3 className="p-2 h-48 text-2xl border-b-2 border-black rounded-lg">Version Control</h3>
            <ul>
              <li className="p-2 border-b-2 border-black rounded-lg">Git</li>
              <li className="p-2 border-b-2 border-black rounded-lg">GitHub</li>
              <li className="p-2 border-b-2 border-black rounded-lg shadow-md">GitLab</li>
            </ul>
          </div>

          <div className="m-2 w-48 border-t border-l border-r border-black rounded-lg">
            <h3 className="p-2 h-48 text-2xl border-b-2 border-black rounded-lg">Remote Work</h3>
            <ul>
              <li className="p-2 border-b-2 border-black rounded-lg">Slack</li>
              <li className="p-2 border-b-2 border-black rounded-lg shadow-md">Zoom</li>
            </ul>
          </div>

          <div className="m-2 w-48 border-t border-l border-r border-black rounded-lg">
            <h3 className="p-2 h-48 text-2xl border-b-2 border-black rounded-lg">Design</h3>
            <ul>
              <li className="p-2 border-b-2 border-black rounded-lg">Figma</li>
              <li className="p-2 border-b-2 border-black rounded-lg">Balsamiq</li>
              <li className="p-2 border-b-2 border-black rounded-lg">Adobe Illustrator</li>
              <li className="p-2 border-b-2 border-black rounded-lg shadow-md">Affinity Designer</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="px-8 py-12 bg-gray-800 text-gray-200">
        <h2 className="py-2 text-3xl font-bold tracking-widest border-b-2" id="projects">Projects</h2>
        <div className="flex flex-col justify-center items-center">
          
          <div className="p-8">
            <h4 className="text-2xl font-mono">LifeBand</h4>
            <div className="my-2 flex flex-col md:flex-row">
              <span className="mr-2 p-20 bg-yellow-400 border-yellow-200 rounded-md">Placeholder</span>
              <p className="my-2 md:ml-2">
                In the case of an emergency or whenever a medical professional requires a patient's medical history, LifeBand can step in to help those in need. Once a profile has been completed with the information the user would like to be known, a QR code will be generated and can be shared to the user's loved ones to redirect them to the user's profile. The profile can include a list of emergency contacts and the user's current daily medications.
              </p>
              </div>
            <div className="text-yellow-200 text-sm flex justify-end">
              <a className="px-2" href="https://fathomless-woodland-26064.herokuapp.com/">Demo</a>
              <a className="px-2" href="https://github.com/Life-Science-Rejects/LifeBand">GitHub</a>
            </div>
          </div>
          
          <div className="p-8">
            <h4 className="text-2xl font-mono">React Here, Tryna Function</h4>
            <div className="my-2 flex flex-col md:flex-row">
              <span className="mr-2 p-20 bg-yellow-400 border-yellow-200 rounded-md">Placeholder</span>
              <p className="my-2 md:ml-2">
                An homage to E-40's song Function, this party app allows the user to input their budget and number of guests to give them a list of typical party items they will need to purchase. Go over budget, and your guests will have to pitch in.
              </p>
            </div>
            
            <div className="text-yellow-200 text-sm flex justify-end">
              <a className="px-2" href="https://react-here-tryna-function-app.netlify.app">Demo</a>
              <a className="px-2" href="https://github.com/bndiep/party-app">GitHub</a>
            </div>
          </div>
          
          <div className="p-8">
            <h4 className="text-2xl font-mono">Tic-Tac-Toe</h4>
            <div className="my-2 flex flex-col md:flex-row">
              <span className="mr-2 p-20 bg-yellow-400 border-yellow-200 rounded-md">Placeholder</span>
              <p className="my-2 md:ml-2">
                A simple implementation of Tic-Tac-Toe intended to be played by two users. The app will display the current player to keep track of the user's turns. There are three possible outcomes: X wins, O wins, or a cats game.
              </p>
            </div>
            <div className="text-yellow-200 text-sm flex justify-end">
              <a className="px-2" href="https://tictactoe-app.netlify.app">Demo</a>
              <a className="px-2" href="https://github.com/bndiep/tic-tac-toe-app">GitHub</a>
            </div>
          </div>
          
          <div className="p-8">
            <h4 className="text-2xl font-mono">Pig Latin</h4>
            <div className="my-2 flex flex-col md:flex-row">
              <span className="mr-2 p-20 bg-yellow-400 border-yellow-200 rounded-md">Placeholder</span>
              <p className="my-2 md:ml-2">
                An app that allows the user to convert their English words into Pig Latin. Has the ability to translate words starting with 'qu' and words in which 'y' acts a vowel. Maybe you can use this app when sending secret messages!
              </p>
            </div>
            <div className="text-yellow-200 text-sm flex justify-end">
              <a className="px-2" href="https://react-pig-latin-app.netlify.app">Demo</a>
              <a className="px-2" href="https://github.com/bndiep/pig-latin-app">GitHub</a>
            </div>
          </div>   

          <div className="p-8">
            <h4 className="text-2xl font-mono">Blog App</h4>
            <div className="my-2 flex flex-col md:flex-row">
              <span className="mr-2 p-20 bg-yellow-400 border-yellow-200 rounded-md">Placeholder</span>
              <p className="my-2 md:ml-2">
                A simple blog app that demonstrates RESTful routes. The user is able to create, view, edit, and delete a blog post. Strong params exist to ensure the user includes all fields in their blog post submission.
              </p>
            </div>
            <div className="text-yellow-200 text-sm flex justify-end">
              <a className="px-2" href="https://github.com/bndiep/blog-app">GitHub</a>
            </div>
          </div>

        </div>
      </div>

      <div className="py-16 flex flex-col justify-center items-center">
        <p>Interested in a chat? Reach me <a className="text-yellow-900 font-mono" href="mailto:bachdiep.dev@gmail.com"> here</a>.
        </p>
        <img className="mt-16 w-28 h-28" src={ stamp } alt="Illustration of Bach that has the appearance of a handmade rubber stamp" />
      </div>
      
      <footer className="md:py-2 text-sm text-center flex justify-center items-center text-gray-400">Designed and built by Bach Diep using React.js and Tailwind CSS</footer>
    </div>
  )
}

export default App;
