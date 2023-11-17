// eslint-disable-line
import React from "react";
import "./LoginPage.css";
import image from "../../Images/icon.png";

export default function LoginPage() {
  return (
    <main>
      <div className="login">
        <div className="title">
          <img src={image} />
          <p>EasyParty</p>
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

          <i className="password">Esqueci minha senha</i>

          <button>Entrar</button>
        </div>

        <div className="cadastro">
          <i>Não é membro? Cadastre-se aqui</i>
        </div>
      </div>
    </main>
  );
}
