//#region Course
window.courseAdditionalParams = function () {
    return {

    }
}

$(document).on("change", "select#CourseType", function (e) {
    if ($(this).val() === "Online") {
        $(".course-create .offlineCourse").css("display", "none");
        $(".course-create .onlineCourse").css("display", "flex");
    } else if ($(this).val() === "Offline") {
        $(".course-create .onlineCourse").css("display", "none");
        $(".course-create .offlineCourse").css("display", "flex");
    } else {
        $(".course-create .onlineCourse").css("display", "none");
        $(".course-create .offlineCourse").css("display", "none");
    }
});

window.courseDiscountFormatter = function (courseId, row) {
    if (row.discountPrice === null)
        return "<button class='btn btn-sm btn-success m-1 apply-course-discount' data-id='" + row.id + "'><span class='glyphicon glyphicon-plus-sign'></span> اختصاص تخفیف</button>";
    else
        return "<button class='btn btn-sm btn-danger m-1 remove-course-discount' data-id='" + row.id + "'><span class='glyphicon glyphicon-trash'></span> حذف تخفیف</button> ";
}

window.courseDiscountEvents = {
    'click button.apply-course-discount': function (row) {
        var $createItem, url;
        $createItem = $(this);
        url = $('table[data-toggle=table]').data("applyDiscountUrl");

        $.ajax({
            url: url,
            type: "GET",
            cache: false,
            data: {
                courseId: $createItem.data("id")
            }
        }).done(function (data, textStatus, jqXHR) {

            var _ref1;
            if ((data != null ? data.length : void 0) === 0) {
                toastr["error"]((_ref1 = data.message) != null ? _ref1 : resource.exception.addError);
                return;
            }
            setTimeout(function () {
                var name, title, _ref1, _ref2, imageFiles;
                $createItem.dialog({
                    title: "اختصاص تخفیف",
                    mode: "small",
                    destroyAfterClose: true,
                    content: content,
                    onSaveClick: function (e) {
                        var $btnSave, form;
                        $btnSave = $(e);

                        form = $btnSave.parent().prev().find("form");
                        if (form.valid()) {
                            $btnSave.prop("disabled", true);
                            $.ajax({
                                url: form.attr("action"),
                                method: "POST",
                                data: new FormData(form.get(0)),
                                processData: false,
                                contentType: false,
                                cache: false
                            }).done(function (data, textStatus, jqXHR) {
                                var _ref3;
                                autoDestroyToastr();
                                if (data.resultStatus !== 1 && data.resultStatus !== -2) {
                                    toastr["error"]((_ref3 = data.message) != null ? _ref3 : resource.exception.saveError);
                                    return;
                                }
                                toastr["success"](resource.message.saveSuccess);
                                $createItem.data("dialog").hide($createItem.data("dialogId"));
                                window.$table.bootstrapTable("refresh", {
                                    silent: true,
                                    pageNumber: 1
                                });
                            }).fail(function (msg) {
                                autoDestroyToastr();
                                content = msg.status === 403 ? msg.statusText : "Error";
                                if (content === "Error") {
                                    toastr["error"](resource.exception.addError);
                                    return;
                                }
                                if (content === "Forbidden") {
                                    toastr["error"](resource.exception.addForbidden);
                                    return;
                                }
                            }).always(function () {
                                $btnSave.prop("disabled", false);
                                manuallyDestroyToastr();
                            });
                        } else {
                            window.gotoErrorModal();
                        }
                    },
                    onBeforeOpen: function () {
                        var persianCalendar;
                        $('form').validateBootstrap(true);
                        window.inputmasks();

                       
                        $(".dialog-body select").selectpicker({
                            container: "body"
                        });
                        
                    }
                });
            }, 700);
            content = data;
        }).fail(function (msg) {
            content = msg.status === 403 ? "Forbidden" : "Error";
        }).always(function () {

        });
    },
    'click button.remove-course-discount': function (row) {
        var $this, url;
        $this = $(this);
        url = $('table[data-toggle=table]').data("removeDiscountUrl");

        $.ajax({
            url: url,
            type: "POST",
            cache: false,
            data: {
                courseId: $this.data("id")
            }
        }).done(function (data, textStatus, jqXHR) {
            if ((data != null ? data.length : void 0) === 0) {
                toastr["error"]((_ref1 = data.message) != null ? _ref1 : resource.exception.editError);
                return;
            }

            toastr["success"]("عملیات با موفقیت انجام شد");
            $('table[data-toggle=table]').bootstrapTable("refresh", {
                silent: true,
                pageNumber: 1
            });
        }).fail(function (msg) {
            toastr["error"](msg.status === 403 ? resource.exception.forbidden : resource.exception.serverError);
        });
    }
}
//#endregion

