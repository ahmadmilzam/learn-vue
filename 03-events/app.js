new Vue({
  el: '#js-app',
  data: {
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    clickHandler: function (evt) {
      return this.counter++;
    },
    updateCoordinates: function(evt) {
      this.x =  evt.clientX;
      this.y =  evt.clientY;
    }
  }
});
