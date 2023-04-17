export default function createReportObject(employeesList) {
  const fullReport = {
    ['allEmployees']: employeesList,
    getNumberOfDepartments: function(employeesList) {
      let count = Object.keys(employeesList).length;
      return count;
    }
  };

  return fullReport;
}
