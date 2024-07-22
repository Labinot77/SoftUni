function walking(params) {
  const goal = 10000;
  let index = 0;
  let currentSteps = 0;

  while (index < params.length) {
    const input = params[index];

    if (input === "Going home") {
      currentSteps += Number(params[index + 1]);
      break;
    } else {
      currentSteps += Number(input);
    }
    
    index++;
  }

  if (currentSteps >= goal) {
    console.log(`Goal reached! Good job!`);
    console.log(`${currentSteps - goal} steps over the goal!`);
  } else {
    console.log(`${goal - currentSteps} more steps to reach goal.`);
  }
}

walking(["1500", "300", "2500", "3000", "Going home", "200"]);