//#region Teacher

window.teacherAdditionalParams = function () {
    return {

    }
}

//#endregion

//#region Blogs

window.blogAdditionalParams = function () {
    return {

    }
}

//#endregion

//#region User

window.userAdditionalParams = function () {
    return {

    }
}

window.promoteToAdminFormatter = function (role, row) {
    console.log(row);
    if (role === 2)//User
        return "<button class='btn btn-sm btn-success m-1 promoteToAdmin' data-id='" + row.id + "'><span class='glyphicon glyphicon-arrow-up'></span>ارتقا به مدیرسیستم</button>";
    else
        return "<button class='btn btn-sm btn-info m-1'>مدیرسیستم</button> ";
}
window.promoteToAdminEvents = {
    'click button.promoteToAdmin': function (row) {
        var $this, url;
        $this = $(this);
        url = $('table[data-toggle=table]').data("promoteUrl");

        $.ajax({
            url: url,
            type: "POST",
            cache: false,
            data: {
                id: $this.data("id")
            }
        }).done(function (data, textStatus, jqXHR) {
            if ((data != null ? data.length : void 0) === 0) {
                toastr["error"]((_ref1 = data.message) != null ? _ref1 : resource.exception.editError);
                return;
            }

            toastr["success"]("عملیات با موفقیت انجام شد");
            $('table[data-toggle=table]').bootstrapTable("refresh", {
                silent: true,
                pageNumber: 1
            });
        }).fail(function (msg) {
            toastr["error"](msg.status === 403 ? resource.exception.forbidden : resource.exception.serverError);
        });
    }
}

//#endregion

//#region Discount

window.discountAdditionalParams = function () {
    return {

    }
}

window.discountExpirationFormatter = function (expire, row) {
    if (expire === true)
        return "<button class='btn btn-sm btn-success m-1 renew-discount' data-id='" + row.id + "'><span class='glyphicon glyphicon-plus'></span> تمدید</button>";
    else
        return "<button class='btn btn-sm btn-danger m-1 expire-discount' data-id='" + row.id + "'><span class='glyphicon glyphicon-trash'></span> منقضی</button> ";
}

