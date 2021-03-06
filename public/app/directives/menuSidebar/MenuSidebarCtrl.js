(function() {
  angular.module('dashboard').controller('MenuSidebarCtrl', ['$scope', function($scope) {

    var vm = this;

    vm.menuItens = [
      {
        "icon": "dashboard",
        "label": "Dashboard",
        "href": "/",
        "hasSubmenu": false,
        "submenu": []
      },
      {
        "icon": "supervisor_account",
        "label": "Consultores",
        "href": "/consultores",
        "hasSubmenu": false,
        "submenu": []
      },
      {
        "icon": "contacts",
        "label": "Parceiros",
        "href": "/parceiros",
        "hasSubmenu": false,
        "submenu": []
      },
      {
        "icon": "list",
        "label": "Categorias",
        "href": "/categorias",
        "hasSubmenu": false,
        "submenu": []
      },
      {
        "icon": "assignment",
        "label": "Planos",
        "href": "/planos",
        "hasSubmenu": false,
        "submenu": []
      },
      {
        "icon": "shopping_cart",
        "label": "Ofertas",
        "href": "/ofertas",
        "hasSubmenu": false,
        "submenu": []
      }
    ];

  }]);
}());
