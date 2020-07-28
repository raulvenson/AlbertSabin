import React from 'react';


//CSS
import './home.css'

//Components
import Navbar from '../../components/navbar'
import EventoCard from '../../components/eventoCard'
import Cursos from '../../components/cursos'
import Footer from '../../components/footer';

//Imagens
import capa from '../../assets/img/capa.jpg'

export default function Home(){
	return(
		<> 
			<div className="container-fluid">
				<Navbar />
				<div className="capa-principal">
					<img src={capa} />
				</div>
				
				<div class="row justify-content-center pb-5 mt-5">
					<div class="col-md-7 heading-section text-center ">
						<h2>Principais Matérias</h2>
					</div>
				</div>
				<div className="row eventos">
					<EventoCard />
					<EventoCard />
					<EventoCard />
				</div>

				<Cursos />

				<Footer />


		</div>
		</>
	
	)
}