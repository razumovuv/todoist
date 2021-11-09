'use strict';

//--------->Import stylesheet
import './TODOList.styles.scss';

//---------> Import React
import React from 'react';
import PropTypes from 'prop-types';

//---------> Import components
import { TODOItem } from '@components/TODOist/TODOList/TODOItem';

export class TODOList extends React.Component {
    handleItemEdit = (buttonId) => this.props.itemEditHandler(buttonId);
    handleItemDelete = (buttonId) => this.props.itemDeleteHandler(buttonId);
    handleItemComplite = (event) => this.props.itemCompliteHandler(event);
    handleItemUpdate = (event, cb) => this.props.itemUpdateHandler(event, cb);
    render() {
        return (
            <div className='todo-wrapper'>
                <ul className='todo-list'>
                    {this.props.todos.map((todo) => (
                        <TODOItem
                            key={todo.id}
                            id={todo.id.toString()}
                            deleteHandler={this.handleItemDelete}
                            compliteHandler={this.handleItemComplite}
                            complited={todo.complited}
                            isDisabled={todo.isDisabled}
                            updateHandler={this.handleItemUpdate}
                        >
                            {todo.task}
                        </TODOItem>
                    ))}
                </ul>
            </div>
        );
    }
}

TODOList.propTypes = {
    todos: PropTypes.array,
    itemDeleteHandler: PropTypes.func,
    itemCompliteHandler: PropTypes.func,
    itemUpdateHandler: PropTypes.func,
};
