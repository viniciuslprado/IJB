import React, { useEffect, useRef, useState } from 'react'
import { theme } from '../../styles/theme'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import CarouselNavButton from './CarouselNavButton'

type CarouselProps = {
  images: string[]
  height?: number
  autoPlayMs?: number // 0 means no autoplay
}

// NavButton extracted to `CarouselNavButton.tsx`

const Carousel: React.FC<CarouselProps> = ({ images, height = 220, autoPlayMs = 0 }) => {
  const [index, setIndex] = useState(0)
  const total = images.length
  const timerRef = useRef<number | null>(null)
  const hoverRef = useRef(false)
  const [isMobile, setIsMobile] = useState<boolean>(() => (typeof window !== 'undefined' ? window.innerWidth <= 600 : false))

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

  // responsive detection: update isMobile on resize
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 600)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

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
          alt={`slide ${i + 1}`}
          loading="lazy"
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
          <CarouselNavButton ariaLabel="anterior" onClick={prev} side="left" isMobile={isMobile}>
            <FaChevronLeft size={isMobile ? 18 : 20} />
          </CarouselNavButton>

          <CarouselNavButton ariaLabel="próximo" onClick={next} side="right" isMobile={isMobile}>
            <FaChevronRight size={isMobile ? 18 : 20} />
          </CarouselNavButton>

          {/* --- Indicadores (Bolinhas) --- */}
          <div style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8, zIndex: 10 }}>
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 999,
                  border: 'none',
                  background: i === index ? '#fbc046' : 'rgba(255,255,255,0.6)',
                  cursor: 'pointer',
                  transition: 'all 300ms ease',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                  padding: 0
                }}
                onMouseEnter={(e) => {
                  if (i !== index) e.currentTarget.style.background = 'rgba(255,255,255,1)'
                }}
                onMouseLeave={(e) => {
                  if (i !== index) e.currentTarget.style.background = 'rgba(255,255,255,0.6)'
                }}
                aria-label={`Ir para imagem ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Carousel
