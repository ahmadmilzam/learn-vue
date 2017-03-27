new Vue({
  el: '#js-app',
  data: {
    counter: 0,
    result: 'Smaller than 10'
  },
  methods: {
    increaseCounter: function (evt) {
      this.counter++;
      this.result = this.counter > 10 ? 'Greater than 10' : 'Smaller than 10';
    },
    decreaseCounter: function (evt) {
      this.counter--;
      this.result = this.counter > 10 ? 'Greater than 10' : 'Smaller than 10';
    }
  }
});
