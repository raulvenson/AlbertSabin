import React from 'react';

import './cursos.css';


export default function Cursos(){
	return(
		<>
			<section className="ftco-section ">
				<div className="container">
					<div className="row justify-content-center pb-5 mb-3">
						<div className="col-md-7 heading-section text-center">
								<span className="subheading">Cursos &amp; Preços</span>
								<h2>Cursos oferecidos</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-lg-3">
							<div className="block-7">
								<div className="text-center">
									<span className="excerpt d-block">Técnico em Enfermagem</span>
									<span className="price"><sup>R$</sup> <span className="number">49</span> <sub>/Mês</sub></span>
						
									<ul className="pricing-text mb-5">
										<li><span className="fa fa-check mr-2"></span>Detalhe 01</li>
										<li><span className="fa fa-check mr-2"></span>Detalhe 02</li>
										<li><span className="fa fa-check mr-2"></span>Detalhe 03</li>
										<li><span className="fa fa-check mr-2"></span>Detalhe 04</li>
										<li><span className="fa fa-check mr-2"></span>Detalhe 05</li>
									</ul>

									<a href="curso1.html" className="btn btn-primary d-block px-2 py-3">Veja Mais</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-3">
							<div className="block-7">
								<div className="text-center">
									<span className="excerpt d-block">Técnico em Radiologia</span>
										<span className="price"><sup>R$</sup> <span className="number">79</span> <sub>/Mês</sub></span>
                        
										<ul className="pricing-text mb-5">
											<li><span className="fa fa-check mr-2"></span>Detalhe 01</li>
											<li><span className="fa fa-check mr-2"></span>Detalhe 02</li>
											<li><span className="fa fa-check mr-2"></span>Detalhe 03</li>
											<li><span className="fa fa-check mr-2"></span>Detalhe 04</li>
											<li><span className="fa fa-check mr-2"></span>Detalhe 05</li>
										</ul>

										<a href="curso2.html" className="btn btn-primary d-block px-2 py-3">Veja Mais</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-3">
							<div className="block-7">
								<div className="text-center">
									<span className="excerpt d-block">Técnico em Agropecuária</span>
									<span className="price"><sup>R$</sup> <span className="number">109</span> <sub>/Mês</sub></span>
                        
									<ul className="pricing-text mb-5">
										<li><span className="fa fa-check mr-2"></span>Detalhe 01</li>
										<li><span className="fa fa-check mr-2"></span>Detalhe 02</li>
										<li><span className="fa fa-check mr-2"></span>Detalhe 03</li>
										<li><span className="fa fa-check mr-2"></span>Detalhe 04</li>
										<li><span className="fa fa-check mr-2"></span>Detalhe 05</li>
									</ul>

									<a href="curso3.html" className="btn btn-primary d-block px-2 py-3">Veja Mais</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-3">
							<div className="block-7">
								<div className="text-center">
									<span className="excerpt d-block">Técnico em Saúde Bucal</span>
									<span className="price"><sup>R$</sup> <span className="number">149</span> <sub>/Mês</sub></span>
                        
									<ul className="pricing-text mb-5">
										<li><span className="fa fa-check mr-2"></span>Detalhe 01</li>
										<li><span className="fa fa-check mr-2"></span>Detalhe 02</li>
										<li><span className="fa fa-check mr-2"></span>Detalhe 03</li>
										<li><span className="fa fa-check mr-2"></span>Detalhe 04</li>
										<li><span className="fa fa-check mr-2"></span>Detalhe 05</li>
										
									</ul>

									<a href="curso4.html" className="btn btn-primary d-block px-2 py-3">Veja Mais</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}