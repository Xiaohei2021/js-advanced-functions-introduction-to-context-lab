// Your code here



function createEmployeeRecord(row)
{
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arrays)
{
   return arrays.map(createEmployeeRecord)
}   

function createTimeInEvent(emp, punchCard)
{
    let [date, hour] = punchCard.split(" ")

    emp.timeInEvents.push
    (
        {
            type: "TimeIn",
            hour: parseInt(hour),
            date
        }
    )
    return  emp
}

function createTimeOutEvent(emp, punchCard)
{
    let [date, hour] = punchCard.split(" ")

    emp.timeOutEvents.push
    (
        {
            type: "TimeOut",
            hour: parseInt(hour),
            date
        }
    )
    return  emp
} 

function hoursWorkedOnDate(emp, punchCard)
{
    const timesIn = emp.timeInEvents.find(e => e.date === punchCard);
    const timesOut = emp.timeOutEvents.find(e => e.date === punchCard);

    return(timesOut.hour - timesIn.hour)/100
}

function wagesEarnedOnDate(emp, punchCard)
{
 const payRate = emp.payPerHour;
 const workTime = hoursWorkedOnDate(emp, punchCard);
 return (payRate * workTime);   
}

function allWagesFor(emp)
{
    let daysWorked = emp.timeInEvents.map(day => day.date)
    let payCheck = daysWorked.reduce(function(accumulator,day)
    {
        return accumulator + wagesEarnedOnDate(emp, day)
    },0)

    return payCheck;
}


function findEmployeeByFirstName(srcArray, firstName)
{
    return srcArray.find(element => element.firstName === firstName)

}


function calculatePayroll(array)
{
   return array.reduce(function(accumulator, day)
   {
        return accumulator + allWagesFor(day)
   },0) 
}
