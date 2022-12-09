angular.module("bhaskara").config(function ($routeProvider) {
	$routeProvider.when("/contatos", {
        templateUrl: "view/contatos.html",
        controller: "bhaskaraCtrl",
        resolve: {
            contatos: function(contatosAPI){
                return contatosAPI.getContatos();
            },
            operadoras: function(operadorasAPI){
                return operadorasAPI.getOperadoras();
            }
        }

    })
    .otherwise({redirectTo: "/contatos"});
});