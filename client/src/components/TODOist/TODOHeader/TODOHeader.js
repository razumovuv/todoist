'use strict';

//--------->Import stylesheet
import './TODOHeader.styles.scss';

//---------> Import React
import React from 'react';
import PropTypes from 'prop-types';

export class TODOHeader extends React.Component {
    render() {
        const todoDate = new Date();
        return (
            <div className='todo-wrapper'>
                <div className='todo-header'>
                    <h3>{this.props.children}</h3>
                </div>
            </div>
        );
    }
}

TODOHeader.propTypes = {
    id: PropTypes.string,
};
