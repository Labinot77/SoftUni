function WordReading(params) {
  let i = 0;
  
  while (i < params.length && params[i] !== "Stop") {
    console.log(params[i]);
    i++;
  }

  // for (i = 0; i < params.length;i++) {

  //   if (params[i] === "Stop") {
  //     return;
  //   }

  //   console.log(params[i]);
  // }
}

WordReading(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);
