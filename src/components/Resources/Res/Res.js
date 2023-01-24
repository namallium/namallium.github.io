import React from 'react';
import PropTypes from 'prop-types';

const Res = ({ data }) => {
  const {
    link, title, desc, subtitle,
  } = data;

  return (
    <div className="resource">
      <div className="recsubtitle">{subtitle}</div>
      <div className="rectitle"><a href={link}>{title}</a></div>
      <div className="">{desc}</div>
    </div>
  );
};

Res.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Res;
