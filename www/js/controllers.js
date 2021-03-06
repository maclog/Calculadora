angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
})

.controller('CalculadoraCtrl', function Calculadora($scope){

    $scope.calcular = function() {
        var nr1 = $scope.valor1;
        var nr2 = $scope.valor2;

        $scope.result = nr1 + nr2;
    };
})

.controller('CalculadoraRestCtrl',
    function CalculadoraRest($scope,$http) {
        $http.post('http://192.168.246.19/WCFTeste/Service.svc/json/somaCalculadora').success(function (resultadoSoma) {
            $scope.result = resultadoSoma;
        });
    }
)