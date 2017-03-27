new Vue({
  el: '#js-exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true
    },
    float: 'float',
    userClass: '',
    isVisible: true,
    myStyle: {
      width: '100px',
      height: '150px',
      backgroundColor: 'gray'
    },
    progressBar: {
      width: '0px',
      backgroundColor: 'red'
    }
  },
  methods: {
    startEffect: function() {
      setInterval(function() {
        this.effectClasses.highlight = !this.effectClasses.highlight;
        this.effectClasses.shrink = !this.effectClasses.shrink;
      }.bind(this), 1000);
    },
    startProgress: function() {
      var width = 0;

      setInterval(function() {
        width = width + 10;
        this.progressBar.width = width + 'px';
      }.bind(this), 500);
    }
  }
});
