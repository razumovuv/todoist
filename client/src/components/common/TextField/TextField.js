//-------------------------- File base-input.js -----------------------------------
'use strict';

//--------->Import stylesheet
import './TextField.styles.scss';

//---------> Import React
import React from 'react';
import PropTypes from 'prop-types';

export class TextField extends React.Component {
    handleChange = (event) => this.props.changeHandler(event);

    render() {
        const className = ['text-field', this.props.customStyle];
        return (
            <>
                <input
                    className={className.join(' ').trim()}
                    id={this.props.id}
                    value={this.props.value}
                    type='text'
                    onChange={this.handleChange}
                />
            </>
        );
    }
}

TextField.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    customStyle: PropTypes.string,
    changeHandler: PropTypes.func,
};