window.discountExpirationEvents = {
    'click button.renew-discount': function (row) {
        var $this, url;
        $this = $(this);
        url = $('table[data-toggle=table]').data("expirationUrl");

        $.ajax({
            url: url,
            type: "POST",
            cache: false,
            data: {
                discountId: $this.data("id"),
                expire: false
            }
        }).done(function (data, textStatus, jqXHR) {
            if ((data != null ? data.length : void 0) === 0) {
                toastr["error"]((_ref1 = data.message) != null ? _ref1 : resource.exception.editError);
                return;
            }

            toastr["success"]("عملیات با موفقیت انجام شد");
            $('table[data-toggle=table]').bootstrapTable("refresh", {
                silent: true,
                pageNumber: 1
            });
        }).fail(function (msg) {
            toastr["error"](msg.status === 403 ? resource.exception.forbidden : resource.exception.serverError);
        });
    },
    'click button.expire-discount': function (row) {
        var $this, url;
        $this = $(this);
        url = $('table[data-toggle=table]').data("expirationUrl");

        $.ajax({
            url: url,
            type: "POST",
            cache: false,
            data: {
                discountId: $this.data("id"),
                expire: true
            }
        }).done(function (data, textStatus, jqXHR) {
            if ((data != null ? data.length : void 0) === 0) {
                toastr["error"]((_ref1 = data.message) != null ? _ref1 : resource.exception.editError);
                return;
            }

            toastr["success"]("عملیات با موفقیت انجام شد");
            $('table[data-toggle=table]').bootstrapTable("refresh", {
                silent: true,
                pageNumber: 1
            });
        }).fail(function (msg) {
            toastr["error"](msg.status === 403 ? resource.exception.forbidden : resource.exception.serverError);
        });
    }
}
$(document).on("click", "#IsSpecifiedByUser", function (e) {

    if ($(this).prop("checked") === true)
        $(".discount-create .specifiedByUser").css("display", "block");
    else
        $(".discount-create .specifiedByUser").css("display", "none");

});
//#endregion


//#region Message

window.messageReadFormatter = function (messageId, row) {
    return "<button class='btn btn-sm btn-info m-1 readMessage' data-id='" + messageId + "'>مشاهده پیام</button> ";
}
window.messageReadEvents = {
    'click button.readMessage': function (row) {
        var $this, url;
        $this = $(this);
        url = $('table[data-toggle=table]').data("readUrl");

        $.ajax({
            url: url,
            type: "GET",
            cache: false,
            data: {
                messageId: $this.data("id")
            }
        }).done(function (data, textStatus, jqXHR) {
            if ((data != null ? data.length : void 0) === 0) {
                toastr["error"]((_ref1 = data.message) != null ? _ref1 : resource.exception.editError);
                return;
            }
            window.$table.bootstrapTable("refresh", {
                silent: true,
                pageNumber: 1
            });
            content = data;
            setTimeout(function () {
                var name, title, _ref1, _ref2;
                $this.dialog({
                    title: "مشاهده پیام",
                    mode: "medium",
                    showFooter: false,
                    destroyAfterClose: true,
                    content: content
                });
            }, 700);
        }).fail(function (msg) {
            toastr["error"](msg.status === 403 ? resource.exception.forbidden : resource.exception.serverError);
        });
    }
}

$(document).on("click", ".btn-sendMessage", function (e) {
    var $btnSave;
    $btnSave = $(this);

    var form = $btnSave.closest("form");
    if (form.valid()) {
        $btnSave.prop("disabled", true);
        $.ajax({
            url: form.attr("action"),
            method: "POST",
            data: new FormData(form.get(0)),
            processData: false,
            contentType: false,
            cache: false
        }).done(function (data, textStatus, jqXHR) {
            var _ref3;
            autoDestroyToastr();
            if (data.resultStatus !== 1 && data.resultStatus !== -2) {
                toastr["error"]((_ref3 = data.message) != null ? _ref3 : resource.exception.saveError);
                return;
            }
            toastr["success"](resource.message.saveSuccess);
            form.reset();
        }).fail(function (msg) {
            autoDestroyToastr();
            content = msg.status === 403 ? msg.statusText : "Error";
            if (content === "Error") {
                toastr["error"](resource.exception.addError);
                return;
            }
            if (content === "Forbidden") {
                toastr["error"](resource.exception.addForbidden);
                return;
            }
        }).always(function () {
            $btnSave.prop("disabled", false);
            manuallyDestroyToastr();
        });
    } else {
        window.gotoErrorModal();
    }
});
//#endregion

//#region Courses

