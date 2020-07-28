import React from 'react';
import {Link} from 'react-router-dom';


import '../../assets/css/animate.css'
import '../../assets/css/owl.carousel.min.css'
import '../../assets/css/owl.theme.default.min.css'
import '../../assets/css/magnific-popup.css'
import '../../assets/css/flaticon.css'
import '../../assets/css/style.css'

//Imagens
import logo from '../../assets/img/logo.png'
import { useSelector } from 'react-redux';

export default function Navbar(){
    return(
			<>
				
				<div className="wrap">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="bg-wrap">
									<div className="row">
										<div className="col-md-6 d-flex justify-content-md-start">
											<div className="social-media">
												<p className="mb-0 d-flex">
													<a href="#" className="d-flex align-items-center justify-content-center"><span className="fab fa-facebook"><i className="sr-only">Facebook</i></span></a>
													<a href="#" className="d-flex align-items-center justify-content-center"><span className="fab fa-instagram"><i className="sr-only">Instagram</i></span></a>													
												</p>
												</div>
										</div>
										<div className="col-md-6 d-flex align-items-center justify-content-md-end">
											<p className="mb-0 phone pl-md-2">
												{/* <a href="#" className="mr-2"><span className="fa fa-phone mr-1"></span> +00 1234 567</a>  */}
												
												{
													useSelector(state => state.usuarioLogado) > 0 ?
													<>
														<span className="mr-1">Seja bem viado</span>
													</>
													:
													<>
														<Link to="/login"><span className="fas fa-sign-in-alt mr-1"></span> Acesso Restrito</Link>
													</>
												}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
					<div className="container">
						<a className="navbar-brand" href="index.html"><img src={logo} alt="Logo Albert Sabin" height="70px" /></a>
						{/* <form action="#" className="searchform order-sm-start order-lg-last" >
							<div className="form-group d-flex">
							<input type="text" className="form-control pl-3" placeholder="Search" />
							<button type="submit" placeholder="" className="form-control search"><span className="fa fa-search"></span></button>
							</div>
						</form>  */}
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
							<span className="fa fa-bars"></span> Menu
						</button>
						<div className="collapse navbar-collapse" id="ftco-nav">
							<ul className="navbar-nav m-auto">
								<li className="nav-item"><Link to="/" className="nav-link">Início</Link></li>
								<li className="nav-item"><Link to="/sobre" className="nav-link">Sobre</Link></li>
								<li className="nav-item"><Link to="/cursos" className="nav-link">Cursos</Link></li>								
								<li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li> 
								<li className="nav-item"><Link to="/contato" className="nav-link">Contato</Link></li>
							</ul>
						</div>
					</div>
				</nav>
				
			</>
    )
}