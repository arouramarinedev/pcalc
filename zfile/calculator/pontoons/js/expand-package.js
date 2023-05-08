// Expand Packages

function selectPackageA() {
    var image = document.getElementById('btnChangeA');
    if (image.src.match("select-")) {
        image.src = "img/product-selected-button-single.png";
    } else {
        image.src = "img/product-select-button-single.png";
    }
}

function selectPackageB() {
    var image = document.getElementById('btnChangeB');
    if (image.src.match("select-")) {
        image.src = "img/product-selected-button-single.png";
    } else {
        image.src = "img/product-select-button-single.png";
    }
}



function growDivA(div) {
growDiv1 = document.getElementById(div);
if (growDiv1.clientHeight) {
growDiv1.style.height = 0;
$('#packageLeft').animate({width: "47%"}, 0);
var packageRight1 = document.getElementById('packageRight');
packageRight1.style.display = 'block';
var packageLeft2 = document.getElementById('packageLeft');
packageLeft2.style.cursor = 'pointer';
}
else {
var wrapper = document.querySelector('.measuringWrapperA');
growDiv1.style.height = wrapper.clientHeight + "px";
$('#packageLeft').animate({width: "100%"}, 500);
var packageRight1 = document.getElementById('packageRight');
packageRight1.style.display = 'none';
var packageLeft2 = document.getElementById('packageLeft');
packageLeft2.style.cursor = 'default';
}
//setInterval(function(){growDiv1.style.height = 0},3000);

return;
}


function growDivB(div) {
growDiv1 = document.getElementById(div);
if (growDiv1.clientHeight) {
growDiv1.style.height = 0;
$('#packageRight').animate({width: "47%"}, 0);
var packageLeft1 = document.getElementById('packageLeft');
packageLeft1.style.display = 'block';
var packageRight2 = document.getElementById('packageRight');
packageRight2.style.cursor = 'pointer';
}
else {
var wrapper = document.querySelector('.measuringWrapperB');
growDiv1.style.height = wrapper.clientHeight + "px";
$('#packageRight').animate({width: "100%"}, 500);
var packageLeft1 = document.getElementById('packageLeft');
packageLeft1.style.display = 'none';
var packageRight2 = document.getElementById('packageRight');
packageRight2.style.cursor = 'default';
}
//setInterval(function(){growDiv1.style.height = 0},3000);

return;
}




/*

document.getElementById("packageRight").style.width="100%";
document.getElementById("packageLeft").style.display="none !important";


    if(settings === "open")
    {
        $('.calculator').animate({width: "100%"}, 500);
    }
    else
    {
        totalPage.slideUp(700);
        $('.calculator').delay(700).animate({'margin-left':left}, 500);
        $('.calculator').animate({height:calc_height+"px"}, 500);
        $('.calculator').css("max-height", (calc_height+200)+"px");
        $('.bp').delay(1700).slideDown(300);
        $('.calculator').animate({height: "auto"}, 500);
    }*/