import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import AboutPage from './Components/Pages/AboutPage';
import NotFoundPage from './Components/Pages/NotFoundPage';
import ArsipPages from './Components/Pages/ArsipPages';
import ProjectPages from './Components/Pages/ProjectPages';
import ContactPages from './Components/Pages/ContactPages';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';

const App = () => {
 // const [count, setCount] = useState('test')
  return (
    <>
      <Router>
		<Routes>
			<Route path="/"  element={<HomePage />}/>
			<Route path="/about" element={<AboutPage />}/>
			<Route path="/project" element={<ProjectPages />}/>
			<Route path="/contact" element={<ContactPages />}/>
			<Route path="/arsip" element={<ArsipPages />}/>
			<Route path="/Auth/register" element={<Register />}/>
			<Route path='/Auth/login' element={<Login />}/>
			<Route path="*" element={<NotFoundPage />}/>
		</Routes>
	  </Router>
    </>
  )
}

export default App;
