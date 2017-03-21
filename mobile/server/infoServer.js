/**
 * Created by Administrator on 2016/11/18 0018.
 */
angular.module('mobileApp').service('infoServer', function () {

    this.data = [];
    this.currentItem = 0;
    this.title = function () {
        return sessionStorage.getItem('subjectTitle') + '【' + this.data.length + '】';
    };
    this.pre = function () {
        if (this.currentItem > 0) {
            this.currentItem--;
        }
    };
    this.next = function () {
        if (this.currentItem < (this.data.length - 1)) {
            this.currentItem++;
        }
    };

});