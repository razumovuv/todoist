'use strict';

//--------->Import stylesheet
import './IconButton.styles.scss';

//---------> Import React
import React from 'react';
import PropTypes from 'prop-types';

//import Icon
import { TiEdit, TiDelete } from 'react-icons/ti/index.esm.js';

export class IconButton extends React.Component {
    handleClick = () => this.props.clickHandler(this.props.id);
    render() {
        const Icons = {
            Edit: <TiEdit size={this.props.size} color={this.props.color} />,
            Delete: (
                <TiDelete size={this.props.size} color={this.props.color} />
            ),
        };
        const className = ['icon-btn'];
        return (
            <>
                <span
                    id={this.props.id}
                    className={className.join(' ').trim()}
                    onClick={this.handleClick}
                >
                    {Icons[this.props.type]}
                </span>
            </>
        );
    }
}
IconButton.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    clickHandler: PropTypes.func,
};

IconButton.defaultProps = {
    clickHandler: () => {},
};
