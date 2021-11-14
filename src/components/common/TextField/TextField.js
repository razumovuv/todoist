//-------------------------- File base-input.js -----------------------------------
'use strict';

//--------->Import stylesheet
import './TextField.styles.scss';

//---------> Import React
import React from 'react';
import PropTypes from 'prop-types';

export class TextField extends React.Component {
    handleChange = (event) => this.props.changeHandler(event);
    handleBlur = (event) => this.props.blurHandler(event);
    render() {
        const className = ['text-field', this.props.customStyle];
        return (
            <input
                ref={this.props.inputRef}
                id={this.props.id}
                className={className.join(' ').trim()}
                type='text'
                value={this.props.value}
                disabled={this.props.isDisabled}
                onChange={this.handleChange}
                autoFocus={this.props.isAutoFocus}
                onBlur={this.handleBlur}
                onFocus={this.handleFocus}
            />
        );
    }
}

TextField.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    customStyle: PropTypes.string,
    isDisabled: PropTypes.bool,
    isAutoFocus: PropTypes.bool,
    changeHandler: PropTypes.func,
    blurHandler: PropTypes.func,
    submitHandler: PropTypes.func,
    focusHandler: PropTypes.func,
};
TextField.defaultProps = {
    changeHandler: () => {},
    blurHandler: () => {},
    focusHandler: () => {},
    isDisabled: false,
    isAutoFocus: false,
};
