import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Namrata Kulkarni's personal website. New York based Stanford ICME graduate, "
      + 'co-founder and CTO of Arthena, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            A beautiful, responsive, statically-generated,
            react application written with modern Javascript.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/projects">projects</Link>, {' '}
        <Link to="/blogs">blogs</Link>, {' '}
        <Link to="/research">research</Link>, {' '}
        <Link to="/resume">resume</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p>
        I am a creative, innovative and detail-oriented front-end developer with a
        passion for UX/UI design. I specialize in designing intuitive, user-friendly
        interfaces that create a positive user experience. I have extensive experience
        in HTML, CSS and JavaScript, as well as a strong understanding of modern
        web development technologies and frameworks like React. I strive to create designs
        that are both aesthetically pleasing and highly functional.
        My commitment to staying up to date with the latest trends and technologies
        ensures that my designs stay fresh and engaging. I am excited to continue
        to push the boundaries of web design and create engaging experiences for users.
      </p>
    </article>
  </Main>
);

export default Index;
