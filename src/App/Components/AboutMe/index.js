/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useContext, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ModalContext } from '../../Context/ModalContext';

import {
  Container,
  Contact,
  Button,
  Apresentation,
  SocialMedias,
} from './styles';

import ModalContactByPhone from '../ModalContactByPhone';

export default function AboutMe() {
  const { setModal } = useContext(ModalContext);
  const [openModalByPhone, setOpenModalByPhone] = useState(false);

  useEffect(() => {
    setModal({
      modalName: 'byPhone',
      setCloseModal: (bool) => setOpenModalByPhone(bool),
      isOpen: openModalByPhone,
    });
  });

  function handleOpenModalByPhone() {
    setOpenModalByPhone(true);
  }

  return (
    <>
      { openModalByPhone && <ModalContactByPhone /> }
      <Container>
        <Apresentation>
          <div className="wrapper-photo">
            <Image
              src="/images/photo.png"
              alt="Minha foto: Matheus Todao"
              width={136}
              height={140}
            />
          </div>

          <div className="me">
            <h2>Matheus Todao</h2>
            <h3>ReactJS | Javascript | NodeJS</h3>
          </div>
        </Apresentation>
        <div className="wrapper-more-information">

          <Contact className="contact">
            <Button type="button" onClick={() => handleOpenModalByPhone()}>
              <Image
                src="/icons/whatsapp.svg"
                alt="Logo do Whatsapp"
                width={16}
                height={16}
              />
              <span>
                Diga um Olá!
              </span>
            </Button>
          </Contact>

          <SocialMedias>
            <Link href="https://linkedin.com/in/matheustodao">
              <a>
                <Image
                  src="/icons/linkedin.svg"
                  alt="Meu Linkedin"
                  width={20}
                  height={20}
                />
              </a>
            </Link>

            <Link href="https://github.com/matheustodao">
              <a>
                <Image
                  src="/icons/github.svg"
                  alt="Meu github"
                  width={20}
                  height={20}
                />
              </a>
            </Link>

            <Link href="https://instagram.com/matheustodao">
              <a>
                <Image
                  src="/icons/instagram.svg"
                  alt="Meu instagram"
                  width={20}
                  height={20}
                />
              </a>
            </Link>
          </SocialMedias>
        </div>
      </Container>
    </>
  );
}
