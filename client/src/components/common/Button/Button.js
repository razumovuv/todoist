//---------------------------- File button.js -------------------------------------
'use strict';

//--------->Import stylesheet
import './Button.styles.scss';

//---------> Import React
import React from 'react';
import PropTypes from 'prop-types';

export class Button extends React.Component {
    handleClick = () => {
        this.props.clickHandler(this.props.id);
    };

    render() {
        const className = ['btn', this.props.colorClass];

        return (
            <>
                <button
                    className={className.join(' ').trim()}
                    id={this.props.id}
                    type={this.props.type}
                    onClick={this.handleClick}
                >
                    {this.props.text}
                </button>
            </>
        );
    }
}

Button.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    text: PropTypes.string,
    clickHandler: PropTypes.func,
    type: PropTypes.string,
    colorClass: PropTypes.string,
};

Button.defaultProps = {
    clickHandler: () => {},
};
