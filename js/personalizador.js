/**
 * ============================================================================
 * MOTOR INTERACTIVO DEL PERSONALIZADOR DE POLERONES - SERENDIPIA CREACIONES
 * ============================================================================
 */

(function () {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. PALETA DE COLORES TEXTILES REALES (Telas habituales en Chile)
  // -------------------------------------------------------------------------
  const FABRIC_COLORS = [
    { id: 'marino', name: 'Azul Marino', hex: '#162238' },
    { id: 'negro', name: 'Negro', hex: '#1a1a1a' },
    { id: 'melange', name: 'Gris Melange', hex: '#9ea3aa' },
    { id: 'carbon', name: 'Gris Carbón', hex: '#3b4252' },
    { id: 'blanco', name: 'Blanco', hex: '#f8fafc' },
    { id: 'burdeo', name: 'Burdeo', hex: '#581423' },
    { id: 'azul_rey', name: 'Azul Rey', hex: '#0047ab' },
    { id: 'verde_botella', name: 'Verde Botella', hex: '#0b4c2b' },
    { id: 'verde_militar', name: 'Verde Militar', hex: '#424c3a' },
    { id: 'rojo', name: 'Rojo Carmesí', hex: '#b91c1c' },
    { id: 'mostaza', name: 'Mostaza Dorado', hex: '#d97706' },
    { id: 'rosado', name: 'Rosado Pastel', hex: '#f472b6' },
    { id: 'celeste', name: 'Celeste Escolar', hex: '#38bdf8' },
    { id: 'naranjo', name: 'Naranjo', hex: '#ea580c' },
    { id: 'morado', name: 'Morado', hex: '#6b21a8' },
    { id: 'beige', name: 'Beige / Crema', hex: '#d7c6a5' },
    { id: 'amarillo', name: 'Amarillo Claro', hex: '#fde047' },
    { id: 'lavanda', name: 'Lavanda', hex: '#c084fc' }
  ];

  // -------------------------------------------------------------------------
  // 2. CATÁLOGO COMPLETO DE MODELOS Y SUBMODELOS (Extraídos de las capturas)
  // -------------------------------------------------------------------------
  const CATALOG = {
    americano: {
      name: 'Americano',
      icon: '🏈',
      colorTheme: '#3b82f6',
      submodels: [
        { id: 'americano_basico', name: 'Americano / Básico', cuts: ['torso', 'mangas', 'cuello_pretinas', 'broches'] },
        { id: 'americano_capucha', name: 'Americano / Con Capucha', cuts: ['torso', 'mangas', 'gorro_ext', 'gorro_int', 'cuello_pretinas', 'broches'] },
        { id: 'americano_linea', name: 'Americano / Una Línea', cuts: ['torso', 'mangas', 'cuello_pretinas', 'lineas_rib', 'broches'] },
        { id: 'americano_doble_linea', name: 'Americano / Doble Línea', cuts: ['torso', 'mangas', 'cuello_pretinas', 'lineas_rib', 'broches'] },
        { id: 'americano_capucha_linea', name: 'Americano / Con Capucha + Líneas', cuts: ['torso', 'mangas', 'gorro_ext', 'gorro_int', 'cuello_pretinas', 'lineas_rib', 'broches'] }
      ]
    },
    canguro: {
      name: 'Canguro',
      icon: '🦘',
      colorTheme: '#ef4444',
      submodels: [
        { id: 'canguro_regular', name: 'Canguro / Regular', cuts: ['torso', 'mangas', 'gorro_ext', 'gorro_int', 'bolsillo', 'pretina_punos', 'cordon'] },
        { id: 'canguro_ranglan', name: 'Canguro / Manga Ranglan', cuts: ['torso', 'mangas_ranglan', 'gorro_ext', 'gorro_int', 'bolsillo', 'pretina_punos', 'cordon'] },
        { id: 'canguro_franja_pecho', name: 'Canguro / Franja Pecho', cuts: ['pecho_sup', 'franja_pecho', 'cuerpo_inf', 'mangas', 'gorro_ext', 'gorro_int', 'bolsillo', 'pretina_punos', 'cordon'] },
        { id: 'canguro_franja_horizontal', name: 'Canguro / Franja Horizontal', cuts: ['pecho_sup', 'franja_central', 'cuerpo_inf', 'mangas', 'gorro_ext', 'gorro_int', 'bolsillo', 'pretina_punos', 'cordon'] },
        { id: 'canguro_corte_bolsillo', name: 'Canguro / Corte Sobre Bolsillo', cuts: ['pecho_sup', 'cuerpo_inf', 'mangas', 'gorro_ext', 'gorro_int', 'bolsillo', 'pretina_punos', 'cordon'] },
        { id: 'canguro_corte_superior', name: 'Canguro / Corte Superior', cuts: ['pecho_sup', 'cuerpo_inf', 'mangas', 'gorro_ext', 'gorro_int', 'bolsillo', 'pretina_punos', 'cordon'] },
        { id: 'canguro_doble_franja', name: 'Canguro / Doble Franja', cuts: ['pecho_sup', 'franja_1', 'franja_2', 'cuerpo_inf', 'mangas', 'gorro_ext', 'gorro_int', 'bolsillo', 'pretina_punos', 'cordon'] },
        { id: 'canguro_diagonal', name: 'Canguro / Franja Diagonal', cuts: ['pecho_diagonal', 'cuerpo_inf', 'mangas', 'gorro_ext', 'gorro_int', 'bolsillo', 'pretina_punos', 'cordon'] },
        { id: 'canguro_zigzag', name: 'Canguro / Corte Zig Zag', cuts: ['pecho_zigzag', 'cuerpo_inf', 'mangas', 'gorro_ext', 'gorro_int', 'bolsillo', 'pretina_punos', 'cordon'] },
        { id: 'canguro_punta_v', name: 'Canguro / Corte en Punta / V', cuts: ['pecho_v', 'cuerpo_inf', 'mangas', 'gorro_ext', 'gorro_int', 'bolsillo', 'pretina_punos', 'cordon'] },
        { id: 'canguro_mangas_dif', name: 'Canguro / Mangas Diferentes', cuts: ['torso', 'manga_izq', 'manga_der', 'gorro_ext', 'gorro_int', 'bolsillo', 'pretina_punos', 'cordon'] },
        { id: 'canguro_bicolor', name: 'Canguro / Bicolor Mitad y Mitad', cuts: ['mitad_izq', 'mitad_der', 'manga_izq', 'manga_der', 'gorro_ext', 'gorro_int', 'bolsillo', 'pretina_punos', 'cordon'] }
      ]
    },
    neck: {
      name: 'Neck',
      icon: '🧣',
      colorTheme: '#06b6d4',
      submodels: [
        { id: 'neck_basico', name: 'Neck / Básico 1/4 Cierre', cuts: ['torso', 'mangas_ranglan', 'cuello_alto', 'cierre', 'bolsillos_laterales', 'pretina_punos'] }
      ]
    },
    polo: {
      name: 'Polo',
      icon: '👕',
      colorTheme: '#eab308',
      submodels: [
        { id: 'polo_basico', name: 'Polo / Básico', cuts: ['torso', 'mangas', 'cuello_rib', 'pretina_punos'] },
        { id: 'polo_corte_pecho', name: 'Polo / Corte Pecho', cuts: ['pecho_sup', 'cuerpo_inf', 'mangas', 'cuello_rib', 'pretina_punos'] },
        { id: 'polo_corte_horizontal', name: 'Polo / Corte Horizontal', cuts: ['pecho_sup', 'franja_central', 'cuerpo_inf', 'mangas', 'cuello_rib', 'pretina_punos'] },
        { id: 'polo_manga_2cortes', name: 'Polo / Manga 2 Cortes', cuts: ['torso', 'mangas', 'manga_franja', 'cuello_rib', 'pretina_punos'] },
        { id: 'polo_ranglan', name: 'Polo / Manga Ranglan 2 Cortes', cuts: ['torso', 'mangas_ranglan', 'manga_franja', 'cuello_rib', 'pretina_punos'] }
      ]
    },
    zipper: {
      name: 'Zipper',
      icon: '⚡',
      colorTheme: '#e33391',
      submodels: [
        { id: 'zipper_regular', name: 'Zipper / Regular', cuts: ['torso', 'mangas', 'gorro_ext', 'gorro_int', 'bolsillos_div', 'cierre_full', 'pretina_punos', 'cordon'] },
        { id: 'zipper_franja_pecho', name: 'Zipper / Franja Pecho', cuts: ['pecho_sup', 'franja_pecho', 'cuerpo_inf', 'mangas', 'gorro_ext', 'gorro_int', 'bolsillos_div', 'cierre_full', 'pretina_punos', 'cordon'] },
        { id: 'zipper_franja_horizontal', name: 'Zipper / Franja Horizontal', cuts: ['pecho_sup', 'franja_central', 'cuerpo_inf', 'mangas', 'gorro_ext', 'gorro_int', 'bolsillos_div', 'cierre_full', 'pretina_punos', 'cordon'] },
        { id: 'zipper_corte_horizontal', name: 'Zipper / Corte Horizontal', cuts: ['pecho_sup', 'cuerpo_inf', 'mangas', 'gorro_ext', 'gorro_int', 'bolsillos_div', 'cierre_full', 'pretina_punos', 'cordon'] },
        { id: 'zipper_corte_diagonal', name: 'Zipper / Corte Diagonal', cuts: ['pecho_diagonal', 'cuerpo_inf', 'mangas', 'gorro_ext', 'gorro_int', 'bolsillos_div', 'cierre_full', 'pretina_punos', 'cordon'] },
        { id: 'zipper_corte_bolsillo', name: 'Zipper / Corte Sobre Bolsillo', cuts: ['pecho_sup', 'cuerpo_inf', 'mangas', 'gorro_ext', 'gorro_int', 'bolsillos_div', 'cierre_full', 'pretina_punos', 'cordon'] },
        { id: 'zipper_ranglan', name: 'Zipper / Manga Ranglan', cuts: ['torso', 'mangas_ranglan', 'gorro_ext', 'gorro_int', 'bolsillos_div', 'cierre_full', 'pretina_punos', 'cordon'] },
        { id: 'zipper_franja_diagonal', name: 'Zipper / Franja Diagonal', cuts: ['pecho_sup', 'franja_diagonal', 'cuerpo_inf', 'mangas', 'gorro_ext', 'gorro_int', 'bolsillos_div', 'cierre_full', 'pretina_punos', 'cordon'] },
        { id: 'zipper_diagonal_triangulo', name: 'Zipper / Diagonal + Triángulo', cuts: ['pecho_triangulo', 'cuerpo_inf', 'mangas', 'gorro_ext', 'gorro_int', 'bolsillos_div', 'cierre_full', 'pretina_punos', 'cordon'] }
      ]
    }
  };

  // Nombres legibles para el dropdown "¿Qué vas a pintar?"
  const PART_LABELS = {
    torso: 'Torso / Cuerpo Completo',
    pecho_sup: 'Pecho / Parte Superior',
    franja_pecho: 'Franja de Pecho',
    franja_central: 'Franja Central',
    franja_1: 'Franja Superior',
    franja_2: 'Franja Inferior',
    franja_diagonal: 'Franja Diagonal',
    pecho_diagonal: 'Corte Diagonal Superior',
    pecho_zigzag: 'Corte Zig Zag Pecho',
    pecho_v: 'Corte en Punta / V',
    pecho_triangulo: 'Corte Triángulo Superior',
    cuerpo_inf: 'Cuerpo / Parte Inferior',
    mangas: 'Mangas (Ambas)',
    manga_izq: 'Manga Izquierda',
    manga_der: 'Manga Derecha',
    mangas_ranglan: 'Mangas Corte Ranglan',
    manga_franja: 'Franja de Mangas',
    gorro_ext: 'Capucha (Exterior)',
    gorro_int: 'Forro Interior Capucha',
    cuello_alto: 'Cuello Alto con Cierre',
    cuello_rib: 'Cuello Redondo Rib',
    cuello_pretinas: 'Cuello, Pretina y Puños',
    pretina_punos: 'Pretina de Cintura y Puños',
    lineas_rib: 'Líneas de Contraste en Rib',
    bolsillo: 'Bolsillo Canguro',
    bolsillos_laterales: 'Bolsillos Laterales',
    bolsillos_div: 'Bolsillos Delanteros',
    broches: 'Broches Metálicos',
    cierre: 'Cierre Metálico 1/4',
    cierre_full: 'Cierre Frontal Completo',
    cordon: 'Cordón de Capucha',
    mitad_izq: 'Mitad Izquierda Torso',
    mitad_der: 'Mitad Derecha Torso'
  };

  // -------------------------------------------------------------------------
  // 3. ESTADO GLOBAL DE LA APLICACIÓN
  // -------------------------------------------------------------------------
  let state = {
    categoryKey: 'canguro',
    submodelId: 'canguro_regular',
    activePart: 'torso',
    selectedColorHex: '#162238',
    // Mapeo de colores asignados por pieza
    colors: {},
    // Personalizaciones adicionales
    customText: 'GENERACIÓN 2026',
    customNickname: '#MATI',
    textSize: 22,
    nickSize: 13,
    textPos: { x: 200, y: 170 },
    textTargetView: 'espalda', // 'espalda' o 'frente'
    textFont: "'Plus Jakarta Sans', sans-serif",
    textColor: '#ffffff',
    textPosition: 'espalda',
    uploadedLogoSrc: null,
    logoPos: { x: 155, y: 140 },
    logoSize: 36,
    activeView: 'frente' // Para visualización en móviles ('frente' o 'espalda')
  };

  // -------------------------------------------------------------------------
  // 4. ELEMENTOS DEL DOM
  // -------------------------------------------------------------------------
  const elements = {
    currentModelName: document.getElementById('currentModelName'),
    btnChangeModel: document.getElementById('btnChangeModel'),
    modelPickerModal: document.getElementById('modelPickerModal'),
    btnCloseModal: document.getElementById('btnCloseModal'),
    modalCategoriesNav: document.getElementById('modalCategoriesNav'),
    submodelsGrid: document.getElementById('submodelsGrid'),
    partSelectorDropdown: document.getElementById('partSelectorDropdown'),
    currentColorDot: document.getElementById('currentColorDot'),
    currentColorText: document.getElementById('currentColorText'),
    paletteGrid: document.getElementById('paletteGrid'),
    inputNativeColor: document.getElementById('inputNativeColor'),
    toolTabBtns: document.querySelectorAll('.tool-tab-btn'),
    tabPanes: document.querySelectorAll('.tab-pane'),
    // Texto
    inputTextContent: document.getElementById('inputTextContent'),
    inputNicknameContent: document.getElementById('inputNicknameContent'),
    fontOptionBtns: document.querySelectorAll('.font-option-btn'),
    inputTextColor: document.getElementById('inputTextColor'),
    sliderTextSize: document.getElementById('sliderTextSize'),
    labelValTextSize: document.getElementById('labelValTextSize'),
    btnTextSizeDown: document.getElementById('btnTextSizeDown'),
    btnTextSizeUp: document.getElementById('btnTextSizeUp'),
    sliderNickSize: document.getElementById('sliderNickSize'),
    labelValNickSize: document.getElementById('labelValNickSize'),
    btnNickSizeDown: document.getElementById('btnNickSizeDown'),
    btnNickSizeUp: document.getElementById('btnNickSizeUp'),
    viewTargetBtns: document.querySelectorAll('.view-target-btn'),
    posQuickBtns: document.querySelectorAll('.position-selector-grid .pos-btn'),
    btnMoveUp: document.getElementById('btnMoveUp'),
    btnMoveDown: document.getElementById('btnMoveDown'),
    btnMoveLeft: document.getElementById('btnMoveLeft'),
    btnMoveRight: document.getElementById('btnMoveRight'),
    btnMoveCenter: document.getElementById('btnMoveCenter'),
    // Logo
    logoFileInput: document.getElementById('logoFileInput'),
    uploadDropzone: document.getElementById('uploadDropzone'),
    logoPreviewBox: document.getElementById('logoPreviewBox'),
    logoThumb: document.getElementById('logoThumb'),
    btnRemoveLogo: document.getElementById('btnRemoveLogo'),
    // Canvas y SVGs
    frontSvgContainer: document.getElementById('frontSvgContainer'),
    backSvgContainer: document.getElementById('backSvgContainer'),
    viewPillBtns: document.querySelectorAll('.view-pill-btn'),
    viewCardFront: document.getElementById('viewCardFront'),
    viewCardBack: document.getElementById('viewCardBack'),
    // Acciones
    btnWhatsAppQuote: document.getElementById('btnWhatsAppQuote'),
    btnDownloadPng: document.getElementById('btnDownloadPng'),
    btnResetAll: document.getElementById('btnResetAll'),
    toastNotice: document.getElementById('toastNotice'),
    toastMessage: document.getElementById('toastMessage')
  };

  // -------------------------------------------------------------------------
  // 5. INICIALIZACIÓN
  // -------------------------------------------------------------------------
  function init() {
    renderPaletteSwatches();
    setSubmodel('canguro', 'canguro_regular');
    setupEventListeners();
    setupTabNavigation();
  }

  // -------------------------------------------------------------------------
  // 6. GENERADOR DE PALETA DE COLORES
  // -------------------------------------------------------------------------
  function renderPaletteSwatches() {
    elements.paletteGrid.innerHTML = '';
    FABRIC_COLORS.forEach(color => {
      const swatch = document.createElement('div');
      swatch.className = 'color-swatch';
      swatch.style.backgroundColor = color.hex;
      swatch.title = color.name;
      swatch.setAttribute('data-hex', color.hex);
      swatch.setAttribute('data-name', color.name);

      if (color.hex.toLowerCase() === state.selectedColorHex.toLowerCase()) {
        swatch.classList.add('active');
      }

      swatch.addEventListener('click', () => {
        applyColor(color.hex, color.name);
      });

      elements.paletteGrid.appendChild(swatch);
    });
  }

  // -------------------------------------------------------------------------
  // 7. APLICACIÓN DE COLOR A LA PARTE ACTIVA
  // -------------------------------------------------------------------------
  function applyColor(hex, name) {
    state.selectedColorHex = hex;
    state.colors[state.activePart] = hex;

    // Actualizar indicador visual
    elements.currentColorDot.style.backgroundColor = hex;
    const foundColor = FABRIC_COLORS.find(c => c.hex.toLowerCase() === hex.toLowerCase());
    elements.currentColorText.textContent = foundColor ? foundColor.name : (name || hex);

    // Actualizar clase activa en swatches
    document.querySelectorAll('.color-swatch').forEach(s => {
      s.classList.toggle('active', s.getAttribute('data-hex').toLowerCase() === hex.toLowerCase());
    });

    // Actualizar los SVG en tiempo real
    updateSvgColors();
  }

  // -------------------------------------------------------------------------
  // 8. CONFIGURACIÓN DEL SUBMODELO ACTIVO
  // -------------------------------------------------------------------------
  function setSubmodel(catKey, subId) {
    state.categoryKey = catKey;
    state.submodelId = subId;
    const cat = CATALOG[catKey];
    const sub = cat.submodels.find(s => s.id === subId) || cat.submodels[0];

    // Actualizar títulos
    elements.currentModelName.textContent = sub.name;

    // Poblar selector de partes
    elements.partSelectorDropdown.innerHTML = '';
    sub.cuts.forEach(partKey => {
      const opt = document.createElement('option');
      opt.value = partKey;
      opt.textContent = PART_LABELS[partKey] || partKey;
      elements.partSelectorDropdown.appendChild(opt);
    });

    // Por defecto, inicializar partes sin color a gris melange o negro
    state.activePart = sub.cuts[0];
    elements.partSelectorDropdown.value = state.activePart;

    // Asignar colores por defecto elegantes si no existen
    sub.cuts.forEach(part => {
      if (!state.colors[part]) {
        if (part.includes('manga')) state.colors[part] = '#162238'; // Marino
        else if (part.includes('pecho') || part.includes('franja')) state.colors[part] = '#f8fafc'; // Blanco
        else if (part.includes('gorro_int')) state.colors[part] = '#581423'; // Burdeo
        else if (part.includes('cordon') || part.includes('broches') || part.includes('cierre')) state.colors[part] = '#f8fafc';
        else state.colors[part] = '#162238'; // Marino base
      }
    });

    // Renderizar SVGs Vectoriales de Frente y Espalda
    renderHoodieSvgs(sub);
    updateSvgColors();
    updateTextOverlays();
    updateLogoOverlay();
  }

  // -------------------------------------------------------------------------
  // 9. MOTOR RENDERIZADOR SVG MODULAR (VISTA FRENTE Y ESPALDA)
  // -------------------------------------------------------------------------
  function renderHoodieSvgs(submodel) {
    const isAmericano = state.categoryKey === 'americano';
    const isNeck = state.categoryKey === 'neck';
    const isPolo = state.categoryKey === 'polo';
    const isZipper = state.categoryKey === 'zipper';
    const subId = submodel.id;

    // Generar SVG Frente
    elements.frontSvgContainer.innerHTML = buildSvgMarkup({
      view: 'frente',
      category: state.categoryKey,
      submodelId: subId
    });

    // Generar SVG Espalda
    elements.backSvgContainer.innerHTML = buildSvgMarkup({
      view: 'espalda',
      category: state.categoryKey,
      submodelId: subId
    });

    // Vincular clic interactivo en las piezas del SVG
    attachSvgPartListeners();
  }

  /**
   * Construye el SVG vectorial realista con sombras de tela, pliegues anatómicos y pespuntes
   */
  function buildSvgMarkup(opts) {
    const isFront = opts.view === 'frente';
    const cat = opts.category;
    const subId = opts.submodelId;

    const hasHood = cat === 'canguro' || cat === 'zipper' || subId.includes('capucha');
    const hasPocket = cat === 'canguro' || cat === 'zipper';
    const isFullZip = cat === 'zipper';
    const isAmericano = cat === 'americano';
    const isNeck = cat === 'neck';
    const isPolo = cat === 'polo';
    const isRanglan = subId.includes('ranglan');

    let bodyPaths = '';
    let sleevesPaths = '';
    let detailsPaths = '';
    let shadingPaths = '';

    // A. MANGAS (Curvas anatómicas realistas con caída natural en hombros y codos)
    if (subId.includes('mangas_dif')) {
      sleevesPaths = `
        <!-- Manga Izquierda Anatómica -->
        <path class="hoodie-part" data-part="manga_izq" d="M125 90 C100 95, 60 160, 48 230 C40 275, 36 300, 36 310 C50 320, 68 322, 78 305 C85 285, 96 230, 110 185 C122 150, 134 125, 134 125 Z" stroke="#1e293b" stroke-width="1.8"/>
        <!-- Manga Derecha Anatómica -->
        <path class="hoodie-part" data-part="manga_der" d="M275 90 C300 95, 340 160, 352 230 C360 275, 364 300, 364 310 C350 320, 332 322, 322 305 C315 285, 304 230, 290 185 C278 150, 266 125, 266 125 Z" stroke="#1e293b" stroke-width="1.8"/>
      `;
    } else if (isRanglan) {
      sleevesPaths = `
        <!-- Manga Ranglan Izquierda -->
        <path class="hoodie-part" data-part="mangas_ranglan" d="M165 78 C140 85, 75 160, 52 235 C42 275, 36 300, 36 310 C50 320, 68 322, 78 305 C86 280, 98 220, 112 180 C125 145, 138 120, 138 120 C145 105, 155 90, 165 78 Z" stroke="#1e293b" stroke-width="1.8"/>
        <!-- Manga Ranglan Derecha -->
        <path class="hoodie-part" data-part="mangas_ranglan" d="M235 78 C260 85, 325 160, 348 235 C358 275, 364 300, 364 310 C350 320, 332 322, 322 305 C314 280, 302 220, 288 180 C275 145, 262 120, 262 120 C255 105, 245 90, 235 78 Z" stroke="#1e293b" stroke-width="1.8"/>
      `;
    } else {
      sleevesPaths = `
        <!-- Mangas Regulares Anatómicas -->
        <path class="hoodie-part" data-part="mangas" d="M125 90 C100 95, 60 160, 48 230 C40 275, 36 300, 36 310 C50 320, 68 322, 78 305 C85 285, 96 230, 110 185 C122 150, 134 125, 134 125 Z" stroke="#1e293b" stroke-width="1.8"/>
        <path class="hoodie-part" data-part="mangas" d="M275 90 C300 95, 340 160, 352 230 C360 275, 364 300, 364 310 C350 320, 332 322, 322 305 C315 285, 304 230, 290 185 C278 150, 266 125, 266 125 Z" stroke="#1e293b" stroke-width="1.8"/>
      `;
    }

    // Puños acanalados elásticos con textura sutil de rib
    const cuffs = `
      <!-- Puño Izquierdo -->
      <g>
        <path class="hoodie-part" data-part="pretina_punos" d="M36 310 L26 328 C34 336, 52 338, 62 325 L78 305 C66 318, 48 318, 36 310 Z" stroke="#1e293b" stroke-width="1.5"/>
        <line x1="32" y1="318" x2="68" y2="315" stroke="rgba(0,0,0,0.2)" stroke-width="1" stroke-dasharray="2 1"/>
      </g>
      <!-- Puño Derecho -->
      <g>
        <path class="hoodie-part" data-part="pretina_punos" d="M364 310 L374 328 C366 336, 348 338, 338 325 L322 305 C334 318, 352 318, 364 310 Z" stroke="#1e293b" stroke-width="1.5"/>
        <line x1="368" y1="318" x2="332" y2="315" stroke="rgba(0,0,0,0.2)" stroke-width="1" stroke-dasharray="2 1"/>
      </g>
    `;

    // B. TORSO REALISTA SEGÚN SUBMODELO
    if (subId.includes('franja_pecho')) {
      bodyPaths = `
        <!-- Pecho Superior Curvo -->
        <path class="hoodie-part" data-part="pecho_sup" d="M125 90 C165 100, 235 100, 275 90 C265 110, 266 125, 268 140 C225 146, 175 146, 132 140 C134 125, 135 110, 125 90 Z" stroke="#1e293b" stroke-width="1.8"/>
        <!-- Franja de Pecho Anatómica -->
        <path class="hoodie-part" data-part="franja_pecho" d="M132 140 C175 146, 225 146, 268 140 C270 160, 271 180, 272 195 C225 201, 175 201, 128 195 C129 180, 130 160, 132 140 Z" stroke="#1e293b" stroke-width="1.8"/>
        <!-- Cuerpo Inferior -->
        <path class="hoodie-part" data-part="cuerpo_inf" d="M128 195 C175 201, 225 201, 272 195 C273 235, 272 285, 268 325 C225 332, 175 332, 132 325 C128 285, 127 235, 128 195 Z" stroke="#1e293b" stroke-width="1.8"/>
      `;
    } else if (subId.includes('franja_horizontal')) {
      bodyPaths = `
        <path class="hoodie-part" data-part="pecho_sup" d="M125 90 C165 100, 235 100, 275 90 C267 125, 270 150, 270 165 C225 170, 175 170, 130 165 C130 150, 133 125, 125 90 Z" stroke="#1e293b" stroke-width="1.8"/>
        <path class="hoodie-part" data-part="franja_central" d="M130 165 C175 170, 225 170, 270 165 C271 185, 271 205, 271 218 C225 224, 175 224, 129 218 C129 205, 129 185, 130 165 Z" stroke="#1e293b" stroke-width="1.8"/>
        <path class="hoodie-part" data-part="cuerpo_inf" d="M129 218 C175 224, 225 224, 271 218 C271 255, 270 295, 268 325 C225 332, 175 332, 132 325 C130 295, 129 255, 129 218 Z" stroke="#1e293b" stroke-width="1.8"/>
      `;
    } else if (subId.includes('punta_v') || subId.includes('diagonal')) {
      bodyPaths = `
        <path class="hoodie-part" data-part="pecho_v" d="M125 90 C165 100, 235 100, 275 90 C269 135, 270 160, 270 170 L200 215 L130 170 C130 160, 131 135, 125 90 Z" stroke="#1e293b" stroke-width="1.8"/>
        <path class="hoodie-part" data-part="cuerpo_inf" d="M130 170 L200 215 L270 170 C271 210, 270 285, 268 325 C225 332, 175 332, 132 325 C130 285, 129 210, 130 170 Z" stroke="#1e293b" stroke-width="1.8"/>
      `;
    } else if (subId.includes('bicolor')) {
      bodyPaths = `
        <path class="hoodie-part" data-part="mitad_izq" d="M125 90 C155 98, 195 98, 200 98 L200 329 C175 331, 145 329, 132 325 C128 285, 127 235, 128 175 C133 130, 128 105, 125 90 Z" stroke="#1e293b" stroke-width="1.8"/>
        <path class="hoodie-part" data-part="mitad_der" d="M200 98 C205 98, 245 98, 275 90 C272 105, 267 130, 272 175 C273 235, 272 285, 268 325 C255 329, 225 331, 200 329 Z" stroke="#1e293b" stroke-width="1.8"/>
      `;
    } else {
      // Regular / Básico con caída anatómica suave
      bodyPaths = `
        <path class="hoodie-part" data-part="torso" d="M125 90 C165 100, 235 100, 275 90 C268 125, 272 165, 272 185 C273 235, 272 285, 268 325 C225 332, 175 332, 132 325 C128 285, 127 235, 128 185 C128 165, 132 125, 125 90 Z" stroke="#1e293b" stroke-width="1.8"/>
      `;
    }

    // Pretina de cintura (rib elástico con textura realista y curva natural)
    const waistband = `
      <g>
        <path class="hoodie-part" data-part="pretina_punos" d="M132 325 C175 332, 225 332, 268 325 L266 352 C225 359, 175 359, 134 352 Z" stroke="#1e293b" stroke-width="1.8"/>
        <line x1="140" y1="338" x2="260" y2="338" stroke="rgba(0,0,0,0.18)" stroke-width="1.2" stroke-dasharray="3 1.5"/>
      </g>
    `;

    // C. DETALLES REALISTAS (Gorro con volumen 3D, Bolsillo Canguro con sombra, Cierres, etc.)
    if (isFront) {
      if (hasHood) {
        detailsPaths += `
          <!-- Capucha Exterior Frontal con Volumen y Caída Orgánica -->
          <path class="hoodie-part" data-part="gorro_ext" d="M142 85 C126 40, 160 18, 200 16 C240 18, 274 40, 258 85 C250 110, 225 118, 200 118 C175 118, 150 110, 142 85 Z" stroke="#1e293b" stroke-width="2"/>
          <!-- Forro Interior de Capucha con Profundidad -->
          <path class="hoodie-part" data-part="gorro_int" d="M164 78 C158 45, 242 45, 236 78 C228 102, 172 102, 164 78 Z" stroke="#1e293b" stroke-width="1.5"/>
          
          <!-- Ojetillos Metálicos en el cuello -->
          <circle cx="186" cy="98" r="3.2" fill="#94a3b8" stroke="#475569" stroke-width="1"/>
          <circle cx="214" cy="98" r="3.2" fill="#94a3b8" stroke="#475569" stroke-width="1"/>

          <!-- Cordones Tubulares con Gravedad Natural y Punteras Metálicas -->
          <path class="hoodie-part" data-part="cordon" d="M186 98 C182 135, 178 155, 182 178" stroke="#f8fafc" stroke-width="3" stroke-linecap="round" fill="none"/>
          <rect x="179.5" y="174" width="5" height="10" rx="2" fill="#cbd5e1" stroke="#475569" stroke-width="0.8"/>

          <path class="hoodie-part" data-part="cordon" d="M214 98 C218 135, 222 155, 218 178" stroke="#f8fafc" stroke-width="3" stroke-linecap="round" fill="none"/>
          <rect x="215.5" y="174" width="5" height="10" rx="2" fill="#cbd5e1" stroke="#475569" stroke-width="0.8"/>
        `;
      } else if (isAmericano || isPolo) {
        detailsPaths += `
          <!-- Cuello Rib Clásico Deportivo -->
          <path class="hoodie-part" data-part="cuello_rib" d="M148 85 C175 110, 225 110, 252 85 C235 72, 165 72, 148 85 Z" stroke="#1e293b" stroke-width="2"/>
          <path d="M152 87 C175 106, 225 106, 248 87" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/>
        `;
      } else if (isNeck) {
        detailsPaths += `
          <!-- Cuello Alto con Cierre 1/4 -->
          <path class="hoodie-part" data-part="cuello_alto" d="M156 88 L156 50 C185 45, 215 45, 244 50 L244 88 Z" stroke="#1e293b" stroke-width="2"/>
          <line class="hoodie-part" data-part="cierre" x1="200" y1="50" x2="200" y2="135" stroke="#cbd5e1" stroke-width="3.5" stroke-dasharray="3 1.5"/>
          <!-- Deslizador de cierre metálico -->
          <polygon points="196,128 204,128 202,136 198,136" fill="#e2e8f0" stroke="#334155" stroke-width="1"/>
        `;
      }

      if (hasPocket) {
        if (isFullZip) {
          detailsPaths += `
            <!-- Bolsillos divididos Zipper con Pespunto -->
            <path class="hoodie-part" data-part="bolsillos_div" d="M140 240 L175 240 L196 255 L196 322 C175 325, 145 323, 134 321 C133 300, 137 265, 140 240 Z" stroke="#1e293b" stroke-width="1.8"/>
            <path class="hoodie-part" data-part="bolsillos_div" d="M260 240 L225 240 L204 255 L204 322 C225 325, 255 323, 266 321 C267 300, 263 265, 260 240 Z" stroke="#1e293b" stroke-width="1.8"/>
            <!-- Cierre Frontal Completo Metálico -->
            <line class="hoodie-part" data-part="cierre_full" x1="200" y1="80" x2="200" y2="352" stroke="#e2e8f0" stroke-width="3.5" stroke-dasharray="4 1.5"/>
          `;
        } else {
          detailsPaths += `
            <!-- Sombra suave bajo el bolsillo canguro -->
            <path d="M140 321 C175 328, 225 328, 260 321 C265 325, 225 330, 140 321 Z" fill="rgba(0,0,0,0.25)" filter="url(#softBlur)"/>
            <!-- Bolsillo Canguro 3D con Entradas Curvas para las Manos -->
            <path class="hoodie-part" data-part="bolsillo" d="M152 242 C175 245, 225 245, 248 242 C255 248, 262 278, 264 322 C225 329, 175 329, 136 322 C138 278, 145 248, 152 242 Z" stroke="#1e293b" stroke-width="1.8"/>
            <!-- Costura doble reforzada en las aberturas de las manos -->
            <path d="M152 242 C146 270, 140 295, 137 322" stroke="rgba(255,255,255,0.3)" stroke-width="1.2" stroke-dasharray="2 1.5" fill="none"/>
            <path d="M248 242 C254 270, 260 295, 263 322" stroke="rgba(255,255,255,0.3)" stroke-width="1.2" stroke-dasharray="2 1.5" fill="none"/>
          `;
        }
      }

      if (isAmericano) {
        detailsPaths += `
          <!-- Tira de Broches Tipo Béisbol Americano -->
          <path d="M193 85 L193 352 L207 352 L207 85 Z" fill="rgba(255,255,255,0.9)" stroke="#1e293b" stroke-width="1.2"/>
          <!-- Broches Metálicos con Brillo -->
          <circle class="hoodie-part" data-part="broches" cx="200" cy="115" r="4.5" fill="#f8fafc" stroke="#334155" stroke-width="1.2"/>
          <circle class="hoodie-part" data-part="broches" cx="200" cy="160" r="4.5" fill="#f8fafc" stroke="#334155" stroke-width="1.2"/>
          <circle class="hoodie-part" data-part="broches" cx="200" cy="205" r="4.5" fill="#f8fafc" stroke="#334155" stroke-width="1.2"/>
          <circle class="hoodie-part" data-part="broches" cx="200" cy="250" r="4.5" fill="#f8fafc" stroke="#334155" stroke-width="1.2"/>
          <circle class="hoodie-part" data-part="broches" cx="200" cy="295" r="4.5" fill="#f8fafc" stroke="#334155" stroke-width="1.2"/>
          <circle class="hoodie-part" data-part="broches" cx="200" cy="338" r="4.5" fill="#f8fafc" stroke="#334155" stroke-width="1.2"/>
        `;
      }
    } else {
      // VISTA ESPALDA (Caída natural de capucha sobre la espalda)
      if (hasHood) {
        detailsPaths += `
          <!-- Capucha Caída Relajada con Pliegues Tridimensionales -->
          <path class="hoodie-part" data-part="gorro_ext" d="M142 85 C132 40, 268 40, 258 85 C248 135, 225 152, 200 152 C175 152, 152 135, 142 85 Z" stroke="#1e293b" stroke-width="2"/>
          <!-- Doblez central de la capucha en la espalda -->
          <path d="M172 105 C190 135, 210 135, 228 105" stroke="rgba(0,0,0,0.3)" stroke-width="1.8" fill="none"/>
        `;
      } else if (isAmericano || isPolo) {
        detailsPaths += `
          <path class="hoodie-part" data-part="cuello_rib" d="M150 82 C175 92, 225 92, 250 82 C235 70, 165 70, 150 82 Z" stroke="#1e293b" stroke-width="2"/>
        `;
      } else if (isNeck) {
        detailsPaths += `
          <path class="hoodie-part" data-part="cuello_alto" d="M156 85 L156 50 C185 45, 215 45, 244 50 L244 88 Z" stroke="#1e293b" stroke-width="2"/>
        `;
      }
    }

    // D. CAPA DE SOMBRAS Y VOLUMEN DE TELA REALISTA (Multiplicada)
    shadingPaths = `
      <!-- Sombra debajo de las axilas y en el torso lateral -->
      <path d="M125 95 C129 135, 128 175, 134 220 C138 270, 135 300, 134 325 C130 325, 126 280, 126 220 C125 175, 120 130, 125 95 Z" fill="rgba(0,0,0,0.12)"/>
      <path d="M275 95 C271 135, 272 175, 266 220 C262 270, 265 300, 266 325 C270 325, 274 280, 274 220 C275 175, 280 130, 275 95 Z" fill="rgba(0,0,0,0.12)"/>
      
      <!-- Pliegues de flexión en los codos (mangas) -->
      <path d="M56 225 C62 235, 75 238, 82 232" stroke="rgba(0,0,0,0.22)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M344 225 C338 235, 325 238, 318 232" stroke="rgba(0,0,0,0.22)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      
      <!-- Arrugas suaves sobre la pretina de la cintura -->
      <path d="M145 320 C155 316, 168 318, 175 322" stroke="rgba(0,0,0,0.18)" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      <path d="M225 322 C232 318, 245 316, 255 320" stroke="rgba(0,0,0,0.18)" stroke-width="1.2" fill="none" stroke-linecap="round"/>

      <!-- Brillo sutil de tela en los hombros -->
      <path d="M140 88 C165 94, 185 94, 195 92" stroke="rgba(255,255,255,0.15)" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M205 92 C215 94, 235 94, 260 88" stroke="rgba(255,255,255,0.15)" stroke-width="2" fill="none" stroke-linecap="round"/>
    `;

    return `
      <svg class="hoodie-svg" viewBox="0 0 400 370" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4"/>
          </filter>
        </defs>

        <!-- Capa 1: Mangas -->
        <g id="layer-sleeves">${sleevesPaths}</g>
        <!-- Capa 2: Puños -->
        <g id="layer-cuffs">${cuffs}</g>
        <!-- Capa 3: Torso Base -->
        <g id="layer-body">${bodyPaths}</g>
        <!-- Capa 4: Pretina Inferior -->
        <g id="layer-waistband">${waistband}</g>
        <!-- Capa 5: Detalles Específicos del Modelo (Gorro, Bolsillo, Broches) -->
        <g id="layer-details">${detailsPaths}</g>
        <!-- Capa 6: Sombras y Volumen de Tela Textil Realista -->
        <g id="layer-shading" style="pointer-events: none;">${shadingPaths}</g>

        <!-- Capa 7: Textos y Logos Dinámicos -->
        <g id="layer-overlays-${opts.view}"></g>
      </svg>
    `;
  }

  // -------------------------------------------------------------------------
  // 10. SINCRONIZACIÓN DE COLORES EN EL SVG
  // -------------------------------------------------------------------------
  function updateSvgColors() {
    const allSvgParts = document.querySelectorAll('.hoodie-part');
    allSvgParts.forEach(el => {
      const partKey = el.getAttribute('data-part');
      const assignedHex = state.colors[partKey] || '#162238';
      el.style.fill = assignedHex;

      // Resaltar si es la parte activa
      if (partKey === state.activePart) {
        el.classList.add('active-selected-part');
      } else {
        el.classList.remove('active-selected-part');
      }
    });
  }

  // -------------------------------------------------------------------------
  // 11. CLICK DIRECTO EN LAS PIEZAS DEL SVG
  // -------------------------------------------------------------------------
  function attachSvgPartListeners() {
    const parts = document.querySelectorAll('.hoodie-part');
    parts.forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const partKey = el.getAttribute('data-part');
        if (partKey) {
          state.activePart = partKey;
          elements.partSelectorDropdown.value = partKey;

          // Si el usuario hace clic en una pieza, aplicamos de inmediato el color seleccionado
          applyColor(state.selectedColorHex);
          showToast(`Pintando: ${PART_LABELS[partKey] || partKey}`);
        }
      });
    });
  }

  // -------------------------------------------------------------------------
  // 12. TEXTOS Y BORDADOS DINÁMICOS CON TAMAÑO Y ARRASTRE
  // -------------------------------------------------------------------------
  function makeSvgDraggable(element, onDrag) {
    let isDragging = false;
    let startX = 0;
    let startY = 0;

    function getPointerSvgPoint(e, svg) {
      const pt = svg.createSVGPoint();
      if (e.touches && e.touches.length > 0) {
        pt.x = e.touches[0].clientX;
        pt.y = e.touches[0].clientY;
      } else {
        pt.x = e.clientX;
        pt.y = e.clientY;
      }
      return pt.matrixTransform(svg.getScreenCTM().inverse());
    }

    function onStart(e) {
      const svg = element.ownerSVGElement;
      if (!svg) return;
      isDragging = true;
      const pt = getPointerSvgPoint(e, svg);
      startX = pt.x;
      startY = pt.y;

      function onMove(ev) {
        if (!isDragging) return;
        ev.preventDefault();
        const curPt = getPointerSvgPoint(ev, svg);
        const dx = curPt.x - startX;
        const dy = curPt.y - startY;
        startX = curPt.x;
        startY = curPt.y;
        onDrag(dx, dy);
      }

      function onEnd() {
        if (!isDragging) return;
        isDragging = false;
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('mouseup', onEnd);
        window.removeEventListener('touchmove', onMove);
        window.removeEventListener('touchend', onEnd);
      }

      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onEnd);
      window.addEventListener('touchmove', onMove, { passive: false });
      window.addEventListener('touchend', onEnd);
    }

    element.addEventListener('mousedown', onStart);
    element.addEventListener('touchstart', onStart, { passive: false });
  }

  function updateTextOverlays() {
    const frontOverlay = document.getElementById('layer-overlays-frente');
    const backOverlay = document.getElementById('layer-overlays-espalda');

    if (frontOverlay) frontOverlay.innerHTML = '';
    if (backOverlay) backOverlay.innerHTML = '';

    const text = state.customText || '';
    const nick = state.customNickname || '';
    const color = state.textColor || '#ffffff';
    const font = state.textFont || "'Plus Jakarta Sans', sans-serif";
    const textSize = state.textSize || 22;
    const nickSize = state.nickSize || 13;

    if (!text && !nick) return;

    // Inyectar en el overlay según la vista objetivo elegida por el usuario
    const targetOverlay = state.textTargetView === 'frente' ? frontOverlay : backOverlay;
    if (!targetOverlay) return;

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('class', 'draggable-text-group');
    g.setAttribute('id', 'draggableTextLayer');
    g.setAttribute('transform', `translate(${state.textPos.x}, ${state.textPos.y})`);
    g.setAttribute('title', 'Haz clic y arrastra para mover el texto');

    // Caja delimitadora con borde sutil para arrastre (completamente transparente)
    const handleBox = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    handleBox.setAttribute('class', 'drag-handle-box');
    handleBox.setAttribute('fill', 'none');
    handleBox.setAttribute('stroke', 'none');
    handleBox.setAttribute('x', '-115');
    handleBox.setAttribute('y', '-25');
    handleBox.setAttribute('width', '230');
    handleBox.setAttribute('height', nick ? (textSize + nickSize + 32).toString() : (textSize + 24).toString());
    handleBox.setAttribute('rx', '8');
    g.appendChild(handleBox);

    if (text) {
      const textEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      textEl.setAttribute('x', '0');
      textEl.setAttribute('y', '0');
      textEl.setAttribute('text-anchor', 'middle');
      textEl.setAttribute('fill', color);
      textEl.setAttribute('font-family', font);
      textEl.setAttribute('font-size', textSize);
      textEl.setAttribute('font-weight', '900');
      textEl.setAttribute('letter-spacing', '2');
      textEl.style.filter = 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))';
      textEl.textContent = text;
      g.appendChild(textEl);
    }

    if (nick) {
      const nickY = text ? (textSize + 14) : 0;
      const nickBox = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      const boxW = Math.max(90, nick.length * (nickSize * 0.75) + 24);
      nickBox.setAttribute('x', `-${boxW / 2}`);
      nickBox.setAttribute('y', `${nickY - nickSize - 2}`);
      nickBox.setAttribute('width', `${boxW}`);
      nickBox.setAttribute('height', `${nickSize + 12}`);
      nickBox.setAttribute('rx', `${(nickSize + 12) / 2}`);
      nickBox.setAttribute('fill', 'none'); // Fondo 100% transparente sin negro
      nickBox.setAttribute('stroke', color);
      nickBox.setAttribute('stroke-width', '1.5');
      g.appendChild(nickBox);

      const nickEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      nickEl.setAttribute('x', '0');
      nickEl.setAttribute('y', `${nickY + 2}`);
      nickEl.setAttribute('text-anchor', 'middle');
      nickEl.setAttribute('fill', color);
      nickEl.setAttribute('font-family', font);
      nickEl.setAttribute('font-size', nickSize);
      nickEl.setAttribute('font-weight', '800');
      nickEl.textContent = nick;
      g.appendChild(nickEl);
    }

    targetOverlay.appendChild(g);

    // Permitir arrastre suave
    makeSvgDraggable(g, (dx, dy) => {
      state.textPos.x = Math.max(50, Math.min(350, state.textPos.x + dx));
      state.textPos.y = Math.max(60, Math.min(320, state.textPos.y + dy));
      g.setAttribute('transform', `translate(${state.textPos.x}, ${state.textPos.y})`);
    });
  }

  function updateLogoOverlay() {
    const frontOverlay = document.getElementById('layer-overlays-frente');
    if (!frontOverlay || !state.uploadedLogoSrc) return;

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('class', 'draggable-logo-group');
    g.setAttribute('transform', `translate(${state.logoPos.x}, ${state.logoPos.y})`);

    const imgEl = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    imgEl.setAttribute('href', state.uploadedLogoSrc);
    imgEl.setAttribute('x', `-${state.logoSize / 2}`);
    imgEl.setAttribute('y', `-${state.logoSize / 2}`);
    imgEl.setAttribute('width', `${state.logoSize}`);
    imgEl.setAttribute('height', `${state.logoSize}`);
    imgEl.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    imgEl.style.filter = 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))';

    const handle = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    handle.setAttribute('class', 'drag-handle-box');
    handle.setAttribute('fill', 'none');
    handle.setAttribute('stroke', 'none');
    handle.setAttribute('x', `-${state.logoSize / 2 + 4}`);
    handle.setAttribute('y', `-${state.logoSize / 2 + 4}`);
    handle.setAttribute('width', `${state.logoSize + 8}`);
    handle.setAttribute('height', `${state.logoSize + 8}`);
    handle.setAttribute('rx', '4');

    g.appendChild(handle);
    g.appendChild(imgEl);
    frontOverlay.appendChild(g);

    makeSvgDraggable(g, (dx, dy) => {
      state.logoPos.x = Math.max(50, Math.min(350, state.logoPos.x + dx));
      state.logoPos.y = Math.max(60, Math.min(320, state.logoPos.y + dy));
      g.setAttribute('transform', `translate(${state.logoPos.x}, ${state.logoPos.y})`);
    });
  }

  function escapeXml(str) {
    return str.replace(/[<>&'"]/g, c => {
      switch (c) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '&': return '&amp;';
        case '\'': return '&apos;';
        case '"': return '&quot;';
      }
    });
  }

  // -------------------------------------------------------------------------
  // 13. MODAL DE SELECCIÓN DE MODELOS
  // -------------------------------------------------------------------------
  function setupModalPicker() {
    // Abrir modal
    elements.btnChangeModel.addEventListener('click', () => {
      elements.modelPickerModal.classList.add('active');
      renderModalCategoriesNav();
      renderModalSubmodels(state.categoryKey);
    });

    // Cerrar modal
    elements.btnCloseModal.addEventListener('click', () => {
      elements.modelPickerModal.classList.remove('active');
    });

    elements.modelPickerModal.addEventListener('click', (e) => {
      if (e.target === elements.modelPickerModal) {
        elements.modelPickerModal.classList.remove('active');
      }
    });
  }

  function renderModalCategoriesNav() {
    elements.modalCategoriesNav.innerHTML = '';
    Object.keys(CATALOG).forEach(key => {
      const cat = CATALOG[key];
      const btn = document.createElement('button');
      btn.className = `cat-tab-btn cat-${key} ${key === state.categoryKey ? 'active' : ''}`;
      btn.innerHTML = `<span>${cat.icon}</span><span>${cat.name}</span>`;

      btn.addEventListener('click', () => {
        document.querySelectorAll('.cat-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderModalSubmodels(key);
      });

      elements.modalCategoriesNav.appendChild(btn);
    });
  }

  function renderModalSubmodels(catKey) {
    const cat = CATALOG[catKey];
    elements.submodelsGrid.innerHTML = '';

    cat.submodels.forEach(sub => {
      const card = document.createElement('div');
      card.className = `submodel-card ${sub.id === state.submodelId ? 'current-selected' : ''}`;

      // Generar miniatura limpia en blanco
      const miniSvg = buildSvgMarkup({
        view: 'frente',
        category: catKey,
        submodelId: sub.id
      });

      card.innerHTML = `
        <div class="submodel-thumb-box">
          ${miniSvg}
        </div>
        <div class="submodel-footer-label">${sub.name}</div>
      `;

      // Colorear miniatura en monocromo neutro
      card.querySelectorAll('.hoodie-part').forEach(p => {
        p.style.fill = '#ffffff';
        p.style.stroke = '#334155';
      });

      card.addEventListener('click', () => {
        setSubmodel(catKey, sub.id);
        elements.modelPickerModal.classList.remove('active');
        showToast(`Modelo cambiado a: ${sub.name}`);
      });

      elements.submodelsGrid.appendChild(card);
    });
  }

  // -------------------------------------------------------------------------
  // 14. EXPORTAR A WHATSAPP CON DETALLES TÉCNICOS
  // -------------------------------------------------------------------------
  function sendToWhatsApp() {
    const cat = CATALOG[state.categoryKey];
    const sub = cat.submodels.find(s => s.id === state.submodelId);

    let colorsList = '';
    sub.cuts.forEach(partKey => {
      const hex = state.colors[partKey] || '#162238';
      const colorObj = FABRIC_COLORS.find(c => c.hex.toLowerCase() === hex.toLowerCase());
      const colorName = colorObj ? colorObj.name : hex;
      const partLabel = PART_LABELS[partKey] || partKey;
      colorsList += `• ${partLabel}: *${colorName}*\n`;
    });

    let extraDetails = '';
    if (state.customText) extraDetails += `🔤 *Texto Espalda:* ${state.customText}\n`;
    if (state.customNickname) extraDetails += `🏷️ *Apodo:* ${state.customNickname}\n`;
    if (state.uploadedLogoSrc) extraDetails += `🏫 *Insignia:* Sí, logo cargado en el diseño\n`;

    const message = `¡Hola Serendipia Creaciones! 👋
Acabo de crear este diseño en su *Personalizador de Polerones* y quisiera cotizarlo para mi curso:

🧥 *Modelo:* ${sub.name}

🎨 *Combinación de Colores:*
${colorsList}
${extraDetails}
¿Podrían indicarme los valores por cantidad, tallas disponibles y tiempos de confección? ¡Muchas gracias!`;

    const encoded = encodeURI(message);
    const waUrl = `https://wa.me/56942992424?text=${encoded}`;
    window.open(waUrl, '_blank');
  }

  // -------------------------------------------------------------------------
  // 15. DESCARGAR MOCKUP COMO IMAGEN PNG DE ALTA CALIDAD
  // -------------------------------------------------------------------------
  function downloadMockupPng() {
    showToast('Generando imagen de tu diseño...');

    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 700;
    const ctx = canvas.getContext('2d');

    // Fondo oscuro premium
    ctx.fillStyle = '#090d16';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Decoración de cabecera en la imagen
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 28px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('SERENDIPIA CREACIONES', 60, 60);

    ctx.fillStyle = '#e33391';
    ctx.font = 'bold 16px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('CONFECCIÓN & BORDADOS CHILLÁN • WHATSAPP: +56 9 4299 2424', 60, 90);

    const sub = CATALOG[state.categoryKey].submodels.find(s => s.id === state.submodelId);
    ctx.fillStyle = '#00b0d0';
    ctx.font = 'bold 20px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(`Diseño: ${sub.name}`, 60, 130);

    // Serializar SVGs a imágenes
    const frontSvg = document.querySelector('#frontSvgContainer svg');
    const backSvg = document.querySelector('#backSvgContainer svg');

    if (!frontSvg || !backSvg) {
      alert('No se pudieron obtener las vistas del polerón');
      return;
    }

    // Clonar SVGs para limpiar elementos de interacción (como cajas de arrastre)
    const frontClone = frontSvg.cloneNode(true);
    const backClone = backSvg.cloneNode(true);

    frontClone.querySelectorAll('.drag-handle-box').forEach(el => el.remove());
    backClone.querySelectorAll('.drag-handle-box').forEach(el => el.remove());
    frontClone.querySelectorAll('.active-selected-part').forEach(el => el.classList.remove('active-selected-part'));
    backClone.querySelectorAll('.active-selected-part').forEach(el => el.classList.remove('active-selected-part'));

    const frontXml = new XMLSerializer().serializeToString(frontClone);
    const backXml = new XMLSerializer().serializeToString(backClone);

    const imgFront = new Image();
    const imgBack = new Image();

    imgFront.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(frontXml);
    imgFront.onload = () => {
      // Dibujar vista frontal a la izquierda
      ctx.drawImage(imgFront, 60, 160, 500, 460);

      ctx.fillStyle = '#94a3b8';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText('VISTA FRENTE', 250, 650);

      imgBack.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(backXml);
      imgBack.onload = () => {
        // Dibujar vista trasera a la derecha
        ctx.drawImage(imgBack, 640, 160, 500, 460);
        ctx.fillText('VISTA ESPALDA', 830, 650);

        // Disparar descarga
        const link = document.createElement('a');
        link.download = `mockup-${state.submodelId}-serendipia.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        showToast('¡Imagen descargada con éxito!');
      };
    };
  }

  // -------------------------------------------------------------------------
  // 16. EVENT LISTENERS GENERALES
  // -------------------------------------------------------------------------
  function setupEventListeners() {
    setupModalPicker();

    // Selector de parte desde dropdown
    elements.partSelectorDropdown.addEventListener('change', (e) => {
      state.activePart = e.target.value;
      updateSvgColors();
    });

    // Input de color nativo
    elements.inputNativeColor.addEventListener('input', (e) => {
      applyColor(e.target.value, 'Color Personalizado');
    });

    // Inputs de texto
    elements.inputTextContent.addEventListener('input', (e) => {
      state.customText = e.target.value;
      updateTextOverlays();
    });

    elements.inputNicknameContent.addEventListener('input', (e) => {
      state.customNickname = e.target.value;
      updateTextOverlays();
    });

    // Opciones de tipografía
    elements.fontOptionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        elements.fontOptionBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.textFont = btn.getAttribute('data-font');
        updateTextOverlays();
      });
    });

    // Control de Tamaño de Texto Principal (Slider y Botones +/-)
    if (elements.sliderTextSize) {
      elements.sliderTextSize.addEventListener('input', (e) => {
        state.textSize = parseInt(e.target.value, 10);
        if (elements.labelValTextSize) elements.labelValTextSize.textContent = `${state.textSize}px`;
        updateTextOverlays();
      });
    }

    if (elements.btnTextSizeDown) {
      elements.btnTextSizeDown.addEventListener('click', () => {
        state.textSize = Math.max(10, state.textSize - 2);
        if (elements.sliderTextSize) elements.sliderTextSize.value = state.textSize;
        if (elements.labelValTextSize) elements.labelValTextSize.textContent = `${state.textSize}px`;
        updateTextOverlays();
      });
    }

    if (elements.btnTextSizeUp) {
      elements.btnTextSizeUp.addEventListener('click', () => {
        state.textSize = Math.min(48, state.textSize + 2);
        if (elements.sliderTextSize) elements.sliderTextSize.value = state.textSize;
        if (elements.labelValTextSize) elements.labelValTextSize.textContent = `${state.textSize}px`;
        updateTextOverlays();
      });
    }

    // Control de Tamaño del Apodo
    if (elements.sliderNickSize) {
      elements.sliderNickSize.addEventListener('input', (e) => {
        state.nickSize = parseInt(e.target.value, 10);
        if (elements.labelValNickSize) elements.labelValNickSize.textContent = `${state.nickSize}px`;
        updateTextOverlays();
      });
    }

    if (elements.btnNickSizeDown) {
      elements.btnNickSizeDown.addEventListener('click', () => {
        state.nickSize = Math.max(8, state.nickSize - 2);
        if (elements.sliderNickSize) elements.sliderNickSize.value = state.nickSize;
        if (elements.labelValNickSize) elements.labelValNickSize.textContent = `${state.nickSize}px`;
        updateTextOverlays();
      });
    }

    if (elements.btnNickSizeUp) {
      elements.btnNickSizeUp.addEventListener('click', () => {
        state.nickSize = Math.min(30, state.nickSize + 2);
        if (elements.sliderNickSize) elements.sliderNickSize.value = state.nickSize;
        if (elements.labelValNickSize) elements.labelValNickSize.textContent = `${state.nickSize}px`;
        updateTextOverlays();
      });
    }

    // Selector de Vista (Espalda / Frente)
    elements.viewTargetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        elements.viewTargetBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.getAttribute('data-target');
        state.textTargetView = target;
        if (target === 'frente') {
          state.textPos = { x: 200, y: 155 };
        } else {
          state.textPos = { x: 200, y: 170 };
        }
        updateTextOverlays();
        showToast(`Texto ubicado en: ${target.toUpperCase()}`);
      });
    });

    // Posiciones Rápidas
    elements.posQuickBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        elements.posQuickBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const y = parseInt(btn.getAttribute('data-y') || '170', 10);
        const x = parseInt(btn.getAttribute('data-x') || '200', 10);
        state.textPos.x = x;
        state.textPos.y = y;
        updateTextOverlays();
      });
    });

    // Botones direccionales D-Pad
    const step = 8;
    if (elements.btnMoveUp) {
      elements.btnMoveUp.addEventListener('click', () => {
        state.textPos.y = Math.max(60, state.textPos.y - step);
        updateTextOverlays();
      });
    }
    if (elements.btnMoveDown) {
      elements.btnMoveDown.addEventListener('click', () => {
        state.textPos.y = Math.min(320, state.textPos.y + step);
        updateTextOverlays();
      });
    }
    if (elements.btnMoveLeft) {
      elements.btnMoveLeft.addEventListener('click', () => {
        state.textPos.x = Math.max(60, state.textPos.x - step);
        updateTextOverlays();
      });
    }
    if (elements.btnMoveRight) {
      elements.btnMoveRight.addEventListener('click', () => {
        state.textPos.x = Math.min(340, state.textPos.x + step);
        updateTextOverlays();
      });
    }
    if (elements.btnMoveCenter) {
      elements.btnMoveCenter.addEventListener('click', () => {
        state.textPos.x = 200;
        state.textPos.y = 170;
        updateTextOverlays();
        showToast('Texto centrado');
      });
    }

    // Color del texto
    elements.inputTextColor.addEventListener('input', (e) => {
      state.textColor = e.target.value;
      updateTextOverlays();
    });

    // Subida de logo
    elements.uploadDropzone.addEventListener('click', () => {
      elements.logoFileInput.click();
    });

    elements.logoFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          state.uploadedLogoSrc = event.target.result;
          elements.logoThumb.src = state.uploadedLogoSrc;
          elements.logoPreviewBox.style.display = 'flex';
          elements.uploadDropzone.style.display = 'none';
          updateLogoOverlay();
          showToast('Insignia agregada al pecho');
        };
        reader.readAsDataURL(file);
      }
    });

    elements.btnRemoveLogo.addEventListener('click', () => {
      state.uploadedLogoSrc = null;
      elements.logoPreviewBox.style.display = 'none';
      elements.uploadDropzone.style.display = 'flex';
      elements.logoFileInput.value = '';
      updateTextOverlays();
      showToast('Insignia eliminada');
    });

    // Alternar vistas en celular (Pills Frente / Espalda)
    elements.viewPillBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        elements.viewPillBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const view = btn.getAttribute('data-view');
        state.activeView = view;

        if (view === 'frente') {
          elements.viewCardFront.classList.remove('hidden-mobile');
          elements.viewCardBack.classList.add('hidden-mobile');
        } else if (view === 'espalda') {
          elements.viewCardFront.classList.add('hidden-mobile');
          elements.viewCardBack.classList.remove('hidden-mobile');
        } else {
          // Ambos
          elements.viewCardFront.classList.remove('hidden-mobile');
          elements.viewCardBack.classList.remove('hidden-mobile');
        }
      });
    });

    // Botones de acción principales
    elements.btnWhatsAppQuote.addEventListener('click', sendToWhatsApp);
    elements.btnDownloadPng.addEventListener('click', downloadMockupPng);

    elements.btnResetAll.addEventListener('click', () => {
      if (confirm('¿Deseas reiniciar los colores de este modelo?')) {
        state.colors = {};
        setSubmodel(state.categoryKey, state.submodelId);
        showToast('Colores reiniciados');
      }
    });
  }

  // -------------------------------------------------------------------------
  // 17. GESTIÓN DE TABS LATERALES
  // -------------------------------------------------------------------------
  function setupTabNavigation() {
    elements.toolTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        elements.toolTabBtns.forEach(b => b.classList.remove('active'));
        elements.tabPanes.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const targetTab = btn.getAttribute('data-tab');
        const pane = document.getElementById(targetTab);
        if (pane) pane.classList.add('active');
      });
    });
  }

  // -------------------------------------------------------------------------
  // 18. NOTIFICACIÓN TOAST
  // -------------------------------------------------------------------------
  let toastTimeout;
  function showToast(msg) {
    if (!elements.toastNotice) return;
    elements.toastMessage.textContent = msg;
    elements.toastNotice.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      elements.toastNotice.classList.remove('show');
    }, 2800);
  }

  // Arrancar aplicación cuando el DOM esté listo
  document.addEventListener('DOMContentLoaded', init);

})();
