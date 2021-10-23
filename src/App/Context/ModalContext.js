import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [modals, setModals] = useState([]);

  function setModal({ modalName, setCloseModal = () => {}, isOpen }) {
    const modalAlreadyExists = modals.find((modal) => modal.modalName === modalName);
    if (modalAlreadyExists) {
      return;
    }

    setModals((prevState) => [...prevState, { modalName, setCloseModal, isOpen }]);
  }

  function removeModalByName(nameModal) {
    return modals.filter((modal) => modal.modalName !== nameModal);
  }

  function getModalByName(nameModal) {
    return modals.find((modal) => modal.modalName === nameModal);
  }

  return (
    <ModalContext.Provider
      value={{
        modals,
        setModal,
        removeModalByName,
        getModalByName,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
