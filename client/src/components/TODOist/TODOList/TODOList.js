'use strict';

//--------->Import stylesheet
import './TODOList.styles.scss';

//---------> Import React
import React from 'react';
import PropTypes from 'prop-types';

//---------> Import components
import { TODOItem } from '@components/TODOist/TODOList/TODOItem';

export class TODOList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='todo-wrapper'>
                <ul className='todo-list'>
                    <TODOItem id='Task1' />
                </ul>
            </div>
        );
    }
}
