(function () {
  'use strict';

  this.cronapi = this.cronapi || {};

  /**
  * @categoryName Memory
  */
  this.cronapi.memory = this.cronapi.memory || {};

  /**
   * @type function
   * @name {{changeValueStatus}}
   * @description Bloco para alterar o campo de texto do componente Status (Memory)
   * @multilayer false
   * @param {ObjectType.STRING} idStatus {{statusIdParamDescription}}
   * @param {ObjectType.STRING} action {{statusActionParamDescription}}
   */
  this.cronapi.memory.changeValueStatus = function (/** @type {ObjectType.STRING} @blockType ids_from_screen*/ idStatus, /*@blockType util_dropdown @keys deferido|indeferido|andamento|cancelado @values {{deferido}}|{{indeferido}}|{{andamento}}|{{cancelado}} */ action) {

    let campoJs = document.getElementById(idStatus);
    let campo = campoJs.children[0];

    campo.classList.remove('bl-status-deferido', 'bl-status-indeferido', 'bl-status-andamento', 'bl-status-cancelado');

    let classStatus = 'bl-status-' + action;
    campo.classList.value = classStatus;
    campo.attributes["bl-status"].value = classStatus;

    campo.innerHTML = this.cronapi.$translate.instant(`${action}`);
  };

  /**
   * @type function
   * @name {{modalCancel}}
   * @description Modal de confirmação para cancelar inserção ou edição de dados (Memory)
   * @param {ObjectType.OBJECT} datasource {{datasource}}
   */
  this.cronapi.memory.modalCancel = function (/** @type {ObjectType.OBJECT} @blockType datasource_from_screen*/ datasource) {

    this.cronapi.notification.confirmDialogAlert('warning', this.cronapi.i18n.translate("cancelItem", []), '', [

      this.cronapi.notification.buttonConfirmDialogAlert('false', this.cronapi.i18n.translate("no", []), async function () {
      }.bind(this)),

      this.cronapi.notification.buttonConfirmDialogAlert('true', this.cronapi.i18n.translate("yes", []), async function () {
        datasource.cancel()
      }.bind(this))
    ]);

  };

  /**
   * @type function
   * @name {{modalDelete}}
   * @description Modal de confirmação para excluir dado (Memory)
   * @param {ObjectType.OBJECT} datasource {{datasource}}
   */
  this.cronapi.memory.modalDelete = function (/** @type {ObjectType.OBJECT} @blockType datasource_from_screen*/ datasource) {

    this.cronapi.notification.confirmDialogAlert('warning', this.cronapi.i18n.translate("deleteItem", []), '', [

      this.cronapi.notification.buttonConfirmDialogAlert('false', this.cronapi.i18n.translate("no", []), async function () { }.bind(this)),

      this.cronapi.notification.buttonConfirmDialogAlert('true', this.cronapi.i18n.translate("yes", []), async function () {
        datasource.remove()
      }.bind(this))

    ]);
  };

  /**
   * @type function
   * @name {{sucessNotification}}
   * @description Notificação de sucesso (Memory)
   * @param {ObjectType.STRING} message {{message}}
   */
   this.cronapi.memory.sucessNotification = function (/** @type {ObjectType.STRING} */  message) {
    this.cronapi.notification.customNotify('success', message, 'fade', 'top', 'right', 'true');    
  };

  /**
   * @type function
   * @name {{errorNotification}}
   * @description Notificação de erro (Memory)
   * @param {ObjectType.STRING} message {{message}}
   */
   this.cronapi.memory.errorNotification = function (/** @type {ObjectType.STRING} */  message) {
    this.cronapi.notification.customNotify('error', message, 'fade', 'top', 'right', 'true');
  };

}).bind(window)();