import Image from 'next/image';

import Portal from '../Portal';
import ModalHeader from '../ModalHeader';

import { Overlay } from '../Overlay';
import { Container, Button } from './styles';

export default function ModalContactByPhone() {
  const contact = {
    username: 'matheustodao',
    tel: '+5519996402926',
    message: 'Olá Matheus Todao. Estou entrando em contato pois...',
  };

  const telegram = `https://t.me/${contact.username}`;
  const whatsapp = `https://api.whatsapp.com/send?phone=${contact.tel}&text=${contact.message}`;
  const phone = `tel:${contact.tel}`;

  return (
    <Portal selector="#portals">
      <Overlay>
        <Container>
          <ModalHeader title="Contato" modalName="byPhone" />
          <main>
            <Button bg="whatsapp" href={whatsapp}>
              <Image
                src="/icons/whatsapp-white@18.svg"
                width={18}
                height={18}
              />
              <span>Whatsapp</span>
            </Button>

            <Button bg="telegram" href={telegram}>
              <Image
                src="/icons/telegram.svg"
                width={18}
                height={18}
              />
              <span>Telegram</span>
            </Button>

            <small>ou</small>

            <Button href={phone}>
              <Image
                src="/icons/brazil.svg"
                width={18}
                height={18}
              />
              <span>+55 (19) 99640-2926</span>
            </Button>
          </main>

        </Container>
      </Overlay>
    </Portal>
  );
}
