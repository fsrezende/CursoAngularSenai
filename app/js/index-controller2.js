/**
 * Created by Fernando on 04/11/2015.
 */
angular.module('Projeto2',[]);
angular.module('Projeto2').controller('IndexController2', funcIndexController2);

funcIndexController2.$inject = ['$scope'];

function funcIndexController2($scope){
    $scope.nome = '';
    $scope.styleDiv = {};
    $scope.minhaClasse ={};

    $scope.carros = [
        {nome: 'Gol', cor: 'Vermelho'},
        {nome: 'Corsa', cor: 'Azul'},
        {nome: 'Fusca', cor: 'Preto'},
        {nome: 'Brasilia', cor: 'Amarela'}
    ];

    $scope.adicionarCarro=adicionarCarro;

    function adicionarCarro(){
        var obj = {};

        obj.nome = 'Carro'+$scope.carros.length;
        obj.cor = 'Cor' + $scope.carros.length;
        $scope.carros.push(obj);
    }

    iniciar();

    function iniciar(){
        $scope.$watch('nome',escutaNome);
    }


    function escutaNome(valorNovo,valorAntigo){
        if (valorNovo === valorAntigo){
            return;
        }
        if (valorNovo === 'Maria'){
            $scope.styleDiv.backgroundColor='red';
            $scope.minhaClasse = 'Vermelho';

        }
        else if (valorNovo === 'Joao') {
            $scope.styleDiv.backgroundColor ='blue';
            $scope.minhaClasse = 'Azul';
        } else {
            $scope.styleDiv.backgroundColor = '#FFF';

        }
    }

}