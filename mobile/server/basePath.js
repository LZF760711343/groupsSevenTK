//路径服务
angular.module('mobileApp').provider('basePath', function () {
 
    this.routerTemplatePath='routerTemplate/';
    this.$get = function () {
        return {
            directiveTemplatePath:'directiveTemplate/',
            imgPath:'assets/img',
          
        };
    };
});
