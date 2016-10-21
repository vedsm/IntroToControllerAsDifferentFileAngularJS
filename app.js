function MyController($scope){
    $scope.name="Ved";
    var updateName = function(){
        if($scope.name == "Ved")
            $scope.name = "Manasvi"
        else
            $scope.name= "Ved"
    };
    setInterval(function(){
        $scope.$apply(updateName)
    },1000);
    updateName();
}
