<template>
  <div id="container"></div>
</template>

<script>
import * as monaco from "monaco-editor";
export default {
  props: {
    current: {
      type: Object,
      default() {
        return {
          language: "python",
          code: "//code"
        };
      }
    },
    options: {
      type: Object,
      default() {
        return {
          //theme: "vs-dark"
        };
      }
    }
  },
  watch: {
    current: {
      // eslint-disable-next-line no-unused-vars
      handler(newValue, oldValue) {
        console.log("ide reload ...");
        console.log(newValue);
        this.reload();
      },
      deep: true
    }
  },
  mounted() {
    this.ideElement = monaco.editor.create(
      document.getElementById("container"),
      this.options
    );
    this.reload();
  },
  data() {
    return {
      ideElement: undefined
    };
  },
  methods: {
    reload() {
      console.log(this.ideElement);
      const model = monaco.editor.createModel(
        this.current.code,
        this.current.language
      );
      this.ideElement.setModel(model);
    }
  }
};
</script>

<style>
</style>