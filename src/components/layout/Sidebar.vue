<template>
  <div class="sidebarContainer">
    <div class="sidebar">
      <div class="buttonContainer">
        <button class="buttonInbox">Inbox ({{ listDataCount }})</button>
        <button class="buttonInbox">Archive ({{ archiveCount }})</button>
      </div>
      <button class="logoutButton">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  props: {
    listDataCount: Number,
    archiveCount: Number,
  },
};
</script>

<style lang="scss" scoped>
.sidebarContainer {
  width: 20%;
  background-color: #383636;
  min-height: 100vh;

  .sidebar {
    height: 100vh;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .buttonContainer {
      display: flex;
      flex-direction: column;

      .buttonInbox {
        text-align: start;
        width: 100%;
        margin-bottom: 20px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 700;
        padding: 10px 15px;
        border-radius: 5px;
        background-color: white;
        outline: none;
        border: none;
        margin-bottom: 15px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .logoutButton {
      text-align: start;
      font-size: 16px;
      font-weight: 700;
      padding: 10px 15px;
      border-radius: 5px;
      background-color: white;
      outline: none;
      border: none;
      cursor: pointer;
    }
  }
}
</style>
