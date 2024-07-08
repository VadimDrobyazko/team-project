import React from 'react';

type Props = {
  name: string;
  position: string;
  description: string;
};

const AboutCard: React.FC<Props> = ({ name, position, description }) => {
  return (
    <div className="people">
      <div className="people__wrapper">
        <div className="people__img"></div>

        <div className="people__name">{name}</div>
        <div className="people__position">{position}</div>
        <div className="people__description">{description}</div>
      </div>
    </div>
  );
};

export default AboutCard;
