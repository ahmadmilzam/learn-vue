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
  }
});
