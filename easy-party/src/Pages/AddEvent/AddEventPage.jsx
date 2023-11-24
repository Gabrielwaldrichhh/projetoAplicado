import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './AddEventPage.css'; // Importe seus estilos CSS aqui

const AddEventPage = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para lidar com o envio do formulário (enviar para o servidor, etc.)
  };

  return (
    <div className="container-fluid h-100 main">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-md-6">
          <div className="card add-event-container p-4">
            <h1 className="card-title text-center mb-4">Adicionar Evento</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group row">
                <label htmlFor="localName" className="col-sm-3 col-form-label text-end">Nome do Local:</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" id="localName" name="localName" required />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="startTime" className="col-sm-3 col-form-label text-end">Dia e horário Início:</label>
                <div className="col-sm-9">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="dd/MM/yyyy HH:mm"
                    className="form-control"
                    id="startTime"
                    name="startTime"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="endTime" className="col-sm-3 col-form-label text-end">Dia e horário Final:</label>
                <div className="col-sm-9">
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="dd/MM/yyyy HH:mm"
                    className="form-control"
                    id="endTime"
                    name="endTime"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="ageRange" className="col-sm-3 col-form-label text-end">Faixetaria:</label>
                <div className="col-sm-9">
                  <select className="form-control" id="ageRange" name="ageRange" required>
                    <option value="">Selecione</option>
                    <option value="Livre">Livre</option>
                    <option value="+12">+12</option>
                    <option value="+14">+14</option>
                    <option value="+16">+16</option>
                    <option value="+18">+18</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="eventType" className="col-sm-3 col-form-label text-end">Tipo do Evento:</label>
                <div className="col-sm-9">
                  <select className="form-control" id="eventType" name="eventType" required>
                    <option value="">Selecione</option>
                    <option value="Festa">Festa</option>
                    <option value="Encontro Esportivo">Encontro Esportivo</option>
                    <option value="Encontro Automobilístico">Encontro Automobilístico</option>
                  </select>
                </div>
              </div>
              <div className="d-grid mt-3">
                <button type="submit" className="btn btn-primary">Adicionar Evento</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEventPage;
