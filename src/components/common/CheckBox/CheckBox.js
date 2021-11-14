'use strict';

//--------->Import stylesheet
import './CheckBox.styles.scss';

//---------> Import React
import React from 'react';
import PropTypes from 'prop-types';

export class CheckBox extends React.Component {
    handleChange = (event) => this.props.changeHandler(event);
    render() {
        const className = ['checkbox'];
        return (
            <>
                <input
                    className={className.join(' ').trim()}
                    type='checkbox'
                    id={this.props.id}
                    checked={this.props.checked}
                    onChange={this.handleChange}
                />
                <label htmlFor={this.props.id}>{this.props.children}</label>
            </>
        );
    }
}
CheckBox.propTypes = {
    id: PropTypes.string,
    checked: PropTypes.string,
    changeHandler: PropTypes.func,
};
