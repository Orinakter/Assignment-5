document.getElementById("buttonBlog").addEventListener("click", function(){
    window.location.href = "./blog.html"
});


const button1 = document.getElementById("button1").addEventListener("click", function(){
    changePage("donation");
    document.getElementById("button2").classList.remove("bg-navbutton")
    document.getElementById("button1").classList.add("bg-navbutton")
});

const button2 = document.getElementById("button2").addEventListener("click", function(){
    changePage("history");

    document.getElementById("button1").classList.remove("bg-navbutton")
    document.getElementById("button2").classList.add("bg-navbutton");
});


