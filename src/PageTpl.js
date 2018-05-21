import React from 'react';
import PropTypes from 'prop-types';

import { Switch, Route }  from 'react-router-dom';

class PageTpl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  render() {
    const { match } = this.props;
    return (
      <div className="page">
        content
      </div>
    );
  }
}

PageTpl.propTypes = {};
PageTpl.defaultProps = {};

export default PageTpl;
