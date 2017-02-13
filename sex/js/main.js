
$(document).ready(function(){
//banner
    $("#owl-demo").owlCarousel({
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        autoPlay : true,
        navText:["<i class='fa fa-angle-left fa-4x'></i>","<i class='fa fa-angle-right fa-4x'></i>"],
        navigationText: ["<i class='fa fa-angle-left fa-4x'></i>","<i class='fa fa-angle-right fa-4x'></i>"],
        singleItem:true
    });

    //weixin
    var weiXin = function(){
        var m = $('html').hasClass('touch'),
            $tip = $('.tip');
        if(!m){
            $('.fa-weixin').hover(function(){
                $tip.css({'height':'118px'});
            },function(){
                $tip.css({'height':'0'});
            });
        }else if(m){
            $(document).on('click',function(e){
                var h = $tip.height();
                var wx = e.target.id;
                if((h==0)&&(wx=='weixin')){
                    $tip.css({'height':'118px'});
                }else if(h==118){
                    $tip.css({'height':'0'});
                }
            })
        }
    };
    weiXin();
    //鍒楄〃椤�
    var $wrapSort = $('#container-sort');
    var $itemWidth = $('#container-sort .item');
    var $container = $wrapSort.imagesLoaded(function () {
        $container.isotope({
            // options
            itemSelector: '.item',
            layoutMode: 'fitRows'
        });
    });
    /////鍔ㄦ€佽绠�
    var isoItemWidth = function () {
        var $wrapSortWidth = $wrapSort.width();
        if($(document).width()<767){
            $itemWidth.outerWidth($wrapSortWidth/2);
        }else {
            $itemWidth.outerWidth($wrapSortWidth/4);
        }
    }
    //
    isoItemWidth();
    $(window).resize(isoItemWidth);


    $('#filters').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });
    //璇︽儏椤�
    $('.fancybox').fancybox({
        prevEffect : 'none',
        nextEffect : 'none',
        afterLoad : function() {
            this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
        }
    });
    ///////////////////jobs//////////////////////
    $('.list-group a').click(function(e){
        e.preventDefault();
        var $this = $(this);
        var change = $this.find('>div').css('display');
        //alert(change);
        if(change=='none'){
            $this.find('i').removeClass('fa-plus').addClass('fa-minus');
        } else{
            $this.find('i').removeClass('fa-minus').addClass('fa-plus');
        }
    });
});
