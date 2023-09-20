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

