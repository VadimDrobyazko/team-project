/* eslint-disable max-len */
import React from 'react';
import AboutCard from '../../components/AboutCard/AboutCard';

const teamMembers = [
  {
    name: 'Vadym Doe',
    position: 'Front-end Developer',
    description:
      "Vadym brings our designer's vision to life by crafting responsive, fast-loading, and interactive web pages. His work ensures seamless experiences across all devices, making FoodieGuider engaging and user-friendly.",
    id: '1',
  },
  {
    name: 'Maks Doe',
    position: 'Back-end Developer',
    description:
      'Maks builds and maintains the robust infrastructure of FoodieGuider. He manages the server, database, and application logic, ensuring secure and efficient access to accurate information.',
    id: '2',
  },
  {
    name: 'Yana Rozvodovska',
    position: 'UI/UX Designer',
    description:
      'Yana creates intuitive and visually appealing interfaces. She ensures that navigating FoodieGuider is easy and enjoyable, making every interaction pleasant and effective.',
    id: '3',
  },
];

const AboutUsPage: React.FC = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__top">
          <div className="about__left">
            <h5 className="about__subtitle">Let us share a few things</h5>
            <h1 className="about__title">About Us</h1>
          </div>

          <div className="about__right">
            <div className="about__img"></div>
          </div>
        </div>
      </div>

      <div className="about__middle">
        <h3 className="about__title-middle">The Team</h3>

        <div className="about__block">
          {teamMembers.map(item => (
            <AboutCard
              name={item.name}
              position={item.position}
              key={item.id}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="about__bottom">
          <h3 className="about__title-bottom">Our Mission</h3>

          <p className="about__paragraph">
            Connect food lovers <br /> with the best dining <br /> experiences
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
