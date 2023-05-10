import { Container, StyledLink } from '@styles/pages/404';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  const { t } = useTranslation('404');
  return (
    <Container>
      <h1>{t('title')}</h1>

      <Image
        src="/assets/images/404.svg"
        alt="Gatinho sentado olhando a placa falando que a página não encontrada"
        width="431px"
        height="380px"
      />

      <Link href="/">
        <StyledLink>
          {t('common:text_button.go-to-home')}
        </StyledLink>
      </Link>
    </Container>
  );
}
