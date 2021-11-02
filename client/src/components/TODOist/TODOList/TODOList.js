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
    render() {
        return (
            <div className='todo-wrapper'>
                <ul className='todo-list'>
                    {this.props.todos.map((todo) => (
                        <TODOItem
                            key={todo.id}
                            id={todo.id.toString()}
                            deleteHandler={this.handleItemDelete}
                            editHandler={this.handleItemEdit}
                            compliteHandler={this.handleItemComplite}
                            complited={todo.complited}
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
    itemEditHandler: PropTypes.func,
    itemDeleteHandler: PropTypes.func,
    itemCompliteHandler: PropTypes.func,
};
