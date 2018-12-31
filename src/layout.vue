<template>
  <table class="v-table-layout">
    <tr v-for="(item, index) in list"
      :key="index">
      <td v-for="(subItem, subIndex) in item"
        :key="subIndex"
        :colspan="subItem.colSpan || 1">
        <div class="container">
          <div class="title"
            :style="titleStyle">
            <span>{{ subItem.title }}：</span>
          </div>
          <div class="content"
            :class="{ ellipsis: contentOverflow }"
            :style="contentStyle">
            <span v-if="!subItem.cellRender">
              {{ subItem.content }}
            </span>
            <component :is="subItem.cellRender"
              v-bind="subItem.attrs || {}"
              v-on="subItem.listeners || {}"
              v-else>
            </component>
          </div>
        </div>
      </td>
    </tr>
  </table>
</template>

<script>
function group (array, subGroupLength) {
  let index = 0
  const newArray = []

  while (index < array.length) {
    newArray.push(array.slice(index, index += subGroupLength))
  }

  return newArray
}

export default {
  props: {
    infoList: {
      type: Array,
      default () {
        return []
      }
    },

    titleAlign: {
      type: String,
      default: 'left'
    },

    labelWidth: {
      type: Number,
      default: 100
    },

    contentOverflow: Boolean,

    perLineNum: {
      type: Number,
      default: 2
    }
  },

  computed: {
    list () {
      return group(this.infoList, this.perLineNum)
    },

    titleStyle () {
      return {
        'text-align': this.titleAlign,
        'width': this.labelWidth + 'px'
      }
    },

    contentStyle () {
      return {
        marginLeft: this.labelWidth + 'px'
      }
    }
  }
}
</script>

<style lang="scss">
.v-table-layout {
  width: 100%;
  table-layout: fixed;

  td {
    vertical-align: top;
    .container {
      &::after,
      &::before {
        content: "";
        display: table;
        clear: both;
      }
    }
    .title {
      float: left;
      font-weight: 600;
    }
    .content {
      word-wrap: break-word;
    }
    .ellipsis {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>