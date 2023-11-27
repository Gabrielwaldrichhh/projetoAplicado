/*eslint-disable*/
import React from "react";
import "./LoginPage.css";
import image from "../../Images/icon.png";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <main className="main">
      <div className="login">
        <div className="title">
          <img src={image} />
          <label>EasyParty</label>
        </div>

        <div className="inputs">
          <div>
            <i class="bx bxs-user"></i>
            <input type="text" placeholder="Usuario" />
          </div>

          <div>
            <i class="bx bxs-lock-alt"></i>
            <input type="password" placeholder="Senha" />
          </div>

          <a>Esqueci minha senha</a>

          <Link to="/gabriel/home" className="button">Entrar</Link>
        </div>

        <div className="cadastro">
          <Link to="/register" className="link">Não é membro? Cadastre-se aqui</Link>
        </div>
      </div>
    </main>
  );
}
