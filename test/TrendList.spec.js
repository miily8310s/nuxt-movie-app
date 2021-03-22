import { mount } from '@vue/test-utils'
import TrendList from '@/components/TrendList.vue'

describe('TrendList', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TrendList, {
      propsData: {
        trends: [],
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
  test('is a Vue instance', () => {
    const wrapper = mount(TrendList, {
      propsData: {
        trends: [],
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
