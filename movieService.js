app.factory("Movie", function () {
    // Movie Constructor
    function Movie(movieName, movieLength, movieActor, movieDirector) {
        this.movieName = movieName;
        this.movieLength = movieLength;
        this.movieActor = movieActor;
        this.movieDirector = movieDirector;
        this.movieShaot = convert.movieHour(movieLength); // 22 11 2017
    };
    return Movie;

});