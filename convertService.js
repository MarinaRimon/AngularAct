app.factory("convert", function () {

    function convertMinutes(minutes) {
        var hourPermin = 60;
        return Math.round(minutes / hourPermin);
    }
    return {
        movieHour: convertMinutes // calling to convertMinutes function
    }
});


// var resultObject = {
//     movieHour: convertMinutes // calling to convertMinutes function
// }

// return resultObject; // my service return the result of the function



//   var distanceUnits = ["KM", "METER", "MILE", "FEET"];
//   var kmRates = {
//     KM: 1,
//     METER: 1000,
//     MILE: 0.621371192,
//     FEET: 3280.8399
//   };

//   function convertDistance(distance, inUnit, outUnit) {
//     return Math.round(distance * kmRates[outUnit] / kmRates[inUnit]);
//   }

//   function convertKMToMile (km) {
//     return Math.round(km * 0.621371192);
//   }

//   return {
//     /*km2Mile: convertKMToMile*/
//     distance: convertDistance
//   }
//    });