$(document).on("click", ".btn-addToCart", function (e) {
    var $btn;
    $btn = $(this);

    $btn.prop("disabled", true);
    $.ajax({
        url: $btn.data("url"),
        method: "POST",
        data: {
            orderType: "Course",
            orderItemId: $(".course-details #CourseId").val()
        },
    }).done(function (data, textStatus, jqXHR) {
        var _ref3;
        autoDestroyToastr();
        if (data.resultStatus !== 1 && data.resultStatus !== -2) {
            toastr["error"]((_ref3 = data.message) != null ? _ref3 : resource.exception.saveError);
            return;
        }
        toastr["success"](resource.message.saveSuccess);
    }).fail(function (msg) {
        autoDestroyToastr();
        content = msg.status === 403 ? msg.statusText : "Error";
        if (content === "Error") {
            toastr["error"](resource.exception.addError);
            return;
        }
        if (content === "Forbidden") {
            toastr["error"](resource.exception.addForbidden);
            return;
        }
    }).always(function () {
        $btn.prop("disabled", false);
        manuallyDestroyToastr();
    });
});

//#endregion

//#region Orders

window.orderAjaxRequest = function (params) {
    var additionalParams;
    params.type = "post";
    params.data.__RequestVerificationToken = $("input[name=__RequestVerificationToken]").val();
    params.url = $table.data("url");
    params.contentType = "application/x-www-form-urlencoded; charset=UTF-8";
    additionalParams = window.$table.data("additionalParams");
    setTimeout(function () {
        $.ajax(params).done(function (data, textStatus, jqXHR) {
            var objects, _ref;

            if (data.resultStatus !== 1 && data.resultStatus !== -2) {
                toastr["error"]((_ref3 = data.message) != null ? _ref3 : resource.exception.saveError);
                return;
            }

            objects = {
                total: data.total,
                rows: data.data
            };
            window.$table.bootstrapTable('load', objects);

            $(".order-list #DiscountPrice").html(0);
            $(".order-list #TotalPrice").html(0);
            $(".order-list #PayablePrice").html(0);
            $(".order-list #TaxPrice").html(0);


        }).fail(function (msg) {
            toastr["error"](msg.status === 403 ? resource.exception.forbidden : resource.exception.serverError);
        }).always(function () { });
    }, 313);
};

$(document).on("check.bs.table", "#CartTable", function (rows) {
    window.calculatePrice()
});
$(document).on("uncheck-all.bs.table", "#CartTable", function (rows) {
    window.calculatePrice()
});
$(document).on("check-all.bs.table", "#CartTable", function (rows) {
    window.calculatePrice()
});
$(document).on("uncheck.bs.table", "#CartTable", function (rows) {
    window.calculatePrice()
});

$(document).on("click", ".apply-discount", function (e) {
    var $btn;
    $btn = $(this);
    var discountCode = $("#DiscountCode").val();
    if (discountCode === "" || discountCode === null) {
        toastr["warning"]("لطفا کد تخفیف را وارد کنید");
        return;
    }
    $btn.prop("disabled", true);
    $.ajax({
        url: $btn.data("url"),
        method: "POST",
        data: {
            code: discountCode,
            courseId: null
        }
    }).done(function (data, textStatus, jqXHR) {
        var _ref3;
        autoDestroyToastr();
        if (data.resultStatus !== 1 && data.resultStatus !== -2) {
            toastr["error"](data.message);
            return;
        }
        var payablePrice = $("#PayablePriceInt").val();

        console.log(payablePrice);

        $("#DiscountPrice").html(parseFloat(payablePrice) * (data.data.precentage / 100));
        $("#DiscountCode").val("");
        $("#DiscountId").val(data.data.id);
        toastr["success"](resource.message.success);
        window.calculatePrice(parseFloat($("#DiscountPrice").html()));
    }).fail(function (msg) {
        autoDestroyToastr();
        content = msg.status === 403 ? msg.statusText : "Error";
        if (content === "Error") {
            toastr["error"]("متاسفانه عملیات با خطا مواجه شد");
            return;
        }
    }).always(function () {
        $btn.prop("disabled", false);
        manuallyDestroyToastr();
    });
});

