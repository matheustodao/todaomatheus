import Image from 'next/image';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ModalContext } from '../../Context/ModalContext';
import { Container } from './styles';

export default function ModalHeader({ title, modalName, children }) {
  const { getModalByName, removeModalByName } = useContext(ModalContext);
  const { setCloseModal } = getModalByName(modalName);

  function closeModal() {
    setCloseModal(false);
    removeModalByName(modalName);
  }

  return (
    <Container>
      <button type="button" onClick={closeModal}>
        <Image src="/icons/arrow-back.svg" width={20} height={20} alt="voltar" />
      </button>

      <h1>{title}</h1>
      { children }
    </Container>
  );
}

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  modalName: PropTypes.string,
};

ModalHeader.defaultProps = {
  children: <div />,
  modalName: null,
};
