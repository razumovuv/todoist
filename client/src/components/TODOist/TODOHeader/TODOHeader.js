'use strict';

//--------->Import stylesheet
import './TODOHeader.styles.scss';

//---------> Import React
import React from 'react';
import PropTypes from 'prop-types';

export class TODOHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { $date: 'дата' };
    }

    render() {
        return (
            <div className='todo-wrapper'>
                <div className='todo-header'>
                    <h3> Мои дела на: {this.state.$date}</h3>
                </div>
            </div>
        );
    }
}

TODOHeader.propTypes = {
    id: PropTypes.string,
};
