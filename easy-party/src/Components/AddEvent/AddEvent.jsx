import React, { useState } from "react";
import "./AddEvent.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from "react-modal";

Modal.setAppElement("#root");

const AddEvent = () => {
  const [modalIsOpen, setOpenModal] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [formData, setFormData] = useState({
    eventName: '',
    startDateTime: null,
    endDateTime: null,
    ageRange: 'livre',
    cep: '',
    street: '',
    city: '',
    state: ''
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
      const response = await fetch('http://localhost:3001/api/addEvent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
      console.error('Erro ao enviar dados do evento:', error.message);
    }
  };

  return (
<div className="modal-panel">
  <div className="add-event" onClick={openModal}>
    <i className="bx bx-plus"></i>
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
        <i className="bx bx-x" onClick={closeModal}></i>
      </div>

      <header>Adicionar Evento</header>
      <form onSubmit={handleSubmit} className="form">

        <section>
          <label>Nome do Evento</label>
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            placeholder="Digite o nome do evento"
          />

          <label>Data e Hora Inicial do Evento</label>
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
            placeholderText={'dd / mm / aaaa'}
            required
          />

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
            placeholderText={'dd / mm / aaaa'}
            required
          />

          <label>Faixa Etária</label>
          <div className="select-box">
            <select name="ageRange" id="ageRange" value={formData.ageRange} onChange={handleChange}>
              <option value="livre">Livre</option>
              <option value="12">+12</option>
              <option value="14">+14</option>
              <option value="16">+16</option>
              <option value="18">+18</option>
            </select>
          </div>
        </section>

        <section>
          <label>CEP</label>
          <input
            type="text"
            name="cep"
            value={formData.cep}
            onChange={handleChange}
            placeholder="Informe o CEP do evento"
          />

          <label>Rua</label>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            placeholder="Informe a rua"
          />

          <label>Cidade</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Informe a cidade"
          />

          <label>Estado</label>
          <div className="select-box">
            <select name="state" id="state" value={formData.state} onChange={handleChange}>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              {/* Restante dos estados */}
            </select>
          </div>
        </section>

        <button className="button-form">Enviar</button>
      </form>
    </div>
  </Modal>
</div>
  );
};

export default AddEvent;