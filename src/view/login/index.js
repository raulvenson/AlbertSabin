import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';


import './login.css'
import firebase from '../../config/firebase';
import 'firebase/auth';

function Login(){
	
	const [email, setEmail] = useState();
	const [senha, setSenha] = useState();
	const [msgTipo, setMsgTipo] = useState();

	const dispatch = useDispatch();
	
	function logar(){
        
		
		firebase.auth().signInWithEmailAndPassword(email, senha).then( resultado => {
			setMsgTipo('sucesso')
			// setTimeout(() => {
			 	dispatch({type: 'LOG_IN', usuarioEmail: email});	
			// }, 2000);		
		}).catch(erro => {
			setMsgTipo('erro')
		});
	}



    return(
			<div className="login-content d-flex align-items-center">

				{
					useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/blog' /> : null
				}

				<form className="form-signin mx-auto">
					<div className="text-center mb-4">
						<img className="mb-4" src="/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
						<h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">
							Login
						</h1>
					</div>
					
					<input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email"/>
					<input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="Senha"  />
					
					<button onClick={logar} className="btn btn-lg btn-block btn-login" type="button">Login</button>
					
					<div className="msg-login text-white text-center my-5">
						{
							msgTipo === 'erro' && <span><strong>Ops! </strong> Verifique se a senha ou usuário estão corretos &#128528;</span>
						}						
					</div>

					<div className="opcoes-login mt-5 text-center" >
                        <span className="text-white">&#9733;</span>
						<Link to='/recuperarSenha' className="mx-2">Recuperar Senha</Link>
						<span className="text-white">&#9733;</span>
						
					</div>

				</form>
			</div>
    );
}

export default Login;