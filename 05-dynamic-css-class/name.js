new Vue({
  el: '#js-app',
  data: {
    attachedRed: false,
    color: 'aqua'
  },
  computed: {
    divClasses: function(){
      return {
        red: this.attachedRed,
        blue: !this.attachedRed
      };
    }
  },
});
