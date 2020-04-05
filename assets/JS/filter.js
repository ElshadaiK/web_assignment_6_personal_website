    $(document).ready(function(){
        $(".btn-lg").on("click", function() {
                    
            let selector = $(this).attr('data-filter');
            // $(".collectionsList *").not(selector).toggle();
                $(".collectionsList .card").not(selector).hide();
                $(".collectionsList *").filter(selector).show();
            $(this).removeClass('active').addClass('active').siblings().removeClass('active all');
            return false;

    });
});