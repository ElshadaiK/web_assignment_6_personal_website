    $(document).ready(function(){
        $(".btn-lg").on("click", function() {
          var value = $(this).attr('data-filter');
          $(".collectionsList *").filter(function() {
            //   console.log($(this))
            // $(this).toggle($(this).hasClass(value))
          
          var filtered = $(this).filter(name => {
            console.log(name);
            name.hasClass(value)});
            console.log(filtered + "filtered")
            // $(this).toggle(classNames.indexOf(value) > -1);
          });
        });
    });