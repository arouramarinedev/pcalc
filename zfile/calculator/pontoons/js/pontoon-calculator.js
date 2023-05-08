'use strict';

var PontoonCalculator = function(calculatorResults) {
    this.samePontoons2 = $('input[name=samePontoons2]');
    this.samePontoons3 = $('input[name=samePontoons3]');

    this.pontoonRadius1 = $('input[name=pontoonRadius1]');
    this.pontoonRadius2 = $('input[name=pontoonRadius2]');
    this.pontoonRadius3 = $('input[name=pontoonRadius3]');

    this.pontoonLength1 = $('input[name=pontoonLength1]');
    this.pontoonLength2 = $('input[name=pontoonLength2]');
    this.pontoonLength3 = $('input[name=pontoonLength3]');

    this.cartUrl = "https://www.auroramarine.com/store/checkout/cart/";
	//this.window.open("https://www.auroramarine.com/store/checkout/cart/", "test", "scrollbars=1,width=100,height=100");
	
	
	
	
    this.errors = $('.displayErrors');

    this.productsSelected = [];

    this.products = {
        alumetron: {
            name: "alumetron",
            id: 218,
            coverage: 250,
            quantity: 0
        },
        alumetronH: {
            name: "alumetronH",
            id: 218,
            coverage: 250,
            quantity: 0
        },
        alumetronG: {
            name: "alumetronG",
            id: 219,
            quantity: 0
        },
        alumabuff: {
            name: "alumabuff",
            id: 221,
            coverage: 150,
            quantity: 0
        },
        alumabuffH: {
            name: "alumabuffH",
            id: 221,
            coverage: 150,
            quantity: 0
        },
        alumabuffG: {
            name: "alumabuffG",
            id: 222,
            quantity: 0
        },
        vs: {
            name: "vs",
            id: 254,
            coverage: 400,
            quantity: 0
        },
        vsH: {
            name: "vsH",
            id: 254,
            coverage: 400,
            quantity: 0
        },
        vsG: {
            name: "vsG",
            id: 255,
            quantity: 0
        },
        algex: {
            name: "algex",
            id: 164,
            coverage: 100,
            quantity: 0
        },
        algexG: {
            name: "algexG",
            id: 165,
            quantity: 0
        },
		
		
		// ALGEX #2
        algex2: {
            name: "algex2",
            id: 164,
            coverage: 100,
            quantity: 0
        },
        algex2G: {
            name: "algex2G",
            id: 165,
            quantity: 0
        },
		// END ALGEX #2


//PACKAGES
		
		package_A: {
            name: "package_A",
            id: 121,
            quantity: 1
        },
		package_B: {
            name: "package_B",
            id: 122,
            quantity: 1
        },
/*		package_A: {
            name: "package_A",
            id: 121,
            quantity: 1
        },*/
		
		
//PACKAGES


        alumabrite: {
            name: "alumabrite",
            id: 269,
            coverage: 300,
            quantity: 0
        },
        alumabriteH: {
            name: "alumabriteH",
            id: 269,
            coverage: 300,
            quantity: 0
        },
        alumabriteG: {
            name: "alumabriteG",
            id: 168,
            quantity: 0
        },
        bcp: {
            name: "bcp",
            id: 173,
            coverage: 300,
            quantity: 0
        },
        bcpG: {
            name: "bcpG",
            id: 174,
            quantity: 0
        },
        linear_buffer_a: {
            name: "linear_buffer_a",
            id: 252,
            quantity: 1
        },
		linear_buffer_p: {
            name: "linear_buffer_p",
            id: 251,
            quantity: 1
        },
        apk: {
            name: "apk",
            id: 74,
            quantity: 1
        },
		
		velcro_strap: {
            name: "velcro_strap",
            id: 131,
            quantity: 1
        },
		
        mpm: {
            name: "mpm",
            id: 24,
            quantity: 1
        }
		
    };
};

/**
 * Starting point of pontoon calculator
 */
