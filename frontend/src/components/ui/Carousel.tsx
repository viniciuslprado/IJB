import React, { useEffect, useRef, useState } from 'react'
import { theme } from '../../styles/theme'

type CarouselProps = {
  images: string[]
  height?: number
  autoPlayMs?: number // 0 means no autoplay
}

const Carousel: React.FC<CarouselProps> = ({ images, height = 220, autoPlayMs = 0 }) => {
  const [index, setIndex] = useState(0)
  const total = images.length
  const timerRef = useRef<number | null>(null)
  const hoverRef = useRef(false)

  const next = () => setIndex((i) => (i + 1) % total)
  const prev = () => setIndex((i) => (i - 1 + total) % total)

  useEffect(() => {
    if (!autoPlayMs || total <= 1) return
    timerRef.current = window.setInterval(() => {
      if (!hoverRef.current) next()
    }, autoPlayMs)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [autoPlayMs, total])

  if (total === 0) return null

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height,
        overflow: 'hidden',
        borderRadius: theme.radii.soft,
        background: '#f5f5f5'
      }}
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
    >
      {images.map((src, i) => (
        <img
          key={src + i}
          src={src}
          alt={`slide-${i}`}
          style={{
            position: 'absolute',
            top: 0,
            left: `${(i - index) * 100}%`,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'left 400ms ease'
          }}
        />
      ))}

      {total > 1 && (
        <>
          <button
            aria-label="previous"
            onClick={prev}
            style={{
              position: 'absolute',
              left: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.4)',
              color: '#fff',
              border: 'none',
              padding: '6px 8px',
              borderRadius: 6,
              cursor: 'pointer'
            }}
          >
            ‹
          </button>

          <button
            aria-label="next"
            onClick={next}
            style={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.4)',
              color: '#fff',
              border: 'none',
              padding: '6px 8px',
              borderRadius: 6,
              cursor: 'pointer'
            }}
          >
            ›
          </button>

          <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: 8, display: 'flex', gap: 6 }}>
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`go-to-${i}`}
                onClick={() => setIndex(i)}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 10,
                  border: 'none',
                  background: i === index ? theme.colors.primary : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                  padding: 0
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Carousel
