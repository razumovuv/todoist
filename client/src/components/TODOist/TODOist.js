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
//{id , task, complited, isEditing, newValue}

export class TODOist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
    }

    handleItemDelete = (buttonId) => {
        const todos = this.state.todos;
        const ID_FIRST_CHAR_POSITION = 10;
        const todoIndex = todos
            .map((todo) => {
                return todo.id;
            })
            .indexOf(parseInt(buttonId.substring(ID_FIRST_CHAR_POSITION)));
        todos.splice(todoIndex, 1);
        this.setState({ todos: todos });
    };

    handleItemAdd = (event, cb) => {
        if (!(event.target[0].value === '')) {
            const _todos = this.state.todos;
            _todos.push({
                id: Date.now(),
                task: event.target[0].value,
                complited: false,
            });
            this.setState({ todos: _todos });
        }
        cb();
        event.preventDefault();
    };
    handleItemComplite = (event) => {
        const target = event.target;
        const _todos = this.state.todos;
        const ID_FIRST_CHAR_POSITION = 6;

        const todoIndex = _todos
            .map((todo) => {
                return todo.id;
            })
            .indexOf(parseInt(target.id.substring(ID_FIRST_CHAR_POSITION)));

        _todos[todoIndex].complited = !this.state.todos[todoIndex].complited;
        this.setState({ todos: _todos });
    };
    handleItemUpdate = (event, cb) => {
        const target = event.target;
        const _todos = this.state.todos;
        const ID_FIRST_CHAR_POSITION = 10;

        const todoIndex = _todos
            .map((todo) => {
                return todo.id;
            })
            .indexOf(parseInt(target.id.substring(ID_FIRST_CHAR_POSITION)));

        _todos[todoIndex].task = target[0].value;
        this.setState({ todos: _todos });
        cb(_todos[todoIndex].task);
        event.preventDefault();
    };

    render() {
        return (
            <div className='todo-main-conteiner' id={this.props.id}>
                <TODOHeader />
                <TODOForm id='todoForm' submitHandler={this.handleItemAdd} />
                <TODOList
                    todos={this.state.todos}
                    itemCompliteHandler={this.handleItemComplite}
                    itemDeleteHandler={this.handleItemDelete}
                    itemUpdateHandler={this.handleItemUpdate}
                />
            </div>
        );
    }
}

TODOist.propTypes = {
    id: PropTypes.string,
};
