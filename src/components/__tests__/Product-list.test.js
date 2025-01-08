import { mount } from '@vue/test-utils'
import ProductsList from '@/components/Products-list.vue'
import { describe, it, beforeEach, afterEach, expect, vi } from 'vitest'

if (typeof global === 'undefined') {
  var global = window
}

describe('ProductsList.vue', () => {
  let wrapper

  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            {
              id: 1,
              productName: 'Product 1',
              price: 100,
              mbSpeed: 50,
              gbData: 10,
              productTypeName: 'Type 1',
              numeracioTerminal: '123',
            },
            {
              id: 2,
              productName: 'Product 2',
              price: 200,
              mbSpeed: 100,
              gbData: 20,
              productTypeName: 'Type 2',
              numeracioTerminal: '456',
            },
          ]),
      }),
    )
    wrapper = mount(ProductsList)
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should fetch products on mount', async () => {
    await wrapper.vm.$nextTick()
    expect(global.fetch).toHaveBeenCalledWith('https://render-json-q3qu.onrender.com/products')
  })

  it('should render products after fetch', async () => {
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick() // Espera a que se complete la carga de datos
    expect(wrapper.findAll('tbody tr').length).toBe(2)
  })

  it('should filter products based on input', async () => {
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick() // Espera a que se complete la carga de datos
    await wrapper.find('input').setValue('Product 1')
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('tbody tr').length).toBe(1)
    expect(wrapper.find('td').text()).toBe('Product 1')
  })
})