$(document).on("click", ".removeAllOrders", function (e) {
    var $btn;
    $btn = $(this);

    $btn.prop("disabled", true);
    $.ajax({
        url: $btn.data("url"),
        method: "POST",
    }).done(function (data, textStatus, jqXHR) {
        var _ref3;
        autoDestroyToastr();
        if (data.resultStatus !== 1 && data.resultStatus !== -2) {
            toastr["error"]("متاسفانه عملیات با خطا مواجه شد");
            return;
        }
        toastr["success"](resource.message.success);
        window.$table.bootstrapTable("refresh", {
            silent: true,
            pageNumber: 1
        });
    }).fail(function (msg) {
        autoDestroyToastr();
        content = msg.status === 403 ? msg.statusText : "Error";
        if (content === "Error") {
            toastr["error"]("متاسفانه عملیات با خطا مواجه شد");
            return;
        }
    }).always(function () {
        $btn.prop("disabled", false);
        manuallyDestroyToastr();
    });
});

$(document).on("click", ".pay-cart", function (e) {
    var $btn;
    $btn = $(this);
    var ordersId = window.getIdSelections();
    if ((ordersId != null ? ordersId.length : void 0) === 0) {
        toastr["warning"]("برای پرداخت آیتم های مورد نظر خود را انتخاب کنید");
        return false;
    }
    $btn.prop("disabled", true);
    $.ajax({
        url: $btn.data("url"),
        method: "POST",
        data: {
            ordersId: ordersId,
            totalPrice: parseFloat($("#TotalPriceInt").val()),
            discountPrice: parseFloat($("#DiscountPriceInt").val()),
            discountId:$("#DiscountId").val()
        }
    }).done(function (data, textStatus, jqXHR) {
        var _ref3;
        autoDestroyToastr();
        if (data.resultStatus !== 1 && data.resultStatus !== -2) {
            toastr["error"]("متاسفانه عملیات با خطا مواجه شد");
            return;
        }
        toastr["success"](resource.message.success);
        window.$table.bootstrapTable("refresh", {
            silent: true,
            pageNumber: 1
        });
    }).fail(function (msg) {
        autoDestroyToastr();
        content = msg.status === 403 ? msg.statusText : "Error";
        if (content === "Error") {
            toastr["error"]("متاسفانه عملیات با خطا مواجه شد");
            return;
        }
    }).always(function () {
        $btn.prop("disabled", false);
        manuallyDestroyToastr();
    });
});

window.calculatePrice = function (discountPrice = 0.0) {
    let totalPrice = 0.0, payablePrice = 0.0, taxPrice = 0.0;
    discountPrice = parseFloat(discountPrice);

    var selectedOrders = window.$table.bootstrapTable('getSelections');

    _.each(selectedOrders, function (item) {
        totalPrice += item.totalPrice;
    });
    taxPrice = (totalPrice) * (9 / 100);
    payablePrice = (totalPrice - discountPrice) + taxPrice;

    $(".order-list #DiscountPrice").html(window.separateThreeDigit(discountPrice.toFixed(0)))
    $(".order-list #TotalPrice").html(window.separateThreeDigit(totalPrice.toFixed(0)));
    $(".order-list #PayablePrice").html(window.separateThreeDigit(payablePrice.toFixed(0)));
    $(".order-list #TaxPrice").html(window.separateThreeDigit(taxPrice.toFixed(0)));


    $(".order-list #DiscountPriceInt").val(discountPrice.toFixed(0))
    $(".order-list #TotalPriceInt").val(totalPrice.toFixed(0));
    $(".order-list #PayablePriceInt").val(payablePrice.toFixed(0));
    $(".order-list #TaxPriceInt").val(taxPrice.toFixed(0));
}

window.orderPriceFormatter = function (price,row) {
    var res;
    if (row.discountPrice !== null) {
        res = "" + window.separateThreeDigit((parseFloat(row.price).toFixed(0) - parseFloat(row.discountPrice).toFixed(0))) + "  " +
            "<span class='old-prc'>" + window.separateThreeDigit(row.price) + "</span>";
    } else {
        res =  window.separateThreeDigit(row.price)
    }
    return res;
}

