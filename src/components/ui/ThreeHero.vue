<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useReducedMotion } from '@/composables/useReducedMotion'

const canvasRef = ref<HTMLCanvasElement | null>(null)
const { prefersReduced } = useReducedMotion()

let cleanup: (() => void) | null = null

onMounted(async () => {
  if (!canvasRef.value) return
  // Lazy import keeps three out of the main bundle.
  const THREE = await import('three')

  const canvas = canvasRef.value
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'low-power',
  })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
  camera.position.z = 4.6

  const geometry = new THREE.IcosahedronGeometry(1.5, 1)
  const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#5eead4'
  const material = new THREE.MeshBasicMaterial({
    color: new THREE.Color(accent),
    wireframe: true,
    transparent: true,
    opacity: 0.7,
  })
  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  // Subtle ambient ring
  const ringGeo = new THREE.TorusGeometry(2.2, 0.005, 8, 80)
  const ringMat = new THREE.MeshBasicMaterial({
    color: new THREE.Color(accent),
    transparent: true,
    opacity: 0.25,
  })
  const ring = new THREE.Mesh(ringGeo, ringMat)
  ring.rotation.x = Math.PI / 3
  scene.add(ring)

  function resize() {
    const rect = canvas.getBoundingClientRect()
    const w = Math.max(1, rect.width)
    const h = Math.max(1, rect.height)
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }
  resize()

  const ro = new ResizeObserver(resize)
  ro.observe(canvas)

  let raf = 0
  let mx = 0
  let my = 0
  let targetMx = 0
  let targetMy = 0
  let running = true

  function onPointerMove(e: PointerEvent) {
    const rect = canvas.getBoundingClientRect()
    targetMx = ((e.clientX - rect.left) / rect.width - 0.5) * 0.6
    targetMy = ((e.clientY - rect.top) / rect.height - 0.5) * 0.6
  }
  window.addEventListener('pointermove', onPointerMove, { passive: true })

  function frame() {
    if (!running) return
    raf = requestAnimationFrame(frame)
    if (!prefersReduced.value) {
      mesh.rotation.y += 0.003
      mesh.rotation.x += 0.0015
      ring.rotation.z += 0.001
    }
    mx += (targetMx - mx) * 0.04
    my += (targetMy - my) * 0.04
    mesh.position.x = mx
    mesh.position.y = -my
    renderer.render(scene, camera)
  }
  frame()

  cleanup = () => {
    running = false
    cancelAnimationFrame(raf)
    ro.disconnect()
    window.removeEventListener('pointermove', onPointerMove)
    geometry.dispose()
    material.dispose()
    ringGeo.dispose()
    ringMat.dispose()
    renderer.dispose()
  }
})

onBeforeUnmount(() => {
  cleanup?.()
  cleanup = null
})
</script>

<template>
  <canvas
    ref="canvasRef"
    class="three-hero"
    aria-hidden="true"
  />
</template>

<style lang="scss" scoped>
.three-hero {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
