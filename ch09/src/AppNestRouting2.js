import './AppNavLink.css'
import { Route, Routes, NavLink, Link } from 'react-router-dom'

function Home() {
   return (
      <div>
         <h2>Home</h2>
         Home...
      </div>
   )
}

var contents = [
   { id: 1, title: 'HTML', description: 'HTML is...' },
   { id: 2, title: 'JS', description: 'JS is...' },
   { id: 3, title: 'React', description: 'React is...' },
]

function Topics() {
   var lis = []
   for (var i = 0; i < contents.length; i++) {
      lis.push(
         <li key={contents[i].id}>
            <NavLink to={'/topics/' + contents[i].id}>{contents[i].title}</NavLink>
         </li>
      )
   }
   return (
      <div>
         <h2>Topics</h2>
         <ul>{lis}</ul>
         <Routes>
            <Route path="/1" element={'HTML is ...'} />
            <Route path="/2" element={'JS is ...'} />
            <Route path="/3" element={'React is ...'} />
         </Routes>
      </div>
   )
}

function Contact() {
   return (
      <div>
         <h2>Contact</h2>
         Contact...
      </div>
   )
}

function App() {
   return (
      <div>
         <h1>리액트 라우터</h1>
         <ul>
            <li>
               <NavLink to="/">Home</NavLink>
            </li>
            <li>
               <NavLink to="/topics">Topics</NavLink>
            </li>
            <li>
               <NavLink to="/contact">Contact</NavLink>
            </li>
         </ul>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics/*" element={<Topics />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={'Not Found'} />
         </Routes>
      </div>
   )
}

export default App
