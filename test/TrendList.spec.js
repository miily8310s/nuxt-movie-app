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
  test('fetch data is nothing', () => {
    const wrapper = mount(TrendList, {
      propsData: {
        trends: [],
      },
    })
    expect(wrapper.html()).toBe('<div class="trendlist"></div>')
  })
  test('fetch data is having', () => {
    const wrapper = mount(TrendList, {
      propsData: {
        trends: [
          {
            index: 1,
            title: 'alaska',
            media_type: 'movie',
            poster_path: 'hoge.png',
          },
        ],
      },
    })
    expect(wrapper.html()).toBe(
      `<div class="trendlist">
        <div>
          <img src="https://themoviedb.org/t/p/w600_and_h900_bestv2/hoge.png" alt="1">
          <p>alaska</p>
        </div>
      </div>`
    )
  })
})
