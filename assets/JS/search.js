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
    $(".section-search-results").load('./../../collections.html .card-text');
    
    // $('.search-hits').css("visibility", "visible");
    // $(".search-hits").load('./../../posts.html .media-body');
    $("#search-query").on("keyup", search);
// .toggle();
}
let search = function(){
        var value = $(this).val().toLowerCase();
        $(".section-search-results .card-text").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
          console.log( $(".section-search-results *").text())
}