function calculateSalary() {
    const basicSalary = Number(document.getElementById('basic_salary').value);
    const benefits = Number(document.getElementById('benefits').value);
  
    const grossSalary = basicSalary + benefits;
    const payeeTax = calculatePayeeTax(grossSalary);
    const nhifDeduction = calculateNHIFDeduction(grossSalary);
    const nssfDeduction = calculateNSSFDeduction(basicSalary);
    const netSalary = grossSalary - payeeTax - nhifDeduction - nssfDeduction;
  
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
      <p>Gross Salary: KES ${grossSalary.toFixed(2)}</p>
      <p>Payee Tax: KES ${payeeTax.toFixed(2)}</p>
      <p>NHIF Deduction: KES ${nhifDeduction.toFixed(2)}</p>
      <p>NSSF Deduction: KES ${nssfDed}
  