var formattedTypes = ["datetime", "datetime-local", "date", "time", "time-local", "month", "number", "money", "money-decimal", "integer", "week", "tel", "text", "string", "password"];

$(document).ready(function () {

    $("input").on('blur', function (event) {
        var myInput = event.target;
        let dataComponent = myInput.parentElement.parentElement.parentElement.attributes["data-component"];

        if (formattedTypes.filter(e => e === myInput.type).length > 0) {
            let myLabel = $(`label[for=${myInput.id}]`);

            if ($(`#${myInput.id}`).hasClass('cronMultiSelect')) {
                if ($(`#${myInput.id}_taglist`).length) {
                    if ($(`#${myInput.id}_taglist`) = !null && $(`#${myInput.id}_taglist`).children("li").length) {
                        myLabel.addClass("top-label");
                    } else {
                        myLabel.removeClass("top-label");
                    }
                }
                else {
                    if ($(`#${myInput.id}`).hasClass('ng-empty')) {
                        myLabel.removeClass("top-label");
                    } else {
                        myLabel.addClass("top-label");
                    }
                }

            } else if ($(`#${myInput.id}`).hasClass('cronSelect')) {
                if (myInput.value != null && myInput.value != undefined && myInput.value != "") {
                    myLabel.addClass("top-label");
                    $(myInput)[0].parentElement.classList.add("change-height");
                } else {
                    myLabel.removeClass("top-label");
                    $(myInput)[0].parentElement.classList.remove("change-height");
                }
            } else {
                if (myInput.value != null && myInput.value != undefined && myInput.value != "") {
                    myLabel.addClass("top-label");
                } else {
                    myLabel.removeClass("top-label");
                }
            }

        }

        if (dataComponent) {
            if (dataComponent.value === "crn-enterprise-combobox") {
                let myLabel = $(`label[for=${myInput.id}]`);

                if (myInput.value != null && myInput.value != undefined && myInput.value != "") {
                    myLabel.addClass("top-label");
                    $(myInput)[0].parentElement.classList.add("change-height");
                } else {
                    myLabel.removeClass("top-label");
                    $(myInput)[0].parentElement.classList.remove("change-height");
                }

            } else if (dataComponent.value === "crn-datepicker") {
                let myLabelDate = myInput.parentElement.parentElement.children[0];

                if (myInput.value != null && myInput.value != undefined && myInput.value != "") {
                    myLabelDate.classList.add("top-label");
                } else {
                    myLabelDate.classList.remove("top-label");
                }
            }
        }

        let inputCronSelect = myInput.classList[0] == "cron-select-offscreen";
        if (inputCronSelect) {
            let myLabelDate = myInput.parentElement.children[0];
            let formGroup = myInput.parentElement;
            $(formGroup).addClass("dynamic-combobox-memory");
            $(formGroup).removeClass("form-group");

            if (myInput.value != null && myInput.value != undefined && myInput.value != "") {
                myLabelDate.classList.add("top-label");
                formGroup.parentElement.classList.add("change-height");

            } else {
                myLabelDate.classList.remove("top-label");
                formGroup.parentElement.classList.remove("change-height");
            }
        }

    });

    $("textarea").on('blur', function (event) {
        var myInput = event.target;
        let myLabel = $(`label[for=${myInput.id}]`);
        myLabel.removeClass("top-label");
    });

    $('input[type="text"]').removeAttr('placeholder');

});

var observeDOM = (function () {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    return function (obj, callback) {
        if (!obj || obj.nodeType !== 1) return;

        if (MutationObserver) {
            var mutationObserver = new MutationObserver(callback);
            mutationObserver.observe(obj, { childList: true, subtree: true });
            return mutationObserver
        }

        else if (window.addEventListener) {
            obj.addEventListener('DOMNodeInserted', callback, false);
            obj.addEventListener('DOMNodeRemoved', callback, false);
        }
    }
})();

var body = document.querySelector('body');

