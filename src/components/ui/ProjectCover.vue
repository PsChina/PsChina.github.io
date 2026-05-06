<script setup lang="ts">
import type { ProjectCoverVariant } from '@/types'

defineProps<{ variant: ProjectCoverVariant }>()
</script>

<template>
  <svg
    class="cover"
    viewBox="0 0 200 120"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
    role="img"
  >
    <!-- rings: concentric circles for audio/video -->
    <g
      v-if="variant === 'rings'"
      class="cover__g"
    >
      <circle
        cx="100"
        cy="60"
        r="14"
      />
      <circle
        cx="100"
        cy="60"
        r="28"
      />
      <circle
        cx="100"
        cy="60"
        r="42"
      />
      <circle
        cx="100"
        cy="60"
        r="56"
        class="cover__accent"
      />
      <line
        x1="20"
        y1="60"
        x2="180"
        y2="60"
        class="cover__hairline"
      />
    </g>

    <!-- grid: isometric dots + lines for command dispatch -->
    <g
      v-else-if="variant === 'grid'"
      class="cover__g"
    >
      <g
        v-for="r in 6"
        :key="`r${r}`"
      >
        <g
          v-for="c in 10"
          :key="`c${c}`"
        >
          <circle
            :cx="20 + (c - 1) * 20"
            :cy="15 + (r - 1) * 18"
            r="1.2"
          />
        </g>
      </g>
      <path
        d="M30 25 L130 79 L170 33"
        class="cover__accent"
        fill="none"
      />
      <circle
        cx="30"
        cy="25"
        r="3"
        class="cover__accent-fill"
      />
      <circle
        cx="130"
        cy="79"
        r="3"
        class="cover__accent-fill"
      />
      <circle
        cx="170"
        cy="33"
        r="3"
        class="cover__accent-fill"
      />
    </g>

    <!-- wave: waveform bars for messaging -->
    <g
      v-else-if="variant === 'wave'"
      class="cover__g"
    >
      <g>
        <rect
          v-for="i in 36"
          :key="i"
          :x="6 + (i - 1) * 5.4"
          :y="60 - 6 * Math.abs(Math.sin(i * 0.6)) * 8"
          :width="2"
          :height="12 * Math.abs(Math.sin(i * 0.6)) * 6 + 6"
        />
      </g>
      <line
        x1="10"
        y1="92"
        x2="190"
        y2="92"
        class="cover__hairline"
      />
      <text
        x="10"
        y="106"
        class="cover__caption"
      >▸ message</text>
    </g>

    <!-- branch: timeline branches for INS/RVS -->
    <g
      v-else-if="variant === 'branch'"
      class="cover__g"
    >
      <line
        x1="20"
        y1="60"
        x2="180"
        y2="60"
      />
      <circle
        cx="40"
        cy="60"
        r="3"
      />
      <circle
        cx="80"
        cy="60"
        r="3"
      />
      <circle
        cx="120"
        cy="60"
        r="3"
        class="cover__accent-fill"
      />
      <circle
        cx="160"
        cy="60"
        r="3"
      />
      <path
        d="M80 60 L80 35 L110 35"
        fill="none"
      />
      <path
        d="M120 60 L120 85 L150 85"
        fill="none"
        class="cover__accent"
      />
      <circle
        cx="110"
        cy="35"
        r="2.5"
      />
      <circle
        cx="150"
        cy="85"
        r="2.5"
        class="cover__accent-fill"
      />
    </g>

    <!-- prism: refraction lines for hybrid app -->
    <g
      v-else-if="variant === 'prism'"
      class="cover__g"
    >
      <polygon
        points="100,20 60,90 140,90"
        fill="none"
      />
      <line
        x1="20"
        y1="60"
        x2="80"
        y2="60"
      />
      <line
        x1="120"
        y1="50"
        x2="190"
        y2="35"
        class="cover__accent"
      />
      <line
        x1="120"
        y1="60"
        x2="190"
        y2="60"
        class="cover__accent"
      />
      <line
        x1="120"
        y1="70"
        x2="190"
        y2="85"
        class="cover__accent"
      />
    </g>

    <!-- kline: candlesticks for exchange -->
    <g
      v-else-if="variant === 'kline'"
      class="cover__g"
    >
      <line
        x1="10"
        y1="100"
        x2="190"
        y2="100"
        class="cover__hairline"
      />
      <g>
        <line
          x1="20"
          y1="40"
          x2="20"
          y2="80"
        />
        <rect
          x="16"
          y="50"
          width="8"
          height="20"
        />
        <line
          x1="40"
          y1="35"
          x2="40"
          y2="90"
        />
        <rect
          x="36"
          y="55"
          width="8"
          height="25"
          class="cover__accent-fill"
        />
        <line
          x1="60"
          y1="30"
          x2="60"
          y2="70"
        />
        <rect
          x="56"
          y="42"
          width="8"
          height="22"
          class="cover__accent-fill"
        />
        <line
          x1="80"
          y1="25"
          x2="80"
          y2="60"
        />
        <rect
          x="76"
          y="35"
          width="8"
          height="18"
        />
        <line
          x1="100"
          y1="20"
          x2="100"
          y2="55"
        />
        <rect
          x="96"
          y="25"
          width="8"
          height="22"
          class="cover__accent-fill"
        />
        <line
          x1="120"
          y1="35"
          x2="120"
          y2="70"
        />
        <rect
          x="116"
          y="40"
          width="8"
          height="22"
        />
        <line
          x1="140"
          y1="40"
          x2="140"
          y2="80"
        />
        <rect
          x="136"
          y="50"
          width="8"
          height="22"
          class="cover__accent-fill"
        />
        <line
          x1="160"
          y1="30"
          x2="160"
          y2="65"
        />
        <rect
          x="156"
          y="35"
          width="8"
          height="20"
          class="cover__accent-fill"
        />
        <line
          x1="180"
          y1="25"
          x2="180"
          y2="60"
        />
        <rect
          x="176"
          y="32"
          width="8"
          height="20"
        />
      </g>
    </g>

    <!-- orbit: orbits for DeFi -->
    <g
      v-else-if="variant === 'orbit'"
      class="cover__g"
    >
      <ellipse
        cx="100"
        cy="60"
        rx="78"
        ry="22"
        fill="none"
      />
      <ellipse
        cx="100"
        cy="60"
        rx="55"
        ry="38"
        fill="none"
      />
      <ellipse
        cx="100"
        cy="60"
        rx="30"
        ry="50"
        fill="none"
        class="cover__accent"
      />
      <circle
        cx="100"
        cy="60"
        r="5"
        class="cover__accent-fill"
      />
      <circle
        cx="170"
        cy="50"
        r="2.5"
      />
      <circle
        cx="40"
        cy="80"
        r="2.5"
      />
    </g>

    <!-- panels: video tile grid for meeting -->
    <g
      v-else-if="variant === 'panels'"
      class="cover__g"
    >
      <g
        v-for="r in 3"
        :key="`pr${r}`"
      >
        <g
          v-for="c in 4"
          :key="`pc${c}`"
        >
          <rect
            :x="10 + (c - 1) * 47"
            :y="10 + (r - 1) * 33"
            width="42"
            height="28"
            rx="2"
          />
        </g>
      </g>
      <rect
        x="10"
        y="10"
        width="42"
        height="28"
        rx="2"
        class="cover__accent-fill"
      />
    </g>

    <!-- mosaic: dashboard tiles for ERP -->
    <g
      v-else-if="variant === 'mosaic'"
      class="cover__g"
    >
      <rect
        x="10"
        y="10"
        width="60"
        height="40"
        rx="2"
      />
      <rect
        x="76"
        y="10"
        width="40"
        height="20"
        rx="2"
        class="cover__accent-fill"
      />
      <rect
        x="76"
        y="34"
        width="40"
        height="16"
        rx="2"
      />
      <rect
        x="122"
        y="10"
        width="68"
        height="40"
        rx="2"
      />
      <rect
        x="10"
        y="58"
        width="32"
        height="48"
        rx="2"
        class="cover__accent"
      />
      <rect
        x="48"
        y="58"
        width="48"
        height="22"
        rx="2"
      />
      <rect
        x="48"
        y="84"
        width="48"
        height="22"
        rx="2"
      />
      <rect
        x="102"
        y="58"
        width="88"
        height="48"
        rx="2"
      />
    </g>
  </svg>
</template>

<style scoped>
.cover {
  width: 100%;
  height: 100%;
  display: block;
  background: linear-gradient(135deg, var(--bg-subtle), var(--bg-elev));
  color: var(--fg-subtle);
}

.cover__g {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.25;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cover__g rect,
.cover__g circle:not(.cover__accent-fill) {
  fill: none;
}

.cover__accent {
  stroke: var(--accent);
}

.cover__accent-fill {
  fill: var(--accent);
  stroke: var(--accent);
}

.cover__hairline {
  stroke: var(--border-strong);
}

.cover__caption {
  fill: var(--fg-muted);
  font-family: var(--font-mono);
  font-size: 8px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* Wave: highlight a few bars */
.cover__g rect:nth-child(3n) {
  fill: currentColor;
}
</style>
