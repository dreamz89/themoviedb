$(document).ready(function() {

var image_url = 'https://image.tmdb.org/t/p/w300/'

var firstHalf = 'https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query='
var secondHalf = '&language=en-US&api_key=647690547ead13f6d942484378be7a25'

$('button').on('click', function() {
  event.preventDefault();
  $('ul').empty();
  var $searchString = $('input').val()

  $.get(firstHalf + $searchString + secondHalf).done(function(data) {
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
})
