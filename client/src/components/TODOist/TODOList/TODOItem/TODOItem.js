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
    handleEdit = (buttonId) => this.props.editHandler(buttonId);
    handleDelete = (buttonId) => this.props.deleteHandler(buttonId);
    handleComplite = (event) => this.props.compliteHandler(event);

    render() {
        return (
            <div className='todo-list__item'>
                <li id={this.props.id}>
                    <div className='todo-list__task'>
                        <CheckBox
                            id={'check_' + this.props.id}
                            label={this.props.children}
                            checked={this.props.complited ? 'checked' : ''}
                            changeHandler={this.handleComplite}
                        />
                    </div>
                    <div className='todo-list__btn-panel'>
                        <IconButton
                            id={'editBtn_' + this.props.id}
                            type='Edit'
                            size='28px'
                            color='#5c8bf0'
                            clickHandler={this.handleEdit}
                        />
                        <IconButton
                            id={'deleteBtn_' + this.props.id}
                            type='Delete'
                            size='28px'
                            color='red'
                            clickHandler={this.handleDelete}
                        />
                    </div>
                </li>
            </div>
        );
    }
}

TODOItem.propTypes = {
    id: PropTypes.string,
    complited: PropTypes.bool,
    deleteHandler: PropTypes.func,
    editHandler: PropTypes.func,
    compliteHandler: PropTypes.func,
};
