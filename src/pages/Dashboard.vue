<template>
  <div class="mainContainer" v-on:keyup="keyMonitor">
    <Sidebar
      :listDataCount="store.listDataCount"
      :archiveCount="store.archiveListDataCount"
    />

    <div class="bodyContainer">
      <span class="title">Inbox</span>
      <span class="emailTitle">Emails Selected {{ store.emailCount }}</span>

      <div class="activityContainer">
        <input
          @change="(e) => store.onSelectAll(e.target.checked)"
          class="inputCheckbox"
          type="checkbox"
          :checked="store.emailCount == store.listData?.length"
        />
        <button class="buttonActivity">Mark as read(r)</button>
        <button class="buttonActivity">Mark as archive(a)</button>
      </div>

      <div
        class="listContainer"
        v-for="(item, index) in store.listData"
        :key="item.id"
				:style= "[item.isReview ? {'opacity': '0.5'} : {'opacity': '1'}]"

      >
        <div v-if="!item.isArchive" class="listItem">
          <input
            @change="store.onChecked"
            class="inputCheckbox"
            type="checkbox"
            :checked="item.isChecked"
            :name="index"
          />
          <span @click="handleListData(item)" class="title">{{
            item.title
          }}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Model Open -->

  <div v-if="isModel" class="modelContainer">
    <div @click="outerCloseModel" class="blankContainer"></div>
    <div class="model">
      <button class="closeButton" @click="closeModel">Close (Esc)</button>
      <div class="buttonContainer">
        <button class="buttonActivity">Mark as read(r)</button>
        <button class="buttonActivity">Mark as archive(a)</button>
      </div>

      <h1 class="list">{{ listDetails.title }}</h1>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/layout/Sidebar.vue";
import { useStore } from "../store/index";

export default {
  name: "dashboard",
  components: {
    Sidebar,
  },
  created() {
    window.addEventListener("keydown", this.keyMonitor);
  },

  setup() {
    const listDetails = {};
    const store = useStore();

    return {
      listDetails,
      store,
    };
  },

  data() {
    return {
      isModel: false,
    };
  },

  methods: {
    keyMonitor(event) {
      if (event.key == "R" || event.key == "r") {
        const isCheckedAll =
          this.store.emailCount == this.store.listData?.length;
        this.store.onSelectAll(!isCheckedAll);
      } else if (event.key == "Escape") {
        this.closeModel();
      } else if (event.key == "A" || event.key == "a") {
        this.store.handleArchive();
      }
    },
    handleListData(item) {
      this.listDetails = item;
      this.isModel = true;
			this.store.handleOpenList(item);
		
    },
    closeModel() {
      this.isModel = false;
    },
		outerCloseModel(){
			this.isModel = false
		}
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

    .title {
      font-size: 30px;
    }
    .emailTitle {
      margin-top: 10px;
      font-size: 35px;
      font-weight: 700;
    }

    .activityContainer {
      display: flex;
      align-items: center;
      margin-top: 40px;
      .inputCheckbox {
        margin-right: 20px;
        height: 30px;
        width: 30px;
      }
      .buttonActivity {
        padding: 10px 10px;
        margin-right: 20px;
        outline: none;
        font-size: 20px;
        font-weight: 500;
        border: 2px solid #eaeaea;
        border-radius: 5px;
        background-color: #f4f4f4;
        cursor: pointer;

        &:last-child {
          margin-right: 0px;
        }
      }
    }

    .listContainer {
      display: flex;
      flex-direction: column;

      .listItem {
        margin-top: 40px;
        border: 2px solid #eaeaea;
        background-color: #f4f4f4;
        padding: 10px 20px;
        display: flex;
        border-radius: 5px;
        align-items: center;
        cursor: pointer;
        margin-bottom: 20px;

        &:last-child {
          margin-bottom: 0px;
        }

        .inputCheckbox {
          margin-right: 20px;
          height: 30px;
          width: 30px;
        }

        .title {
          font-size: 20px;
          font-weight: 500;
        }
      }
    }
  }
}

.modelContainer {
  position: absolute;
  right: 0;
  display: flex;
  top: 0;
	width: 100%;
  min-height: 100vh;
  min-width: 50%;

  .blankContainer {
		opacity: 0.6;
		background-color: black;

    width: 50%;
  }

  .model {
    width: 50%;
    padding: 40px 30px;
		height: 100vh;
		background-color: white;

    .closeButton {
      padding: 10px 10px;
      margin-right: 20px;
      outline: none;
      font-size: 20px;
      font-weight: 500;
      border: 2px solid #eaeaea;
      border-radius: 5px;
      background-color: #f4f4f4;
      cursor: pointer;
    }

    .buttonContainer {
      display: flex;
      align-items: center;
      margin-top: 30px;

      .buttonActivity {
        padding: 10px 10px;
        margin-right: 20px;
        outline: none;
        font-size: 20px;
        font-weight: 500;
        border: 2px solid #eaeaea;
        border-radius: 5px;
        background-color: #f4f4f4;
        cursor: pointer;
      }
    }

    .list {
      margin-top: 30px;
      font-size: 20px;
      font-weight: 700;
    }
  }
}
</style>
