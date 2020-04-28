/**
 * Created on September 30, 2019
 * @author Kenny Wu
 */

/*
// Replace image links for Glitch.com
var pictures = document.getElementsByTagName("img");
for (var i = 0; i < pictures.length; i++) {
    var originalLink = pictures[i].src.split("/");
    var strippedLink = originalLink[originalLink.length - 1];
    var newLink = "https://cdn.glitch.com/1cbb71f4-791d-44df-9b6f-052d3a286395%2F" + strippedLink;
    pictures[i].src = newLink;
}
*/

var grid = document.getElementsByClassName("grid");
for (var i = 0; i < grid.length; i++) {
    grid[i].addEventListener("mouseover", function () {
        this.childNodes[3].style.top = "0%";
        this.childNodes[3].style.paddingTop = "1.5rem";
        this.childNodes[5].style.visibility = "hidden";
    });
    grid[i].addEventListener("mouseout", function () {
        this.childNodes[3].style.top = "45%";
        this.childNodes[3].style.paddingTop = "0.5rem";
        this.childNodes[5].style.visibility = "visible";
    });
}

var dropdown = document.getElementById("dropdown");
dropdown.addEventListener("mouseenter", function () {
    dropdown.nextElementSibling.style.display = "block";
});
dropdown.addEventListener("mouseleave", function () {
    this.nextElementSibling.addEventListener("mouseenter", function () {
        dropdown.nextElementSibling.style.display = "block";
    });
    dropdown.nextElementSibling.style.display = "none";
});
dropdown.nextElementSibling.addEventListener("mouseleave", function () {
    dropdown.nextElementSibling.style.display = "none";
});

var form = document.getElementById("subscribe");
form.addEventListener("submit", function () {
    event.preventDefault();
    var subscriber = this.querySelector("input[type=\"text\"]").value;
    alert("Thank you for subscribing, " + subscriber + ".\nYou will get a confirmation email shortly.");
});