var calculator = angular.module('FiberGlassCalculator', [])

calculator.controller('calculatorController', ['$scope', '$http', '$location', function( $scope, $http, $location) {

	$scope.calculatorUnit = 'ft';
	$scope.totalBoatSurfaceArea = 0;

	/*
	* Boat model
	*/
	$scope.boat = {
		deck : {
			length : null,
			width : null
		},
		gunnel : {
			port : {
				length : null,
				width : null
			},
			starboard : {
				length : null,
				width : null
			},
			stern : {
				length : null,
				width : null
			}
		},
		superstructure : {
			port : {
				length : null,
				width : null
			},
			starboard : {
				length : null,
				width : null
			},
			front : {
				height : null,
				width : null
			},
			rear : {
				height : null,
				width : null
			}
		},
		freeboard : {
			topside : {
				length : null,
				width : null
			},
			transom : {
				height : null,
				width : null
			}
		},
		bottom : {
			bottom : {
				length : null,
				width : null
			},
			transom : {
				height : null,
				width : null
			}
		},
		other : {
			other1 : {
				length : null,
				width : null
			},
			other2 : {
				length : null,
				width : null
			},
			other3 : {
				length : null,
				width : null
			}
		}
	};
	

	/*
	* Update boat measurements to selected unit ( sq. ft / sq. m )
	*/
	$scope.calculateApplicationArea = function(calculatorForm) {

		if ( calculatorForm.$valid ) {


			
			var deckArea = ( parseInt($scope.boat.deck.length) * parseInt($scope.boat.deck.width) * 0.85 );
			
			var gunnelArea = ( parseInt($scope.boat.gunnel.port.length) * parseInt($scope.boat.gunnel.port.width) +
								parseInt($scope.boat.gunnel.starboard.length) * parseInt($scope.boat.gunnel.starboard.width) +
								parseInt($scope.boat.gunnel.stern.length) * parseInt($scope.boat.gunnel.stern.width)
						 	);
			
			var superstructureArea = ( parseInt($scope.boat.superstructure.port.length) * parseInt($scope.boat.superstructure.port.width) +
										parseInt($scope.boat.superstructure.starboard.length) * parseInt($scope.boat.superstructure.starboard.width) +
										parseInt($scope.boat.superstructure.front.height) * parseInt($scope.boat.superstructure.front.width) +
										parseInt($scope.boat.superstructure.rear.height) * parseInt($scope.boat.superstructure.rear.width)
									);
			
			var freeboardArea = ( parseInt($scope.boat.freeboard.topside.length) * parseInt($scope.boat.freeboard.topside.width) +
									parseInt($scope.boat.freeboard.transom.height) * parseInt($scope.boat.freeboard.transom.width)
								);
			
			var bottomArea = ( parseInt($scope.boat.bottom.bottom.length) * parseInt($scope.boat.bottom.bottom.width) +
								parseInt($scope.boat.bottom.transom.height) * parseInt($scope.boat.bottom.transom.width)
							);
			
			var otherArea = ( parseInt($scope.boat.other.other1.length) * parseInt($scope.boat.other.other1.width) + 
							parseInt($scope.boat.other.other2.length) * parseInt($scope.boat.other.other2.width) +
							parseInt($scope.boat.other.other3.length) * parseInt($scope.boat.other.other3.width)
						);
			
			$scope.totalBoatSurfaceArea = deckArea + gunnelArea + superstructureArea + freeboardArea + bottomArea + otherArea;

		} else {

			angular.element("[name='" + calculatorForm.$name + "']").find('.ng-invalid:visible:first').focus();
		}

	};

	/*
	* Update boat measurements to selected unit ( sq. ft / sq. m )
	*/
	$scope.updateCalculatorUnit = function(updatedCalculatorUnit) {
		
	};

}]);