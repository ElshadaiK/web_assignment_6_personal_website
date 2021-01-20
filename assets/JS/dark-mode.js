let theme = null;
$(document).ready(function(){
        check();
        $('.js-dark-toggle').click(change);
        
    });
let change =  function(){
        $('.body-section').toggleClass('dark');
        theme = (theme =='dark')? 'bright':'dark'
        localStorage.setItem("theme", theme);
        $('.fa-moon').toggleClass("fa-sun");
    }
let check = function() {
  
    if(localStorage.getItem("theme")){
        let savedTheme = localStorage.getItem("theme");
        if(savedTheme == "dark"){
            theme = 'bright'
            change();
        }
}}