PontoonCalculator.prototype.init = function() {
    var that = this;

    /**
     * Called when pontoon calculator form is submitted
     *
     * It is getting the total sq. ft. from entered values
     * It is calculating product coverage based on total sq. ft.
     * It is Displaying raw to coverage data
     * Binding and maintain state of html
     */
    $('.pontoon-calculator').submit(function(event) {
        event.preventDefault();

        var isFormValid = that.validateInput();

        if(isFormValid)
        {
            var total = that.calculateTotal();
            that.calculateProductCoverage(total);
            that.displayRawCoverage(total);
            that.bindValuesToPageAndManageState(total, "open");
        }
        else
        {
            return false;
        }
    });

    /**
     * Trigger when the close button on calculator is clicked
     */
    $('.close-calculator').click(function(e) {
        that.bindValuesToPageAndManageState(0, "close");
    });

    /**
     * Copy values from pontoon1 fields to pontoon2 fields
     */
    $('input[name=samePontoons2]').click(function(e) {
        if(this.checked == true) {
            that.pontoonRadius2.val(that.pontoonRadius1.val());
            that.pontoonLength2.val(that.pontoonLength1.val());
        } else {
            that.pontoonRadius2.val("");
            that.pontoonLength2.val("");
        }
    });

    /**
     * Copy values from pontoon1 fields to pontoon3 fields
     */
    $('input[name=samePontoons3]').click(function(e) {
        if(this.checked == true) {
            that.pontoonRadius3.val(that.pontoonRadius1.val());
            that.pontoonLength3.val(that.pontoonLength1.val());
        } else {
            that.pontoonRadius3.val("");
            that.pontoonLength3.val("");
        }
    });

    /**
     * Trigger when user clicks to add the product
     */
    $('.buy-now').click(function(e) {
         e.preventDefault();
         var productName = $(this).attr('data-pontoon-product');

         if($(this).hasClass('product-selected')) {
             $(this).removeClass("product-selected");

             for (var i=that.productsSelected.length-1; i>=0; i--) {
                 if (that.productsSelected[i].name == productName) {
                     that.productsSelected.splice(i, 1);
                     break;
                 }
             }
         } else {
             $(this).addClass("product-selected");
             that.productsSelected.push(that.products[productName]);

             if($(this).siblings('a').size() > 0) {
                 $(this).siblings().removeClass("product-selected");

                 var siblingProductName = $(this).siblings().eq(0).attr('data-pontoon-product');

                 for (var i = that.productsSelected.length-1; i>=0; i--) {
                     if (that.productsSelected[i].name == siblingProductName) {
                         that.productsSelected.splice(i, 1);
                         break;
                     }
                 }
             }
         }
    });
	
	
	
// multiple data
/*    var arrayData = document.getElementById('buypackageA').getAttribute('data-pontoon-product');
    var arr = arrayData.split(' ');
            
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }*/


 	$('.calculate-cost').click(function(e) {
        e.preventDefault();
        if(that.productsSelected.length <= 0) {
            return false;
        } else {
            $(this).hide();
            $(this).after('<img src="img/preloader.gif" class="preloader" style="float: right !important;" width="48" height="48" />');

            $.post("processFillCart.php", {'products': JSON.stringify(that.productsSelected), pontoon_estimate: true})
                .done(function(data) {

                    $('.preloader').hide();
                    $('.calculate-cost').show();
                    $('.preloader').remove();

                    var jsonData = JSON.parse(data);

                    if(jsonData.status == "success") {
                        var windowWidth = $(window).width()*0.75,
                            windowHeight = $(window).height()*0.75;

                        //window.open
                        window.location.replace("https://www.auroramarine.com/store/checkout/cart/");
                    } else {
                        alert("The calculation could not be completed.");
                    }
                })
                .fail(function(error) {
                    alert("The calculation could not be completed.");
                });
        }
    });



    $('.oQModal').click(function(e) {
        var modal = $($(this).attr("data-open-modal")),
            top = e.pageY,
            left = e.pageX;

        modal.addClass("modal-opened");

        modal.css({
            top: top - modal.outerHeight() - 20,
            left: left - 32
        });

        modal.fadeIn();

        $('body').on('click', $(this).attr("data-open-modal")+' .close-button', function () {
            modal.fadeOut();
        });
    });


    $('.close-calculator').click(function() {
        location.href = location.href;
    });


    $('body').on("click","#submitFriend", function(e) {
        var user_name = $('input[name=user_name]').val(),
            user_email = $('input[name=user_email]').val(),
            friend_name = $('input[name=friends_name]').val(),
            friend_email = $('input[name=friends_email]').val(),
            comment = $('textarea[name=comment]').val(),
            reX = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
            error = "";

        $('.tell-a-friend-error').text("");

        if(user_name == "" || user_email == "" || friend_name == "" || friend_email == "" || comment == "") {
            error = "All Fields Are Required";
        } else if(!reX.test(user_email)) {
            error = "Your email is not valid";
        } else if(!reX.test(friend_email)) {
            error = "Your friends email is not valid";
        }

        if(error == "") {
            $.ajax({
                type: "POST",
                url: "sendEmail.php",
                data: {
                    user_name: user_name,
                    user_email: user_email,
                    friend_name: friend_name,
                    friend_email: friend_email,
                    comment: comment
                },
                success: function(data) {
                    console.log(data);
                    var parsedData = JSON.parse(data);

                    if(parsedData.status == "error") {
                        $('.tell-a-friend-error').text(parsedData.message);
                    } else {
                        $('.friend-modal-body').css('height', 200);
                        $(".friend-modal-body").html('<p class="tell-friend-success">'+parsedData.message+'</p>');
                    }
                },
                fail: function(err) {
                    console.log(err);
                }
            });
        } else {
            $('.tell-a-friend-error').text(error);
        }
    });
};

