<template>
  <div class="bl-rightbox">
    <div class="rightbox-header">
      <slot name="rightbox-header"></slot>
    </div>
    <div class="rightbox-main">
      <div class="main-left">
        <slot name="main-left"></slot>
      </div>
      <div class="main-right">
        <slot name="main-right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.bl-rightbox {
  width: 100%;
  height: inherit;
  .rightbox-header {
    height: 80px;
  }
  .rightbox-main {
    height: 100%;
    background-color: bisque;
    display: flex;
    > .main-left {
      flex: 1;
      height: inherit;
    }
    > .main-right {
      background-color: cadetblue;
      right: 0;
      height: inherit;
      width: 40px;
      position: absolute;
    }
  }
}
</style>