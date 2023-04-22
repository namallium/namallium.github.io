import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

// import Cell from '../components/Project/Cell';
// import data from '../data/netchex';

const CMU = () => (
  <Main
    title="CMU"
    description="Website Development"
  >
    <article className="post" id="project">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">CMU</Link></h2>
          <p>Website Development</p>
          <p className="published">
            Working with cross-functional Agile team to build web applications
            to support the CMU online presence.
            <br />
            <br />
            Team: Namrata Kulkarni and 5 Others
            <br />
            Role: Web Developer
            <br />
            Client: CMU
            <br />
            Time: Ongoing
            <br />
            Tools: CMS, Figma, React, Javascript, HTML
            <br />
          </p>
        </div>
      </header>
    </article>
  </Main>
);

export default CMU;
