/**
 * Created by Fernando on 06/11/2015.
 */
angular.module('Projeto3',['ngMessages', 'ui.growl']);
angular.module('Projeto3').controller('IndexController3',funcIndexController3);


//funcIndexController3.$inject = ['$scope','$growl, '$filter', 'AlertService']

function funcIndexController3($scope,$growl, $filter,AlertService){

    var teste = $filter('maiusculo','uma string qualquer');
//    var filtroData= $filter('data', date(),'dd/MM/yyyy');

    $scope.entidade = [];
    $scope.listaDePessoas=[];

    $scope.salvar=salvar;
    $scope.limpar=limpar;

    function salvar(){
        if ($scope.meuFormulario.$invalid === true) {
            AlertService.showError('Observe', 'Verifique os Campos Inválidos');
//             AlertService.showGrowl('Observe', 'Verifique os Campos Inválidos', 'danger', 3000);
            /*           $growl.box('Observe','Verifique os Campos Inválidos',{
                         class: 'danger',
                         timeout: 3000
                         }).open();
                         */
//            alert('Verifique os campos inválidos')
            return;
        }
        $scope.listaDePessoas.push($scope.entidade);
        limpar();
        $growl.box('Ok','Registro Salvo com Sucesso',{
            class: 'success',
            timeout: 3000
        }).open();
        //alert('Registro Salvo com Sucesso');
    }

    function limpar(){
        $scope.entidade = [];

    }
}
