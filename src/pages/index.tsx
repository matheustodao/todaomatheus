/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link';
import Image from 'next/image';
import { TransTyped } from '@components/Helpers/TransTyped';
import useTranslate from '@hooks/useTranslate';
import { Mousewheel, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { AnchorButton } from '@components/AnchorButton';
import { Section } from '@styles/index';
import {
  Content,
  MainHeader,
  Skill,
  DesireSkillContainer,
  Hobby,
  ProjectListContainer,
  DescriptionSection,
} from '@styles/pages/index';

import { desireSkills, mySkills } from 'mocks/skills';
import { romanize } from 'utils/romanize';
import ProjectCard from '@components/pages/index/ProjectList/ProjectCard';

export default function Home() {
  const { translation } = useTranslate('home');
  const { translation: translationCommon } = useTranslate();

  return (
    <>
      <MainHeader>
        <div className="wrapper__image">
          <span
            className="background-image"
            role="img"
            aria-label="Photo of the Matheus Todao"
          />
        </div>

        <Content>
          <div className="main__title">
            <strong>{translation('greeting')}</strong>
            <h1>
              {translation('title')}
            </h1>
            <h2>
              {translation('subtitle')}
            </h2>
          </div>

          {/* Returning a paragraph tag */}
          <TransTyped i18nKey="home:introduce" components={{ p: <p />, strong: <strong /> }} />

          <div className="actions">

            <Link href="/blog/posts/who-is-matheus-todao">
              <AnchorButton>{translationCommon('text_button.more-about-me')}</AnchorButton>
            </Link>

            <Link href="/contact">
              <AnchorButton filled>{translationCommon('text_button.let-is-talk')}</AnchorButton>
            </Link>
          </div>
        </Content>

      </MainHeader>

      <Section>
        <h3>{translation('sections.my_skills.name')}</h3>

        <ul>
          {mySkills.map((skill) => (
            <Skill key={skill.name}>
              <div className="image__container">
                <Image
                  src={skill.path}
                  alt={`Logo ${skill.name}`}
                  layout="fixed"
                  width={52}
                  height={52}
                />
              </div>
              <strong>{skill.name}</strong>
            </Skill>
          ))}
        </ul>
      </Section>

      <Section>
        <h3>{translation('sections.skills_of_my_interest.name')}</h3>

        <DesireSkillContainer>
          <Swiper
            tag="div"
            wrapperTag="ul"
            modules={[Mousewheel, Pagination, A11y]}
            mousewheel
            pagination={{ dynamicBullets: true }}
            slidesPerView="auto"
            spaceBetween={16}
            direction="horizontal"
          >
            {desireSkills.map((desireSkill) => (
              <SwiperSlide key={desireSkill.name} tag="li">
                <div className="image__container">
                  <Image
                    src={desireSkill.path}
                    alt={desireSkill.name}
                    layout="responsive"
                    priority
                    width={!desireSkill.width ? 72 : desireSkill.width}
                    height={!desireSkill.height ? 68 : desireSkill.height}
                  />
                </div>
                <strong>{desireSkill.name}</strong>
              </SwiperSlide>
            ))}
          </Swiper>
        </DesireSkillContainer>
      </Section>

      <Section>
        <h3>{translation('sections.hobbies.name')}</h3>

        <Hobby>
          <span className="bullet">{romanize(1)}</span>
          <strong>{translation('sections.hobbies.hobby.0')}</strong>
        </Hobby>

        <Hobby>
          <span className="bullet">{romanize(2)}</span>
          <strong>{translation('sections.hobbies.hobby.1')}</strong>
        </Hobby>

        <Hobby>
          <span className="bullet">{romanize(3)}</span>
          <strong>{translation('sections.hobbies.hobby.2')}</strong>
        </Hobby>

        <Hobby>
          <span className="bullet">{romanize(4)}</span>
          <strong>{translation('sections.hobbies.hobby.3')}</strong>
        </Hobby>

        <Hobby>
          <span className="bullet">{romanize(5)}</span>
          <strong>{translation('sections.hobbies.hobby.4')}</strong>
        </Hobby>
      </Section>

      <Section>
        <h3>{translation('sections.what_i_have_made_up.name')}</h3>

        <ProjectListContainer>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </ProjectListContainer>

        <AnchorButton
          filled
          options={{
            margin: 'auto',
          }}
          href="https://github.com/matheustodao?tab=repositories"
        >
          {translationCommon('text_button.see-all-projects')}
        </AnchorButton>
      </Section>

      <Section>
        <h3
          style={{
            textTransform: 'none',
          }}
        >
          {translation('sections.that_is_it.name')}
        </h3>

        <DescriptionSection>
          <TransTyped
            i18nKey="home:sections.that_is_it.description"
            components={{ p: <p />, Link: <Link href="/blog/posts/how-i-built-my-portfolio" /> }}
          />
        </DescriptionSection>
      </Section>
    </>
  );
}
