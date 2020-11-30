import type { PropType } from 'vue';
import type { Axis, ContextMenuItem } from './types';
export const props = {
  show: {
    type: Boolean,
    default: false,
  },
  onFinished: {
    type: Function,
    default: () => {},
  },
  axis: {
    // 位置
    type: Object as PropType<Axis>,
    default() {
      return { x: 0, y: 0 };
    },
  },
  schemas: {
    // 列表
    type: Array as PropType<Array<any>>,
    default() {
      return [];
    },
  },
  val: {
    type: Object as PropType<RegExpMatchArray>,
    default: () => [],
  },
  data: {
    // 列表
    type: Array as PropType<Array<any>>,
    default() {
      return [];
    },
  },
};
