<!-- Please remove this file from your project -->
<template>
  <div class="container">
    <div
      class="alert alert-primary"
      role="alert"
    >
      Hello Visitor!1234567843454321212000121
    </div>
    <div class="test-class mb-3 fwb">
      Lorem ipsum 12345
    </div>
    <div :class="$style.text">
      Lorem ipsum 2
    </div>
  </div>
</template>

<script>
    export default {
        name: 'TheWelcome'
    };
</script>

<style lang="scss" module>
.text {
  color: black;
  background-color: $pink;
}
</style>
