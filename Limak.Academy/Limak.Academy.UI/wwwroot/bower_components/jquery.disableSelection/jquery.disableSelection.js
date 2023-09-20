(function($) {
  $.fn.disableSelection = function() {
    this.attr('unselectable', 'on').css('user-select', 'none').on('selectstart', false);
    this.on("DOMNodeInserted", function(e) {
      var items;
      items = $(e.target);
      if (items.length > 0) {
        items.attr('unselectable', 'on').css('user-select', 'none').on('selectstart', false);
      }
    });
    return this;
  };
})(jQuery);