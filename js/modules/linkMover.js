function linkMover(id) {
  var navOff = $('header').height();
  var scrollTo = $(''+id).offset().top;
  $('html').addClass('__menu-scrolling');
  stateSender(id);
  currentPosition = id;
  $('html, body').stop().animate({scrollTop:(scrollTo-navOff)}, ts, function(){
    setTimeout(function(){
      $('html').removeClass('__menu-scrolling');
    },500);
    $('header').removeClass('headroom--unpinned');


  });
}