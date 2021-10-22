'use strict';

//--------->Import stylesheet
import './CheckBox.styles.scss';

//---------> Import React
import React from 'react';
import PropTypes from 'prop-types';

export class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: false };
    }

    render() {
        const className = ['checkbox'];
        return (
            <>
                <input
                    className={className.join(' ').trim()}
                    type='checkbox'
                    id={this.props.id}
                />
                <label htmlFor={this.props.id}> {this.props.text} </label>
            </>
        );
    }
}

CheckBox.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
};
