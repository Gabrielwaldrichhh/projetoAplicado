/* eslint-disable */
import React from "react"
import { useState } from "react"
import "./AddEvent.css"

import Modal from "react-modal"
Modal.setAppElement("#root");



export default function AddEvent() {

    const [modalIsOpen, setOpenModal] = useState(false);

    function openModal() { setOpenModal(true) }
    function closeModal() { setOpenModal(false) }


    return (
        <div className="modal-panel">


            <div className="add-event" onClick={openModal}>
                <i class='bx bx-plus'></i>
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
                            <i class='bx bx-x' onClick={closeModal}></i>
                        </div>

                        <h2>Adicionar Party</h2>

                        <input type="text" placeholder="Digite o nome do evento" />
                        <input type="date" placeholder="Informe a data inicial" />
                        <input type="text" placeholder="Informe a data final" />
                        <input type="text" placeholder="Informe a faxetaria" />
                        <input type="text" placeholder="Tipo de evento" />

                        <button className="send">Enviar</button>
                    </div>
                </Modal>

        </div>


    )
}