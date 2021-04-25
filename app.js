function toggleModuleList(id){
    let toggleElement = document.getElementById("moduleList");
    if (toggleElement.classList.contains("dontShow")){ 
        toggleElement.classList.remove("dontShow");
    } else{
        toggleElement.classList.add("dontShow");
    }
}

function toggleNav(){
    let nav = document.getElementById("navLinks");
    let topBar = document.getElementById("topBar")
    let midBar = document.getElementById("midBar")
    let bottomBar = document.getElementById("bottomBar")
    // let navButton = document.getElementById("navButton");
    if (nav.style.display != "block"){
        nav.style.display = "block";
        bottomBar.style.display = "none";
        topBar.classList.add("topBarTransform");
        midBar.classList.add("midBarTransform");
    } 
    else{
        nav.style.display = "none";
        bottomBar.style.display = "block";
        topBar.classList.remove("topBarTransform");
        midBar.classList.remove("midBarTransform");
    }
   
}

document.addEventListener ("resize", e => {
    let nav = document.getElementById("navLinks");
    let width = screen.width;
    if (width > 600){
        nav.style.display = "block";
    }
})