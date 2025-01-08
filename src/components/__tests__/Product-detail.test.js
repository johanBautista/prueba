import ProductDetail from '../ProductDetail.vue'
import { describe, it, beforeEach, afterEach, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { useRoute } from 'vue-router'

vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
}))

if (typeof global === 'undefined') {
  var global = window
}

describe('ProductDetail.vue', () => {
  let wrapper

  beforeEach(() => {
    useRoute.mockReturnValue({
      params: { id: '1' },
    })

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            id: 1,
            name: 'Product 1',
            description: 'Description of Product 1',
            price: 100,
          }),
      }),
    )

    wrapper = mount(ProductDetail)
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should show message if fetch works', async () => {
    global.fetch.mockImplementationOnce(() => Promise.reject('API is down'))
    wrapper = mount(ProductDetail)
    await wrapper.vm.$nextTick()
    expect(wrapper.find('div').text()).toContain('Detalles del producto')
  })

  it('should render product data after fetch', async () => {
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick() // Espera a que se resuelva el fetch
    expect(wrapper.find('h1').text()).toBe('Detalles del producto')
    expect(wrapper.find('.product-info').text()).toContain('100')
  })
})
