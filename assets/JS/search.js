$(document).ready(function(){
    $('.js-search').click(toggleSearchDialog);
    
});
let toggleSearchDialog = function(event) {
    let item = document.querySelector('#search');
    let style = getComputedStyle(item);
    let visiblity = style.visibility;
    if(visiblity == "hidden"){
        $('#search').css("visibility", "visible");
    }else{
        $('#search').css("visibility", "hidden");
    }
    $("#search-query").on("keyup", search);
// .toggle();
}
let search = function(){
        var value = $(this).val().toLowerCase();
        $.get('./../../collections.html', null, function(text){
            alert($(text).find('.card'));

        })
        // console.log(fromCollections);
        $("#myDIV *").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
}