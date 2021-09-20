
function getEmployeesSalary () {
    var Employee = {
        Name:"Freddie",
        LastName:"Mercury",
        Salary: 70000,
        Salary: 30
    }; 
    delete Employee.Salary;
    document.getElementById("Dictionary").innerHTML = Employee.Salary
}