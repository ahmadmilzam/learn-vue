new Vue({
  el: '#js-app',
  data: {
    color: 'gray',
    width: 100,
    height: 100
  },
  computed: {
    myStyle: function(){
      return {
        backgroundColor: this.color,
        width: this.width + 'px',
        height: this.width + 'px'
      };
    }
  },
});
