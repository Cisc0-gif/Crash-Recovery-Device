var jQuery = jQuery.noConflict();
jQuery(document).ready(function(jQuery){jQuery(".carbonadsstickyads").stickyPanel({topPadding:0,afterDetachCSSClass:"detached",savePanelSpace:true,onDetached:null,onReAttached:null,parentSelector:""});});

var stickySidebar = jQuery('.carbonadsstickyads');

if (stickySidebar.length > 0) { 
  var stickyHeight = stickySidebar.height(),
      sidebarTop = stickySidebar.offset().top;
}

// on scroll move the sidebar
jQuery(window).scroll(function () {
  if (stickySidebar.length > 0) { 
    var scrollTop = jQuery(window).scrollTop();
            
    if (sidebarTop < scrollTop) {
      stickySidebar.css('top', scrollTop - sidebarTop);

      // stop the sticky sidebar at the footer to avoid overlapping
      var sidebarBottom = stickySidebar.offset().top + stickyHeight,
          stickyStop = jQuery('.main-content').offset().top + jQuery('.main-content').height();
      if (stickyStop < sidebarBottom) {
        var stopPosition = jQuery('.main-content').height() - stickyHeight;
        stickySidebar.css('top', stopPosition);
      }
    }
    else {
      stickySidebar.css('top', '0');
    } 
  }
});

jQuery(window).resize(function () {
  if (stickySidebar.length > 0) { 
    stickyHeight = stickySidebar.height();
  }
});
