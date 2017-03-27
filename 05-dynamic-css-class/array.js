new Vue({
  el: '#js-app',
  data: {
    color: 'gray',
    width: 100
  },
  computed: {
    myStyle: function(){
      return {
        backgroundColor: this.color,
        width: this.width + 'px'
      };
    }
  },
});
