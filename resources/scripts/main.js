var listItem = document.querySelectorAll(".projects li"); 
    
console.log(listItem);

listItem.forEach(item => {
    console.log(item);
    item.addEventListener("click", li => {
        var liClass = item.className;
        console.log(liClass);
        var selector = "div."+liClass;
        console.log(selector);
        var x = document.querySelector(selector);
        console.log(x);
        console.log(window.getComputedStyle(x, null).display);
        if(window.getComputedStyle(x, null).display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    })
});

