function loadSurveyData() {
    const responsesTableBody = document.querySelector('#responsesTable tbody');
    responsesTableBody.innerHTML = '';
    const data = JSON.parse(localStorage.getItem('surveyData'));
    
    if (data) {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${data.name}</td>
        <td>${data.email}</td>
        <td>${data.age}</td>
        <td>${data.feedback}</td>
      `;
      responsesTableBody.appendChild(newRow);
    }
  }
  
  window.addEventListener('surveySubmitted', loadSurveyData);
  window.addEventListener('DOMContentLoaded', loadSurveyData);