export default function createReportObject(employeesList) {
  const fullReport = {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      const count = Object.keys(employeesList).length;
      return count;
    },
  };

  return fullReport;
}
