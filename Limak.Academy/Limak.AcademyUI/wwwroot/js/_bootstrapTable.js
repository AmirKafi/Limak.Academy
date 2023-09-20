
//#region Recourse
resource = {
    message: {
        success: "ذخیره با موفقیت انجام شد",
        deleteError: "متاسفانه حذف با خطا مواجه شد",
        deleteSuccess: "حذف با موفقیت انجام شد",
        deleteFileQuestion: "آیا واقعا میخواهید این فایل را حذف کنید؟",
        deleteFilesQuestion: "آیا واقعا میخواهید همه فایل ها را حذف کنید؟",
        deleteQuestion: "آیا واقعا می خواهید این رکورد را حذف کنید؟",
        saveSuccess: "ذخیره با موفقیت انجام شد",
        deleteSuccess: "حذف با موفقیت انجام شد",
        recordNotFound: "هیچ رکوردی یافت نشد",
        notSelected: "هیچ موردی انتخاب نشده است",
        deleteQuestion: function (len) {
            return "آیا واقعا می خواهید موارد انتخاب شده (" + len + " رکورد) را حذف کنید؟";
        },
        ConfirmQuestion: "آیا واقعا میخواهید این مورد را تایید کنید ؟",
        UnConfirmQuestion: "آیا واقعا میخاهید این مورد را لغو تایید کنید ؟",
        ConfirmProcessQuestion: "آیا از انجام این عملیات اطمینان دارید ؟"
    },
    exception: {
        forbidden: "شما دسترسی لازم را ندارید",
        addForbidden: "شما دسترسی لازم برای درج را ندارید",
        editForbidden: "شما دسترسی لازم برای ویرایش را ندارید",
        detailForbidden: "شما دسترسی لازم برای نمایش جزئیات را ندارید",
        deleteForbidden: "شما دسترسی لازم برای حذف را ندارید",
        addError: "متاسفانه درج با خطا مواجه شد",
        editError: "متاسفانه ویرایش با خطا مواجه شد",
        detailError: "متاسفانه نمایش جزئیات با خطا مواجه شد",
        deleteError: "متاسفانه حذف با خطا مواجه شد",
        saveError: "متاسفانه ذخیره با خطا مواجه شد",
        loadError: "متاسفانه بارگذاری اطلاعات با خطا مواجه شد",
        serverError: "متاسفانه خطایی رخ داده است"
    },
    validation: {
        isRequired: "این فیلد اجباری است"
    },
    selectionForm: {
        save: "ذخیره",
        cancel: "انصراف"
    },
    dialog: {
        save: "ذخیره",
        cancel: "انصراف",
        close: "بستن",
        new: "جدید"
    },
    info: {
        lat: 34.6541675,
        lng: 50.8705117
    }
};

//#endregion

window.$table = $('table[data-toggle=table]');

window.editor;

selections = [];

window.responseHandler = function (res) {
    var idField, pageNumber, pageSize, tableOptions;
    tableOptions = window.$table.bootstrapTable('getOptions');
    idField = tableOptions.idField;
    pageNumber = tableOptions.pageNumber - 1;
    pageSize = tableOptions.pageSize;
    $.each(res.data, function (i, row) {
        row.state = $.inArray(row[idField], selections) !== -1;
        row.rowNumber = (pageNumber * pageSize) + (1 + i);
    });
    return res;
};

window.ajaxRequest = function (params) {
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
        }).fail(function (msg) {
            toastr["error"](msg.status === 403 ? resource.exception.forbidden : resource.exception.serverError);
        }).always(function () { });
    }, 313);
};


window.getIdSelections = function () {
    var idField, tableOptions;
    tableOptions = window.$table.bootstrapTable('getOptions');
    idField = tableOptions.idField;
    return $.map(window.$table.bootstrapTable('getSelections'), function (row) {

        return row[idField];
    });
};

