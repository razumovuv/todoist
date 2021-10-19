//-------------------------- File base-input.js -----------------------------------
'use strict';

//--------->Import stylesheet
import './TextField.styles.scss';

//---------> Import React
import React from 'react';
import PropTypes from 'prop-types';

export class TextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        const className = ['text-field'];
        const inlinStyle = { width: this.props.width };
        return (
            <>
                <input
                    className={className.join(' ').trim()}
                    id={this.props.id}
                    value={this.state.value}
                    type='text'
                    onChange={this.handleChange}
                    style={inlinStyle}
                />
            </>
        );
    }
}

TextField.propTypes = {
    id: PropTypes.string,
    width: PropTypes.string,
};
