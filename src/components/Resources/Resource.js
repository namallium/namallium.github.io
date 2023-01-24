import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CategoryButton from './Res/CategoryButton';
import Res from './Res/Res';

const handleProps = ({ categories, resources }) => ({
  buttons: categories.map((cat) => cat.name).reduce((obj, key) => ({
    ...obj,
    [key]: false,
  }), { All: true }),
  resources,
});

class Resource extends Component {
  constructor(props) {
    super(props);
    this.state = handleProps({ categories: props.categories, resources: props.resources });
  }

  getRows() {
    // search for true active categories
    const actCat = Object.keys(this.state.buttons).reduce((cat, key) => (
      this.state.buttons[key] ? key : cat
    ), 'All');

    // eslint-disable-next-line array-callback-return
    return this.state.resources.sort(() => { }).filter((resource) => (actCat === 'All' || resource.category.includes(actCat)))
      .map((resource) => (
        <Res
          resources={this.props.resources}
          data={resource}
          key={resource.title}
        />
      ));
  }

  getButtons() {
    return Object.keys(this.state.buttons).map((key) => (
      <CategoryButton
        label={key}
        key={key}
        active={this.state.buttons}
        handleClick={this.handleChildClick}
      />
    ));
  }

  handleChildClick = (label) => {
    this.setState((prevState) => {
      // Toggle button that was clicked. Turn all other buttons off.
      const buttons = Object.keys(prevState.buttons).reduce((obj, key) => ({
        ...obj,
        [key]: (label === key) && !prevState.buttons[key],
      }), {});
      // Turn on 'All' button if other buttons are off
      buttons.All = !Object.keys(prevState.buttons).some((key) => buttons[key]);
      return { buttons };
    });
  }

  render() {
    return (
      <div className="skills">
        <div className="link-to" id="skills" />
        <div className="title">
          <p>Note: A bunch of resources and references curated by me,
            with the goal to help others learn something new.
          </p>
        </div>
        <div className="skill-button-container">
          {this.getButtons()}
        </div>
        <div className="resource-row-container">
          {this.getRows()}
        </div>
      </div>
    );
  }
}

Resource.propTypes = {
  resources: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.arrayOf(PropTypes.string),
  })),
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  })),
};

Resource.defaultProps = {
  resources: [],
  categories: [],
};

export default Resource;