observeDOM(body, function (m) {

    $("input").each(function (index, myInput) {
        if (formattedTypes.filter(e => e === myInput.type).length > 0) {
            try {
                let myLabel = $(`label[for=${myInput.id}]`);
                let dataComponent = myInput.parentElement.parentElement.parentElement.attributes["data-component"];

                if ($(`#${myInput.id}`).hasClass('cronMultiSelect')) {

                    if ($(`#${myInput.id}_taglist`).length) {
                        if ($(`#${myInput.id}_taglist`).children("li").length) {
                            myLabel.addClass("top-label");
                            $(myInput)[0].parentElement.classList.add("change-height");
                        } else {
                            myLabel.removeClass("top-label");
                            $(myInput)[0].parentElement.classList.remove("change-height");
                        }
                    }
                    else {
                        if ($(`#${myInput.id}`).hasClass('ng-empty')) {
                            myLabel.removeClass("top-label");
                        } else {
                            myLabel.addClass("top-label");
                        }
                    }

                } else if ($(`#${myInput.id}`).hasClass('cronSelect')) {
                    if (myInput.value != null && myInput.value != undefined && myInput.value != "") {
                        myLabel.addClass("top-label");
                        $(myInput)[0].parentElement.classList.add("change-height");
                    } else {
                        myLabel.removeClass("top-label");
                        $(myInput)[0].parentElement.classList.remove("change-height");
                    }

                } else if (dataComponent) {
                    if (dataComponent.value === "crn-enterprise-combobox") {
                        if (myInput.value != null && myInput.value != undefined && myInput.value != "") {
                            myLabel.addClass("top-label");
                            $(myInput)[0].parentElement.classList.add("change-height");
                        } else {
                            myLabel.removeClass("top-label");
                            $(myInput)[0].parentElement.classList.remove("change-height");
                        }

                    } else if (dataComponent.value === "crn-datepicker") {
                        let myLabelDate = myInput.parentElement.parentElement.children[0];

                        if (myInput.value != null && myInput.value != undefined && myInput.value != "") {
                            myLabelDate.classList.add("top-label");
                        } else {
                            myLabelDate.classList.remove("top-label");
                        }
                    }
                } else {

                    if (myInput.value != null && myInput.value != undefined && myInput.value != "") {
                        myLabel.addClass("top-label");
                    } else {
                        myLabel.removeClass("top-label");
                    }
                }

            } catch (err) {

            }
        }
    });

    $('.form-group').each(function (index, myDiv) {
        try {

            var attImg = myDiv.attributes["data-component"] != null ? myDiv.attributes["data-component"].value : '';
            var attImgParent = myDiv.parentElement.attributes["data-component"] != null ? myDiv.parentElement.attributes["data-component"].value : '';
            if (attImg == 'crn-dynamic-image' || attImgParent == 'crn-dynamic-image' || attImgParent == 'crn-dynamic-file') {
                myDiv.classList.remove("form-group");
                myDiv.classList.add("form-group-checkbox");
            }

            var attCheckbox = myDiv.parentElement != null && myDiv.parentElement.attributes["data-component"] != null ? myDiv.parentElement.attributes["data-component"].value : '';
            if (attCheckbox == 'crn-enterprise-checkbox') {
                myDiv.classList.remove("form-group");
                myDiv.classList.add("form-group-checkbox");
            }

            var textarea = myDiv.children[1] != null ? myDiv.children[1].localName : '';
            if (textarea === 'textarea') {
                myDiv.classList.remove('form-group');
                myDiv.classList.add('textarea-form-group');
            }

            var crnSlider = myDiv.parentElement.attributes["data-component"] != null ? myDiv.parentElement.attributes["data-component"].value : null;
            if (crnSlider === 'crn-slider') {
                myDiv.classList.remove('form-group');
                myDiv.classList.add('crn-slider-form-group');
            }

            var divParent = myDiv.parentElement != null && myDiv.parentElement.attributes["data-component"] != null ? myDiv.parentElement.attributes["data-component"].value : '';

            if (divParent == 'crn-enterprise-dynamic-combobox') {
                let myLabelDate = myDiv.children[0];
                myDiv.classList.add("dynamic-combobox-memory");
                myDiv.classList.remove("form-group");
                let myInput = myDiv.children[1].children[0].children[1];

                if (myInput.value != null && myInput.value != undefined && myInput.value != "") {
                    myLabelDate.classList.add("top-label");
                    myDiv.classList.add("change-height");

                } else {
                    myLabelDate.classList.remove("top-label");
                    myDiv.classList.remove("change-height");
                }
            }

            if (divParent == 'crn-textinputbutton') {
                let option = 0;
                let myLabelDate = '';
                let myInput = '';

                if (myDiv.children[0] && myDiv.children[0].localName == 'label') {
                    myLabelDate = myDiv.children[0];
                } else if (myDiv.localName == 'label') {
                    myLabelDate = myDiv;
                    option = 1;
                }

                if (myDiv.children[1] && myDiv.children[1].children[0].localName == 'input') {
                    myInput = myDiv.children[1].children[0];
                } else if (myDiv.parentElement.children[1].children[0].children[0].localName == 'input') {
                    myInput = myDiv.parentElement.children[1].children[0].children[0];
                    option = 1;
                }
                myLabelDate.classList.remove("form-group");

                if (option = 1) {
                    myDiv.parentElement.classList.add('crn-inputbutton-memory');
                }

                if (myInput.value != null && myInput.value != undefined && myInput.value != "") {
                    if (option = 1) {
                        myDiv.parentElement.children[1].classList.remove('form-group')
                    }
                    myLabelDate.classList.add("top-label");
                } else {
                    if (option = 1) {
                        myDiv.parentElement.children[1].classList.remove('form-group');
                        myDiv.parentElement.children[1].classList.add('crn-inputbutton-group');
                    }
                    myLabelDate.classList.remove("top-label");
                }
            }

            var divParentSecondary = myDiv.parentElement.parentElement != null && myDiv.parentElement.parentElement.attributes["data-component"] != null ? myDiv.parentElement.parentElement.attributes["data-component"].value : '';
            if (divParentSecondary == 'crn-textinputicon') {

                let myLabelDate = myDiv;
                myLabelDate.classList.remove("form-group");
                myDiv.parentElement.classList.add('crn-textinput-icon')

                let myInput = myDiv.parentElement.children[1].children[1];

                if (myInput.value != null && myInput.value != undefined && myInput.value != "") {
                    myLabelDate.classList.add("top-label");

                } else {
                    myLabelDate.classList.remove("top-label");
                }
            }


        } catch (err) { }

    });

    $('input').removeAttr('placeholder');

});