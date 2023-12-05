import React, { useState } from "react";
import "./AddEvent.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const AddEvent = () => {
  const [modalIsOpen, setOpenModal] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [formData, setFormData] = useState({
    eventLocal: "",
    eventName: "",
    startDateTime: null,
    endDateTime: null,
    ageRange: "livre",
    cep: "",
    street: "",
    city: "",
    state: "",
    number:""
  });

  const openModal = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setFormData({ ...formData, startDateTime: date });
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    setFormData({ ...formData, endDateTime: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/addEvent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Erro ao adicionar evento: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data);

      closeModal(); // Fechar modal após envio dos dados
    } catch (error) {
      console.error("Erro ao enviar dados do evento:", error.message);
    }
  };

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
          <form onSubmit={handleSubmit} className="forms-add-event">
            <div className="column">
              <div className="input-box-form">
                <label>Nome do Local</label>
                <input
                  type="text"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleChange}
                  placeholder="Digite o nome do local do evento"
                />
              </div>

              <div className="input-box-form">
                <label>Nome do Evento</label>
                <input
                  type="text"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleChange}
                  placeholder="Digite o nome do evento"
                />
              </div>
              <div class="input-box-form">
                <label>Faixa Etária</label>
                <div className="select-box">
                  <select
                    name="faixaEtaria"
                    id="faixaEtaria"
                    value={formData.ageRange}
                    onChange={handleChange}
                  >
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
                  onChange={handleStartDateChange}
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
                  onChange={handleEndDateChange}
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
                <input
                  type="text"
                  name="cep"
                  value={formData.cep}
                  onChange={handleChange}
                  placeholder="Informe o CEP do evento"
                />
              </div>
              <div className="input-box-form">
                <label>Rua</label>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  placeholder="Informe a rua"
                />
              </div>
              <div className="input-box-form">
                <label>Cidade</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Informe a cidade"
                />
              </div>
              <div className="input-box-form">
                <label>Estado</label>
                <div className="select-box">
                  <select
                    id="estados"
                    name="estados"
                    value={formData.state}
                    onChange={handleChange}
                  >
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
                    value={formData.number}
                    onChange={handleChange}
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
};

export default AddEvent;
