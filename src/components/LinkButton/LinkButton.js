import React from 'react';
import './LinkButton.scss';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';

const LinkButton = (props) => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    // ⬆ filtering out props that `button` doesn’t know what to do with.
    ...rest
  } = props
  return (
    <Button
      variant="contained"
      color="primary"
      className="Link-button"
      {...rest} // `children` is just another prop!
      onClick={(event) => {
        onClick && onClick(event)
        history.push(to)
      }}
    />
  )
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default withRouter(LinkButton)