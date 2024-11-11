document.getElementById('surveyForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value.trim();
    const feedback = document.getElementById('feedback').value.trim();
  
    if (!name || !email || !age || !feedback) return;
  
    const surveyData = { name, email, age, feedback };
    localStorage.setItem('surveyData', JSON.stringify(surveyData));
    window.dispatchEvent(new Event('surveySubmitted'));
    this.reset();
  });