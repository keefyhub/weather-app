$('.weather').on('click', '.weather__item', function() {
  $('.weather__item').removeClass('active');
  $(this).addClass('active');
});

$(document).ready(function() {
  loadWeather('London', 'UK');
});

var days = 5;

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'c',
    success: function(weather) {
      var html = '<header class="weather__header">';
      html += '<div class="weather__city"><i class="fa fa-map-marker"></i>' + weather.city + '</div>';
      html += '<div class="weather__country">' + weather.country + '</div></header>';
      html += '<ul class="weather__list">';

      for (i = 0; i < days; i++) {
        html += '<li class="weather__item"><div class="weather__icon"><i class="wi icon-' + weather.forecast[i].code + '"></i></div>';
        html += '<div class="weather__details"><div class="weather__day">' + weather.forecast[i].day + '</div>';
        html += '<div class="weather__info"><div class="weather__temp">' +  weather.forecast[i].high + '&deg;C</div>';
        html += '<div class="weather__text">' + weather.forecast[i].text + '</div></div>'
        html += '</div></li>'
      }

      html += '</ul>';

      $('#js-weather').html(html);

      $('.weather__item:first').addClass('active');
    },
    error: function(error) {
      $("#js-weather").html('<p>' + error + '</p>');
    }
  });
}
