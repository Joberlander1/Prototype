var myApp = angular.module('app', ['ngRoute']);
myApp.controller('ClientCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $scope.clients = [];
    $http.get('/client').success(function(data, status, headers, config) {
        $scope.clients = data;
        if (data == "") {
            $scope.clients = [];
        }
    }).error(function(data, status, headers, config) {
        console.log("Ops: could not get any data");
    });
        $scope.addClient = function() {
        $http.post('/client', {
            name : $scope.clientName,
            age : $scope.clientAge,
            birthday : $scope.clientBirthday,
            canreceivetxt : $scope.clientcanreceivetxt,
            phone : $scope.clientPhone,
            address : $scope.clientAddress,
            ssn : $scope.clientSsn,
            dln : $scope.clientDln,
            dls : $scope.clientDls,
            zip : $scope.clientzip,
            email : $scope.clientemail,
            scndcntctprsn : $scope.clientScndcntctprsn,
            casetype : $scope.clientCasetype,
            incidentloc : $scope.clientIncidentloc,
            dol : $scope.clientDol,
            incidentfcts : $scope.clientIncidentfcts,
            posncar : $scope.clientPosncar,
             pdd : $scope.clientPdd,
            ymmov : $scope.clientYmmov,
            advinfo : $scope.clientAdvinfo,
            wtnsnfo : $scope.clientWtnsnfo,
            advtick : false,
            clitick : false,
            cai : $scope.clientCai,
            policy : $scope.clientPolicy,
            adjstrnme : $scope.clientAdjstrnme,
            adjstrphne : $scope.clientAdjstrphne,
            adjstrfx : $scope.clientAdjstrfx,
            insclaimnum : $scope.clientInsclaimnum,
            advpol: $scope.clientAdvpol,
            advins : $scope.clientAdvins,
            advinsn: $scope.clientAdvinsn,
            advinsp : $scope.clientAdvinsp,
            trnsprtdbprmdc : false,
            whtcmpny : $scope.clientWhtcmpny,
            medtrtmnt : false, 
            prvdrs : $scope.clientPrvdrs,
            doi : $scope.clientDoi,
            rltdclaims : $scope.clientRltdclaims,
            wglss : $scope.clientWglss,
            source : $scope.clientSource,
            notes : $scope.clientNotes,


        }).success(function(data, status, headers, config) {
            $scope.clients.push({
            name : $scope.clientName,
            age : $scope.clientAge,
            birthday : $scope.clientBirthday,
            canreceivetxt : $scope.clientcanreceivetxt,
            phone : $scope.clientPhone,
            address : $scope.clientAddress,
            ssn : $scope.clientSsn,
            dln : $scope.clientDln,
            dls : $scope.clientDls,
            zip : $scope.clientzip,
            email : $scope.clientemail,
            scndcntctprsn : $scope.clientScndcntctprsn,
            casetype : $scope.clientCasetype,
            incidentloc : $scope.clientIncidentloc,
            dol : $scope.clientDol,
            incidentfcts : $scope.clientIncidentfcts,
            posncar : $scope.clientPosncar,
             pdd : $scope.clientPdd,
            ymmov : $scope.clientYmmov,
            advinfo : $scope.clientAdvinfo,
            wtnsnfo : $scope.clientWtnsnfo,
            advtick : false,
            clitick : false,
            cai : $scope.clientCai,
            policy : $scope.clientPolicy,
            adjstrnme : $scope.clientAdjstrnme,
            adjstrphne : $scope.clientAdjstrphne,
            adjstrfx : $scope.clientAdjstrfx,
            insclaimnum : $scope.clientInsclaimnum,
            advpol: $scope.clientAdvpol,
            advins : $scope.clientAdvins,
            advinsn: $scope.clientAdvinsn,
            advinsp : $scope.clientAdvinsp,
            trnsprtdbprmdc : false,
            whtcmpny : $scope.clientWhtcmpny,
            medtrtmnt : false, 
            prvdrs : $scope.clientPrvdrs,
            doi : $scope.clientDoi,
            rltdclaims : $scope.clientRltdclaims,
            wglss : $scope.clientWglss,
            source : $scope.clientSource,
            notes : $scope.clientNotes,
            });
            $scope.clientName = '';
            $scope.clientAge = '';
            $scope.clientBirthday = '';
            $scope.clientcanreceivetxt = '';
            $scope.clientPhone = '';
            $scope.clientAddress = '';
            $scope.clientSsn = '';
            $scope.clientDln = '';
            $scope.clientDls = '';
            $scope.clientzip = '';
            $scope.clientemail = '';
            $scope.clientScndcntctprsn = '';
            $scope.clientCasetype = '';
            $scope.clientIncidentloc = '';
            $scope.clientDol = '';
            $scope.clientIncidentfcts = '';
            $scope.clientPosncar = '';
            $scope.clientPdd = '';
            $scope.clientYmmov = '';
            $scope.clientAdvinfo = '';
            $scope.clientWtnsnfo = '';
            $scope.clientCai = '';
            $scope.clientPolicy = '';
            $scope.clientAdjstrnme = '';
            $scope.clientAdjstrphne = '';
            $scope.clientAdjstrfx = '';
            $scope.clientInsclaimnum = '';
            $scope.clientAdvpol = '';
            $scope.clientAdvins = '';
            $scope.clientAdvinsn = '';
            $scope.clientAdvinsp = '';
            $scope.clientWhtcmpny = '';
            $scope.clientPrvdrs = '';
            $scope.clientDoi = '';
            $scope.clientRltdclaims = '';
            $scope.clientWglss = '';
            $scope.clientSource = '';
            $scope.clientNotes = '';
        }).error(function(data, status, headers, config) {
            console.log("Ops: " + data);
        });
    };
    $scope.edit = function(client) {
    $scope.current = client;
};
    $scope.current = {};
}]);
myApp.config(function ($routeProvider) {
        // configure the routing rules here
        $routeProvider.when('/client/:id', {
            templateUrl: "/clientpage.ejs",
            controller: 'viewController',
            controllerAs: "view"
            }
            );
    });
myApp.controller('viewController', function() {
  var self = this;
  self.message = "The app routing is working!";
});
        