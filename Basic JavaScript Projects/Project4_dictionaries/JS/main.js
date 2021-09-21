
function getEmployeesSalary () {
    var Employee = {    //  creation a dictionary of KVPs 
        Name:"Freddie",
        LastName:"Mercury",
        Salary: 70000,
        Salary: 30
    }; 
    delete Employee.Salary;
    document.getElementById("Dictionary").innerHTML = Employee.Salary;
}