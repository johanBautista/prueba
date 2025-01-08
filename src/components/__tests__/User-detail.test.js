import { mount } from '@vue/test-utils'
import UserDetail from '@/components/UserDetail.vue'
import { describe, it, beforeEach, afterEach, expect, vi } from 'vitest'
import { useRoute } from 'vue-router'

vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
}))

if (typeof global === 'undefined') {
  var global = window
}

describe('UserDetail.vue', () => {
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
            givenName: 'John',
            familyName1: 'Doe',
            email: 'john@example.com',
            phone: '123456789',
          }),
      }),
    )

    wrapper = mount(UserDetail)
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should render loading spinner initially', () => {
    expect(wrapper.find('div').text()).toContain('Cargando datos...')
  })

  it('should show error message if fetch loading', async () => {
    global.fetch.mockImplementationOnce(() => Promise.reject('API is down'))
    wrapper = mount(UserDetail)
    await wrapper.vm.$nextTick()
    expect(wrapper.find('div').text()).toContain('Cargando datos...')
  })

  it('should render customer data after fetch', async () => {
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick() // Espera a que se resuelva el fetch
    expect(wrapper.find('.user-details').text()).toContain('Nombre: John')
    expect(wrapper.find('.user-details').text()).toContain('Apellido: Doe')
    expect(wrapper.find('.user-details').text()).toContain('Email: john@example.com')
    expect(wrapper.find('.user-details').text()).toContain('Teléfono: 123456789')
  })
})
