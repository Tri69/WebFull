
import NavbarComp from '../NavbarComp';
import FooterComp from '../FooterComp';
import  '../../assets/style.css';
import profil from '../../assets/profil.png'

const HomePage = () => {
	
	return(
		<>
			<div>
				<NavbarComp />
			</div>
			<div className='container-home'>
				<div className='fixedd'>
					<div className='Caption-profil'>
						<h1>Terhubung Setiap <br></br>Saat</h1>
						<p>Lorem ipsu.rro deleniti iusto aliquam fugiat
							 nisi inventore ab enim.</p>
						<div>
							<input type='submit' value="Lebih Lanjut"/>
							<input type='submit'  value="Lear More"/>
						</div>
					
					</div>
					<div className='Image-profil'>
						<img src={profil} className='img-profil'/>
					</div>
				</div>
			</div>
			<div>
				<FooterComp />
			</div>
		</>
	)
}
export default HomePage;