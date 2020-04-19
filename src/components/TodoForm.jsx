import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = {
    name: '',
    descriptions: '',
    url: '',
};

const reducer = (state, { field, value }) => {
    return {
        ...state,
        [field]: value,
    };
};

const TodoForm = ({ addTodo, showAdd }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (event) => {
        dispatch({ field: event.target.name, value: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            state.name === '' ||
            state.descriptions === '' ||
            state.url === ''
        ) {
            alert(
                'Masukan nama barang, deskripsi barang, dan link gambar barang'
            );
        } else {
            addTodo(state);
        }
    };

    const { name, descriptions, url } = state;

    if (showAdd) {
        return (
            <section className='add'>
                <form className='add-form' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='name'
                        value={name}
                        className='add-input'
                        onChange={handleChange}
                        placeholder='Item Name'
                    />
                    <input
                        type='text'
                        name='descriptions'
                        value={descriptions}
                        onChange={handleChange}
                        placeholder='Item Description'
                        className='add-input'
                    />
                    <input
                        type='url'
                        name='url'
                        value={url}
                        onChange={handleChange}
                        placeholder='Item URL'
                        className='add-input'
                    />
                    <button type='submit' className='add-btn main-black-color'>
                        Add
                    </button>
                </form>
            </section>
        );
    } else {
        return null;
    }
};

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
};

export default TodoForm;