//#endregion

$(document).on("click", ".search-btn", function (e) {
    var $btn;
    $btn = $(this);
    var text = $("#SearchText").val();

    window.location = "/Search?query=" + text;
});



$(document).on("click", ".btn-login", function (e) {
    var $btnSave;
    $btnSave = $(this);
    var form = $btnSave.closest("form");
    if (form.valid()) {
        $btnSave.prop("disabled", true);
        $.ajax({
            url: $btnSave.data("url"),
            method: "POST",
            data: new FormData(form.get(0)),
            processData: false,
            contentType: false,
            cache: false
        }).done(function (data, textStatus, jqXHR) {
            var _ref3;
            autoDestroyToastr();
            if (data.resultStatus !== 1 && data.resultStatus !== -2) {
                toastr["error"]((_ref3 = data.message) != null ? _ref3 : resource.exception.saveError);
                return;
            }
            toastr["success"](resource.message.saveSuccess);

            var modal = window.modal;
            modal.data("dialog").hide(modal.data("dialogId"));
            window.location = "/";
        }).fail(function (msg) {
            autoDestroyToastr();
            content = msg.status === 403 ? msg.statusText : "Error";
            if (content === "Error") {
                toastr["error"](resource.exception.addError);
                return;
            }
            if (content === "Forbidden") {
                toastr["error"](resource.exception.addForbidden);
                return;
            }
        }).always(function () {
            $btnSave.prop("disabled", false);
            manuallyDestroyToastr();
        });
    } else {
        window.gotoErrorModal();
    }
});

$(document).on("click", ".btn-register", function (e) {
    var $btnSave;
    $btnSave = $(this);
    var form = $btnSave.closest("form");
    if (form.valid()) {
        $btnSave.prop("disabled", true);
        $.ajax({
            url: $btnSave.data("url"),
            method: "POST",
            data: new FormData(form.get(0)),
            processData: false,
            contentType: false,
            cache: false
        }).done(function (data, textStatus, jqXHR) {
            var _ref3;
            autoDestroyToastr();
            if (data.resultStatus !== 1 && data.resultStatus !== -2) {
                toastr["error"]((_ref3 = data.message) != null ? _ref3 : resource.exception.saveError);
                return;
            }
            toastr["success"](resource.message.saveSuccess);

            var modal = window.modal;
            modal.data("dialog").hide(modal.data("dialogId"));
            window.location = "/";
        }).fail(function (msg) {
            autoDestroyToastr();
            content = msg.status === 403 ? msg.statusText : "Error";
            if (content === "Error") {
                toastr["error"](resource.exception.addError);
                return;
            }
            if (content === "Forbidden") {
                toastr["error"](resource.exception.addForbidden);
                return;
            }
        }).always(function () {
            $btnSave.prop("disabled", false);
            manuallyDestroyToastr();
        });
    } else {
        window.gotoErrorModal();
    }
});

$(document).on("click", ".signOut[data-url]", function () {
    var $this, deleteDialog, ids;
    $this = $(this);
    autoDestroyToastr();
    content = "<p>آیا از خروج از سامانه مطمئن هستید؟</p>";
    setTimeout(function () {
        $this.dialog({
            mode: "small",
            showHeader: false,
            destroyAfterClose: true,
            content: content,
            onSaveClick: function (e) {
                $.ajax({
                    url: $this.data("url"),
                    type: "POST",
                    cache: false,
                    data: {
                        "__RequestVerificationToken": $("input[name=__RequestVerificationToken]").val()
                    }
                }).done(function (data, textStatus, jqXHR) {
                    window.location = "/";
                }).fail(function (msg) {
                    toastr["error"](msg.status === 403 ? resource.exception.deleteForbidden : resource.exception.deleteError);
                }).always(function () { });
            }
        });
    }, 700);
    return false;
});

