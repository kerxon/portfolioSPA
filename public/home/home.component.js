(function() {
  'use strict';
  angular.module("app")
    .component("home", {
      controller: homeCtrl,
      templateUrl: '/home/home.html'
    })
    // .component("modal", {
    //   controller: modalCtrl,
    //   templateUrl: '/home/home.modal.html'
    // })

    function homeCtrl(projectService) {
      const vm = this;

      vm.$onInit = function($index){
        vm.displayedIndex = false;
        vm.show = false;
        projectService.getProjects()
          .then(function(projects){
            vm.projects = projects;
          })
      }
    }
}());