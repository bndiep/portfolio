import resume from "./assets/Bach_Diep_Resume.pdf"

function App() {
  return (
    <div>
      <header>
        <div className="p-2 bg-yellow-600 text-yellow-100 text-sm text-center flex justify-center">✨ [04/07/2021] Site is currently under construction! Please enjoy the progress! ✨</div>
        <div className="h-16 p-4 bg-gray-800 flex justify-end items-center sm:hidden">
          <button className="w-12 h-12 text-white text-sm border border-white rounded-lg">Temp</button>
        </div>
        <ul className="pr-4 hidden sm:flex flex-row justify-end">
          <li className="p-4"><a href="/">Home</a></li>
          <li className="p-4"><a href="#skills">Skills</a></li>
          <li className="p-4"><a href="#projects">Projects</a></li>
          <li className="p-4"><a href="/">Art</a></li>
        </ul>
      </header>
      <div className=" my-24 sm:my-72">
        <h1 className="px-12 w-100 text-6xl">
          Hi, I'm <span className="font-bold">Bach</span>,
        </h1>
        <h1 className="px-12 w-100 text-6xl tracking-wide">
          your friendly <span className="tracking-wide font-mono">coder</span>.
        </h1>
      </div>

      <div className="mx-8 p-8 bg-gray-500 text-gray-100 lg:mx-16">
        <p className="inline-flex">
          I'm a full stack developer based in San Diego, CA.
          </p>
        <p>
          I'm most interested in how tech and art can brige the connection between people.
          This is what I love most about web development! It is the culimnation of these two concepts:
        </p>
        <p className="italic">
          (1) It's the challenge of making a digital product tangible and (2) also engaging using effective design
          </p>
      </div>

      <div className="px-8 p-4 flex justify-around">
        <a href="mailto:bachdiep.dev@gmail.com">Contact Me</a>
        <a href="www.linkedin.com/in/bachdiep" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://twitter.com/itsabach" target="_blank" rel="noreferrer">Twitter</a>
        <a href="https://github.com/bndiep" target="_blank" rel="noreferrer">GitHub</a>
        <a href={ resume } target="_blank" rel="noreferrer">Resume</a>
      </div>

      <div className="mx-8 py-20">
        <h2 className="py-2 text-3xl font-bold tracking-widest border-b-2" id="skills">Skills</h2>
        <div className="pt-12 flex flex-wrap justify-center items-start">
          
          <div className="m-2 w-48 border-t border-l border-r border-black rounded-lg">
            <h3 className="p-2 h-48 text-2xl border-b-2 border-black rounded-lg">Frontend</h3>
            <ul className="">
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
            <h4 className="text-2xl">LifeBand</h4>
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
            <h4 className="text-2xl">React Here, Tryna Function</h4>
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
            <h4 className="text-2xl">Tic-Tac-Toe</h4>
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
            <h4 className="text-2xl">Pig Latin</h4>
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
            <h4 className="text-2xl">Blog App</h4>
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

      <div className="py-16 flex justify-center">
        <p>Interested in contacting me? Reach me <a className="text-yellow-900" href="mailto:bachdiep.dev@gmail.com"> here</a>.</p>
      </div>
      
      <footer className="py-2 text-sm flex justify-center text-gray-400">Designed and built by Bach Diep using React.js and Tailwind CSS</footer>
    </div>
  )
}

export default App;
