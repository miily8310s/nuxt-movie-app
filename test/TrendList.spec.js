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
          {
            index: 2,
            name: 'mr blood',
            media_type: 'tv',
            poster_path: 'fuga.png',
          },
        ],
      },
    })
    expect(wrapper.findAll('p').at(0).html()).toBe(`<p>alaska</p>`)
    expect(wrapper.findAll('p').at(1).html()).toBe(`<p>mr blood</p>`)
  })
})
