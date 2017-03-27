(() => {
  window.vm1 = new Vue({
    el: '#js-app',
    data: {
      title: 'The VueJS Instance Lifecycle',
    },
    beforeCreate() {
      console.log('beforeCreate(), Before instance created hook');
    },
    created() {
      console.log('created(), After instance created hook');
    },
    beforeMount() {
      console.log('beforeMount(), Before template mounted hook');
    },
    mounted() {
      console.log('mounted(), After template mounted hook');
    },
    beforeUpdate() { // if data has change
      console.log('beforeUpdate(), Before data updated hook');
    },
    updated() {
      console.log('updated(), After data updated hook');
    },
    beforeDestroy() { // best moment to release resources / remove listener
      console.log('beforeDestroy(), Before instance destroyed hook');
    },
    destroyed() {
      console.log('destroyed(), After instance destroyed hook');
    },
    methods: {
      destroy() {
        this.$destroy();
        console.log('Will destroy instance');
      },
    },
  });
})();