PontoonCalculator.prototype.validateInput = function() {
    this.errors.html("");
    this.errors.hide();

    var numberReg =  /^[0-9.]+$/;

    if(this.pontoonRadius1.val() == "")
        this.errors.append('<span class="error">1. Please enter your pontoon inches</span>');
    else if(!numberReg.test(this.pontoonRadius1.val()))
        this.errors.append('<span class="error">1. Numbers accepted only</span>');
    else if(this.pontoonRadius1.val() <= 0)
        this.errors.append('<span class="error">1. Number must be greater than 0</span>');


    if(this.pontoonLength1.val() == "")
        this.errors.append('<span class="error">2. This field can not be empty</span>');
    else if(!numberReg.test(this.pontoonLength1.val()))
        this.errors.append('<span class="error">2. Numbers accepted only</span>');
    else if(this.pontoonLength1.val() <= 0)
        this.errors.append('<span class="error">2. Number must be greater than 0</span>');

    if($('.error').length) {
        this.errors.css("display", "block");
        return false;
    }
    else
        return true;
};

PontoonCalculator.prototype.calculateTotal = function() {
    var inchRadius1 = this.pontoonRadius1.val(),
        inchRadius2 = this.pontoonRadius2.val(),
        inchRadius3 = this.pontoonRadius3.val(),
        feetLenght1 = this.pontoonLength1.val(),
        feetLenght2 = this.pontoonLength2.val(),
        feetLenght3 = this.pontoonLength3.val();

    var pontoon1 = this.calculatePontoonComponent(inchRadius1, feetLenght1),
        pontoon2 = this.calculatePontoonComponent(inchRadius2, feetLenght2),
        pontoon3 = this.calculatePontoonComponent(inchRadius3, feetLenght3);

    return pontoon1 + pontoon2 + pontoon3;
};

PontoonCalculator.prototype.calculatePontoonComponent = function(radius, length) {
    if(radius == "" || length == "")
        return 0;

    return ((Math.PI * (radius * radius) / 144) + (2*Math.PI*length));
};

PontoonCalculator.prototype.bindValuesToPageAndManageState = function(total, settings) {
    var totalPage = $(".calculator-results"),
        totalResult = $(".calculator-results--total span"),
        calc_height = 750;

    var left = (( $('body').width() - $('.calculator').width() ) / 2) + "px";

    if(settings === "open")
    {
        $('.calculator').animate({width: "100%"}, 500);
        $('.bp').fadeOut(300);
        $('.calculator').animate({marginLeft:0}, 500);

        totalResult.text(Math.round(100*total)/100);
        totalPage.delay(850).slideDown(700);
    }
    else
    {
        totalPage.slideUp(700);
        $('.calculator').delay(700).animate({'margin-left':left}, 500);
        $('.calculator').animate({height:calc_height+"px"}, 500);
        $('.calculator').css("max-height", (calc_height+200)+"px");
        $('.bp').delay(1700).slideDown(300);
        $('.calculator').animate({height: "auto"}, 500);
    }
};

