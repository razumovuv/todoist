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
    handleSubmit = (event) => this.props.submitHandler(event);
    render() {
        const className = ['text-field', this.props.customStyle];
        return (
            <input
                className={className.join(' ').trim()}
                id={this.props.id}
                value={this.props.value}
                type='text'
                onChange={this.handleChange}
                disabled={this.props.isDisabled}
                autoFocus={this.props.isAutoFocus}
                ref={this.props.inputRef}
                onBlurCapture={this.handleBlur}
                onSubmit={this.handleSubmit}
            />
        );
    }
}

TextField.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    customStyle: PropTypes.string,
    changeHandler: PropTypes.func,
    isDisabled: PropTypes.bool,
    isAutoFocus: PropTypes.bool,
    blurHandler: PropTypes.func,
    submitHandler: PropTypes.func,
};
TextField.defaultProps = {
    changeHandler: () => {},
    blurHandler: () => {},
    submitHandler: () => {},
    isDisabled: false,
    isAutoFocus: false,
};
