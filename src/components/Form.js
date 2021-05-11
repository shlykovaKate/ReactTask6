import {useState} from 'react';

export const Form = ({addEmployee}) => {
    const [value, setValue] = useState('');

    const submitHandler = event => {
        event.preventDefault();
        if (value.trim()) {
            addEmployee(value.trim());
        }
        setValue('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Введите имя нового сотрудника"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
            </div>
        </form>
    );
}

export default Form;