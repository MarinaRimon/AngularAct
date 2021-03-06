// new way + json file - 20 11 2017 - if error to run with firefox
app.controller("actCtrl", function ($scope, $http) {

    // Car Constructor
    function Actor(firstName, lastName, image, imbdLink) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.image = image;
        this.imbdLink = imbdLink;
    };


// create empty array
    $scope.actors = [];

    $http.get("actjson.json").then(function mySuccess(response) {
        for (var i = 0; i < response.data.length; i++) {
            $scope.actors.push(
                new Actor(response.data[i].firstName,
                    response.data[i].lastName,
                    response.data[i].image,
                    response.data[i].imbdLink))
        }
        //alert("success" + JSON.stringify(response.status));
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    })

});

// old way
// app.controller("actCtrl", function ($scope) {

//     // Car Constructor
//     function Actor(firstName, lastName, image, imbdLink) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.image = image;
//         this.imbdLink = imbdLink;
//         //this.kmPerYear = function () {
//           //  var currentYear = new Date().getFullYear();
//             //return Math.round(this.km / (currentYear - this.year + 1));
//        // };
//     }


//     $scope.actors = [new Actor("Gal", 
//     "Gadot", 
//     "https://images-na.ssl-images-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg",
//      "http://www.imdb.com/name/nm2933757/?ref_=nv_sr_1"),

//     new Actor("Maia","Mitchell","https://images-na.ssl-images-amazon.com/images/M/MV5BMjg1Mzc2NzExNV5BMl5BanBnXkFtZTgwMjU4MzE1OTE@._V1_UY317_CR13,0,214,317_AL_.jpg","http://www.imdb.com/name/nm2314596/?ref_=nv_sr_1"),

//     new Actor("Gal", 
//     "Gadot", 
//     "https://images-na.ssl-images-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg",
//      "http://www.imdb.com/name/nm2933757/?ref_=nv_sr_1"),

//     new Actor("Maia","Mitchell","https://images-na.ssl-images-amazon.com/images/M/MV5BMjg1Mzc2NzExNV5BMl5BanBnXkFtZTgwMjU4MzE1OTE@._V1_UY317_CR13,0,214,317_AL_.jpg","http://www.imdb.com/name/nm2314596/?ref_=nv_sr_1")
// ];

//$scope.addCar = function() {
//      $scope.cars.push(new Car("Susita", "Carmel", "1972", 12022939));
//}
//});