// 20 11 2017 
app.controller("movieCtrl", function ($scope, $http, convert) {
    // Movie Constructor in movieService.js
    // function Movie(movieName, movieLength, movieActor, movieDirector) {
    //     this.movieName = movieName;
    //     this.movieLength = movieLength;
    //     this.movieActor = movieActor;
    //     this.movieDirector = movieDirector;
    //     this.movieShaot = convert.movieHour(movieLength);  // 22 11 2017
    // };


    // create movie empty array
    $scope.movies = [];
// reading from json file
    $http.get("movies.json").then(function mySuccess(response) {
        for (var i = 0; i < response.data.length; i++) {
            $scope.movies.push(
                new Movie(response.data[i].movieName,
                    response.data[i].movieLength,
                    response.data[i].movieActor,
                    response.data[i].movieDirector
                ))
        }
        alert("success" + JSON.stringify(response.status));
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    })

});