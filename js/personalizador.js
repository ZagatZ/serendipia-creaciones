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
   * Construye el string SVG vectorial con capas coloreables según el corte
   */
  function buildSvgMarkup(opts) {
    const isFront = opts.view === 'frente';
    const cat = opts.category;
    const subId = opts.submodelId;

    // Elementos condicionales según tipo
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

    // A. Mangas
    if (subId.includes('mangas_dif')) {
      sleevesPaths = `
        <!-- Manga Izquierda -->
        <path class="hoodie-part" data-part="manga_izq" d="M110 95 L35 180 L75 220 L125 150 Z" stroke="#334155" stroke-width="1.8"/>
        <!-- Manga Derecha -->
        <path class="hoodie-part" data-part="manga_der" d="M290 95 L365 180 L325 220 L275 150 Z" stroke="#334155" stroke-width="1.8"/>
      `;
    } else if (isRanglan) {
      sleevesPaths = `
        <!-- Manga Izquierda Ranglan -->
        <path class="hoodie-part" data-part="mangas_ranglan" d="M150 70 L110 95 L35 180 L75 220 L125 150 L140 100 Z" stroke="#334155" stroke-width="1.8"/>
        <!-- Manga Derecha Ranglan -->
        <path class="hoodie-part" data-part="mangas_ranglan" d="M250 70 L290 95 L365 180 L325 220 L275 150 L260 100 Z" stroke="#334155" stroke-width="1.8"/>
      `;
    } else {
      sleevesPaths = `
        <!-- Mangas Regulares -->
        <path class="hoodie-part" data-part="mangas" d="M110 95 L35 180 L75 220 L125 150 Z" stroke="#334155" stroke-width="1.8"/>
        <path class="hoodie-part" data-part="mangas" d="M290 95 L365 180 L325 220 L275 150 Z" stroke="#334155" stroke-width="1.8"/>
      `;
    }

    // Puños de mangas
    const cuffs = `
      <path class="hoodie-part" data-part="pretina_punos" d="M35 180 L22 195 L62 235 L75 220 Z" stroke="#334155" stroke-width="1.5"/>
      <path class="hoodie-part" data-part="pretina_punos" d="M365 180 L378 195 L338 235 L325 220 Z" stroke="#334155" stroke-width="1.5"/>
    `;

    // B. Torso según submodelo de cortes
    if (subId.includes('franja_pecho')) {
      bodyPaths = `
        <!-- Pecho Superior -->
        <path class="hoodie-part" data-part="pecho_sup" d="M110 95 Q200 110 290 95 L285 145 Q200 150 115 145 Z" stroke="#334155" stroke-width="1.8"/>
        <!-- Franja de Pecho -->
        <path class="hoodie-part" data-part="franja_pecho" d="M115 145 Q200 150 285 145 L280 185 Q200 190 120 185 Z" stroke="#334155" stroke-width="1.8"/>
        <!-- Cuerpo Inferior -->
        <path class="hoodie-part" data-part="cuerpo_inf" d="M120 185 Q200 190 280 185 L270 310 Q200 315 130 310 Z" stroke="#334155" stroke-width="1.8"/>
      `;
    } else if (subId.includes('franja_horizontal')) {
      bodyPaths = `
        <path class="hoodie-part" data-part="pecho_sup" d="M110 95 Q200 110 290 95 L280 165 Q200 170 120 165 Z" stroke="#334155" stroke-width="1.8"/>
        <path class="hoodie-part" data-part="franja_central" d="M120 165 Q200 170 280 165 L275 210 Q200 215 125 210 Z" stroke="#334155" stroke-width="1.8"/>
        <path class="hoodie-part" data-part="cuerpo_inf" d="M125 210 Q200 215 275 210 L270 310 Q200 315 130 310 Z" stroke="#334155" stroke-width="1.8"/>
      `;
    } else if (subId.includes('doble_franja')) {
      bodyPaths = `
        <path class="hoodie-part" data-part="pecho_sup" d="M110 95 Q200 110 290 95 L283 140 Q200 145 117 140 Z" stroke="#334155" stroke-width="1.8"/>
        <path class="hoodie-part" data-part="franja_1" d="M117 140 Q200 145 283 140 L280 170 Q200 175 120 170 Z" stroke="#334155" stroke-width="1.8"/>
        <path class="hoodie-part" data-part="franja_2" d="M120 170 Q200 175 280 170 L277 200 Q200 205 123 200 Z" stroke="#334155" stroke-width="1.8"/>
        <path class="hoodie-part" data-part="cuerpo_inf" d="M123 200 Q200 205 277 200 L270 310 Q200 315 130 310 Z" stroke="#334155" stroke-width="1.8"/>
      `;
    } else if (subId.includes('punta_v') || subId.includes('diagonal')) {
      bodyPaths = `
        <path class="hoodie-part" data-part="pecho_v" d="M110 95 Q200 110 290 95 L280 160 L200 210 L120 160 Z" stroke="#334155" stroke-width="1.8"/>
        <path class="hoodie-part" data-part="cuerpo_inf" d="M120 160 L200 210 L280 160 L270 310 Q200 315 130 310 Z" stroke="#334155" stroke-width="1.8"/>
      `;
    } else if (subId.includes('bicolor')) {
      bodyPaths = `
        <path class="hoodie-part" data-part="mitad_izq" d="M110 95 Q155 105 200 105 L200 315 Q165 312 130 310 Z" stroke="#334155" stroke-width="1.8"/>
        <path class="hoodie-part" data-part="mitad_der" d="M200 105 Q245 105 290 95 L270 310 Q235 312 200 315 Z" stroke="#334155" stroke-width="1.8"/>
      `;
    } else {
      // Regular / Básico
      bodyPaths = `
        <path class="hoodie-part" data-part="torso" d="M110 95 Q200 110 290 95 L270 310 Q200 315 130 310 Z" stroke="#334155" stroke-width="1.8"/>
      `;
    }

    // Pretina de cintura
    const waistband = `
      <path class="hoodie-part" data-part="pretina_punos" d="M130 310 Q200 315 270 310 L268 335 Q200 340 132 335 Z" stroke="#334155" stroke-width="1.8"/>
    `;

    // C. Detalles frontales (Capucha, Cuello, Bolsillos, Cierres, Broches)
    if (isFront) {
      if (hasHood) {
        detailsPaths += `
          <!-- Capucha Exterior Frontal -->
          <path class="hoodie-part" data-part="gorro_ext" d="M135 90 Q120 30 200 25 Q280 30 265 90 Q200 120 135 90 Z" stroke="#334155" stroke-width="2"/>
          <!-- Forro Interior Capucha -->
          <path class="hoodie-part" data-part="gorro_int" d="M160 82 Q150 45 200 42 Q250 45 240 82 Q200 105 160 82 Z" stroke="#334155" stroke-width="1.5"/>
          <!-- Cordón -->
          <path class="hoodie-part" data-part="cordon" d="M185 95 Q180 145 185 165 M215 95 Q220 145 215 165" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
        `;
      } else if (isAmericano || isPolo) {
        detailsPaths += `
          <!-- Cuello Rib -->
          <path class="hoodie-part" data-part="cuello_rib" d="M140 90 Q200 125 260 90 Q200 80 140 90 Z" stroke="#334155" stroke-width="2"/>
        `;
      } else if (isNeck) {
        detailsPaths += `
          <!-- Cuello Alto con Cierre -->
          <path class="hoodie-part" data-part="cuello_alto" d="M150 95 L150 55 Q200 50 250 55 L250 95 Z" stroke="#334155" stroke-width="2"/>
          <path class="hoodie-part" data-part="cierre" d="M200 55 L200 130" stroke="#cbd5e1" stroke-width="3" stroke-dasharray="2 2"/>
        `;
      }

      if (hasPocket) {
        if (isFullZip) {
          detailsPaths += `
            <!-- Bolsillos divididos Zipper -->
            <path class="hoodie-part" data-part="bolsillos_div" d="M140 230 L170 230 L195 245 L195 305 L135 305 Z" stroke="#334155" stroke-width="1.5"/>
            <path class="hoodie-part" data-part="bolsillos_div" d="M260 230 L230 230 L205 245 L205 305 L265 305 Z" stroke="#334155" stroke-width="1.5"/>
            <!-- Cierre Completo -->
            <line class="hoodie-part" data-part="cierre_full" x1="200" y1="85" x2="200" y2="335" stroke="#e2e8f0" stroke-width="3.5" stroke-dasharray="3 1"/>
          `;
        } else {
          detailsPaths += `
            <!-- Bolsillo Canguro -->
            <path class="hoodie-part" data-part="bolsillo" d="M145 235 L255 235 L268 305 L132 305 Z" stroke="#334155" stroke-width="1.8"/>
            <path d="M145 235 L165 270 L137 300 M255 235 L235 270 L263 300" stroke="#475569" stroke-width="1.2" fill="none"/>
          `;
        }
      }

      if (isAmericano) {
        detailsPaths += `
          <!-- Tira central y broches -->
          <rect x="194" y="90" width="12" height="225" fill="#e2e8f0" stroke="#334155" stroke-width="1"/>
          <circle class="hoodie-part" data-part="broches" cx="200" cy="115" r="4.5" fill="#f8fafc" stroke="#334155" stroke-width="1"/>
          <circle class="hoodie-part" data-part="broches" cx="200" cy="155" r="4.5" fill="#f8fafc" stroke="#334155" stroke-width="1"/>
          <circle class="hoodie-part" data-part="broches" cx="200" cy="195" r="4.5" fill="#f8fafc" stroke="#334155" stroke-width="1"/>
          <circle class="hoodie-part" data-part="broches" cx="200" cy="235" r="4.5" fill="#f8fafc" stroke="#334155" stroke-width="1"/>
          <circle class="hoodie-part" data-part="broches" cx="200" cy="275" r="4.5" fill="#f8fafc" stroke="#334155" stroke-width="1"/>
        `;
      }
    } else {
      // VISTA ESPALDA
      if (hasHood) {
        detailsPaths += `
          <!-- Capucha caída sobre la espalda -->
          <path class="hoodie-part" data-part="gorro_ext" d="M140 85 Q200 40 260 85 Q200 135 140 85 Z" stroke="#334155" stroke-width="2"/>
        `;
      } else if (isAmericano || isPolo) {
        detailsPaths += `
          <path class="hoodie-part" data-part="cuello_rib" d="M145 85 Q200 95 255 85 Q200 75 145 85 Z" stroke="#334155" stroke-width="2"/>
        `;
      } else if (isNeck) {
        detailsPaths += `
          <path class="hoodie-part" data-part="cuello_alto" d="M150 90 L150 55 Q200 50 250 55 L250 90 Z" stroke="#334155" stroke-width="2"/>
        `;
      }
    }

    return `
      <svg class="hoodie-svg" viewBox="0 0 400 370" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="rgba(0,0,0,0.5)"/>
          </filter>
        </defs>

        <!-- Silueta en Capas -->
        <g id="layer-sleeves">${sleevesPaths}</g>
        <g id="layer-cuffs">${cuffs}</g>
        <g id="layer-body">${bodyPaths}</g>
        <g id="layer-waistband">${waistband}</g>
        <g id="layer-details">${detailsPaths}</g>

        <!-- Capas dinámicas para Textos y Logos -->
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

    // Caja delimitadora con borde sutil para arrastre
    const handleBox = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    handleBox.setAttribute('class', 'drag-handle-box');
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
      nickBox.setAttribute('fill', 'rgba(0,0,0,0.5)');
      nickBox.setAttribute('stroke', color);
      nickBox.setAttribute('stroke-width', '1');
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

    const frontXml = new XMLSerializer().serializeToString(frontSvg);
    const backXml = new XMLSerializer().serializeToString(backSvg);

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
