'use strict';

//--------->Import stylesheet
import './TODOItem.styles.scss';

//---------> Import React
import React from 'react';
import PropTypes from 'prop-types';
//---------> Import components
import { IconButton } from '@components/common/IconButton';
import { CheckBox } from '@components/common/CheckBox';

export class TODOItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='todo-list__item'>
                <li id={this.props.id}>
                    <div className='todo-list__task'>
                        <CheckBox
                            id={this.props.id + '_itemCheck'}
                            text='Task1'
                        />
                    </div>
                    <div className='todo-list__btn-panel'>
                        <IconButton
                            id={this.props.id + '_itemEditButton'}
                            type='Edit'
                            size='28px'
                            color='#5c8bf0'
                            clickHandler={() => {
                                console.log('Кнопка редактировать');
                            }}
                        />
                        <IconButton
                            id={this.props.id + '_itemDeleteButton'}
                            type='Delete'
                            size='28px'
                            color='red'
                            clickHandler={() => {
                                console.log('Кнопка удалить');
                            }}
                        />
                    </div>
                </li>
            </div>
        );
    }
}

TODOItem.propTypes = {
    id: PropTypes.string,
};
