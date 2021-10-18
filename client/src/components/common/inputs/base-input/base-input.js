//-------------------------- File base-input.js -----------------------------------
'use strict';

//--------->Import stylesheet
import './base-input.styles.scss';

//---------> Import React
import React from 'react';
import PropTypes from 'prop-types';

export default class BaseInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
    }
    static propTypes = {
        id: PropTypes.string,
    };

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        const className = ['input-field'];
        return (
            <div className={className.join(' ').trim()}>
                <input
                    id={this.props.id}
                    value={this.state.value}
                    type='text'
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}
