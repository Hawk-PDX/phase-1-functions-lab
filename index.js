const hqLoc = 42;
function distanceFromHqInBlocks(cliLoc) {
  if (cliLoc >= hqLoc) {
    return cliLoc - hqLoc;
  } else {
    return hqLoc - cliLoc;
  }
}
function distanceFromHqInFeet(cliLoc) {
  if (cliLoc >= hqLoc) {
    return (cliLoc - hqLoc) * 264;
  } else {
    return (hqLoc - cliLoc) * 264;
  }
}

function distanceTravelledInFeet(start, destination) {
  if (start >= destination) {
    return (start - destination) * 264;
  } else {
    return (destination - start) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
