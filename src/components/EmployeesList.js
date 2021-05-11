export const EmployeesList = ({employees, removeEmployee}) => (
    <ul className="list-group">
        {employees.map(employee => (
            <li
                className="list-group-item employee"
                key={employee.id}
            >
                <span>{employee.name}</span>
                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => removeEmployee(employee.id)}
                >
                    &times;
                </button>
            </li>
        ))}
    </ul>
);

export default EmployeesList;