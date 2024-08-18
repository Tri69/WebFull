//import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import '../index.css';
import logo from '../assets/logo.png';
//import vite from '../../public/vite.svg';

const NavbarComp = (props) => {
	return(
		<>
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eleventh navbar example">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src={logo} className="logo"/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample09">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about" >About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">Contact Me</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Project Me</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/project">Project</a></li>
                <li><a class="dropdown-item" href="#">Blog</a></li>
                <li><a class="dropdown-item" href="#">Penelitian</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/arsip">Arsip</a>
            </li>
          </ul>
          <form role="search">
            <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
          </form>
        </div>
      </div>
    </nav>

    
		</>
	)
}

export default NavbarComp;