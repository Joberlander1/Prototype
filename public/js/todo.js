var myApp = angular.module('app', ['ngRoute']);
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider)  {
        // configure the routing rules here
        $locationProvider.html5Mode({enabled : true, requireBase : false});
        $routeProvider.when('/client/:id', {
            controller: 'viewController'
        })}]);
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
            photo : $scope.clientPhoto


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
            photo : $scope.clientPhotos
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
    $scope.clientId = document.location.href.split('client/')[1];
    $scope.clientID = document.location.href.split('clientci/')[1];
    $scope.clientiD = document.location.href.split('clienti/')[1];
    $scope.clientI_d = document.location.href.split('clientm/')[1];
    $scope.clienti_D = document.location.href.split('clientf/')[1];
    $scope.clientI_D = document.location.href.split('docgen/')[1];

}]);
myApp.controller('viewController',['$scope','$http', '$location' , '$routeParams',function($scope, $http, $location, $routeParams){
     $http.get('/client/' + $routeParams.id).success(function(data) {
        $scope.clients = data;
        $scope.client=$scope.clients[$routeParams.id]
        })}]);

        