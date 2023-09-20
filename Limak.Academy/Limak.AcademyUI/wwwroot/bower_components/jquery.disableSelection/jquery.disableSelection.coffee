( ($) ->
    $.fn.disableSelection = ->
        this.attr('unselectable', 'on').css('user-select', 'none').on('selectstart', false)
        this.on "DOMNodeInserted", (e) ->
                items = $(e.target)
                items.attr('unselectable', 'on').css('user-select', 'none').on('selectstart', false) if items.length > 0
                return
        this
    return
)(jQuery)