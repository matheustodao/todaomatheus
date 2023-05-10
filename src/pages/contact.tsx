import Image from 'next/image';

import { Container, WayOfContact } from '@styles/pages/contacts';

import { contacts } from '@mocks/contacts';
import useTranslate from '@hooks/useTranslate';

export default function Contact() {
  const { translation } = useTranslate('contact');

  return (
    <Container>
      <h1>{translation('title')}</h1>

      <div className="container__way__of__contact">
        {contacts.map((contact) => (
          <WayOfContact
            key={contact.id}
            href={contact.link}
            bg={contact.bg}
            target="_blank"
          >
            <Image width={32} height={32} src={contact.icon} />
            {contact.name}
          </WayOfContact>
        ))}
      </div>
    </Container>
  );
}
