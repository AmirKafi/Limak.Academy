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

