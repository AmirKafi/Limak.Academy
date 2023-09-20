
toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": true,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut",
    "tapToDismiss": true
};

autoDestroyToastr = function (tapToDismiss) {
    toastr.options.tapToDismiss = tapToDismiss === void 0 ? true : tapToDismiss;
    toastr.options.preventDuplicates = false;
    toastr.options.closeButton = false;
    toastr.options.timeOut = "5000";
    return toastr.options.extendedTimeOut = "1000";
};

manuallyDestroyToastr = function (tapToDismiss) {
    toastr.options.tapToDismiss = tapToDismiss === void 0 ? true : tapToDismiss;
    toastr.options.preventDuplicates = false;
    toastr.options.closeButton = true;
    toastr.options.timeOut = "0";
    return toastr.options.extendedTimeOut = "0";
};

window.bootbox = function (size) {
    bootbox.setDefaults({
        locale: "fa",
        size: size != null ? size : "small"
    });
};

$(document).on("keyup", "input[type=text].price", function () {
    $(this).val(window.separateThreeDigit($(this).val()));
});

window.separateThreeDigit = function (value) {
    if (value === null)
        return null;
    if (value === 0)
        return 0;

    return parseFloat(value).toFixed(0).toString()
        .replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

window.inputmasks = function () {
    $(".nationalityCode").inputmask({
        "mask": "9999999999",
        clearIncomplete: true
    });
    $(".phone").inputmask({
        "mask": "09999999999",
        clearIncomplete: true
    });
    $(".mobile").inputmask({
        "mask": "09999999999",
        clearIncomplete: true
    });
    $(".form").inputmask({
        "mask": "999",
        clearIncomplete: true
    });

    $(".formAction").inputmask({
        "mask": "99",
        clearIncomplete: true
    });
    $(".formState").inputmask({
        "mask": "9999",
        clearIncomplete: true
    });
    $(".threeDigit").inputmask({
        "mask": "999",
        "min": 100,
        "max": 999,
        clearIncomplete: true
    });

    $(".shamsi").inputmask("shamsi");

    $(".email").inputmask("email", {
        clearIncomplete: true
    });
    $(".numberOnly").inputmask("Regex", {
        regex: "[0-9]*"
    });

    $(".price").inputmask("Regex", {
        regex: "[0-9-,]*",
        scale: 3
    });

    $(".captchaField").inputmask("Regex", {
        regex: "[0-9]*"
    });

    $(".numberDash").inputmask("Regex", {
        regex: "[0-9\-]*"
    });
    $(".numberDot").inputmask("Regex", {
        regex: "[0-9-.]*"
    });

    $(".letterOnly").inputmask("Regex", {
        regex: "[a-zA-Z0-9]*"
    });
    $(".onlyEngLetter").inputmask("Regex", {
        regex: "[a-zA-Z]*"
    });
    $(".letterDash").inputmask("Regex", {
        regex: "[a-zA-Z\-]*"
    });
    $(".letterPersianOnly").inputmask({
        "mask": "l{1}",
        definitions: {
            "l": {
                validator: "[\u0627-\u06CC]"
            }
        }
    });

    $(".dangerCode").inputmask({
        mask: "Hs{3}",
        definitions: { 's': { validator: "[0-9-.]" } }
    });

    $(".unitedNation").inputmask("Regex", {
        regex: "[0-9][0-9.]*[0-9]"
    });

    $(".webSiteAllowedLetters").inputmask("Regex", {
        regex: "[a-zA-Z0-9-.-@-/]*"
    });



    $('.plateCode').on('click',
        function () {
            var value = $(this).val();
            if ($(this).getCursorPosition() > 0) {
                var char = value[$(this).getCursorPosition() - 1];
                if (char === undefined || char.match(/[a-zA-Z]/i))
                    $(this).selectRange(0);
            }
        });

    $(".plateCode").inputmask({

        "mask": "9{2} l{1} 9{3} \u0627\u06CC\u0631\u0627\u0646 9{2}",
        showMaskOnHover: false,
        definitions: {
            "l": {
                validator: "[\u0627-\u06CC]"
            }
        }
    });

    $(".plateCodeLtr").inputmask({

        "mask": "9{2} \u0627\u06CC\u0631\u0627\u0646 9{3} l{1} 9{2} ",
        showMaskOnHover: false,
        //removeMaskOnSubmit: true,
        definitions: {
            "l": {
                validator: "[\u0627-\u06CC]"
            }
        }
    });


    $(".plateCodeRegister").inputmask({
        "mask": "9{2} l{1} 9{3} \u0627\u06CC\u0631\u0627\u0646 9{2}",
        clearIncomplete: true,
        definitions: {
            "l": {
                validator: "[\u0627-\u06CC]"
            }

        }
    });

    $(".integer").inputmask("integer", {
        allowMinus: false,
        allowPlus: false,
        rightAlign: false
    });
    $(".integer.cost").inputmask("integer", {
        allowMinus: true,
        allowPlus: false,
        rightAlign: false,
        autoGroup: true,
        groupSeparator: ","
    });

    $(".decimal").inputmask("decimal", {
        digits: 2,
        allowMinus: false,
        allowPlus: false,
        rightAlign: false
    });

    $(".time").inputmask("hh:mm", {
        clearIncomplete: true
    });

    $(".year").inputmask({
        "mask": "9999",
        clearIncomplete: true
    });
};

window.inputmasks();

$(document).on("focus", "input[type=text].letterOnly", function () {
    var $this;
    $this = $(this);
    if (true === $this.data("alertShown")) {
        return;
    }
    autoDestroyToastr();

    toastr["info"]("فقط حروف انگلیسی / اعداد مجاز است");
    $this.data("alertShown", true);
});

$(document).on("focus", "input[type=text].email", function () {
    var $this;
    $this = $(this);
    if (true === $this.data("alertShown")) {
        return;
    }
    autoDestroyToastr();

    toastr["info"]("فقط حروف انگلیسی / اعداد مجاز است");
    $this.data("alertShown", true);
});

$(document).on("focus", "input[type=text].separate", function () {
    var $this;
    $this = $(this);
    if (true === $this.data("alertShown")) {
        return;
    }
    autoDestroyToastr();

    toastr["info"]("مقادیر مورد نظر خود را با ',' جدا کنید");
    $this.data("alertShown", true);
});

$(document).on("focus", "input[type=text].onlyEngLetter", function () {
    var $this;
    $this = $(this);
    if (true === $this.data("alertShown")) {
        return;
    }
    autoDestroyToastr();

    toastr["info"]("فقط حروف انگلیسی مجاز است");
    $this.data("alertShown", true);
});

window.gotoError = function () {
    $("body").delay(100).animate({
        scrollTop: $(".form-group.has-error:first").offset().top - 15 - $("header").height()
    }, {
        duration: 500
    });
};

window.gotoErrorModal = function () {
    $(".dialog-modal.dialog--open").delay(500).animate({
        scrollTop: $(".dialog-modal.dialog--open").scrollTop() + $(".form-group.has-error:first").offset().top - 15
    }, {
        duration: 500
    });
};

$(document).ajaxStart(function () {
    $("#loading").show();
});

$(document).ajaxStop(function () {
    $("#loading").hide();
});

window.showImageFormatter = function (filePath, row) {

    if (row.fileName === null || row.fileName === "")
        return "-";
    else
        return "<button class='btn btn-sm btn-dark m-1 showImage' data-path='" + filePath + "'><span class='glyphicon glyphicon-eye-open'></span> مشاهده</button> ";
}
window.showImageEvents = {
    'click button.showImage': function () {
        window.open($(this).data("path"), '_blank');
    }
}

window.showImgFormatter = function (picturePath, row) {
    return "<div class='tb_course_thumb'><img class='img-fluid' src='" + picturePath + "'></div>";
}
