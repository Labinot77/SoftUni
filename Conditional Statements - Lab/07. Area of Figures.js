function AreaOfFigures(params) {
  let Shape = params[0];
  let area = 0


  if (Shape === "square") { 
    let side = Number(parseFloat(params[1]));
    area = side * side;
  } else if (Shape === "rectangle") {
    let length = Number(parseFloat(params[1]));
    let width = parseFloat(params[2]);

    area = length * width;
  } else if (Shape === "circle") {
    let radius = parseFloat(params[1]);

    area = Math.PI * radius * radius
  } else if (Shape === "triangle") {
    let base = Number(parseFloat(params[1]));
    let height = Number(parseFloat(params[2]));

    area = (base * height) / 2
  } else {
    console.log("Not a valid shape")
  }
   
  console.log(area.toFixed(3));
}

AreaOfFigures(["square", "5"]);      
AreaOfFigures(["rectangle", "7", "2.5"]);
AreaOfFigures(["circle", "6"]);        
AreaOfFigures(["triangle", "4.5", "20"]);