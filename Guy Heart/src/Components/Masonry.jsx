import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { X } from 'lucide-react'; // Import X icon for the close button

// --- Hooks ---
const useMedia = (queries, values, defaultValue) => {
  const get = () => values[queries.findIndex(q => matchMedia(q).matches)] ?? defaultValue;
  const [value, setValue] = useState(get);

  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach(q => matchMedia(q).addEventListener('change', handler));
    return () => queries.forEach(q => matchMedia(q).removeEventListener('change', handler));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queries]);

  return value;
};

const useMeasure = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size];
};

const preloadImages = async urls => {
  await Promise.all(
    urls.map(
      src =>
        new Promise(resolve => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

// --- Masonry Component ---
const Masonry = ({
  items,
  ease = 'power3.out',
  duration = 0.6,
  stagger = 0.05,
  animateFrom = 'bottom',
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false
}) => {
  const columns = useMedia(
    ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:400px)'],
    [5, 4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);
  
  // NEW: State to handle the lightbox (full screen image)
  const [selectedImage, setSelectedImage] = useState(null);

  // Preload images
  useEffect(() => {
    if (items.length) {
      preloadImages(items.map(i => i.img)).then(() => setImagesReady(true));
    }
  }, [items]);

  const getInitialPosition = item => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    const cWidth = containerRect ? containerRect.width : window.innerWidth;
    const cHeight = containerRect ? containerRect.height : window.innerHeight;

    let direction = animateFrom;
    if (animateFrom === 'random') {
      const dirs = ['top', 'bottom', 'left', 'right'];
      direction = dirs[Math.floor(Math.random() * dirs.length)];
    }

    switch (direction) {
      case 'top': return { x: item.x, y: -200 };
      case 'bottom': return { x: item.x, y: window.innerHeight + 200 };
      case 'left': return { x: -200, y: item.y };
      case 'right': return { x: window.innerWidth + 200, y: item.y };
      case 'center': return { x: cWidth / 2 - item.w / 2, y: cHeight / 2 - item.h / 2 };
      default: return { x: item.x, y: item.y + 100 };
    }
  };

  // Calculate Grid
  const { gridItems, containerHeight } = useMemo(() => {
    if (!width || !items.length) return { gridItems: [], containerHeight: 0 };

    const colHeights = new Array(columns).fill(0);
    const gap = 16;
    const totalGaps = (columns - 1) * gap;
    const columnWidth = (width - totalGaps) / columns;

    const calculatedItems = items.map(child => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = col * (columnWidth + gap);
      const height = child.height / 2;
      const y = colHeights[col];

      colHeights[col] += height + gap;
      return { ...child, x, y, w: columnWidth, h: height };
    });

    const maxHeight = Math.max(...colHeights);

    return { gridItems: calculatedItems, containerHeight: maxHeight };
  }, [columns, items, width]);

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!imagesReady || gridItems.length === 0) return;

    gridItems.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animProps = { x: item.x, y: item.y, width: item.w, height: item.h };

      if (!hasMounted.current) {
        const start = getInitialPosition(item);
        gsap.fromTo(
          selector,
          {
            opacity: 0,
            x: start.x,
            y: start.y,
            width: item.w,
            height: item.h,
            ...(blurToFocus && { filter: 'blur(10px)' })
          },
          {
            opacity: 1,
            ...animProps,
            ...(blurToFocus && { filter: 'blur(0px)' }),
            duration: 0.8,
            ease: 'power3.out',
            delay: index * stagger
          }
        );
      } else {
        gsap.to(selector, {
          ...animProps,
          duration,
          ease,
          overwrite: 'auto'
        });
      }
    });

    hasMounted.current = true;
  }, [gridItems, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

  const handleMouseEnter = (id, element) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, { scale: hoverScale, duration: 0.3, ease: 'power2.out' });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector('.color-overlay');
      if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
    }
  };

  const handleMouseLeave = (id, element) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, { scale: 1, duration: 0.3, ease: 'power2.out' });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector('.color-overlay');
      if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
    }
  };

  return (
    <>
      <div 
        ref={containerRef} 
        className="relative w-full transition-[height] duration-500 ease-out" 
        style={{ height: containerHeight > 0 ? containerHeight : 'auto' }}
      >
        {gridItems.map(item => (
          <div
            key={item.id}
            data-key={item.id}
            className="absolute box-content opacity-0 cursor-zoom-in" 
            style={{ 
               width: item.w,
               height: item.h,
               willChange: 'transform, opacity' 
            }}
            // UPDATED: Set state instead of window.open
            onClick={() => setSelectedImage(item.img)}
            onMouseEnter={e => handleMouseEnter(item.id, e.currentTarget)}
            onMouseLeave={e => handleMouseLeave(item.id, e.currentTarget)}
          >
            <div
              className="relative w-full h-full bg-cover bg-center rounded-[10px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] uppercase text-[10px] leading-[10px]"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              {colorShiftOnHover && (
                <div className="color-overlay absolute inset-0 rounded-[10px] bg-gradient-to-tr from-pink-500/50 to-sky-500/50 opacity-0 pointer-events-none" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>

          {/* Large Image */}
          <img 
            src={selectedImage} 
            alt="Full screen view" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          />
        </div>
      )}
    </>
  );
};

export default Masonry;