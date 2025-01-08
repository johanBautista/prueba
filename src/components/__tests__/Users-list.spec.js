import { mount } from '@vue/test-utils'
import UsersList from '@/components/Users-list.vue'
import { describe, it, beforeEach, afterEach, expect, vi } from 'vitest'

if (typeof global === 'undefined') {
  var global = window
}

describe('UsersList.vue', () => {
  let wrapper

  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            {
              id: 1,
              givenName: 'John',
              familyName1: 'Doe',
              email: 'john@example.com',
              phone: '123456789',
            },
            {
              id: 2,
              givenName: 'Jane',
              familyName1: 'Smith',
              email: 'jane@example.com',
              phone: '987654321',
            },
          ]),
      }),
    )
    wrapper = mount(UsersList)
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should fetch customers on mount', async () => {
    await wrapper.vm.$nextTick()
    expect(global.fetch).toHaveBeenCalledWith('https://render-json-q3qu.onrender.com/customers')
  })

  it('should render customers after fetch', async () => {
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick() // Espera a que se complete la carga de datos
    expect(wrapper.findAll('tbody tr').length).toBe(2)
  })

  it('should show error message if fetch fails', async () => {
    global.fetch.mockImplementationOnce(() => Promise.reject(new Error('API is down')))
    wrapper = mount(UsersList)
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick() // Espera a que se complete la carga de datos
    expect(wrapper.find('p').text()).toBe(
      'Lo sentimos! Actualmente no tenemos usuarios, intentelo mas tarde.',
    )
  })

  it('should filter customers based on input', async () => {
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick() // Espera a que se complete la carga de datos
    await wrapper.find('input').setValue('John')
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('tbody tr').length).toBe(1)
    expect(wrapper.find('td').text()).toBe('John')
  })
})
