import React from "react";
import './Register.css'
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <main className="register-form">
            <section class="container">
                <Link to="/"><i class='bx bx-left-arrow-alt'></i></Link>
                <header>Cadastro de Usuario</header>
                <form action="#" class="forms">
                    <div class="input-box">
                        <label>Nome completo</label>
                        <input type="text" placeholder="Digite seu nome" required />
                    </div>
                    <div class="column">
                        <div class="input-box">
                            <label>Telefone / Celular</label>
                            <input type="text" placeholder="Digite seu telefone" required />
                        </div>
                        <div class="input-box">
                            <label>Data de Nascimento</label>
                            <input type="date" placeholder="Enter birth date" required />
                        </div>
                    </div>

                    <div class="input-box">
                        <label>Endereço de E-mail</label>
                        <input type="text" placeholder="Digite seu e-mail" required />
                    </div>

                    <div class="input-box">
                        <label>Digite sua Senha</label>
                        <input type="password" placeholder="Digite sua Senha" required />
                    </div>
                    <div class="input-box">
                        <label>Confirme a Senha</label>
                        <input type="password" placeholder="Confirme sua senha" required />
                    </div>

                    <div className="button-container">
                        <button>Cadastrar</button>
                    </div>
                </form>
            </section>
        </main>
    )
}
