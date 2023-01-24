import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Resource from '../components/Resources/Resource';

import { resources, categories } from '../data/resources';

const Resources = () => (
  <Main
    title="Resources"
    description="My Resources"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resources</Link></h2>
          <p>(under construction)</p>
        </div>
      </header>
      <Resource resources={resources} categories={categories} />

    </article>
  </Main>
);

export default Resources;
