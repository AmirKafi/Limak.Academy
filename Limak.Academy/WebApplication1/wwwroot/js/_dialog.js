(function (define) {
    define(["jquery"], function ($) {
        "use strict";
        var dialog;
        $.fn.dialog = function (options) {
            return this.each(function () {
                var $this, modal;
                $this = $(this);
                modal = new dialog($this, options);
                modal.init();
                window.modal = $this;
                return $this;
            });
        };
        $.fn.dialog.defaults = {
            container: "body",
            classNames: null,
            overlay: true,
            mode: null,
            title: "",
            content: null,
            contentElement: null,
            remote: null,
            remoteMethod: "GET",
            remoteData: null,
            show: true,
            showHeader: true,
            showBtnNew: false,
            showBtnClose: true,
            showFooter: true,
            showBtnCancel: true,
            showBtnSave: true,
            destroyAfterClose: false,
            saveBtnLabel: "ذخیره",
            cancelBtnLabel: "انصراف",
            closeBtnLabel: "بستن",
            newBtnLabel: "جدید",
            newBtnClassName: "btn btn-primary btn-raised",
            cancelBtnClassName: "btn btn-outline-danger m-1",
            saveBtnClassName: "btn btn-outline-success m-1",
            onBeforeClose: null,
            onClose: null,
            onAfterClose: null,
            onBeforeOpen: null,
            onOpen: null,
            onAfterOpen: null,
            onSaveClick: null,
            onCancelClick: null,
            onNewClick: null
        };
        return dialog = (function () {
            var _animateEventNames, _browserSupportsCSSProperty, _debug, _eventHandlers, _transitionEventNames;

            function dialog(element, options) {
                this.element = element;
                if (element == null) {
                    throw new Error("element is required");
                }
                this.element = $(this.element);
                $("#" + (this.element.data('dialog-id'))).remove();
                $("body").removeClass("dialog-open");
                this.element.unbind("click.dialog").removeData("dialog").removeData("dialogTitle").removeData("dialogId");
                this.element.options = $.extend({}, $.fn.dialog.defaults, options);
                this.element.data("dialog", this);
                this.isOpen = false;
            }

            dialog.version = "1.0.0";

            _debug = function (message) {
                var _ref;
                if ((_ref = window.console) != null) {
                    if (typeof _ref.log === "function") {
                        _ref.log(message);
                    }
                }
            };

            _browserSupportsCSSProperty = function (propertyName) {
                var domPrefix, domPrefixes, elm, propertyNameCapital, _i, _len;
                elm = document.createElement("div");
                propertyName = propertyName.toLowerCase();
                if (elm.style[propertyName] !== void 0) {
                    return true;
                }
                propertyNameCapital = propertyName.charAt(0).toUpperCase() + propertyName.substr(1);
                domPrefixes = 'Webkit Moz ms O'.split(' ');
                for (_i = 0, _len = domPrefixes.length; _i < _len; _i++) {
                    domPrefix = domPrefixes[_i];
                    if (elm.style[domPrefix + propertyNameCapital] !== void 0) {
                        return true;
                    }
                }
                return false;
            };

            _eventHandlers = function (self) {
                $(document).on("keydown.dialog", function (ev) {
                    if (ev.which === 27 && self.isOpen) {
                        self.hide();
                        $(this).off(ev);
                    }
                });
            };

            _animateEventNames = "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd";

            _transitionEventNames = " transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd";

            dialog.prototype.init = function () {
                setTimeout(function () {
                    $('select[readonly] option:not(:selected)').each(function () {
                        $(this).attr('disabled', true);
                        $(this).closest('select').selectpicker("refresh")
                    });
                }, 1000);

                var $this, body, cancelButton, newButton, closeButton, dialog, footer, header, id, modal, opts, saveButton, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7;
                $this = this.element;
                opts = $this.options;
                if (((_ref = opts.container) != null ? _ref.length : void 0) === 0 || ((_ref1 = $(opts.container)) != null ? _ref1.length : void 0) === 0) {
                    opts.container = "body";
                }
                if (((_ref2 = opts.title) != null ? _ref2.length : void 0) > 0) {
                    $this.data("dialog-title", opts.title);
                }
                id = (new Date().getTime());
                $this.data("dialog-id", id);
                modal = $("<div />").addClass("dialog-modal").attr("id", id);
                dialog = $("<div />").addClass("dialog");
                if ((opts.mode != null) && ((_ref3 = opts.mode) === "large" || _ref3 === "small" || _ref3 === "fullscreen")) {
                    dialog.addClass("dialog-" + opts.mode);
                }
                modal.append(dialog);
                if (opts.showHeader === true) {
                    header = $("<div />").addClass("dialog-header");
                    if (opts.showBtnClose) {
                        closeButton = $("<button type='button' class='dialog-close' title='" + opts.closeLabel + "'><span>&times;</span></button>");
                        closeButton.on("click.dialog", function () {
                            $this.data("dialog").hide();
                        });
                        header.append(closeButton);
                    }
                    if (((_ref4 = opts.title) != null ? _ref4.length : void 0) > 0) {
                        header.append("<h4 class='dialog-title'>" + opts.title + "</h4>");
                    }
                    if (header.html().length > 0) {
                        dialog.append(header);
                    }
                }
                body = $("<div />").addClass("dialog-body");
                if (((_ref5 = opts.content) != null ? _ref5.length : void 0) > 0) {
                    body.html(opts.content);
                } else if (((_ref6 = opts.contentElement) != null ? _ref6.length : void 0) > 0) {
                    body.html($(opts.content).clone());
                } else if (((_ref7 = opts.remote) != null ? _ref7.length : void 0) > 0) {
                    body.html("<div class='loader'><div class='loader-inner'></div></div>");
                    $.ajax({
                        url: opts.remote,
                        method: opts.remoteMethod,
                        headers: {
                            "X-Requested-With": "XMLHttpRequest"
                        },
                        crossDomain: true,
                        cache: false
                    }).done(function (data, textStatus, jqXHR) {
                        body.html(data);
                    }).fail(function (jqXHR, textStatus, error) {
                        body.html(error);
                    });
                }
                dialog.append(body);
                if (opts.showFooter === true) {
                    footer = $("<div />").addClass("dialog-footer");
                    if (opts.showBtnCancel) {
                        cancelButton = $("<button type='button' class='" + opts.cancelBtnClassName + "' tabindex='-1'>" + opts.cancelBtnLabel + "</button>");
                        cancelButton.on("click.dialog", function () {
                            if (typeof opts.onCancelClick === "function") {
                                opts.onCancelClick(cancelButton);
                            }
                            $this.data("dialog").hide();
                        });
                        footer.append(cancelButton);
                    }
                    if (opts.showBtnNew) {
                        newButton = $("<button type='button' class='" + opts.newBtnClassName + "' tabindex='-1'>" + opts.newBtnLabel + "</button>");
                        newButton.on("click.dialog", function () {
                            if (typeof opts.onNewClick === "function") {
                                saveButton.attr("disabled", false);

                                opts.onNewClick(newButton);
                            }
                        });
                        footer.append(newButton);
                    }
                    if (opts.showBtnSave) {

                        saveButton = $("<button type='button' class='" + opts.saveBtnClassName + " save'>" + opts.saveBtnLabel + "</button>");
                        saveButton.attr("disabled", false);
                        saveButton.on("click.dialog", function () {
                            if (typeof opts.onSaveClick === "function") {

                                opts.onSaveClick(saveButton);
                            }
                        });
                        footer.append(saveButton);

                    }
                    dialog.append(footer);



                }
                $(opts.container).append(modal);
                $this.on("click.dialog", function () {
                    $this.data("dialog").toggle();
                });
                if (opts.show === true) {
                    this.show();
                }
            };

            dialog.prototype.hide = function (id) {
                var dialog, el, opts, self;
                self = this;
                if (!self.isOpen) {
                    _debug("dialog is not opened!");
                    return;
                }
                el = this.element;
                opts = el.options;
                if (typeof opts.onBeforeClose === "function") {
                    opts.onBeforeClose();
                }
                dialog = $("#" + (id != null ? id : el.data('dialog-id')));
                dialog.removeClass("dialog--open");
                dialog.addClass("dialog--close");
                if (typeof opts.onClose === "function") {
                    opts.onClose();
                }
                if (!_browserSupportsCSSProperty("animation")) {
                    if (opts.overlay === true) {
                        if ($("body > .dialog-modal.dialog--open").length === 0) {
                            $(document).off("keydown.dialog");
                            $(".dialog-overlay").off("click.dialog").off(_animateEventNames + _transitionEventNames).remove();
                            if (typeof opts.onAfterClose === "function") {
                                opts.onAfterClose();
                            }
                            if (opts.destroyAfterClose === true) {
                                self.destroy("#" + (id != null ? id : el.data('dialog-id')));
                            }
                            self.isOpen = false;
                            $("body").removeClass("dialog-open");
                            dialog.removeClass("dialog--close");
                        }
                    }
                } else {
                    dialog.on("" + _animateEventNames, function (e) {
                        $(this).off(e);
                        if (opts.overlay === true) {
                            if ($("body > .dialog-modal.dialog--open").length === 0) {
                                $(".dialog-overlay").on("" + (_animateEventNames + _transitionEventNames), function (ev) {
                                    $(document).off("keydown");
                                    $(this).off("click");
                                    $(this).off(ev).remove();
                                    if (typeof opts.onAfterClose === "function") {
                                        opts.onAfterClose();
                                    }
                                    if (opts.destroyAfterClose === true) {
                                        self.destroy("#" + (id != null ? id : el.data('dialog-id')));
                                    }
                                    self.isOpen = false;
                                });
                                $("body").removeClass("dialog-open");
                                dialog.removeClass("dialog--close");
                            } else {
                                $(document).off("keydown");
                                $(this).off("click");
                                $(this).remove();
                                if (typeof opts.onAfterClose === "function") {
                                    opts.onAfterClose();
                                }
                                if (opts.destroyAfterClose === true) {
                                    self.destroy("#" + (id != null ? id : el.data('dialog-id')));
                                }
                                self.isOpen = false;
                            }
                        }
                    });
                }
            };

            dialog.prototype.show = function () {

                var dialog, el, opts, overlay, self;
                self = this;
                if (self.isOpen) {
                    _debug("dialog is opened!");
                    return;
                }

                el = this.element;
                opts = el.options;

                if (!opts) {

                }
                $("body").addClass("dialog-open");
                overlay = $(".dialog-overlay");
                if (opts.overlay === true) {
                    if ((overlay != null ? overlay.length : void 0) === 0) {
                        overlay = $("<div />").addClass("dialog-overlay");
                        $(opts.container).append(overlay);
                    }
                } else {
                    overlay.remove();
                }
                if (typeof opts.onBeforeOpen === "function") {
                    opts.onBeforeOpen();
                }
                setTimeout(function () {
                    dialog = $("#" + (el.data('dialog-id')));
                    dialog.addClass("dialog--open");
                    if (typeof opts.onOpen === "function") {
                        opts.onOpen();
                    }
                    if (!_browserSupportsCSSProperty("animation")) {
                        if (typeof opts.onAfterOpen === "function") {
                            opts.onAfterOpen();
                        }
                        self.isOpen = true;
                        _eventHandlers(self);
                    } else {
                        dialog.on("" + _animateEventNames, function (e) {
                            $(this).off(e);
                            if (typeof opts.onAfterOpen === "function") {
                                opts.onAfterOpen();
                            }
                            self.isOpen = true;
                            _eventHandlers(self);
                        });
                    }
                    dialog.animate({
                        scrollTop: 0
                    }, {
                        queue: false,
                        duration: 1000
                    });
                }, 500)
            };

            dialog.prototype.toggle = function () {
                if (this.isOpen) {
                    this.hide(this.element);
                } else {
                    this.show(this.element);
                }
            };

            dialog.prototype.destroy = function (id) {
                $("" + id).remove();
                $("#" + (this.element.data('dialog-id'))).remove();
                this.element.unbind("click.dialog").removeData("dialog").removeData("dialogTitle").removeData("dialogId");
            };

            return dialog;

        })();
    });
})(typeof define === "function" && define.amd ? define : (function (deps, factory) {
    if (typeof module !== "undefined" && module.exports) {
        module.exports = factory(require("jquery"));
    } else {
        window.dialog = factory(window.jQuery);
    }
}));