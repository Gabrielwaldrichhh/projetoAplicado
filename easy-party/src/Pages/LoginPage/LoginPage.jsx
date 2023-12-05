import React, { useState} from "react";
import "./LoginPage.css";
import image from "../../Images/icon.png";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario: usuario, senha: password }),
      });
  
      if (!response.ok) {
        throw new Error(`Credenciais Inválidas`);
      }
  
      const data = await response.json();
      console.log(data);
      
    navigate(`/${usuario}/home`);
  
    } catch (error) {
      console.error('Erro ao enviar dados de login:', error.message);
      setError(error.message);
      setTimeout(() => {
        setError(null); 
      }, 3000);
    }
  };

  return (
    <main className="main">
      <div className="login">
        <form onSubmit={handleSubmit}>
          <div className="title">
            <img src={image} alt="Icon" />
            <label>EasyParty</label>
          </div>

          <div className="inputs">
            <div>
              <i className="bx bxs-user"></i>
              <input
                type="text"
                placeholder="usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>

            <div>
              <i className="bx bxs-lock-alt"></i>
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <a href="/">Esqueci minha senha</a>

            <button type="submit" className="button">Entrar</button>
          </div>
        </form>

        <div className="cadastro">
          <Link to="/register" className="link">Não é membro? Cadastre-se aqui</Link>
        </div>
      </div>

      {error && (
        <div className="error-popup">
          <p>{error}</p>
        </div>
      )}
    </main>
  );
};

export default LoginPage;
