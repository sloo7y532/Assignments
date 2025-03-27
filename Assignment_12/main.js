/*
  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - Loop
  - Condition
*/

function showInfo(
  name = "Un",
  age = "Un",
  rate_hours = 0,
  show = "Yes",
  ...skils
) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${name}</h2>`);
  document.write(`<p>Age: ${age}</p>`);
  document.write(`<p>Hour Rate: $${rate_hours}</p>`);
  if (show === "Yes") {
    if (skils.length > 0) {
      document.write(`<p>Skills: ${skils.join(" | ")}</p>`);
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  } else {
    document.write(`<p>Skills Is Hidden</p>`);
  }
  document.write(`</div>`);
}

showInfo("Osama", 38, 20, "No", "Html", "CSS");
