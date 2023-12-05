import React, { useState } from "react";
import './Register.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [formData, setFormData] = useState({
    nome: '',
    usuario: '',
    telefone: '',
    dataNascimento: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  });

  const { nome, usuario, telefone, dataNascimento, email, senha, confirmarSenha } = formData;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      console.error("Senha invalida")
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Erro ao cadastrar usuário: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data);
      
    navigate(`/`);

    } catch (error) {
      console.error('Erro ao enviar dados de cadastro:', error.message);
     
    }
  };

  return (
    <main className="register-form">
      <section className="container">
        <Link to="/"><i className='bx bx-left-arrow-alt'></i></Link>
        <header>Cadastro de Usuario</header>
        <form onSubmit={handleSubmit} className="forms">
          <div className="input-box">
            <label>Nome completo</label>
            <input
              type="text"
              name="nome"
              value={nome}
              onChange={handleChange}
              placeholder="Digite seu nome"
              required
            />
          </div>
          <div className="input-box">
            <label>Usuario</label>
            <input
              type="text"
              name="usuario"
              value={usuario}
              onChange={handleChange}
              placeholder="Escolha seu usuario"
              required
            />
          </div>
          <div className="column">
            <div className="input-box">
              <label>Telefone / Celular</label>
              <input
                type="text"
                name="telefone"
                value={telefone}
                onChange={handleChange}
                placeholder="Digite seu telefone"
                required
              />
            </div>
            <div className="input-box">
              <label>Data de Nascimento</label>
              <input
                type="date"
                name="dataNascimento"
                value={dataNascimento}
                onChange={handleChange}
                placeholder="Enter birth date"
                required
              />
            </div>
          </div>

          <div className="input-box">
            <label>Endereço de E-mail</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Digite seu e-mail"
              required
            />
          </div>

          <div className="input-box">
            <label>Digite sua Senha</label>
            <input
              type="password"
              name="senha"
              value={senha}
              onChange={handleChange}
              placeholder="Digite sua Senha"
              required
            />
          </div>
          <div className="input-box">
            <label>Confirme a Senha</label>
            <input
              type="password"
              name="confirmarSenha"
              value={confirmarSenha}
              onChange={handleChange}
              placeholder="Confirme sua senha"
              required
            />
          </div>

          <div className="button-container">
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Register;
