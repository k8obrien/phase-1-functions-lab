const hq = 42
const feet = 264


function distanceFromHqInBlocks(blocks){
    if (blocks > hq){
        return blocks - hq;
    } else if (blocks < hq){
        return hq - blocks
    }
}
function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks) * feet;
}
function distanceTravelledInFeet(pickup, dropoff){
    if (pickup < dropoff)
        return (dropoff - pickup) * feet;
    else
        return (pickup - dropoff) * feet
}
function calculatesFarePrice (start, destination){
    if (start < destination){
        let travel = ((destination - start) * feet)
        if (travel < 400){
            return 0;
        } else if (travel < 2000){
            return ((travel - 400) * 0.02)
        } else if (travel < 2500){
            return 25;
        } else if (travel > 2500){
            return 'cannot travel that far'
        }
    } else if ( start > destination){
        let travel2 = ((start - destination) * feet)
        if (travel2 < 400){
            return 0;
        } else if (travel2 < 2000){
            return ((travel2 - 400) * 0.02);
        } else if (travel2 < 2500){
            return 25;
        } else if (travel2 > 2500){
            return 'cannot travel that far'
        }
    }
}
  
