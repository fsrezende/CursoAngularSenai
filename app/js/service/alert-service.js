/**
 * Created by Fernando on 09/11/2015.
 */
angular.module('Projeto3').service('AlertService', AlertService);

AlertService.$inject = ['$growl'];

function AlertService($growl){

    this.showGrowl=showGrowl;
    this.showOk=showOk;
    this.showError=showError;

    function showGrowl(titulo, mensagem,classe, tempo){
        $growl.box(titulo,mensagem,{
            class: classe,
            timeout: tempo
        }).open();
    }


    function showOk(titulo, mensagem, tempo){
        if (!tempo){
            tempo=3000;
        }
        $growl.box(titulo,mensagem,{
            class: 'success',
            timeout: tempo
        }).open();
    }

    function showError(titulo, mensagem){
        $growl.box(titulo,mensagem,{
            class: 'danger',
            timeout: 3000
        }).open();
    }


}