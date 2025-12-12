import { useEffect, useMemo, useRef, useState } from 'react'

const ArrowButton = ({ onClick, direction = 'left' }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={direction === 'left' ? 'Previous image' : 'Next image'}
    className={`absolute top-1/2 -translate-y-1/2 ${
      direction === 'left' ? 'left-3' : 'right-3'
    } bg-black/40 hover:bg-black/60 text-white backdrop-blur rounded-full w-10 h-10 flex items-center justify-center transition-colors`}
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {direction === 'left' ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      )}
    </svg>
  </button>
)

export default function ImageCarousel({ images = [], autoPlay = true, intervalMs = 4000, className = '', aspectRatio = '4/3', maxHeight = '98vh' }) {
  const slides = useMemo(() => (images && images.length ? images : []), [images])
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)

  const go = (next) => {
    if (!slides.length) return
    setIndex((prev) => (prev + next + slides.length) % slides.length)
  }

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return
    timerRef.current && clearInterval(timerRef.current)
    timerRef.current = setInterval(() => go(1), intervalMs)
    return () => timerRef.current && clearInterval(timerRef.current)
  }, [autoPlay, intervalMs, slides.length])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (!slides.length) return null

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{ aspectRatio, maxHeight, background: '#111' }}
    >
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Slide ${i + 1}`}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 shadow-2xl ${
            i === index ? 'opacity-100' : 'opacity-0'
          } object-cover bg-black`}
        />
      ))}

      {/* Gradient overlay for premium look */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

      {/* Controls */}
      {slides.length > 1 && (
        <>
          <ArrowButton direction="left" onClick={() => go(-1)} />
          <ArrowButton direction="right" onClick={() => go(1)} />
        </>
      )}

      {/* Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === index ? 'bg-white shadow ring-2 ring-white/50 w-4' : 'bg-white/50 hover:bg-white/70'
            }`}
          />)
        )}
      </div>
    </div>
  )
}