$(document).on("click", ".changePassword[data-url]", function (e) {
    var $createItem, additionalParams, content, params, url, _ref;
    e.preventDefault();
    $createItem = $(this);
    $.fn.dialog.defaults = $.extend({}, $.fn.dialog.defaults, {
        saveBtnLabel: resource.dialog.save,
        cancelBtnLabel: resource.dialog.cancel,
        closeLabel: resource.dialog.close
    });

    content = "";
    $createItem.tooltip("hide");
    url = $createItem.data("url");
    $.ajax({
        url: url,
        type: "GET",
        cache: false
    }).done(function (data, textStatus, jqXHR) {

        var _ref1;
        if ((data != null ? data.length : void 0) === 0) {
            toastr["error"]((_ref1 = data.message) != null ? _ref1 : resource.exception.addError);
            return;
        }
        setTimeout(function () {
            var name, title, _ref1, _ref2, imageFiles;
            $createItem.dialog({
                title: "تغییر کلمه عبور",
                mode: "medium",
                destroyAfterClose: true,
                content: content,
                onSaveClick: function (e) {
                    var $btnSave, form;
                    $btnSave = $(e);
                    form = $btnSave.parent().prev().find("form");
                    if (form.valid()) {
                        $btnSave.prop("disabled", true);
                        $.ajax({
                            url: form.attr("action"),
                            method: "POST",
                            data: new FormData(form.get(0)),
                            processData: false,
                            contentType: false,
                            cache: false
                        }).done(function (data, textStatus, jqXHR) {
                            var _ref3;
                            autoDestroyToastr();
                            if (data.resultStatus !== 1 && data.resultStatus !== -2) {
                                toastr["error"]((_ref3 = data.message) != null ? _ref3 : resource.exception.saveError);
                                return;
                            }
                            toastr["success"](resource.message.saveSuccess);
                            $createItem.data("dialog").hide($createItem.data("dialogId"));
                        }).fail(function (msg) {
                            autoDestroyToastr();
                            content = msg.status === 403 ? msg.statusText : "Error";
                            if (content === "Error") {
                                toastr["error"](resource.exception.addError);
                                return;
                            }
                            if (content === "Forbidden") {
                                toastr["error"](resource.exception.addForbidden);
                                return;
                            }
                        }).always(function () {
                            $btnSave.prop("disabled", false);
                            manuallyDestroyToastr();
                        });
                    } else {
                        window.gotoErrorModal();
                    }
                },
                onBeforeOpen: function () {
                    var persianCalendar;
                    $('form').validateBootstrap(true);
                    window.inputmasks();

                    $(".dialog-body select").selectpicker({
                        container: "body"
                    });
                    persianCalendar = $.calendars.instance('persian', 'fa');
                    $(".shamsi").calendarsPicker({
                        calendar: persianCalendar
                    }, $.calendarsPicker.regionalOptions['fa']);

                    imageFiles = $("input[type=file].imageFile");
                    _.each(imageFiles, function (imageFile, index) {
                        var fileName, imagePreview, imageThumbnails, _ref;
                        $(imageFile).fileinput({
                            language: "fa",
                            showUpload: false,
                            uploadAsync: true,
                            allowedFileExtensions: ["jpg", "png", "pdf", "xlsx", "docx"],
                            fileActionSettings: {
                                showDrag: false
                            }
                        });
                        fileName = $("#" + ((_ref = $(imageFile).data('fileName')) != null ? _ref : 'FileName')).val();
                        if (fileName === "undefined" || fileName === void 0 || fileName === "") {
                            fileName = [];
                        }
                        if (fileName.length > 0) {
                            imagePreview = $("" + ($(imageFile).data('previewTarget')));
                            imageThumbnails = imagePreview.find(".file-preview-thumbnails");
                            imagePreview.removeClass("hidden");
                            imageThumbnails.append("<div class='file-preview-frame krajee-default kv-preview-thumb' data-fileindex='" + index + "' data-template='image'> <div class='kv-file-content'> <img src='" + ($(imageFile).data('url')) + "/" + fileName + "' class='kv-preview-data file-preview-image' style='width:auto;height:160px;' /> </div> <div> <div class='file-footer-buttons'> <button type='button' data-id='" + fileName + "' class='kv-file-remove btn btn-xs btn-default'><i class='glyphicon glyphicon-trash text-danger'></i></button> </div> <div class='clearfix'></div> </div> </div>");
                            $(document).off("click", "" + ($(imageFile).data('previewTarget')) + " .close.fileinput-remove");
                            $(document).on("click", "" + ($(imageFile).data('previewTarget')) + " .close.fileinput-remove", function () {
                                bootbox.confirm("آیا واقعا میخواهید همه فایل ها را حذف کنید؟", function (result) {
                                    var _ref1;
                                    if (result === true) {
                                        $("#" + ((_ref1 = $(imageFile).data('fileName')) != null ? _ref1 : 'FileName')).val("");
                                        imageThumbnails.empty();
                                        return imagePreview.addClass("hidden");
                                    }
                                });
                            });
                            $(document).off("click", "" + ($(imageFile).data('previewTarget')) + " .kv-file-remove");
                            return $(document).on("click", "" + ($(imageFile).data('previewTarget')) + " .kv-file-remove", function () {
                                var $this, id;
                                $this = $(this);
                                id = $this.attr("data-id");
                                bootbox.confirm("آیا واقعا میخواهید این فایل را حذف کنید؟", function (result) {
                                    var _ref1, _ref2;
                                    if (result === true) {
                                        $("#" + ((_ref1 = $(imageFile).data('fileName')) != null ? _ref1 : 'FileName')).val("");
                                        $this.closest(".file-preview-frame").remove();
                                        if (((_ref2 = imageThumbnails.find(".file-preview-frame")) != null ? _ref2.length : void 0) === 0) {
                                            return imagePreview.addClass("hidden");
                                        }
                                    }
                                });
                            });
                        }
                    });

                    _.each($(".dialog-body select.shortcut"), function (item, index) {
                        var wrapper;
                        if ($(item).closest(".input-group").length > 0) {
                            return;
                        }
                        wrapper = $("<div class='input-group ig_" + index + "'/>");
                        $(item).parent().wrap(wrapper);
                        wrapper = $(".dialog-body .ig_" + index);
                        if ($(item).data("refreshUrl") != null) {
                            wrapper.append("<span class='input-group-btn'> <button class='btn btn-default refresh' type='button' style=' border: 2px solid #E020FF; border-radius: 7px; background: transparent; color: #E020FF;' data-url='" + ($(item).data('refreshUrl')) + "' data-parent='" + ($(item).data('parent')) + "'><i class='glyphicon glyphicon-refresh icon-refresh'></i></button> </span>");
                        }
                        if ($(item).data("newUrl") != null) {
                            wrapper.append("<span class='input-group-btn'> <a href='javascript:void(0)' data-dialog-title='" + ($(item).data('dialogTitle')) + "' data-url='" + ($(item).data('newUrl')) + "' class='btn btn-default btn-shortcut createItem'><i class='material-icons'>add</i></a> </span>");
                        }
                    });
                    $('table[data-toggle=table2]').bootstrapTable();
                    $('table[data-toggle=table3]').bootstrapTable();
                    $('table[data-toggle=table4]').bootstrapTable();
                    $('table[data-toggle=table5]').bootstrapTable();
                    $('table[data-toggle=table6]').bootstrapTable();

                }
            });
        }, 700);
        content = data;
    }).fail(function (msg) {
        content = msg.status === 403 ? "Forbidden" : "Error";
    }).always(function () {
        if (content === "Error") {
            toastr["error"](resource.exception.addError);
            return;
        }
        if (content === "Forbidden") {
            toastr["error"](resource.exception.addForbidden);
            return;
        }
    });
    return false;
});