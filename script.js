document.getElementById("section1").addEventListener("click", function() {
    var div = document.getElementById("div1"); 
    var nodelist = div.getElementsByTagName("P").length;
    alert("There are " + nodelist + " paragraph in div1");
});

document.getElementById("section2").addEventListener("click", function() {
    var div = document.getElementById("div2"); 
    var nodelist = div.getElementsByTagName("P").length;
    alert("There are " + nodelist + " paragraph in div2");
});

document.getElementById("section3").addEventListener("click", function() {
    var div = document.getElementById("div3"); 
    var nodelist = div.getElementsByTagName("P").length;
    alert("There are " + nodelist + " paragraph in div3");
});

document.getElementById("section4").addEventListener("click", function() {
    var div = document.getElementById("div4"); 
    var nodelist = document.getElementsByTagName("P").length;
    alert("There are " + nodelist + " paragraph in div4");
});