PontoonCalculator.prototype.calculateProductCoverage = function(total) {
    var alumetron80 = $('.alumetron-total .percent-80'),
        alumetron100 = $('.alumetron-total .percent-100'),
        alumetronGal = $('.alumetron-total .gallon'),

        alumabuff80 = $('.alumabuff-total .percent-80'),
        alumabuff100 = $('.alumabuff-total .percent-100'),
        alumabuffGal = $('.alumabuff-total .gallon'),

/*      vs = $('.vs-total .below-water'),
        vsGal = $('.vs-total .gallon'),*/
		
		vs80 = $('.vs-total .percent-80'),
        vs100 = $('.vs-total .percent-100'),
        vsGal = $('.vs-total .gallon'),

        algex = $('.algex-total .below-water'),
		algexGal = $('.algex-total .gallon'),
		
		algex2 = $('.algex2-total .below-water'),
		algex2Gal = $('.algex2-total .gallon'),
		
		/*packageA = $('.packageA-total .percent-100'),
		packageB = $('.packageB-total .percent-100'),*/

        alumabrite80 = $('.alumabrite-total .percent-80'),
        alumabrite100 = $('.alumabrite-total .percent-100'),
        alumabriteGal = $('.alumabrite-total .gallon'),

        boatcleanplus100 = $('.bcp-total .percent-100'),
        boatcleanplusGal = $('.bcp-total .gallon');
		
		
		

    var galEqBottles = 8;

    /** ALGEX **/
    var algexProductCov = Math.ceil(total / this.products.algex.coverage / 2);
    algex.html(algexProductCov);
    this.products.algex.quantity = algexProductCov;

    var algexGalCov = (algexProductCov <= 8) ? 1 : Math.ceil(algexProductCov / galEqBottles);
    algexGal.html(algexGalCov);
    this.products.algexG.quantity = algexGalCov;
	
	
	/** ALGEX2 **/	
    var algex2ProductCov = Math.ceil(total / this.products.algex2.coverage / 2 *2);
    algex2.html(algex2ProductCov);
    this.products.algex2.quantity = algex2ProductCov;

    var algex2GalCov = (algex2ProductCov <= 8) ? 1 : Math.ceil(algex2ProductCov / galEqBottles);
    algex2Gal.html(algex2GalCov);
    this.products.algex2G.quantity = algex2GalCov;
	
	
	/** PACKAGES **/
 	/*var packageAProductCov = Math.ceil(total / this.products.packageA.coverage / 2 *2);
    packageA.html(packageAProductCov);
    this.products.packageA.quantity = packageAProductCov;

    var packageBProductCov = Math.ceil(total / this.products.packageB.coverage / 2 *2);
    packageB.html(packageBProductCov);
    this.products.packageB.quantity = packageBProductCov; */


    /** ALUMABRITE **/
    var alumabrite80ProductCov = Math.ceil(total / this.products.alumabrite.coverage*0.8);
    alumabrite80.html(alumabrite80ProductCov);
    this.products.alumabrite.quantity = alumabrite80ProductCov;

    var alumabrite100ProductCov = Math.ceil(total / this.products.alumabrite.coverage);
    alumabrite100.html(alumabrite100ProductCov);
    this.products.alumabriteH.quantity = alumabrite100ProductCov;

    var alumabriteGalCov = (alumabrite100ProductCov <= 8) ? 1 : Math.ceil(alumabrite100ProductCov / galEqBottles);
    alumabriteGal.html(alumabriteGalCov);
    this.products.alumabriteG.quantity = alumabriteGalCov;

    /** ALUMABUFF **/
    var alumabuff80ProductCov = Math.ceil(total / this.products.alumabuff.coverage*0.8);
	//Math.floor ? (check later)
    alumabuff80.html(alumabuff80ProductCov);
    this.products.alumabuff.quantity = alumabuff80ProductCov;

    var alumabuff100ProductCov = Math.ceil(total / this.products.alumabuff.coverage);
    alumabuff100.html(alumabuff100ProductCov);
    this.products.alumabuffH.quantity = alumabuff100ProductCov;

    var alumabuffGalCov = (alumabuff100ProductCov <= 8) ? 1 : Math.ceil(alumabuff100ProductCov / galEqBottles);
    alumabuffGal.html(alumabuffGalCov);
    this.products.alumabuffG.quantity = alumabuffGalCov;

    /** ALUMETRON **/
    var alumetron80ProductCov = Math.ceil((total*4) / this.products.alumetron.coverage*0.8);
    alumetron80.html(alumetron80ProductCov);
    this.products.alumetron.quantity = alumetron80ProductCov;

    var alumetron100ProductCov = Math.ceil((total*4) / this.products.alumetron.coverage);
    alumetron100.html(alumetron100ProductCov);
    this.products.alumetronH.quantity = alumetron100ProductCov;

    var alumetronGalCov = (alumetron100ProductCov <= 8) ? 1 : Math.ceil(alumetron100ProductCov / galEqBottles);
    alumetronGal.html(alumetronGalCov);
    this.products.alumetronG.quantity = alumetronGalCov;

    /** VS721 **/
    /*var vsProductCov = Math.ceil((total*2) / this.products.vs.coverage);
    vs.html(Math.ceil((total*2) / this.products.vs.coverage));
    this.products.vs.quantity = vsProductCov;

    var vsGalCov = (vsProductCov <= 8) ? 1 : Math.ceil(vsProductCov / galEqBottles);
    vsGal.html(vsGalCov);
    this.products.vsG.quantity = vsGalCov;*/

	
	var vs80ProductCov = Math.ceil((total*2) / this.products.vs.coverage*0.5);
    vs80.html(vs80ProductCov);
    this.products.vs.quantity = vs80ProductCov;

    var vs100ProductCov = Math.ceil((total*2) / this.products.vs.coverage);
    vs100.html(vs100ProductCov);
    this.products.vsH.quantity = vs100ProductCov;

    var vsGalCov = (vs100ProductCov <= 8) ? 1 : Math.ceil(vs100ProductCov / galEqBottles);
    vsGal.html(vsGalCov);
    this.products.vsG.quantity = vsGalCov;


    /** BOAT CLEAN PLUS **/
    var bcpProductCov = Math.ceil(total / this.products.bcp.coverage);
    boatcleanplus100.html(bcpProductCov);
    this.products.bcp.quantity = bcpProductCov;

    var bcpGalCov = (bcpProductCov <= 8) ? 1 : Math.ceil(bcpProductCov / galEqBottles);
    boatcleanplusGal.html(bcpGalCov);
    this.products.bcpG.quantity = bcpGalCov;
};

