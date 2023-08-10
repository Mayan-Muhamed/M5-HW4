import React from 'react';
import {useSelector} from 'react-redux';

const ShowForm = () => {

    const formData = useSelector((state) => state.formData)

    return (
        <div>
            <h2>Вывод</h2>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
        </div>
    );
};

export default ShowForm;