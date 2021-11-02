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
        this.state = {
            value: '',
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
        console.log(this.state.todos);
    };
    handleItemEdit = (buttonId) => {
        console.log('UPDATE button ID:' + buttonId);
    };
    handleChangeInput = (event) => {
        this.setState({ value: event.target.value });
    };
    handleAdd = (event) => {
        const _todos = this.state.todos;
        _todos.push({
            // id: _todos[_todos.length - 1].id + 1,
            id: Date.now(),
            task: this.state.value,
            complited: false,
        });
        this.setState({ todos: _todos });
        event.preventDefault();
    };
    handleComplite = (event) => {
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

    render() {
        return (
            <div className='todo-main-conteiner' id={this.props.id}>
                <TODOHeader />
                <TODOForm
                    id='todoForm'
                    submitHandler={this.handleAdd}
                    changeHandler={this.handleChangeInput}
                    value={this.state.value}
                />
                <TODOList
                    todos={this.state.todos}
                    itemEditHandler={this.handleItemEdit}
                    itemCompliteHandler={this.handleComplite}
                    itemDeleteHandler={this.handleItemDelete}
                />
            </div>
        );
    }
}

TODOist.propTypes = {
    id: PropTypes.string,
};
