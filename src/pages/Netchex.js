import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Project/Cell';
import data from '../data/netchex';

const Netchex = () => (
  <Main
    title="Netchex"
    description="Application Design"
  >
    <article className="post" id="project">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Netchex</Link></h2>
          <p>Application Design</p>
          <p className="published">
            Netchex offers businesses a comprehensive, web-based suite of payroll, human resources,
            and benefit administrative services backed by dedicated support specialists.
            <br />
            <br />
            Team: Namrata Kulkarni and 3 Others
            <br />
            Role: UX designer & Developer
            <br />
            Client: Netchex
            <br />
            Time: 2.5 Years
            <br />
            Tools: React, Javascript, HTML, Invision, Sketch, Photoshop, Adobe Illustrator
            <br />
          </p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Netchex;
