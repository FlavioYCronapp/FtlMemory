app.controller('AfterLoginController', function ($scope) {
    $('body .fill').append(`<script src="/js/input.js"></script>`);

    app.config(
        function ($locationProvider) {
            $locationProvider.html5Mode(true);
        }
    );
});

app.controller('AfterHomeController', function ($scope) {
    $('body .fill').append(`<script src="/js/input.js"></script>`);

    app.config(
        function ($locationProvider) {
            $locationProvider.html5Mode(true);
        }
    );
});

app.controller('AfterPageController', function ($scope) {
    $('body .fill').append(`<script src="/js/input.js"></script>`);

    app.config(
        function ($locationProvider) {
            $locationProvider.html5Mode(true);
        }
    );

});

app.directive('memoryMenu', ['$compile', '$translate', function ($compile, $translate) {
    'use strict';
    const populateSubitems = (item) => {
        var subitem = item.menuItems;
        var templateSubitens = '';

        subitem.forEach((subitem) => {
            var securitySubitem = (subitem.security && subitem.security != null) ? ' cronapp-security="' + subitem.security + '" ' : '';
            var actionSubitem = (subitem.action && subitem.action != null) ? ' ng-click="' + subitem.action + '" ' : '';
            var hideSubitem = (subitem.hide && subitem.hide != null) ? ' ng-hide="' + subitem.hide + '" ' : '';
            var iconClassSubitem = (subitem.iconClass && subitem.iconClass != null) ? '<i class="' + subitem.iconClass + '" onclick="abrir()"></i>&nbsp;' : '';
            var titleSubitem = '<span></span>';
            var caretSubitem = (subitem.menuItems && Array.isArray(subitem.menuItems) && (subitem.menuItems.length > 0)) ? '<span class="caret submenu"></span>' : '';

            if (subitem.title) {
                titleSubitem = '<span>' + $translate.instant(subitem.title) + '</span>';
            }

            if (subitem.menuItems.length > 0) {
                templateSubitens = templateSubitens + '<li id="item-menu" class="dropdown-submenu">' + iconClassSubitem + '<a class="dropdown-item dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false" href="" onclick="abrir()"' + securitySubitem + actionSubitem + '>' + titleSubitem + caretSubitem + '</a>\
                  ' + populateItems(subitem.menuItems) + '\
                </li>';

            } else {
                templateSubitens = templateSubitens + '<li id="item-menu" class="dropdown-submenu">' + iconClassSubitem + '<a  role="button" aria-haspopup="true" aria-expanded="false" href="" onclick="abrir()" ' + securitySubitem + actionSubitem + '>' + titleSubitem + caretSubitem + '</a>\
                </li>';
            }
        });

        if (templateSubitens != '') {
            templateSubitens = '<ul class="dropdown-menu">' + templateSubitens + '</ul>';
        }

        return templateSubitens;
    };

    const populateItems = (items) => {
        var templateItens = '';

        if (items && items.length > 0 && Array.isArray(items)) {
            items.forEach(function (item) {

                var security = (item.security && item.security != null) ? ' cronapp-security="' + item.security + '" ' : '';
                var action = (item.action && item.action != null) ? ' ng-click="' + item.action + '" ' : '';
                var hide = (item.hide && item.hide != null) ? ' ng-hide="' + item.hide + '" ' : '';
                var iconClass = (item.iconClass && item.iconClass != null) ? '<i class="' + item.iconClass + '" onclick="abrir()"></i>&nbsp;' : '';
                var title = '<span></span>';
                var caret = (item.menuItems && Array.isArray(item.menuItems) && (item.menuItems.length > 0)) ? '<span class="caret submenu"></span>' : '';

                if (item.title) {
                    title = '<span>' + $translate.instant(item.title) + '</span>';
                }

                if (item.menuItems.length > 0) {
                    templateItens = templateItens + '<li id="item-menu" class="dropdown-submenu" ' + security + hide + '> ' + iconClass + '<a  href="" ' + action + ' class="dropdown-item dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" onclick="abrir()">' + title + caret + ' </a>' + populateSubitems(item) + '</li>';
                } else {
                    templateItens = templateItens + '<li id="item-menu" class="dropdown-submenu" ' + security + hide + '>' + iconClass + '<a  href="" ' + action + ' class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"  onclick="abrir()">' + title + caret + ' </a></li>';
                }

            });

            if (templateItens != '') {
                templateItens = '<ul class="dropdown-menu">' + templateItens + '</ul>';
            }
        }

        return templateItens;
    }
    return {
        restrict: 'A',
        populateMenu: function (menuOptions, isVertical) {
            var template = '';

            if (menuOptions && menuOptions != null && menuOptions.subMenuOptions && menuOptions.subMenuOptions != null && Array.isArray(menuOptions.subMenuOptions)) {

                menuOptions.subMenuOptions.forEach(function (menu) {

                    var security = (menu.security && menu.security != null) ? ' cronapp-security="' + menu.security + '" ' : '';
                    var action = (menu.action && menu.action != null) ? ' ng-click="' + menu.action + '" ' : '';
                    var caret = (menu.menuItems && Array.isArray(menu.menuItems) && (menu.menuItems.length > 0)) ? '<span class="caret"></span>' : '';
                    var hide = (menu.hide && menu.hide != null) ? ' ng-hide="' + menu.hide + '" ' : '';
                    var iconClass = (menu.iconClass && menu.iconClass != null) ? '<i class="' + menu.iconClass + '" onclick="abrir()"></i>&nbsp;' : '';
                    var title = '<span></span>'

                    if (menu.title) {
                        title = '<span>' + $translate.instant(menu.title) + '</span>';
                    }

                    template = template + '<li id="item-menu" class="dropdown nav-item ' + (isVertical ? 'col-md-12' : '') + '"' + security + hide + '>' + iconClass + '<a href="" ' + action + ' class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" >' + title + caret + '</a> ' + populateItems(menu.menuItems) + '</li>';

                })
            }

            return template;
        },
        link: function (scope, element, attrs) {

            setTimeout(() => {
                $translate.onReady(() => {
                    //Somente fica na vertical se for o menu principal da IDE (E estiver configurado para isso)
                    let isVertical = element.closest('.crn-navigator-vertical').length;
                    isVertical = 1;

                    var TEMPLATE_MAIN = '<ul  class="nav navbar-nav ' + (isVertical ? 'col-md-12 padding-0' : '') + ' " style="float:left"></ul>';
                    var options = {};
                    try {
                        options = JSON.parse(attrs.options);
                    } catch (e) {
                        console.log('CronDynamicMenu: Invalid configuration!')
                    }

                    var main = $(TEMPLATE_MAIN);
                    main.attr('id', attrs.id);

                    var menus = this.populateMenu(options, isVertical);
                    main.append(menus);
                    if (isVertical) {
                        main.append($('#navbar2 li:first').addClass('col-md-12 padding-0'));
                    }

                    var newElement = angular.element(main);
                    element.html('');
                    element.append(main);
                    element.attr('id', null);
                    $compile(newElement)(scope);

                    var multilevelAction = attrs.multilevelAction;

                    if (multilevelAction === 'hover') {
                        $('.dropdown-menu .dropdown-submenu').on('mouseover', function () {
                            var subMenu = $(this).children('ul.dropdown-menu');
                            subMenu.addClass('displayBlock');
                        });

                        $('.dropdown-menu .dropdown-submenu').on('mouseout', function () {
                            var subMenu = $(this).children('ul.dropdown-menu');
                            subMenu.removeClass('displayBlock');
                        });
                    }
                    if (multilevelAction === 'click') {
                        $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
                            if (!$(this).next().hasClass('show')) {
                                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
                            }
                            var $subMenu = $(this).next(".dropdown-menu");
                            $subMenu.toggleClass('show');
                            $(this).parents('li.nav-item.dropdown').on('hidden.bs.dropdown', function (e) {
                                $('.dropdown-submenu .show').removeClass("show");
                            });
                            return false;
                        });
                    }

                });
            }, 800);

        }
    }
}])