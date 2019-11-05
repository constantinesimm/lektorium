/*

    Closure - Create a constructor function which will use closure for working with private data.
    It should have 2 private methods and 2 private props which we can change only with that private methods.

 */

const Employee = (function () {
    //scope for private methods
    const _private = function (callback) {
        return function (argument) {
            return callback.call(null, argument);
        };
    };
    //private props
    let _fullname;
    let _positionCoefficient;
    let _hourRate;

    //private methods
    const { _getCard, _getName, _setName, _getSalary, _setSalaryCoefficients } = {
        _getCard(employee) {
            return employee;    //return Employee object
        },
        _getName() {
            return _fullname;
        },
        _setName({ firstname, lastname }) {
            _fullname = `${firstname} ${lastname}`;
        },
        _getSalary(hours) {
            return hours * _hourRate + (hours * _hourRate * _positionCoefficient);  //salary + position loyalty bonus :D
        },
        _setSalaryCoefficients({position, experience}) {
            const rates = { 'Junior': 0.25, 'Middle': 0.5, 'Senior': 0.75 };

            _positionCoefficient = rates[position] * experience;
            _hourRate = rates[position] * 10;
        }
    };

    //constructor
    function Employee(firstname, lastname, age, company, position, experience) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.company = company;
        this.position = position;
        this.experience = experience;

        //init methods and set props
        _setName(this);
        _setSalaryCoefficients(this);
    };

    //public methods prototype assign
    Employee.prototype.getCard = function () {
        return _private(_getCard)(this);
    };
    Employee.prototype.getFullname = function () {
        return _private(_getName)(this);
    };
    Employee.prototype.changeName = function (firstName, lastName) {
        this.firstname = firstName;
        this.lastname = lastName;

        return _private(_setName)(this)
    };
    Employee.prototype.calculateSalary = function (hours) {
        return _private(_getSalary)(hours);
    };
    Employee.prototype.changePosition = function (position) {
        this.position = position;

        return _private(_setSalaryCoefficients)(this)
    };

    return Employee;
})();

const employee = new Employee('John', 'Doe', 18, 'Google', 'Senior', 4);

console.log(`getName Method:\n`, employee.getFullname(), `\n`);
employee.changeName('test', 'test');
console.log(`getName Method:\n`, employee.getFullname(), `\n`);
console.log(`calculateSalary Method:\n`, employee.calculateSalary(200), `\n`);
employee.changePosition('Middle');
console.log(`calculateSalary Method:\n`, employee.calculateSalary(200), `\n`);
employee.changePosition('Junior');
console.log(`calculateSalary Method:\n`, employee.calculateSalary(200), `\n`);
console.log(`getCard Method:\n`, employee.getCard(), `\n`);