'use strict';

var calculator = angular.module("calculator");

var CalcCtrl = calculator.controller("CalcCtrl", ['$scope', "$state", function($scope, $state) {

    $scope.results = null;
    $scope.selectedProducts = [];

    $scope.calculator = {
        measuremeta: {
            round: "ft",
            currentRound: "ft. sq.",
        },
        measureConv: {
            ftToM: 0.3048,
        },
        form: {
            deck: {
                length: null,
                width: null    
            },
            gunnel: {
                port: {
                    length: null,
                    width: null    
                },
                starboard: {
                    length: null,
                    width: null    
                },
                stern: {
                    length: null,
                    width: null    
                }
            },
            superstructure: {
                port: {
                    length: null,
                    width: null     
                },
                starboard: {
                    length: null,
                    width: null     
                },
                front: {
                    height: null,
                    width: null     
                },
                rear: {
                    height: null,
                    width: null     
                }
            },
            freeboard: {
                topside: {
                    length: null,
                    width: null    
                },
                transom: {
                    height: null,
                    width: null
                }
            },
            hullbottom: {
                bottomside: {
                    length: null,
                    width: null    
                },
                transom: {
                    height: null,
                    width: null
                }
            },
            other: {
                other1: {
                    length: null,
                    width: null    
                },
                other2: {
                    length: null,
                    width: null    
                },
                other3: {
                    length: null,
                    width: null    
                }
            }
        }
    };


    $scope.products = {
        bcp: {
            image: "https://www.auroramarine.com/store/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/o/boat-clean-plus_1.jpg",
            name: "Boat Clean Plus",
            link: "https://www.auroramarine.com/store/boat-clean-plus.html",
            title: "Boat Clean Plus - Multi Purpose Boat Cleaner",
            h: {
                name: "bcp",
                id: 12,
                coverage: 300,
                options: {
                    small: {
                        optionId: 29,
                        optionValue: 57
                    }
                },
                quantity: 0,
                raw: 0
            },
            g: {
                name: "bcpG",
                id: 12,
                options: {
                    small: {
                        optionId: 29,
                        optionValue: 58
                    }
                },
                quantity: 1,
                raw: 1
            }
        },
        mpm: {
            image: "https://www.auroramarine.com/store/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/9/59.jpg",
            name: "Marine Power Mitt",
            link: "https://www.auroramarine.com/store/marine-power-mitt.html",
            title: "Straight Line Buffing Machine",
            h: {
                name: "mpm",
                id: 24,
                quantity: 1,
                raw: 0
            }
        },
        bs: {
            image: "https://www.auroramarine.com/store/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/o/boat-scrub_1.jpg",
            name: "Boat Scrub",
            link: "https://www.auroramarine.com/store/boat-scrub.html",
            title: "Boat Scrub - Fiberglass Cleaner and Restorer",
            h: {
                name: "bs",
                id: 14,
                coverage: 200,
                options: {
                    small: {
                        optionId: 9,
                        optionValue: 17
                    }
                },
                quantity: 0,
                raw: 0
            },
            g: {
                name: "bsG",
                id: 14,
                options: {
                    small: {
                        optionId: 9,
                        optionValue: 18
                    }
                },
                quantity: 1,
                raw: 1
            }
        },
        ezb: {
            image: "https://www.auroramarine.com/store/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/z/ez-buff-1_1.jpg",
            name: "Ez Buff",
            link: "https://www.auroramarine.com/store/ez-buff.html",
            title: "",
            h: {
                name: "ezb",
                id: 94,
                coverage: 200,
                options: {
                    small: {
                        optionId: 31,
                        optionValue: 61
                    }
                },
                quantity: 0,
                raw: 0
            },
            g: {
                name: "ezbG",
                id: 94,
                options: {
                    small: {
                        optionId: 31,
                        optionValue: 62
                    }
                },
                quantity: 1,
                raw: 1
            }
        },
        ezbe: {
            name: "Ez Buff Extender",
            image: "https://www.auroramarine.com/store/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/z/ez-buff-extender-1.jpg",
            link: "https://www.auroramarine.com/store/ez-buff-extender.html",
            title:"",
            h: {
                name: "ezbe",
                id: 99,
                coverage: 400,
                quantity: 0,
                raw: 0
            }
        },
        pbs: {
            name: "Premium Boat Shine",
            image: "https://www.auroramarine.com/store/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/r/premium-boat-shine_1.jpg",
            link: "https://www.auroramarine.com/store/premium-boat-shine.html",
            title:"",
            h: {
                name: "pbs",
                id: 41,
                coverage: 200,
                options: {
                    small: {
                        optionId: 13,
                        optionValue: 25
                    }
                },
                quantity: 0,
                raw: 0
            },
            g: {
                name: "pbsG",
                id: 41,
                options: {
                    small: {
                        optionId: 13,
                        optionValue: 26
                    }
                },
                quantity: 1,
                raw: 1
            }
        }
    };


    $scope.results = {
        full: $state.params.full,
    };

    if($state.current.name == "products") {
        var totalResult = 0;

        if($state.params.half != 0) {
            if($scope.calculator.measuremeta.currentLow == "mm") {
                totalResult = parseFloat($state.params.full) + parseFloat($state.params.half * 0.000001);
                $scope.results['total'] = parseFloat(totalResult);
            } else {
                totalResult = parseFloat($state.params.full) + parseFloat($state.params.half * 0.0069);
                $scope.results['total'] = parseFloat(totalResult);
            }
        }
        else
        {
            totalResult = parseFloat($state.params.full);
            $scope.results['total'] = parseFloat($state.params.full);
        }

        calculateProductRawQuantity(parseFloat(totalResult));
        calculateProductTotalQuantity(parseFloat(totalResult));
    }


    function calculateProductRawQuantity(result) {
        $scope.products.bcp.h.raw = (result / $scope.products.bcp.h.coverage).toFixed(1);
        $scope.products.bcp.g.raw = ($scope.products.bcp.h.raw >= 5) ? ($scope.products.bcp.h.raw / 5).toFixed(1) : 1;

        $scope.products.bs.h.raw = (result / $scope.products.bs.h.coverage).toFixed(1);
        $scope.products.bs.g.raw = ($scope.products.bs.h.raw >= 5) ? ($scope.products.bs.h.raw / 5).toFixed(1) : 1;

        $scope.products.ezb.h.raw = (result / $scope.products.ezb.h.coverage).toFixed(1);
        $scope.products.ezb.g.raw = ($scope.products.ezb.h.raw >= 5) ? ($scope.products.ezb.h.raw / 5).toFixed(1) : 1;

        $scope.products.ezbe.h.raw = (result / $scope.products.ezbe.h.coverage).toFixed(1);

        $scope.products.pbs.h.raw = (result / $scope.products.pbs.h.coverage).toFixed(1);
        $scope.products.pbs.g.raw = ($scope.products.pbs.h.raw >= 5) ? ($scope.products.pbs.h.raw / 5).toFixed(1) : 1;
    }

     function calculateProductTotalQuantity(result) {
         $scope.products.bcp.h.quantity = Math.ceil($scope.products.bcp.h.raw);
         $scope.products.bcp.g.quantity = Math.ceil($scope.products.bcp.g.raw);

         $scope.products.bs.h.quantity =  Math.ceil($scope.products.bs.h.raw);
         $scope.products.bs.g.quantity = Math.ceil($scope.products.bs.g.raw);

         $scope.products.ezb.h.quantity = Math.ceil($scope.products.ezb.h.raw);
         $scope.products.ezb.g.quantity = Math.ceil($scope.products.ezb.g.raw);

         $scope.products.ezbe.h.quantity = Math.ceil($scope.products.ezbe.h.raw);

         $scope.products.pbs.h.quantity = Math.ceil($scope.products.pbs.h.raw);
         $scope.products.pbs.g.quantity = Math.ceil($scope.products.pbs.g.raw);
    }


    var updateFieldsValuesToMetric = function() {
        angular.forEach($scope.calculator.form, function(value, key) {
            var field = $scope.calculator.form[key];

            if(key == "deck" || key == "gunnel" || key == "structure") {
                for(var prop in field) {
                    var prop = field[prop];

                    if(prop.full == null && prop.half == null) continue;

                    prop.full =  prop.full * $scope.calculator.measureConv.ftToM;
                    prop.half =  prop.half * $scope.calculator.measureConv.inToCm;
                }
            } else if(key == "board") {
                if(field.width != null)
                    field.width = field.width * $scope.calculator.measureConv.ftToM;

                if(field.height != null)
                    field.height = field.height * $scope.calculator.measureConv.ftToM;

                if(field.length != null)
                    field.length = field.length * $scope.calculator.measureConv.ftToM;
            } else {
                if(field.width != null)
                    field.width = field.width * $scope.calculator.measureConv.ftToM;

                if(field.length != null)
                    field.length = field.length * $scope.calculator.measureConv.ftToM;
            }
        });
    };

    var updateFieldsValuesToImperial = function() {
        angular.forEach($scope.calculator.form, function(value, key) {
            var field = $scope.calculator.form[key];

            if(key == "deck" || key == "gunnel" || key == "structure") {
                for(var prop in field) {
                    var prop = field[prop];

                    if(prop.full == null && prop.half == null) continue;

                    prop.full =  (prop.full / $scope.calculator.measureConv.ftToM).toFixed(2);
                    prop.half =  (prop.half / $scope.calculator.measureConv.inToCm).toFixed(2);
                }
            } else if(key == "board") {
                if(field.width != null)
                    field.width = (field.width / $scope.calculator.measureConv.ftToM).toFixed(2);

                if(field.height != null)
                    field.height = (field.height / $scope.calculator.measureConv.ftToM).toFixed(2);

                if(field.length != null)
                    field.length = (field.length / $scope.calculator.measureConv.ftToM).toFixed(2);
            } else {
                if(field.width != null)
                    field.width = (field.width / $scope.calculator.measureConv.ftToM).toFixed(2);

                if(field.length != null)
                    field.length = (field.length / $scope.calculator.measureConv.ftToM).toFixed(2);
            }
        });
    };

    function calculateArea(type){

        var fullArea = 0;
        
        switch (type) {
            case 'deck' : 
                fullArea = ( parseInt($scope.calculator.form.deck.length) * parseInt($scope.calculator.form.deck.width) ) * 0.85;
                break;
            
            case 'gunnel' : 
                fullArea = ( parseInt($scope.calculator.form.gunnel.port.length) * parseInt($scope.calculator.form.gunnel.port.width) ) 
                            + ( parseInt($scope.calculator.form.gunnel.starboard.length) * parseInt($scope.calculator.form.gunnel.starboard.width) )
                            + ( parseInt($scope.calculator.form.gunnel.stern.length) * parseInt($scope.calculator.form.gunnel.stern.width) );
                break;

            case 'superstructure' : 
                fullArea = ($scope.calculator.form.superstructure.port.length * $scope.calculator.form.superstructure.port.width) +
                ($scope.calculator.form.superstructure.starboard.length * $scope.calculator.form.superstructure.starboard.width) +
                ($scope.calculator.form.superstructure.front.length * $scope.calculator.form.superstructure.front.width) +
                ($scope.calculator.form.superstructure.rear.length * $scope.calculator.form.superstructure.rear.width);
                break;

            case 'freeboard' : 
                fullArea = ($scope.calculator.form.freeboard.topside.length * $scope.calculator.form.freeboard.topside.width) + ($scope.calculator.form.freeboard.transom.length * $scope.calculator.form.freeboard.transom.width) ;
                break;

            case 'hullbottom' : 
                var fullArea = ($scope.calculator.form.hullbottom.bottomside.length * $scope.calculator.form.hullbottom.bottomside.width) + ($scope.calculator.form.hullbottom.transom.length * $scope.calculator.form.hullbottom.transom.width) ;
                break;

            case 'other' : 
                var fullArea = ($scope.calculator.form.other.other1.length * $scope.calculator.form.other.other1.width) +
                                ($scope.calculator.form.other.other2.length * $scope.calculator.form.other.other2.width) +
                                ($scope.calculator.form.other.other3.length * $scope.calculator.form.other.other3.width);
                break;

            default:
                break;
        }
            
        console.log(type, fullArea);

        return fullArea;

    }

    var calculateForm = function(measureType) {

        var totalFull = 0;

        var sectionArea = 0;

        angular.forEach($scope.calculator.form, function(key, value){
            console.log(key, value);
             
            sectionArea = calculateArea(value);

            if ( sectionArea < 1 ) {
                // add error class
                key.
            } else {
                totalFull += sectionArea;
            }

        });

        $scope.results = {
            total: {
                full: totalFull,
            }
        };
    };

    $scope.updateFields = function(measureType) {
        if(measureType == "metric") {
            $scope.calculator.measuremeta.round = "m";
            $scope.calculator.measuremeta.currentRound = "m sq.";
            updateFieldsValuesToMetric();
        } else {
            $scope.calculator.measuremeta.round = "ft";
            $scope.calculator.measuremeta.currentRound = "ft sq.";
            updateFieldsValuesToImperial();
        }
    };

    $scope.addProduct = function(product, event) {
        event.preventDefault();

        var button = $(event.target);

        if(button.hasClass('product-selected')) {
            button.removeClass("product-selected");
            angular.forEach($scope.selectedProducts, function(value, key) {
                if(value.name == product.name) {
                    $scope.selectedProducts.splice(key, 1);
                }
            });
        }
        else
        {
            button.addClass("product-selected");
            $scope.selectedProducts.push(product);
        }

        var siblingButton = button.siblings().eq(0);

        if(siblingButton != "undefined" && siblingButton.hasClass("product-selected")) {
            siblingButton.removeClass("product-selected");

            angular.forEach($scope.selectedProducts, function(value, key) {
                if(value.name == product.name) {
                    $scope.selectedProducts.splice(key, 1);
                }
            });
        }
    };

    $scope.calculateProducts = function() {
        calculateForm();

        $state.go('products', {
            full: $scope.results.total.full
        });
    };


    $scope.calculateTotalCost = function(event) {
        event.preventDefault();

        var button = $(event.target);

        if($scope.selectedProducts.length <= 0) {
            return false;
        } else {
            button.hide();
            button.after('<img src="img/preloader.gif" class="preloader" style="float: right !important;" width="48" height="48" />');

            $.ajax({
                method: "POST",
                url: "processFillCart.php",
                data: {
                    products:  JSON.stringify($scope.selectedProducts),
                    fiberglass_estimate: true
                }
            })
                .then(function(data) {
                    $('.preloader').hide();
                    button.show();
                    $('.preloader').remove();

                    console.log(data);

                    var jsonData = JSON.parse(data);

                    if(jsonData.status == "success") {
                        var windowWidth = $(window).width()*0.75,
                            windowHeight = $(window).height()*0.75;

                        window.open("https://www.auroramarine.com/store/checkout/cart/", null, "width="+windowWidth+", height="+windowHeight);
                    } else {
                        console.log(jsonData.message);
                    }
                });
        }
    };
}]);