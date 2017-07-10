$(document).ready(function() {

var image_url = 'https://image.tmdb.org/t/p/w500/'
//run ajax now
//2 methods = GET and POST
$.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=647690547ead13f6d942484378be7a25').done(function(data) {
    var movie_json = data.results

    for (var i = 0; i < movie_json.length; i++) {
      var $newLi = $('<li>')
      var $newImg = $('<img>')
      var posterPath = movie_json[i].poster_path
      $newImg.attr('src',image_url + posterPath)
      $newLi.append($newImg)
      $('.movie-list').append($newLi)
    }
  })




})
