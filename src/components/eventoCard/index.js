import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
// import firebase from '../../config/firebase';

import './eventoCard.css'

//Imagens
import img from '../../assets/img/image_3.jpg'


export default function EventoCard(){
	return(
		<>	
			<section >
				<div class="container">
							
					<div class="row d-flex mx-3 card-test">
						<div class=" d-flex mr-3 ">
							<div class="blog-entry align-self-stretch">
								<img src={img} class="block-20 rounded-bottom" />								
								<div class="text p-4">
									<div class="meta mb-2">
										<div><a href="#">March 31, 2020</a></div>
										<div><a href="#">Admin</a></div>
										<div><a href="#" class="meta-chat"><span class="fa fa-comment"></span> 3</a></div>
									</div>
									<h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>					
		</>
	)
}