$(document).on("click", ".btn.createItem[data-url]", function (e) {
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
            if ($createItem.hasClass("btn-shortcut")) {
                title = "افزودن " + $createItem.closest(".form-group").find("label.control-label").text();
            } else {
                name = new Date().getTime();
                title = $("<div class='t" + name + "'/>").html($createItem.html());
                $("body").append(title);
                $(".t" + name + " .material-icons, .t" + name + " .glyphicon").remove();
                title = title.text().trim() + " " + window.document.title.replace("لیست ", "");
                $(".t" + name).remove();
            }
            $createItem.dialog({
                title: (_ref1 = $createItem.data("dialogTitle")) != null && _ref1 != "undefined" ? _ref1 : title,
                mode: (_ref2 = $createItem.data("dialogMode")) != null ? _ref2 : "large",
                destroyAfterClose: true,
                content: content,
                onSaveClick: function (e) {
                    var $btnSave, form;
                    $btnSave = $(e);
                    var editor = window.editor;
                    if (editor != undefined)
                        $(".ckeditor").val(editor.getData());


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

                    ClassicEditor
                        .create(document.querySelector('.ckeditor'), {
                            language: 'fa',
                        })
                        .then(editor => {
                            window.editor = editor;
                        })
                        .catch(error => {
                            console.error(error);
                        });

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

$(document).on("click", "#toolbar .btn.editItem[data-url]", function (e) {
    var $editItem, content, ids, params, url, _ref;
    e.preventDefault();
    $editItem = $(this);
    ids = window.getIdSelections();
    autoDestroyToastr();
    if ((ids != null ? ids.length : void 0) === 0) {
        toastr["warning"](resource.message.notSelected);
        return false;
    }
    $.fn.dialog.defaults = $.extend({}, $.fn.dialog.defaults, {
        saveBtnLabel: "ذخیره",
        cancelBtnLabel: "انصراف",
        closeLabel: resource.dialog.close
    });
    content = "";
    $editItem.tooltip("hide");
    url = $editItem.data("url") + "?id=" + ids[0];
    $.ajax({
        url: url,
        type: "GET",
        cache: false
    }).done(function (data, textStatus, jqXHR) {

        if ((data != null ? data.length : void 0) === 0) {
            toastr["error"]((_ref1 = data.message) != null ? _ref1 : resource.exception.editError);
            return;
        }


        content = data;
        setTimeout(function () {
            var name, title, _ref1, _ref2;
            name = new Date().getTime();
            title = $("<div class='t" + name + "'/>").html($editItem.html());
            $("body").append(title);
            $(".t" + name + " .material-icons, .t" + name + " .glyphicon").remove();
            title = title.text().trim();
            $(".t" + name).remove();
            $editItem.dialog({
                title: (_ref1 = $editItem.data("dialogTitle")) != null ? _ref1 : title + " " + window.document.title.replace("لیست ", ""),
                mode: (_ref2 = $editItem.data("dialogMode")) != null ? _ref2 : "large",
                destroyAfterClose: true,
                content: content,
                onSaveClick: function (e) {
                    var $btnSave, form;
                    $btnSave = $(e);
                    form = $btnSave.parent().prev().find("form");

                    var editor = window.editor;
                    if (editor != undefined)
                        $(".ckeditor").val(editor.getData());

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
                            $editItem.data("dialog").hide($editItem.data("dialogId"));
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

                    ClassicEditor
                        .create(document.querySelector('.ckeditor'), {
                            language: 'fa',
                        })
                        .then(editor => {
                            window.editor = editor;
                        })
                        .catch(error => {
                            console.error(error);
                        });

                    var editor = window.editor;
                    if (editor != undefined)
                        editor.setData($(".ckeditor").val());

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
                            showCancel: false,
                            uploadAsync: true,
                            allowedFileExtensions: ["jpg", "png", "pdf", "xlsx", "docx"],
                            fileActionSettings: {
                                showDrag: true
                            }
                        });
                        fileName = $("#" + ((_ref = $(imageFile).data('fileName')) != null ? _ref : 'FileName')).val();
                        var filePath = $(imageFile).data('filePath');
                        if (fileName === "undefined" || fileName === void 0 || fileName === "") {
                            fileName = [];
                        }
                        if (fileName.length > 0) {
                            imagePreview = $("" + ($(imageFile).data('previewTarget')));
                            imageThumbnails = imagePreview.find(".file-preview-thumbnails");
                            imagePreview.removeAttr("hidden");
                            imageThumbnails.append("<div class='file-preview-frame krajee-default kv-preview-thumb' data-fileindex='" + index + "' data-template='image'> <div class='kv-file-content'> <img src='" + filePath + "' class='kv-preview-data file-preview-image' style='width:auto;height:160px;' /> </div> <div> <div class='file-footer-buttons'> <button type='button' data-id='" + fileName + "' class='kv-file-remove btn btn-xs btn-default'><i class='glyphicon glyphicon-trash text-danger'></i></button> </div> <div class='clearfix'></div> </div> </div>");
                            $(document).off("click", "" + ($(imageFile).data('previewTarget')) + " .close.fileinput-remove");
                            $(document).on("click", "" + ($(imageFile).data('previewTarget')) + " .close.fileinput-remove", function () {
                                bootbox.confirm("آیا واقعا میخواهید همه فایل ها را حذف کنید؟", function (result) {
                                    var _ref1;
                                    if (result === true) {
                                        $("#" + ((_ref1 = $(imageFile).data('fileName')) != null ? _ref1 : 'FileName')).val("");
                                        imageThumbnails.empty();
                                        return imagePreview.attr("hidden");
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
                                            return imagePreview.attr("hidden");
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
    }).fail(function (msg) {
        content = msg.statusText;
        if (msg.status === 403) {
            toastr["error"](resource.exception.editForbidden);
            return;
        }
        if (content === "error") {
            toastr["error"](resource.exception.editError);
            return;
        }
    }).always(function () {
        if (content === "Error") {
            toastr["error"](resource.exception.editError);
            return;
        }
        if (content === "Forbidden") {
            toastr["error"](resource.exception.editForbidden);
            return;
        }
    });
    return false;
});


$(document).on("click", "#toolbar .btn.deleteItem[data-url]", function () {
    var $removeItem, deleteDialog, ids;
    $removeItem = $(this);
    ids = window.getIdSelections();
    autoDestroyToastr();
    if ((ids != null ? ids.length : void 0) === 0) {
        toastr["warning"](resource.message.notSelected);
        return false;
    }
    url = $removeItem.data("url") + "?id=" + ids[0];
    content = "<p>آیا از حذف این آیتم مطمئن هستید؟</p>";
    setTimeout(function () {
        var name, title, _ref1, _ref2;
        name = new Date().getTime();
        title = $("<div class='t" + name + "'/>").html($removeItem.html());
        $("body").append(title);
        $(".t" + name + " .material-icons, .t" + name + " .glyphicon").remove();
        title = title.text().trim();
        $(".t" + name).remove();
        $removeItem.dialog({
            title: (_ref1 = $removeItem.data("dialogTitle")) != null ? _ref1 : title + " " + window.document.title.replace("لیست ", ""),
            mode: (_ref2 = $removeItem.data("dialogMode")) != null ? _ref2 : "large",
            destroyAfterClose: true,
            content: content,
            onSaveClick: function (e) {
                $.ajax({
                    url: $removeItem.data("url"),
                    type: "POST",
                    cache: false,
                    data: {
                        ids: ids,
                        "__RequestVerificationToken": $("input[name=__RequestVerificationToken]").val()
                    }
                }).done(function (data, textStatus, jqXHR) {

                    var idField, tableOptions, _ref;
                    if (data.resultStatus !== 1) {
                        toastr["error"]((_ref = data.message) != null ? _ref : resource.exception.deleteError);
                        return;
                    }
                    toastr["success"](resource.message.deleteSuccess);
                    tableOptions = window.$table.bootstrapTable('getOptions');
                    idField = tableOptions.idField;
                    $removeItem.data("dialog").hide($removeItem.data("dialogId"));
                    window.$table.bootstrapTable('remove', {
                        field: idField,
                        values: ids
                    });
                    window.$table.bootstrapTable('refresh', {
                        silent: true,
                        pageNumber: 1
                    });

                }).fail(function (msg) {
                    toastr["error"](msg.status === 403 ? resource.exception.deleteForbidden : resource.exception.deleteError);
                }).always(function () { });
            }
        });
    }, 700);
    return false;
});

$(document).on("click", ".btn.btn-save", function () {
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

$(document).on("click", ".modalRaw[data-url]", function (e) {
    var $this, additionalParams, content, params, url, _ref;
    e.preventDefault();
    $this = $(this);
    $.fn.dialog.defaults = $.extend({}, $.fn.dialog.defaults, {
        saveBtnLabel: resource.dialog.save,
        cancelBtnLabel: resource.dialog.cancel,
        closeLabel: resource.dialog.close
    });

    content = "";
    $this.tooltip("hide");
    url = $this.data("url");
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
            var name, title, _ref1, _ref2;
            $this.dialog({
                title: "",
                mode: (_ref2 = $this.data("dialogMode")) != null ? _ref2 : "large",
                destroyAfterClose: true,
                showFooter: false,
                showHeader: false,
                content: content,
                onBeforeOpen: function () {
                    var persianCalendar;
                    $('form').validateBootstrap(true);
                    window.inputmasks();
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

$(document).on("click", ".refresh", function (e) {
    window.$table.bootstrapTable("refresh", {
        silent: true,
        pageNumber: 1
    });
});