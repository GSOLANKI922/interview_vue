import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want, 
// but it's best to use the name of the store and surround it with `use` 
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application

const listData =[
  {
    id: 0,
    isReview: false,
    isChecked: false,
    isArchive: false,
    title: "Your 7-figure plan goes bye-bye at midnight",
  },
  {
    id: 1,
    isChecked: false,
    isReview: false,
    isArchive: false,
    title: "Your 4-figure plan goes bye-bye at midnight",
  },
  {
    id: 2,
    isChecked: false,
    isReview: false,
    isArchive: false,
    title: "Your 2-figure plan goes bye-bye at midnight",
  },
  {
    id: 3,
    isChecked: false,
    isReview: false,
    isArchive: false,
    title: "Your 1-figure plan goes bye-bye at midnight",
  },
  {
    id: 4,
    isChecked: false,
    isReview: false,
    isArchive: false,
    title: "Your 7-figure plan goes bye-bye at midnight",
  },
];

export const useStore = defineStore('main', {
  state: () => ({
    list: listData,
  }),
  getters: {
    emailCount: (state) => state.list.filter((item) => item.isChecked).length,
    listData: (state) => state.list,
    archiveListDataCount: (state) => state.list.filter((item) => item.isArchive).length,
    listDataCount: (state) => state.list.filter((item) => !item.isArchive).length,
  },
  actions: {
    onSelectAll(isChecked) {
      let tempArr = this.list;
      if (isChecked) {
        tempArr.map((i) => (i.isChecked = true));
      } else {
        tempArr.map((i) => (i.isChecked = false));
      }
      this.list = tempArr;
    },
    handleList(item) {
      this.list = item;
    },
    onChecked(e) {
      this.list.forEach((item, i) => {
        if (i == e.target.name) {
          item.isChecked = e.target.checked;
        }
      });
    },
    handleArchive() {
      let tempArr = this.list;
      tempArr.map((i) => {
        if (i.isChecked) {
          i.isArchive = true;
          i.isChecked = false;
        }
      });
      this.list = tempArr;
    },
    handleOpenList(list) {
      console.log(list)
      let tempArr = this.list;
      tempArr.map((i) => {
        if (i.id == list.id) {
          i.isReview = true;
        }
      });
      this.list = tempArr;
      console.log(this.list);
    }
  },
})