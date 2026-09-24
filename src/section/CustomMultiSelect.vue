<template>
  <div class="custom-select" ref="selectRef">

    <div class="select-btn" @click="toggle">
      <span
  :class="[
    { placeholder: selectedValues.length === 0 },
    { nowrap: nowrap }
  ]"
>
  <template v-if="selectedValues.length">
    <span
      v-for="(label, index) in selectedLabels"
      :key="index"
      class="selected-item"
    >
      {{ label }}
    </span>
  </template>

  <template v-else>
    {{ props.placeholder }}
  </template>
</span>

      <img
        src="@/section/icon/prime_angle-down.svg"
        class="arrow"
        :class="{ open: isOpen }"
      />
    </div>

    <Transition name="dropdown">
      <ul v-if="isOpen" class="options">

        <li
          v-for="item in options"
          :key="item.value"
          @click="choose(item)"
          :class="[
            { active: selectedValues.includes(item.value) },
            { nowrap: nowrap }
          ]"
        >
          <span>
            {{ item.label }}
          </span>

          <span
            v-if="selectedValues.includes(item.value)"
            class="check"
          >
            ✓
          </span>
        </li>

      </ul>
    </Transition>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue"




const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  },

  placeholder: {
    type: String,
    default: "請選擇"
  },

  options: {
    type: Array,
    default: () => []
  },

  nowrap: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(["update:modelValue"])

const isOpen = ref(false)
const selectRef = ref(null)

const selectedValues = computed(() => {
  return Array.isArray(props.modelValue)
    ? props.modelValue
    : []
})

const selectedLabels = computed(() => {
  return props.options
    .filter(item => selectedValues.value.includes(item.value))
    .map(item => item.label)
})

const toggle = () => {
  isOpen.value = !isOpen.value
}

const choose = (item) => {

  const values = [...selectedValues.value]

  const index = values.indexOf(item.value)

  if (index > -1) {
    // 已選 → 取消
    values.splice(index, 1)
  } else {
    // 未選 → 加入
    values.push(item.value)
  }

  emit("update:modelValue", values)

  // ★ 複選不關閉下拉
}

const clickOutside = (e) => {

  if (
    selectRef.value &&
    !selectRef.value.contains(e.target)
  ) {
    isOpen.value = false
  }

}

onMounted(() => {
  document.addEventListener("click", clickOutside)
})

onUnmounted(() => {
  document.removeEventListener("click", clickOutside)
})
</script>

<style scoped>

.select-btn > span.nowrap {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.options li.nowrap {
  white-space: nowrap;
}

.custom-select {
  position: relative;
  flex: 1;
  height: 100%;
  padding-left: 1.5em;
}

.select-btn {

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;

  min-height: 48px;

  cursor: pointer;

  color:  rgba(0, 0, 0, 0.507);

  padding-right: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}

.select-btn > span {
  flex: 1;
  text-align: left;
}

.placeholder {
  color: rgba(0, 0, 0, 0.507);
  position: relative;
  
}

.arrow {
  filler: #fff;
  width: 48px;
  height: 48px;

  transition: .3s;
}

.arrow.open {
  transform: rotate(180deg);
}

.options {

  position: absolute;

  top: calc(100% + 10px);

  left: 0;

  width: 100%;

  border-radius: 12px;
  border: 0.7px solid #FFF;

  background: rgba(255, 255, 255, 1);

  box-shadow:
    1px 4px 38.3px 0 rgba(255, 255, 255, 0.04) inset,
    0 15px 35px rgba(0,0,0,.25);

  backdrop-filter: blur(2px);

  max-height: 280px;

  overflow-y: auto;
  overflow-x: hidden;

  z-index: 999;
}

.options li {

  display: flex;

  justify-content: space-between;
  align-items: center;

  padding: 14px 20px;

  cursor: pointer;

  color: #024DB0;

  transition: .25s;
}

.options li:hover {

  background: #024DB0;

  color: #fff;
}

.options li.active {

  background: #024DB0;

  color: #fff;
}

.check {
  flex-shrink: 0;
  margin-left: 15px;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: .25s;
}

.dropdown-enter-from,
.dropdown-leave-to {

  opacity: 0;

  transform: translateY(-8px);
}

.dropdown-enter-to,
.dropdown-leave-from {

  opacity: 1;

  transform: translateY(0);
}

.selected-item {
  display: block;
  line-height: 1.6;
}

</style>