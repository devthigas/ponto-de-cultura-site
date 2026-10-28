// Interactive Gallery & Lightbox Component

function initGallery(galleryContainerId, images) {
  const container = document.getElementById(galleryContainerId);
  if (!container || !images || images.length === 0) return;

  let activeIndex = 0;
  let isLightboxOpen = false;

  // Render gallery structure
  container.innerHTML = `
    <div class="flex flex-col gap-6 w-full">
      <span class="inline-block text-xs font-bold font-title uppercase tracking-widest text-primary">
        Galeria de Fotos
      </span>
      <h3 class="font-title font-bold text-2xl text-deep-blue">
        O Projeto em Imagens
      </h3>

      <!-- Main Viewport -->
      <div 
        id="${galleryContainerId}-viewport"
        class="relative h-[300px] sm:h-[400px] md:h-[450px] w-full rounded-premium border border-line bg-slate-900 overflow-hidden shadow-premium group cursor-zoom-in"
      >
        <img
          id="${galleryContainerId}-main-img"
          src="${images[0].src}"
          alt="${images[0].alt}"
          class="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.02]"
        />
        <!-- Shadow Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

        <!-- View Zoom Icon -->
        <div class="absolute top-4 right-4 bg-white/20 hover:bg-white/35 backdrop-blur-md text-white p-3 rounded-full shadow-lg transition-all duration-300 scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
        </div>

        <!-- Caption -->
        <div class="absolute bottom-0 left-0 w-full p-6 text-white">
          <p id="${galleryContainerId}-caption" class="font-title font-bold text-lg sm:text-xl md:text-2xl mb-1 text-white leading-tight">
            ${images[0].caption}
          </p>
          <span id="${galleryContainerId}-counter" class="text-xs text-white/75 font-semibold">
            Foto 1 de ${images.length}
          </span>
        </div>

        <!-- Prev button -->
        <button
          id="${galleryContainerId}-btn-prev"
          type="button"
          class="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white flex items-center justify-center shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 cursor-pointer"
          aria-label="Foto anterior"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <!-- Next button -->
        <button
          id="${galleryContainerId}-btn-next"
          type="button"
          class="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white flex items-center justify-center shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 cursor-pointer"
          aria-label="Próxima foto"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>

      <!-- Thumbnails Row -->
      <div id="${galleryContainerId}-thumbs" class="flex gap-4 overflow-x-auto pb-2">
        ${images
          .map(
            (img, idx) => `
          <button
            type="button"
            data-index="${idx}"
            class="thumb-btn relative w-20 h-16 sm:w-28 sm:h-20 rounded-[10px] overflow-hidden flex-shrink-0 border-2 transition-all duration-300 cursor-pointer ${
              idx === 0
                ? 'border-primary scale-[1.02] shadow-md opacity-100'
                : 'border-line opacity-65 hover:opacity-100 hover:border-primary/45'
            }"
          >
            <img src="${img.src}" alt="${img.alt}" class="w-full h-full object-cover pointer-events-none" />
          </button>
        `
          )
          .join('')}
      </div>

      <!-- Lightbox Modal -->
      <div
        id="${galleryContainerId}-lightbox"
        class="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 md:p-8 hidden"
      >
        <!-- Top Panel Controls -->
        <div class="w-full flex justify-between items-center text-white/80 z-50">
          <span id="${galleryContainerId}-lb-counter" class="font-title font-semibold text-sm">
            Foto 1 de ${images.length}
          </span>
          <button
            id="${galleryContainerId}-lb-close"
            type="button"
            class="p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors duration-200 cursor-pointer"
            aria-label="Fechar galeria"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Central Main Viewport -->
        <div class="relative flex-grow flex items-center justify-center my-6 max-h-[70vh]">
          <button
            id="${galleryContainerId}-lb-prev"
            type="button"
            class="absolute left-2 md:left-6 z-50 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shadow-2xl transition-all duration-200 cursor-pointer"
            aria-label="Foto anterior"
          >
            <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <div class="relative w-full h-full max-w-[90vw] max-h-[70vh] flex items-center justify-center">
            <img
              id="${galleryContainerId}-lb-img"
              src="${images[0].src}"
              alt="${images[0].alt}"
              class="object-contain max-w-full max-h-full rounded-lg"
            />
          </div>

          <button
            id="${galleryContainerId}-lb-next"
            type="button"
            class="absolute right-2 md:right-6 z-50 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shadow-2xl transition-all duration-200 cursor-pointer"
            aria-label="Próxima foto"
          >
            <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        <!-- Bottom Panel Caption -->
        <div class="w-full text-center max-w-[800px] mx-auto pb-4 md:pb-8">
          <p id="${galleryContainerId}-lb-caption" class="font-title font-bold text-xl md:text-2xl text-white leading-relaxed mb-2">
            ${images[0].caption}
          </p>
          <p class="text-white/60 text-xs tracking-wider">
            Ponto de Cultura Kombinação &copy; 2026
          </p>
        </div>
      </div>
    </div>
  `;

  // Elements
  const mainImg = document.getElementById(`${galleryContainerId}-main-img`);
  const captionEl = document.getElementById(`${galleryContainerId}-caption`);
  const counterEl = document.getElementById(`${galleryContainerId}-counter`);
  const btnPrev = document.getElementById(`${galleryContainerId}-btn-prev`);
  const btnNext = document.getElementById(`${galleryContainerId}-btn-next`);
  const viewport = document.getElementById(`${galleryContainerId}-viewport`);
  const thumbBtns = container.querySelectorAll('.thumb-btn');

  const lightbox = document.getElementById(`${galleryContainerId}-lightbox`);
  const lbImg = document.getElementById(`${galleryContainerId}-lb-img`);
  const lbCaption = document.getElementById(`${galleryContainerId}-lb-caption`);
  const lbCounter = document.getElementById(`${galleryContainerId}-lb-counter`);
  const lbClose = document.getElementById(`${galleryContainerId}-lb-close`);
  const lbPrev = document.getElementById(`${galleryContainerId}-lb-prev`);
  const lbNext = document.getElementById(`${galleryContainerId}-lb-next`);

  function updateGallery(index) {
    activeIndex = (index + images.length) % images.length;
    const cur = images[activeIndex];

    // Main view
    mainImg.src = cur.src;
    mainImg.alt = cur.alt;
    captionEl.textContent = cur.caption;
    counterEl.textContent = `Foto ${activeIndex + 1} de ${images.length}`;

    // Lightbox view
    lbImg.src = cur.src;
    lbImg.alt = cur.alt;
    lbCaption.textContent = cur.caption;
    lbCounter.textContent = `Foto ${activeIndex + 1} de ${images.length}`;

    // Thumbnails
    thumbBtns.forEach((btn, idx) => {
      if (idx === activeIndex) {
        btn.className = 'thumb-btn relative w-20 h-16 sm:w-28 sm:h-20 rounded-[10px] overflow-hidden flex-shrink-0 border-2 transition-all duration-300 cursor-pointer border-primary scale-[1.02] shadow-md opacity-100';
      } else {
        btn.className = 'thumb-btn relative w-20 h-16 sm:w-28 sm:h-20 rounded-[10px] overflow-hidden flex-shrink-0 border-2 transition-all duration-300 cursor-pointer border-line opacity-65 hover:opacity-100 hover:border-primary/45';
      }
    });
  }

  function openLightbox() {
    isLightboxOpen = true;
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    isLightboxOpen = false;
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  }

  btnPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    updateGallery(activeIndex - 1);
  });

  btnNext.addEventListener('click', (e) => {
    e.stopPropagation();
    updateGallery(activeIndex + 1);
  });

  viewport.addEventListener('click', openLightbox);

  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    updateGallery(activeIndex - 1);
  });
  lbNext.addEventListener('click', (e) => {
    e.stopPropagation();
    updateGallery(activeIndex + 1);
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  thumbBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      updateGallery(idx);
    });
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!isLightboxOpen) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') updateGallery(activeIndex - 1);
    if (e.key === 'ArrowRight') updateGallery(activeIndex + 1);
  });
}
