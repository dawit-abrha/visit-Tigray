
/*-------------this is js for the navigation bar to be functional------------*/
    var navlinks = document.getElementById("navLinks");
    function showMenu(){
        navlinks.style.right ="0";
    }
    function hideMenu(){
        navlinks.style.right ="-200px";
    }
    

    const goUp = document.getElementById("scrollUpIcon");

window.addEventListener('scroll', iconVisibility);

function iconVisibility() {
      if (window.scrollY > 400) {
        goUp.style.display = "block";
    } else {
        goUp.style.display = "none";
    }
  }

goUp.addEventListener('click', () => {
    window.scrollTo(0, 0);
});
/*-------------this is js for scroll to top------------*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
/*-----------------register  validation-------*/


function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter username"
        return false;
    }
    else if(document.Formfill.Username.value.length < 6){
        document.getElementById("result").innerHTML="Atleast three letters"
        return false;
    }
    else if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter your Email"
        return false;
    }
    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter your password"
        return false;
    }
    else if(document.Formfill.Password.value.length < 6){
        document.getElementById("result").innerHTML="password must be  seven letters"
        return false;
    }
    else if(document.Formfill.cPassword.value==""){
        document.getElementById("result").innerHTML="Confirm password"
        return false;
    }
   else if(document.Formfill.cPassword.value!== Document.Formfill.password.value){
        document.getElementById("result").innerHTML="Password mismatced"
        return false;
    }
    else if(document.Formfill.Password.value == Document.Formfill.cpassword.value){
        popup.classList.add('open-slide')
        return false;
    }
}





