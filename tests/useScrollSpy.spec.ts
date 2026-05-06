import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { useScrollSpy } from '@/composables/useScrollSpy'

interface ObserverInstance {
  observed: Element[]
  fire(entries: Array<{ id: string; ratio: number; intersecting: boolean }>): void
}

let lastInstance: ObserverInstance | null = null

class FakeIntersectionObserver {
  observed: Element[] = []
  cb: IntersectionObserverCallback

  constructor(cb: IntersectionObserverCallback) {
    this.cb = cb
    lastInstance = {
      observed: this.observed,
      fire: (entries) => {
        const mapped = entries.map((e) => ({
          target: { id: e.id } as unknown as Element,
          isIntersecting: e.intersecting,
          intersectionRatio: e.ratio,
          time: 0,
          rootBounds: null,
          boundingClientRect: {} as DOMRectReadOnly,
          intersectionRect: {} as DOMRectReadOnly,
        })) as unknown as IntersectionObserverEntry[]
        this.cb(mapped, this as unknown as IntersectionObserver)
      },
    }
  }

  observe(target: Element) {
    this.observed.push(target)
  }
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

describe('useScrollSpy', () => {
  beforeEach(() => {
    lastInstance = null
    vi.stubGlobal('IntersectionObserver', FakeIntersectionObserver as unknown as typeof IntersectionObserver)
    document.body.innerHTML = ''
    for (const id of ['a', 'b', 'c']) {
      const el = document.createElement('section')
      el.id = id
      document.body.appendChild(el)
    }
  })

  afterEach(() => {
    vi.restoreAllMocks()
    document.body.innerHTML = ''
  })

  it('observes provided ids and tracks the most-visible section', async () => {
    let active!: { value: string }
    const Comp = defineComponent({
      setup() {
        active = useScrollSpy({ ids: ['a', 'b', 'c'] }).active
        return () => h('div')
      },
    })
    mount(Comp)
    await nextTick()

    expect(lastInstance).toBeTruthy()
    expect(lastInstance!.observed.map((e) => (e as HTMLElement).id)).toEqual(['a', 'b', 'c'])

    lastInstance!.fire([
      { id: 'a', ratio: 0.1, intersecting: true },
      { id: 'b', ratio: 0.6, intersecting: true },
      { id: 'c', ratio: 0, intersecting: false },
    ])
    await nextTick()
    expect(active.value).toBe('b')

    lastInstance!.fire([
      { id: 'b', ratio: 0.2, intersecting: true },
      { id: 'c', ratio: 0.7, intersecting: true },
    ])
    await nextTick()
    expect(active.value).toBe('c')
  })
})
