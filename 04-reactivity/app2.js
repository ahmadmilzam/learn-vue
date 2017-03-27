new Vue({
  el: '#js-app',
  data: {
    counter: 0,
  },
  methods: {
    result: function() {
      console.log('execute result');
      return this.counter > 10 ? 'Greater than 10' : 'Smaller than 10';
    }
  }
});
