import {useEffect, useState} from "react";
import Form from "../components/Form";
import EmployeesList from "../components/EmployeesList";
import axios from 'axios';

export const Employees = () => {
    const [employees, setEmployees] = useState([]);

    const fetchEmployees = async () => {
        const res = await axios.get(`https://reqres.in/api/users?per_page=12`);
        const employees = res.data.data.map(employee => ({
            name: employee.first_name,
            id: employee.id
        }));
        setEmployees(employees);
    }

    const removeEmployee = id => {
        setEmployees(employees.filter(employee => employee.id !== id));
    }

    const addEmployee = name => {
        const newEmployee = {
          name,
          id: employees[employees.length - 1].id + 1
        }
        setEmployees([...employees, newEmployee]);
        console.log(`Сотрудник ${name} добавлен`);
    }

    useEffect(() => {
        fetchEmployees();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <Form addEmployee={addEmployee} />
            <hr />
            <EmployeesList employees={employees} removeEmployee={removeEmployee} />
        </>
    );
}

export default Employees;