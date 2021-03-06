app.controller("weatherController", function($scope, $state, $stateParams, weatherService) {

  $scope.temp = "";
  $scope.forecast = "";
  $scope.location = "";
  $scope.resultsPresent = false;

  $scope.getWeather = function() {
    console.log($scope.location);
    weatherService.getWeather($scope.location)
      .then(function(response) {
        console.log(response);
        $scope.resultsPresent = true;
        $scope.temp = response.data.currently.temperature;
        $scope.forecast = response.data.hourly.summary;

        $scope.icon = response.data.currently.icon;
        if ($scope.icon == 'rain') {
          console.log('raining');
          $scope.heroImage = {
            background: 'url(https://media.giphy.com/media/l0Iy5fjHyedk9aDGU/giphy.gif)'
          };
        } 
        if ($scope.icon == 'wind') {
          console.log('wind');
          $scope.heroImage = {
            background: 'url(https://media.giphy.com/media/HmTLatwLWpTQk/giphy-downsized-large.gif)'
          };
        } 
        if ($scope.icon == 'snow') {
          console.log('snow');
          $scope.heroImage = {
            background: 'url(https://i.giphy.com/media/Yy26NRbpB9lDi/giphy.webp)'
          };
        }
        if ($scope.icon == 'clear-day') {
          console.log('clear-day');
          $scope.heroImage = {
            background: 'url(https://i.giphy.com/media/IWHBAEKT9udiM/giphy.webp)'
          };
        }
        if ($scope.icon == 'clear-night') {
          console.log('clear-night');
          $scope.heroImage = {
            background: 'url(https://78.media.tumblr.com/e1aaf912bc6e7b18277a53aea1e66b0d/tumblr_nc0g1zw73r1tqou9go1_500.gif)'
          };
        }
        if ($scope.icon == 'sleet') {
          console.log('sleet');
          $scope.heroImage = {
            background: 'url(https://media.giphy.com/media/za2q5Ma5ljCQU/source.gif)'
          };
        }
        if ($scope.icon == 'fog') {
          console.log('fog');
          $scope.heroImage = {
            background: 'url(https://78.media.tumblr.com/b18d5b158f5a350910e4a485131f9714/tumblr_nxh62ay5p11s7syh1o1_500.gif)'
          };
        }
        if ($scope.icon == 'cloudy') {
          console.log('cloudy');
          $scope.heroImage = {
            background: 'url(https://i.giphy.com/media/Yy26NRbpB9lDi/giphy.webp)'
          };
        }
        if ($scope.icon == 'partly-cloudy-day') {
          console.log('partly-cloudy-day');
          $scope.heroImage = {
            background: 'url(http://www.doori.at/blog/wp-content/uploads/Day-trim-footage-wlogo_1000.gif)'
          };
        }
        if ($scope.icon == 'partly-cloudy-night') {
          console.log('partly-cloudy-night');
          $scope.heroImage = {
            background: 'url(http://www.doori.at/blog/wp-content/uploads/Day-trim-footage-wlogo_1000.gif)'
          };
        }
        if ($scope.icon == 'hail') {
          console.log('hail');
          $scope.heroImage = {
            background: 'url(https://i.giphy.com/media/Yy26NRbpB9lDi/giphy.webp)'
          };
        }
        if ($scope.icon == 'thunderstorm') {
          console.log('thunderstorm');
          $scope.heroImage = {
            background: 'url(https://i.giphy.com/media/Yy26NRbpB9lDi/giphy.webp)'
          };
        }
        if ($scope.icon == 'tornado') {
          console.log('tornado');
          $scope.heroImage = {
            background: 'url(https://i.giphy.com/media/Yy26NRbpB9lDi/giphy.webp)'
          };
        }

        $scope.lat = response.data.latitude;
        $scope.lng = response.data.longitude;

        function initMap() {
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: {lat: $scope.lat , lng: $scope.lng}
          });
          var marker = new google.maps.Marker({
            position: {lat: $scope.lat , lng: $scope.lng},
            map: map
          });
        }
        initMap();

      }, function(error) {
        console.log(error);
      })
  }
})
