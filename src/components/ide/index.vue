<template>
  <div :id="current.id"></div>
</template>

<script>
import * as monaco from "monaco-editor";
export default {
  props: {
    current: {
      type: Object,
      default() {
        return {
          id: "xxx",
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
        this.reload();
      },
      deep: true
    }
  },
  mounted() {
    this.ideElement = monaco.editor.create(
      document.getElementById(this.current.id),
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