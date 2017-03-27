new Vue({
  el: '#js-app',
  data: {
    show: true
  },
  methods: {
    toggleShow: function(){
      this.show = !this.show
    }
  },
});