PontoonCalculator.prototype.displayRawCoverage = function(total) {
    var alumetron80 = $('.alumetron-raw .percent-80'),
        alumetron100 = $('.alumetron-raw .percent-100'),
        alumabuff80 = $('.alumabuff-raw .percent-80'),
        alumabuff100 = $('.alumabuff-raw .percent-100'),
        /*vs = $('.vs-raw .below-water'),*/
		vs80 = $('.vs-raw .percent-80'),
		vs100 = $('.vs-raw .percent-100'),
        algex = $('.algex-raw .below-water'),
		algex2 = $('.algex2-raw .below-water'),
 		/*packageA = $('.packageA .percent-100'),
		pacakgeB = $('.packageB .percent-100'), */
        alumabrite80 = $('.alumabrite-raw .percent-80'),
        alumabrite100 = $('.alumabrite-raw .percent-100'),
        boatcleanplus100 = $('.bcp-raw .percent-100');

    algex.html((total / this.products.algex.coverage/2).toFixed(1));
	algex2.html((total / this.products.algex2.coverage/2 * 2).toFixed(1));
	
	
 	/*packageA.html((total / this.products.packageA.coverage/2).toFixed(1));
	packageB.html((total / this.products.packageB.coverage/2 * 2).toFixed(1)); */
	
	
    alumabrite80.html((total / this.products.alumabrite.coverage * 0.8).toFixed(1));
    alumabrite100.html((total / this.products.alumabrite.coverage).toFixed(1));

    alumabuff80.html((total / this.products.alumabuff.coverage * 0.8).toFixed(1));
    alumabuff100.html((total / this.products.alumabuff.coverage).toFixed(1));

    alumetron80.html((total * 4 / this.products.alumetron.coverage*0.8).toFixed(1));
    alumetron100.html((total * 4 / this.products.alumetron.coverage).toFixed(1));

    vs80.html((total * 2 / this.products.vs.coverage*0.5).toFixed(1));
    vs100.html((total * 2 / this.products.vs.coverage).toFixed(1));

    <!--vs.html((total * 2 / this.products.vs.coverage).toFixed(1));-->

    boatcleanplus100.html((total / this.products.bcp.coverage).toFixed(1));
};


var pontoonCalculator = new PontoonCalculator();
pontoonCalculator.init();

/*$(window).scroll(function() {
    if($(this).width() > 768) {
        $('.mobile-preview').remove();
    } else {
        $('.desktop-preview').remove();
    }
});*/
