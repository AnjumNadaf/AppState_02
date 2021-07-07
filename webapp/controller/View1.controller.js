sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("appstate02.controller.View1", {
			onInit: function () {
				var startupParams = this.getOwnerComponent().getComponentData().startupParameters; // get Startup params from Owner Component
				this.getView().byId("input").setValue(startupParams.name[0]);
			   
				sap.m.MessageToast.show(startupParams.name[0]);
			},

			onPress: function () {
				var xnavService = sap.ushell.Container.getService("CrossApplicationNavigation");
				var key = /(?:sap-xapp-state=)([^&=]+)/.exec(xnavService.hrefForExternal())[1];
				var href = (xnavService && xnavService.hrefForExternal({
					target: {
						semanticObject: "zappState001",
						action: "Display"
					},
					params: {
						"App_Key": key
					}
				}) || "");
	
				xnavService.toExternal({
					target: {
						shellHash: href
					}
				});
			}
		});
	});
