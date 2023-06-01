// Good Luck! You got this 💪🏾
// Write your code here.
function calculateBMI(weight, height) 
{  const bmi = weight / (height * height)
 return bmi }


const AbdiWeight = 75; 
 const AbdiHeight = 1.75; 
 const AbdiBMI = calculateBMI(AbdiWeight, AbdiHeight)
 const nuurWeight = 68; 
 const nuurHeight = 1.80; 
 const nuurBMI = calculateBMI(nuurWeight, nuurHeight);
 if (AbdiBMI > nuurBMI) { 
 console.log("Abdi has a higher BMI"); } 
 else if (nuurBMI > AbdiBMI)
 { console.log("nuur has a higher BMI");
 } else { 
 console.log("Abdi and nuur have the same BMI"); }
