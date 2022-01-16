window.onload = function(){
    document.getElementById('allaGmObjectSearchWrap').style.display = "block";
    document.getElementById('allaDcObjectSearchWrap').style.display = "none";
    document.getElementById('allaGjObjectSearchWrap').style.display = "none";
    // document.getElementById('allaGmObjectSearchBox').focus();
    document.getElementById('btnGm').className += " allaGnbTitleCurrent";
};

function allaGmSearchFn() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('allaGmObjectSearchBox');
    filter = input.value.toUpperCase();
    ul = document.getElementById('allaGmObjectList');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
};
function allaDcSearchFn() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('allaDcObjectSearchBox');
    filter = input.value.toUpperCase();
    ul = document.getElementById('allaDcObjectList');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
};
function allaGjSearchFn() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('allaGjObjectSearchBox');
    filter = input.value.toUpperCase();
    ul = document.getElementById('allaGjObjectList');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
};

function allaSearchGmFn(){
    document.getElementById('allaGmObjectSearchWrap').style.display = "block";
    document.getElementById('allaDcObjectSearchWrap').style.display = "none";
    document.getElementById('allaGjObjectSearchWrap').style.display = "none";
    document.getElementById('btnGm').className += " allaGnbTitleCurrent";
    document.getElementById('btnDc').className = "allaGnbTitle";
    document.getElementById('btnGj').className = "allaGnbTitle";
    document.getElementById('allaGmObjectSearchBox').value = "";
    // document.getElementById('allaGmObjectSearchBox').focus();
    allaGmSearchFn();
};
function allaSearchDcFn(){
    document.getElementById('allaGmObjectSearchWrap').style.display = "none";
    document.getElementById('allaDcObjectSearchWrap').style.display = "block";
    document.getElementById('allaGjObjectSearchWrap').style.display = "none";
    document.getElementById('btnGm').className = "allaGnbTitle allaGnbTitleFirst";
    document.getElementById('btnDc').className += " allaGnbTitleCurrent";
    document.getElementById('btnGj').className = "allaGnbTitle";
    document.getElementById('allaDcObjectSearchBox').value = "";
    // document.getElementById('allaDcObjectSearchBox').focus();
    allaDcSearchFn();
};
function allaSearchGjFn(){
    document.getElementById('allaGmObjectSearchWrap').style.display = "none";
    document.getElementById('allaDcObjectSearchWrap').style.display = "none";
    document.getElementById('allaGjObjectSearchWrap').style.display = "block";
    document.getElementById('btnGm').className = "allaGnbTitle allaGnbTitleFirst";
    document.getElementById('btnDc').className = "allaGnbTitle";
    document.getElementById('btnGj').className += " allaGnbTitleCurrent";
    document.getElementById('allaGjObjectSearchBox').value = "";
    // document.getElementById('allaGjObjectSearchBox').focus();
    allaGjSearchFn();
};