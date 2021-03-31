var transform = new Vue({
  el: "#text-transform",
  data: {
    list: ["Student", "Full Stack Developer", "Engineer"],
    index: 0,
    text: "",
    speed: 1500,
  },

  mounted() {
    this.text = this.list[this.index];
    setInterval(this.getTextFromList, this.speed);
  },

  methods: {
    getTextFromList() {
      var vm = this;

      vm.text = vm.list[vm.index];
      vm.index += 1;

      if (vm.index >= vm.list.length) {
        vm.index = 0;
      }
    },
  },
});
