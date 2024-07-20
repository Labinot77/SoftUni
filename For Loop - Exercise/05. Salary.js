function salary(params) {
  const openedTabs = Number(params[0]);
  let salary = Number(params[1]);

  const penalties = {
    Facebook: 150,
    Instagram: 100,
    Reddit: 50
  };

  for (let i = 2; i < 2 + openedTabs; i++) {
    const website = params[i];
    if (penalties[website]) {
        salary -= penalties[website];
    }

    if (salary <= 0) {
        console.log("You have lost your salary.");
        return;
    }
}

console.log(salary)
}

salary(["10",
  "200",
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook"])
  