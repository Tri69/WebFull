import NavbarComp from '../NavbarComp';
import FooterComp from '../FooterComp';
const ProjectPages = () => {
	return(
		<>
			<div>
				<NavbarComp />
			</div>
			<div>
				<h1>Home</h1>
				<button onClick={() => About("/about")}>About</button>
			</div>
			<div>
				<FooterComp />
			</div>
		</>
	)
}

export default ProjectPages;