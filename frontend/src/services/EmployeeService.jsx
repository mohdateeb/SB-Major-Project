import axios from 'axios';
const EMPLOYEE_API = "http://localhost:9191/api/v1/employees";

class EmployeeService
{
       addEmployee(employee)
       {
            return axios.post(EMPLOYEE_API,employee);
       } 
       getAllEmployees()
       {
            return axios.get(EMPLOYEE_API);
       }

}
export default new EmployeeService();
