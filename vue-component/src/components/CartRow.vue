<!-- 📁 components/CartRow.vue -->
<template>
  <tr>
    <td>{{ code }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.price.toLocaleString() }}원</td>
    <td>
      <input
        type="number"
        v-model.number="localQty"
        min="1"
        style="width: 60px"
        @change="updateQty"
      />
    </td>
    <td>{{ (item.price * localQty).toLocaleString() }}원</td>
    <td>
      <button @click="$emit('remove', code)">❌</button>
    </td>
  </tr>
</template>

<script setup>
import { ref, watch } from "vue";

// props
const props = defineProps({
  code: String,
  item: Object,
});

// emit
const emit = defineEmits(["update-qty", "remove"]);

// 로컬 수량 상태 (v-model.number 사용 시 props 직접 수정 방지)
const localQty = ref(1);

watch(
  () => props.item.qty,
  (newQty) => (localQty.value = newQty),
  { immediate: true },
);

// 수량 변경 이벤트 emit
const updateQty = () => {
  emit("update-qty", props.code, { ...props.item, qty: localQty.value });
};
</script>

<style scoped>
tr:hover {
  background-color: #f9f9f9;
}
button {
  cursor: pointer;
  background: #ff5252;
  border: none;
  border-radius: 4px;
  color: #fff;
  padding: 4px 8px;
  transition: 0.2s;
}
button:hover {
  background: #e53935;
}
</style>
