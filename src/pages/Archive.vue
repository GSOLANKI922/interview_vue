<template>
  <div class="mainContainer">
    <Sidebar :listData="store.listData.length" />

    <div class="bodyContainer">sdsa</div>
  </div>
</template>

<script>
import { useStore } from "@/store";
import Sidebar from "../components/layout/Sidebar.vue";

export default {
  name: "archive",
  components: {
    Sidebar,
  },
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
.mainContainer {
  height: 100vh;
  display: flex;
  width: 100%;

  .bodyContainer {
    width: 100%;
    padding: 25px 60px;
    display: flex;
    flex-direction: column;
  }
}
</style>
