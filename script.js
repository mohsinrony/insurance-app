function calculateRiskScore() {
    let userName = document.getElementById("name").value;
    // Get age from the input
    const age = parseInt(document.getElementById("age").value);

    // Base score
    let score = 500;

    // Age-based adjustments
    if (age < 18) {
      score = 500;
    } else if (age >= 18 && age <= 25) {
      score += score * 0.1;
    } else if (age >= 26 && age <= 35) {
      score += score * 0.3;
    } else if (age >= 36 && age <= 45) {
      score += score * 0.6;
    } else if (age >= 46 && age <= 55) {
      score += score;
    } else if (age >= 56 && age <= 65) {
      score += score * 1.5;
    } else {
      score += score * 2.1;
    }

    // Health conditions adjustments
    const healthCheckboxes = document.querySelectorAll(".health");
    healthCheckboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        score += score * 0.01;
      }
    });

    // Habits adjustments
    const habitsCheckboxes = document.querySelectorAll(".habits");
    habitsCheckboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        if (
          checkbox.value === "Regular Exercise" ||
          checkbox.value === "Healthy Diet" ||
          checkbox.value === "Adequate Sleep" ||
          checkbox.value === "Stress Management" ||
          checkbox.value === "Moderate Alcohol Consumption" ||
          checkbox.value === "Non-Smoking"
        ) {
          score -= score * 0.05;
        } else {
          score += score * 0.05;
        }
      }
    });
 
    // Display the result
    document.getElementById(
      "result"
    ).textContent =`Hello  ${userName}! Your Risk Score is: ${Math.round(score)}`;
  }