import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {updateData} from '../Store/FormReducer';

const Form = () => {
    const [formData, setFormData] = useState({});
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateData(formData));
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" name='name' placeholder='Name' onChange={handleChange}/>
            </div>
            <div>
                <input type="text" name="email" placeholder='Email' onChange={handleChange}/>
            </div>
            <button type='submit'>Подтвердить</button>
        </form>
    );
};

export default Form;