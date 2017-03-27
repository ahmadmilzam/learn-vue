new Vue({
  el: '#js-app',
  data: {
    counter: 0,
    secondCounter: 0,
  },
  computed: {
    firstResult: function() {
      console.log('execute result');
      return this.counter > 10 ? 'Greater than 10' : 'Smaller than 10';
    },
    secondResult: function(){
      console.log('execute second result');
      return this.secondCounter > 10 ? 'Greater than 10' : 'Smaller than 10';
    }
  },
  watch: {
    counter: function(value) {
      console.log('watch first counter property');
      setTimeout(function(){
        this.counter = 0;
      }.bind(this), 3000);
    }
  }
});
