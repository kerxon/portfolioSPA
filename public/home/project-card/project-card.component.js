(function(){
    'use strict';

    angular.module('app')
        .component('projectCard', {
            controller: projectCtrl,
            templateUrl: '/home/project-card/project-card.component.html',
            bindings: {
                data: '<'
            }
        });
      
    function projectCtrl() {
        const vm = this;

        vm.$onInit = function() {
            // console.log('projects loaded');
            // console.log(vm.data)
            vm.displayedIndex = false;
            vm.show = false;
            
        };
    }

}());