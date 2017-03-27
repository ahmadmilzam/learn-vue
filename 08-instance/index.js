(() => {
  window.vm1 = new Vue({
    el: '#js-app',
    data: {
      title: 'The VueJS Instance',
      showParagraph: false,
    },
    methods: {
      show() {
        this.showParagraph = true;
        this.updateTitle('The VueJS Instance (Updated)');
      },
      updateTitle(title) {
        this.title = title;
      },
    },
    computed: {
      lowercaseTitle() {
        return this.title.toLowerCase();
      },
    },
    watch: {
      title(value) {
        console.log(`Title changed, new value: ${value}`);
      },
    },
  });

  window.vm2 = new Vue({
    el: '#js-app2',
    data: {
      title: 'The VueJS Instance',
    },
    methods: {
      updateTitle(title) {
        window.vm1.title = title;
        console.log(window.vm1);
        console.log(window.vm1.$el);
        console.log(window.vm1.$data);
        console.log(window.vm1.$refs);
      },
    },
  });
})();
