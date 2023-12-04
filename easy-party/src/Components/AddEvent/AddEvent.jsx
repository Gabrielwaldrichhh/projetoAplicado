/* eslint-disable */
import React from "react";
import { useState } from "react";
import "./AddEvent.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Modal from "react-modal";
Modal.setAppElement("#root");

export default function AddEvent() {
  const [modalIsOpen, setOpenModal] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  function openModal() {
    setOpenModal(true);
  }
  function closeModal() {
    setOpenModal(false);
  }

  return (
    <div className="modal-panel">
      <div className="add-event" onClick={openModal}>
        <i class="bx bx-plus"></i>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Adicionar Party"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <div className="event-form">
          <div className="close-icon">
            <i class="bx bx-x" onClick={closeModal}></i>
          </div>

          <header>Cadastro de Evento</header>
          <form action="" className="forms-add-event">
            <div className="column">
              <div className="input-box-form">
                <label>Nome do Local</label>
                <input
                  type="text"
                  placeholder="Digite o nome do local do evento"
                />
              </div>

              <div className="input-box-form">
                <label>Nome do Evento</label>
                <input type="text" placeholder="Digite o nome do evento" />
              </div>
              <div class="input-box-form">
                <label>Faixa Etária</label>
                <div className="select-box">
                  <select name="faixaEtaria" id="faixaEtaria">
                    <option value="livre">Livre</option>
                    <option value="12">+12</option>
                    <option value="14">+14</option>
                    <option value="16">+16</option>
                    <option value="18">+18</option>
                  </select>
                </div>
              </div>
              <div className="input-box-form">
                <label>Data e Hora Inical do Evento</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="dd/MM/yyyy HH:mm"
                  className="date-box"
                  id="startTime"
                  name="startTime"
                  placeholderText={"dd / mm / aaaa"}
                  required
                />
              </div>
              <div className="input-box-form">
                <label>Data e Hora Final do Evento</label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="dd/MM/yyyy HH:mm"
                  className="date-box"
                  id="endTime"
                  name="endTime"
                  placeholderText={"dd / mm / aaaa"}
                  required
                />
              </div>
            </div>

            <div className="column">
              <div className="input-box-form">
                <label>CEP</label>
                <input type="text" placeholder="Informe o CEP do evento" />
              </div>
              <div className="input-box-form">
                <label>Rua</label>
                <input type="text" placeholder="Informe a rua" />
              </div>
              <div className="input-box-form">
                <label>Cidade</label>
                <input type="text" placeholder="Informe a cidade" />
              </div>
              <div className="input-box-form">
                <label>Estado</label>
                <div className="select-box">
                  <select id="estados" name="estados">
                    <option value="AC">AC</option>
                    <option value="AL">AL</option>
                    <option value="AP">AP</option>
                    <option value="AM">AM</option>
                    <option value="BA">BA</option>
                    <option value="CE">CE</option>
                    <option value="DF">DF</option>
                    <option value="ES">ES</option>
                    <option value="GO">GO</option>
                    <option value="MA">MA</option>
                    <option value="MT">MT</option>
                    <option value="MS">MS</option>
                    <option value="MG">MG</option>
                    <option value="PA">PA</option>
                    <option value="PB">PB</option>
                    <option value="PR">PR</option>
                    <option value="PE">PE</option>
                    <option value="PI">PI</option>
                    <option value="RJ">RJ</option>
                    <option value="RN">RN</option>
                    <option value="RS">RS</option>
                    <option value="RO">RO</option>
                    <option value="RR">RR</option>
                    <option value="SC">SC</option>
                    <option value="SP">SP</option>
                    <option value="SE">SE</option>
                    <option value="TO">TO</option>
                  </select>
                </div>

                <div className="input-box-form">
                  <label>Numero</label>
                  <input
                    type="text"
                    placeholder="Digite o numero do local do evento"
                  />
                </div>
              </div>
            </div>
          </form>
          <button className="button-form">Enviar</button>
        </div>
      </Modal>
    </div>
  );
}
