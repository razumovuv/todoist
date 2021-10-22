'use strict';

//--------->Import stylesheet
import './TODOist.styles.scss';

//---------> Import React
import React from 'react';
import PropTypes from 'prop-types';

//--------> Import components
import { TODOForm } from '@components/TODOist/TODOForm';
import { TODOList } from '@components/TODOist/TODOList';
import { TODOHeader } from '@components/TODOist/TODOHeader';

export class TODOist extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='todo-main-conteiner' id={this.props.id}>
                <TODOHeader />
                <TODOForm />
                <TODOList />
            </div>
        );
    }
}

TODOist.propTypes = {
    id: PropTypes.string,
};
