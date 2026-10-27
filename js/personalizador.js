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
    colors: {},
    // Textos múltiples tanto en frente como en espalda
    texts: [
      {
        id: 't_gen',
        text: 'GENERACIÓN 2026',
        view: 'espalda', // 'espalda' | 'frente'
        x: 200,
        y: 160,
        size: 22,
        font: "'Plus Jakarta Sans', sans-serif",
        color: '#ffffff',
        isNick: false
      },
      {
        id: 't_nick',
        text: '#MATI',
        view: 'espalda',
        x: 200,
        y: 200,
        size: 13,
        font: "'Plus Jakarta Sans', sans-serif",
        color: '#ffffff',
        isNick: true
      }
    ],
    activeTextId: 't_gen',

    // Imágenes múltiples tanto en frente como en espalda
    images: [],
    activeImageId: null,

    // Destino seleccionado para la próxima imagen subida
    newImageUploadTarget: 'frente',

    activeView: 'ambos' // 'ambos', 'frente', o 'espalda'
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

    // GESTIÓN DE TEXTOS MULTICAPA
    btnAddText: document.getElementById('btnAddText'),
    textLayersList: document.getElementById('textLayersList'),
    activeTextEditor: document.getElementById('activeTextEditor'),
    activeTextEditorTitle: document.getElementById('activeTextEditorTitle'),
    inputTextContent: document.getElementById('inputTextContent'),
    btnTextTargetFrente: document.getElementById('btnTextTargetFrente'),
    btnTextTargetEspalda: document.getElementById('btnTextTargetEspalda'),
    btnTextStyleNormal: document.getElementById('btnTextStyleNormal'),
    btnTextStyleNick: document.getElementById('btnTextStyleNick'),
    sliderTextSize: document.getElementById('sliderTextSize'),
    labelValTextSize: document.getElementById('labelValTextSize'),
    btnTextSizeDown: document.getElementById('btnTextSizeDown'),
    btnTextSizeUp: document.getElementById('btnTextSizeUp'),
    fontOptionBtns: document.querySelectorAll('.font-option-btn'),
    inputTextColor: document.getElementById('inputTextColor'),
    btnPosArriba: document.getElementById('btnPosArriba'),
    btnPosCentro: document.getElementById('btnPosCentro'),
    btnPosAbajo: document.getElementById('btnPosAbajo'),
    btnPosPechoIzq: document.getElementById('btnPosPechoIzq'),
    btnDeleteCurrentText: document.getElementById('btnDeleteCurrentText'),

    // GESTIÓN DE IMÁGENES MULTICAPA
    btnUploadTargetFrente: document.getElementById('btnUploadTargetFrente'),
    btnUploadTargetEspalda: document.getElementById('btnUploadTargetEspalda'),
    imageFileInputUniversal: document.getElementById('imageFileInputUniversal'),
    uploadDropzoneUniversal: document.getElementById('uploadDropzoneUniversal'),
    imageLayersList: document.getElementById('imageLayersList'),
    activeImageEditor: document.getElementById('activeImageEditor'),
    activeImageEditorTitle: document.getElementById('activeImageEditorTitle'),
    btnImgTargetFrente: document.getElementById('btnImgTargetFrente'),
    btnImgTargetEspalda: document.getElementById('btnImgTargetEspalda'),
    sliderImageSize: document.getElementById('sliderImageSize'),
    labelValImageSize: document.getElementById('labelValImageSize'),
    btnImageSizeDown: document.getElementById('btnImageSizeDown'),
    btnImageSizeUp: document.getElementById('btnImageSizeUp'),
    btnImgPosArriba: document.getElementById('btnImgPosArriba'),
    btnImgPosCentro: document.getElementById('btnImgPosCentro'),
    btnImgPosAbajo: document.getElementById('btnImgPosAbajo'),
    btnImgPosPechoIzq: document.getElementById('btnImgPosPechoIzq'),
    btnDeleteCurrentImage: document.getElementById('btnDeleteCurrentImage'),

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
    renderTextList();
    renderImageList();
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
  // 7. APLICACIÓN DE COLOR Y ACTUALIZACIÓN DE INDICADORES
  // -------------------------------------------------------------------------
  function updateColorIndicators(hex) {
    const effectiveHex = hex || state.colors[state.activePart] || state.selectedColorHex || '#162238';
    state.selectedColorHex = effectiveHex;
    elements.currentColorDot.style.backgroundColor = effectiveHex;
    const foundColor = FABRIC_COLORS.find(c => c.hex.toLowerCase() === effectiveHex.toLowerCase());
    elements.currentColorText.textContent = foundColor ? foundColor.name : effectiveHex;

    // Actualizar clase activa en swatches
    document.querySelectorAll('.color-swatch').forEach(s => {
      s.classList.toggle('active', s.getAttribute('data-hex').toLowerCase() === effectiveHex.toLowerCase());
    });
  }

  function applyColor(hex, name) {
    state.selectedColorHex = hex;
    state.colors[state.activePart] = hex;

    // Sincronización interna de ribetes acanalados (Americano y otros)
    if (state.activePart === 'cuello_pretinas') {
      state.colors['pretina_punos'] = hex;
      state.colors['cuello_rib'] = hex;
    } else if (state.activePart === 'pretina_punos') {
      state.colors['cuello_pretinas'] = hex;
    }

    // Actualizar indicador visual
    updateColorIndicators(hex);

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

    // Por defecto, inicializar partes sin color a tonos textiles armónicos
    state.activePart = sub.cuts[0];
    elements.partSelectorDropdown.value = state.activePart;

    // Asignar colores por defecto si no existen
    sub.cuts.forEach(part => {
      if (!state.colors[part]) {
        if (part.includes('manga')) state.colors[part] = '#162238'; // Marino
        else if (part.includes('pecho') || part.includes('franja')) state.colors[part] = '#f8fafc'; // Blanco
        else if (part.includes('gorro_int')) state.colors[part] = '#581423'; // Burdeo
        else if (part.includes('cordon') || part.includes('broches') || part.includes('cierre') || part.includes('lineas_rib')) state.colors[part] = '#f8fafc';
        else if (part === 'cuello_pretinas' || part === 'pretina_punos' || part === 'cuello_rib') state.colors[part] = '#162238';
        else state.colors[part] = '#162238'; // Marino base
      }
    });

    // Sincronizar indicadores con la parte inicial
    updateColorIndicators(state.colors[state.activePart]);

    // Renderizar SVGs Vectoriales de Frente y Espalda
    renderHoodieSvgs(sub);
    updateSvgColors();
    updateTextOverlays();
    updateImagesOverlays();
  }

  // -------------------------------------------------------------------------
  // 9. MOTOR RENDERIZADOR SVG MODULAR (VISTA FRENTE Y ESPALDA)
  // -------------------------------------------------------------------------
  function renderHoodieSvgs(submodel) {
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
   * Sincronizado al 100% con todos los submodelos y cortes del catálogo.
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
    const isRanglan = subId.includes('ranglan') || isNeck;
    const hasRibLines = isAmericano && subId.includes('linea');
    const isDoubleLine = subId.includes('doble_linea');

    // En el modelo Americano, cuello, pretina y puños forman un solo corte conjunto: 'cuello_pretinas'
    const ribPartKey = isAmericano ? 'cuello_pretinas' : 'pretina_punos';

    let bodyPaths = '';
    let sleevesPaths = '';
    let detailsPaths = '';
    let shadingPaths = '';

    // A. MANGAS (Curvas anatómicas con caída natural en hombros y codos)
    if (subId.includes('mangas_dif') || subId.includes('bicolor')) {
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

    // Franja en mangas para Polo con 2 cortes
    if (subId.includes('manga_2cortes') || (isPolo && isRanglan)) {
      sleevesPaths += `
        <!-- Franja decorativa en mangas -->
        <path class="hoodie-part" data-part="manga_franja" d="M96 150 L64 200 L84 212 L112 165 Z" stroke="#1e293b" stroke-width="1.5"/>
        <path class="hoodie-part" data-part="manga_franja" d="M304 150 L336 200 L316 212 L288 165 Z" stroke="#1e293b" stroke-width="1.5"/>
      `;
    }

    // Puños acanalados elásticos con textura sutil de rib y líneas si corresponde
    let cuffLines = '';
    if (hasRibLines) {
      if (isDoubleLine) {
        cuffLines = `
          <line class="hoodie-part" data-part="lineas_rib" x1="33" y1="316" x2="69" y2="313" stroke="#f8fafc" stroke-width="2"/>
          <line class="hoodie-part" data-part="lineas_rib" x1="30" y1="322" x2="66" y2="319" stroke="#f8fafc" stroke-width="2"/>
          <line class="hoodie-part" data-part="lineas_rib" x1="367" y1="316" x2="331" y2="313" stroke="#f8fafc" stroke-width="2"/>
          <line class="hoodie-part" data-part="lineas_rib" x1="370" y1="322" x2="334" y2="319" stroke="#f8fafc" stroke-width="2"/>
        `;
      } else {
        cuffLines = `
          <line class="hoodie-part" data-part="lineas_rib" x1="31" y1="319" x2="67" y2="316" stroke="#f8fafc" stroke-width="2.5"/>
          <line class="hoodie-part" data-part="lineas_rib" x1="369" y1="319" x2="333" y2="316" stroke="#f8fafc" stroke-width="2.5"/>
        `;
      }
    }

    const cuffs = `
      <!-- Puño Izquierdo -->
      <g>
        <path class="hoodie-part" data-part="${ribPartKey}" d="M36 310 L26 328 C34 336, 52 338, 62 325 L78 305 C66 318, 48 318, 36 310 Z" stroke="#1e293b" stroke-width="1.5"/>
        <line x1="32" y1="318" x2="68" y2="315" stroke="rgba(0,0,0,0.2)" stroke-width="1" stroke-dasharray="2 1"/>
      </g>
      <!-- Puño Derecho -->
      <g>
        <path class="hoodie-part" data-part="${ribPartKey}" d="M364 310 L374 328 C366 336, 348 338, 338 325 L322 305 C334 318, 352 318, 364 310 Z" stroke="#1e293b" stroke-width="1.5"/>
        <line x1="368" y1="318" x2="332" y2="315" stroke="rgba(0,0,0,0.2)" stroke-width="1" stroke-dasharray="2 1"/>
      </g>
      ${cuffLines}
    `;

    // B. TORSO REALISTA SEGÚN SUBMODELO
    if (subId.includes('franja_pecho')) {
      bodyPaths = `
        <path class="hoodie-part" data-part="pecho_sup" d="M125 90 C165 100, 235 100, 275 90 C265 110, 266 125, 268 140 C225 146, 175 146, 132 140 C134 125, 135 110, 125 90 Z" stroke="#1e293b" stroke-width="1.8"/>
        <path class="hoodie-part" data-part="franja_pecho" d="M132 140 C175 146, 225 146, 268 140 C270 160, 271 180, 272 195 C225 201, 175 201, 128 195 C129 180, 130 160, 132 140 Z" stroke="#1e293b" stroke-width="1.8"/>
        <path class="hoodie-part" data-part="cuerpo_inf" d="M128 195 C175 201, 225 201, 272 195 C273 235, 272 285, 268 325 C225 332, 175 332, 132 325 C128 285, 127 235, 128 195 Z" stroke="#1e293b" stroke-width="1.8"/>
      `;
    } else if (subId.includes('franja_horizontal') || (subId.includes('corte_horizontal') && subId.includes('polo'))) {
      bodyPaths = `
        <path class="hoodie-part" data-part="pecho_sup" d="M125 90 C165 100, 235 100, 275 90 C267 125, 270 150, 270 165 C225 170, 175 170, 130 165 C130 150, 133 125, 125 90 Z" stroke="#1e293b" stroke-width="1.8"/>
        <path class="hoodie-part" data-part="franja_central" d="M130 165 C175 170, 225 170, 270 165 C271 185, 271 205, 271 218 C225 224, 175 224, 129 218 C129 205, 129 185, 130 165 Z" stroke="#1e293b" stroke-width="1.8"/>
        <path class="hoodie-part" data-part="cuerpo_inf" d="M129 218 C175 224, 225 224, 271 218 C271 255, 270 295, 268 325 C225 332, 175 332, 132 325 C130 295, 129 255, 129 218 Z" stroke="#1e293b" stroke-width="1.8"/>
      `;
    } else if (subId.includes('doble_franja')) {
      bodyPaths = `
        <path class="hoodie-part" data-part="pecho_sup" d="M125 90 C165 100, 235 100, 275 90 C268 115, 269 130, 269 138 C225 143, 175 143, 131 138 C131 130, 132 115, 125 90 Z" stroke="#1e293b" stroke-width="1.8"/>
        <path class="hoodie-part" data-part="franja_1" d="M131 138 C175 143, 225 143, 269 138 C270 155, 270 165, 271 172 C225 177, 175 177, 129 172 C130 165, 130 155, 131 138 Z" stroke="#1e293b" stroke-width="1.8"/>
        <path class="hoodie-part" data-part="franja_2" d="M129 172 C175 177, 225 177, 271 172 C271 190, 271 200, 272 208 C225 214, 175 214, 128 208 C129 200, 129 190, 129 172 Z" stroke="#1e293b" stroke-width="1.8"/>
        <path class="hoodie-part" data-part="cuerpo_inf" d="M128 208 C175 214, 225 214, 272 208 C272 245, 271 285, 268 325 C225 332, 175 332, 132 325 C129 285, 128 245, 128 208 Z" stroke="#1e293b" stroke-width="1.8"/>
      `;
    } else if (subId.includes('franja_diagonal')) {
      bodyPaths = `
        <path class="hoodie-part" data-part="pecho_sup" d="M125 90 C165 100, 235 100, 275 90 C272 105, 270 120, 270 130 L128 175 C128 150, 129 120, 125 90 Z" stroke="#1e293b" stroke-width="1.8"/>
        <path class="hoodie-part" data-part="franja_diagonal" d="M128 175 L270 130 C271 150, 271 165, 271 175 L129 220 C128 205, 128 190, 128 175 Z" stroke="#1e293b" stroke-width="1.8"/>
        <path class="hoodie-part" data-part="cuerpo_inf" d="M129 220 L271 175 C271 225, 271 275, 268 325 C225 332, 175 332, 132 325 C129 285, 128 250, 129 220 Z" stroke="#1e293b" stroke-width="1.8"/>
      `;
    } else if (subId.includes('diagonal_triangulo')) {
      bodyPaths = `
        <path class="hoodie-part" data-part="pecho_triangulo" d="M125 90 C165 100, 235 100, 275 90 L271 185 L129 135 Z" stroke="#1e293b" stroke-width="1.8"/>
        <path class="hoodie-part" data-part="cuerpo_inf" d="M125 90 L129 135 L271 185 C271 230, 271 280, 268 325 C225 332, 175 332, 132 325 C128 285, 127 235, 125 90 Z" stroke="#1e293b" stroke-width="1.8"/>
      `;
    } else if (subId.includes('diagonal')) {
      bodyPaths = `
        <path class="hoodie-part" data-part="pecho_diagonal" d="M125 90 C165 100, 235 100, 275 90 C271 125, 271 155, 271 180 L129 130 C128 115, 127 100, 125 90 Z" stroke="#1e293b" stroke-width="1.8"/>
        <path class="hoodie-part" data-part="cuerpo_inf" d="M129 130 L271 180 C271 225, 271 275, 268 325 C225 332, 175 332, 132 325 C128 280, 128 220, 129 130 Z" stroke="#1e293b" stroke-width="1.8"/>
      `;
    } else if (subId.includes('zigzag')) {
      bodyPaths = `
        <path class="hoodie-part" data-part="pecho_zigzag" d="M125 90 C165 100, 235 100, 275 90 C269 125, 270 145, 270 160 L235 180 L200 160 L165 180 L130 160 C130 145, 131 125, 125 90 Z" stroke="#1e293b" stroke-width="1.8"/>
        <path class="hoodie-part" data-part="cuerpo_inf" d="M130 160 L165 180 L200 160 L235 180 L270 160 C271 205, 270 280, 268 325 C225 332, 175 332, 132 325 C130 280, 129 205, 130 160 Z" stroke="#1e293b" stroke-width="1.8"/>
      `;
    } else if (subId.includes('punta_v')) {
      bodyPaths = `
        <path class="hoodie-part" data-part="pecho_v" d="M125 90 C165 100, 235 100, 275 90 C269 135, 270 160, 270 170 L200 215 L130 170 C130 160, 131 135, 125 90 Z" stroke="#1e293b" stroke-width="1.8"/>
        <path class="hoodie-part" data-part="cuerpo_inf" d="M130 170 L200 215 L270 170 C271 210, 270 285, 268 325 C225 332, 175 332, 132 325 C130 285, 129 210, 130 170 Z" stroke="#1e293b" stroke-width="1.8"/>
      `;
    } else if (subId.includes('corte_bolsillo')) {
      bodyPaths = `
        <path class="hoodie-part" data-part="pecho_sup" d="M125 90 C165 100, 235 100, 275 90 C269 135, 271 185, 270 238 C225 244, 175 244, 130 238 C129 185, 131 135, 125 90 Z" stroke="#1e293b" stroke-width="1.8"/>
        <path class="hoodie-part" data-part="cuerpo_inf" d="M130 238 C175 244, 225 244, 270 238 C271 265, 270 295, 268 325 C225 332, 175 332, 132 325 C130 295, 129 265, 130 238 Z" stroke="#1e293b" stroke-width="1.8"/>
      `;
    } else if (subId.includes('corte_superior') || subId.includes('corte_pecho') || (subId.includes('corte_horizontal') && !subId.includes('polo'))) {
      bodyPaths = `
        <path class="hoodie-part" data-part="pecho_sup" d="M125 90 C165 100, 235 100, 275 90 C268 115, 269 135, 269 148 C225 154, 175 154, 131 148 C131 135, 132 115, 125 90 Z" stroke="#1e293b" stroke-width="1.8"/>
        <path class="hoodie-part" data-part="cuerpo_inf" d="M131 148 C175 154, 225 154, 269 148 C271 190, 271 260, 268 325 C225 332, 175 332, 132 325 C129 260, 129 190, 131 148 Z" stroke="#1e293b" stroke-width="1.8"/>
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
    let waistLines = '';
    if (hasRibLines) {
      if (isDoubleLine) {
        waistLines = `
          <line class="hoodie-part" data-part="lineas_rib" x1="135" y1="334" x2="265" y2="334" stroke="#f8fafc" stroke-width="2"/>
          <line class="hoodie-part" data-part="lineas_rib" x1="135" y1="343" x2="265" y2="343" stroke="#f8fafc" stroke-width="2"/>
        `;
      } else {
        waistLines = `
          <line class="hoodie-part" data-part="lineas_rib" x1="135" y1="338" x2="265" y2="338" stroke="#f8fafc" stroke-width="2.5"/>
        `;
      }
    }

    const waistband = `
      <g>
        <path class="hoodie-part" data-part="${ribPartKey}" d="M132 325 C175 332, 225 332, 268 325 L266 352 C225 359, 175 359, 134 352 Z" stroke="#1e293b" stroke-width="1.8"/>
        <line x1="140" y1="338" x2="260" y2="338" stroke="rgba(0,0,0,0.18)" stroke-width="1.2" stroke-dasharray="3 1.5"/>
      </g>
      ${waistLines}
    `;

    // C. DETALLES REALISTAS (Gorro con volumen 3D, Bolsillo Canguro con sombra, Cierres, etc.)
    if (isFront) {
      if (hasHood) {
        detailsPaths += `
          <!-- Capucha Exterior Frontal con Volumen y Caída Orgánica -->
          <path class="hoodie-part" data-part="gorro_ext" d="M142 85 C126 40, 160 18, 200 16 C240 18, 274 40, 258 85 C250 110, 225 118, 200 118 C175 118, 150 110, 142 85 Z" stroke="#1e293b" stroke-width="2"/>
          <!-- Forro Interior de Capucha con Profundidad -->
          <path class="hoodie-part" data-part="gorro_int" d="M164 78 C158 45, 242 45, 236 78 C228 102, 172 102, 164 78 Z" stroke="#1e293b" stroke-width="1.5"/>
        `;
        // Ojetillos y cordones solo en modelos que contemplan cordón en catálogo
        if (cat !== 'americano') {
          detailsPaths += `
            <circle cx="186" cy="98" r="3.2" fill="#94a3b8" stroke="#475569" stroke-width="1"/>
            <circle cx="214" cy="98" r="3.2" fill="#94a3b8" stroke="#475569" stroke-width="1"/>
            <path class="hoodie-part" data-part="cordon" d="M186 98 C182 135, 178 155, 182 178" stroke="#f8fafc" stroke-width="3" stroke-linecap="round" fill="none"/>
            <rect x="179.5" y="174" width="5" height="10" rx="2" fill="#cbd5e1" stroke="#475569" stroke-width="0.8"/>
            <path class="hoodie-part" data-part="cordon" d="M214 98 C218 135, 222 155, 218 178" stroke="#f8fafc" stroke-width="3" stroke-linecap="round" fill="none"/>
            <rect x="215.5" y="174" width="5" height="10" rx="2" fill="#cbd5e1" stroke="#475569" stroke-width="0.8"/>
          `;
        }
      } else if (isAmericano) {
        let collarLines = '';
        if (hasRibLines) {
          if (isDoubleLine) {
            collarLines = `
              <path class="hoodie-part" data-part="lineas_rib" d="M153 85 C175 102, 225 102, 247 85" stroke="#f8fafc" stroke-width="1.8" fill="none"/>
              <path class="hoodie-part" data-part="lineas_rib" d="M157 88 C175 105, 225 105, 243 88" stroke="#f8fafc" stroke-width="1.8" fill="none"/>
            `;
          } else {
            collarLines = `
              <path class="hoodie-part" data-part="lineas_rib" d="M155 86 C175 103, 225 103, 245 86" stroke="#f8fafc" stroke-width="2.2" fill="none"/>
            `;
          }
        }
        detailsPaths += `
          <!-- Cuello Rib Clásico Deportivo Americano -->
          <path class="hoodie-part" data-part="cuello_pretinas" d="M148 85 C175 110, 225 110, 252 85 C235 72, 165 72, 148 85 Z" stroke="#1e293b" stroke-width="2"/>
          <path d="M152 87 C175 106, 225 106, 248 87" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/>
          ${collarLines}
        `;
      } else if (isPolo) {
        detailsPaths += `
          <!-- Cuello Rib Clásico Deportivo Polo -->
          <path class="hoodie-part" data-part="cuello_rib" d="M148 85 C175 110, 225 110, 252 85 C235 72, 165 72, 148 85 Z" stroke="#1e293b" stroke-width="2"/>
          <path d="M152 87 C175 106, 225 106, 248 87" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/>
        `;
      } else if (isNeck) {
        detailsPaths += `
          <!-- Cuello Alto con Cierre 1/4 -->
          <path class="hoodie-part" data-part="cuello_alto" d="M156 88 L156 50 C185 45, 215 45, 244 50 L244 88 Z" stroke="#1e293b" stroke-width="2"/>
          <line class="hoodie-part" data-part="cierre" x1="200" y1="50" x2="200" y2="135" stroke="#cbd5e1" stroke-width="3.5" stroke-dasharray="3 1.5"/>
          <polygon points="196,128 204,128 202,136 198,136" fill="#e2e8f0" stroke="#334155" stroke-width="1"/>
          <!-- Bolsillos laterales discretos con cierre/tapeta -->
          <g class="hoodie-part" data-part="bolsillos_laterales">
            <path d="M136 260 L144 260 L142 305 L134 305 Z" stroke="#1e293b" stroke-width="1.2"/>
            <line x1="139" y1="262" x2="137" y2="303" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="2 1"/>
            <path d="M264 260 L256 260 L258 305 L266 305 Z" stroke="#1e293b" stroke-width="1.2"/>
            <line x1="261" y1="262" x2="263" y2="303" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="2 1"/>
          </g>
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
      // VISTA ESPALDA
      if (hasHood) {
        detailsPaths += `
          <!-- Capucha Caída Relajada con Pliegues Tridimensionales -->
          <path class="hoodie-part" data-part="gorro_ext" d="M142 85 C132 40, 268 40, 258 85 C248 135, 225 152, 200 152 C175 152, 152 135, 142 85 Z" stroke="#1e293b" stroke-width="2"/>
          <path d="M172 105 C190 135, 210 135, 228 105" stroke="rgba(0,0,0,0.3)" stroke-width="1.8" fill="none"/>
        `;
      } else if (isAmericano) {
        let collarLinesBack = '';
        if (hasRibLines) {
          if (isDoubleLine) {
            collarLinesBack = `
              <path class="hoodie-part" data-part="lineas_rib" d="M154 81 C175 90, 225 90, 246 81" stroke="#f8fafc" stroke-width="1.8" fill="none"/>
              <path class="hoodie-part" data-part="lineas_rib" d="M156 84 C175 93, 225 93, 244 84" stroke="#f8fafc" stroke-width="1.8" fill="none"/>
            `;
          } else {
            collarLinesBack = `
              <path class="hoodie-part" data-part="lineas_rib" d="M155 82 C175 91, 225 91, 245 82" stroke="#f8fafc" stroke-width="2.2" fill="none"/>
            `;
          }
        }
        detailsPaths += `
          <path class="hoodie-part" data-part="cuello_pretinas" d="M150 82 C175 92, 225 92, 250 82 C235 70, 165 70, 150 82 Z" stroke="#1e293b" stroke-width="2"/>
          ${collarLinesBack}
        `;
      } else if (isPolo) {
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
        <g id="layer-overlays-${opts.view}">
          <g id="layer-images-${opts.view}"></g>
          <g id="layer-texts-${opts.view}"></g>
        </g>
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
      let assignedHex = state.colors[partKey];

      // Herencia de color si pertenece al conjunto cuello_pretinas
      if (!assignedHex) {
        if ((partKey === 'pretina_punos' || partKey === 'cuello_rib') && state.colors['cuello_pretinas']) {
          assignedHex = state.colors['cuello_pretinas'];
        } else if (partKey === 'cuello_pretinas' && state.colors['pretina_punos']) {
          assignedHex = state.colors['pretina_punos'];
        }
      }
      assignedHex = assignedHex || '#162238';

      // Si es una línea o trazo sin relleno, pintar el trazo; de lo contrario el relleno
      if (el.tagName.toLowerCase() === 'line' || (el.getAttribute('fill') === 'none' && el.getAttribute('stroke') && el.getAttribute('stroke') !== 'none')) {
        el.style.stroke = assignedHex;
      } else {
        el.style.fill = assignedHex;
      }

      // Resaltar si es la parte activa (o si forma parte del conjunto activo)
      const isThisActive = (partKey === state.activePart) ||
        (state.activePart === 'cuello_pretinas' && (partKey === 'pretina_punos' || partKey === 'cuello_rib')) ||
        (state.activePart === 'pretina_punos' && partKey === 'cuello_pretinas');

      if (isThisActive) {
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
        let partKey = el.getAttribute('data-part');
        if (!partKey) return;

        // Verificar si la parte existe directamente en las opciones del dropdown
        const availableOptions = Array.from(elements.partSelectorDropdown.options).map(o => o.value);
        
        if (!availableOptions.includes(partKey)) {
          // Mapeos inteligentes para que nunca quede en blanco
          if ((partKey === 'pretina_punos' || partKey === 'cuello_rib') && availableOptions.includes('cuello_pretinas')) {
            partKey = 'cuello_pretinas';
          } else if (partKey === 'cuello_pretinas' && availableOptions.includes('pretina_punos')) {
            partKey = 'pretina_punos';
          } else if ((partKey === 'manga_izq' || partKey === 'manga_der') && availableOptions.includes('mangas')) {
            partKey = 'mangas';
          } else if (partKey === 'mangas_ranglan' && availableOptions.includes('mangas')) {
            partKey = 'mangas';
          } else if (partKey === 'mangas' && availableOptions.includes('mangas_ranglan')) {
            partKey = 'mangas_ranglan';
          } else if ((partKey === 'mitad_izq' || partKey === 'mitad_der') && availableOptions.includes('torso')) {
            partKey = 'torso';
          }
        }

        // Si la parte aún no está en el dropdown, fallback a la primera opción válida
        if (!availableOptions.includes(partKey) && availableOptions.length > 0) {
          partKey = availableOptions[0];
        }

        state.activePart = partKey;
        elements.partSelectorDropdown.value = partKey;

        // Al hacer clic directo en la pieza, aplicar el color seleccionado actualmente a esta pieza
        applyColor(state.selectedColorHex);
        showToast(`Pieza seleccionada: ${PART_LABELS[partKey] || partKey}`);
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

  // -------------------------------------------------------------------------
  // 12. GESTIÓN MULTICAPA DE TEXTOS E IMÁGENES
  // -------------------------------------------------------------------------
  function getActiveText() {
    return state.texts.find(t => t.id === state.activeTextId) || state.texts[0] || null;
  }

  function renderTextList() {
    if (!elements.textLayersList) return;
    elements.textLayersList.innerHTML = '';

    if (state.texts.length === 0) {
      elements.textLayersList.innerHTML = `<div class="layers-empty-hint">Sin textos en el polerón. Presiona "➕ Agregar Texto" para añadir bordados.</div>`;
      if (elements.activeTextEditor) elements.activeTextEditor.style.display = 'none';
      return;
    }

    if (elements.activeTextEditor) elements.activeTextEditor.style.display = 'block';

    const activeItem = getActiveText();
    if (!activeItem && state.texts.length > 0) {
      state.activeTextId = state.texts[0].id;
    }

    state.texts.forEach((item) => {
      const card = document.createElement('div');
      card.className = `layer-item-card ${item.id === state.activeTextId ? 'active' : ''}`;
      card.setAttribute('data-id', item.id);

      const isEspalda = item.view === 'espalda';
      const icon = item.isNick ? '#' : '🔤';

      card.innerHTML = `
        <div class="layer-card-left">
          <span>${icon}</span>
          <span class="layer-card-title">${item.text || '(Texto vacío)'}</span>
          <span class="layer-card-badge ${isEspalda ? 'espalda' : ''}">${isEspalda ? 'Espalda' : 'Frente'}</span>
        </div>
        <button type="button" class="layer-btn-delete" title="Eliminar texto">✕</button>
      `;

      card.addEventListener('click', (e) => {
        if (e.target.closest('.layer-btn-delete')) return;
        state.activeTextId = item.id;
        renderTextList();
        renderActiveTextEditor();
        updateTextOverlays();
      });

      const delBtn = card.querySelector('.layer-btn-delete');
      if (delBtn) {
        delBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          deleteText(item.id);
        });
      }

      elements.textLayersList.appendChild(card);
    });

    renderActiveTextEditor();
  }

  function renderActiveTextEditor() {
    const item = getActiveText();
    if (!item || !elements.activeTextEditor) return;

    if (elements.activeTextEditorTitle) {
      elements.activeTextEditorTitle.textContent = `Editar: ${item.text || 'Texto'}`;
    }

    if (elements.inputTextContent) {
      elements.inputTextContent.value = item.text || '';
    }

    if (elements.btnTextTargetFrente && elements.btnTextTargetEspalda) {
      elements.btnTextTargetFrente.classList.toggle('active', item.view === 'frente');
      elements.btnTextTargetEspalda.classList.toggle('active', item.view === 'espalda');
    }

    if (elements.btnPosPechoIzq) {
      elements.btnPosPechoIzq.style.display = item.view === 'espalda' ? 'none' : '';
    }

    if (elements.btnTextStyleNormal && elements.btnTextStyleNick) {
      elements.btnTextStyleNormal.classList.toggle('active', !item.isNick);
      elements.btnTextStyleNick.classList.toggle('active', !!item.isNick);
    }

    if (elements.sliderTextSize) {
      elements.sliderTextSize.value = item.size;
    }
    if (elements.labelValTextSize) {
      elements.labelValTextSize.textContent = `${item.size}px`;
    }

    if (elements.fontOptionBtns) {
      elements.fontOptionBtns.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-font') === item.font);
      });
    }

    if (elements.inputTextColor) {
      elements.inputTextColor.value = item.color || '#ffffff';
    }
  }

  function addNewText() {
    const newId = 't_' + Date.now();
    const newText = {
      id: newId,
      text: 'NUEVO TEXTO',
      view: 'frente',
      x: 200,
      y: 155,
      size: 20,
      font: "'Plus Jakarta Sans', sans-serif",
      color: '#ffffff',
      isNick: false
    };
    state.texts.push(newText);
    state.activeTextId = newId;
    renderTextList();
    updateTextOverlays();
    showToast('Nuevo texto agregado al polerón');
  }

  function deleteText(id) {
    const idx = state.texts.findIndex(t => t.id === id);
    if (idx !== -1) {
      state.texts.splice(idx, 1);
      if (state.activeTextId === id) {
        state.activeTextId = state.texts.length > 0 ? state.texts[Math.max(0, idx - 1)].id : null;
      }
      renderTextList();
      updateTextOverlays();
      showToast('Texto eliminado');
    }
  }

  function getActiveImage() {
    return state.images.find(img => img.id === state.activeImageId) || state.images[0] || null;
  }

  function renderImageList() {
    if (!elements.imageLayersList) return;
    elements.imageLayersList.innerHTML = '';

    if (state.images.length === 0) {
      elements.imageLayersList.innerHTML = `<div class="layers-empty-hint">Aún no hay imágenes. Sube logos, escudos o estampados arriba.</div>`;
      if (elements.activeImageEditor) elements.activeImageEditor.style.display = 'none';
      return;
    }

    if (elements.activeImageEditor) elements.activeImageEditor.style.display = 'block';

    const activeItem = getActiveImage();
    if (!activeItem && state.images.length > 0) {
      state.activeImageId = state.images[0].id;
    }

    state.images.forEach((img, index) => {
      const card = document.createElement('div');
      card.className = `layer-item-card ${img.id === state.activeImageId ? 'active' : ''}`;
      card.setAttribute('data-id', img.id);

      const isEspalda = img.view === 'espalda';

      card.innerHTML = `
        <div class="layer-card-left">
          <img src="${img.src}" class="layer-card-thumb" alt="Miniatura">
          <span class="layer-card-title">Imagen ${index + 1} (${img.size}px)</span>
          <span class="layer-card-badge ${isEspalda ? 'espalda' : ''}">${isEspalda ? 'Espalda' : 'Frente'}</span>
        </div>
        <button type="button" class="layer-btn-delete" title="Eliminar imagen">✕</button>
      `;

      card.addEventListener('click', (e) => {
        if (e.target.closest('.layer-btn-delete')) return;
        state.activeImageId = img.id;
        renderImageList();
        renderActiveImageEditor();
        updateImagesOverlays();
      });

      const delBtn = card.querySelector('.layer-btn-delete');
      if (delBtn) {
        delBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          deleteImage(img.id);
        });
      }

      elements.imageLayersList.appendChild(card);
    });

    renderActiveImageEditor();
  }

  function renderActiveImageEditor() {
    const item = getActiveImage();
    if (!item || !elements.activeImageEditor) return;

    if (elements.activeImageEditorTitle) {
      elements.activeImageEditorTitle.textContent = `Ajustar Imagen (${item.view.toUpperCase()})`;
    }

    if (elements.btnImgTargetFrente && elements.btnImgTargetEspalda) {
      elements.btnImgTargetFrente.classList.toggle('active', item.view === 'frente');
      elements.btnImgTargetEspalda.classList.toggle('active', item.view === 'espalda');
    }

    if (elements.btnImgPosPechoIzq) {
      elements.btnImgPosPechoIzq.style.display = item.view === 'espalda' ? 'none' : '';
    }

    if (elements.sliderImageSize) {
      elements.sliderImageSize.value = item.size;
    }
    if (elements.labelValImageSize) {
      elements.labelValImageSize.textContent = `${item.size}px`;
    }
  }

  function addNewImage(dataUrl, view) {
    const newId = 'img_' + Date.now();
    const defaultPos = view === 'frente' ? { x: 155, y: 140 } : { x: 200, y: 220 };
    const defaultSize = view === 'frente' ? 45 : 95;

    const newImg = {
      id: newId,
      src: dataUrl,
      view: view,
      x: defaultPos.x,
      y: defaultPos.y,
      size: defaultSize
    };

    state.images.push(newImg);
    state.activeImageId = newId;
    renderImageList();
    updateImagesOverlays();
    showToast(`Imagen agregada en: ${view.toUpperCase()}`);
  }

  function deleteImage(id) {
    const idx = state.images.findIndex(img => img.id === id);
    if (idx !== -1) {
      state.images.splice(idx, 1);
      if (state.activeImageId === id) {
        state.activeImageId = state.images.length > 0 ? state.images[Math.max(0, idx - 1)].id : null;
      }
      renderImageList();
      updateImagesOverlays();
      showToast('Imagen eliminada');
    }
  }

  function updateTextOverlays() {
    const frontTextLayer = document.getElementById('layer-texts-frente') || document.getElementById('layer-overlays-frente');
    const backTextLayer = document.getElementById('layer-texts-espalda') || document.getElementById('layer-overlays-espalda');

    if (frontTextLayer) frontTextLayer.innerHTML = '';
    if (backTextLayer) backTextLayer.innerHTML = '';

    state.texts.forEach(item => {
      if (!item.text && !item.isNick) return;
      const targetLayer = item.view === 'frente' ? frontTextLayer : backTextLayer;
      if (!targetLayer) return;

      const isSelected = item.id === state.activeTextId;
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', `draggable-text-group ${isSelected ? 'layer-selected' : ''}`);
      g.setAttribute('id', `group-text-${item.id}`);
      g.setAttribute('transform', `translate(${item.x}, ${item.y})`);
      g.setAttribute('title', 'Haz clic para seleccionar o arrastra para mover');

      const color = item.color || '#ffffff';
      const font = item.font || "'Plus Jakarta Sans', sans-serif";
      const size = item.size || 22;

      if (item.isNick) {
        const text = item.text || '#APODO';
        const approxW = Math.max(60, text.length * (size * 0.65) + 20);

        const handleBox = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        handleBox.setAttribute('class', 'drag-handle-box');
        handleBox.setAttribute('x', `-${approxW / 2}`);
        handleBox.setAttribute('y', `-${size + 4}`);
        handleBox.setAttribute('width', `${approxW}`);
        handleBox.setAttribute('height', `${size + 12}`);
        handleBox.setAttribute('rx', '6');
        g.appendChild(handleBox);

        const textEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        textEl.setAttribute('x', '0');
        textEl.setAttribute('y', '0');
        textEl.setAttribute('text-anchor', 'middle');
        textEl.setAttribute('fill', color);
        textEl.setAttribute('font-family', font);
        textEl.setAttribute('font-size', size);
        textEl.setAttribute('font-weight', '800');
        textEl.style.filter = 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))';
        textEl.textContent = text;
        g.appendChild(textEl);
      } else {
        const text = item.text || '';
        const approxW = Math.max(60, text.length * (size * 0.65) + 20);
        const handleBox = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        handleBox.setAttribute('class', 'drag-handle-box');
        handleBox.setAttribute('x', `-${approxW / 2}`);
        handleBox.setAttribute('y', `-${size + 6}`);
        handleBox.setAttribute('width', `${approxW}`);
        handleBox.setAttribute('height', `${size + 14}`);
        handleBox.setAttribute('rx', '6');
        g.appendChild(handleBox);

        const textEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        textEl.setAttribute('x', '0');
        textEl.setAttribute('y', '0');
        textEl.setAttribute('text-anchor', 'middle');
        textEl.setAttribute('fill', color);
        textEl.setAttribute('font-family', font);
        textEl.setAttribute('font-size', size);
        textEl.setAttribute('font-weight', '900');
        textEl.setAttribute('letter-spacing', '2');
        textEl.style.filter = 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))';
        textEl.textContent = text;
        g.appendChild(textEl);
      }

      targetLayer.appendChild(g);

      g.addEventListener('click', () => {
        state.activeTextId = item.id;
        renderTextList();
        renderActiveTextEditor();
        updateTextOverlays();
      });

      makeSvgDraggable(g, (dx, dy) => {
        item.x = Math.max(40, Math.min(360, item.x + dx));
        item.y = Math.max(60, Math.min(330, item.y + dy));
        g.setAttribute('transform', `translate(${item.x}, ${item.y})`);
      });
    });
  }

  function updateImagesOverlays() {
    const frontImagesLayer = document.getElementById('layer-images-frente') || document.getElementById('layer-overlays-frente');
    const backImagesLayer = document.getElementById('layer-images-espalda') || document.getElementById('layer-overlays-espalda');

    if (frontImagesLayer) frontImagesLayer.innerHTML = '';
    if (backImagesLayer) backImagesLayer.innerHTML = '';

    state.images.forEach(imgItem => {
      const targetLayer = imgItem.view === 'frente' ? frontImagesLayer : backImagesLayer;
      if (!targetLayer) return;

      const isSelected = imgItem.id === state.activeImageId;
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', `draggable-logo-group ${isSelected ? 'layer-selected' : ''}`);
      g.setAttribute('id', `group-img-${imgItem.id}`);
      g.setAttribute('transform', `translate(${imgItem.x}, ${imgItem.y})`);
      g.setAttribute('title', 'Haz clic para seleccionar o arrastra para mover');

      const img = document.createElementNS('http://www.w3.org/2000/svg', 'image');
      img.setAttribute('href', imgItem.src);
      img.setAttribute('x', `-${imgItem.size / 2}`);
      img.setAttribute('y', `-${imgItem.size / 2}`);
      img.setAttribute('width', `${imgItem.size}`);
      img.setAttribute('height', `${imgItem.size}`);
      img.setAttribute('preserveAspectRatio', 'xMidYMid meet');
      img.style.filter = 'drop-shadow(0 2px 5px rgba(0,0,0,0.6))';

      const handle = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      handle.setAttribute('class', 'drag-handle-box');
      handle.setAttribute('x', `-${imgItem.size / 2 + 4}`);
      handle.setAttribute('y', `-${imgItem.size / 2 + 4}`);
      handle.setAttribute('width', `${imgItem.size + 8}`);
      handle.setAttribute('height', `${imgItem.size + 8}`);
      handle.setAttribute('rx', '4');

      g.appendChild(handle);
      g.appendChild(img);
      targetLayer.appendChild(g);

      g.addEventListener('click', () => {
        state.activeImageId = imgItem.id;
        renderImageList();
        renderActiveImageEditor();
        updateImagesOverlays();
      });

      makeSvgDraggable(g, (dx, dy) => {
        imgItem.x = Math.max(40, Math.min(360, imgItem.x + dx));
        imgItem.y = Math.max(60, Math.min(330, imgItem.y + dy));
        g.setAttribute('transform', `translate(${imgItem.x}, ${imgItem.y})`);
      });
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
    if (state.texts.length > 0) {
      extraDetails += `\n📝 *Textos y Bordados:*\n`;
      state.texts.forEach((t) => {
        const viewStr = t.view === 'frente' ? 'Pecho/Frente' : 'Espalda';
        const typeStr = t.isNick ? 'Apodo (#)' : 'Texto';
        extraDetails += `• [${viewStr}] ${typeStr}: *${t.text}*\n`;
      });
    }

    if (state.images.length > 0) {
      extraDetails += `\n🖼️ *Imágenes y Estampados:*\n`;
      state.images.forEach((img, i) => {
        const viewStr = img.view === 'frente' ? 'Pecho/Frente' : 'Espalda';
        extraDetails += `• [${viewStr}] Imagen ${i + 1} (${img.size}px)\n`;
      });
    }

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
      const currentColorOfPart = state.colors[state.activePart] || state.selectedColorHex;
      updateColorIndicators(currentColorOfPart);
      updateSvgColors();
    });

    // Input de color nativo
    elements.inputNativeColor.addEventListener('input', (e) => {
      applyColor(e.target.value, 'Color Personalizado');
    });

    // -----------------------------------------------------------------------
    // GESTIÓN DE TEXTOS MULTICAPA (LISTENERS)
    // -----------------------------------------------------------------------
    if (elements.btnAddText) {
      elements.btnAddText.addEventListener('click', addNewText);
    }

    if (elements.inputTextContent) {
      elements.inputTextContent.addEventListener('input', (e) => {
        const item = getActiveText();
        if (item) {
          item.text = e.target.value;
          renderTextList();
          updateTextOverlays();
        }
      });
    }

    if (elements.btnTextTargetFrente) {
      elements.btnTextTargetFrente.addEventListener('click', () => {
        const item = getActiveText();
        if (item) {
          item.view = 'frente';
          item.x = 200;
          item.y = 155;
          renderTextList();
          updateTextOverlays();
          showToast('Texto movido a: FRENTE');
        }
      });
    }

    if (elements.btnTextTargetEspalda) {
      elements.btnTextTargetEspalda.addEventListener('click', () => {
        const item = getActiveText();
        if (item) {
          item.view = 'espalda';
          item.x = 200;
          item.y = 160;
          renderTextList();
          updateTextOverlays();
          showToast('Texto movido a: ESPALDA');
        }
      });
    }

    if (elements.btnTextStyleNormal) {
      elements.btnTextStyleNormal.addEventListener('click', () => {
        const item = getActiveText();
        if (item) {
          item.isNick = false;
          renderTextList();
          updateTextOverlays();
        }
      });
    }

    if (elements.btnTextStyleNick) {
      elements.btnTextStyleNick.addEventListener('click', () => {
        const item = getActiveText();
        if (item) {
          item.isNick = true;
          renderTextList();
          updateTextOverlays();
        }
      });
    }

    if (elements.sliderTextSize) {
      elements.sliderTextSize.addEventListener('input', (e) => {
        const item = getActiveText();
        if (item) {
          item.size = parseInt(e.target.value, 10);
          if (elements.labelValTextSize) elements.labelValTextSize.textContent = `${item.size}px`;
          updateTextOverlays();
        }
      });
    }

    if (elements.btnTextSizeDown) {
      elements.btnTextSizeDown.addEventListener('click', () => {
        const item = getActiveText();
        if (item) {
          item.size = Math.max(10, item.size - 2);
          if (elements.sliderTextSize) elements.sliderTextSize.value = item.size;
          if (elements.labelValTextSize) elements.labelValTextSize.textContent = `${item.size}px`;
          updateTextOverlays();
        }
      });
    }

    if (elements.btnTextSizeUp) {
      elements.btnTextSizeUp.addEventListener('click', () => {
        const item = getActiveText();
        if (item) {
          item.size = Math.min(48, item.size + 2);
          if (elements.sliderTextSize) elements.sliderTextSize.value = item.size;
          if (elements.labelValTextSize) elements.labelValTextSize.textContent = `${item.size}px`;
          updateTextOverlays();
        }
      });
    }

    if (elements.fontOptionBtns) {
      elements.fontOptionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const item = getActiveText();
          if (item) {
            item.font = btn.getAttribute('data-font');
            renderActiveTextEditor();
            updateTextOverlays();
          }
        });
      });
    }

    if (elements.inputTextColor) {
      elements.inputTextColor.addEventListener('input', (e) => {
        const item = getActiveText();
        if (item) {
          item.color = e.target.value;
          updateTextOverlays();
        }
      });
    }

    if (elements.btnPosArriba) {
      elements.btnPosArriba.addEventListener('click', () => {
        const item = getActiveText();
        if (item) {
          item.y = 125;
          updateTextOverlays();
          showToast('Texto ubicado arriba');
        }
      });
    }

    if (elements.btnPosCentro) {
      elements.btnPosCentro.addEventListener('click', () => {
        const item = getActiveText();
        if (item) {
          item.x = 200;
          item.y = item.view === 'frente' ? 155 : 170;
          updateTextOverlays();
          showToast('Texto centrado');
        }
      });
    }

    if (elements.btnPosAbajo) {
      elements.btnPosAbajo.addEventListener('click', () => {
        const item = getActiveText();
        if (item) {
          item.y = 235;
          updateTextOverlays();
          showToast('Texto ubicado abajo');
        }
      });
    }

    if (elements.btnPosPechoIzq) {
      elements.btnPosPechoIzq.addEventListener('click', () => {
        const item = getActiveText();
        if (item && item.view === 'frente') {
          item.x = 150;
          item.y = 145;
          updateTextOverlays();
          showToast('Texto ubicado en pecho izquierdo');
        }
      });
    }

    if (elements.btnDeleteCurrentText) {
      elements.btnDeleteCurrentText.addEventListener('click', () => {
        const item = getActiveText();
        if (item) {
          deleteText(item.id);
        }
      });
    }

    // -----------------------------------------------------------------------
    // GESTIÓN DE IMÁGENES MULTICAPA (LISTENERS)
    // -----------------------------------------------------------------------
    if (elements.btnUploadTargetFrente && elements.btnUploadTargetEspalda) {
      elements.btnUploadTargetFrente.addEventListener('click', () => {
        state.newImageUploadTarget = 'frente';
        elements.btnUploadTargetFrente.classList.add('active');
        elements.btnUploadTargetEspalda.classList.remove('active');
      });
      elements.btnUploadTargetEspalda.addEventListener('click', () => {
        state.newImageUploadTarget = 'espalda';
        elements.btnUploadTargetEspalda.classList.add('active');
        elements.btnUploadTargetFrente.classList.remove('active');
      });
    }

    if (elements.uploadDropzoneUniversal && elements.imageFileInputUniversal) {
      elements.uploadDropzoneUniversal.addEventListener('click', () => {
        elements.imageFileInputUniversal.click();
      });

      elements.imageFileInputUniversal.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            addNewImage(event.target.result, state.newImageUploadTarget || 'frente');
            elements.imageFileInputUniversal.value = '';
          };
          reader.readAsDataURL(file);
        }
      });
    }

    if (elements.btnImgTargetFrente && elements.btnImgTargetEspalda) {
      elements.btnImgTargetFrente.addEventListener('click', () => {
        const item = getActiveImage();
        if (item) {
          item.view = 'frente';
          item.x = 155;
          item.y = 140;
          renderImageList();
          updateImagesOverlays();
          showToast('Imagen movida a: FRENTE');
        }
      });
      elements.btnImgTargetEspalda.addEventListener('click', () => {
        const item = getActiveImage();
        if (item) {
          item.view = 'espalda';
          item.x = 200;
          item.y = 220;
          renderImageList();
          updateImagesOverlays();
          showToast('Imagen movida a: ESPALDA');
        }
      });
    }

    if (elements.sliderImageSize) {
      elements.sliderImageSize.addEventListener('input', (e) => {
        const item = getActiveImage();
        if (item) {
          item.size = parseInt(e.target.value, 10);
          if (elements.labelValImageSize) elements.labelValImageSize.textContent = `${item.size}px`;
          updateImagesOverlays();
        }
      });
    }

    if (elements.btnImageSizeDown) {
      elements.btnImageSizeDown.addEventListener('click', () => {
        const item = getActiveImage();
        if (item) {
          item.size = Math.max(20, item.size - 8);
          if (elements.sliderImageSize) elements.sliderImageSize.value = item.size;
          if (elements.labelValImageSize) elements.labelValImageSize.textContent = `${item.size}px`;
          updateImagesOverlays();
        }
      });
    }

    if (elements.btnImageSizeUp) {
      elements.btnImageSizeUp.addEventListener('click', () => {
        const item = getActiveImage();
        if (item) {
          item.size = Math.min(230, item.size + 8);
          if (elements.sliderImageSize) elements.sliderImageSize.value = item.size;
          if (elements.labelValImageSize) elements.labelValImageSize.textContent = `${item.size}px`;
          updateImagesOverlays();
        }
      });
    }

    if (elements.btnImgPosArriba) {
      elements.btnImgPosArriba.addEventListener('click', () => {
        const item = getActiveImage();
        if (item) {
          item.x = 200;
          item.y = item.view === 'frente' ? 130 : 145;
          updateImagesOverlays();
          showToast('Imagen ubicada arriba');
        }
      });
    }

    if (elements.btnImgPosCentro) {
      elements.btnImgPosCentro.addEventListener('click', () => {
        const item = getActiveImage();
        if (item) {
          item.x = 200;
          item.y = item.view === 'frente' ? 160 : 220;
          updateImagesOverlays();
          showToast('Imagen centrada');
        }
      });
    }

    if (elements.btnImgPosAbajo) {
      elements.btnImgPosAbajo.addEventListener('click', () => {
        const item = getActiveImage();
        if (item) {
          item.x = 200;
          item.y = 265;
          updateImagesOverlays();
          showToast('Imagen ubicada abajo');
        }
      });
    }

    if (elements.btnImgPosPechoIzq) {
      elements.btnImgPosPechoIzq.addEventListener('click', () => {
        const item = getActiveImage();
        if (item && item.view === 'frente') {
          item.x = 155;
          item.y = 140;
          updateImagesOverlays();
          showToast('Imagen en pecho izquierdo');
        }
      });
    }

    if (elements.btnDeleteCurrentImage) {
      elements.btnDeleteCurrentImage.addEventListener('click', () => {
        const item = getActiveImage();
        if (item) {
          deleteImage(item.id);
        }
      });
    }

    // Alternar vistas (Ambas Vistas, Solo Frente, Solo Espalda)
    const sweatshirtContainer = document.querySelector('.sweatshirt-dual-view');
    elements.viewPillBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        elements.viewPillBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const view = btn.getAttribute('data-view');
        state.activeView = view;

        if (view === 'frente') {
          if (sweatshirtContainer) sweatshirtContainer.classList.add('single-view');
          elements.viewCardFront.classList.remove('view-hidden');
          elements.viewCardBack.classList.add('view-hidden');
          showToast('Vista: Solo Frente');
        } else if (view === 'espalda') {
          if (sweatshirtContainer) sweatshirtContainer.classList.add('single-view');
          elements.viewCardFront.classList.add('view-hidden');
          elements.viewCardBack.classList.remove('view-hidden');
          showToast('Vista: Solo Espalda');
        } else {
          // Ambos
          if (sweatshirtContainer) sweatshirtContainer.classList.remove('single-view');
          elements.viewCardFront.classList.remove('view-hidden');
          elements.viewCardBack.classList.remove('view-hidden');
          showToast('Vista: Ambas Vistas');
        }
      });
    });

    // Botones de acción principales
    elements.btnWhatsAppQuote.addEventListener('click', sendToWhatsApp);
    elements.btnDownloadPng.addEventListener('click', downloadMockupPng);

    elements.btnResetAll.addEventListener('click', () => {
      if (confirm('¿Deseas reiniciar los colores y diseño de este modelo?')) {
        state.colors = {};
        state.images = [];
        state.activeImageId = null;
        state.texts = [
          {
            id: 't_gen',
            text: 'GENERACIÓN 2026',
            view: 'espalda',
            x: 200,
            y: 160,
            size: 22,
            font: "'Plus Jakarta Sans', sans-serif",
            color: '#ffffff',
            isNick: false
          },
          {
            id: 't_nick',
            text: '#MATI',
            view: 'espalda',
            x: 200,
            y: 200,
            size: 13,
            font: "'Plus Jakarta Sans', sans-serif",
            color: '#ffffff',
            isNick: true
          }
        ];
        state.activeTextId = 't_gen';
        renderTextList();
        renderImageList();
        setSubmodel(state.categoryKey, state.submodelId);
        showToast('Diseño reiniciado');
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
