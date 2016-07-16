'used strict';

var aplicacion = angular.module('appTest', []);

aplicacion.controller('myCtrl', function ($scope) {

    $scope.nombre = "luis miguel";
    $scope.apellido = "gomez Menco";

    $scope.cambiarNombre = function (valueNombre) {
        $scope.nombre = valueNombre;

    };

    $scope.isShow = false;
    $scope.showInput = function () {
        $scope.isShow = !$scope.isShow;
    }

    $scope.listPersonas = [
    { identificacion: '1', nombre: 'luis8' },
    { identificacion: '2', nombre: 'luis2' },
    { identificacion: '3', nombre: 'luis3' },
    { identificacion: '4', nombre: 'luis4' },
    { identificacion: '5', nombre: 'luis5' },
    { identificacion: '6', nombre: 'luis6' },
    { identificacion: '7', nombre: 'luis7' },
    { identificacion: '8', nombre: 'luis1' },
    { identificacion: '9', nombre: 'luis9' }];

    $scope.objProducto = { nombre: "", codigo: "" };

    $scope.listProducto = [{ nombre: "pera", codigo: 1 }];

    $scope.guardarProducto = function () {
        $scope.listProducto.push($scope.objProducto);
    }
});