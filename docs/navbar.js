var isMobileOpen		= false; //True if bar is in mobile view

const mobileNavButton 	= document.getElementById("hamburger");
const navMenu         	= document.getElementById("menu");

mobileNavButton.addEventListener('click', (e) => {
    console.log("before: ");
    console.log(isMobileOpen);
	if(navMenu.style.display === "flex") {
    	navMenu.style.display = "none";
        isMobileOpen = false;
	} else {
    	navMenu.style.display = "flex";
        isMobileOpen = true;
  	}
    console.log("after: ");
    console.log(isMobileOpen);
});

function mobileToDesktop() {
    if(isMobileOpen == true) {
        console.log("mobile navbar is open");
        if(window.innerWidth > 900) {
            isMobileOpen = false;
        }
    }
    if(window.innerWidth > 900) {
        navMenu.style.display = "flex";
    } else {
        if(isMobileOpen == false && navMenu.style.display === "flex") {
            navMenu.style.display = "none";
        }
    }
}

window.onresize = mobileToDesktop;
