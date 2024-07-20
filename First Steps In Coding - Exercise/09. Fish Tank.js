function FishTank(params) {
  // cm
  let Length = Number(params[0]);
  let Width = Number(params[1]);
  let Height = Number(params[2]);
  let Percentage = Number(params[3]) / 100;

  let Volume = Length * Width * Height;
  let VolumeInLiters = Volume / 1000;

  let TotalVolumeWithSand = VolumeInLiters * (1 - Percentage);

  console.log(TotalVolumeWithSand);
}

FishTank([85,75,47,17])