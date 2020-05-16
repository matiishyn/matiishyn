import React from 'react';

export const Skill = ({title, level, experience}) => (
  <div className="skill">
    <span className="skill-title">{title}</span>
    <span className="skill-level">{level}</span>
    <span className="skill-experience">{experience}</span>

  </div>
);
