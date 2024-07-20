function password(params) {
  const username = params[0];
  const password = params[1];
  let data = params[2];
  let index = 3;
  
  while (data !== password) {
    data = params[index];
    index++
  }

  console.log(`Welcome ${username}!`)
}

password(["Nakov",
  "1234",
  "Pass",
  "1324",
  "1234"])
  