$(function(){
    $('.list__inner .tab').on('click',function(event) {
        var id = $(this).attr('data-id');
            $('.list__inner').find('.tab-item').removeClass('active-tab').hide();
            $('.list__inner .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });
});

$(function(){
    $('.reviews__inner .review-tab').on('click',function(event) {
        var id = $(this).attr('review-data-id');
            $('.reviews__inner').find('.review-tab-item').removeClass('active-review-tab').hide();
            $('.reviews__inner .reviews__location').find('.review-tab').removeClass('review-active');
            $(this).addClass('review-active');
            $('#'+id).addClass('active-review-tab').fadeIn();
            return false;
        });
});




