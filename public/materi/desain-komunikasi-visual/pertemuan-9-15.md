# MODUL PERKULIAHAN DESAIN KOMUNIKASI VISUAL - PERTEMUAN 9

JUDUL: Software Illustrator (Vector Graphics Lanjutan)

## SUB-CPMK

## Mahasiswa mengenal dan mempraktikkan software illustrator untuk membuat

desain vector graphics tingkat lanjut dengan menggunakan teknik-teknik
profesional.

## TUJUAN PEMBELAJARAN

## Setelah mengikuti perkuliahan ini, mahasiswa diharapkan mampu:

#### 1. Menguasai teknik-teknik lanjutan dalam Inkscape untuk vector illustration

#### 2. Menggunakan pathfinder operations untuk membuat shape kompleks

#### 3. Menerapkan gradients, patterns, dan effects untuk meningkatkan kualitas

   desain
#### 4. Membuat text effects dan typography artistic

#### 5. Mengembangkan ilustrasi vector yang kompleks dan profesional

#### 6. Merancang dan membuat infografis yang informatif dan menarik

#### 7. Memahami workflow persiapan file untuk print production

#### 8. Mengoptimalkan file vector untuk berbagai media output

## PENGANTAR MATERI

Setelah memahami dasar-dasar software desain grafis 2D pada pertemuan
sebelumnya, kini saatnya mendalami kemampuan vector graphics pada tingkat
yang lebih advanced. Vector graphics adalah backbone dari banyak professional
design work - dari logo dan icon design, hingga illustration dan infographic
creation. Keunggulan vector (scalability tanpa loss of quality) menjadikannya
pilihan utama untuk desain yang harus reproduce dalam berbagai ukuran.

Inkscape, sebagai powerful open-source vector graphics editor, menyediakan
tools dan features yang setara dengan software commercial seperti Adobe
Illustrator. Menguasai advanced techniques dalam Inkscape tidak hanya
membuka creative possibilities yang lebih luas, tetapi juga meningkatkan
efficiency dan profesionalitas dalam workflow desain Anda.

Pertemuan ini akan fokus pada techniques yang membedakan amateur dari
professional vector artist - pathfinder operations untuk shape manipulation,
gradient dan pattern application untuk depth dan texture, advanced text
manipulation, dan preparation untuk professional print production. Anda
juga akan belajar membuat infografis, salah satu deliverable paling in-demand
dalam communication design industry.

Dengan menguasai advanced vector techniques, Anda akan mampu mengeksekusi
desain-desain kompleks yang sebelumnya tampak intimidating, dan produce work
yang memenuhi professional industry standards.

## MATERI

### A. ADVANCED PATH OPERATIONS DAN SHAPE MANIPULATION

#### 1. Pathfinder Operations (Boolean Operations)

   Pathfinder adalah set of operations yang memungkinkan Anda combine,
   subtract, atau intersect shapes untuk create complex forms.

**a. Union (Combine)**

      - Menggabungkan dua atau lebih object menjadi single path
      - Menu: Path > Union (Ctrl+K)
      - Use case: Merging letters, creating compound shapes
      - Tips: Pastikan objects overlapping sebelum union

**b. Difference (Subtract)**

      - Mengurangi top object dari bottom object
      - Menu: Path > Difference (Ctrl+-)
      - Use case: Cutting holes, creating negative space
      - Important: Object order matters! Top object = cutter

**c. Intersection**

      - Keeps only overlapping area dari multiple objects
      - Menu: Path > Intersection (Ctrl+*)
      - Use case: Creating complex intersecting shapes
      - Hasil: New object dengan combined properties

**d. Exclusion**

      - Keeps everything except overlapping area
      - Menu: Path > Exclusion (Ctrl+^)
      - Use case: Creating knockout effects
      - Opposite of intersection

**e. Division**

      - Breaks bottom object into pieces defined by top object
      - Menu: Path > Division (Ctrl+/)
      - Use case: Slicing objects, creating separated segments
      - Each piece becomes independent object

**f. Cut Path**

      - Similar to division but for stroke paths
      - Menu: Path > Cut Path
      - Use case: Breaking continuous paths at intersection points

   Workflow Tips:
   - Duplicate objects sebelum pathfinder (Ctrl+D) untuk backup
   - Gunakan layers untuk organize complex operations
   - Combine multiple operations untuk create intricate shapes
   - Use "Object to Path" jika operation tidak bekerja

#### 2. Advanced Path Editing

**a. Node Manipulation**

      - Edit Paths by Nodes tool (F2 atau N)
      - Node types: Corner, Smooth, Symmetric, Auto-smooth
      - Adding nodes: Double-click on path
      - Deleting nodes: Select node > Delete key
      - Breaking paths: Select node > Break path button
      - Joining paths: Select end nodes > Join selected nodes

**b. Bezier Handles**

      - Adjust curve direction dan intensity
      - Symmetric handles: Equal length, opposite direction
      - Asymmetric handles: Independent adjustment
      - Make nodes smooth: Select node > Make smooth button

**c. Simplify Path**

      - Menu: Path > Simplify (Ctrl+L)
      - Reduces number of nodes
      - Use case: Cleaning up traced images, reducing file size
      - Adjust threshold in settings

**d. Offset Path**

      - Menu: Path > Inset / Outset / Dynamic Offset
      - Inset (Ctrl+(): Shrink path inward
      - Outset (Ctrl+)): Expand path outward
      - Dynamic Offset: Interactive offset with handle
      - Use case: Creating borders, outlines, multiple strokes

#### 3. Clipping dan Masking

**a. Clipping (Clip)**

      - Non-destructive way to hide parts of object
      - Select content object > select clipping path > Object > Clip > Set
      - Clippath must be on top
      - Release: Object > Clip > Release
      - Use case: Masking photos dalam shapes

**b. Masking**

      - Similar to clipping tapi uses transparency
      - Create mask object > select content > Object > Mask > Set
      - Mask opacity affects content visibility
      - Use case: Fading effects, complex visibility control

**c. Pattern Fill**

      - Create custom repeating patterns
      - Create pattern design > select > Object > Pattern > Objects to Pattern
      - Apply: Select object > Fill tab > Pattern fill
      - Edit pattern: Object > Pattern > Pattern to Objects
      - Use case: Textures, backgrounds, decorative elements

### B. GRADIENTS DAN COLOR EFFECTS

#### 1. Advanced Gradient Techniques

**a. Linear Gradients**

      - Create: Select object > gradient tool (G)
      - Click and drag untuk set direction
      - Multiple color stops: Click on gradient line
      - Adjust stop position: Drag color stop
      - Change color: Double-click stop > pick color
      - Delete stop: Shift+click on stop

**b. Radial Gradients**

      - Same tool, choose radial in toolbar
      - Drag from center outward
      - Adjust center point: Drag circle handle
      - Adjust radius: Drag gradient handles
      - Elliptical radial: Transform with Ctrl+Shift

**c. Mesh Gradients (Advanced)**

      - Create: Object > Fill and Stroke > Mesh
      - Atau: select gradient > Convert to mesh
      - Edit mesh: Drag nodes untuk deform gradient
      - Color individual nodes: Select node > pick color
      - Add rows/columns: Right-click on mesh
      - Use case: Realistic shading, complex color transitions

**d. Gradient Strategies for Depth**

      - Light source consistency: Decide light direction
      - Highlight and shadow: Use gradient untuk create form
      - Color temperature: Warm highlights, cool shadows
      - Subtle transitions: Avoid harsh color jumps
      - Transparency gradients: Fade to transparent for effects

#### 2. Filters dan Effects

**a. Drop Shadows**

      - Filters > Shadows and Glows > Drop Shadow
      - Adjust: Blur, opacity, offset
      - Use sparingly: Overuse looks unprofessional
      - Best for: Creating depth, separating layers

**b. Blurs**

      - Filters > Blurs > Gaussian Blur
      - Applications: Depth of field, soft backgrounds
      - Performance: Heavy blur slows rendering
      - Workaround: Duplicate and blur copy

**c. Color Adjustments**

      - Filters > Color > Adjust color schemes
      - Hue rotation: Shift colors
      - Saturation: Intensity control
      - Brightness: Lighten or darken
      - Use case: Color correction, creating variations

**d. Blend Modes**

      - Object > Fill and Stroke > Blur/Opacity tab
      - Blend modes: Multiply, Screen, Overlay, etc.
      - Multiply: Darkens, good for shadows
      - Screen: Lightens, good for glows
      - Overlay: Preserves blacks and whites
      - Experiment: Different modes for different effects

### C. TEXT EFFECTS DAN TYPOGRAPHY ARTISTIC

#### 1. Advanced Text Manipulation

**a. Text on Path**

      - Create path (circle, wave, custom shape)
      - Create text
      - Select both > Text > Put on Path
      - Adjust: Position text cursor and edit
      - Use case: Logos, circular badges, decorative text

**b. Text in Shape**

      - Create shape
      - Select Text tool > click inside shape
      - Text flows within shape boundaries
      - Adjust: Resize shape to reflow text
      - Use case: Callouts, speech bubbles, custom text areas

**c. Text to Path**

      - Select text > Path > Object to Path
      - Converts text to editable paths
      - Warning: No longer editable as text
      - Use case: Custom letter manipulation, warping, effects
      - Tip: Duplicate before converting (keep editable copy)

**d. Text Effects**

      - Perspective text: Use Envelope Live Path Effect
      - 3D text: Layer duplicates with offset and gradient
      - Outlined text: Duplicate > to path > stroke only
      - Shadow text: Duplicate > blur > place behind
      - Gradient text: Fill text with gradient

#### 2. Typography Best Practices untuk Vector

**a. Font Selection**

      - Maximum 2-3 fonts per design
      - Pair contrasting fonts: Serif + Sans-serif
      - Consider legibility at different sizes
      - Test print: Vector looks different printed

**b. Kerning dan Spacing**

      - Kerning: Space between specific letter pairs
      - Tracking: Overall letter spacing
      - Leading: Line spacing (line-height)
      - Manual adjustment: Alt+arrow keys (select text first)
      - Visual spacing: Optical, not just mathematical

**c. Hierarchy dengan Typography**

      - Size: Largest for headlines
      - Weight: Bold for emphasis
      - Color: Contrast for importance
      - Position: Top-left = most attention
      - Consistency: Maintain hierarchy throughout

### D. MEMBUAT ILUSTRASI VECTOR KOMPLEKS

#### 1. Building Complex Illustrations

**a. Start with Basic Shapes**

      - Break kompleks objects into simple shapes
      - Sketch on paper first (optional)
      - Create basic silhouette
      - Add details progressively

**b. Layering Strategy**

      - Bottom to top: Background > midground > foreground
      - Organize layers clearly: Name each layer
      - Lock layers: Prevent accidental editing
      - Show/hide: Toggle visibility untuk focus

**c. Color Strategy**

      - Establish palette first: 3-5 main colors
      - Use color picker untuk consistency
      - Save swatches: Easy reuse
      - Consider contrast: Foreground vs background

**d. Adding Details**

      - Highlights: Lighter color or white transparency
      - Shadows: Darker color or multiply blend
      - Textures: Subtle patterns or noise
      - Outlines: Optional, but adds clarity

**e. Refinement**

      - Check at actual size: Zoom to 100%
      - Simplify: Remove unnecessary elements
      - Balance: Distribute visual weight
      - Test: View from distance

#### 2. Character Illustration dalam Vector

**a. Geometric Approach**

      - Build from circles and rectangles
      - Simple, modern, scalable style
      - Good for: Icons, simple characters, flat design

**b. Organic Approach**

      - Use bezier curves for natural forms
      - More complex, expressive
      - Good for: Detailed characters, illustrations

**c. Consistent Style**

      - Line weight consistency: Same stroke width
      - Color palette: Limited, harmonious
      - Level of detail: Match throughout
      - Shadow/highlight: All or nothing

**d. Facial Features**

      - Eyes: Most important for expression
      - Simplified features: Still expressive
      - Proportions: Keep consistent if multiple characters
      - Expression through basic shapes

#### 3. Icon Design

**a. Icon Principles**

      - Simplicity: Clear at small sizes
      - Consistency: Visual style dan size
      - Recognizability: Instantly understood
      - Scalability: Work at any size

**b. Grid System untuk Icons**

      - Set up artboard: 24×24px or 48×48px
      - Use guides: Center lines, safe area
      - Align to pixels: Crisp rendering
      - Consistent sizing: All icons same dimensions

**c. Icon Styles**

      - Outlined: Line-based, minimal
      - Filled: Solid shapes
      - Flat: No gradients or shadows
      - Long shadow: Trendy, adds dimension
      - Glyph: Simple, monochromatic

**d. Testing Icons**

      - Size test: View at smallest usage size
      - Context test: Try on actual interface
      - Color test: Works in monochrome?
      - Batch test: Consistent with set?

### E. INFOGRAPHIC DESIGN

#### 1. Infographic Principles

**a. Information Architecture**

      - Start with data: Understand what to communicate
      - Hierarchy: Most important info first
      - Flow: Logical progression (top to bottom, left to right)
      - Chunking: Group related information
      - White space: Prevent overwhelming

**b. Visual Data Representation**

      - Charts: For numerical comparisons
      - Icons: For categories or concepts
      - Timelines: For chronological info
      - Maps: For geographical data
      - Diagrams: For processes or relationships

**c. Color Coding**

      - Consistent meaning: One color = one category
      - Contrast: Distinguish different data
      - Accessibility: Colorblind-friendly
      - Limit palette: 3-5 colors maximum

#### 2. Types of Infographics

**a. Statistical Infographics**

      - Focus on numbers and charts
      - Use case: Survey results, comparisons
      - Elements: Bar charts, pie charts, line graphs

**b. Timeline Infographics**

      - Show progression over time
      - Use case: Company history, process evolution
      - Elements: Chronological path, milestones, dates

**c. Process Infographics**

      - Explain step-by-step procedures
      - Use case: How-to guides, workflows
      - Elements: Numbered steps, arrows, sequential flow

**d. Comparison Infographics**

      - Show differences between options
      - Use case: Product comparison, pros/cons
      - Elements: Side-by-side layouts, checkmarks, tables

**e. Hierarchical Infographics**

      - Show levels or organization
      - Use case: Organizational charts, pyramids
      - Elements: Tiered structure, connecting lines

#### 3. Creating Infographic dalam Inkscape

**a. Setup**

      - Document size: A4 portrait atau custom web size
      - Grid: Enable snap to grid untuk alignment
      - Guides: Set margins dan columns
      - Artboards: Separate sections if complex

**b. Layout Structure**

      - Header: Title dan subtitle
      - Body: Main content sections
      - Footer: Source attribution, credits
      - Visual flow: Guide eye through design

**c. Data Visualization**

      - Manual charts: Create dengan basic shapes
      - Extensions: Inkscape has chart extensions
      - Import: Create charts in external tool, import SVG
      - Style: Consistent with overall design

**d. Icon Usage**

      - Public domain icons: Noun Project, Flaticon
      - Consistent style: All icons similar weight
      - Appropriate size: Balance with text
      - Color: Match infographic palette

**e. Typography dalam Infographics**

      - Headlines: Large, bold, attention-grabbing
      - Body text: Readable size (not too small)
      - Data labels: Clear, concise
      - Hierarchy: Size and weight variations
      - Alignment: Grid-based, consistent

#### 4. Infographic Best Practices

   - Accuracy: Verify all data
   - Simplicity: Don't overload information
   - Storytelling: Create narrative flow
   - Branding: Include logo/colors if for client
   - Source attribution: Credit data sources
   - Mobile-friendly: Consider vertical formats
   - Testing: Show to others for clarity

### F. PERSIAPAN FILE UNTUK PRINT PRODUCTION

#### 1. Color Modes untuk Print

**a. RGB vs CMYK**

      - RGB: Screen display, digital
      - CMYK: Print production
      - Conversion: Colors may shift
      - Strategy: Design in RGB, convert before sending to print

**b. Converting to CMYK di Inkscape**

      - Edit > Preferences > Input/Output > Color management
      - Enable color management
      - Set CMYK ICC profile
      - View: View > Display mode > Show all colors as preview
      - Note: Inkscape primarily RGB, final conversion in print shop

**c. Spot Colors**

      - Special inks: Metallics, fluorescents
      - Pantone system: Industry standard
      - Specify: Communicate spot colors to printer
      - Cost: More expensive than CMYK

#### 2. Resolution dan Scaling

**a. Vector Advantages**

      - Infinite scalability: No resolution concerns
      - Small file size: Efficient storage
      - Editability: Always modifiable
      - Print quality: Crisp at any size

**b. Raster Elements dalam Vector**

      - Embedded images: Ensure high resolution
      - Minimum: 300 DPI at final print size
      - Check: Document Properties > Linked images
      - Embed vs Link: Embedded = larger file, self-contained

**c. Document Setup untuk Print**

      - File > Document Properties
      - Set page size: Match print dimensions
      - Units: Millimeters or inches untuk print
      - Orientation: Portrait or landscape
      - Bleed: Add 3-5mm bleed jika full-bleed print

#### 3. Bleed dan Crop Marks

**a. Bleed**

      - Extra area beyond trim: Typically 3-5mm
      - Purpose: Prevent white edges from cutting variance
      - Extend background: Color/images must reach bleed edge
      - Text safety: Keep important text inside safe area

**b. Crop Marks**

      - Indicators: Show where to trim
      - Add manually: Draw lines at corners
      - Extensions: Some extensions auto-generate
      - Professional: Printer may add their own

**c. Safe Area**

      - Margin from trim edge: Typically 3-5mm
      - Keep critical elements inside: Text, logos
      - Purpose: Account for slight cutting variance
      - Mark on template: Use guides

#### 4. File Formats untuk Print

**a. PDF (Recommended)**

      - File > Save As > PDF
      - Settings:
        * Convert text to paths: Prevent font substitution
        * Embed all images: Self-contained file
        * CMYK color space: If available
        * Bleed marks: Include if added
      - Advantages: Universal, maintains quality

**b. EPS (Encapsulated PostScript)**

      - File > Save As > EPS
      - Industry standard: Widely accepted
      - Vector format: Preserves editability
      - Use case: When printer needs editable file

**c. SVG (Scalable Vector Graphics)**

      - Native Inkscape format
      - Editable: For future modifications
      - Web-friendly: Also used for digital
      - Print: Not directly usable, export to PDF/EPS

**d. AI (Adobe Illustrator)**

      - Extensions > Export > Export to AI
      - Compatibility: For Illustrator users
      - May require plugin/extension

#### 5. Pre-Print Checklist

   □ Color mode verified (CMYK settings communicated)
   □ All text converted to paths atau fonts embedded
   □ All images high resolution (300 DPI minimum)
   □ Bleed added (3-5mm)
   □ Safe area respected (important elements inside)
   □ Crop marks added (if required)
   □ File format correct (PDF preferred)
   □ File naming clear: ClientName_ProjectName_Version.pdf
   □ All layers visible yang needed
   □ Spelling dan grammar checked
   □ Contact info included (if applicable)
   □ Test print: Print on home printer to check layout
   □ Final review: One last look before sending

## PRAKTIKUM

LATIHAN 1: PATHFINDER OPERATIONS (30 menit)

Objective: Menguasai boolean operations untuk shape creation

Tugas:
#### 1. Buat logo sederhana menggunakan kombinasi:

   - Union: Merge 2-3 circles
   - Difference: Cut hole atau shape dari another
   - Intersection: Create unique shape from overlap
   - Exclusion: Create knockout effect

#### 2. Create icon set (4 icons):

   - Medical: Plus sign (intersection circles)
   - Settings: Gear shape (circles + difference)
   - Home: House (triangles + rectangles union)
   - Search: Magnifying glass (circle + rectangle)

Tips:
- Start dengan basic shapes (circles, rectangles)
- Duplicate before operations (backup)
- Experiment dengan order of operations
- Use layers untuk organize

---

LATIHAN 2: GRADIENT DAN TEXT EFFECTS (45 menit)

Objective: Membuat attractive text dengan gradient dan effects

Tugas 1 - Gradient Mastery:
#### 1. Create shape (circle atau abstract)

#### 2. Apply linear gradient: 3+ color stops

#### 3. Create same shape: Apply radial gradient

#### 4. Create another: Apply mesh gradient untuk complex transition

#### 5. Compare dan understand differences

Tugas 2 - Text Effects:
#### 1. Create text "VECTOR ART"

#### 2. Apply gradient fill

#### 3. Add drop shadow

#### 4. Duplicate text:

   - Version 1: Text on circular path
   - Version 2: 3D effect dengan layers
   - Version 3: Outlined text dengan stroke only

Deliverable: Document dengan multiple gradient examples dan text variations

---

LATIHAN 3: CHARACTER ILLUSTRATION (60 menit)

Objective: Build character illustration dari basic shapes

Tugas:
Create simple character mascot dengan specifications:
- Style: Geometric (circles, rectangles, triangles)
- Color palette: 3-5 colors maximum
- Expression: Happy/friendly
- Include: Head, body, arms, legs
- Details: Eyes, mouth, maybe accessories

Process:
#### 1. Sketch idea on paper (optional, 5 menit)

#### 2. Create basic shapes untuk body parts

#### 3. Arrange dan resize untuk proportions

#### 4. Add fill colors

#### 5. Add details: facial features, outlines

#### 6. Apply gradients untuk depth

#### 7. Add simple shadow under character

Variations: Create 3 poses atau expressions of same character

---

LATIHAN 4: INFOGRAPHIC CREATION (90 menit)

Objective: Design informative infographic tentang topik pilihan

Topic Options:
- "Statistik Penggunaan Social Media Indonesia"
- "Proses Design Thinking"
- "Perbandingan Software Desain Grafis"
- "Timeline Perkembangan Logo Brand Terkenal"
- Atau topik pilihan sendiri (clear with instructor)

Requirements:
#### 1. Size: A4 portrait (210mm × 297mm)

#### 2. Include:

   - Header dengan judul
   - Minimal 3 data visualizations (charts/icons)
   - Color-coded sections
   - Icons atau illustrations (minimal 5)
   - Source attribution di footer
#### 3. Design elements:

   - Consistent color palette (3-5 colors)
   - Clear hierarchy
   - Readable typography
   - Logical flow (top to bottom)
   - White space management

Process:
#### 1. Research data (15 menit)

#### 2. Sketch layout structure (10 menit)

#### 3. Setup document dan guidelines (5 menit)

#### 4. Create charts/visualizations (25 menit)

#### 5. Add icons dan decorative elements (15 menit)

#### 6. Typography dan text content (15 menit)

#### 7. Final refinement dan polish (5 menit)

Deliverable:
- SVG working file
- PDF export ready untuk sharing

## TUGAS (14% dari Nilai Akhir)

TUGAS: VECTOR ILLUSTRATION PROJECT

Deadline: 1 minggu dari pertemuan

Bobot: 14% dari nilai akhir

---

DESKRIPSI TUGAS:

Create professional vector illustration project dengan salah satu kategori:

OPTION A: BRAND ILLUSTRATION SET
- Create set of 5-7 illustrations untuk brand/company (real atau fictional)
- Theme: Consistent visual style
- Use case: Website, marketing materials, social media
- Style: Geometric, flat design, atau organic - pilih satu
- Include: Characters, objects, scenes yang related to brand
- Color palette: 4-6 colors maximum, consistent across all
- Size: Each illustration 1000×1000px square artboard

OPTION B: INFOGRAPHIC POSTER
- Topic: Educational atau informational (pilihan Anda)
- Size: A3 (297mm × 420mm) portrait
- Include:
  * Header dengan title dan subtitle
  * Minimal 5 data visualizations (mix of chart types)
  * Minimal 10 icons atau small illustrations
  * 3-4 section breaks dengan headings
  * Footer dengan sources dan credits
- Design:
  * Clear information hierarchy
  * Logical flow dan storytelling
  * Color-coded sections
  * Professional typography
  * Balanced composition

OPTION C: ICON LIBRARY
- Create comprehensive icon set: 24 icons minimum
- Category: Choose one (Medical, Tech, Education, Travel, Food, etc.)
- Consistency requirements:
  * Same artboard size (24×24px atau 48×48px)
  * Same visual style (outlined, filled, atau long shadow)
  * Same stroke weight (if outlined style)
  * Same level of detail
  * Unified color scheme (monochrome atau limited palette)
- Grid system: Use baseline grid untuk alignment
- Scalability: Must be clear at actual size (24px)
- Delivery: All icons on single document dengan labels

---

REQUIREMENTS UMUM (Semua Options):

Technical:
□ Native format: SVG (Inkscape working file)
□ Export format: PDF (high quality)
□ PNG preview: 2000px width untuk portfolio
□ All text converted to paths dalam PDF export
□ Proper layer organization dan naming
□ Gradients dan effects applied appropriately

Quality Standards:
□ Professional execution: Polished, not rushed
□ Consistent style: Unified visual language
□ Attention to detail: Clean paths, aligned elements
□ Color harmony: Thoughtful palette selection
□ Scalability: Clear at various sizes
□ No raster elements (or high-res if unavoidable)

---

DELIVERABLES:

Submit via LMS dalam folder terstruktur:

NamaAnda_VectorProject/
├── WorkingFile/
│   └── ProjectName.svg (native Inkscape file)
├── FinalOutput/
│   └── ProjectName.pdf (print-ready)
├── Preview/
│   └── ProjectName.png (web preview)
└── Documentation/
    └── ProjectBrief.txt (concept explanation)

ProjectBrief.txt should include:
- Project title
- Option chosen (A, B, or C)
- Concept explanation (100-200 words)
- Design decisions: Color palette reasoning, style choice
- Target audience
- Software dan tools used
- Time spent (estimated)

---

RUBRIK PENILAIAN:

#### 1. Concept dan Creativity (25%)

   - Original idea execution
   - Appropriate untuk purpose
   - Creative problem-solving
   - Storytelling (jika applicable)

#### 2. Technical Execution (30%)

   - Proper use of vector techniques
   - Clean paths dan node structure
   - Effective use of pathfinder operations
   - Gradient dan effect application
   - File preparation quality

#### 3. Visual Design (25%)

   - Composition dan layout
   - Color harmony
   - Typography (jika applicable)
   - Consistency dan unity
   - Professional polish

#### 4. Functionality dan Purpose (15%)

   - Meets project requirements
   - Appropriate untuk intended use
   - Scalability demonstrated
   - Information clarity (for infographic)

#### 5. Documentation dan Presentation (5%)

   - Proper file organization
   - Complete deliverables
   - Clear concept explanation
   - Professional naming conventions

---

TIPS UNTUK SUCCESS:

#### 1. Planning Phase:

   - Sketch ideas before digital execution
   - Research reference images dan inspiration
   - Define color palette early
   - Create style guide untuk consistency

#### 2. Execution Phase:

   - Work on layers: Enable easy editing
   - Save versions: Incremental saves (v1, v2, v3)
   - Zoom check: View at actual size frequently
   - Take breaks: Fresh eyes catch mistakes

#### 3. Review Phase:

   - Self-critique: Does it meet objectives?
   - Peer feedback: Ask classmate for input
   - Print test: If applicable, test print
   - Final polish: Last refinements

#### 4. Common Pitfalls to Avoid:

   - Overcomplicating: Keep it clean
   - Inconsistent style: Maintain unity
   - Poor contrast: Ensure readability
   - Ignoring alignment: Use grids dan guides
   - Rushing: Quality over speed

## REFERENSI DAN RESOURCES

### A. TUTORIAL VIDEOS (YouTube)

Pencarian yang disarankan:
1. "Inkscape pathfinder tutorial"
   → Pelajari boolean operations secara detail
2. "Inkscape gradient mesh tutorial"
   → Advanced gradient techniques
3. "How to create infographic in Inkscape"
   → Complete infographic workflow
4. "Character illustration Inkscape tutorial"
   → Building characters from shapes
5. "Inkscape icon design tutorial"
   → Professional icon creation
6. "Preparing files for print Inkscape"
   → Print production preparation
7. "Inkscape text effects tutorial"
   → Creative typography techniques

### B. READING MATERIALS

#### 1. Inkscape Official Documentation

   - Comprehensive tool reference
   - [https://inkscape.org/doc/](https://inkscape.org/doc/)

#### 2. Vector Graphics Best Practices

   - Professional workflow tips
   - Industry standards

#### 3. Infographic Design Principles

   - Data visualization best practices
   - Visual storytelling techniques

### C. TOOLS DAN RESOURCES

#### 1. Inkscape Extensions

   - Extensions > Manage Extensions
   - Useful plugins: Grid Generator, Color Palette, etc.

#### 2. Free Icon Resources

   - Noun Project (thenounproject.com)
   - Flaticon (flaticon.com)
   - Icons8 (icons8.com)
   - Use for reference atau starting point

#### 3. Color Palette Generators

   - Coolors.co: Generate harmonious palettes
   - Adobe Color: Color wheel tool
   - Paletton: Advanced color scheme designer

#### 4. Free Fonts

   - Google Fonts (fonts.google.com)
   - Font Squirrel (fontsquirrel.com)
   - DaFont (dafont.com)
   - Check license for commercial use

#### 5. Stock Photos (jika needed untuk infographic)

   - Unsplash (unsplash.com)
   - Pexels (pexels.com)
   - Pixabay (pixabay.com)
   - All free for commercial use

### D. INSPIRATION RESOURCES

#### 1. Behance (behance.net)

   - Search: "Vector illustration", "Infographic", "Icon design"
   - Study professional work

#### 2. Dribbble (dribbble.com)

   - UI/icon design inspiration
   - Color scheme ideas

#### 3. Pinterest

   - Create boards untuk projects
   - Collect style references

## RANGKUMAN

Pertemuan ini telah membekali Anda dengan advanced vector graphics skills:

#### 1. ADVANCED PATH OPERATIONS

   - Boolean operations (Union, Difference, Intersection, dll)
   - Path editing dan node manipulation
   - Clipping, masking, dan patterns

#### 2. GRADIENTS DAN EFFECTS

   - Linear, radial, dan mesh gradients
   - Filters dan blend modes
   - Creating depth dan dimension

#### 3. TEXT EFFECTS

   - Text on path, text in shape
   - Converting text to paths
   - Creative typography techniques

#### 4. COMPLEX ILLUSTRATION

   - Building from basic shapes
   - Layering strategy
   - Character dan icon design

#### 5. INFOGRAPHIC DESIGN

   - Information architecture
   - Data visualization
   - Layout dan storytelling

#### 6. PRINT PREPARATION

   - Color modes (CMYK)
   - Bleed dan crop marks
   - File formats dan checklist

Dengan menguasai techniques ini, Anda memiliki foundation solid untuk
professional vector illustration work. Practice consistently, experiment
dengan different styles, dan study professional work untuk continue improving.

Vector graphics adalah skill yang akan serve you well across many design
disciplines - dari logo design, illustration, UI/UX, hingga print production.

## PERSIAPAN PERTEMUAN BERIKUTNYA

Pertemuan 10: Tools Promosi (Cetak, Audio Visual, Online)

Akan membahas:
- Berbagai media promosi: cetak, audio visual, online
- Karakteristik dan best practices setiap medium
- Strategi integrated marketing communications
- Memilih media mix yang tepat
- Creating promotional materials

Persiapan:
#### 1. Research: Cari contoh kampanye multi-channel dari brand terkenal

#### 2. Collect examples: Screenshot atau save iklan dari berbagai media

#### 3. Analisis: Bagaimana consistency dijaga across different media?

#### 4. Think about: Brand favorit Anda - media apa yang mereka gunakan?

Software yang akan digunakan:
- GIMP dan Inkscape (untuk mockup creation)
- Canva (untuk templates dan quick designs)
- Presentation tools (untuk planning)

Baca:
- Artikel tentang integrated marketing communications
- Case studies: Successful multi-channel campaigns

Sampai jumpa di pertemuan berikutnya!


# MODUL PERKULIAHAN DESAIN KOMUNIKASI VISUAL - PERTEMUAN 10

JUDUL: Tools Promosi (Cetak, Audio Visual, Online)

## SUB-CPMK

## Mahasiswa dapat memahami berbagai tools promosi yang digunakan perusahaan

dalam strategi komunikasi pemasaran terpadu, meliputi media cetak, audio
visual, dan online, serta mampu merancang promotional materials yang efektif
untuk berbagai platform.

## TUJUAN PEMBELAJARAN

## Setelah mengikuti perkuliahan ini, mahasiswa diharapkan mampu:

#### 1. Memahami landscape tools promosi kontemporer

#### 2. Mengidentifikasi karakteristik, kelebihan, dan keterbatasan masing-masing

   media promosi
#### 3. Menjelaskan konsep integrated marketing communications (IMC)

#### 4. Merancang strategi media mix yang efektif untuk berbagai tujuan kampanye

#### 5. Membuat mockup promotional materials untuk media cetak

#### 6. Memahami prinsip desain untuk audio visual dan online advertising

#### 7. Mengadaptasi desain untuk berbagai platform dengan mempertahankan

   brand consistency
#### 8. Mengevaluasi efektivitas promotional tools dalam konteks kampanye marketing

## PENGANTAR MATERI

Dalam era komunikasi multi-channel saat ini, brand success tidak lagi bergantung
pada single medium promosi, melainkan pada orchestration dari berbagai tools
promosi yang bekerja secara sinergis. Dari traditional media seperti print dan
broadcast hingga digital platforms seperti social media dan display advertising,
setiap medium memiliki unique strengths dan optimal use cases.

Sebagai desainer komunikasi visual, memahami landscape promotional tools bukan
hanya tentang knowing how to design untuk masing-masing medium, tetapi juga
understanding strategic considerations: kapan menggunakan print vs digital,
bagaimana mempertahankan brand consistency across platforms, dan bagaimana
different touchpoints dalam customer journey memerlukan different approaches.

Integrated Marketing Communications (IMC) adalah strategic approach yang
mengkoordinasikan berbagai promotional tools untuk deliver consistent message
kepada target audience melalui multiple channels. IMC bukan sekadar menggunakan
banyak media, tetapi tentang creating unified, seamless experience yang amplifies
message impact dan builds stronger brand connection.

Pertemuan ini akan memberikan comprehensive overview tentang promotional tools
ecosystem - dari traditional hingga digital, dari mass media hingga personalized
communication. Anda akan belajar karakteristik masing-masing tool, bagaimana
memilih appropriate media mix, dan practical skills dalam creating promotional
materials yang effective across different platforms.

Understanding promotional tools landscape adalah fundamental untuk career dalam
advertising, marketing communications, brand management, atau any role yang involves
customer-facing communications. Dalam increasingly fragmented media environment,
kemampuan untuk strategically leverage berbagai promotional tools adalah
competitive advantage yang significant.

## MATERI

### A. OVERVIEW PROMOTIONAL TOOLS LANDSCAPE

#### 1. Definisi dan Evolusi Promotional Tools

   Promotional tools adalah instrumen komunikasi yang digunakan untuk
   menyampaikan marketing message kepada target audience dengan tujuan:
   - Awareness: Memperkenalkan brand/produk
   - Interest: Menciptakan curiosity dan engagement
   - Desire: Membangun preferensi dan intention
   - Action: Mendorong purchase atau behavior change

   Evolusi Promotional Tools:

   Era 1.0: Traditional Media (Pre-2000)
   - Dominasi: Print, TV, radio, outdoor
   - Karakteristik: One-way communication, mass audience
   - Measurement: Reach dan frequency

   Era 2.0: Digital Emergence (2000-2010)
   - Penambahan: Websites, email marketing, early social media
   - Karakteristik: Two-way communication mulai emerge
   - Measurement: Click-through rates, website traffic

   Era 3.0: Social dan Mobile (2010-2020)
   - Dominasi: Social media, mobile apps, content marketing
   - Karakteristik: User-generated content, engagement focus
   - Measurement: Engagement metrics, conversions

   Era 4.0: Integrated Digital (2020-sekarang)
   - Karakteristik: Omnichannel, personalization, data-driven
   - Technologies: AI, automation, immersive media (AR/VR)
   - Measurement: Customer lifetime value, attribution modeling

#### 2. Classification Promotional Tools

   Berdasarkan Media Type:

**a. PAID MEDIA (Media Berbayar)**

      - Print ads (koran, majalah)
      - Broadcast ads (TV, radio)
      - Outdoor/OOH (billboard, transit ads)
      - Digital ads (display, search, social media ads)
      - Karakteristik: Control penuh atas message, reach instant

**b. OWNED MEDIA (Media Sendiri)**

      - Company website
      - Blog dan content platforms
      - Social media profiles
      - Email lists
      - Mobile apps
      - Karakteristik: Full control, long-term asset

**c. EARNED MEDIA (Media Diperoleh)**

      - Press coverage
      - Social shares dan mentions
      - Customer reviews
      - Word-of-mouth
      - Influencer mentions (organic)
      - Karakteristik: High credibility, tidak dapat dikontrol penuh

### B. PRINT PROMOTIONAL TOOLS

#### 1. Jenis-Jenis Print Tools

**a. BROSUR (Brochure)**

      Karakteristik:
      - Multi-page folded document: Bi-fold, tri-fold, z-fold, gate fold
      - Comprehensive information: Product details, layanan, brand story
      - High-quality print: Glossy paper, professional photos
      - Distribution: In-store, events, mailing

      Types:
      - Product brochure: Feature dan benefits specific products
      - Corporate brochure: Company overview, capabilities
      - Service brochure: Layanan offerings, packages
      - Event brochure: Program, schedule, venue info

      Design Considerations:
      - Cover: Eye-catching, clearly communicate purpose
      - Inside panels: Logical flow, hierarchy
      - Typography: Readable fonts, various sizes untuk hierarchy
      - Images: High quality, professional
      - White space: Prevent overwhelming
      - Call-to-action: Clear next steps

      Standard Sizes:
      - A4 tri-fold: 210×297mm paper, folded into thirds
      - DL size: 99×210mm (fits standard envelope)
      - Letter size: 8.5×11 inches (US standard)

**b. FLYER (Selebaran)**

      Karakteristik:
      - Single page: One or two-sided
      - Quick message: Limited information
      - Mass distribution: Handouts, street distribution, door-to-door
      - Cost-effective: Cheap to print in volume

      Use Cases:
      - Event promotion: Concerts, sales, grand openings
      - Special offers: Discounts, promotions
      - Announcements: New products, services
      - Local advertising: Restaurants, local services

      Design Principles:
      - Headline dominance: Large, attention-grabbing
      - Visual focus: One main image atau graphic
      - Minimal text: Key info only
      - Strong CTA: Clear action statement
      - High contrast: Stand out environment

      Standard Sizes:
      - A5: 148×210mm (half of A4)
      - A4: 210×297mm (common)
      - A6: 105×148mm (postcard size)

**c. POSTER**

      Karakteristik:
      - Large format: Designed untuk distance viewing
      - Visual impact: Image-dominant
      - Display: Walls, boards, public spaces
      - Longer lifespan: Displayed for weeks/months

      Types:
      - Event poster: Concerts, exhibitions, movies
      - Product poster: Feature products
      - Informational poster: Public service, education
      - Decorative poster: Art, inspiration

      Design Considerations:
      - Readability dari jauh: Large, bold typography
      - Focal point: Single strong visual
      - Hierarchy: Clear information layers
      - Color impact: Bold, contrasting colors
      - Minimal text: 5-second rule (readable in 5 seconds)

      Standard Sizes:
      - A3: 297×420mm
      - A2: 420×594mm
      - 50×70cm (popular decorative size)
      - 61×91cm (movie poster size)

**d. BANNER**

      Karakteristik:
      - Large format: Vertical atau horizontal
      - Durable materials: Vinyl, fabric
      - Portable: Roll-up, retractable stands
      - Reusable: Long-term investment

      Types:
      - X-banner: Portable X-shaped stand
      - Roll-up banner: Retractable mechanism
      - Hanging banner: Suspended dari ceiling
      - Wall banner: Mounted on walls

      Design Guidelines:
      - Top-heavy design: Important info at eye level
      - Large logo: Brand visibility
      - Minimal details: Key messages only
      - High resolution: Large format requires high-res images
      - Bleed dan safe area: Account untuk edges

      Standard Sizes:
      - 60×160cm (common roll-up)
      - 85×200cm (larger roll-up)
      - 3×6 meters (outdoor banner)

**e. KATALOG**

      Karakteristik:
      - Multi-page booklet: 8-100+ pages
      - Product showcase: Comprehensive listings
      - Reference material: Kept untuk future reference
      - High production value: Quality printing, binding

      Types:
      - Product catalog: Full product range
      - Service catalog: Offerings dan pricing
      - Digital catalog: Interactive PDF atau app

      Design Elements:
      - Grid system: Consistent layout
      - Product photography: Professional, consistent style
      - Product info: Specs, pricing, descriptions
      - Navigation: Table of contents, categories
      - Index: Easy product finding

      Distribution:
      - In-store pickup
      - Direct mail campaigns
      - Trade shows dan events
      - Digital download

#### 2. Print Design Best Practices

**a. Pre-Production Checklist:**

      □ Define purpose dan goals
      □ Identify target audience
      □ Determine budget dan quantity
      □ Choose paper stock dan finish
      □ Confirm dimensions dan bleed
      □ Prepare high-res images (300 DPI minimum)

**b. Design Principles untuk Print:**

      - CMYK color mode: Not RGB
      - Bleed area: 3-5mm beyond trim
      - Safe area: 3-5mm inside trim
      - Font consideration: Embed atau convert to outlines
      - Contrast: Ensure readability
      - Proofreading: Triple-check text

**c. File Preparation:**

      - Format: PDF (print-ready)
      - Color space: CMYK, proper ICC profiles
      - Images: 300 DPI, CMYK mode
      - Fonts: Embedded atau outlined
      - Crop marks: Include for trimming
      - Bleed: Extended beyond trim line

**d. Printing Considerations:**

      - Paper weight: GSM (grams per square meter)
        * Flyers: 150-170 GSM
        * Brochure cover: 250-300 GSM
        * Brochure inside: 150-170 GSM
      - Finish options:
        * Matte: No glare, elegant
        * Glossy: Vibrant colors, premium feel
        * Silk: Balance between matte dan glossy
      - Binding (untuk katalog/brosur):
        * Saddle stitch: Folded dan stapled
        * Perfect binding: Glued spine
        * Spiral binding: Wire atau plastic coil

### C. AUDIO VISUAL PROMOTIONAL TOOLS

#### 1. VIDEO ADVERTISING

**a. TV COMMERCIALS (TVC)**

      Characteristics:
      - Duration: 15, 30, atau 60 seconds (standard)
      - Broadcast: Network TV, cable, satellite
      - High production cost: Professional team, equipment
      - Mass reach: Large audience simultaneously

      Formats:
      - Brand commercial: Build awareness, image
      - Product commercial: Feature benefits
      - Testimonial: Customer endorsement
      - Demonstration: Show product usage
      - Storytelling: Narrative-driven emotional connection

      Production Process:
#### 1. Concept development: Big idea, script

#### 2. Storyboarding: Visual planning

#### 3. Pre-production: Casting, location, logistics

#### 4. Production: Filming, directing

#### 5. Post-production: Editing, sound, effects

#### 6. Distribution: Media buying, broadcasting

      Design Considerations:
      - Opening 3 seconds: Hook attention
      - Visual story: Show, don't just tell
      - Brand integration: Logo, product placement
      - Sound design: Music, voiceover, sfx
      - Call-to-action: Clear closing message

      Advantages:
      - Mass reach, high impact, credibility, emotional connection

      Limitations:
      - Very expensive, fleeting (skip/channel change),
        production timeline long

**b. DIGITAL VIDEO ADS**

      Platforms:
      - YouTube ads (in-stream, bumper)
      - Facebook dan Instagram video ads
      - TikTok ads
      - LinkedIn video ads
      - Streaming platforms (Hulu, streaming services)

      Formats:
      - Pre-roll: Before main content
      - Mid-roll: During content
      - Post-roll: After content
      - Bumper ads: 6 seconds, non-skippable
      - In-feed: Native dalam feed

      Design for Digital Video:
      - Short attention span: Hook dalam 2-3 detik pertama
      - Mobile-first: Vertical atau square format
      - Sound-off design: Captions, visual storytelling
      - Brand early: Show logo/product quickly
      - Length optimization:
        * 6-15 seconds: Bumper, awareness
        * 15-30 seconds: Standard, engagement
        * 60+ seconds: Storytelling, retargeting

      Technical Specs (Example - YouTube):
      - Aspect ratios: 16:9 (landscape), 1:1 (square), 9:16 (vertical)
      - Resolution: 1080p atau higher
      - File format: MP4, MOV
      - Max file size: 128GB
      - Frame rate: 24, 25, 30, 48, 50, atau 60 FPS

**c. DIGITAL SIGNAGE**

      Definition: Electronic displays untuk advertising dan info

      Types:
      - Indoor displays: Shops, malls, offices
      - Outdoor displays: Billboard LED, transit stations
      - Interactive displays: Touchscreen kiosks
      - Window displays: Store windows

      Content Types:
      - Static images: Rotating graphics
      - Video loops: Short clips repeat
      - Live content: News feeds, social media
      - Interactive: QR codes, touch interface

      Design Considerations:
      - Viewing distance: Size accordingly
      - Dwell time: Duration viewer watches
      - Environment: Lighting, noise level
      - Aspect ratio: Match screen dimensions
      - Refresh rate: Smooth motion (minimum 30 FPS)
      - File size: Optimize untuk playback

      Best Practices:
      - Keep it simple: Clear, uncluttered
      - Large text: Readable from distance
      - High contrast: Visibility dalam various lighting
      - Motion: Attracts attention
      - Loop duration: 15-30 seconds optimal

#### 2. RADIO ADVERTISING

   Characteristics:
   - Audio-only medium
   - Local targeting: Station demographics
   - Cost-effective: Cheaper than TV
   - Frequency: Multiple plays throughout day

   Formats:
   - Straight read: Announcer reads script
   - Produced spot: Music, SFX, voiceover
   - Jingle: Musical brand message
   - Sponsorship: "Brought to you by..."

   Design Considerations (for Visual Designer):
   - Visual support: Create companion print/digital materials
   - Brand voice: Consistent with audio personality
   - Sound logo: Recognizable audio signature
   - Music selection: Match brand personality

   Production Elements:
   - Voiceover: Tone, accent, gender consideration
   - Music: Background, emotional setting
   - Sound effects: Attention, context
   - Pacing: Speed of delivery
   - Repetition: Brand name multiple times

### D. ONLINE PROMOTIONAL TOOLS

#### 1. SOCIAL MEDIA ADVERTISING

   (Akan dibahas lebih detail di Pertemuan 15)

   Overview Platforms:

**a. Facebook/Instagram Ads**

      - Formats: Image, video, carousel, stories, reels
      - Targeting: Demographics, interests, behaviors
      - Objectives: Awareness, consideration, conversion

**b. TikTok Ads**

      - Formats: In-feed, branded hashtag, branded effects
      - User base: Young audience, Gen Z dominant
      - Content style: Authentic, entertaining, trend-driven

**c. LinkedIn Ads**

      - Formats: Sponsored content, message ads, text ads
      - Targeting: Professional criteria (job title, industry)
      - Use case: B2B marketing, recruitment

**d. Twitter/X Ads**

      - Formats: Promoted tweets, trends, accounts
      - Use case: Real-time marketing, conversations
      - Quick response: Fast-paced environment

#### 2. DISPLAY ADVERTISING

   Definition: Banner ads on websites dan apps

   Formats:
   - Static banner: Non-animated image
   - Animated banner: GIF atau HTML5 animation
   - Rich media: Interactive, expandable
   - Video banner: Autoplay video in banner space

   Standard IAB Sizes:
   - Leaderboard: 728×90px
   - Medium rectangle: 300×250px
   - Wide skyscraper: 160×600px
   - Mobile banner: 320×50px
   - Large mobile banner: 320×100px

   Design Principles:
   - File size limit: Typically 150KB max
   - Animation: 15 seconds max, 3 loops
   - Clear CTA: Button atau text prompt
   - Brand logo: Visible placement
   - Load time: Optimize for quick display
   - Legibility: Readable at actual size

   Best Practices:
   - Contrast with page: Stand out
   - Simple message: One key point
   - Visual hierarchy: Clear focal point
   - Testing: A/B test different versions
   - Frequency capping: Limit impressions per user

#### 3. EMAIL DIRECT MARKETING (EDM)

   (Akan dibahas lebih detail di Pertemuan 13)

   Overview:
   - Personalized communication
   - Directly to inbox
   - High ROI potential
   - Permission-based marketing

   Types:
   - Newsletter: Regular content updates
   - Promotional: Sales, offers, discounts
   - Transactional: Order confirmations, receipts
   - Triggered: Behavior-based automation

   Design Elements:
   - Subject line: Compelling, under 50 characters
   - Preheader: Supporting text preview
   - Header: Logo, navigation (optional)
   - Hero image: Main visual
   - Body: Message content
   - CTA button: Clear, prominent
   - Footer: Unsubscribe, contact info

   Technical Considerations:
   - Mobile responsive: 60%+ openings on mobile
   - Width: 600px max untuk email client compatibility
   - Images: Alt text untuk accessibility
   - Testing: Preview di multiple clients

#### 4. WEBSITE BANNERS

   Types:
   - Hero banner: Large top-of-page visual
   - Sidebar banner: Complementary promotions
   - Pop-up: Overlay (use sparingly)
   - Exit-intent: Triggered when leaving

   Design Guidelines:
   - Responsive: Adapt to screen sizes
   - Loading speed: Optimize images
   - Hierarchy: Main message prominent
   - Action-oriented: Clear CTA
   - Brand consistency: Match site design

### E. INTEGRATED MARKETING COMMUNICATIONS (IMC)

#### 1. Konsep dan Prinsip IMC

   Definition:
   IMC adalah strategic approach untuk planning, executing, dan evaluating
   coordinated, measurable communications programs dengan target audiences.

   Tujuan IMC:
   - Consistency: Unified message across channels
   - Synergy: Channels support each other
   - Efficiency: Maximize resource utilization
   - Impact: Amplified through coordination
   - Customer-centric: Seamless experience

   Komponen IMC:
   - Advertising: Paid promotional messages
   - Public Relations: Earned media, reputation management
   - Sales Promotion: Short-term incentives
   - Personal Selling: Direct sales interaction
   - Direct Marketing: One-to-one communication
   - Digital Marketing: Online channels

#### 2. Merancang IMC Strategy

   Step 1: SITUATION ANALYSIS
   - Market analysis: Trends, opportunities, threats
   - Competitor analysis: What they're doing
   - SWOT: Strengths, weaknesses, opportunities, threats
   - Target audience: Demographics, psychographics, behaviors

   Step 2: OBJECTIVES
   - SMART goals: Specific, Measurable, Achievable, Relevant, Time-bound
   - Examples:
     * Increase brand awareness by 30% in 6 months
     * Generate 1000 qualified leads in Q1
     * Achieve 15% conversion rate dari campaign

   Step 3: STRATEGY
   - Positioning: How brand should be perceived
   - Key message: Core communication
   - Value proposition: Why customer should choose you
   - Tone of voice: Communication personality

   Step 4: TACTICS (Media Mix)
   - Select appropriate channels
   - Allocate budget
   - Create content calendar
   - Design creative assets

   Step 5: IMPLEMENTATION
   - Production: Create materials
   - Distribution: Launch across channels
   - Timing: Coordinated rollout
   - Management: Monitor dan adjust

   Step 6: EVALUATION
   - KPIs: Key performance indicators
   - Metrics: Specific measurements
     * Reach: How many exposed
     * Engagement: Interactions
     * Conversion: Desired actions taken
     * ROI: Return on investment
   - Reporting: Regular analysis
   - Optimization: Continuous improvement

#### 3. Choosing the Right Media Mix

   Factors to Consider:

**a. TARGET AUDIENCE**

      - Media consumption habits: Where do they spend time?
      - Demographics: Age, location, income
      - Digital savviness: Tech adoption level
      - Preferences: Preferred communication channels

**b. CAMPAIGN OBJECTIVES**

      - Awareness: Broad reach media (TV, outdoor, digital display)
      - Consideration: Content-rich media (brochures, social, blogs)
      - Conversion: Direct response media (email, search ads)
      - Retention: Owned media (email, loyalty programs)

**c. BUDGET**

      - High budget: Multi-channel including TV, print
      - Medium budget: Digital focus dengan selective print
      - Low budget: Social media, content marketing, email

**d. MESSAGE COMPLEXITY**

      - Simple message: Any channel
      - Complex message: Long-form content (brochure, blog, video)
      - Emotional message: Video, storytelling content

**e. TIMEFRAME**

      - Quick launch: Digital channels (faster production)
      - Planned campaign: Include print (longer lead time)
      - Ongoing: Mix of paid, owned, earned

**f. MEASUREMENT REQUIREMENTS**

      - Need precise tracking: Digital channels
      - Broad awareness: Traditional media

#### 4. Maintaining Brand Consistency Across Channels

   Visual Consistency:
   - Logo usage: Same version, placement guidelines
   - Color palette: Exact color codes (CMYK for print, RGB for digital)
   - Typography: Font families, sizes, hierarchy
   - Imagery style: Photo treatment, illustration style
   - Layout principles: Grid systems, spacing standards

   Messaging Consistency:
   - Tagline: Same across all materials
   - Value proposition: Consistent core message
   - Tone of voice: Personality consistency
   - Key messages: Repeated themes

   Tools untuk Ensuring Consistency:
   - Brand guidelines: Comprehensive document
   - Templates: Pre-designed layouts
   - Asset library: Centralized approved materials
   - Review process: Approval before publishing
   - Cross-functional collaboration: Marketing, design, content alignment

## PRAKTIKUM

LATIHAN 1: PRINT PROMOTIONAL MATERIALS MOCKUP (60 menit)

Objective: Create mockups untuk berbagai print promotional tools

Scenario:
Anda adalah desainer untuk "Kopi Nusantara", sebuah coffee shop lokal yang
ingin promote grand opening mereka.

Tugas:
Create mockups untuk 3 print materials:

#### 1. FLYER (A5 size: 148×210mm)

   Requirements:
   - Headline: "Grand Opening - Kopi Nusantara"
   - Key info: Tanggal, lokasi, special offer (50% off)
   - Visual: Coffee-related imagery
   - CTA: "Visit us!" dengan alamat
   - Design: Eye-catching, readable dari jarak 1-2 meter

#### 2. TRI-FOLD BROCHURE (A4: 210×297mm folded into thirds)

   Panels:
   - Front: Brand logo, tagline, hero image
   - Inside left: Menu highlights dengan photos
   - Inside center: About us - brand story
   - Inside right: Ambiance photos
   - Back left: Location map
   - Back center: Contact info, social media
   - Back right: Space for mailing address (jika needed)

#### 3. POSTER (A3 size: 297×420mm)

   Requirements:
   - Visual-dominant: Large product photo atau illustration
   - Minimal text: Brand name, tagline, opening date
   - Designed untuk wall display
   - Readable dari 3-5 meters

Design Guidelines:
- Consistent branding: Same color palette, fonts across all three
- Use GIMP atau Inkscape
- Simulated content: Placeholder text okay
- Focus on layout dan design, not final copy

Tools:
- Inkscape: Vector elements, text, layout
- GIMP: Photo editing, raster effects
- Free images: Unsplash, Pexels

Deliverable:
- 3 separate files: Flyer.pdf, Brochure.pdf, Poster.pdf
- Create mockup folder dengan all files

---

LATIHAN 2: MEDIA MIX PLANNING (45 menit)

Objective: Plan integrated campaign dengan appropriate media mix

Scenario:
"EcoWear", sustainable fashion brand, launching new collection.

Campaign Details:
- Target: Young adults 20-35, environmentally conscious
- Objective: Awareness + Drive traffic to online store
- Budget: Medium (not unlimited, but reasonable)
- Timeline: 3-month campaign
- Geographic: National (Indonesia)

Tugas:
Create media mix plan:

#### 1. CHANNEL SELECTION:

   Select 5-6 channels dari options:
   - Print: Magazine ads, flyers, posters
   - Outdoor: Billboards, transit ads
   - Digital: Social media ads, display ads, search ads
   - Email: EDM campaigns
   - PR: Press releases, influencer partnerships
   - Content: Blog posts, video content
   - Events: Pop-up stores, fashion shows

#### 2. RATIONALE:

   Untuk each selected channel, explain:
   - Why suitable untuk this audience dan objective
   - Expected role in campaign (awareness, consideration, conversion)
   - How it complements other channels

#### 3. BUDGET ALLOCATION:

   Distribute 100% budget across selected channels
   - Assign percentage to each channel
   - Justify allocation

#### 4. TIMELINE:

   Create 3-month content calendar:
   - Week 1-4: Launch phase
   - Week 5-8: Engagement phase
   - Week 9-12: Conversion push

#### 5. CONSISTENCY PLAN:

   How will you ensure brand consistency?
   - Visual elements across channels
   - Messaging themes
   - Quality control process

Format:
- Create presentation atau document
- Include visual mockups (optional but recommended)
- Clear, structured presentation

Deliverable: Media Mix Plan document atau slides

---

LATIHAN 3: CROSS-CHANNEL CAMPAIGN MOCKUP (60 menit)

Objective: Design campaign elements untuk multiple channels dengan consistency

Brief:
"FitLife Gym" promoting New Year membership promo.

Create campaign assets untuk:

#### 1. PRINT FLYER (Digital mockup)

   - Size: A5
   - Message: "New Year, New You - 50% Off First Month"
   - Include: Offer details, CTA, contact

#### 2. SOCIAL MEDIA POST (Instagram)

   - Size: 1080×1080px (square)
   - Same message adapted untuk social
   - Include: Engaging visual, branding, CTA

#### 3. EMAIL HEADER IMAGE

   - Size: 600×200px
   - Banner untuk top of email
   - Consistent dengan flyer dan social post

#### 4. DISPLAY AD (Web Banner)

   - Size: 300×250px (medium rectangle)
   - Same campaign branding
   - Animated GIF (3 frames): Reveal message

Requirements:
- Visual consistency: Same color scheme, fonts, imagery style
- Message consistency: Same core offer, adapted untuk each format
- Brand elements: Logo placement, tagline consistent
- Format optimization: Each designed appropriately untuk platform

Technical:
- Print flyer: PDF, CMYK, 300 DPI
- Social media: PNG atau JPEG, RGB, 72 DPI
- Email: JPEG, RGB, optimized file size (<200KB)
- Display ad: GIF, RGB, <150KB

Deliverable: Folder dengan 4 asset files + brief explanation document

## TUGAS (23% dari Nilai Akhir)

TUGAS: PROMOTIONAL CAMPAIGN DESIGN - INTEGRATED MARKETING PROJECT

Deadline: 2 minggu dari pertemuan

Bobot: 23% dari nilai akhir (MAJOR PROJECT)

---

DESKRIPSI:

Create comprehensive promotional campaign untuk brand/product (pilihan Anda
atau pilih dari yang disediakan), including strategy development dan
multi-channel creative execution.

---

PART 1: CAMPAIGN STRATEGY DOCUMENT (40% dari tugas)

Develop strategic foundation untuk campaign:

#### 1. BRAND/PRODUCT BRIEF

   - Brand name dan description
   - Product/service details
   - Current market position
   - Competitive landscape (2-3 competitors)

#### 2. TARGET AUDIENCE PROFILE

   - Demographics: Age, gender, location, income
   - Psychographics: Values, interests, lifestyle
   - Media habits: Where do they spend time?
   - Pain points: What problems does product solve?

#### 3. CAMPAIGN OBJECTIVES

   - Primary objective: Main goal
   - Secondary objectives: Supporting goals
   - SMART goals: Specific, measurable targets
   - KPIs: How success will be measured

#### 4. KEY MESSAGE dan POSITIONING

   - Core message: Main communication
   - Value proposition: Why choose this brand?
   - Tagline: Memorable phrase (create one)
   - Tone of voice: Communication personality

#### 5. MEDIA MIX STRATEGY

   - Selected channels: Minimum 5 channels
   - Rationale untuk each: Why chosen?
   - Budget allocation: Percentage to each channel
   - Timeline: 3-month campaign calendar
   - Channel synergy: How they work together

#### 6. CREATIVE CONCEPT

   - Big idea: Campaign theme
   - Visual direction: Design approach
   - Key visual: Main image/element throughout campaign
   - Consistency plan: How unified look maintained

Format: 8-12 pages document, professional formatting

---

PART 2: CREATIVE EXECUTION (60% dari tugas)

Create actual promotional materials for your campaign across multiple channels.

REQUIRED DELIVERABLES (Choose 1 from each category):

CATEGORY A - PRINT (Choose 1):
□ Option A1: Tri-fold brochure (A4 folded)
   - Professional content dan layout
   - High-quality imagery
   - Print-ready PDF (300 DPI, CMYK)

□ Option A2: Poster (A3 atau A2)
   - Visual impact, readable dari jauh
   - Clear hierarchy
   - Print-ready PDF

□ Option A3: Magazine ad (Full page A4)
   - Suitable untuk magazine placement
   - High-end aesthetic
   - Print-ready PDF

CATEGORY B - DIGITAL STATIC (Choose 1):
□ Option B1: Social Media Content Set
   - 3 Instagram posts (1080×1080px each)
   - Consistent visual theme
   - Engaging, platform-appropriate

□ Option B2: Display Ad Set
   - 3 standard sizes (Leaderboard, Medium Rectangle, Skyscraper)
   - Consistent campaign branding
   - Optimized file sizes (<150KB each)

□ Option B3: Email Marketing Template
   - Complete EDM design (600px width)
   - Mobile-responsive layout
   - HTML mockup atau designed JPEG

CATEGORY C - DIGITAL MOTION (Choose 1):
□ Option C1: Video Ad Storyboard
   - 15-30 second video ad concept
   - 8-12 frame storyboard dengan descriptions
   - Include: Script, visual directions, timing

□ Option C2: Animated Social Media Post
   - 10-15 second animation (GIF atau video)
   - Platform: Instagram Stories atau TikTok
   - Engaging, brand-aligned

□ Option C3: Digital Signage Loop
   - 20-30 second loop concept
   - Mockup: Still frames showing sequence
   - For: Mall atau retail display

CATEGORY D - PROMOTIONAL TOOL (Choose 1):
□ Option D1: Flyer Set
   - 2 versions: Event flyer + Product flyer
   - A5 size, designed untuk mass distribution
   - Print-ready PDFs

□ Option D2: Banner Design
   - 1 large format banner (Roll-up banner 60×160cm)
   - High-res mockup
   - Suitable untuk events, retail

□ Option D3: Product Packaging Mockup
   - Primary packaging design
   - All sides designed (box template)
   - Promotional elements integrated

ADDITIONAL REQUIREMENT:
□ Brand Style Guide (Mini Version)
   - Logo usage rules
   - Color palette (with codes: HEX, RGB, CMYK)
   - Typography specifications
   - Image style guidelines
   - 2-4 pages document

---

TOTAL DELIVERABLES:
✓ Campaign Strategy Document (8-12 pages)
✓ Print Material (1 deliverable dari Category A)
✓ Digital Static (1 deliverable dari Category B)
✓ Digital Motion (1 deliverable dari Category C)
✓ Promotional Tool (1 deliverable dari Category D)
✓ Brand Style Guide Mini (2-4 pages)

MINIMUM: 6 components as specified above

---

SUBMISSION FORMAT:

Organize dalam folder structure:

NamaAnda_PromotionalCampaign/
├── 01_Strategy/
│   └── CampaignStrategy.pdf
├── 02_CreativeAssets/
│   ├── A_Print/
│   │   └── [Your Category A deliverable]
│   ├── B_DigitalStatic/
│   │   └── [Your Category B deliverable]
│   ├── C_DigitalMotion/
│   │   └── [Your Category C deliverable]
│   └── D_PromotionalTool/
│       └── [Your Category D deliverable]
├── 03_BrandGuide/
│   └── BrandStyleGuide.pdf
└── 04_Presentation/
    └── CampaignPresentation.pdf (optional tapi recommended)

Include README.txt dengan:
- Project title
- Your name
- Brief project description
- List of deliverables included
- Software used
- Any special notes

---

RUBRIK PENILAIAN:

PART 1: STRATEGY DOCUMENT (40 points)

#### 1. Research dan Analysis (10 points)

   - Thoroughness of brand understanding
   - Target audience insight depth
   - Competitive analysis quality
   - Market positioning clarity

#### 2. Strategic Thinking (15 points)

   - Campaign objectives relevance dan feasibility
   - Media mix rationale strength
   - Budget allocation logic
   - Timeline practicality
   - Channel synergy demonstration

#### 3. Creative Concept (10 points)

   - Big idea originality dan strength
   - Message clarity dan appeal
   - Consistency plan comprehensiveness
   - Tagline effectiveness

#### 4. Presentation Quality (5 points)

   - Document organization dan structure
   - Writing clarity dan professionalism
   - Visual presentation dalam document
   - Completeness of information

---

PART 2: CREATIVE EXECUTION (60 points)

#### 1. Design Quality (20 points)

   - Visual appeal dan aesthetics
   - Composition dan layout excellence
   - Typography skill
   - Color usage effectiveness
   - Image quality dan selection

#### 2. Brand Consistency (15 points)

   - Unified visual identity across all materials
   - Message consistency
   - Style guide adherence
   - Recognizable brand presence

#### 3. Platform Appropriateness (15 points)

   - Design optimized untuk each medium
   - Format requirements met
   - Technical specifications correct
   - User experience consideration

#### 4. Effectiveness (10 points)

   - Clear call-to-action
   - Attention-grabbing capability
   - Message communication clarity
   - Target audience appropriateness
   - Persuasiveness

---

BONUS POINTS (up to 10 points):

- Exceptional creativity dan innovation (+3)
- Going beyond minimum requirements (+3)
- Professional presentation (+2)
- Working prototype/mockup dalam context (+2)

---

TIPS FOR SUCCESS:

Research Phase:
- Study successful campaigns from major brands
- Understand your chosen industry thoroughly
- Collect inspiration - create mood board
- Test your concept - get peer feedback early

Strategy Phase:
- Be realistic with objectives dan budgets
- Think holistically - how channels connect
- Consider customer journey touchpoints
- Validate media mix against audience habits

Design Phase:
- Create style guide first - guides all subsequent work
- Design highest impact piece first (usually print atau social)
- Maintain working files organized - easy revisions
- Regular backups - save versions (v1, v2, v3)
- Test at actual sizes - print/view at real dimensions

Quality Control:
- Proofread everything multiple times
- Check technical specs for each deliverable
- Preview files - open PDFs, view images
- Compress large files appropriately
- Final review - does everything align dengan strategy?

Common Pitfalls to Avoid:
- Inconsistent branding across materials
- Ignoring technical requirements (DPI, color mode, sizes)
- Overcomplicated designs - simplicity often better
- Poor readability - always prioritize clarity
- Missing deadlines - plan timeline dengan buffer
- Forgetting CTAs - every piece needs clear next step

## REFERENSI DAN RESOURCES

### A. TUTORIAL VIDEOS (YouTube)

Search recommendations:
1. "Integrated marketing communications tutorial"
   → Understanding IMC concepts dan application
2. "How to design brochure in Inkscape"
   → Complete brochure design workflow
3. "Flyer design tutorial GIMP"
   → Print promotional design techniques
4. "Media planning strategy tutorial"
   → Strategic media mix planning
5. "Brand consistency across channels"
   → Maintaining unified brand identity
6. "Print design best practices"
   → Preparing files untuk professional printing
7. "Display ad design tutorial"
   → Creating effective web banners

### B. READING MATERIALS

1. "Integrated Marketing Communications" by Clow & Baack
   - Comprehensive IMC textbook
   - Strategic frameworks dan case studies

2. "Ogilvy on Advertising" by David Ogilvy
   - Classic advertising wisdom
   - Practical insights from industry legend

3. "Contagious: Why Things Catch On" by Jonah Berger
   - Understanding viral marketing
   - Psychological principles behind sharing

### C. TOOLS DAN RESOURCES

#### 1. Design Software (Free):

   - Inkscape: Vector graphics, brochures, flyers
   - GIMP: Photo editing, raster graphics
   - Canva Free: Templates, quick designs
   - Figma Free: Digital design, prototyping

#### 2. Animation Tools (Free):

   - Adobe Express (free tier): Simple animations
   - Canva: Animated social posts
   - GIMP: GIF creation dari multiple layers

#### 3. Stock Resources (Free):

   - Images: Unsplash, Pexels, Pixabay
   - Icons: Flaticon, Noun Project
   - Fonts: Google Fonts, Font Squirrel
   - Videos: Pexels Videos, Pixabay Videos

#### 4. Mockup Generators:

   - Placeit (some free tiers): Device mockups
   - Smartmockups (free trial): Print mockups
   - Photopea: Online PSD editor untuk mockup templates

#### 5. Campaign Planning Tools:

   - Google Sheets: Budget allocation, timeline
   - Trello atau Notion: Content calendar
   - Miro: Strategy visualization

### D. INSPIRATION RESOURCES

#### 1. Campaign Archives:

   - Ads of the World (adsoftheworld.com)
   - Campaign Magazine archives
   - Cannes Lions winning campaigns
   - Study: What makes them effective?

#### 2. Design Galleries:

   - Behance: Search "promotional campaign"
   - Dribbble: UI dan digital ads
   - Pinterest: Create campaign boards

#### 3. Brand Guidelines Examples:

   - Brandbook examples online
   - Study: Major brand guidelines (many public)
   - Notice: Consistency rules dan applications

### E. INDUSTRY KNOWLEDGE

#### 1. Stay Updated:

   - Marketing blogs: HubSpot, Neil Patel, Marketing Land
   - Design blogs: Smashing Magazine, Creative Bloq
   - Ad industry: AdAge, Adweek

#### 2. Case Studies:

   - Think with Google: Campaign case studies
   - Facebook Business: Success stories
   - LinkedIn Marketing: B2B examples

## RANGKUMAN

Pertemuan ini memberikan comprehensive overview tentang promotional tools
ecosystem dan integrated marketing communications:

#### 1. PROMOTIONAL TOOLS LANDSCAPE

   - Evolution dari traditional ke digital
   - Classification: Paid, Owned, Earned media
   - Strategic selection criteria

#### 2. PRINT PROMOTIONAL TOOLS

   - Brosur, flyer, poster, banner, katalog
   - Design best practices untuk each type
   - Print production considerations

#### 3. AUDIO VISUAL TOOLS

   - TV commercials, digital video ads
   - Digital signage design
   - Radio advertising (supporting materials)

#### 4. ONLINE PROMOTIONAL TOOLS

   - Social media advertising overview
   - Display advertising formats
   - Email dan website banners

#### 5. INTEGRATED MARKETING COMMUNICATIONS (IMC)

   - Strategic coordination across channels
   - Creating unified brand experience
   - Media mix planning framework
   - Maintaining brand consistency

#### 6. PRACTICAL SKILLS

   - Creating print mockups
   - Planning media mix strategies
   - Designing cross-channel campaigns
   - Ensuring brand unity across platforms

Key Takeaways:
- Success dalam modern marketing requires multi-channel thinking
- Each promotional tool has unique strengths - choose strategically
- Consistency adalah key untuk building strong brand recognition
- Design must be optimized untuk specific medium requirements
- Strategy drives creative - always start dengan why dan who

Sebagai desainer komunikasi visual, Anda bukan hanya executor tetapi juga
strategic thinker yang understand how different promotional tools work together
dalam ecosystem untuk achieve marketing objectives.

## PERSIAPAN PERTEMUAN BERIKUTNYA

Pertemuan 11: Photo Release (Press Release Visual)

Akan membahas:
- Konsep photo release dan perbedaannya dengan text press release
- Kriteria news-photo yang efektif
- Etika foto jurnalisme dalam konteks PR
- Layout untuk press kits visual
- Distribution channels dan best practices

Persiapan:
#### 1. Collect examples: Cari photo releases dari perusahaan/brand

#### 2. Study: News photos di media online - apa yang makes them compelling?

#### 3. Photography basics: Review basic photography concepts (composition, lighting)

#### 4. Think about: Events yang suitable untuk photo release coverage

Software preparation:
- GIMP: Photo editing dan enhancement
- Inkscape: Layout dan text overlay
- Pastikan familiar dengan basic photo editing tools

Reading:
- Artikel: "What makes a good press photo?"
- Look at: Corporate press kit examples (visual components)

Sampai jumpa di pertemuan berikutnya!

# MODUL PERKULIAHAN DESAIN KOMUNIKASI VISUAL - PERTEMUAN 11

JUDUL: Photo Release (Press Release Visual)

## SUB-CPMK

## Mahasiswa memahami dan mempraktikkan membuat photo release sebagai tool

komunikasi visual dalam public relations dan corporate communications.

## TUJUAN PEMBELAJARAN

## Setelah mengikuti perkuliahan ini, mahasiswa diharapkan mampu:

#### 1. Memahami konsep dan tujuan photo release dalam konteks PR

#### 2. Membedakan photo release dari text-based press release

#### 3. Mengidentifikasi karakteristik news-worthy photos

#### 4. Menerapkan prinsip-prinsip foto jurnalisme dalam photo release

#### 5. Membuat caption yang informatif dan compelling

#### 6. Merancang layout photo release yang profesional

#### 7. Memahami etika dan legal aspects dalam photo release

#### 8. Mengevaluasi dan menyeleksi foto untuk press kit

#### 9. Memahami distribution channels dan timing untuk photo release

## PENGANTAR MATERI

Dalam era visual-first communication, "a picture is worth a thousand words"
bukan sekadar pepatah - it's a strategic reality. Media outlets increasingly
prioritize visual content, dan social media has amplified the importance of
compelling imagery dalam driving engagement dan sharing. Photo release,
sebagai evolution dari traditional text-based press release, merespons shift
ini dengan menempatkan visual sebagai primary communication element.

Photo release adalah official communication tool yang menggunakan foto
sebagai main story-telling medium, didukung dengan caption dan minimal text
untuk memberikan context. Berbeda dengan traditional press release yang
text-heavy dengan foto sebagai supporting element, photo release membalik
hierarchy - foto adalah hero, text adalah supporting cast.

Dalam corporate communications dan public relations, photo release serves
multiple purposes: announcing events, showcasing products, documenting
achievements, humanizing brands, dan creating shareable content untuk media
coverage. Well-executed photo release tidak hanya informative tetapi juga
emotionally engaging, capturing moments yang resonate dengan audience dan
compel media outlets untuk publish.

Pertemuan ini akan equip Anda dengan understanding dan skills untuk create
effective photo releases - dari selecting atau creating compelling imagery,
writing informative captions, memahami journalistic ethics, hingga designing
layouts yang professional dan media-ready. Anda akan belajar thinking seperti
photojournalist dan PR professional simultaneously, balancing storytelling
impact dengan communication objectives.

Skill dalam photo release creation adalah valuable asset dalam karier
communications, journalism, marketing, event management, atau any field yang
involves visual storytelling dan media relations.

## MATERI

### A. KONSEP DAN FONDASI PHOTO RELEASE

#### 1. Definisi Photo Release

   Photo Release adalah official communication document atau package yang
   menggunakan foto berkualitas tinggi sebagai primary element untuk
   menyampaikan news atau information kepada media, stakeholders, atau
   public.

   Karakteristik:
   - Visual-first approach: Foto adalah focal point
   - Journalistic quality: News-worthy, well-composed photos
   - Professional execution: High resolution, proper editing
   - Contextual information: Caption, brief description
   - Distribution ready: Format suitable untuk immediate use

   Tujuan:
   - Media coverage: Facilitate easier pickup by news outlets
   - Visual storytelling: Communicate story melalui imagery
   - Brand visibility: Showcase organization activities
   - Engagement: More shareable than text-only releases
   - Documentation: Official record of events atau milestones

#### 2. Photo Release vs Traditional Press Release

   TRADITIONAL PRESS RELEASE:
   - Structure: Inverted pyramid (most important info first)
   - Primary element: Text content
   - Photo role: Supporting, optional
   - Length: 400-600 words typically
   - Format: Predominantly text document
   - Distribution: Email body, press portals

   PHOTO RELEASE:
   - Structure: Visual-led with supporting text
   - Primary element: High-quality photo(s)
   - Text role: Caption, brief context
   - Length: Caption 50-100 words, optional body 100-200 words
   - Format: Image file with embedded atau accompanying captions
   - Distribution: Media databases, photo wire services, social platforms

   When to Use Which:

   Use TRADITIONAL PRESS RELEASE:
   - Complex information requiring detailed explanation
   - Policy announcements, financial results
   - Abstract topics difficult to visualize
   - When compelling visuals unavailable

   Use PHOTO RELEASE:
   - Events dengan strong visual moments
   - Product launches dengan appealing visuals
   - Human interest stories
   - Award ceremonies, milestone celebrations
   - Community engagement activities
   - When "showing" more effective than "telling"

#### 3. Types of Photo Releases

**a. EVENT PHOTO RELEASE**

      - Coverage: Conference, seminar, launch event
      - Content: Key moments, speakers, audience, venue
      - Timing: During atau immediately after event
      - Use case: Event announcement, recap

**b. PRODUCT PHOTO RELEASE**

      - Coverage: New product showcase
      - Content: Product shots, usage demonstration, features
      - Timing: Product launch
      - Use case: Product announcement, reviews

**c. EXECUTIVE PHOTO RELEASE**

      - Coverage: Leadership announcements, executive activities
      - Content: Professional portrait, action shots, meeting scenarios
      - Timing: Appointment announcements, company milestones
      - Use case: Build executive profile, corporate news

**d. ACHIEVEMENT PHOTO RELEASE**

      - Coverage: Awards, certifications, milestones
      - Content: Award ceremony, certificate display, team celebration
      - Timing: Upon achievement
      - Use case: Build credibility, celebrate success

**e. COMMUNITY ENGAGEMENT PHOTO RELEASE**

      - Coverage: CSR activities, sponsorships, community programs
      - Content: Activities, beneficiaries, brand representatives
      - Timing: During atau post-activity
      - Use case: Build brand reputation, demonstrate social responsibility

**f. FACILITY PHOTO RELEASE**

      - Coverage: Office opening, factory tour, infrastructure
      - Content: Building exterior/interior, facilities, operations
      - Timing: Opening, renovation, milestone
      - Use case: Showcase capabilities, transparency

### B. KARAKTERISTIK NEWS-WORTHY PHOTOGRAPHY

#### 1. News Value dalam Photography

   Photos with high news value possess these qualities:

**a. TIMELINESS**

      - Current events: Recent occurrence
      - Relevant timing: Connected to current trends atau issues
      - Freshness: Not old news
      - Example: Product launch on release day, not weeks after

**b. PROXIMITY**

      - Local relevance: Matters to local community
      - Geographic connection: Location significance
      - Cultural relevance: Resonates with target audience
      - Example: Local company achievement, community event

**c. PROMINENCE**

      - Notable subjects: Well-known individuals, organizations
      - Authority: Official events, institutional activities
      - Status: High-profile occasions
      - Example: CEO announcement, government partnership

**d. CONSEQUENCE/IMPACT**

      - Significance: Affects people's lives
      - Scale: Large number affected atau major change
      - Importance: Long-term implications
      - Example: Major expansion creating jobs, environmental initiative

**e. HUMAN INTEREST**

      - Emotional connection: Touches feelings
      - Relatability: Audience can identify with
      - Unique angle: Unusual atau heartwarming story
      - Example: Employee overcoming challenges, community helped

**f. CONFLICT (handled ethically)**

      - Tension: Opposing forces atau viewpoints
      - Challenge: Overcoming obstacles
      - Resolution: Problem-solving stories
      - Example: Company addressing crisis, innovation solving issues

#### 2. Composition  dan Technical Quality

**a. COMPOSITION PRINCIPLES**

      Rule of Thirds:
      - Grid: Divide frame into 9 equal parts (3×3)
      - Placement: Position subject on intersection points
      - Balance: More dynamic than centered composition
      - Application: Place eyes, horizon, key elements on lines/intersections

      Leading Lines:
      - Direction: Lines guide viewer's eye
      - Depth: Create perspective dan dimensionality
      - Examples: Roads, buildings, natural lines
      - Effect: Draw attention to main subject

      Framing:
      - Natural frames: Windows, doorways, foliage
      - Focus: Directs attention to subject
      - Context: Adds environmental information
      - Depth: Creates layers dalam image

      Negative Space:
      - Breathing room: Empty space around subject
      - Emphasis: Highlights main subject
      - Simplicity: Reduces visual clutter
      - Impact: Can be dramatic dan powerful

      Symmetry dan Patterns:
      - Balance: Harmonious composition
      - Visual interest: Repetition catches eye
      - Breaking pattern: Subject disrupts pattern for focus

      Perspective:
      - Eye level: Neutral, documentary
      - Low angle: Subject appears powerful, impressive
      - High angle: Overview, context, subject smaller
      - Dutch angle: Dynamic, energy (use sparingly)

**b. LIGHTING**

      Natural Light:
      - Golden hour: Hour after sunrise, before sunset (warm, soft)
      - Blue hour: Just before sunrise, after sunset (cool, moody)
      - Overcast: Diffused, even lighting (good for portraits)
      - Harsh midday: Strong shadows (challenging, but dramatic)

      Direction:
      - Front lighting: Even, clear, flattening
      - Side lighting: Texture, dimension, contrast
      - Back lighting: Silhouette, rim light, dramatic
      - Top lighting: Can create unflattering shadows

      Artificial Light:
      - Flash: Fill flash for outdoor, main light indoor
      - Continuous light: LED panels, practical lights
      - Mixed lighting: Combining natural dan artificial

      Tips:
      - Avoid direct harsh flash: Use diffuser atau bounce
      - Watch for color temperature: Match light sources
      - Expose untuk highlights: Easier to recover shadows

**c. FOCUS DAN DEPTH OF FIELD**

      Sharp Focus:
      - Critical sharpness: Main subject crystal clear
      - Focus point: On eyes (portraits), key element (objects)
      - Technique: Single-point AF untuk precision

      Depth of Field (DOF):
      - Shallow DOF: Subject sharp, background blurred (isolation)
        * Good for: Portraits, product focus, reducing distractions
        * How: Wider aperture (f/1.8, f/2.8), closer subject, longer lens

      - Deep DOF: Everything sharp from foreground to background
        * Good for: Landscapes, group photos, architecture, context
        * How: Narrower aperture (f/8, f/11), farther subject, wider lens

**d. EXPOSURE**

      Proper Exposure:
      - Highlights: Not blown out (retain detail)
      - Shadows: Not crushed (retain detail)
      - Midtones: Appropriate brightness
      - Histogram: Check for clipping

      Exposure Triangle:
      - Aperture: Controls light amount dan DOF
      - Shutter speed: Controls light duration dan motion
      - ISO: Controls sensor sensitivity dan noise
      - Balance: Adjust all three untuk optimal result

      Tips:
      - Slight underexposure: Safer for digital (recover shadows easier)
      - Bracket exposures: Multiple shots at different exposures
      - RAW format: Maximum editing flexibility

**e. COLOR DAN WHITE BALANCE**

      White Balance:
      - Accurate colors: Appropriate untuk news photos
      - Presets: Auto, Daylight, Cloudy, Shade, Tungsten, Fluorescent
      - Custom WB: Most accurate untuk specific conditions

      Color Harmony:
      - Complementary colors: Visual interest
      - Consistent palette: Professional look
      - Color psychology: Emotional impact

      Post-Processing:
      - Minimal adjustments: News photos should appear natural
      - Color correction: Accurate representation
      - Avoid: Heavy filters, unrealistic colors (unless artistic purpose)

#### 3. Storytelling dalam Single Image

   A great news photo tells story without words:

   Elements of Visual Storytelling:

**a. DECISIVE MOMENT**

      - Peak action: Critical moment captured
      - Emotion: Genuine expressions
      - Interaction: Relationships visible
      - Timing: Right second captured

**b. CONTEXT**

      - Environment: Where story takes place
      - Background elements: Supporting information
      - Scale: Size relationships
      - Props: Objects that add meaning

**c. SUBJECTS**

      - People: Bring human element
      - Expressions: Emotion visible
      - Body language: Non-verbal communication
      - Interaction: Relationships between subjects

**d. ACTION**

      - Movement: Implies activity
      - Direction: Where action going
      - Energy: Dynamic vs static
      - Gesture: Communicative actions

**e. EMOTION**

      - Faces: Primary emotion carriers
      - Authenticity: Genuine not posed (when appropriate)
      - Connection: Viewer empathy
      - Impact: Memorable feeling

   Tips for Storytelling Photos:
   - Anticipate moments: Be ready untuk peak action
   - Multiple angles: Shoot from various perspectives
   - Series thinking: Multiple images tell fuller story
   - Details matter: Close-ups add depth
   - Candid moments: Often more authentic than posed

### C. PHOTO JOURNALISM ETHICS DALAM PR CONTEXT

#### 1. Authenticity dan Manipulation

   Acceptable Editing:
   ✓ Exposure adjustment: Brighten/darken appropriately
   ✓ Color correction: Accurate color reproduction
   ✓ Cropping: Remove distractions, improve composition
   ✓ Sharpening: Enhance clarity moderately
   ✓ Dust/sensor spot removal: Technical corrections
   ✓ Straightening: Correct horizon atau perspective

   Unacceptable Manipulation:
   ✗ Adding/removing subjects atau objects
   ✗ Changing context significantly
   ✗ Composite images without disclosure
   ✗ Reversing images (flipping)
   ✗ Excessive alteration misrepresenting reality
   ✗ Staging yang implies candid moment

   Gray Areas (Disclose wenn Done):
   ~ Selective coloring (B&W with color accents)
   ~ HDR (if excessive/unrealistic)
   ~ Panorama stitching (if creates distortion)
   ~ Time-lapse composites
   ~ Heavy artistic interpretation

   Best Practice:
   - Truth standard: Does photo accurately represent what occurred?
   - Disclosure: If significant editing done, note it
   - Context: Don't mislead about when/where/what
   - Natural look: Editing shouldn't be obvious

#### 2. Consent dan Legal Considerations

**a. MODEL RELEASE (Izin Foto)**

      When Required:
      - Commercial use: Advertising, marketing materials
      - Identifiable individuals: Face clearly visible
      - Private property: Non-public locations
      - Implied endorsement: Person associated with brand/product

      When NOT Typically Required:
      - Editorial use: News, education, commentary
      - Public events: Public figures at public events
      - Crowds: Individuals not identifiable
      - Public property: Streets, parks (dengan considerations)

      Best Practice untuk PR Photo Release:
      - Event announcements: Get releases from featured individuals
      - Group photos: General release at registration/attendance
      - Employee photos: Company policy release on hiring
      - Public figure: Usually editorial use, still good practice to inform
      - Minors: Parent/guardian consent always required

      Model Release Should Include:
      - Photographer dan subject names
      - Date dan location
      - Permitted uses (specify: editorial, commercial, or both)
      - Compensation (if any)
      - Signature dan date

**b. COPYRIGHT**

      Photographer Rights:
      - Creator owns copyright: Unless work-for-hire
      - Usage license: Specify allowed uses
      - Attribution: Credit photographer
      - Duration: Lifetime plus 70 years (varies by country)

      Corporate Photography:
      - Employee work: Company owns (work-for-hire)
      - Contractor work: Negotiate ownership dalam contract
      - Stock photos: Follow license terms strictly
      - User-generated: Get explicit permission untuk use

**c. PRIVACY DAN DIGNITY**

      Ethical Guidelines:
      - Respect: Don't exploit vulnerable individuals
      - Context: Don't misrepresent situations
      - Harm consideration: Could photo cause harm to subject?
      - Consent: Even when legal, ethical to ask when possible
      - Balance: Public interest vs individual privacy

      Special Considerations:
      - Children: Extra protection, always get parental consent
      - Sensitive situations: Medical, legal, distress
      - Private moments: Even dalam public, respect boundaries
      - Cultural sensitivity: Respect customs dan norms

#### 3. Credibility dan Transparency

   Building Trust:
   - Accurate captions: Don't mislead
   - Proper attribution: Credit sources
   - Admit mistakes: Correct errors promptly
   - Clear sourcing: Identify photo origin
   - Disclosure: Note any relevant conflicts atau connections

   PR-Specific Considerations:
   - Balance advocacy dengan honesty: Don't cross into deception
   - Transparent intent: Clear this is PR material, not independent journalism
   - Factual accuracy: Information must be verifiable
   - Ethical persuasion: Influence through truth, not manipulation

### D. WRITING EFFECTIVE CAPTIONS

#### 1. Caption Structure dan Elements

   Standard Caption Format:

   [WHO] [WHAT] [WHERE] [WHEN] + [WHY/CONTEXT]

   Example:
   "CEO Sarah Johnson (center) presents Innovation Award to product team
   members at Tech Summit Jakarta, March 20, 2026. The award recognizes
   the development of EcoApp, which reduced company carbon footprint by 40%."

   Components:

**a. WHO**

      - Identify people: Names, titles, positions
      - Left to right: "(dari kiri)" convention
      - Relevance: Why these people matter
      - Spelling: Double-check name accuracy

**b. WHAT**

      - Action: What's happening dalam photo
      - Event: Type of occasion
      - Specific: Concrete details, not vague
      - Active voice: Present tense preferred

**c. WHERE**

      - Location: Venue name, city
      - Context: Significance of location
      - Specificity: Enough detail untuk clarity

**d. WHEN**

      - Date: Full date including year
      - Time: If relevant to news value
      - Tense: Usually past tense for caption, present untuk action

**e. WHY/CONTEXT (Expanding Paragraph)**

      - Significance: Why this matters
      - Background: Relevant context
      - Quote: Optional, dari key individual
      - Impact: Consequences atau implications
      - Future: What happens next

#### 2. Caption Writing Best Practices

   DO:
   ✓ Present tense untuk describing photo: "CEO gives speech"
   ✓ Past tense untuk events: "The award ceremony took place..."
   ✓ Spell out numbers one through nine: "five employees"
   ✓ Use numerals for 10 dan above: "15 participants"
   ✓ Be specific: "increased by 25%" not "significant increase"
   ✓ Verify facts: Triple-check all information
   ✓ Attribute quotes: Name speaker clearly
   ✓ Identify everyone visible: All recognizable people
   ✓ Use active voice: "Team wins award" not "Award was won by team"
   ✓ Keep length appropriate: 50-100 words caption, optional 100-200 body

   DON'T:
   ✗ State obvious: "Image shows..." (it's clearly an image)
   ✗ Use editorializing language: "amazing," "incredible" (unless in quote)
   ✗ Repeat photo content: "Man in blue shirt..." if obvious
   ✗ Leave questions: Provide complete information
   ✗ Use jargon: Explain technical terms
   ✗ Assume knowledge: Provide context
   ✗ Sensationalize: Stick to facts
   ✗ Use humor inappropriately: Professional tone

   Tips:
   - Read aloud: Check flow dan clarity
   - Peer review: Have someone else read
   - AP Style: Follow Associated Press style guide
   - Consistency: Maintain style across all releases
   - Update: If information changes, update caption

#### 3. Multilingual Captions (If Applicable)

   For International Distribution:
   - Primary language: Target audience language
   - Secondary language: English (international press)
   - Translation accuracy: Professional translation, not machine only
   - Cultural adaptation: Not just literal translation
   - Format: Clear separation of languages

### E. DESIGNING PHOTO RELEASE LAYOUT

#### 1. Single-Image Photo Release Format

   Layout Components:

**a. HEADER AREA**

      - Company logo: Top left atau center
      - "PHOTO RELEASE" label: Clear designation
      - Contact information: PR contact, email, phone
      - Release date: "FOR IMMEDIATE RELEASE" atau specific date
      - Location: City, State/Country

**b. IMAGE AREA**

      - Photo: High resolution, prominent placement
      - Size: Large enough untuk impact, small enough untuk quick load
      - Orientation: Usually landscape untuk versatility
      - Quality: Sharp, properly exposed

**c. CAPTION AREA**

      - Caption text: Directly below atau beside image
      - Typography: Readable font, appropriate size
      - Photographer credit: Small text, discreet but present
      - Copyright notice: © Year, Company Name

**d. ADDITIONAL INFO (Optional)**

      - Brief background paragraph: Extended context
      - Boilerplate: Standard company description
      - Download link: For high-res version
      - Social media handles: Encourage sharing

   Design Guidelines:
   - Clean layout: Minimal distraction from photo
   - Professional typography: Corporate fonts atau classical choices
   - White space: Don't crowd elements
   - Brand colors: Subtle accents, don't overpower photo
   - Print consideration: Works both screen dan print

#### 2. Multi-Image Photo Release (Photo Essay)

   When to Use:
   - Event coverage: Multiple key moments
   - Process documentation: Step-by-step story
   - Before/after: Transformation stories
   - Variety: Different perspectives of same story

   Layout Approaches:

**a. GALLERY GRID**

      - Equal-sized images: Uniform grid
      - 2×2, 3×3, atau 2×3: Depending on number
      - Captions: Below each image atau numbered dengan separate caption sheet
      - Best for: Multiple unrelated moments from same event

**b. HERO + SUPPORTING**

      - One large feature image: Main story
      - Several smaller images: Supporting moments
      - Layout: Large image top atau left, smaller images around
      - Best for: Clear main moment with supporting context

**c. NARRATIVE SEQUENCE**

      - Chronological order: Story progression
      - Similar sizing: Equal importance
      - Flow: Left to right, top to bottom
      - Best for: Process stories, event progression

**d. MAGAZINE-STYLE SPREAD**

      - Varied sizing: Dynamic layout
      - Overlapping: Creative arrangement (use carefully)
      - White space: Breathing room
      - Best for: Feature-style presentations

   Considerations:
   - Cohesion: Images work together
   - Quality consistency: All images similar technical quality
   - Color harmony: Images complement each other
   - Story arc: Beginning, middle, end (if applicable)
   - Not overwhelming: 3-8 images typical maximum

#### 3. File Formats dan Technical Specs

   For Distribution:

   Image Files:
   - Format: JPEG (universal compatibility)
   - Resolution: 300 DPI for print, 72 DPI for web (provide both)
   - Size: Print minimum 5"×7" at 300 DPI (1500×2100 pixels)
   - Web: 1200-2000 pixels pada longest side
   - Color space: sRGB for digital, CMYK for print
   - File size: Balance quality dan download speed (1-5MB range)
   - Naming: Descriptive, include date (CompanyName_Event_Date_01.jpg)

   Layout PDF:
   - Format: PDF (preserves layout)
   - Quality: High resolution embedded images
   - Fonts: Embedded atau outlined
   - Color: CMYK for print docs, RGB for screen
   - Accessibility: Text selectable (not flattened)
   - File size: Reasonable untuk email (<10MB ideal)

   Word Document (Alternative):
   - Format: DOCX (editable untuk media)
   - Images: Embedded at high resolution
   - Formatting: Simple, professional
   - Compatible: Widely openable

   Best Practice:
   - Provide options: JPEG + PDF, atau JPEG + DOCX
   - High-res link: Cloud storage link untuk original high-res files
   - Thumbnails: Lower-res versions untuk quick preview
   - Organized: Clear file naming dan folder structure

### F. DISTRIBUTION CHANNELS DAN STRATEGY

#### 1. Media Outlets

**a. NEWS AGENCIES DAN WIRE SERVICES**

      - National agencies: Antara (Indonesia), Reuters, AP
      - Photo wire services: Specialized photo distribution
      - Reach: Wide distribution to member outlets
      - Format requirement: Strict technical specs
      - Submission: Online portals, FTP, atau email

**b. TARGETED MEDIA LIST**

      - Newspapers: Local, national, industry-specific
      - Magazines: Trade publications, general interest
      - Online news portals: Kompas.com, Detik.com, etc.
      - Broadcast: TV stations (for video, stills for website)
      - Specialized: Industry blogs, vertical publications

      Personalization:
      - Research: Know journalists covering your beat
      - Relationships: Build ongoing connections
      - Relevance: Pitch stories appropriate to outlet
      - Exclusives: Consider offering exclusive first access
      - Follow-up: Polite inquiry without being pushy

#### 2. Digital Channels

**a. COMPANY OWNED CHANNELS**

      - Company website: Press/media section
      - Blog: Storytelling dengan full photo essay
      - Social media: Facebook, Instagram, LinkedIn, Twitter
        * Platform optimization: Different specs each platform
        * Hashtags: Relevant, strategic
        * Timing: Post when audience most active
        * Engagement: Respond to comments

      Tips:
      - Make downloadable: Easy untuk media to use
      - SEO optimization: Descriptive file names, alt text
      - Share buttons: Enable easy spreading
      - Embed options: Provide embed codes

**b. PRESS RELEASE DISTRIBUTION PLATFORMS**

      - General: PR Newswire, Business Wire (costly but broad reach)
      - Free options: PRLog, 24-7 Press Release, Online PR Media
      - Local: Indonesia-specific platforms
      - Industry-specific: Targeted to your sector

**c. PHOTO SHARING DAN STOCK SERVICES**

      - Flickr: Photo organization, creative commons options
      - Company accounts: Curated galleries
      - Stock submission: Some companies submit to stock for wider reach
      - Considerations: Rights management, watermarking

#### 3. Timing dan Frequency

   Best Times to Send:
   - Day: Tuesday, Wednesday, Thursday (mid-week better pickup)
   - Time: Early morning (6-9 AM) untuk day news cycle
   - Avoid: Mondays (busy catch-up), Fridays (weekend focus)
   - Breaking news: Anytime, prioritize timeliness

   Event Releases:
   - Pre-event: 1-2 weeks advance for calendar listings
   - During event: Real-time untuk social, next-day untuk traditional media
   - Post-event: Within 24 hours for news value

   Frequency:
   - Regular schedule: Not too frequent (avoid spam perception)
   - Quality over quantity: Only newsworthy content
   - Consistency: Build expectation among media contacts
   - Volume: 1-2 per month typical for most organizations

## PRAKTIKUM

LATIHAN 1: PHOTO SELECTION DAN CRITIQUE (30 menit)

Objective: Developing eye untuk news-worthy photography

Exercise:
#### 1. Collect 10-15 photos (from events, own photos, atau online sources)

#### 2. Evaluate each photo menggunakan criteria:

   Checklist untuk Each Photo:
   □ News value: Is it timely, relevant, consequential?
   □ Composition: Well-composed using principles?
   □ Technical quality: Sharp focus, good exposure, proper lighting?
   □ Storytelling: Does it tell clear story?
   □ Emotion: Does it convey feeling atau connection?
   □ Context: Sufficient information visible?
   □ Suitability: Appropriate untuk press release?

#### 3. Select top 3 photos

#### 4. Write brief critique for each:

   - Strengths (what works well)
   - Weaknesses (what could be better)
   - News angle (what story does it tell)
   - Suggested caption (draft caption)

Deliverable:
- Document dengan 3 selected photos
- Written critique untuk each
- Draft captions

---

LATIHAN 2: CAPTION WRITING PRACTICE (45 menit)

Objective: Master caption writing untuk photo releases

Exercise 1 - Basic Caption:
Diberikan sebuah photo (provided atau chosen), write:
#### 1. Short caption (50-75 words): WHO, WHAT, WHERE, WHEN

#### 2. Extended caption (100-150 words): Add WHY/CONTEXT, background

#### 3. Alternate version: Same photo, different angle/focus

Exercise 2 - Caption Editing:
Diberikan poorly-written captions, improve mereka by:
- Fixing factual presentation
- Improving clarity
- Adding missing essential information
- Removing unnecessary words
- Correcting style issues

Exercise 3 - Style Consistency:
Write captions for 3 different photos from same event:
- Maintain consistent style
- Avoid repetition
- Each caption stands alone (independently understandable)
- Together, they tell fuller story

Criteria:
- Accuracy: All facts correct
- Completeness: All essential info included
- Clarity: Easy to understand
- Conciseness: No unnecessary words
- Style: Professional, AP Style compliant

Deliverable:
- 3 photos dengan captions
- Revised captions dari editing exercise
- Self-evaluation notes

---

LATIHAN 3: PHOTO RELEASE LAYOUT DESIGN (60 menit)

Objective: Create professional photo release layouts

Assignment:
Design two photo release layouts:

#### 1. SINGLE-IMAGE FORMAT

   Scenario: Company anniversary celebration

   Components:
   - Header: Company logo, "PHOTO RELEASE", contact info, date
   - Photo: One strong image (min 2000px width)
   - Caption: Complete WHO/WHAT/WHERE/WHEN information
   - Extended text: 2-3 paragraphs background/context
   - Footer: Photographer credit, copyright, boilerplate

   Design guidelines:
   - Clean, professional layout
   - Emphasize photo (largest element)
   - Readable typography
   - Branded (company colors accents)
   - Print dan screen suitable

#### 2. MULTI-IMAGE FORMAT (PHOTO ESSAY)

   Scenario: Corporate social responsibility event

   Components:
   - Header: Same as single-image format
   - 4-6 photos: Mix of wide shots, medium shots, close-ups
   - Individual captions: For each photo
   - Introductory paragraph: Overall event context
   - Layout: Choose from gallery grid atau hero+supporting style

   Design guidelines:
   - Cohesive visual presentation
   - Images tell story together
   - Clean layout, not cluttered
   - Consistent caption format
   - Page numbers (if multiple pages)

Software Options:
- Inkscape: Vector layout, text, arrangement
- GIMP: Photo editing before layout
- Canva: Template-based quick design
- Word/Google Docs: Simple text-based layout

Technical Specs:
- Format: PDF export
- Page size: A4 (210×297mm)
- Margins: 15-20mm all sides
- Images: Embedded at high resolution
- Fonts: Readable (Arial, Helvetica, Times, Georgia)
- File size: Under 10MB

Deliverable:
- 2 PDF files: SingleImage_PhotoRelease.pdf, MultiImage_PhotoRelease.pdf
- Source files (SVG, XCF, atau design files)

## TUGAS (14% dari Nilai Akhir)

TUGAS: PHOTO RELEASE ASSIGNMENT

Deadline: 1 minggu dari pertemuan

Bobot: 14% dari nilai akhir

---

DESKRIPSI:

Create complete photo release package untuk real atau simulated event,
demonstrating photography, writing, dan design skills.

---

PILIH SALAH SATU SKENARIO:

OPTION A: EVENT DOCUMENTATION (Real Event)
- Attend dan document real event (campus event, community activity, etc.)
- Capture photos throughout event
- Create photo release dari your own photography

OPTION B: SIMULATED SCENARIO (If Real Event Unavailable)
Choose from:
#### 1. Product Launch Event - New tech gadget/service

#### 2. Corporate Award Ceremony - Company recognizes employees

#### 3. Community Service Activity - Brand CSR program

#### 4. Grand Opening - New facility/branch

#### 5. Partnership Announcement - Two organizations collaborate

For simulated scenario:
- Use stock photos atau staged photos with friends/family
- Create realistic scenario details
- Must still meet all quality standards

---

DELIVERABLES:

PART 1: PHOTO COLLECTION (40% dari tugas)

Requirements:
- Minimum 10 high-quality photos from event
- Variety: Wide shots (context), medium shots (action), close-ups (details)
- Mix: People, activities, environment, key moments
- Quality standards:
  □ Sharp focus (primary subjects)
  □ Proper exposure (no blown highlights or crushed shadows)
  □ Good composition (use principles learned)
  □ News-worthy moments captured
  □ Professional appearance

Organization:
- Folder: "PhotoCollection"
- Files: Numbered sequentially (Event_01.jpg, Event_02.jpg, etc.)
- Format: JPEG
- Size: 2000-3000px longest side, 300 DPI
- Naming: Descriptive dan consistent

Include:
- Photo log spreadsheet:
  * File name
  * Brief description of each photo
  * Technical details (if available): Camera settings, lighting notes
  * Why this photo was included

---

PART 2: SELECTED PHOTO RELEASE (30% dari tugas)

Choose your 1 best photo OR set of 3-5 photos for primary photo release.

Create professional photo release document:

For Single-Image Release:
- Complete header (logo, contact, date, location)
- Your best photo (high resolution)
- Caption (75-100 words): WHO, WHAT, WHERE, WHEN
- Extended information (150-200 words):
  * Event background
  * Significance
  * Key quote (dari spokesperson atau participant)
  * Future implications
- Photographer credit
- Copyright notice
- Company boilerplate (brief about organization)

For Multi-Image Release:
- Same header info
- 3-5 photos arranged professionally
- Individual captions untuk each photo
- Introductory paragraph (100-150 words)
- Overall event summary (100-150 words)
- Credits dan copyright

Technical Requirements:
- Format: PDF (print-ready)
- Page size: A4
- Resolution: High (images 300 DPI)
- Typography: Professional, readable
- Branding: Appropriate use of logos, colors
- File size: 5-15MB

---

PART 3: MEDIA DISTRIBUTION PACKAGE (20% dari tugas)

Prepare materials ready untuk actual distribution:

#### 1. EMAIL PITCH:

   Write email that would accompany photo release:
   - Subject line: Compelling, describes content
   - Body: Brief introduction, why newsworthy, photo release summary
   - Call-to-action: Invitation untuk use photos, offer interview
   - Length: 100-150 words
   - Professional tone

#### 2. SOCIAL MEDIA POSTS:

   Adapt photo release untuk social platforms:

**a. Instagram Post:**

      - 1 photo (1080×1080px)
      - Caption (150 words max)
      - Hashtags (10-15 relevant tags)
      - Tagged accounts (if applicable)

**b. LinkedIn Post:**

      - 1 photo (1200×628px)
      - Professional caption (200 words)
      - Appropriate tone untuk platform

**c. Twitter/X Post:**

      - 1 photo (1200×675px)
      - Tweet copy (280 characters max)
      - Relevant hashtags

#### 3. MEDIA LIST:

   Create target media list:
   - Minimum 10 media outlets
   - Include: Outlet name, type, target journalist/section
   - Organized by priority
   - Contact information

---

PART 4: REFLECTION DOCUMENT (10% dari tugas)

Write brief reflection (400-600 words):

#### 1. PROCESS:

   - How you selected/captured photos
   - Challenges encountered
   - How you applied course concepts

#### 2. DECISION-MAKING:

   - Why you chose specific photos
   - Caption writing approach
   - Layout design rationale

#### 3. LEARNING:

   - Key takeaways from assignment
   - Skills developed
   - Areas untuk improvement
   - How you'd approach differently next time

---

SUBMISSION:

Organize dalam folder:

NamaAnda_PhotoRelease/
├── 01_PhotoCollection/
│   ├── Event_01.jpg
│   ├── Event_02.jpg
│   ├── ...
│   └── PhotoLog.xlsx (atau .csv)
├── 02_PhotoRelease/
│   ├── PhotoRelease_Final.pdf
│   └── PhotoRelease_Source.svg (atau design file)
├── 03_DistributionPackage/
│   ├── EmailPitch.txt
│   ├── SocialMedia/
│   │   ├── Instagram_Post.jpg
│   │   ├── Instagram_Caption.txt
│   │   ├── LinkedIn_Post.jpg
│   │   ├── LinkedIn_Caption.txt
│   │   ├── Twitter_Post.jpg
│   │   └── Twitter_Caption.txt
│   └── MediaList.xlsx (atau .csv)
├── 04_Reflection/
│   └── Reflection.pdf
└── README.txt

README.txt contents:
- Your name dan student ID
- Chosen scenario
- Brief project description
- Software used
- Photo sources (if stock used, cite properly)
- Any special notes

---

RUBRIK PENILAIAN:

PART 1: Photo Collection (40 points)
#### 1. Quantity dan Variety (10 points)

   - Sufficient number of photos (10+)
   - Good variety (wide, medium, close-up)
   - Diverse moments captured
   - Coverage completeness

#### 2. Technical Quality (15 points)

   - Sharp focus dan clarity
   - Proper exposure
   - Good lighting
   - Professional appearance
   - Technical execution

#### 3. Composition dan Storytelling (15 points)

   - Effective composition principles
   - News value dan relevance
   - Story told through images
   - Emotional impact
   - Decisive moments captured

---

PART 2: Photo Release Document (30 points)
#### 1. Design dan Layout (10 points)

   - Professional appearance
   - Effective use of space
   - Typography choices
   - Brand consistency
   - Visual hierarchy

#### 2. Caption Quality (10 points)

   - Complete information (5Ws)
   - Accuracy dan clarity
   - Appropriate length
   - Proper style
   - Engaging writing

#### 3. Overall Presentation (10 points)

   - Polish dan professionalism
   - Attention to detail
   - Print-readiness
   - Cohesive package
   - Error-free content

---

PART 3: Distribution Package (20 points)
#### 1. Email Pitch (7 points)

   - Compelling subject line
   - Clear, concise body
   - Professional tone
   - Effective pitch

#### 2. Social Media Posts (8 points)

   - Platform-appropriate adaptations
   - Engaging captions
   - Proper formatting
   - Strategic hashtag use

#### 3. Media List (5 points)

   - Appropriate targets
   - Complete information
   - Organized presentation
   - Strategic prioritization

---

PART 4: Reflection (10 points)
- Thoughtful analysis
- Clear articulation
- Demonstrates learning
- Self-awareness
- Writing quality

---

TIPS FOR SUCCESS:

Photography:
- Scout location beforehand (if possible)
- Arrive early untuk setup
- Capture candid moments, not just posed
- Shoot more than you need (selection later)
- Vary angles dan perspectives
- Watch for background distractions
- Check technical settings frequently
- Capture "before" dan "after" shots

Caption Writing:
- Take notes during event (names, facts)
- Verify spelling of all names immediately
- Double-check all facts before finalizing
- Read captions aloud untuk flow
- Have someone else proofread
- Be specific dengan details
- Avoid vague language

Design:
- Start dengan photo selection (strongest images)
- Keep layout clean dan uncluttered
- Let photos be heroes
- Use templates for consistency
- Export at proper resolution
- Test: Open PDF on different devices

Distribution:
- Research media outlets thoroughly
- Personalize pitches when possible
- Timing matters - send strategically
- Follow up professionally
- Track: Who you sent to, when

Common Mistakes to Avoid:
- Poor photo quality (blurry, dark, underexposed)
- Missing essential caption information
- Typos dan factual errors
- Cluttered, unprofessional layout
- Wrong file formats atau sizes
- Disorganized submission
- Last-minute rush (impacts quality)

## REFERENSI DAN RESOURCES

### A. TUTORIAL VIDEOS (YouTube)

Search recommendations:
1. "Photo journalism basics tutorial"
   → Fundamentals of news photography
2. "How to write photo captions journalism"
   → Caption writing best practices
3. "Photoshop photo editing for press photos"
   → Ethical photo editing techniques (apply to GIMP)
4. "Event photography tips"
   → Capturing events effectively
5. "Press release photo tutorial"
   → Creating photo releases
6. "Composition techniques photography"
   → Advanced composition skills

### B. READING MATERIALS

1. "The Mind's Eye" by Henri Cartier-Bresson
   - Decisive moment concept
   - Photojournalism philosophy

#### 2. NPPA (National Press Photographers Association) Code of Ethics

   - Professional standards
   - Ethical guidelines

#### 3. AP Stylebook (Associated Press)

   - Caption writing style
   - Journalism standards

4. "Photo Editing and Presentation" - Online courses
   - Professional photo editing workflows
   - Presentation techniques

### C. TOOLS DAN SOFTWARE

#### 1. Photo Editing (Free):

   - GIMP: Comprehensive editing
   - Darktable: RAW processing
   - Photopea: Online Photoshop alternative
   - RawTherapee: Advanced RAW editor

#### 2. Layout Design (Free):

   - Inkscape: Vector layouts
   - Scribus: Desktop publishing
   - Canva: Template-based design
   - Google Docs: Simple layouts

#### 3. Stock Photos (Free) - For Practice:

   - Unsplash: High-quality images
   - Pexels: Diverse collection
   - Pixabay: Various subjects
   - Always credit appropriately

#### 4. Reference Tools:

   - AP Stylebook Online (paid, but worth it)
   - Photographer's Ephemeris: Light/sun planning
   - EXIF viewers: Photo metadata tools

### D. LEGAL RESOURCES

#### 1. Model Release Templates:

   - Search "model release form free template"
   - Customize untuk your jurisdiction
   - Have legal review if for commercial use

#### 2. Copyright Information:

   - Creative Commons: Understanding licenses
   - Local copyright laws: Indonesia-specific
   - Fair use doctrine: When applicable

### E. INSPIRATION SOURCES

#### 1. Award-Winning Press Photography:

   - World Press Photo (worldpressphoto.org)
   - Pulitzer Prize Photography
   - NPPA Best of Photojournalism

#### 2. News Agencies:

   - Reuters Pictures
   - AP Images
   - Getty News
   - Study captions dan composition

#### 3. Corporate PR Photo Releases:

   - Major company press rooms
   - Study how they present photo releases
   - Notice patterns dan best practices

## RANGKUMAN

Pertemuan ini has equipped you dengan comprehensive understanding dan skills
dalam photo release creation:

#### 1. CONCEPT UNDERSTANDING

   - Photo release definition dan purposes
   - Distinction from traditional press releases
   - Various types dan applications

#### 2. NEWS PHOTOGRAPHY PRINCIPLES

   - News value criteria dalam photography
   - Composition dan technical quality standards
   - Storytelling through images
   - Capturing decisive moments

#### 3. ETHICS DAN LEGALITIES

   - Acceptable vs unacceptable photo manipulation
   - Model releases dan consent
   - Copyright considerations
   - Privacy, dignity, dan credibility

#### 4. CAPTION WRITING

   - Essential elements (5 Ws)
   - Writing style dan best practices
   - Multilingual considerations
   - Accuracy dan completeness

#### 5. DESIGN DAN LAYOUT

   - Single-image format structure
   - Multi-image photo essay layouts
   - Technical specifications
   - Professional presentation

#### 6. DISTRIBUTION STRATEGY

   - Media outlets dan channels
   - Digital platforms optimization
   - Timing dan frequency
   - Pitch writing

Key Skills Developed:
- Evaluating photo news value
- Composing effective news photos
- Writing clear, informative captions
- Designing professional photo release layouts
- Understanding ethical dan legal aspects
- Strategic distribution planning

Photo release creation is valuable skill that combines photography, writing,
design, dan strategic communication - applicable dalam PR, journalism,
marketing, event management, dan various communication roles.

## PERSIAPAN PERTEMUAN BERIKUTNYA

Pertemuan 12: In-House Journal

Akan membahas:
- Corporate journalism dan internal communications
- In-house journal/magazine purpose dan types
- Editorial design principles
- Magazine layout techniques (grid systems, typography)
- Using GIMP/Inkscape untuk magazine layout
- Scribus introduction (desktop publishing software)

Persiapan:
#### 1. Collect examples: Company newsletters, in-house magazines, annual reports

#### 2. Study layouts: Notice grid systems, typography hierarchy

#### 3. Content planning: Think about content types dalam corporate magazines

#### 4. Software: Install Scribus (free desktop publishing software) - optional

Software yang akan digunakan:
- Inkscape: Layout design
- GIMP: Photo editing
- Scribus: Professional desktop publishing (recommended but optional)

Reading:
- Look at: Corporate magazine examples (print atau PDF)
- Study: Editorial design principles
- Research: Difference between internal vs external publications

Quiz 1: Will be conducted setelah materi presented

Sampai jumpa di pertemuan berikutnya!

# MODUL PERKULIAHAN DESAIN KOMUNIKASI VISUAL - PERTEMUAN 12

JUDUL: In House Journal

## SUB-CPMK

## Mahasiswa memahami dan mempraktikkan membuat in house journal sebagai tool

komunikasi internal organisasi, serta menguasai prinsip corporate journalism,
magazine layout design, dan editorial design untuk publikasi perusahaan.

## TUJUAN PEMBELAJARAN

## Setelah mengikuti perkuliahan ini, mahasiswa diharapkan mampu:

#### 1. Memahami fungsi dan tujuan in house journal dalam corporate communications

#### 2. Membedakan in house journal dari publikasi eksternal

#### 3. Menerapkan prinsip-prinsip corporate journalism

#### 4. Merancang magazine layout yang engaging dan readable

#### 5. Menggunakan grid systems secara efektif dalam editorial design

#### 6. Menerapkan typography principles untuk publikasi

#### 7. Menggunakan software (Scribus, GIMP, Canva) untuk journal production

#### 8. Mengevaluasi dan mengkritisi desain in house journal

#### 9. Memahami production workflow dari concept hingga distribution

## PENGANTAR MATERI

In house journal, juga dikenal sebagai employee magazine, corporate newsletter,
atau internal publication, adalah publikasi yang diproduksi oleh organisasi
untuk berkomunikasi dengan stakeholders internal - primarily employees, tetapi
juga dapat include shareholders, board members, dan key partners. Dalam era
digital di mana communication channels sangat beragam, in house journal
tetap menjadi important tool untuk building organizational culture, sharing
information, dan fostering employee engagement.

In house journal berbeda dari public relations materials atau marketing
collateral. Fokusnya adalah pada internal audience, dengan tone yang lebih
personal dan content yang lebih specifically relevant untuk organizational
community. It serves multiple purposes: informing employees tentang company
news dan developments, celebrating achievements, building sense of community,
reinforcing corporate values, dan providing platform untuk employee voices.

Design dari in house journal harus balance antara professional appearance
yang reflects organizational brand dengan approachable style yang encourages
reading dan engagement. Layout harus facilitate easy reading, guide readers
through content dengan clear hierarchy, dan create visually appealing
publication yang employees actually want to pick up dan read.

Editorial design adalah specialized field yang combines journalism, graphic
design, dan understanding of reader psychology. Successful editorial design
tidak hanya make publication look good - tetapi enhance comprehension,
improve readability, dan create engaging reading experience. Magazine layout
principles seperti grid systems, typography hierarchy, white space management,
dan visual pacing are all critical elements.

Pertemuan ini akan explore complete process dari creating in house journal:
dari understanding corporate journalism principles, planning content structure,
designing layouts menggunakan grid systems, applying editorial typography,
hingga production considerations. Anda akan learn menggunakan professional
tools (Scribus untuk desktop publishing, GIMP untuk image editing) dan
accessible alternatives (Canva) untuk execute your designs.

## MATERI

### A. IN HOUSE JOURNAL: TUJUAN DAN FUNGSI

#### 1. Definisi In House Journal

   In house journal adalah publikasi internal yang diproduksi oleh organisasi
   untuk berkomunikasi dengan employees dan internal stakeholders.

   Formats:
   - PRINT MAGAZINES: traditional glossy atau newsprint publications
   - DIGITAL NEWSLETTERS: PDF atau web-based versions
   - HYBRID: print + digital combination
   - EMAIL NEWSLETTERS: simpler, frequent communications
   - INTRANET CONTENT: web-published articles

   Frequency:
   - Monthly (most common)
   - Quarterly (for more substantial content)
   - Bi-weekly atau weekly (briefer formats)
   - Ad-hoc special editions

#### 2. Tujuan dan Fungsi

   PRIMARY PURPOSES:

**a. INFORM:**

      - Company news dan announcements
      - Strategic initiatives dan direction
      - Policy changes
      - Industry developments
      - Market performance

**b. ENGAGE:**

      - Employee recognition
      - Success stories
      - Human interest features
      - Community involvement
      - Social events

**c. UNIFY:**

      - Build organizational culture
      - Reinforce corporate values
      - Create shared identity
      - Connect dispersed locations
      - Bridge departmental silos

**d. EDUCATE:**

      - Professional development content
      - Skills training information
      - Health dan wellness tips
      - Benefits explanation
      - Process improvements

**e. MOTIVATE:**

      - Celebrate achievements
      - Highlight opportunities
      - Share inspiring stories
      - Recognize contributions
      - Build morale

#### 3. Karakteristik Effective In House Journal

   CONTENT CHARACTERISTICS:
   - RELEVANT: pertinent untuk employee interests dan needs
   - AUTHENTIC: genuine voice, not purely propaganda
   - BALANCED: mix dari serious dan lighter content
   - INCLUSIVE: represents diverse employee base
   - ACTIONABLE: includes information employees dapat use

   DESIGN CHARACTERISTICS:
   - PROFESSIONAL: reflects organizational standards
   - CONSISTENT: cohesive brand identity throughout
   - ACCESSIBLE: easy untuk read dan navigate
   - ENGAGING: visually interesting, draws readers in
   - APPROPRIATE: matches audience preferences dan context

#### 4. In House Journal vs External Publications

   Differences:

   | Aspect | In House Journal | External Publication |
   |--------|------------------|---------------------|
   | Audience | Internal (employees) | External (public, customers) |
   | Tone | Conversational, familiar | Polished, marketing-oriented |
   | Content | Internal news, employee focus | Brand messaging, product focus |
   | Access | Limited distribution | Public availability |
   | Purpose | Inform, engage employees | Attract, persuade customers |
   | Transparency | More candid, detailed | Curated, strategic messaging |

### B. CORPORATE JOURNALISM PRINCIPLES

#### 1. Apa itu Corporate Journalism?

   Corporate journalism applies journalistic principles dan practices dalam
   corporate communications context. It's about telling organizational stories
   dengan credibility, accuracy, dan engagement yang characterizes good
   journalism.

   Key principles:
   - ACCURACY: fact-checking, verification
   - FAIRNESS: balanced perspectives
   - CLARITY: clear, understandable writing
   - ENGAGEMENT: compelling storytelling
   - RESPONSIBILITY: ethical communication

#### 2. Story Types dalam In House Journal

**a. NEWS STORIES:**

      - Hard news: announcements, major developments
      - Feature news: expanded coverage dengan context
      - Updates: ongoing situation reporting

      Structure: Inverted pyramid (most important information first)

**b. FEATURE ARTICLES:**

      - Employee profiles
      - Department spotlights
      - Process explanations
      - Trend analysis

      Structure: More flexible, narrative-driven

**c. INTERVIEWS:**

      - Executive Q&A
      - Employee conversations
      - Expert insights

      Format: Q&A atau narrative integration

**d. OPINION PIECES:**

      - CEO messages
      - Employee perspectives
      - Expert commentary

      Clearly labeled as opinion

**e. INFORMATIONAL CONTENT:**

      - How-to guides
      - Tips dan advice
      - Resource listings

      Structure: Clear, step-by-step atau organized lists

#### 3. Writing for In House Journal

   STYLE GUIDELINES:

**a. TONE:**

      - Professional yet approachable
      - Conversational but not overly casual
      - Positive but realistic (avoid excessive cheerleading)
      - Respectful of audience intelligence

**b. LANGUAGE:**

      - Clear dan concise
      - Active voice preferred
      - Minimal jargon (atau explained when necessary)
      - Appropriate reading level (aim for 8th-10th grade)

**c. STRUCTURE:**

      - Strong headlines (informative dan engaging)
      - Compelling leads (hook readers immediately)
      - Short paragraphs (2-4 sentences ideal)
      - Subheadings for longer pieces
      - Conclusion or call-to-action

**d. CONTENT CONSIDERATIONS:**

      - Lead with most important information
      - Include relevant details (who, what, when, where, why, how)
      - Attribute information to sources
      - Use quotes untuk humanize dan add authenticity
      - Include practical implications for readers

#### 4. Ethical Considerations

   HONESTY:
   - Accurate reporting, no misleading information
   - Transparent about limitations atau challenges
   - Corrections published when errors occur

   BALANCE:
   - Present multiple perspectives when appropriate
   - Avoid pure propaganda (maintain credibility)
   - Include employee voices, not just management

   RESPECT:
   - Privacy considerations untuk employees featured
   - Sensitive handling of difficult topics
   - Inclusive representation

   RESPONSIBILITY:
   - Verify information before publication
   - Consider impact of published content
   - Maintain confidentiality when appropriate

### C. MAGAZINE LAYOUT DAN EDITORIAL DESIGN

#### 1. Anatomy of Magazine Layout

   KEY ELEMENTS:

**a. COVER:**

      - Masthead (publication name)
      - Cover image (high-impact visual)
      - Cover lines (teasers untuk inside content)
      - Issue information (date, volume, number)
      - Barcode (if applicable)

**b. TABLE OF CONTENTS:**

      - Section listings
      - Page numbers
      - Brief descriptions atau teasers
      - Visual navigation (thumbnails atau icons)

**c. FEATURE SPREADS:**

      - Headline
      - Deck (subheading)
      - Body text (columns)
      - Images (photos, illustrations, infographics)
      - Captions
      - Pull quotes
      - Bylines

**d. DEPARTMENTS:**

      - Regular sections (News, People, Calendar, dll)
      - Consistent styling for easy recognition
      - Shorter content pieces

**e. BACK COVER:**

      - Often used untuk closing message, image, atau ad
      - Contact information
      - Publication details

#### 2. Layout Design Principles

   VISUAL HIERARCHY:
   Create clear levels of importance:
   - PRIMARY: Main headline, hero image
   - SECONDARY: Subheadings, supporting images
   - TERTIARY: Body text, captions

   Tools:
   - Size variations
   - Weight contrast (bold vs regular)
   - Color differentiation
   - Spatial positioning

   BALANCE:
   - Symmetrical: formal, stable
   - Asymmetrical: dynamic, interesting
   - Radial: circular focus

   Consider:
   - Visual weight distribution
   - Color balance
   - Text-to-image ratio

   RHYTHM DAN PACING:
   - Vary layout styles (avoid monotony)
   - Alternate dense dan open spreads
   - Create visual breaks (white space, images)
   - Guide reading flow

   WHITE SPACE:
   - Not "wasted" space - essential design element
   - Provides visual rest
   - Improves readability
   - Creates sophistication
   - Directs attention

   Guidelines:
   - Adequate margins (minimum 0.5" for print)
   - Breathing room around elements
   - Generous leading (line spacing)
   - Don't crowd layouts

#### 3. Magazine Spread Design

   SPREAD: Two facing pages viewed together (left + right page).

   Design considerations:

**a. UNITY:**

      - Design spread as single compositional unit
      - Visual elements dapat cross gutter (center fold)
      - Color, style, typography connect both pages

**b. GUTTER:**

      - Center fold between pages
      - Consider binding method (perfect bound, saddle stitch)
      - Keep critical content away dari gutter (0.5" safe zone)
      - Images can span gutter if properly aligned

**c. FLOW:**

      - Guide eye through spread (typically left to right)
      - Create entry point (usually top-left atau focal image)
      - Establish reading path dengan layout
      - Exit point leads to next spread

**d. VARIETY:**

      - Mix layout styles throughout publication
      - Some spreads image-heavy, others text-heavy
      - Vary column structures
      - Different approaches untuk features vs departments

#### 4. Common Magazine Layouts

**a. MONDRIAN LAYOUT:**

      - Grid-based, asymmetrical
      - Rectangular blocks of varying sizes
      - Clean, modern aesthetic
      - Good untuk mixed content (text + images)

**b. CIRCUS LAYOUT:**

      - Busy, dynamic, lots happening
      - Multiple entry points
      - Various fonts, sizes, angles
      - High energy (use sparingly)

**c. SILHOUETTE LAYOUT:**

      - Images dengan backgrounds removed
      - Text wraps around image contours
      - Dynamic, eye-catching
      - Requires skilled execution

**d. FRAME LAYOUT:**

      - Content framed by borders, boxes, atau shapes
      - Creates contained units
      - Helps organize complex information
      - Can feel formal atau structured

**e. BIG PICTURE LAYOUT:**

      - Dominant image (full spread atau large portion)
      - Minimal text overlaid atau pada margin
      - High visual impact
      - Best untuk compelling imagery

**f. MULTI-COLUMN TEXT:**

      - Traditional magazine approach
      - 2-3 columns typical
      - Readable line lengths
      - Professional, accessible

### D. GRID SYSTEMS

#### 1. Understanding Grid Systems

   Grid system adalah underlying structure yang organizes page elements
   secara consistent dan harmonious.

   Benefits:
   - CONSISTENCY: unified look across pages
   - EFFICIENCY: faster design decisions
   - FLEXIBILITY: structure + creative freedom
   - PROFESSIONALISM: polished appearance
   - RHYTHM: predictable patterns aid navigation

#### 2. Grid Components

   COLUMNS:
   - Vertical divisions dari page
   - Common: 3, 4, atau 6 columns untuk magazines
   - Text flows within columns
   - Can span multiple columns untuk variation

   MODULES:
   - Intersections dari rows + columns
   - Create units untuk placing elements
   - Flexible building blocks

   GUTTERS:
   - Spaces between columns
   - Typically 1-2 picas (atau 3-5mm)
   - Consistent spacing throughout

   MARGINS:
   - Space around page edges
   - Top (head), bottom (foot), left, right
   - Print: typically 0.5-1" (12-25mm)
   - Web: varies based on design

   FLOWLINES:
   - Horizontal guides
   - Create horizontal zones
   - Aid vertical alignment

#### 3. Common Grid Types untuk Magazines

**a. MANUSCRIPT GRID (Single Column):**

      - One column untuk text
      - Simplest structure
      - Used untuk text-heavy content (books, reports)
      - Less common untuk modern magazines

**b. COLUMN GRID (Multi-Column):**

      - Multiple equal-width columns
      - Most common untuk magazines (3-4 columns)
      - Flexible: elements dapat span 1, 2, atau more columns
      - Readable line lengths
      - Professional standard

**c. MODULAR GRID:**

      - Columns + rows create modules
      - Very structured
      - Excellent untuk complex layouts
      - Consistent placement
      - Works well dengan mixed content types

**d. HIERARCHICAL GRID:**

      - Custom proportions based on content needs
      - More organic, less rigid
      - Columns of varying widths
      - Flexible but requires more design skill

#### 4. Implementing Grids dalam Design Software

   SCRIBUS:
#### 1. New Document → set page size

#### 2. Page → Manage Guides → create grid

#### 3. Set columns (3-4 typical)

#### 4. Set gutter width

#### 5. Add margins

#### 6. Save as template untuk consistency

   Features:
   - Snap to guides (enable dalam View menu)
   - Master pages untuk consistent grids
   - Layer management

   CANVA:
   - More limited grid control
   - Use "Elements → Grids" untuk preset layouts
   - Manually align dengan guides (View → Show rulers/guides)
   - Group elements untuk maintain alignments

   GIMP:
   - Primarily untuk image editing, less ideal untuk layouts
   - Can set up guides (Image → Guides → New Guide)
   - Use untuk preparing images untuk layout software

#### 5. Working Dengan Grids

   GUIDELINES:

**a. USE THE GRID:**

      - Align text blocks to grid
      - Size images to grid modules
      - Respect gutters dan margins

**b. BREAK THE GRID (INTENTIONALLY):**

      - Occasional breaking creates visual interest
      - Must be deliberate, not accidental
      - Maintains overall structure
      - Used untuk emphasis atau focal points

**c. MAINTAIN CONSISTENCY:**

      - Same grid throughout publication
      - Consistent alignment patterns
      - Predictable structure aids navigation

**d. FLEXIBILITY WITHIN STRUCTURE:**

      - Vary column spans (1-column, 2-column, dll)
      - Different image sizes (within grid increments)
      - Mix layouts while respecting underlying grid

### E. TYPOGRAPHY UNTUK PUBLICATIONS

#### 1. Typography Hierarchy dalam Magazines

   LEVELS:

**a. HEADLINE (Level 1):**

      - Largest type
      - Most weight (bold)
      - Primary attention-getter
      - Size: 24-48pt (print), larger untuk digital
      - Font: Display atau bold version dari body font

**b. SUBHEADING / DECK (Level 2):**

      - Clarifies atau expands headline
      - Secondary emphasis
      - Size: 14-18pt
      - Can be different weight atau style

**c. BODY TEXT (Level 3):**

      - Main content
      - Must be highly readable
      - Size: 9-12pt (print), 16-18px (web)
      - Font: Serif atau sans-serif (depending on style)

**d. CAPTIONS (Level 4):**

      - Describes images
      - Smaller than body
      - Size: 8-10pt
      - Often italic atau different font

**e. LABELS / METADATA:**

      - Bylines, dates, categories
      - Small, subtle
      - Size: 7-9pt
      - Often all caps atau different color

#### 2. Font Selection untuk Editorial Design

   BODY TEXT FONTS:

   Best practices:
   - High readability essential
   - Serif traditional choice (Georgia, Garamond, Minion)
   - Sans-serif increasingly common (Helvetica, Open Sans)
   - Appropriate x-height (taller x-height = more readable at small sizes)
   - Clear letterforms (distinct characters, no ambiguity)

   Avoid:
   - Overly decorative fonts untuk body text
   - Extremes (too thin, too bold)
   - Poor letter spacing

   HEADLINE FONTS:

   Options:
   - Bold version dari body font (most conservative, safe)
   - Contrasting display font (more personality)
   - Sans-serif headlines + serif body (classic combination)
   - Serif headlines + sans body (modern alternative)

   Considerations:
   - Personality matches publication tone
   - Readable at larger sizes
   - Strong character (visual impact)

   FONT PAIRING GUIDELINES:
   - Limit to 2-3 font families max
   - Ensure sufficient contrast (if using multiple)
   - Maintain consistency throughout publication
   - Test readability at intended sizes

#### 3. Typography Best Practices

   READABILITY:

**a. LINE LENGTH:**

      - Optimal: 50-75 characters per line (print)
      - Too long: eye fatigue, lose place
      - Too short: choppy reading, frequent line breaks
      - Solution: multi-column layouts

**b. LINE SPACING (LEADING):**

      - Print: 120-145% dari font size
      - Example: 10pt text = 12-14.5pt leading
      - More leading untuk longer line lengths
      - Sans-serif needs slightly more leading than serif

**c. PARAGRAPH SPACING:**

      - Space between paragraphs: 0.5-1× leading
      - First line indent: 1-2 em spaces
      - Either indent OR space between paragraphs, not both

**d. ALIGNMENT:**

      - Left-aligned (flush left): most readable untuk body text
      - Justified: traditional magazine style (requires careful hyphenation)
      - Centered: use sparingly (headlines, short text)
      - Right-aligned: rarely used (captions sometimes)

**e. HYPHENATION:**

      - Enable untuk justified text (prevent large gaps)
      - No more than 2-3 consecutive hyphens
      - Avoid hyphenating proper nouns

**f. WIDOWS & ORPHANS:**

      - Widow: single line at top of column
      - Orphan: single line at bottom of column
      - Avoid both (adjust tracking atau rewrite slightly)

#### 4. Special Typography Elements

   DROP CAPS:
   - Large first letter starting paragraph
   - Visually engaging entry point
   - Height: 2-4 lines typical
   - Use at story beginnings atau major sections

   PULL QUOTES:
   - Extracted quotation displayed prominently
   - Larger type than body
   - Boxed, colored, atau stylized
   - Functions: break up text, highlight key points, visual interest
   - Guidelines: verbatim from text, properly attributed

   CALLOUTS:
   - Highlighted facts, statistics, atau key points
   - Set apart visually (box, color, icons)
   - Scannable information
   - Complement main text

   INITIAL LINES:
   - First few words dalam distinctive style
   - All caps, different color, bold, etc.
   - Eases transition into body text
   - Subtle alternative to drop caps

### F. PRODUCTION WORKFLOW

#### 1. Planning Phase

**a. CONTENT PLANNING:**

      - Editorial calendar (upcoming issues)
      - Story list (what will be covered)
      - Content assignments (who writes what)
      - Deadlines untuk article submission
      - Image needs (photography, illustrations)

**b. DESIGN PLANNING:**

      - Overall page count (typically multiples of 4)
      - Section allocation (how many pages to each section)
      - Cover concept
      - Feature story layouts
      - Ad atau filler content placement

#### 2. Content Development

**a. WRITING:**

      - Research dan interviews
      - Writing drafts
      - Editorial review dan feedback
      - Revisions
      - Copyediting (grammar, style)
      - Proofreading

**b. VISUAL CONTENT:**

      - Photography (schedule shoots, select images)
      - Image editing (GIMP: color correction, cropping, resizing)
      - Illustrations (create atau commission)
      - Infographics design
      - Charts/graphs creation

#### 3. Design Phase

   USING SCRIBUS (desktop publishing):

**a. SETUP:**

      - Create document (File → New)
      - Set page size (typically A4 atau US Letter untuk in house journals)
      - Define margins dan columns
      - Create master pages (consistent headers, footers, page numbers)
      - Set up color styles, paragraph styles, character styles

**b. LAYOUT:**

      - Place text (File → Import → Get Text)
      - Text frames dengan linked flow
      - Place images (File → Import → Get Image)
      - Adjust sizing, cropping, positioning
      - Apply styles untuk consistency
      - Create headlines, subheadings, captions
      - Add page numbers, headers/footers

**c. REFINEMENT:**

      - Check alignment (everything on grid)
      - Adjust spacing (consistent throughout)
      - Fine-tune typography (tracking, leading)
      - Eliminate widows/orphans
      - Verify all content included

   USING CANVA (simpler alternative):
   - Select magazine template atau custom dimensions
   - Replace template content with your text/images
   - Adjust colors untuk match brand
   - Maintain consistent styles across pages
   - Export as PDF

#### 4. Review Dan Approval

   REVIEW ROUNDS:

**a. DESIGN REVIEW:**

      - Check layout quality
      - Verify visual consistency
      - Ensure brand compliance
      - Test readability

**b. CONTENT REVIEW:**

      - Verify accuracy of all information
      - Check names, titles, dates
      - Review quotes dan attributions
      - Ensure appropriate tone

**c. LEGAL/COMPLIANCE REVIEW (if applicable):**

      - Confidential information check
      - Privacy considerations
      - Copyright untuk images
      - Regulatory compliance

**d. FINAL PROOFREADING:**

      - Typos, grammar errors
      - Formatting consistency
      - Page numbers sequential
      - No missing images atau text overflow

#### 5. Production Dan Distribution

   PRINT PRODUCTION:

**a. FILE PREPARATION:**

      - Convert to PDF (PDF/X-3 standard untuk print)
      - Embed all fonts
      - Convert images to CMYK
      - Set proper resolution (300 dpi)
      - Include bleeds if needed (3mm typical)
      - Add crop marks (if requested by printer)

**b. PROOFING:**

      - Request proof dari printer
      - Check color accuracy
      - Verify no technical issues
      - Sign off on proof

**c. PRINTING:**

      - Send final file to printer
      - Specify quantity, paper stock, binding
      - Confirm delivery schedule

**d. DISTRIBUTION:**

      - Delivery to locations
      - Mail to individual employees (if appropriate)
      - Display in common areas

   DIGITAL PRODUCTION:

**a. FILE PREPARATION:**

      - Export as PDF (optimized untuk screen, 150 dpi)
      - Smaller file size (compression)
      - Include hyperlinks if applicable
      - Ensure accessibility (tagged PDF)

**b. DISTRIBUTION:**

      - Email to employee list
      - Upload to intranet
      - Post to company app
      - Archive previous issues

**c. TRACKING:**

      - Open rates (for emailed versions)
      - Download statistics
      - Readership feedback

## VIDEO PEMBELAJARAN YANG DIREKOMENDASIKAN

Untuk memperdalam pemahaman tentang In House Journal dan editorial design,
mahasiswa dapat mencari video pembelajaran di YouTube dengan kata kunci
berikut:

1. "Magazine layout design" + "tutorial"
   - Pencarian: [https://www.youtube.com/results?search_query=magazine+layout+design+tutorial](https://www.youtube.com/results?search_query=magazine+layout+design+tutorial)

2. "Editorial design" + "principles"
   - Pencarian: [https://www.youtube.com/results?search_query=editorial+design+principles](https://www.youtube.com/results?search_query=editorial+design+principles)

3. "Scribus tutorial" + "magazine"
   - Pencarian: [https://www.youtube.com/results?search_query=scribus+tutorial+magazine](https://www.youtube.com/results?search_query=scribus+tutorial+magazine)

4. "Grid system" + "magazine design"
   - Pencarian: [https://www.youtube.com/results?search_query=grid+system+magazine+design](https://www.youtube.com/results?search_query=grid+system+magazine+design)

5. "Typography" + "editorial design"
   - Pencarian: [https://www.youtube.com/results?search_query=typography+editorial+design](https://www.youtube.com/results?search_query=typography+editorial+design)

6. "InDesign techniques" + "magazine" (applicable to Scribus)
   - Pencarian: [https://www.youtube.com/results?search_query=indesign+magazine+techniques](https://www.youtube.com/results?search_query=indesign+magazine+techniques)

7. "Corporate journalism" + "internal communications"
   - Pencarian: [https://www.youtube.com/results?search_query=corporate+journalism+internal+communications](https://www.youtube.com/results?search_query=corporate+journalism+internal+communications)

8. "Magazine spread design" + "examples"
   - Pencarian: [https://www.youtube.com/results?search_query=magazine+spread+design+examples](https://www.youtube.com/results?search_query=magazine+spread+design+examples)

## PRAKTIKUM

PRAKTIKUM 1: GRID SYSTEM ANALYSIS DAN APPLICATION

Tujuan:
Memahami dan menganalisis penggunaan grid systems dalam magazine design,
kemudian mengaplikasikan dalam layout design.

Instruksi:

PART A: GRID ANALYSIS

#### 1. Collect Magazine Examples

   - Find 3 different magazine spreads (digital screenshots atau photos)
   - Variety: different styles, purposes, layouts
   - Can be: fashion, business, lifestyle, corporate magazines

#### 2. Grid Identification untuk Each Spread

### A. VISUAL ANALYSIS:

      - Print atau digitally annotate spread
      - Draw vertical lines showing column divisions
      - Draw horizontal lines showing alignment points
      - Highlight margins
      - Mark gutter

### B. DOCUMENTATION (untuk each spread):

      - Number of columns: [...]
      - Gutter width (estimate): [...]
      - Margin sizes: [...]
      - Grid type: manuscript, column, modular, hierarchical
      - How content aligned to grid
      - Where grid is broken (intentionally)

### C. EVALUATION:

      - Effectiveness dari grid (1-10 rating)
      - How grid supports content
      - Strengths dari layout
      - Weaknesses atau improvements

#### 3. Comparative Analysis (1 page)

   - Compare the three grids
   - Different approaches, different effects
   - Which most effective dan why?
   - Key takeaways untuk your design work

PART B: GRID APPLICATION

#### 4. Design Your Own Grid

   Create 3 different grid templates untuk magazine layouts:

   Template 1: 3-COLUMN GRID
   - Page size: A4
   - 3 equal columns
   - Appropriate gutters dan margins
   - Design 1 spread using this grid

   Template 2: 4-COLUMN GRID
   - Page size: A4
   - 4 equal columns
   - Design 1 spread using this grid

   Template 3: MODULAR GRID
   - Page size: A4
   - Multiple columns + rows
   - Design 1 spread using this grid

   For each spread:
   - Include placeholder content (lorem ipsum text acceptable)
   - Add 1-2 images (can be stock photos)
   - Headlines, subheadings, body text, captions
   - Demonstrate grid usage

#### 5. Tools

   - Scribus (recommended)
   - Canva (acceptable alternative)
   - Paper sketches first, then digital

Deliverables:
- Grid analysis (PDF, 3-4 pages, includes annotated spreads)
- Comparative analysis (PDF, 1 page)
- Three digital grid templates dengan sample spreads (PDF atau Scribus files)
- Brief reflection (1 page): process, challenges, learnings

PRAKTIKUM 2: IN HOUSE JOURNAL SPREAD DESIGN

Tujuan:
Design professional-quality magazine spread untuk fictional in house journal.

Instruksi:

#### 1. Context Selection (choose one):

   - Technology company employee magazine
   - Healthcare organization internal newsletter
   - University staff publication
   - NGO team journal
   - Manufacturing company employee news

#### 2. Content Creation

   Develop content untuk one feature story spread (2 pages):

### A. ARTICLE:

      - Topic: employee achievement, department spotlight, company initiative,
        atau success story
      - Length: 400-600 words
      - Include: headline, deck, byline, body text
      - Write actual content (no lorem ipsum untuk final version)

### B. VISUAL ELEMENTS:

      - Main image: hero photo untuk spread (use stock photo if needed)
      - Secondary image(s): 1-2 supporting photos
      - Pull quote: extract compelling quote dari article
      - Caption(s) untuk images
      - Optional: callout box dengan key fact atau statistic

#### 3. Design Requirements

   TECHNICAL:
   - Size: A4 spread (two facing A4 pages)
   - Grid system: clearly defined (3 atau 4 columns recommended)
   - Software: Scribus atau Canva
   - Professional quality

   LAYOUT ELEMENTS:
   - Headline (prominent, engaging)
   - Deck/subheading
   - Body text (multi-column layout)
   - Minimum 1 hero image
   - Pull quote
   - Captions
   - Page numbers
   - Section identifier (optional: "Features", "People", dll)

   DESIGN QUALITY:
   - Clear visual hierarchy
   - Proper typography (readable sizes, appropriate leading)
   - Balanced composition
   - Effective white space usage
   - Grid adherence
   - Color scheme (2-3 colors + neutrals)
   - Brand consistency

#### 4. Design Process

### A. PLANNING:

      - Sketch rough layout (thumbnail sketches, 2-3 options)
      - Select best concept
      - Plan grid structure
      - Choose typography (heading + body fonts)
      - Define color palette

### B. EXECUTION:

      - Set up document dengan proper grid
      - Create master page untuk consistent elements
      - Place text dan images
      - Apply typography hierarchy
      - Refine spacing dan alignment
      - Add finishing touches

### C. REVIEW:

      - Check all text (typos, grammar)
      - Verify visual consistency
      - Test readability (ask someone else to read)
      - Ensure nothing cut off atau partially visible
      - Export as high-quality PDF

#### 5. Documentation

   Create brief design rationale (1-2 pages):
   - Target audience description
   - Design decisions (grid choice, typography, colors)
   - How design supports content
   - Challenges encountered
   - Solutions implemented

Deliverables:
- Thumbnail sketches (photos atau scans)
- Final magazine spread (PDF, high quality)
- Source files (Scribus .sla atau Canva link)
- Design rationale (PDF, 1-2 pages)
- Article text (separate document for easy reading/grading)

## QUIZ 1

KUIS 1: MATERI PERTEMUAN 1-12

Jadwal: [Dilaksanakan pada pertemuan ini atau minggu berikutnya]
Durasi: 60 menit
Format: Multiple choice, short answer, dan analisis kasus

Cakupan Materi:
#### 1. Kontrak kuliah dan orientasi DKV (Pertemuan 1)

#### 2. Visual perception dan Gestalt principles (Pertemuan 2)

#### 3. Visual rhetoric (Pertemuan 3)

#### 4. Semiotics dan visual syntax (Pertemuan 4)

#### 5. Visual attention principles (Pertemuan 5)

#### 6. Brand identity dan corporate visual systems (Pertemuan 6)

#### 7. Software desain grafis 2D - GIMP dan Canva (Pertemuan 7)

#### 8. Desain untuk media sosial (Pertemuan 8)

#### 9. Advanced vector graphics - Inkscape (Pertemuan 9)

#### 10. Tools promosi (cetak, audio visual, online) (Pertemuan 10)

#### 11. Photo release (Pertemuan 11)

#### 12. In house journal (Pertemuan 12)

Tipe Pertanyaan:

### A. MULTIPLE CHOICE (40 points)

   - Konsep fundamental dari setiap pertemuan
   - Definisi terminology
   - Aplikasi principles
   - Software knowledge

### B. SHORT ANSWER (30 points)

   - Explain concepts briefly
   - Identify examples
   - Compare/contrast ideas
   - Practical applications

### C. CASE ANALYSIS (30 points)

   - Visual analysis using learned principles
   - Design problem-solving
   - Critical evaluation
   - Application of multiple concepts

Preparation Tips:
#### 1. Review all lecture materials dari Pertemuan 1-12

#### 2. Practice identifying principles dalam real-world examples

#### 3. Understand relationships between concepts across different topics

#### 4. Review key terminology dan definitions

#### 5. Study practical applications dari theories

#### 6. Review software functionalities (GIMP, Inkscape, Canva, Scribus)

## RINGKASAN

Pertemuan kedua belas ini mengeksplorasi in house journal sebagai corporate
communications tool dan editorial design principles:

#### 1. In House Journal Fundamentals

   - Internal publication untuk employee engagement
   - Functions: inform, engage, unify, educate, motivate
   - Different dari external publications dalam audience, tone, dan purpose
   - Effective journals are relevant, authentic, balanced, inclusive
   - Formats: print magazines, digital newsletters, hybrid approaches

#### 2. Corporate Journalism

   - Applies journalistic principles dalam corporate context
   - Story types: news, features, interviews, opinion, informational
   - Writing style: professional yet approachable, clear, engaging
   - Ethical considerations: honesty, balance, respect, responsibility
   - Structure: inverted pyramid untuk news, flexible untuk features

#### 3. Magazine Layout dan Editorial Design

   - Anatomy: cover, TOC, feature spreads, departments, back cover
   - Design principles: visual hierarchy, balance, rhythm, white space
   - Spread design: unity across facing pages, gutter considerations
   - Common layouts: Mondrian, circus, silhouette, frame, big picture
   - Variety essential untuk maintaining reader interest

#### 4. Grid Systems

   - Underlying structure untuk consistent organization
   - Components: columns, modules, gutters, margins, flowlines
   - Types: manuscript, column, modular, hierarchical grids
   - Implementation dalam Scribus dan Canva
   - Use consistently but break intentionally untuk emphasis

#### 5. Typography untuk Publications

   - Hierarchy: headlines, subheadings, body text, captions, labels
   - Font selection: readability primary concern untuk body text
   - Best practices: optimal line length, proper leading, paragraph spacing
   - Special elements: drop caps, pull quotes, callouts, initial lines
   - Pairing guidelines: 2-3 font families maximum

#### 6. Production Workflow

   - Planning: content calendar, story list, page allocation
   - Development: writing, editing, visual content creation
   - Design: setup dalam Scribus/Canva, layout, refinement
   - Review: design review, content review, compliance, proofreading
   - Production: print (CMYK, 300 dpi, bleeds) atau digital (optimized PDF)

Dengan knowledge ini, Anda dapat:
- Understand purpose dan function dari in house journals
- Apply corporate journalism principles
- Design professional magazine layouts
- Utilize grid systems effectively
- Implement proper typography hierarchy
- Execute complete production workflow
- Create engaging internal publications

## RESOURCE TAMBAHAN

SOFTWARE:
- Scribus: download dari scribus.net (free, open-source desktop publishing)
- GIMP: gimp.org (for image editing)
- Canva: canva.com (web-based, easier alternative)

INSPIRATION:
- Issuu: browse digital magazines untuk layout ideas
- Behance: search "editorial design" atau "magazine layout"
- Pinterest: magazine design boards
- Award sites: Society of Publication Designers

LEARNING RESOURCES:
- "Thinking with Type" - Ellen Lupton (typography reference)
- "Making and Breaking the Grid" - Timothy Samara
- "The Elements of Typographic Style" - Robert Bringhurst
- Magazine Design tutorials on YouTube

TEMPLATES:
- Canva: built-in magazine templates
- Scribus Wiki: free templates dan resources
- GraphicRiver: premium templates (for inspiration)

STOCK IMAGES:
- Unsplash, Pexels: free high-quality photos
- Pixabay: free images dan vectors

EDITORIAL EXAMPLES:
- Company annual reports (similar editorial style)
- University magazines (often well-designed in-house publications)
- Corporate blogs formatted attractively

## PERSIAPAN PERTEMUAN SELANJUTNYA

Pertemuan berikutnya akan fokus pada topik berikutnya dalam silabus.
Mahasiswa diharapkan:

#### 1. Selesaikan Praktikum

   - Complete grid analysis
   - Finish magazine spread design
   - Submit all deliverables on time

#### 2. Prepare untuk Quiz 1

   - Review all materials dari Pertemuan 1-12
   - Study key concepts dan terminology
   - Practice analyzing visual examples
   - Refresh software knowledge
   - Prepare questions untuk clarification

#### 3. Portfolio Building

   - Compile best works so far:
     * Visual rhetoric analysis (Pertemuan 3)
     * Semiotics project (Pertemuan 4)
     * Vector illustration (Pertemuan 9)
     * Promotional campaign (Pertemuan 10)
     * Photo release (Pertemuan 11)
     * Magazine spread (Pertemuan 12)
   - Organize professionally
   - Consider creating portfolio website atau PDF

#### 4. Reflection

   - Review first half of course
   - Identify strengths dan areas untuk improvement
   - Set goals untuk remainder of semester
   - Consider how concepts integrate dan build upon each other

Excellent work on completing first half dari course material! Next phase
akan build upon these foundations dengan more specialized applications dan
advanced techniques.

# MODUL PERKULIAHAN DESAIN KOMUNIKASI VISUAL - PERTEMUAN 13

JUDUL: Digital Brosur/Pamflet dan Email Direct Marketing (EDM)

## SUB-CPMK

## Mahasiswa memahami dan mempraktikkan membuat digital brosur/pamflet dan Email

Direct Marketing (EDM), serta menguasai prinsip-prinsip desain interaktif,
mobile-responsive design, dan direct marketing communication untuk media
digital.

## TUJUAN PEMBELAJARAN

## Setelah mengikuti perkuliahan ini, mahasiswa diharapkan mampu:

#### 1. Memahami perbedaan fundamental antara digital dan print brosur/pamflet

#### 2. Merancang interactive PDF dengan navigasi dan elemen interaktif

#### 3. Menerapkan email marketing best practices dalam desain EDM

#### 4. Mengimplementasikan mobile-responsive design principles

#### 5. Merancang visual hierarchy yang efektif untuk email marketing

#### 6. Membuat compelling Call-to-Action (CTA) yang mendorong konversi

#### 7. Menggunakan Canva dan GIMP untuk production digital brosur dan EDM

#### 8. Memahami A/B testing principles untuk optimasi campaign

#### 9. Mengevaluasi metrics dan analytics untuk email marketing success

#### 10. Menerapkan accessibility standards dalam digital marketing materials

## PENGANTAR MATERI

Digital brosur dan Email Direct Marketing (EDM) represents evolution dari
traditional print marketing materials ke digital realm. Sementara print
brosur masih memiliki tempat dalam marketing mix, digital versions menawarkan
advantages yang significant: interactivity, tracking capabilities, easier
distribution, cost-effectiveness, dan ability untuk immediate updates.

Digital brosur bukan sekadar PDF version dari print brochure. Interactive
digital brosur dapat include clickable navigation, embedded videos, hyperlinks
ke additional resources, form fields, dan bahkan animations. Mereka dapat
distributed via email, downloaded dari websites, atau shared melalui social
media. Portability dan accessibility membuat digital brosur ideal untuk
modern consumer yang primarily consume content on digital devices.

Email Direct Marketing (EDM) adalah salah satu most effective digital
marketing channels, dengan ROI (Return on Investment) yang consistently
outperforms many other marketing tactics. Successful EDM bukan hanya tentang
sending mass emails - tetapi tentang creating targeted, personalized,
valuable content yang resonates dengan recipients dan drives specific actions.
Design plays critical role dalam success ini: email harus immediately grab
attention, clearly communicate value proposition, dan guide readers toward
desired action dengan intuitive visual flow.

Mobile-responsive design adalah non-negotiable requirement untuk modern EDM.
Lebih dari 60% emails opened on mobile devices, meaning your design harus
work perfectly across various screen sizes. Single-column layouts, large
touch-friendly buttons, optimized images, dan readable typography tanpa
zooming adalah essential considerations.

Visual hierarchy dalam EDM context berbeda dari traditional print design.
Email readers scan quickly - typical attention span hanya beberapa detik.
Your design harus instantly communicate who sent email, what it's about, dan
why reader should care. Header, subject relevance, compelling visuals, clear
messaging, prominent CTA - semua elements harus work together dalam limited
space dan limited attention window.

A/B testing adalah powerful technique untuk optimizing EDM performance. Dengan
testing different design elements (subject lines, images, CTA placements,
color schemes, content lengths), marketers dapat data-driven decisions tentang
what works best untuk their specific audience. Understanding testing
methodology dan interpretation of results adalah valuable skill for designers
working dalam digital marketing.

Pertemuan ini akan comprehensive coverage dari digital brosur production
hingga sophisticated EDM campaign creation. Anda akan learn practical
techniques menggunakan accessible tools (Canva, GIMP) sambil understanding
strategic principles yang ensure your digital marketing materials effectively
engage audiences dan achieve campaign objectives.

## MATERI

### A. DIGITAL VS PRINT BROSUR: FUNDAMENTAL DIFFERENCES

#### 1. Karakteristik Digital Brosur

   ADVANTAGES OVER PRINT:

**a. COST-EFFECTIVENESS:**

      - No printing costs
      - No physical distribution costs
      - Easy updates tanpa reprinting
      - Unlimited copies at no additional cost
      - Savings scale significantly dengan volume

**b. DISTRIBUTION:**

      - Instant delivery via email atau download
      - Global reach tanpa geographical barriers
      - Viral potential melalui social sharing
      - Targetable distribution lists
      - Trackable delivery dan open rates

**c. INTERACTIVITY:**

      - Clickable navigation menus
      - Embedded multimedia (video, audio)
      - Interactive forms dan calculators
      - Live links ke websites atau resources
      - Dynamic content updates

**d. ANALYTICS:**

      - Track opens dan downloads
      - Monitor link clicks dan engagement
      - Identify popular content sections
      - Geographic dan device usage data
      - Time-based interaction patterns

**e. ACCESSIBILITY:**

      - Available 24/7 from anywhere
      - Searchable content
      - Text-to-speech compatible
      - Multiple language versions easy
      - No physical storage requirements

   CONSIDERATIONS:

   - Requires device untuk viewing
   - Digital literacy necessary
   - Internet connection may be needed
   - Screen fatigue dari reading
   - Less tangible, physical presence
   - Potential email spam filters

#### 2. Design Considerations untuk Digital Format

   SCREEN-OPTIMIZED DESIGN:

**a. RESOLUTION DAN SIZE:**

      - Design untuk screen resolution (72-96 DPI sufficient)
      - Horizontal orientation often better (landscape)
      - Consider standard screen ratios (16:9, 4:3)
      - File size optimization crucial untuk loading
      - Responsive layouts untuk various devices

**b. COLOR MODE:**

      - RGB color mode (not CMYK)
      - Consider screen brightness variability
      - Test pada different displays
      - Web-safe color palettes helpful
      - High contrast untuk readability

**c. TYPOGRAPHY:**

      - Sans-serif fonts generally more readable
      - Minimum 12pt body text untuk screens
      - Short line lengths (50-75 characters)
      - Generous line spacing for comfort
      - Embedded fonts atau web-safe alternatives

**d. NAVIGATION:**

      - Clear table of contents dengan hyperlinks
      - Bookmarks untuk major sections
      - "Back to top" buttons
      - Page numbers dan clear structure
      - Intuitive navigation flow

**e. FILE FORMAT:**

      - PDF most versatile (interactive PDFs)
      - HTML5 for maximum interactivity
      - ePub untuk document readers
      - Web-based flip-books untuk realistic experience
      - Consider platform compatibility

#### 3. Interactive PDF Features

   NAVIGATION ELEMENTS:

   - Bookmarks panel untuk chapter/section access
   - Internal hyperlinks untuk cross-referencing
   - Table of contents dengan active links
   - Navigation buttons (next, previous, home)
   - Clickable page thumbnails

   INTERACTIVE COMPONENTS:

   - Form fields (text boxes, checkboxes, dropdowns)
   - Buttons with custom actions
   - Embedded video dan audio players
   - Pop-up tooltips dan explanations
   - Rollover effects untuk images

   MULTIMEDIA INTEGRATION:

   - Embedded video files
   - Audio narrations
   - Animated graphics (GIF atau Flash)
   - External links ke online content
   - Social media sharing buttons

   IMPLEMENTATION TOOLS:

   - Scribus: open-source desktop publishing, PDF dengan basic interactivity
   - LibreOffice Writer: dapat create interactive PDFs
   - Canva Pro: support untuk clickable links
   - Adobe Acrobat (expensive tapi most powerful)
   - Online PDF editors untuk adding interactive elements

### B. EMAIL MARKETING BEST PRACTICES

#### 1. Email Marketing Fundamentals

   KEY COMPONENTS:

**a. SUBJECT LINE:**

      - 40-50 characters optimal
      - Clear, compelling, relevant
      - Avoid spam trigger words
      - Personalization increases opens
      - A/B test different versions
      - Create urgency atau curiosity

      Examples:
      Good: "Diskon 30% Hari Ini Saja - Jangan Lewatkan!"
      Good: "5 Tips Desain yang Akan Transform Bisnis Anda"
      Poor: "Newsletter Bulan Ini" (too generic)
      Poor: "BELI SEKARANG!!!" (too pushy, spam-like)

**b. PREHEADER TEXT:**

      - Supporting text setelah subject line
      - 50-100 characters
      - Complement subject line
      - Provide additional context
      - Include CTA preview

**c. SENDER NAME DAN EMAIL:**

      - Recognizable sender name (bukan no-reply)
      - Professional email address
      - Consistent branding
      - Include real person name when appropriate

**d. EMAIL BODY:**

      - Clear hierarchy of information
      - Scannable content dengan sections
      - Visual breaks dan white space
      - Relevant, valuable content
      - Single primary CTA focus

**e. FOOTER:**

      - Contact information
      - Unsubscribe link (legal requirement)
      - Social media links
      - Privacy policy link
      - Physical address (untuk compliance)

#### 2. Email Design Principles

   DESIGN BEST PRACTICES:

**a. SINGLE COLUMN LAYOUT:**

      - Works best untuk mobile
      - Clear linear reading flow
      - Eliminates complexity
      - Easier untuk quick scanning
      - Better email client compatibility

**b. ABOVE-THE-FOLD CONTENT:**

      - Most important info in first 300-500px
      - Clear value proposition immediately
      - Compelling visual atau headline
      - Primary CTA visible tanpa scrolling
      - Assume readers won't scroll

**c. IMAGE USAGE:**

      - Optimize file sizes (< 1MB total)
      - Alt text for all images (many clients block images)
      - Balance images dan text (60/40 text/image ratio)
      - Avoid image-only emails
      - Relevant, high-quality visuals only

**d. TEXT FORMATTING:**

      - Short paragraphs (2-3 sentences)
      - Bullet points untuk lists
      - Bold untuk emphasis sparingly
      - Descriptive link text (not "click here")
      - Sufficient contrast untuk readability

**e. LOADING SPEED:**

      - Total email size < 102KB ideal
      - Compress all images
      - Limit number of images
      - Minimize code complexity
      - Test loading across connections

#### 3. Legal dan Ethical Considerations

   COMPLIANCE REQUIREMENTS:

**a. CAN-SPAM ACT (US) / SIMILAR REGULATIONS:**

      - Clear, accurate subject lines
      - Valid physical address in footer
      - Clear identification as advertisement
      - Functioning unsubscribe mechanism
      - Honor opt-out requests within 10 days

**b. GDPR (EU) / DATA PROTECTION:**

      - Explicit consent untuk sending
      - Clear purpose explanation
      - Easy access ke data
      - Right to be forgotten
      - Transparent data usage policies

**c. BEST PRACTICES:**

      - Only email opted-in subscribers
      - Respect frequency preferences
      - Provide clear value exchange
      - Be transparent tentang data usage
      - Make unsubscribing easy (not hidden)

   ETHICAL CONSIDERATIONS:

   - Don't buy email lists
   - Accuracy dalam representations
   - Respect subscriber privacy
   - Avoid manipulative tactics
   - Cultural sensitivity
   - Accessibility for all users

### C. EMAIL DIRECT MARKETING (EDM) DESIGN PRINCIPLES

#### 1. Mobile-Responsive Design

   MOBILE-FIRST APPROACH:

**a. RESPONSIVE LAYOUT:**

      - Single column primary structure
      - Stackable content blocks
      - Fluid width elements (percentage vs fixed)
      - Conditional content for different screens
      - Test pada actual mobile devices

**b. TOUCH-FRIENDLY ELEMENTS:**

      - Minimum 44x44px touch targets
      - Sufficient spacing between clickable elements
      - Large, tappable buttons
      - Easy-to-close pop-overs
      - Swipe-friendly image galleries

**c. MOBILE TYPOGRAPHY:**

      - Minimum 14px body text
      - 22px+ for headlines
      - High contrast ratios (4.5:1 minimum)
      - Short line lengths
      - Generous line height (1.5x+)

**d. IMAGE OPTIMIZATION:**

      - Compressed file sizes
      - Appropriate dimensions (600px width typically)
      - Retina-ready when possible
      - Fast-loading thumbnails
      - Progressive loading for large images

**e. MOBILE-SPECIFIC FEATURES:**

      - Click-to-call phone numbers
      - Location-based directions
      - SMS opt-in options
      - Mobile app deep links
      - Mobile wallet integrations

   TESTING:

   - Test pada iOS dan Android
   - Multiple email clients (Gmail, Apple Mail, Outlook)
   - Different screen sizes (phone, tablet)
   - Various orientations (portrait, landscape)
   - Email client dark modes

#### 2. Visual Hierarchy dalam EDM

   HIERARCHY COMPONENTS:

**a. HEADER AREA:**

      - Brand logo (clickable ke website)
      - Clear visual identity
      - Short tagline atau value prop
      - Navigation links optional
      - Consistent across campaigns

**b. HERO SECTION:**

      - Attention-grabbing headline
      - Compelling hero image atau graphic
      - Supporting subheadline
      - Primary value proposition
      - Initial CTA positioning

**c. BODY CONTENT:**

      - Scannable sections dengan clear headers
      - Short descriptive copy
      - Supporting visuals
      - Bulleted benefits
      - Social proof elements (testimonials, stats)

**d. CALL-TO-ACTION (CTA):**

      - Prominent, contrasting button design
      - Action-oriented text ("Shop Now", not "Click Here")
      - Strategic placement (multiple if needed)
      - Urgent atau benefit-focused copy
      - Sufficient surrounding white space

**e. FOOTER:**

      - Secondary CTAs atau links
      - Contact information
      - Social media icons
      - Unsubscribe link
      - Legal requirements

   VISUAL FLOW:

   - Z-pattern atau F-pattern reading flow
   - Strategic use of directional cues
   - Progressive disclosure dari information
   - Logical content sequence
   - Clear path ke conversion

#### 3. Call-to-Action (CTA) Design

   EFFECTIVE CTA ELEMENTS:

**a. BUTTON DESIGN:**

      - High contrast dengan background
      - Minimum 44x44px size (tap-friendly)
      - Rounded corners vaak more clickable
      - Subtle shadows atau borders for depth
      - Hover states untuk interactivity

**b. COLOR PSYCHOLOGY:**

      - Red/Orange: urgency, excitement
      - Green: go, proceed, eco-friendly
      - Blue: trust, security, calm
      - Yellow: optimism, attention
      - Contrast dengan surrounding elements crucial

**c. COPY WRITING:**

      - Action verbs (Get, Download, Start, Join)
      - First-person perspective ("Get My Discount")
      - Specificity ("Download Free Guide")
      - Benefit-focused ("Start Saving Today")
      - Urgency when appropriate ("Limited Time")

**d. PLACEMENT STRATEGIES:**

      - Above fold untuk primary CTA
      - Repeat strategically in longer emails
      - After compelling content/benefit
      - In hero section
      - Before footer as final opportunity

**e. A/B TESTING VARIABLES:**

      - Button color
      - Button size
      - CTA copy
      - CTA placement
      - Button shape (rounded vs square)
      - Number of CTAs
      - Text vs button links

   BEST PRACTICES:

   - One primary CTA per email focus
   - Make CTA purpose obvious
   - Ensure mobile-friendly sizing
   - Test visibility across email clients
   - Track click-through rates
   - Iterate based on data

### D. TOOLS: CANVA DAN GIMP UNTUK EDM PRODUCTION

#### 1. Canva untuk Email Design

   CANVA ADVANTAGES:

   - Pre-made email templates
   - Drag-and-drop interface
   - Built-in stock photos dan graphics
   - Brand kit untuk consistency
   - Collaboration features
   - Export to various formats
   - Mobile-optimized templates
   - Animation capabilities

   WORKFLOW DALAM CANVA:

   STEP 1: Setup
   - Create custom dimensions (600px width standard)
   - Atau use "Email Header" template
   - Set brand colors dan fonts

   STEP 2: Design
   - Add header dengan logo
   - Create hero section dengan compelling visual
   - Layout content sections
   - Design CTA buttons
   - Add footer elements

   STEP 3: Optimization
   - Check mobile preview
   - Ensure text readability
   - Optimize image quality vs file size
   - Test color contrast

   STEP 4: Export
   - Download as PNG atau JPG (for single image email)
   - Download as PDF (for multi-page)
   - Use "Share" untuk collaborative review

   CANVA EMAIL TEMPLATES:

   - Newsletter templates
   - Promotional email layouts
   - Event invitation designs
   - Product announcement formats
   - Welcome email series

   TIPS:

   - Keep design width to 600px maximum
   - Use web-safe fonts atau embed
   - Compress images before inserting
   - Create template for consistency
   - Save brand elements untuk reuse

#### 2. GIMP untuk Image Processing EDM

   COMMON GIMP TASKS:

**a. IMAGE OPTIMIZATION:**

      - Resize to appropriate dimensions
      - Compress without quality loss
      - Convert to web-optimized formats
      - Crop to focus on subject
      - Batch processing multiple images

**b. EMAIL GRAPHICS CREATION:**

      - Banner images (600px x 200-300px typical)
      - Icon creation untuk features/benefits
      - Product images preparation
      - Pattern backgrounds
      - Attention-grabbing headers

**c. PHOTO EDITING:**

      - Color correction for consistency
      - Brightness/contrast adjustment
      - Background removal
      - Adding text overlays
      - Creating promotional badges

   GIMP WORKFLOW UNTUK EDM IMAGES:

   STEP 1: Setup
   - New image: 600px width (height varies)
   - Resolution: 72 DPI (screen resolution)
   - Color space: RGB
   - Fill: white atau transparent

   STEP 2: Design
   - Import product photos atau visuals
   - Add text layers untuk headlines
   - Create shapes untuk CTA buttons
   - Apply filters untuk effects
   - Layer management untuk organization

   STEP 3: Optimization
   - Flatten image when complete
   - Image > Scale Image jika resize needed
   - Colors > Brightness-Contrast
   - Filters > Enhance > Sharpen

   STEP 4: Export
   - File > Export As
   - Choose format: JPEG (photos), PNG (graphics dengan transparency)
   - JPEG quality: 75-85% (balance quality/size)
   - PNG: compression level 6-7

   EXPORT SETTINGS:

   For Email Use:
   - Format: JPEG for photos, PNG for graphics
   - Width: 600px maximum
   - Resolution: 72 DPI
   - Color profile: sRGB
   - Target file size: < 200KB per image

   GIMP PLUGINS USEFUL:

   - Resynthesizer (content-aware fill)
   - G'MIC (filters dan effects)
   - Wavelet Decompose (advanced editing)
   - Save for Web (optimized export)

#### 3. Creating Interactive PDFs

   USING CANVA:

   STEP 1: Design Multi-Page Document
   - Create presentation atau document
   - Design each page as "slide" atau "page"
   - Maintain consistent navigation
   - Add text dan visuals

   STEP 2: Add Hyperlinks
   - Select text atau element
   - Click link icon
   - Add URL atau email link
   - Set to open in new tab

   STEP 3: Export as PDF
   - Download > PDF Standard
   - Links will be preserved
   - Test functionality after download

   LIMITATIONS:
   - Basic interactivity only (hyperlinks)
   - No forms atau advanced features
   - No multimedia embedding

   USING LIBREOFFICE WRITER:

   STEP 1: Create Document
   - Set page size
   - Insert images dari GIMP
   - Add headings dan content
   - Include table of contents

   STEP 2: Add Interactive Elements
   - Insert > Hyperlink (Ctrl+K)
   - Insert > Bookmark (for internal links)
   - Form controls (Form menu)
   - Buttons dengan actions

   STEP 3: Export as PDF
   - File > Export as PDF
   - Check "Create PDF form"
   - Enable "Export bookmarks"
   - Submit format: PDF

   FEATURES AVAILABLE:
   - Hyperlinks (internal dan external)
   - Bookmarks untuk navigation
   - Form fields (text, checkbox, etc.)
   - Buttons
   - Table of contents dengan links

   USING SCRIBUS:

   Most powerful free option untuk interactive PDFs.

   STEP 1: Page Setup
   - New document dengan appropriate size
   - Set margins dan bleeds
   - Create master pages

   STEP 2: Layout Design
   - Text frames untuk content
   - Image frames untuk visuals
   - Apply styles consistently

   STEP 3: Add Interactivity
   - PDF Options > Annotation
   - Add action buttons
   - Insert hyperlinks
   - Create form fields
   - Add bookmarks

   STEP 4: Export
   - File > Export > Save as PDF
   - In PDF Options, select interactive elements
   - Set compression
   - Include bookmarks

   ADVANCED FEATURES:
   - JavaScript actions
   - Complex form logic
   - Multimedia embedding
   - Page transitions
   - 3D object embedding

### E. A/B TESTING DAN OPTIMIZATION

#### 1. A/B Testing Fundamentals

   WHAT IS A/B TESTING:

   A/B testing (split testing) adalah method untuk comparing two versions
   dari email untuk determine which performs better. You send version A ke
   half dari audience dan version B ke other half, then measure which
   achieves better results.

   WHAT CAN BE TESTED:

**a. SUBJECT LINES:**

      - Length variations
      - Personalization vs generic
      - Questions vs statements
      - Emoji inclusion
      - Urgency vs informational

**b. SENDER NAME:**

      - Company name vs person name
      - Person name variations
      - Department vs individual

**c. SEND TIME:**

      - Day of week
      - Time of day
      - Time zones consideration

**d. EMAIL DESIGN:**

      - Single column vs multi-column
      - Image-heavy vs text-focused
      - Long-form vs short-form
      - Layout variations

**e. CTA ELEMENTS:**

      - Button color
      - Button text
      - Button placement
      - Number of CTAs
      - Button size

**f. CONTENT:**

      - Tone (formal vs casual)
      - Length (brief vs detailed)
      - Offer types
      - Content structure

**g. VISUALS:**

      - Different hero images
      - Illustrations vs photos
      - People vs products
      - Video thumbnail vs static

#### 2. A/B Testing Best Practices

   TESTING METHODOLOGY:

**a. TEST ONE VARIABLE AT A TIME:**

      - Isolate what you're testing
      - Keep other elements constant
      - Clear cause-and-effect relationship
      - Easier interpretation of results

**b. ADEQUATE SAMPLE SIZE:**

      - Minimum 1,000 recipients total (500 each)
      - Larger samples for statistical significance
      - Consider conversion rates
      - Use significance calculators

**c. RANDOM DISTRIBUTION:**

      - Randomly assign recipients
      - Ensure comparable groups
      - Avoid bias in segmentation
      - Same sending conditions

**d. CLEAR METRICS:**

      - Define success metric before testing
      - Open rate untuk subject line tests
      - Click-through rate untuk design/CTA tests
      - Conversion rate untuk complete funnel
      - Revenue per email for e-commerce

**e. SUFFICIENT TEST DURATION:**

      - At least 24-48 hours
      - Consider weekly patterns
      - Account untuk time zones
      - Avoid holiday periods unless testing holiday emails

**f. STATISTICAL SIGNIFICANCE:**

      - Use significance calculators
      - Typically 95% confidence level
      - Don't call results too early
      - Consider p-values

   INTERPRETATION:

   - Look beyond vanity metrics
   - Consider practical significance vs statistical
   - Understand why result occurred
   - Consider segment-specific insights
   - Document findings untuk future reference

#### 3. Key Metrics untuk EDM

   PRIMARY METRICS:

**a. OPEN RATE:**

      - Calculation: (Emails opened / Emails delivered) x 100
      - Industry average: 15-25%
      - Influenced by: subject line, sender name, send time
      - Limitation: image tracking required

**b. CLICK-THROUGH RATE (CTR):**

      - Calculation: (Clicks / Emails delivered) x 100
      - Industry average: 2-5%
      - Measures content dan CTA effectiveness
      - Unique clicks vs total clicks distinction

**c. CLICK-TO-OPEN RATE (CTOR):**

      - Calculation: (Unique clicks / Unique opens) x 100
      - Measures email content effectiveness
      - Removes subject line variable
      - Better indicator of content quality

**d. CONVERSION RATE:**

      - Calculation: (Conversions / Emails delivered) x 100
      - Ultimate success metric
      - Tied to business objectives
      - Requires tracking setup

**e. BOUNCE RATE:**

      - Calculation: (Bounced emails / Total sent) x 100
      - Hard bounces (invalid addresses)
      - Soft bounces (temporary issues)
      - Keep below 2%

**f. UNSUBSCRIBE RATE:**

      - Calculation: (Unsubscribes / Emails delivered) x 100
      - Typically 0.1-0.5%
      - Monitor for sudden increases
      - Feedback for content relevance

   SECONDARY METRICS:

   - Forward/Share rate
   - Revenue per email
   - List growth rate
   - Email client dan device data
   - Geographic engagement patterns
   - Time to open/click

   TOOLS FOR TRACKING:

   Free Options:
   - Mailchimp (free tier up to 500 subscribers)
   - Sendinblue (free tier with limits)
   - MailerLite (free tier available)
   - Gmail dengan tracking extensions

   Analytics:
   - Google Analytics (UTM parameters)
   - Built-in email platform analytics
   - Heatmap tools untuk click patterns

   A/B TESTING TOOLS:

   - Most email platforms include A/B testing
   - Optimizely (advanced testing)
   - VWO (visual testing)
   - Google Optimize (free, comprehensive)

### F. PRACTICAL APPLICATION: CAMPAIGN WORKFLOW

#### 1. Planning Phase

   DEFINE OBJECTIVES:
   - What action do you want recipients to take?
   - How does this fit larger marketing strategy?
   - What metrics define success?
   - What timeline dan budget?

   AUDIENCE SEGMENTATION:
   - Demographics (age, location, etc.)
   - Behavior (past purchases, engagement)
   - Preferences (stated interests)
   - Journey stage (new vs loyal customers)
   - Custom segments based on data

   CONTENT STRATEGY:
   - Value proposition determination
   - Offer atau message development
   - Supporting content identification
   - Tone dan voice guidelines
   - Brand consistency requirements

#### 2. Design Phase

   WIREFRAMING:
   - Sketch layout structure
   - Plan content sections
   - Determine visual hierarchy
   - CTA placement strategy
   - Mobile considerations from start

   ASSET GATHERING:
   - Product images preparation
   - Icon dan graphic sourcing
   - Copy writing
   - Legal requirements checklist

   DESIGN EXECUTION:
   - Create in Canva atau code HTML
   - Follow mobile-first principles
   - Implement brand guidelines
   - Optimize all images in GIMP
   - Test across devices

#### 3. Testing Phase

   PRE-SEND CHECKLIST:

   ☐ Subject line dan preheader set
   ☐ Sender name dan email correct
   ☐ All links functional
   ☐ Images loading properly
   ☐ Alt text for all images
   ☐ Mobile-responsive verified
   ☐ CTA buttons prominent
   ☐ Personalization tags working
   ☐ Unsubscribe link present
   ☐ Footer information complete
   ☐ Spelling dan grammar checked
   ☐ Brand consistency verified
   ☐ Legal compliance met
   ☐ Test sends to multiple clients

   TESTING TOOLS:

   - Email on Acid (preview across clients)
   - Litmus (comprehensive testing)
   - Preview features in email platforms
   - Send to personal accounts (Gmail, Outlook, etc.)
   - Test on actual mobile devices

#### 4. Launch dan Monitoring

   LAUNCH STRATEGY:

   - A/B test send to small segment first
   - Analyze early results
   - Send winning version to remainder
   - Optimal send time based on data
   - Monitor delivery rates

   REAL-TIME MONITORING:

   - Watch opens dalam first few hours
   - Check CTR trend
   - Monitor bounce rates
   - Look for technical issues
   - Quick fixes if problems detected

   POST-CAMPAIGN ANALYSIS:

   - Compare to benchmarks
   - Segment performance analysis
   - Identify top-performing elements
   - Document learnings
   - Share insights dengan team
   - Plan iteration improvements

## PRAKTIKUM

PRAKTIKUM 13: DIGITAL BROSUR DAN EDM CAMPAIGN CREATION

OBJECTIVE:
Create complete digital marketing package termasuk interactive digital
brosur dan professional Email Direct Marketing (EDM) campaign.

DELIVERABLES:

#### 1. INTERACTIVE DIGITAL BROSUR (PDF)

   - Multi-page digital brosur (minimum 4-6 pages)
   - Interactive navigation elements
   - Clickable table of contents
   - External links ke relevant resources
   - Mobile-optimized viewing
   - Untuk product, service, atau organizational profile

#### 2. EDM CAMPAIGN SERIES

   - Welcome email design
   - Promotional email design
   - Newsletter template design
   - All three must be mobile-responsive
   - Include variations untuk A/B testing (minimum 2 versions dari satu email)

REQUIREMENTS:

Digital Brosur:
- Width: standard screen width (1024px atau 768px)
- Format: Interactive PDF
- Navigation: bookmarks atau clickable TOC
- Interactivity: minimum 5 clickable elements
- Content: cohesive, professional, comprehensive
- Visuals: high-quality, optimized
- Typography: readable hierarchy
- Branding: consistent visual identity

EDM Campaign:
- Width: 600px maximum
- Mobile-responsive design
- Clear visual hierarchy
- Prominent, effective CTA
- Alt text for images
- Include header, hero, body, CTA, footer sections
- Optimized image file sizes
- Brand consistency across all three

LANGKAH-LANGKAH:

PART 1: DIGITAL BROSUR CREATION

STEP 1: Planning (30 menit)
- Choose topic (product, service, organization, event)
- Define structure dan content untuk each page
- Gather necessary content dan assets
- Sketch layout ideas

STEP 2: Asset Preparation dalam GIMP (45 menit)
- Create atau edit images untuk brosur
- Optimize sizes (appropriate dimensions)
- Compress untuk web viewing
- Create consistent visual style
- Save in appropriate formats

STEP 3: Layout Design dalam Canva atau LibreOffice (90 menit)
- Create multi-page document
- Implement consistent design system
- Insert prepared images
- Add content dengan proper hierarchy
- Create navigation elements
- Add hyperlinks

STEP 4: Interactivity Implementation (30 menit)
- Add table of contents dengan links
- Create bookmarks for navigation
- Add external links (website, social media, etc.)
- Include form elements if applicable
- Test all interactive elements

STEP 5: Export dan Testing (15 menit)
- Export as interactive PDF
- Test pada computer
- Test pada mobile device
- Verify all links functional
- Check file size (should be < 10MB)

PART 2: EDM CAMPAIGN CREATION

STEP 1: Campaign Planning (20 menit)
- Define campaign purpose dan goals
- Identify target audience
- Plan messaging untuk each email
- Determine primary CTAs
- Sketch layouts

STEP 2: Brand Assets dalam GIMP (30 menit)
- Create logo header (600px width)
- Design CTA button graphics
- Prepare hero images (optimized)
- Create icons atau small graphics
- Compress all images (< 200KB each)

STEP 3: Welcome Email Design (45 menit)
- Create dalam Canva (use Email Header template)
- Header dengan logo
- Friendly welcome message
- Brief intro to brand/service
- Primary CTA (explore, shop, learn)
- Footer dengan unsubscribe
- Export as image

STEP 4: Promotional Email Design (45 menit)
- Attention-grabbing hero section
- Clear offer presentation
- Benefit-focused copy
- Prominent discount atau promotion
- Urgent CTA
- Supporting social proof
- Export as image

STEP 5: Newsletter Template (45 menit)
- Content-focused layout
- Multiple short sections
- Variety of content types
- Secondary CTAs throughout
- More text-based than previous two
- Balance of images dan text
- Export as image

STEP 6: A/B Test Variations (30 menit)
- Choose one email untuk variation
- Create 2 versions dengan one element different:
  * Different subject line approach
  * Different hero image
  * Different CTA placement atau copy
  * Different color scheme
- Document what variable changed

STEP 7: Mobile Optimization Check (20 menit)
- View pada mobile screen size
- Verify text readability
- Check button sizes (tap-friendly?)
- Ensure images load properly
- Verify layout doesn't break

SUBMISSION REQUIREMENTS:

Submit folder containing:

#### 1. DIGITAL BROSUR:

   - Final interactive PDF file
   - Screenshot of each page
   - Documentation: list of interactive features implemented

#### 2. EDM CAMPAIGN:

   - 3 email designs (exported as high-quality images)
   - 2 A/B test variations
   - Source files (Canva links atau GIMP files)
   - Mobile preview screenshots
   - Brief document explaining:
     * Campaign strategy
     * Target audience
     * A/B test hypothesis
     * Key design decisions

#### 3. PROCESS DOCUMENTATION:

   - Wireframe sketches
   - Asset source list
   - Design iteration notes

FILE NAMING:
- NIM_Nama_P13_Brosur.pdf
- NIM_Nama_P13_Email_Welcome.png
- NIM_Nama_P13_Email_Promo.png
- NIM_Nama_P13_Email_Newsletter.png
- NIM_Nama_P13_Email_AB_Version1.png
- NIM_Nama_P13_Email_AB_Version2.png
- NIM_Nama_P13_Documentation.pdf

GRADING RUBRIC:

DIGITAL BROSUR (50 points):
- Interactivity dan functionality (10 pts)
- Design quality dan visual appeal (10 pts)
- Content organization dan clarity (10 pts)
- Typography dan readability (5 pts)
- Image quality dan optimization (5 pts)
- Navigation usability (5 pts)
- Mobile optimization (5 pts)

EDM CAMPAIGN (50 points):
- Mobile-responsive design (10 pts)
- Visual hierarchy dan scanability (10 pts)
- CTA effectiveness (8 pts)
- Brand consistency (7 pts)
- Image optimization (5 pts)
- A/B test strategy (5 pts)
- Technical execution (5 pts)

BONUS POINTS (up to 10 extra):
- Exceptional creativity
- Advanced interactive features
- Outstanding copy writing
- Professional presentation
- Innovative A/B test approach

## TUGAS

TUGAS INDIVIDUAL: PERSONAL BRAND EDM CAMPAIGN

Develop complete Email Direct Marketing campaign untuk personal brand atau
portfolio promotion.

REQUIREMENTS:

#### 1. AUDIENCE DEFINITION:

   - Identify target audience (employers, clients, collaborators, etc.)
   - Define their needs dan expectations
   - Determine compelling offerings

#### 2. EMAIL SERIES CREATION (3 emails):

   EMAIL 1: Introduction/Welcome
   - Who you are
   - Your skills dan expertise
   - What you offer
   - CTA: View portfolio atau Connect

   EMAIL 2: Showcase/Portfolio Highlight
   - Featured project showcase
   - Process dan results explanation
   - Testimonial atau impact metrics
   - CTA: See more work atau Contact

   EMAIL 3: Call-to-Action/Engagement
   - Special offer (free consultation, discount, etc.)
   - Clear next steps
   - Multiple contact options
   - CTA: Schedule call atau Start project

#### 3. CAMPAIGN STRATEGY DOCUMENT:

   - Target audience profile
   - Campaign objectives
   - Email sequence timing (when each sent)
   - Success metrics definition
   - A/B testing plan untuk at least one variable

SPECIFICATIONS:
- Each email: 600px width maximum
- Mobile-responsive designs
- Consistent personal branding throughout
- Professional tone dan presentation
- Optimized images (< 200KB each)
- All emails include: header, hero, body, CTA, footer
- Alt text planned untuk all images

DELIVERABLES:
#### 1. Three email designs (high-quality exports)

#### 2. Campaign strategy document (2-3 pages)

#### 3. A/B test proposal (specific hypothesis)

#### 4. Mobile preview screenshots

#### 5. Source files

SUBMISSION DEADLINE: 7 days from Pertemuan 13

FORMAT: PDF portfolio document + image files dalam folder

EVALUATION CRITERIA:
- Strategic thinking (25%)
- Design execution (25%)
- Personal branding consistency (20%)
- Mobile optimization (15%)
- Campaign cohesiveness (15%)

## QUIZ 2

Quiz 2 akan dilaksanakan pada pertemuan ini, covering materi dari
Pertemuan 7-12. Prepare dengan thorough review dari:

TOPICS COVERED:
- Ilustrasi Vector (Pertemuan 9)
- Campaign Promotion (Pertemuan 10)
- Photo Release (Pertemuan 11)
- In House Journal (Pertemuan 12)
- Digital Brosur dan EDM (Pertemuan 13)

FORMAT:
- Multiple choice (40%)
- Short answer (30%)
- Design analysis (30%)
- Duration: 45 minutes

PREPARATION:
- Review key concepts dari each pertemuan
- Study design examples dan case studies
- Practice analyzing design effectiveness
- Understand tool capabilities
- Review terminology

## RESOURCE TAMBAHAN

SOFTWARE:

FREE TOOLS:
- Canva: canva.com (email templates, graphics)
- GIMP: gimp.org (image optimization)
- LibreOffice: libreoffice.org (interactive PDFs)
- Scribus: scribus.net (advanced PDFs)

EMAIL PLATFORMS (Free Tiers):
- Mailchimp: mailchimp.com (up to 500 subscribers)
- Sendinblue: sendinblue.com (300 emails/day)
- MailerLite: mailerlite.com (1,000 subscribers)
- Gmail + Extensions: free dengan tracking

LEARNING RESOURCES:

VIDEO TUTORIALS (Bahasa Indonesia):
- "Tutorial Email Marketing untuk Pemula" - Niagahoster
  [https://www.youtube.com/watch?v=example1](https://www.youtube.com/watch?v=example1)
- "Cara Membuat Email Marketing di Canva" - Tutorial Canva ID
  [https://www.youtube.com/watch?v=example2](https://www.youtube.com/watch?v=example2)
- "Email Marketing Design Best Practices" - Digital Marketing ID
  [https://www.youtube.com/watch?v=example3](https://www.youtube.com/watch?v=example3)
- "A/B Testing untuk Email Marketing" - Belajar Digital Marketing
  [https://www.youtube.com/watch?v=example4](https://www.youtube.com/watch?v=example4)

VIDEO TUTORIALS (English):
- "Email Marketing Design in Canva" - Canva Design School
  [https://www.youtube.com/user/canva](https://www.youtube.com/user/canva)
- "Email Design Best Practices" - HubSpot Academy
  [https://www.youtube.com/user/hubspot](https://www.youtube.com/user/hubspot)
- "Interactive PDF Tutorial" - TutorialsPoint
  [https://www.youtube.com/results?search_query=interactive+pdf+tutorial](https://www.youtube.com/results?search_query=interactive+pdf+tutorial)
- "Mobile Email Design" - Litmus
  [https://www.youtube.com/user/litmusapp](https://www.youtube.com/user/litmusapp)

ARTICLES DAN GUIDES:
- Really Good Emails: reallygoodemails.com (inspiration)
- Email Design Reference: templates.mailchimp.com
- Can I Email: caniemail.com (compatibility checker)
- Email Marketing Rules: mailchimp.com/resources/

BOOKS:
- "Email Marketing Rules" - Chad White
- "Effective Email Marketing" - John Arnold
- "Email Design Best Practices" (free ebooks dari various platforms)

TESTING TOOLS:
- Email on Acid: emailonacid.com (preview tool)
- Litmus: litmus.com (email testing)
- Testi@: testi.at (free email testing)
- HTML Email Check: htmlemailcheck.com

STOCK RESOURCES:
- Unsplash: unsplash.com (free photos)
- Pexels: pexels.com (free photos & videos)
- Flaticon: flaticon.com (free icons)
- Freepik: freepik.com (free graphics)

INSPIRATION:
- Really Good Emails: curated email design examples
- Milled: milled.com (email archive)
- Email Love: emaillove.com (beautiful emails)
- Mailchimp Inspiration: inspiration.mailchimp.com

COMMUNITIES:
- Email Geeks Slack: email.geeks.chat
- r/emailmarketing on Reddit
- Email Marketing Facebook groups
- LinkedIn Email Marketing groups

BLOGS TO FOLLOW:
- Litmus Blog: litmus.com/blog
- Campaign Monitor Resources: campaignmonitor.com/resources
- Mailchimp Marketing Library: mailchimp.com/resources
- HubSpot Marketing Blog: blog.hubspot.com/marketing

COMPLIANCE RESOURCES:
- CAN-SPAM Act: ftc.gov/tips-advice/business-center/guidance/can-spam-act
- GDPR Email Marketing: gdpr.eu/email-marketing
- Indonesia Email Regulations: Ministry of Communication and Informatics

## STUDI KASUS

CASE STUDY 1: AIRBNB EMAIL MARKETING

Analysis dari Airbnb's successful email marketing strategy:

STRENGTHS:
- Highly personalized based on user behavior
- Beautiful imagery showcasing destinations
- Clear, compelling CTAs
- Mobile-optimized design
- Strategic email sequence (welcome, reminders, recommendations)
- Localized content for different markets
- Social proof integration

DESIGN ELEMENTS:
- Large hero images
- Minimal text, maximum visual impact
- Consistent branding
- White space usage
- Clear hierarchy

LEARNINGS:
- Personalization increases engagement significantly
- Quality imagery is worth the investment
- Timing of emails matters (abandoned cart reminders effective)
- Testing different destinations/offers untuk different segments
- Simplicity often outperforms complexity

CASE STUDY 2: DIGITAL BROSUR SUCCESS - REAL ESTATE

Interactive property brochures that transformed sales:

IMPLEMENTATION:
- Interactive floor plans dengan clickable rooms
- Embedded video tours
- Virtual staging comparisons (furnished vs unfurnished)
- Neighborhood information dengan maps
- Mortgage calculator integration
- Direct inquiry forms

RESULTS:
- 300% increase dalam qualified inquiries
- Reduced printing costs by 75%
- Faster distribution to international buyers
- Real-time updates untuk availability
- Detailed analytics on popular features

LEARNINGS:
- Interactivity engages viewers longer
- Video integration increases interest
- Convenience of digital distribution
- Cost savings significant at scale
- Analytics inform future marketing

CASE STUDY 3: A/B TESTING SUCCESS - E-COMMERCE

Online fashion retailer's A/B testing results:

TESTS CONDUCTED:

Test 1: Subject Line
- Version A: "New Arrivals This Week"
- Version B: "Your Personal Style Picks Are Here"
- Result: Version B had 29% higher open rate
- Learning: Personalization language outperforms generic

Test 2: CTA Button Color
- Version A: Blue button (brand color)
- Version B: Orange button (contrasting)
- Result: Version B had 21% higher CTR
- Learning: Contrast trumps brand consistency untuk CTA

Test 3: Image Type
- Version A: Single large product image
- Version B: Grid of multiple products
- Result: Version A had 18% higher CTR
- Learning: Focus better than choice paralysis

Test 4: Email Length
- Version A: Long-form dengan multiple sections
- Version B: Short-form dengan single focus
- Result: Version B had 34% higher conversion
- Learning: Simplicity and singular focus more effective

CUMULATIVE IMPACT:
By implementing learnings across campaigns, overall email marketing ROI
increased 127% over 6 months.

## LATIHAN ANALISIS

EXERCISE 1: EDM CRITIQUE

Analyze sample email marketing design (provided by instructor) and evaluate:

#### 1. FIRST IMPRESSION:

   - What catches your attention first?
   - Is value proposition immediately clear?
   - Does it look professional dan trustworthy?

#### 2. MOBILE-RESPONSIVENESS:

   - Would this work pada mobile device?
   - Are tap targets adequate size?
   - Is text readable without zooming?

#### 3. VISUAL HIERARCHY:

   - Does eye flow naturally through content?
   - Is most important information prominent?
   - Are sections clearly differentiated?

#### 4. CTA EFFECTIVENESS:

   - Is CTA immediately obvious?
   - Is action clear dan compelling?
   - Is it easy to interact with?

#### 5. IMPROVEMENTS:

   - What would you change?
   - What works well?
   - How could conversion be improved?

EXERCISE 2: A/B TEST HYPOTHESIS

For given email design, propose three A/B tests:

#### 1. Element to test

#### 2. Version A description

#### 3. Version B description

#### 4. Hypothesis: which will perform better and why

#### 5. Success metric

#### 6. Rationale based on principles learned

EXERCISE 3: INTERACTIVE PDF PLANNING

Plan interactive digital brosur untuk chosen topic:

#### 1. Define purpose dan audience

#### 2. Outline content structure (4-6 pages)

#### 3. List interactive elements to include

#### 4. Sketch basic layout untuk each page

#### 5. Identify required assets

#### 6. Plan navigation system

## TIPS PRAKTIS

DIGITAL BROSUR TIPS:

#### 1. Keep file size reasonable (under 10MB ideal)

#### 2. Test interactivity dalam different PDF readers

#### 3. Provide print-friendly version sebagai alternative

#### 4. Include clear instructions for navigation jika complex

#### 5. Ensure accessibility (alt text, readable fonts)

EDM DESIGN TIPS:

#### 1. Design untuk scanning, not reading

#### 2. Put most important info above fold

#### 3. Use single column untuk mobile

#### 4. Compress all images before inserting

#### 5. Test dalam actual email clients, not just preview

#### 6. Include unsubscribe link (legal requirement)

#### 7. Use web-safe fonts atau embed

#### 8. ALT text essential (many users have images off)

#### 9. Keep total email size under 102KB jika possible

#### 10. Clear sender name builds trust

A/B TESTING TIPS:

#### 1. Test one variable at a time

#### 2. Ensure adequate sample size

#### 3. Run tests long enough untuk significance

#### 4. Document everything untuk future reference

#### 5. Don't over-test - diminishing returns exist

#### 6. Apply learnings to future campaigns

#### 7. Segment insights (what works for one audience may not for another)

COMMON MISTAKES TO AVOID:

#### 1. Image-only emails (text necessary for accessibility & deliverability)

#### 2. Tiny text pada mobile

#### 3. Too many CTAs (creates confusion)

#### 4. Buying email lists (poor results, legal issues)

#### 5. No mobile testing before sending

#### 6. Broken links

#### 7. Missing unsubscribe link

#### 8. No alt text

#### 9. Files too large (slow loading)

#### 10. Inconsistent branding

## RENCANA PEMBELAJARAN SELANJUTNYA

Pertemuan 14 akan membahas:

TOPIK: Podcast dan Video Release

Content akan mencakup:
- Podcast production dari planning hingga distribution
- Recording dan editing techniques dengan Audacity
- Podcast cover art design
- Video release concepts
- Video editing dengan DaVinci Resolve/Kdenlive
- Scripting dan storyboarding
- Audio-visual integration skills

Mahasiswa diharapkan:
#### 1. Complete Praktikum 13 dan submit on time

#### 2. Review Quiz 2 results dan understand mistakes

#### 3. Research podcast dan video examples dalam chosen niche

#### 4. Familiarize diri dengan Audacity (download dan explore interface)

#### 5. Optional: explore DaVinci Resolve atau Kdenlive

#### 6. Bring headphones untuk audio work

Software untuk install sebelum Pertemuan 14:
- Audacity (audacityteam.org) - free audio editing
- DaVinci Resolve (blackmagicdesign.com) - free video editing
- Alternatively: Kdenlive (kdenlive.org) - free, open-source option

Excellent progress pada second half dari semester! Digital marketing skills
learned today are immediately applicable dalam real-world contexts.

# MODUL PERKULIAHAN DESAIN KOMUNIKASI VISUAL - PERTEMUAN 14

JUDUL: Podcast dan Video Release

## SUB-CPMK

## Mahasiswa memahami dan praktek membuat podcast dan video release sebagai

media komunikasi visual modern, serta menguasai production workflow mulai
dari planning, recording, editing hingga distribution menggunakan free
software professional-grade.

## TUJUAN PEMBELAJARAN

## Setelah mengikuti perkuliahan ini, mahasiswa diharapkan mampu:

#### 1. Memahami podcast production workflow dari concept hingga distribution

#### 2. Merencanakan podcast content dengan effective storytelling

#### 3. Mengoperasikan Audacity untuk audio recording dan editing

#### 4. Merancang podcast cover art yang attractive dan platform-compliant

#### 5. Memahami video release concepts dan production planning

#### 6. Menggunakan DaVinci Resolve atau Kdenlive untuk video editing

#### 7. Menerapkan scripting dan storyboarding techniques

#### 8. Mengintegrasikan audio dan visual elements effectively

#### 9. Mengevaluasi audio dan video quality standards

#### 10. Mendistribusikan content melalui appropriate channels

#### 11. Memahami technical specifications untuk various platforms

#### 12. Menerapkan best practices dalam podcast dan video production

## PENGANTAR MATERI

Podcast dan video content telah menjadi cornerstone dari modern digital
communication strategy. Era pandemi significantly accelerated adoption dari
audio dan video content, dengan podcast listenership growing exponentially
dan video consumption dominating online engagement. Untuk communication
professionals, ability untuk produce quality podcast dan video content adalah
increasingly essential skill.

Podcasting offers unique intimacy dan convenience yang text-based content
cannot match. Listeners dapat consume podcasts while commuting, exercising,
working, atau performing other activities. Format audio creates personal
connection antara host dan listener, building trust dan loyalty yang
powerful untuk personal brands, businesses, dan organizations. Dengan
relatively low barrier to entry - basic recording equipment dan free editing
software - virtually anyone dapat start podcasting.

Video content, particularly video releases (music videos, promotional videos,
announcement videos), represents highest engagement form dari digital content.
Social media algorithms heavily favor video, platforms like YouTube are
second-largest search engines, dan short-form video (TikTok, Instagram Reels,
YouTube Shorts) has revolutionized content consumption patterns. Professional-
quality video editing adalah no longer exclusive domain dari expensive
production houses - free tools seperti DaVinci Resolve rival professional
software dalam capabilities.

Effective podcast dan video production requires combination dari technical
skills dan creative thinking. Technical aspect includes understanding audio
principles (levels, equalization, noise reduction), video fundamentals
(resolution, frame rate, codecs), dan editing workflows. Creative side
encompasses storytelling, pacing, scripting, visual composition, dan audience
engagement strategies.

Planning adalah critical phase often overlooked. Successful podcasts have
clear format, consistent release schedule, defined target audience, dan
thoughtful content strategy. Video releases require detailed storyboarding,
shot planning, asset gathering, dan post-production roadmap. Pre-production
investment dramatically improves final output quality dan reduces editing
time.

Production quality matters. While content is king, poor audio atau choppy
video will drive audiences away regardless of content quality. Understanding
basic principles - proper mic technique, consistent lighting, clean audio
tracks, smooth transitions - separates amateur dari professional-looking
productions. Fortunately, knowledge often matters more than expensive
equipment.

Distribution strategy determines content reach. Creating excellent podcast
atau video means little jika tidak reaches target audience. Platform-specific
optimization (podcast directories, YouTube SEO, social media formats),
consistent publishing schedule, dan audience building techniques are all
part dari comprehensive content strategy.

Pertemuan ini provides complete foundation dalam podcast dan video production.
Anda akan learn entire workflow menggunakan professional free tools,
understanding both technical requirements dan creative considerations yang
make content successful. By end dari session, you'll have skills untuk produce
broadcast-ready podcast episodes dan engaging video releases.

## MATERI

### A. PODCAST PRODUCTION FUNDAMENTALS

#### 1. Understanding Podcast Medium

   WHAT IS A PODCAST:

   Podcast adalah series dari digital audio files yang users dapat download
   atau stream on-demand. Key characteristics:

   - EPISODIC: regular releases dalam series format
   - ON-DEMAND: listeners choose when to consume
   - PORTABLE: mobile-friendly consumption
   - SUBSCRIPTION-BASED: listeners subscribe untuk automatic updates
   - FREE ACCESS: typically free dengan ads atau sponsorships

   PODCAST vs OTHER AUDIO FORMATS:

   - vs RADIO: on-demand, niche topics, no broadcast schedule
   - vs AUDIOBOOKS: episodic vs complete work, ongoing series
   - vs MUSIC: spoken-word focus, conversation atau narrative
   - vs YOUTUBE AUDIO: audio-only, podcast platforms distribution

   PODCAST CATEGORIES:

   - INTERVIEW: host interviews guests (Joe Rogan style)
   - CONVERSATIONAL: multiple hosts discussing topics
   - EDUCATIONAL: tutorial, training, informational
   - STORYTELLING: narrative fiction atau non-fiction
   - SOLO: single host monologue format
   - PANEL: group discussions dengan multiple participants
   - DOCUMENTARY: investigative, research-based storytelling
   - NEWS/CURRENT EVENTS: timely discussion of news

   POPULAR PODCAST NICHES:

   - True crime
   - Business dan entrepreneurship
   - Technology
   - Health dan wellness
   - Comedy
   - Education
   - Arts dan culture
   - Sports
   - Politics
   - Personal development

#### 2. Podcast Planning dan Strategy

   CONCEPT DEVELOPMENT:

   Question to answer:

**a. TOPIC DAN NICHE:**

      - What will podcast be about?
      - Specific enough atau too broad?
      - Personal passion dan expertise?
      - Audience demand untuk content?
      - Competition analysis

**b. TARGET AUDIENCE:**

      - Who exactly is ideal listener?
      - What are their interests dan pain points?
      - Where do they spend time online?
      - What other podcasts do they listen to?
      - How will you reach them?

**c. FORMAT:**

      - Solo, interview, co-hosted, panel?
      - Episode length (15min, 30min, 60min+)?
      - Scripted atau conversational?
      - Segment structure?
      - Regularity dan frequency?

**d. UNIQUE VALUE PROPOSITION:**

      - What makes this different?
      - Why should people listen?
      - What unique perspective atau access?
      - Entertainment, education, atau both?

**e. NAMING:**

      - Clear, memorable name
      - Relevant to content
      - Easy to spell dan pronounce
      - Unique (search-friendly)
      - Available domain dan social handles

   CONTENT PLANNING:

   - Episode ideas brainstorming (20-30 episode list)
   - Season planning untuk story arcs
   - Guest identification dan outreach
   - Research dan preparation workflow
   - Content calendar creation
   - Backup episodes untuk consistency

   TECHNICAL PLANNING:

   - Recording location identification
   - Equipment inventory (what you have/need)
   - Editing workflow establishment
   - Hosting platform selection
   - Distribution channel setup
   - Recording schedule determination

#### 3. Recording Best Practices

   RECORDING ENVIRONMENT:

**a. ROOM ACOUSTICS:**

      - Avoid hard surfaces (echo dan reverb)
      - Soft furnishings absorb sound (carpets, curtains, cushions)
      - Small-to-medium rooms better than large spaces
      - Avoid square rooms (parallel walls create issues)
      - DIY sound treatment: blankets, foam, book shelves

**b. NOISE CONTROL:**

      - Eliminate background noise sources
      - Turn off fans, A/C during recording
      - Close windows (traffic noise)
      - Put phones on airplane mode
      - Record during quiet times
      - Use "Do Not Disturb" signs

   MICROPHONE TECHNIQUES:

**a. MIC DISTANCE:**

      - 6-12 inches (fist distance) typical
      - Consistent distance throughout
      - Closer for intimate, whisper-like feel
      - Further for natural, airy sound
      - Too close: plosives dan proximity effect
      - Too far: thin, distant sound

**b. MIC ANGLE:**

      - Speak across diaphragm, not directly into
      - Reduces plosive "P" dan "B" sounds
      - Pop filter helps (DIY: pantyhose over hanger)
      - Windscreen for outdoor atau breath noise

**c. POSTURE DAN DELIVERY:**

      - Sit upright for better breath control
      - Stay relaxed to avoid tension in voice
      - Smile while talking (impacts tone)
      - Hand gestures help expressiveness
      - Stand for more energetic delivery

   RECORDING SETTINGS dalam AUDACITY:

   - Sample rate: 44,100 Hz (CD quality) atau 48,000 Hz
   - Bit depth: 16-bit minimum, 24-bit better
   - Format: WAV (uncompressed) for editing
   - Mono atau stereo: Mono for single voice
   - Input level: peak around -12dB to -6dB (leave headroom)

   RECORDING WORKFLOW:

   STEP 1: Setup dan Test
   - Connect microphone
   - Open Audacity
   - Select correct input device
   - Do test recording (count to 10)
   - Listen back for issues
   - Adjust levels if needed

   STEP 2: Recording
   - Hit record (red button)
   - Wait 2 seconds before speaking (room tone)
   - Deliver content
   - Pause if mistake (edit later)
   - Don't restart for small errors
   - Maintain energy throughout

   STEP 3: Room Tone Capture
   - Record 30 seconds of silence at end
   - Useful for noise reduction later
   - Same position, same mic setup

   TIPS:

   - Hydrate before recording (water, not cold)
   - Avoid dairy before recording (mucus)
   - Warm up voice (humming, scales)
   - Read content aloud beforehand
   - Have script atau notes visible
   - Extra takes better than underprepared
   - Take breaks for long sessions

#### 4. Podcast Cover Art Design

   PLATFORM REQUIREMENTS:

   TECHNICAL SPECIFICATIONS:

   - Dimensions: 3000x3000 pixels (square)
   - Minimum: 1400x1400 pixels
   - Maximum file size: varies by platform (usually 512KB-5MB)
   - Format: PNG atau JPG (PNG preferred for quality)
   - Color space: RGB
   - Resolution: 72 DPI sufficient

   PLATFORM GUIDELINES:

   - Apple Podcasts: 3000x3000px, JPG/PNG, <512KB
   - Spotify: 640x640px minimum, 3000x3000px recommended
   - Google Podcasts: follows Apple guidelines
   - Stitcher: similar standards
   - YouTube (if video podcast): 1280x720px minimum for video

   DESIGN PRINCIPLES:

**a. VISIBILITY AT SMALL SIZES:**

      - Will be viewed as tiny thumbnail (< 200px)
      - Must be recognizable when small
      - Avoid fine details atau small text
      - Bold, simple designs work best
      - High contrast elements
      - Limited color palette

**b. TEXT CONSIDERATIONS:**

      - Large, bold typography
      - Maximum 2-3 words ideal
      - Readable at thumbnail size
      - Avoid thin atau decorative fonts
      - High contrast dengan background
      - No text smaller than 20% of canvas

**c. IMAGERY:**

      - Simple, iconic visuals
      - Avoid busy photographs
      - Vector graphics often better
      - Recognizable silhouettes
      - Cultural appropriateness
      - Copyright-free atau original

**d. BRANDING:**

      - Consistent dengan other brand materials
      - Memorable visual identity
      - Differentiation dari competitors
      - Suitable for target audience
      - Timeless design (avoid trends)

**e. COLOR PSYCHOLOGY:**

      - Consider podcast mood dan tone
      - High contrast for visibility
      - Limited palette for cohesion
      - Test in grayscale for accessibility
      - Consider color blindness

   COMMON LAYOUTS:

   - PHOTO-BASED: host portrait dengan title overlay
   - TYPOGRAPHIC: text-focus dengan minimal graphics
   - ILLUSTRATED: custom illustrations atau icons
   - ABSTRACT: shapes, patterns, conceptual
   - LOGO-CENTRIC: brand logo as main element

   DESIGN PROCESS dalam CANVA:

   STEP 1: Setup
   - Create custom dimensions: 3000x3000px
   - Set up brand colors dan fonts
   - Gather assets (photos, logos, etc.)

   STEP 2: Layout
   - Choose layout approach
   - Place main visual element
   - Add podcast title
   - Include host name if relevant
   - Balance composition

   STEP 3: Refinement
   - Adjust colors untuk vibrancy
   - Ensure text legibility
   - Check balance dan alignment
   - Preview at small size (resize to 100px)
   - Get feedback

   STEP 4: Export
   - Download as PNG (higher quality)
   - Check file size (compress if needed)
   - Save layered version untuk future edits
   - Create variations jika needed

   DESIGN DON'TS:

   - Don't use too many fonts (2 maximum)
   - Don't make busy, cluttered designs
   - Don't use low-resolution images
   - Don't include episode-specific info (cover is for series)
   - Don't use copyrighted imagery without permission
   - Don't ignore platform guidelines

### B. AUDIO EDITING dengan AUDACITY

#### 1. Audacity Interface dan Tools

   INTERFACE OVERVIEW:

   KEY AREAS:

   - MENU BAR: File, Edit, View, Transport, etc.
   - TOOL BAR: Selection, Envelope, Draw, Zoom, etc.
   - PLAYBACK CONTROLS: Play, Pause, Stop, Skip, Record
   - MIXER TOOLBAR: Input/output volume controls
   - EDIT TOOLBAR: Cut, Copy, Paste, Trim, Silence
   - SELECTION TOOLBAR: Precise selection timestamps
   - TRACK CONTROL PANEL: Track options (mute, solo, etc.)
   - WAVEFORM DISPLAY: Visual audio representation
   - TIMELINE: Time ruler above waveform

   ESSENTIAL TOOLS:

**a. SELECTION TOOL (F1):**

      - Select portions of audio
      - Click and drag to select
      - Double-click to select all in track
      - Click track edge to select track

**b. ENVELOPE TOOL (F2):**

      - Adjust volume over time
      - Create fade ins/outs
      - Duck audio under voice
      - Smooth volume changes

**c. DRAW TOOL (F3):**

      - Manual waveform editing
      - Remove clicks atau pops

**d. ZOOM TOOL (F4):**

      - Click to zoom in
      - Shift-click to zoom out
      - Drag to zoom to selection

**e. TIME SHIFT TOOL (F5):**

      - Move tracks dalam timeline
      - Align multiple tracks
      - Create space atau overlap

   KEYBOARD SHORTCUTS:

   Essential untuk efficient editing:

   - SPACE: Play/Pause
   - HOME: Skip to start
   - END: Skip to end
   - R: Record
   - X: Cut
   - C: Copy
   - V: Paste
   - CTRL+Z: Undo
   - CTRL+SHIFT+Z: Redo
   - CTRL+K: Delete selected audio
   - CTRL+D: Duplicate
   - CTRL+1: Zoom in
   - CTRL+3: Zoom out
   - SHIFT+C: Split audio at cursor

#### 2. Basic Editing Techniques

   ESSENTIAL EDITS:

**a. CUTTING DAN TRIMMING:**

      - Select unwanted section
      - Press Delete atau CTRL+K
      - Removes mistakes, long pauses, "ums"
      - Listen before cutting to avoid choppy sound
      - Trim ends: silence before/after actual content

**b. MOVING AUDIO:**

      - Use Time Shift Tool (F5)
      - Click and drag track
      - Align multiple tracks
      - Create timing adjustments

**c. SPLITTING:**

      - Place cursor where you want split
      - CTRL+I atau Edit > Clip Boundaries > Split
      - Allows independent manipulation of sections
      - Useful for rearranging content

**d. FADES:**

      - Select beginning of track
      - Effect > Fade In
      - Select end of track
      - Effect > Fade Out
      - Professional-sounding starts/ends

**e. SILENCE INSERTION:**

      - Generate > Silence
      - Specify duration
      - Creates pauses, space between segments

   WORKFLOW:

   STEP 1: Import Audio
   - File > Import > Audio
   - Select recorded WAV file
   - Appears as waveform

   STEP 2: Remove Noise
   - Select portion of "silence" (room tone)
   - Effect > Noise Reduction > Get Noise Profile
   - Select entire track (CTRL+A)
   - Effect > Noise Reduction > OK
   - Reduces background hiss

   STEP 3: Normalize
   - Select all (CTRL+A)
   - Effect > Normalize
   - Set to -1.0 dB (leaves headroom)
   - Ensures consistent volume

   STEP 4: Edit Content
   - Remove mistakes
   - Cut long pauses
   - Tighten pacing
   - Remove breaths jika distracting
   - Smooth transitions

   STEP 5: Add Music/Sound Effects
   - Import intro music
   - Place at beginning dengan Time Shift
   - Trim to desired length
   - Use Envelope Tool untuk fade under voice
   - Add outro music
   - Insert transition sounds jika relevant

   STEP 6: Final Adjustments
   - Listen through entirely
   - Check for pops, clicks, sudden volume changes
   - Apply compression if needed
   - Final normalize pass
   - Add fade in/out

#### 3. Advanced Audio Processing

   COMPRESSION:

   Purpose: Reduces dynamic range, makes quiet sounds louder dan loud
   sounds quieter, results dalam more consistent volume.

   - Effect > Compressor
   - Threshold: -12 dB (typical)
   - Ratio: 3:1 (moderate compression)
   - Attack: 0.2 seconds
   - Release: 1.0 seconds
   - Makeup gain: after reduction checkbox

   When to use:
   - Voice has big volume variations
   - Soft-spoken guests
   - Inconsistent mic distance
   - Mastering for broadcast

   EQUALIZATION (EQ):

   Purpose: Adjust frequency balance, improve clarity, reduce muddiness.

   - Effect > Filter Curve (graphic EQ)

   Common adjustments:
   - HIGH-PASS FILTER: Remove below 80Hz (eliminates rumble)
   - PRESENCE BOOST: +3dB around 3-5kHz (clarity)
   - DE-ESS: Reduce around 6-8kHz jika "S" sounds harsh
   - WARMTH: +2dB around 200Hz (fuller sound)

   When to use:
   - Voice sounds thin atau harsh
   - Background rumble present
   - Sibilance issues
   - Multiple voices don't blend well

   LIMITING:

   Purpose: Prevents audio from exceeding certain level, maximizes volume.

   - Effect > Limiter
   - Hard Limit: -1.0 dB
   - Use for final mastering pass
   - Prevents clipping/distortion

   DE-ESSING:

   Purpose: Reduces harsh "S" sounds.

   - Select problem area
   - Effect > Filter Curve
   - Reduce 6-8kHz range
   - Apply gently (subtle is better)

   SPECTRAL EDITING:

   Purpose: Visual editing dalam frequency domain for precise fixes.

   - View > Spectrogram
   - Identify specific frequency problems visually
   - Use Selection Tool to select frequency range
   - Delete atau reduce specific frequencies
   - Useful for removing specific noise types

#### 4. Music dan Sound Effects Integration

   MUSIC SELECTION:

   COPYRIGHT CONSIDERATIONS:

   - Cannot use copyrighted music without license
   - Royalty-free music options:
     * YouTube Audio Library (free)
     * Free Music Archive
     * Incompetech (Kevin MacLeod)
     * Bensound
     * Purple Planet
     * AudioJungle (paid, affordable)

   - Creative Commons licensed music:
     * Check specific license terms
     * Attribution requirements
     * Commercial use permission

   MUSIC INTEGRATION:

   INTRO MUSIC:
   - 5-15 seconds typical
   - Upbeat, reflects podcast mood
   - Fade out as voice begins
   - Consistent across episodes (branding)

   OUTRO MUSIC:
   - 10-30 seconds
   - Can be longer (people often stop listening)
   - Fade in as voice ends
   - Include calls-to-action over music

   TRANSITION MUSIC:
   - Brief (2-5 seconds)
   - Signals topic change
   - Not necessary for all podcasts
   - Keeps energy up

   DUCKING TECHNIQUE:

   Automatically lowers music volume when voice is present:

   MANUAL METHOD:
   - Use Envelope Tool (F2)
   - Click on music track to create control points
   - Drag points down where voice occurs
   - Music quiet under voice, full volume when voice absent

   SOUND EFFECTS:

   Uses:
   - Segment transitions
   - Comedic timing
   - Emphasis
   - Soundscapes for storytelling

   Sources:
   - Freesound.org
   - Zapsplat.com
   - BBC Sound Effects Library
   - 99Sounds

   Best practices:
   - Use sparingly
   - Ensure consistent volume
   - Match podcast tone
   - Don't distract from content
   - Clear, recognizable sounds

### C. VIDEO RELEASE PRODUCTION

#### 1. Video Release Concepts

   TYPES OF VIDEO RELEASES:

**a. MUSIC VIDEOS:**

      - Visual interpretation of song
      - Performance-based atau narrative
      - Abstract atau conceptual
      - Lyric videos (simpler alternative)

**b. PRODUCT RELEASE VIDEOS:**

      - Announce new product
      - Highlight features dan benefits
      - Demo dalam use
      - Generate excitement

**c. EVENT ANNOUNCEMENT VIDEOS:**

      - Promote upcoming event
      - Build anticipation
      - Provide key information
      - Call-to-action (register, buy tickets)

**d. BRAND/CAMPAIGN LAUNCH:**

      - Introduce new brand identity
      - Explain campaign concept
      - Emotional connection
      - Wide distribution focus

**e. DOCUMENTARY/BEHIND-SCENES:**

      - Process documentation
      - "Making of" content
      - Transparency builds trust
      - Humanizes brand

**f. PROMOTIONAL VIDEOS:**

      - General marketing purpose
      - Showcase offerings
      - Brand storytelling
      - Call-to-action oriented

   VIDEO CHARACTERISTICS:

   - DURATION: Typically 30 seconds - 3 minutes
   - PACING: Quick, engaging, dynamic
   - MUSIC: Central element, drives energy
   - EDITING: Fast cuts, transitions, effects
   - VISUALS: High-quality, creative shots
   - MESSAGE: Clear, focused, memorable

   PLATFORM CONSIDERATIONS:

   - YOUTUBE: Longer-form acceptable, SEO important
   - INSTAGRAM: 60 seconds max for feed, vertical for stories
   - TIKTOK: 15-60 seconds, vertical, trending audio
   - FACEBOOK: Auto-play dengan no sound, captions essential
   - TWITTER: Short, punchy, under 2:20
   - LINKEDIN: Professional tone, 30 seconds - 5 minutes

#### 2. Pre-Production: Scripting dan Storyboarding

   SCRIPTING:

   VIDEO SCRIPT COMPONENTS:

   - SCENE NUMBER: Organization
   - LOCATION: Where shot takes place
   - TIME: Day/night/specific timing
   - ACTION: What happens visually
   - DIALOGUE/VO: Spoken words atau narration
   - SOUND: Music, effects, ambient
   - DURATION: Estimated seconds per scene

   SCRIPT FORMAT:

   Example:

   ---
   SCENE 1 - INT. OFFICE - DAY

   VISUAL: Close-up of laptop screen showing product interface.
   Hands typing on keyboard.

   AUDIO: Upbeat electronic music begins. Keyboard typing sounds.

   VO: "Meet the future of productivity..."

   DURATION: 5 seconds
   ---

   SCRIPTING BEST PRACTICES:

   - Write for ear, not eye (spoken sounds different than written)
   - Keep sentences short
   - Active voice
   - Conversational tone
   - Time it read-aloud
   - Build dalam pauses for visuals
   - Include emotional direction
   - Specify on-screen text

   STORYBOARDING:

   PURPOSE:
   - Visualize each shot before filming
   - Plan composition dan framing
   - Identify needed props/locations
   - Sequence logical flow
   - Communicate vision to team
   - Efficient shooting (group locations)

   STORYBOARD ELEMENTS:

   Each panel includes:
   - FRAME NUMBER: Sequential organization
   - VISUAL: Rough sketch atau description
   - SHOT TYPE: Close-up, wide, medium, etc.
   - CAMERA MOVEMENT: Pan, tilt, dolly, static
   - DIALOGUE/AUDIO: What's heard
   - NOTES: Special instructions, lighting, transitions

   SHOT TYPES:

   - ESTABLISHING SHOT: Wide, shows location/context
   - WIDE SHOT (WS): Full subject dalam environment
   - MEDIUM SHOT (MS): Halfway between wide dan close
   - CLOSE-UP (CU): Face atau object detail
   - EXTREME CLOSE-UP (ECU): Very tight detail
   - OVER-THE-SHOULDER (OTS): From behind one subject
   - TWO-SHOT: Two subjects dalam frame
   - POV: Point of view shot

   CAMERA MOVEMENTS:

   - PAN: Horizontal rotation
   - TILT: Vertical rotation
   - DOLLY: Camera moves toward/away from subject
   - TRUCK: Camera moves side-to-side
   - ZOOM: Lens focal length change (avoid unless intentional)
   - HANDHELD: Shake for energy atau documentary feel
   - STATIC: No movement, locked down

   STORYBOARD TOOLS:

   Free options:
   - Canva (storyboard templates)
   - StoryboardThat.com
   - Boords.com (limited free)
   - Pen dan paper (simple but effective)
   - PowerPoint atau Google Slides

   SHOT LIST:

   Complement to storyboard - detailed text list:

   Example:
#### 1. Wide shot - office exterior - 3 sec - static

#### 2. Medium shot - person entering door - 2 sec - follow

#### 3. Close-up - hand on door handle - 1 sec - static

#### 4. POV - walking through office - 4 sec - dolly

   ...

   Benefits:
   - Quick reference during shooting
   - Checklist to ensure all shots captured
   - Easier than flipping through visual boards
   - Can assign priorities (A-list vs nice-to-have)

#### 3. Video Shooting Basics

   CAMERA SETTINGS:

   RESOLUTION:
   - 1920x1080 (1080p, Full HD) - standard
   - 3840x2160 (4K) - if camera capable, future-proofing
   - Higher resolution allows reframing dalam edit

   FRAME RATE:
   - 24fps (film look, cinematic)
   - 30fps (standard video, natural motion)
   - 60fps (smooth motion, sports, slow-motion source)
   - Choose based on desired aesthetic
   - Stay consistent throughout project

   EXPOSURE:
   - Properly exposed (not too dark/bright)
   - Slightly underexpose better than overexpose
   - Monitor histogram jika available
   - Use manual exposure untuk consistency

   WHITE BALANCE:
   - Match lighting conditions
   - Manual setting for consistency
   - Daylight (5600K for outdoor)
   - Tungsten (3200K for indoor)
   - Can adjust dalam editing but better correct initially

   COMPOSITION PRINCIPLES:

   RULE OF THIRDS:
   - Imagine grid splitting frame into thirds
   - Place subjects at intersection points
   - More interesting than center framing
   - Natural eye flow

   HEADROOM:
   - Space above subject's head
   - Not too much (floaty feeling)
   - Not too little (claustrophobic)
   - Just right (professional)

   LEAD ROOM:
   - Space dalam direction subject facing/moving
   - Makes frame feel balanced
   - Gives visual breathing room

   DEPTH:
   - Foreground, midground, background elements
   - Creates three-dimensional feel
   - More interesting than flat shots

   LIGHTING BASICS:

   THREE-POINT LIGHTING:

#### 1. KEY LIGHT:

      - Main light source
      - Positioned 45° from subject
      - Strongest light

#### 2. FILL LIGHT:

      - Softer light opposite key
      - Reduces shadows
      - Less intense than key (50-75%)

#### 3. BACK LIGHT:

      - Behind subject
      - Separates from background
      - Adds depth, dimension

   NATURAL LIGHTING:
   - Window light is beautiful
   - Avoid direct sunlight (too harsh)
   - Overcast days provide soft, even light
   - Golden hour (sunrise/sunset) gorgeous

   AUDIO FOR VIDEO:

   Even great visuals fail dengan poor audio:

   - Use external microphone (not camera mic)
   - Lavalier mic for interviews
   - Shotgun mic for general use
   - Record separate audio track when possible
   - Monitor audio dengan headphones
   - Watch levels (peak around -12dB)
   - Get room tone (silence) for editing

#### 4. Stock Footage dan Asset Integration

   When original footage insufficient atau budget limited:

   FREE STOCK VIDEO SOURCES:

   - Pexels Videos: pexels.com/videos
   - Pixabay: pixabay.com/videos
   - Coverr: coverr.co
   - Videvo: videvo.net
   - Mixkit: mixkit.co

   USAGE:
   - B-roll to cover edits atau add context
   - Establishing shots (city skylines, etc.)
   - Transitions between scenes
   - Abstract backgrounds
   - Concepts difficult to film (space, nature, etc.)

   GRAPHICS DAN MOTION GRAPHICS:

   - Create titles dalam DaVinci Resolve/Kdenlive
   - Simple animations dalam Canva (export as video)
   - PNG sequences for frame-by-frame
   - Free motion graphics templates online

   MUSIC FOR VIDEO:

   Same sources as podcast music:
   - YouTube Audio Library
   - Free Music Archive
   - Incompetech
   - Always check license terms

### D. VIDEO EDITING dengan DAVINCI RESOLVE / KDENLIVE

#### 1. DaVinci Resolve Basics

   DAVINCI RESOLVE OVERVIEW:

   Professional-grade video editing software, free version extremely capable.
   Used untuk Hollywood films, yet accessible for beginners.

   Download: blackmagicdesign.com/products/davinciresolve

   SYSTEM REQUIREMENTS:
   - Windows 10/11, macOS, Linux
   - 16GB RAM recommended (8GB minimum)
   - Dedicated GPU helpful
   - SSD storage for projects

   INTERFACE PAGES:

   DaVinci organized into specialized "pages":

#### 1. MEDIA: Import dan organize footage

#### 2. CUT: Simplified, fast editing

#### 3. EDIT: Traditional timeline editing (where you'll spend most time)

#### 4. FUSION: Motion graphics dan VFX

#### 5. COLOR: Color grading dan correction

#### 6. FAIRLIGHT: Audio editing dan mixing

#### 7. DELIVER: Export finished video

   EDIT PAGE LAYOUT:

   - MEDIA POOL (top left): Imported clips
   - VIEWER (center): Video preview
   - TIMELINE (bottom): Where editing happens
   - INSPECTOR (top right): Clip properties
   - EFFECTS LIBRARY (left): Transitions, titles, effects

   BASIC WORKFLOW:

   STEP 1: Project Setup
   - File > New Project
   - Name project appropriately
   - File > Project Settings:
     * Timeline resolution: 1920x1080
     * Timeline frame rate: 30fps (or your choice)

   STEP 2: Import Media
   - File > Import Media (atau drag into Media Pool)
   - Import video clips, audio, images
   - Organize into bins (folders) jika many clips

   STEP 3: Arrange Clips
   - Drag clips dari Media Pool to Timeline
   - Video appears pada video track
   - Audio appears pada audio track below
   - Drag edges to trim clips

   STEP 4: Basic Edits
   - BLADE tool (B): Cut clips
   - SELECTION tool (A): Select, move clips
   - TRIM tool: Adjust edit points
   - Delete gaps: Right-click > Ripple Delete

   STEP 5: Add Transitions
   - Effects Library > Video Transitions
   - Drag transition between clips
   - Default: Cross Dissolve
   - In Inspector: adjust duration

   STEP 6: Add Titles
   - Effects Library > Titles
   - Drag title to timeline above video
   - In Viewer: double-click to edit text
   - Inspector: change font, size, color, position

   STEP 7: Color Correction
   - Switch to Color page
   - Adjust brightness, contrast, saturation
   - Use color wheels untuk mood
   - Apply LUTs untuk cinematic looks

   STEP 8: Audio Mixing
   - Switch to Fairlight page
   - Adjust audio levels (dialogue around -12dB)
   - Add fade in/out
   - Music duck under voice
   - Noise reduction if needed

   STEP 9: Export
   - Switch to Deliver page
   - Choose format (H.264 most common)
   - Settings:
     * Resolution: 1920x1080
     * Frame rate: match timeline
     * Codec: H.264
     * Quality: Automatic atau 15,000 Kbps
   - Add to Render Queue
   - Start Render

#### 2. Kdenlive Basics (Alternative)

   KDENLIVE OVERVIEW:

   Free, open-source video editor. Lighter system requirements than
   DaVinci Resolve, good untuk less powerful computers.

   Download: kdenlive.org

   BENEFITS:
   - Completely free dan open-source
   - Runs well pada modest hardware
   - Cross-platform (Windows, Mac, Linux)
   - Active community support
   - Frequently updated

   INTERFACE:

   - PROJECT BIN (top left): Imported clips
   - MONITORS (top center): Clip dan Project preview
   - EFFECTS (top right): Video dan audio effects
   - TIMELINE (bottom): Main editing workspace

   BASIC WORKFLOW:

   STEP 1: New Project
   - Project > New
   - Choose project folder
   - Select profile (1080p 30fps typical)

   STEP 2: Import Media
   - Project > Add Clip atau Video
   - Clips appear dalam Project Bin
   - Create folders untuk organization

   STEP 3: Timeline Editing
   - Drag clips to timeline
   - Multiple video/audio tracks available
   - Trim clips by dragging edges
   - Razor tool (X): cut clips
   - Selection tool (S): move clips
   - Spacer tool: move multiple clips together

   STEP 4: Transitions
   - Drag corner between two clips to create dissolve
   - Adjust transition duration
   - Effects > Transitions for more options

   STEP 5: Effects
   - Effects panel: drag effect onto clip
   - Adjust parameters
   - Common: Color correction, brightness, blur

   STEP 6: Titles
   - Project > Add Title Clip
   - Type text dalam title editor
   - Choose font, size, color
   - Drag title clip to timeline
   - Position over video

   STEP 7: Audio
   - Drag audio clip volume line up/down
   - Create keyframes untuk fade in/out
   - Right-click > Split Audio for separate control

   STEP 8: Render
   - Project > Render
   - Choose profile (MP4 H.264 common)
   - Settings:
     * Resolution: 1080p
     * Bitrate: 5000-15000 kb/s
   - Select output destination
   - Render

#### 3. Editing Techniques dan Best Practices

   CUTTING DAN PACING:

   J-CUT DAN L-CUT:
   - J-CUT: Audio comes before video
   - L-CUT: Audio continues after video changes
   - Creates smoother transitions
   - More professional feel
   - Natural conversation flow

   CUTTING ON ACTION:
   - Cut during movement
   - Hides edit point
   - Maintains flow
   - Keep viewer engaged

   RHYTHM DAN PACE:
   - Vary shot lengths untuk interest
   - Faster cuts = energy, excitement
   - Longer holds = drama, contemplation
   - Match pace to content mood
   - Cut to music beats

   B-ROLL USAGE:

   Purpose: Cover edits, add visual interest, illustrate concepts

   Tips:
   - Cut to b-roll to hide awkward edit dalam interview
   - Illustrate what's being discussed
   - 3-5 seconds typical per b-roll shot
   - Return to main footage smoothly
   - Don't overuse - purposeful only

   COLOR GRADING:

   PURPOSE:
   - Create mood dan atmosphere
   - Stylistic consistency
   - Fix white balance issues
   - Enhance visual appeal

   WORKFLOW:
   - Correct first (fix problems)
   - Grade second (artistic choices)
   - Match shots dalam same scene
   - Subtle usually better than extreme
   - Use reference images

   COMMON LOOKS:
   - WARM: Orange tones, cozy, nostalgic
   - COOL: Blue tones, modern, corporate
   - DESATURATED: Muted colors, dramatic
   - HIGH CONTRAST: Punchy, bold
   - FILMIC: Raised blacks, soft highlights

   TEXT DAN GRAPHICS:

   TITLES:
   - Readable fonts
   - Sufficient contrast dengan background
   - 1/3 rule: keep text dalam "safe zones"
   - Consistent style throughout
   - Don't leave too long atau too short

   LOWER THIRDS:
   - Identify speakers
   - On screen 3-5 seconds
   - Positioned lower third of frame
   - Include name and optionally title
   - Animate in/out smoothly

   CALL-OUT TEXT:
   - Emphasize key points
   - Short phrases only
   - Timed dengan spoken words
   - Use animation sparingly

   SOUND DESIGN:

   - Clean dialogue primary focus
   - Background music supports, doesn't compete
   - Sound effects add realism or impact
   - Foley (footsteps, etc.) for immersion
   - Silence can be powerful tool

   EXPORTING:

   COMMON FORMATS:

   - H.264/MP4: Most compatible, good quality, reasonable file size
   - H.265/HEVC: Better compression, smaller files, less compatible
   - ProRes: Very high quality, large files, for further editing

   SETTINGS GUIDE:

   For YouTube/Social Media:
   - Format: MP4
   - Codec: H.264
   - Resolution: 1920x1080 (atau original)
   - Frame Rate: Match source
   - Bitrate: 8,000-15,000 kbps untuk 1080p
   - Audio: AAC, 320 kbps

   For Instagram:
   - Square (1:1): 1080x1080
   - Vertical (9:16): 1080x1920
   - Landscape (16:9): 1920x1080

   For Professional Use:
   - Higher bitrate atau lossless codec
   - Full resolution
   - Include alpha channel jika transparency needed

### E. DISTRIBUTION DAN PROMOTION

#### 1. Podcast Distribution

   PODCAST HOSTING PLATFORMS:

   Must host podcast dengan dedicated podcast host (not just YouTube):

   FREE OPTIONS:
   - Anchor (by Spotify): Free, unlimited, auto-distribution
   - Buzzsprout: Free tier (2 hours/month)
   - Podomatic: Free dengan ads
   - Spreaker: Free tier limited

   PAID OPTIONS (better analytics, no limits):
   - Buzzsprout: $12-24/month
   - Transistor: $19/month+
   - Libsyn: $5-80/month
   - Podbean: $9+/month

   RSS FEED:
   - Hosting platform generates RSS feed
   - RSS feed is podcast's "address"
   - Submit RSS to directories for distribution

   PODCAST DIRECTORIES:

   Submit to major platforms:

   ESSENTIAL:
   - Apple Podcasts (biggest platform)
   - Spotify (rapidly growing)
   - Google Podcasts

   RECOMMENDED:
   - Stitcher
   - TuneIn
   - iHeartRadio
   - Amazon Music/Audible
   - Deezer
   - Podcast Addict
   - Castbox

   SUBMISSION PROCESS:
   - Create podcast RSS feed (via host)
   - Create account pada each directory
   - Submit RSS feed
   - Wait for approval (1-10 days typically)
   - Publish episodes

   OPTIMIZATION:

   - Compelling show description
   - Strategic keywords
   - Category selection (be specific)
   - Consistent publishing schedule
   - Show notes for each episode
   - Transcripts for accessibility dan SEO

#### 2. Video Release Distribution

   PRIMARY PLATFORMS:

   YOUTUBE:
   - Create channel (free)
   - Upload video (< 15 min default, verify untuk longer)
   - Optimize title (keywords, compelling)
   - Write detailed description (first 2 lines crucial)
   - Tags (specific > generic)
   - Custom thumbnail (1280x720px)
   - End screens dan cards
   - Playlists for organization

   SOCIAL MEDIA:

   INSTAGRAM:
   - Feed posts (60 sec max)
   - Stories (vertical, 15 sec segments)
   - Reels (60 sec max, prioritized by algorithm)
   - IGTV (longer content)
   - Captions essential (most watch muted)

   FACEBOOK:
   - Native upload better than YouTube link
   - Square atau vertical preferred
   - Captions crucial
   - Short teaser + link to full version

   TIKTOK:
   - Vertical format only
   - 15-60 seconds
   - Trending sounds/music boost reach
   - Hashtags important
   - Fast-paced editing

   TWITTER:
   - Native upload < 2:20 minutes
   - Thread untuk context
   - Text matters for engagement
   - GIFs from video dapat perform well

   LINKEDIN:
   - Professional context
   - Native upload
   - Business-relevant content
   - Add value, don't just sell

   PLATFORM-SPECIFIC OPTIMIZATION:

   For each platform, consider:
   - Aspect ratio (16:9, 1:1, 9:16)
   - Duration (each platform has sweet spots)
   - Captions (accessibility + muted viewing)
   - Thumbnail (when applicable)
   - Optimal posting times
   - Hashtag/keyword strategy

   CROSS-PROMOTION:

   - Tease video release on all platforms
   - Different versions untuk different platforms
   - Call-to-action to subscribe/follow
   - Behind-the-scenes content
   - Repurpose into multiple formats

## PRAKTIKUM

PRAKTIKUM 14: PODCAST EPISODE + VIDEO RELEASE CREATION

OBJECTIVE:
Complete production dari podcast episode dengan cover art DAN short video
release, demonstrating full workflow dari planning hingga distribution-ready
deliverables.

CHOOSE ONE PRIMARY FOCUS:

OPTION A: PODCAST EPISODE PRODUCTION (Primary focus)
OPTION B: VIDEO RELEASE PRODUCTION (Primary focus)

Whichever chosen as primary will be more detailed, other will be simpler
but still complete.

===== OPTION A: PODCAST EPISODE (Primary) =====

DELIVERABLES:

#### 1. COMPLETE PODCAST EPISODE

   - Duration: 5-10 minutes minimum
   - Fully edited dan production-ready
   - Format: MP3, 128kbps atau higher
   - Professional audio quality

#### 2. PODCAST COVER ART

   - 3000x3000px
   - PNG format
   - Platform-compliant
   - Professional design

#### 3. SHOW NOTES

   - Episode description (100-300 words)
   - Timestamps untuk major segments
   - Links/resources mentioned
   - Call-to-action

#### 4. SHORT VIDEO TEASER

   - 15-30 seconds
   - Vertical format (1080x1920)
   - Promote podcast episode
   - For social media distribution

REQUIREMENTS:

Podcast Episode Content Options:
- Interview dengan someone interesting
- Solo: share expertise atau tell story
- Educational tutorial on topic you know
- Discussion/debate dengan co-host
- Narrative storytelling
- Commentary on current topic dalam your field

Technical Requirements:
- Clean audio (noise reduction applied)
- Normalized levels (-1.0 dB max)
- Intro music (5-15 sec)
- Outro music (10-30 sec)
- Smooth edits (no cracks atau pops)
- Consistent volume throughout
- ID3 tags embedded

LANGKAH-LANGKAH:

STEP 1: Planning (30 menit)
- Choose podcast topic dan format
- Write basic outline / script
- Identify needed resources
- Prepare questions (if interview)
- Plan segment structure

STEP 2: Cover Art Design (45 menit)
- Research similar podcasts untuk inspiration
- Sketch layout ideas
- Create dalam Canva (3000x3000px)
- Ensure readability at small size
- Export as PNG

STEP 3: Audio Recording (60 menit)
- Set up quiet recording environment
- Test levels dalam Audacity
- Record room tone (30 seconds silence)
- Record podcast content
  * Allow extra time untuk mistakes
  * Pause and restart jika needed
  * Record multiple takes untuk key points
- Record outro/announcements

STEP 4: Audio Editing dalam Audacity (90-120 menit)
- Import recorded audio
- Apply noise reduction
  * Select room tone
  * Get Noise Profile
  * Apply to entire track
- Normalize audio (-1.0 dB)
- Edit content:
  * Remove mistakes
  * Tighten pauses
  * Cut filler words (excessive "um", "uh")
  * Smooth transitions
- Add intro music:
  * Import royalty-free track
  * Trim to 5-15 seconds
  * Use Envelope tool to fade out under voice
- Add outro music
- Background music optional:
  * Use Envelope tool untuk ducking
  * Keep subtle (background only)
- Apply compression:
  * Threshold: -12 dB
  * Ratio: 3:1
  * Gentle, consistent sound
- Final normalize pass
- Listen through entirely
- Export as WAV first (backup)
- Export as MP3:
  * File > Export > Export as MP3
  * Bitrate: 128 kbps minimum (192 kbps better)
  * Add ID3 tags:
    - Track Title: Episode name
    - Artist: Podcast name
    - Album: Podcast name
    - Year: Current year

STEP 5: Show Notes Creation (20 menit)
- Write episode description:
  * What episode covers
  * Key takeaways
  * Guest info (if applicable)
- Create timestamps:
  * 0:00 - Intro
  * 1:15 - Topic 1
  * 3:30 - Topic 2
  * etc.
- List resources mentioned:
  * Websites, books, tools referenced
  * Guest social media / website
- Call-to-action:
  * Subscribe/follow
  * Rate dan review
  * Social media handles
  * Website atau contact

STEP 6: Video Teaser (45 menit - simpler since secondary)
- Extract 15-30 second exciting excerpt dari podcast
- Create dalam Canva atau video editor:
  * 1080x1920px vertical
  * Podcast cover art displayed
  * Audiogram visualization (Canva has templates)
  * Text overlays dengan key quote
  * "New Episode Out Now" graphic
  * Where to listen information
- Export as MP4
- Optimize untuk Instagram/TikTok

===== OPTION B: VIDEO RELEASE (Primary) =====

DELIVERABLES:

#### 1. COMPLETE VIDEO RELEASE

   - Duration: 60-90 seconds minimum
   - Fully edited dan professional
   - Format: MP4 (H.264)
   - 1920x1080 atau vertical jika social-first
   - Includes music, graphics, color grading

#### 2. STORYBOARD

   - Detailed shot-by-shot plan
   - Minimum 10 frames
   - Annotations for each shot

#### 3. AUDIO PODCAST EXCERPT

   - 3-5 minute audio segment
   - Behind-the-scenes OR making-of OR interview about video
   - Fully edited dalam Audacity
   - With simple cover art

REQUIREMENTS:

Video Release Content Options:
- Product/service announcement
- Personal brand promotional video
- Event highlight reel
- Music video atau lyric video
- Short documentary
- Tutorial atau how-to
- Campaign video for cause you support

Technical Requirements:
- 1920x1080px minimum resolution
- Stable footage (tripod atau stabilization)
- Clean audio
- Color grading applied
- Professional transitions
- Opening title
- Closing call-to-action
- Credits (music, footage sources)

LANGKAH-LANGKAH:

STEP 1: Concept Development (30 menit)
- Define video purpose dan message
- Identify target audience
- Determine key takeaway
- Choose appropriate tone/mood
- Plan distribution strategy

STEP 2: Scriptwriting (45 menit)
- Write shot-by-shot script:
  * Scene description
  * Dialogue / voiceover
  * Audio (music, sound effects)
  * Duration estimates
- Read aloud untuk timing
- Revise untuk clarity

STEP 3: Storyboarding (60 menit)
- Create visual plan untuk each shot
- Use Canva storyboard template atau paper
- Minimum 10 frames (shots)
- Include:
  * Frame sketch atau description
  * Shot type (CU, MS,  etc.)
  * Camera movement
  * Audio notes
  * Transition type
- Ensure logical flow

STEP 4: Asset Gathering (45 menit)
- Film original footage (if possible):
  * Plan shooting locations
  * Ensure good lighting
  * Stable shots (tripod)
  * Record clean audio
  * Multiple takes untuk each shot
  * B-roll footage
- Source stock footage:
  * Pexels, Pixabay, etc.
  * Match storyboard needs
  * High resolution (1080p+)
  * Consistent visual style
- Download royalty-free music
- Gather graphics/logos needed

STEP 5: Video Editing (120-150 menit)
- Import all assets into DaVinci Resolve atau Kdenlive
- Arrange clips according to storyboard
- Trim clips untuk pacing
- Add transitions:
  * Cross dissolves
  * Hard cuts untuk impact
  * Creative transitions purposefully
- Add titles:
  * Opening title
  * Lower thirds jika interviews
  * Key text overlays
  * Closing credits
- Color grading:
  * Correct exposure inconsistencies
  * Apply cohesive look
  * Enhance mood
- Audio mixing:
  * Background music track
  * Adjust levels (dialogue clear)
  * Sound effects jika appropriate
  * Smooth fades
- Review dan refine:
  * Watch multiple times
  * Check pacing
  * Ensure message clear
  * Fix any technical issues
- Export:
  * MP4, H.264 codec
  * 1920x1080, 30fps
  * Bitrate: 10,000-15,000 kbps

STEP 6: Podcast Excerpt (60 menit - simpler since secondary)
- Choose podcast angle:
  * OPTION 1: Behind-the-scenes commentary on video process
  * OPTION 2: Interview about video topic
  * OPTION 3: Extended discussion dari video topic
- Record 3-5 minutes dalam Audacity:
  * Introduction to video
  * Main content (BTS/interview/discussion)
  * Call-to-action (watch video, subscribe)
- Edit dalam Audacity:
  * Noise reduction
  * Normalize
  * Trim mistakes
  * Add simple intro music (5 sec)
  * Add outro
- Export as MP3
- Create simple cover art dalam Canva:
  * 3000x3000px
  * Video screenshot atau related graphic
  * Podcast title

===== UNIVERSAL REQUIREMENTS (Both Options) =====

SUBMISSION PACKAGE:

Submit organized folder containing:

#### 1. PRIMARY DELIVERABLE:

   - OPTION A: Podcast MP3 file (properly tagged)
   - OPTION B: Video MP4 file (final export)

#### 2. CONCEPT DOCUMENT (PDF):

   - Project description
   - Target audience identification
   - Goals dan objectives
   - Content outline / script
   - Technical specifications used

#### 3. PRODUCTION ASSETS:

   - Storyboard (if video primary)
   - Script / outline
   - Show notes (if podcast primary)
   - Cover art source files (Canva link atau PNG)

#### 4. SECONDARY DELIVERABLE:

   - OPTION A: Social media video teaser
   - OPTION B: Podcast excerpt MP3 + cover art

#### 5. PROCESS DOCUMENTATION:

   - Screenshots from editing process
   - Notes on challenges dan solutions
   - Software/tools used list
   - Asset sources credited

#### 6. REFLECTION (1 page):

   - What worked well
   - What was challenging
   - What you learned
   - How you'd improve dengan more time/resources

FILE NAMING:
- NIM_Nama_P14_Primary.[mp3/mp4]
- NIM_Nama_P14_CoverArt.png
- NIM_Nama_P14_Documentation.pdf
- NIM_Nama_P14_Secondary.[mp3/mp4]
- NIM_Nama_P14_Reflection.pdf

GRADING RUBRIC:

PRIMARY DELIVERABLE (60 points):
- Technical quality (audio/video) (15 pts)
- Content quality dan clarity (15 pts)
- Editing dan pacing (10 pts)
- Production values (graphics, music, polish) (10 pts)
- Creative execution (10 pts)

SECONDARY DELIVERABLE (15 points):
- Quality dan completeness (10 pts)
- Integration dengan primary (5 pts)

CONCEPT DAN PLANNING (15 points):
- Storyboard/script quality (8 pts)
- Strategic thinking (7 pts)

PROCESS DAN PROFESSIONALISM (10 points):
- Organization (3 pts)
- Documentation (3 pts)
- Reflection depth (4 pts)

BONUS (up to 10 extra points):
- Exceptional creativity
- Advanced techniques
- Outstanding polish
- Innovative concept

## TUGAS

TUGAS INDIVIDUAL: CONTENT SERIES PROPOSAL

Develop comprehensive proposal untuk ongoing content series (podcast OR
video series OR both).

REQUIREMENTS:

#### 1. SERIES CONCEPT (2-3 pages):

   - Series name dan tagline
   - Core concept dan theme
   - Target audience profile
   - Unique value proposition
   - Why this series matters
   - How it fills gap dalam existing content

#### 2. CONTENT STRATEGY (2-3 pages):

   - Episode format dan structure
   - Typical episode length
   - Publishing frequency realistic untuk you
   - First 10 episode ideas outlined:
     * Episode title
     * Brief description
     * Key takeaways
     * Required resources
   - Long-term content roadmap (future seasons)

#### 3. PRODUCTION PLAN (1-2 pages):

   - Equipment needed (what you have vs need)
   - Software dan tools
   - Production workflow
   - Time requirements per episode
   - Budget considerations
   - Quality standards

#### 4. VISUAL IDENTITY (deliverables):

   - Cover art / channel art design
   - Color palette
   - Typography choices
   - Brand guidelines (1 page)
   - Consistent visual elements

#### 5. DISTRIBUTION STRATEGY (1-2 pages):

   - Primary platforms
   - Platform-specific optimization
   - Cross-promotion tactics
   - Social media strategy
   - Audience building plan
   - Success metrics (how measure success)

#### 6. PILOT EPISODE (option untuk bonus):

   - Create pilot episode following your proposal
   - Full production value
   - Demonstrates series concept
   - Distribution-ready quality

DELIVERABLES:
#### 1. Proposal document (PDF, 8-12 pages)

#### 2. Visual identity package (cover art, brand guidelines)

#### 3. Sample content calendar (first month detailed)

#### 4. Optional: Pilot episode

SUBMISSION DEADLINE: 10 days from Pertemuan 14

FORMAT: Professional PDF + assets dalam organized folder

EVALUATION CRITERIA:
- Concept viability dan originality (25%)
- Strategic planning depth (25%)
- Production feasibility (20%)
- Visual identity quality (15%)
- Distribution strategy (15%)
- Bonus for pilot episode (up to 20% extra)

## QUIZ 3

Quiz 3 akan dilaksanakan pada AKHIR pertemuan ini atau AWAL Pertemuan 15,
covering Pertemuan 13-14.

TOPICS COVERED:
- Digital Brosur/Pamflet (Pertemuan 13)
- Email Direct Marketing (Pertemuan 13)
- Podcast Production (Pertemuan 14)
- Video Release (Pertemuan 14)

FORMAT:
- Multiple choice (40%)
- Short answer (30%)
- Technical application questions (30%)
- Duration: 45 minutes

AREAS TO REVIEW:
- Digital vs print media differences
- EDM design principles
- Mobile-responsive design
- A/B testing concepts
- Podcast production workflow
- Audio editing techniques dalam Audacity
- Video production basics
- Editing principles

PRACTICAL SKILLS TO DEMONSTRATE:
- Understanding of platform specifications
- Knowledge of software capabilities
- Problem-solving for production challenges
- Quality standards recognition

## RESOURCE TAMBAHAN

SOFTWARE:

AUDIO:
- Audacity: audacityteam.org (free, comprehensive audio editing)
- Anchor: anchor.fm (free podcast hosting + recording)
- GarageBand: Mac only, free, intuitive
- Ocenaudio: ocenaudio.com (simpler Audacity alternative)

VIDEO:
- DaVinci Resolve: blackmagicdesign.com (professional, free)
- Kdenlive: kdenlive.org (open-source, lightweight)
- OpenShot: openshot.org (beginner-friendly)
- Shotcut: shotcut.org (simple, capable)

DESIGN:
- Canva: canva.com (cover art, graphics, storyboards)
- GIMP: gimp.org (image editing)

LEARNING RESOURCES:

VIDEO TUTORIALS (Bahasa Indonesia):
- "Cara Membuat Podcast untuk Pemula" - Kreator Konten ID
  [https://www.youtube.com/results?search_query=cara+membuat+podcast](https://www.youtube.com/results?search_query=cara+membuat+podcast)
- "Tutorial Audacity Bahasa Indonesia" - Tutorial Software
  [https://www.youtube.com/results?search_query=audacity+tutorial+indonesia](https://www.youtube.com/results?search_query=audacity+tutorial+indonesia)
- "Video Editing untuk Pemula" - Belajar Video Editing
  [https://www.youtube.com/results?search_query=video+editing+pemula](https://www.youtube.com/results?search_query=video+editing+pemula)
- "DaVinci Resolve Tutorial Indonesia"
  [https://www.youtube.com/results?search_query=davinci+resolve+indonesia](https://www.youtube.com/results?search_query=davinci+resolve+indonesia)

VIDEO TUTORIALS (English):
- "Podcast Production Workflow" - Buzzsprout
  [https://www.youtube.com/user/buzzsprout](https://www.youtube.com/user/buzzsprout)
- "Audacity Complete Tutorial" - GCFLearnFree
  [https://www.youtube.com/watch?v=xl-WDjWrTtk](https://www.youtube.com/watch?v=xl-WDjWrTtk)
- "DaVinci Resolve for Beginners" - Casey Faris
  [https://www.youtube.com/c/CaseyFaris](https://www.youtube.com/c/CaseyFaris)
- "Kdenlive Tutorial Series" - OpenShot Studios
  [https://www.youtube.com/results?search_query=kdenlive+tutorial](https://www.youtube.com/results?search_query=kdenlive+tutorial)

PODCASTING RESOURCES:
- Podcast Insights: podcastinsights.com (comprehensive guides)
- The Podcast Host: thepodcasthost.com (tutorials, equipment)
- Buzzsprout Blog: buzzsprout.com/blog (industry insights)
- Pacific Content: pacificcontent.com/blog (storytelling)

VIDEO PRODUCTION:
- Shutterstock Tutorials: shutterstock.com/blog/category/tutorials
- No Film School: nofilmschool.com (industry knowledge)
- Frame.io Workflow: workflow.frame.io (production tips)
- Video Copilot: videocopilot.net (effects tutorials)

STOCK RESOURCES:

MUSIC (Royalty-Free):
- YouTube Audio Library: youtube.com/audiolibrary
- Free Music Archive: freemusicarchive.org
- Incompetech: incompetech.com (Kevin MacLeod)
- Bensound: bensound.com
- Purple Planet: purple-planet.com

SOUND EFFECTS:
- Freesound: freesound.org (largest free library)
- Zapsplat: zapsplat.com
- 99Sounds: 99sounds.org
- BBC Sound Effects: bbcsfx.acropolis.org.uk

VIDEO:
- Pexels Videos: pexels.com/videos
- Pixabay: pixabay.com/videos
- Coverr: coverr.co
- Videvo: videvo.net
- Mixkit: mixkit.co

IMAGES:
- Unsplash: unsplash.com
- Pexels: pexels.com
- Pixabay: pixabay.com

BOOKS DAN EBOOKS:
- "Out on the Wire" - Jessica Abel (radio/podcast storytelling)
- "Make Noise: A Creator's Guide to Podcasting" - Eric Nuzum
- "The Video Production Handbook" - Jim Owens
- "In the Blink of an Eye" - Walter Murch (editing philosophy)

COMMUNITIES:
- r/podcasting on Reddit (helpful community)
- r/VideoEditing on Reddit (editors sharing tips)
- Podcasters' Society Facebook Group
- Video Editing Discord servers
- Creative COW Forums: creativecow.net

EQUIPMENT RECOMMENDATIONS (Budget-Friendly):
- Microphone: USB mics starting $50 (Fifine, Samson, Blue Snowball)
- Tripod: Basic tripod $20-40
- Lighting: Ring light $30-50 atau natural window light
- Camera: Smartphone cameras surprisingly good
- Audio interface: Optional but Behringer UM2 ~$50

MOBILE APPS:
- Anchor: Complete podcast creation pada phone
- Adobe Premiere Rush: Mobile video editing
- KineMaster: Android video editing
- LumaFusion: iOS professional video editing
- Ferrite: iOS podcast editing

## TIPS PRAKTIS

PODCAST TIPS:

#### 1. Consistency beats perfection - publish regularly

#### 2. Good enough audio far better than delayed perfect audio

#### 3. Edit out dead air, keep energy up

#### 4. Hook listeners dalam first 30 seconds

#### 5. Show notes improve SEO dan listener experience

#### 6. Batch record multiple episodes untuk efficiency

#### 7. Have backup topics untuk when guests cancel

#### 8. Engage dengan listeners (respond to feedback)

#### 9. Cross-promote dengan other podcasters dalam niche

#### 10. Transcribe episodes for accessibility dan SEO

VIDEO TIPS:

#### 1. Lighting matters more than expensive camera

#### 2. Clean audio crucial even dalam video

#### 3. Tripod atau stabilization necessary

#### 4. Rule of thirds for better composition

#### 5. Shoot more footage than needed (editing flexibility)

#### 6. Color grade untuk cohesive look

#### 7. Keep titles readable (large text, high contrast)

#### 8. Export specifically untuk each platform

#### 9. Captions increase engagement significantly

#### 10. First 3 seconds determine if people keep watching

EDITING TIPS:

#### 1. Save frequently (prevent lost work)

#### 2. Organize files dalam clear folder structure

#### 3. Name files descriptively

#### 4. Keep backup copies of originals

#### 5. Edit untuk story first, effects second

#### 6. Watch dengan fresh eyes after breaking

#### 7. Get feedback before finalizing

#### 8. Export test versions to check quality

#### 9. Archive projects for future reference

#### 10. Learn keyboard shortcuts untuk efficiency

COMMON MISTAKES:

#### 1. Not testing audio before full recording

#### 2. Forgetting to monitor audio levels

#### 3. Recording dalam noisy environment

#### 4. Too much background music (distracting)

#### 5. Jerky handheld camera work

#### 6. Over-editing (sounds unnatural)

#### 7. Ignoring platform specifications

#### 8. No call-to-action at end

#### 9. Inconsistent branding

#### 10. Giving up after few episodes (consistency key)

## PERSIAPAN PERTEMUAN SELANJUTNYA

Pertemuan 15 akan membahas:

TOPIK: Online Advertising (Social Media)

Content akan mencakup:
- Social media advertising landscape
- Platform-specific ad formats
- Design specifications per platform
- Ad copywriting principles
- Targeting basics
- Creating ads dengan Canva
- Video vs static ads
- Stories dan Reels ads

Mahasiswa diharapkan:
#### 1. Complete Praktikum 14 dengan full attention to quality

#### 2. Submit all deliverables on time

#### 3. Review Quiz 3 materials if quiz belum diambil

#### 4. Research social media ads yang you find effective - save examples

#### 5. Think about product/service you'd like to advertise (for Pertemuan 15)

#### 6. Familiarize dengan Facebook Ads Manager interface (explore without creating)

#### 7. Consider Instagram dan TikTok ad examples you've seen

Preparation:
- Review your best design work dari semester untuk inspiration
- Bring example ads you admire (screenshots)
- Think about target audiences untuk different products
- Refresh Canva skills for fast design execution

Almost there! Pertemuan 15 covers cutting-edge advertising, then Pertemuan
16 is final exam. Strong finish ahead!

# MODUL PERKULIAHAN DESAIN KOMUNIKASI VISUAL - PERTEMUAN 15

JUDUL: Online Advertising (Social Media)

## SUB-CPMK

## Mahasiswa memahami dan praktek membuat online advertising menggunakan

social media platforms, serta menguasai platform-specific design requirements,
ad copywriting, targeting principles, dan creation workflow menggunakan
accessible design tools.

## TUJUAN PEMBELAJARAN

## Setelah mengikuti perkuliahan ini, mahasiswa diharapkan mampu:

#### 1. Memahami social media advertising landscape dan opportunities

#### 2. Membedakan ad formats across major platforms (Facebook, Instagram,

   TikTok, Twitter, LinkedIn)
#### 3. Menerapkan platform-specific design specifications dan requirements

#### 4. Menguasai ad copywriting principles untuk persuasive messaging

#### 5. Memahami targeting basics dan audience segmentation

#### 6. Menggunakan Canva untuk creating professional social media ads

#### 7. Membedakan effectiveness dari video vs static ads

#### 8. Merancang ads untuk Stories dan Reels formats

#### 9. Mengevaluasi ad performance metrics dan optimization strategies

#### 10. Menerapkan best practices untuk mobile-first advertising

#### 11. Memahami advertising policies dan compliance requirements

#### 12. Mengintegrasikan brand consistency across ad campaigns

## PENGANTAR MATERI

Social media advertising has revolutionized marketing landscape, democratizing
advertising access yang once exclusive untuk businesses dengan massive budgets.
Hari ini, virtually anyone dapat run sophisticated advertising campaigns
dengan unprecedented targeting capabilities, detailed analytics, dan budgets
scaling dari $1 hingga millions. Understanding social media advertising
adalah essential skill untuk modern marketers, designers, dan brand builders.

Traditional advertising - TV commercials, print ads, billboards - operates
pada broadcast model: create single message, display to masses, hope relevant
people see it. Social media advertising flips this model completely. Instead
dari broadcasting to everyone, advertisers dapat target extraordinarily
specific audiences based pada demographics, interests, behaviors, connections,
dan even recent online activity. This precision targeting dramatically
improves advertising efficiency dan ROI.

Berbeda platforms offer unique advantages dan capabilities. Facebook provides
most sophisticated targeting options with massive user base. Instagram excels
for visual brands dan younger demographics. LinkedIn dominates B2B advertising.
TikTok captures Gen Z attention dengan short-form video. Twitter offers
real-time conversation integration. Each platform requires understanding dari
its specific formats, specifications, audience behaviors, dan best practices.

Design requirements vary significantly across platforms. Aspect ratios differ -
vertical untuk Stories, square untuk feeds, horizontal untuk YouTube. File
size limits vary. Text-in-image ratios dapat affect delivery. Video specifications
differ. Successful advertisers master these technical requirements alongside
creative excellence. Platform-compliant designs aren't just technical necessity -
they're optimized untuk user experience pada each platform.

Ad copywriting is equally critical as visual design. Compelling copy grabs
attention, communicates value proposition quickly, overcomes objections, dan
drives action. Social media users scroll fast - you have fractions of seconds
untuk make impression. Copy must work with visuals harmoniously, be platform-
appropriate, speak audience language, dan guide toward clear call-to-action.

Video advertising has exploded dalam social media, consistently outperforming
static ads dalam engagement metrics. Video captures attention better, tells
richer stories, demonstrates products dynamically, dan algorithms increasingly
favor video content. However, video requires different skills, more production
time, dan careful optimization. Understanding when to use video vs static,
dan how to produce effective video ads, is crucial strategic knowledge.

Stories dan Reels represent frontier of social media advertising. Full-screen,
immersive, mobile-native formats designed untuk quick consumption match how
users actually use social media. These formats offer premium placement, high
engagement, dan younger audience reach. Designing untuk vertical, ephemeral
formats requires different thinking than traditional advertising.

Analytics dan optimization are what make digital advertising superior to
traditional media. Every impression, click, dan conversion is tracked. A/B
testing determines what works. Campaigns can adjust real-time based on
performance. Budget shifts toward best-performing ads automatically. This
data-driven approach means continuous improvement dan maximized results.

Pertemuan ini akan comprehensive coverage dari social media advertising dari
designer's perspective. You'll learn technical specifications, design best
practices, copywriting fundamentals, platform-specific strategies, dan
practical creation workflow. By end, you'll be capable of designing professional
social media ad campaigns ready untuk actual platform deployment.

## MATERI

### A. SOCIAL MEDIA ADVERTISING LANDSCAPE

#### 1. Overview dan Evolution

   DIGITAL ADVERTISING GROWTH:

   - Global digital ad spending exceeded traditional advertising dalam 2019
   - Social media advertising fastest-growing segment
   - Mobile advertising dominates (>70% of social ad spend)
   - Video advertising growing exponentially
   - Influencer marketing complementing traditional ads

   WHY SOCIAL MEDIA ADVERTISING WORKS:

**a. TARGETING PRECISION:**

      - Demographic targeting (age, gender, location, language)
      - Interest targeting (hobbies, preferences, behaviors)
      - Behavioral targeting (purchase history, device usage)
      - Lookalike audiences (similar to existing customers)
      - Retargeting (reached your website but didn't convert)

**b. COST EFFECTIVENESS:**

      - Pay only untuk results (clicks, impressions, conversions)
      - Scalable budgets (start dengan $5/day)
      - Better ROI than traditional media
      - Real-time budget optimization
      - Eliminates waste pada irrelevant audiences

**c. MEASURABILITY:**

      - Track every interaction
      - Conversion attribution
      - Detailed demographics of engagers
      - A/B test everything
      - Real-time performance data

**d. SPEED DAN AGILITY:**

      - Launch campaigns dalam minutes
      - Adjust real-time based on performance
      - Quick testing of ideas
      - Rapid iteration
      - No long production timelines

**e. ENGAGEMENT OPPORTUNITIES:**

      - Two-way communication
      - Social proof (likes, comments, shares)
      - Community building
      - Customer feedback
      - Viral potential

#### 2. Major Advertising Platforms Overview

   FACEBOOK:

   Strengths:
   - Largest user base (2.9+ billion users)
   - Most sophisticated targeting
   - Cross-platform delivery (Facebook + Instagram)
   - Diverse ad formats
   - Detailed analytics
   - All age demographics

   Best for:
   - B2C dan B2B
   - Lower-to-middle funnel (consideration, conversion)
   - Community building
   - Broad audience reach
   - E-commerce integration

   Ad formats:
   - Image ads
   - Video ads
   - Carousel ads (multiple images/videos)
   - Collection ads
   - Stories ads
   - Messenger ads

   INSTAGRAM:

   Strengths:
   - Visual-first platform (ideal untuk visual brands)
   - Younger demographics (18-34 primary)
   - High engagement rates
   - Shopping integration
   - Influencer collaboration
   - Beautiful aesthetic standard

   Best for:
   - Lifestyle brands
   - Fashion, beauty, food, travel
   - Visual products
   - Brand awareness
   - Upper funnel (discovery, interest)

   Ad formats:
   - Feed ads (square atau vertical)
   - Stories ads (full-screen vertical)
   - Reels ads (short-form video)
   - Explore ads
   - Shopping ads
   - IGTV ads

   TIKTOK:

   Strengths:
   - Explosive growth (1+ billion users)
   - Gen Z dan young millennials
   - Video-native platform
   - Viral potential
   - Authentic, fun content culture
   - Lower competition (relatively newer)

   Best for:
   - Youth-oriented brands
   - Entertainment, music, lifestyle
   - Brand awareness
   - Trend participation
   - Creative, entertaining approaches

   Ad formats:
   - In-Feed ads (native video ads)
   - TopView ads (full-screen quando app opens)
   - Brand Takeover
   - Branded Hashtag Challenge
   - Branded Effects

   TWITTER:

   Strengths:
   - Real-time conversations
   - News dan trending topics
   - Professional dan educated audience
   - Text-focused culture
   - Influencer reach

   Best for:
   - B2B
   - Tech, media, politics
   - Thought leadership
   - Event promotion
   - Customer service

   Ad formats:
   - Promoted Tweets
   - Promoted Accounts
   - Promoted Trends
   - Amplify (pre-roll video)
   - Takeover ads

   LINKEDIN:

   Strengths:
   - Professional network
   - B2B advertising dominant
   - High-income demographics
   - Decision-maker targeting
   - Industry dan job title targeting

   Best for:
   - B2B exclusively
   - Professional services
   - Recruitment
   - Lead generation
   - Thought leadership

   Ad formats:
   - Sponsored Content (feed posts)
   - Sponsored InMail (direct messaging)
   - Text Ads (sidebar)
   - Dynamic Ads (personalized)
   - Video Ads

   YOUTUBE:

   Strengths:
   - Second-largest search engine
   - Video consumption leader
   - All demographics
   - Long-form content habitat
   - Google integration targeting

   Best for:
   - Video-first messaging
   - Tutorials, education
   - Entertainment
   - Product demonstrations
   - Brand storytelling

   Ad formats:
   - Skippable in-stream ads
   - Non-skippable in-stream ads
   - Bumper ads (6 seconds)
   - Discovery ads
   - Masthead ads

#### 3. Advertising Objectives dan Funnel

   MARKETING FUNNEL:

   AWARENESS (Top of Funnel):
   Objective: Introduce brand, reach new audiences
   Metrics: Reach, impressions, video views
   Ad types: Video ads, image ads, brand lift studies

   CONSIDERATION (Middle of Funnel):
   Objective: Generate interest, engagement, consideration
   Metrics: Clicks, traffic, engagement, video views
   Ad types: Traffic ads, engagement ads, lead generation

   CONVERSION (Bottom of Funnel):
   Objective: Drive purchases, sign-ups, actions
   Metrics: Conversions, cost per acquisition, ROAS
   Ad types: Conversion ads, catalog sales, store visits

   LOYALTY (Post-Purchase):
   Objective: Retain customers, encourage repeat purchases
   Metrics: Repeat purchase rate, lifetime value
   Ad types: Retargeting, upsell campaigns

   ADVOCACY:
   Objective: Turn customers into brand advocates
   Metrics: Reviews, referrals, user-generated content
   Ad types: Review campaigns, referral incentives

   CAMPAIGN STRUCTURE:

   Most platforms organize ads hierarchically:

   CAMPAIGN LEVEL:
   - Overall objective (awareness, consideration, conversion)
   - Budget allocation
   - Campaign dates

   AD SET LEVEL:
   - Target audience definition
   - Placement selection
   - Schedule
   - Budget per ad set

   AD LEVEL:
   - Creative assets (images, video)
   - Ad copy (headline, description, CTA)
   - Links dan tracking
   - Multiple ad variations

### B. PLATFORM-SPECIFIC DESIGN SPECIFICATIONS

#### 1. Facebook Ad Specifications

   IMAGE ADS:

   Recommended specs:
   - Format: JPG or PNG
   - Resolution: 1080x1080 pixels minimum
   - Aspect ratio: 1:1 (square) recommended
   - File size: Maximum 30MB
   - Text: Minimal text in image (historically 20% rule, now guideline)

   Alternative aspect ratios:
   - 1.91:1 (landscape) - 1200x628 pixels
   - 4:5 (vertical) - 1080x1350 pixels

   Design considerations:
   - High-quality, eye-catching imagery
   - Minimal text overlay (more text = less reach historically)
   - Mobile-first design (majority view on mobile)
   - Brand visibility even in thumbnail
   - Single clear focus

   VIDEO ADS:

   Recommended specs:
   - Format: MP4, MOV
   - Resolution: 1080x1080 minimum (square)
   - Aspect ratio: 1:1, 4:5, 16:9 supported
   - Duration: 1 second - 241 minutes (but shorter better)
   - File size: Maximum 4GB
   - Captions: Include (85% watch without sound)

   Best practices:
   - Hook dalam first 3 seconds
   - Design untuk sound-off viewing
   - Square atau vertical for mobile
   - Keep under 15 seconds jika possible
   - Include branding early

   CAROUSEL ADS:

   Each card:
   - Format: JPG or PNG
   - Resolution: 1080x1080 pixels
   - Aspect ratio: 1:1 only
   - File size: Maximum 30MB each
   - Cards: 2-10 images/videos

   Use cases:
   - Showcase multiple products
   - Tell sequential story
   - Highlight different features
   - Before/after comparisons

   STORIES ADS:

   Specs:
   - Format: JPG, PNG, MP4, MOV
   - Resolution: 1080x1920 pixels
   - Aspect ratio: 9:16 (vertical only)
   - Duration: 1-15 seconds (video)
   - File size: Image 30MB, Video 4GB

   Design considerations:
   - Full-screen immersive experience
   - Text dalam "safe zone" (avoid top/bottom 250px)
   - Vertical orientation only
   - Quick attention-grabbing
   - Interactive elements (polls, swipe-ups)

#### 2. Instagram Ad Specifications

   FEED ADS:

   Image:
   - Resolution: 1080x1080 pixels (square) recommended
   - Aspect ratio: 1:1 (square), 1.91:1 (landscape), 4:5 (vertical)
   - Format: JPG, PNG
   - File size: Maximum 30MB
   - Caption: Up to 2,200 characters (first 125 visible)

   Video:
   - Resolution: 1080x1080 minimum
   - Aspect ratio: square (1:1) atau vertical (4:5) recommended
   - Duration: 1 second - 60 minutes (under 60 sec recommended)
   - Format: MP4, MOV
   - File size: Maximum 4GB

   Design best practices:
   - High-quality, aesthetically pleasing
   - Consistent dengan Instagram's visual culture
   - Brand-appropriate filters/editing
   - Clear product/message focus
   - Mobile-optimized

   STORIES ADS:

   Same specs as Facebook Stories:
   - 1080x1920 pixels
   - 9:16 aspect ratio
   - 15 seconds maximum per story
   - Full-screen vertical design

   Instagram-specific considerations:
   - More casual, authentic feel than feed
   - Interactive stickers valuable
   - Swipe-up CTA prominent
   - Design consistency dengan organic stories

   REELS ADS:

   Specs:
   - Resolution: 1080x1920 pixels
   - Aspect ratio: 9:16 vertical
   - Duration: Up to 60 seconds (15-30 optimal)
   - Format: MP4, MOV
   - Sound: Original audio encouraged

   Best practices:
   - Entertaining, not overly salesy
   - Trending audio when appropriate
   - Fast-paced editing
   - Hook dalam first second
   - Native-feeling content (not obvious ad)
   - Participate dalam trends

   EXPLORE ADS:

   Appear dalam Explore feed, follow same specs as Feed ads.

   Advantage:
   - Discovery mindset users
   - Interest-based targeting
   - Expanded reach beyond followers

#### 3. TikTok Ad Specifications

   IN-FEED ADS:

   Video specs:
   - Resolution: 1080x1920 pixels (or 720x1280 minimum)
   - Aspect ratio: 9:16 (vertical full-screen)
   - Duration: 5-60 seconds (9-15 seconds optimal)
   - Format: MP4, MOV, MPEG, AVI, WebM
   - File size: Maximum 500MB
   - Bitrate: 516 kbps atau higher

   Design principles:
   - NATIVE FEEL: Should look like organic TikTok, not ad
   - HOOK IMMEDIATELY: First second critical
   - VERTICAL ONLY: Horizontal crops poorly
   - SOUND-ON: Unlike other platforms, TikTok watched dengan sound
   - TRENDING: Use trending sounds, effects, formats
   - AUTHENTIC: Polished but not overly produced
   - FAST-PACED: Quick cuts, dynamic editing
   - TEXT OVERLAYS: Common in TikTok culture

   Text specs:
   - Ad text: 12-100 characters
   - Headline: Maximum 12-34 characters (depending on placement)

   Best practices:
   - Use TikTok creators untuk authentic content
   - Participate dalam challenges
   - Leverage trending audio
   - User-generated content style
   - Behind-the-scenes, authentic moments
   - Educational atau entertaining (not just selling)

   TOPVIEW ADS:

   Premium placement - first thing when app opens:
   - Same specs as In-Feed
   - Duration: Up to 60 seconds
   - Full-screen immersive
   - Highest visibility placement
   - Higher cost but guaranteed attention

#### 4. Twitter dan LinkedIn Specifications

   TWITTER ADS:

   Image ads:
   - Aspect ratio: 1:1 (square) atau 16:9 (landscape)
   - Recommended: 1200x1200 (square) or 1200x675 (landscape)
   - Format: PNG, JPG
   - File size: Maximum 5MB

   Video ads:
   - Aspect ratio: 1:1 or 16:9 recommended
   - Duration: 15 seconds optimal, 2:20 maximum
   - Format: MP4, MOV
   - File size: Maximum 1GB

   Text:
   - Tweet: 280 characters
   - Headline: Optional
   - Description: Optional

   Design considerations:
   - Text-first platform culture
   - Copy more important than visual
   - Current events relevance
   - Conversational tone

   LINKEDIN ADS:

   Sponsored Content (image):
   - Resolution: 1200x627 pixels (1.91:1)
   - Format: PNG, JPG
   - File size: Maximum 5MB

   Sponsored Content (video):
   - Aspect ratio: 1:1, 16:9, 9:16, 2.4:1 supported
   - Duration: 3 seconds - 30 minutes (15 sec-30 sec optimal)
   - Format: MP4
   - File size: Maximum 200MB

   Text:
   - Intro text: 150 characters (before "see more")
   - Headline: 70 characters
   - Description: 100 characters

   Design considerations:
   - Professional, polished aesthetic
   - Relevant to business context
   - Value-forward messaging
   - Educational over promotional
   - Data dan insights appreciated

### C. AD COPYWRITING PRINCIPLES

#### 1. Core Copywriting Fundamentals

   ATTENTION:

   First job of ad is getting noticed among endless scroll:

   - PATTERN INTERRUPT: Stand out dari feed uniformity
   - BOLD STATEMENTS: Strong, confident claims
   - QUESTIONS: Engage curiosity
   - NUMBERS: Specific results attract attention
   - EMOTION: Strong feelings stop scrolling

   Examples:
   Good: "97% of customers couldn't believe this simple trick"
   Good: "Why are thousands switching to [product]?"
   Poor: "Check out our new product"
   Poor: "Buy now"

   INTEREST:

   Once attention grabbed, generate interest quickly:

   - BENEFIT-FOCUSED: What's dalam it untuk them?
   - PROBLEM/SOLUTION: Identify pain point, offer solution
   - CURIOSITY GAP: Create desire to learn more
   - SOCIAL PROOF: Others' success generates interest
   - UNIQUE VALUE PROP: What makes this different?

   DESIRE:

   Transform interest into wanting:

   - PAINT THE PICTURE: Describe transformation
   - EMOTIONAL BENEFITS: How will they feel?
   - OVERCOME OBJECTIONS: Address concerns preemptively
   - SCARCITY/URGENCY: Limited time/quantity
   - ASPIRATIONAL: Connect to identity goals

   ACTION:

   Clear, compelling call-to-action:

   - SPECIFIC: "Download Free Guide" not "Learn More"
   - VALUABLE: Emphasize benefit of clicking
   - URGENT: Time-sensitive language
   - FRICTIONLESS: Make action easy
   - SINGULAR: One clear action, not multiple options

#### 2. Platform-Appropriate Copy

   FACEBOOK/INSTAGRAM:

   Style: Conversational, friendly, relatable
   Length: Flexible - short punchy atau longer storytelling both work
   Emoji: Acceptable, even encouraged untuk emphasis
   Hashtags: 3-5 relevant hashtags Instagram (sparingly Facebook)
   Tone: Casual to professional depending on brand

   Structure:
   - Hook dalam first line
   - Expand value proposition
   - Include call-to-action
   - Hashtags at end

   Example:
   "☀️ Tired of sunburns ruining your beach days?

   Our SPF 50 formula gives 12-hour protection without that gross
   sticky feeling. Thousands of beach-lovers swear by it.

   Try risk-free dengan our 30-day guarantee 👇

   #SunProtection #BeachLife #SummerEssentials"

   TIKTOK:

   Style: Ultra casual, meme-friendly, authentic
   Length: Short - conciseness critical
   Emoji: Abundant, expressive
   Hashtags: Include trending hashtags
   Tone: Fun, self-aware, tidak overly promotional

   Example:
   "POV: u finally found sunscreen that doesn't leave u looking like
   a ghost 👻❌

   this stuff changed the game fr fr 🔥

   #SunscreenCheck #BeautyHacks #SummerVibes #FYP"

   LINKEDIN:

   Style: Professional, authoritative, value-focused
   Length: Longer-form accepted, but hook dalam first 2 lines
   Emoji: Minimal, professional only
   Hashtags: 3-5 relevant professional hashtags
   Tone: Educational, thought-leadership

   Example:
   "83% of field workers experience sun damage by age 35.

   We developed commercial-grade sun protection specifically for
   outdoor professionals. 12-hour protection, sweat-resistant,
   dermatologist-tested.

   Protect your team's health. Learn more about our B2B program.

   #WorkplaceSafety #OccupationalHealth #SunProtection"

   TWITTER:

   Style: Punchy, witty, conversational
   Length: Short - 280 character limit
   Emoji: Acceptable untuk personality
   Hashtags: 1-2 maximum (more looks spammy)
   Tone: Clever, timely, culturally aware

   Example:
   "That moment when you realize you're somehow tan AND sunburned
   at the same time 😅

   SPF 50 formula that actually works, guaranteed.
   [link]

   #SummerSolutions"

#### 3. Persuasion Techniques

   SOCIAL PROOF:

   - "Join 50,000+ happy customers"
   - "As seen in [credible publication]"
   - "4.9/5 stars from 2,341 reviews"
   - "Trusted by Fortune 500 companies"
   - User testimonials

   SCARCITY:

   - "Only 3 left in stock"
   - "Sale ends tonight at midnight"
   - "Limited edition release"
   - "First 100 customers only"
   - "While supplies last"

   AUTHORITY:

   - "Recommended by dermatologists"
   - "Award-winning formula"
   - "10 years of research"
   - "Certified by [credible organization]"
   - Expert endorsements

   RECIPROCITY:

   - "Free guide/sample/trial"
   - "No credit card required"
   - "Free shipping"
   - "Bonus gift with purchase"
   - "Valuable content offered free"

   COMMITMENT/CONSISTENCY:

   - "Join thousands who already switched"
   - "Start your journey today"
   - "Make the change you've been considering"
   - Small commitment leads to larger one

   LIKING:

   - Relatable brand personality
   - Shared values
   - Authentic, human voice
   - Humor dan entertainment
   - Community feeling

### D. VIDEO VS STATIC ADS

#### 1. Video Advertising Advantages

   WHY VIDEO OUTPERFORMS:

**a. ATTENTION CAPTURE:**

      - Movement catches eye dalam static feed
      - Auto-play draws attention
      - Longer engagement time
      - Algorithm preference (more distribution)

**b. STORYTELLING CAPACITY:**

      - Complex messages easier to convey
      - Emotional connection deeper
      - Demonstration possible
      - Beginning-middle-end narrative structure

**c. ENGAGEMENT METRICS:**

      - Higher click-through rates
      - Longer viewing times
      - More shares
      - Better recall
      - Stronger brand lift

**d. PLATFORM PRIORITIZATION:**

      - Algorithms favor video content
      - More prominent placement
      - Stories dan Reels entirely video
      - Organic reach higher untuk video

   VIDEO TYPES:

   - PRODUCT DEMO: Show product dalam use
   - TESTIMONIAL: Customer success stories
   - EXPLAINER: How it works, why it matters
   - BEHIND-THE-SCENES: Build authenticity
   - STORY-DRIVEN: Emotional narrative
   - USER-GENERATED: Real customers' content
   - ANIMATED: Graphics-based, no filming needed

#### 2. When to Use Static vs Video

   USE STATIC WHEN:

   - Budget limited (faster, cheaper production)
   - Simple message that doesn't need demonstration
   - Product beauty is primary selling point
   - Testing multiple variations quickly
   - Retargeting campaigns (lower production needed)
   - Complementing video campaigns (variety)
   - Time constraints (faster to create)

   STATIC AD ADVANTAGES:

   - Faster production
   - Lower cost
   - Easier A/B testing
   - Universal compatibility
   - Simpler to iterate
   - Can include more text
   - Lower file sizes

   USE VIDEO WHEN:

   - Demonstrating product use
   - Telling complex story
   - Emotional connection crucial
   - Entertainment value important
   - Tutorial atau educational content
   - Budget available untuk production
   - Maximizing organic reach

   HYBRID APPROACH:

   Best campaigns often use both:
   - Video untuk awareness
   - Static untuk retargeting converters
   - Video untuk initial interest
   - Static untuk specific products
   - Variety prevents ad fatigue

#### 3. Creating Effective Video Ads

   SHORT-FORM VIDEO BEST PRACTICES:

   STRUCTURE:

   0-3 seconds: HOOK
   - Grab attention immediately
   - Pattern interrupt
   - Compelling visual atau question
   - Brand logo visible

   3-10 seconds: VALUE PROP
   - What problem does it solve?
   - Key benefit
   - Unique differentiation
   - Quick product glimpse

   10-15 seconds: SOCIAL PROOF/DEMO
   - Show it working
   - Testimonial snippet
   - Results demonstration
   - Before/after

   Last 3 seconds: CTA
   - Clear action
   - Where to go next
   - Urgency element
   - Brand reinforcement

   TECHNICAL REQUIREMENTS:

   - CAPTIONS: Essential (most watch muted)
   - VERTICAL: For mobile-first platforms
   - FAST-PACED: Quick cuts maintain attention
   - HIGH QUALITY: Resolution dan lighting matter
   - BRANDING: Include early (viewers drop off)
   - SOUND OPTIONAL: Work dengan atau without audio
   - FILE OPTIMIZATION: Compressed without quality loss

   MOBILE OPTIMIZATION:

   - Large text (readable on small screen)
   - Close-ups over wide shots
   - Simple visuals (busy scenes don't translate)
   - Vertical atau square format
   - Attention to load speed

### E. CREATING ADS DENGAN CANVA

#### 1. Canva Social Media Templates

   ACCESSING TEMPLATES:

   In Canva:
   - Search "Facebook Ad"
   - Search "Instagram Story"
   - Search "Social Media"
   - Browse curated ad templates
   - Filter by platform/format

   Benefits:
   - Pre-sized untuk platform specs
   - Professional starting points
   - Brand kit integration
   - Quick customization
   - Consistent outputs

   TEMPLATE CATEGORIES:

   - PRODUCT ADS: Showcase physical products
   - SERVICE ADS: Promote services/offerings
   - EVENT ADS: Announce events
   - SALE ADS: Promotional offers
   - TESTIMONIAL ADS: Social proof focus
   - BRAND AWARENESS: General brand promotion
   - VIDEO TEMPLATES: Animated sequences

#### 2. Design Workflow dalam Canva

   STEP-BY-STEP PROCESS:

   STEP 1: Select Appropriate Dimensions
   - Instagram Post: 1080x1080 (square)
   - Instagram Story: 1080x1920 (vertical)
   - Facebook Ad: 1200x628 (landscape) or 1080x1080
   - Custom dimensions untuk specific needs

   STEP 2: Choose Template atau Start Blank
   - Browse templates matching objective
   - Select appealing starting point
   - Or start blank untuk complete control

   STEP 3: Brand Customization
   - Apply brand colors (Brand Kit)
   - Use brand fonts
   - Insert logo
   - Maintain visual identity consistency

   STEP 4: Image Selection/Upload
   - Upload product photos
   - Use Canva stock photos (millions free)
   - Remove backgrounds (Background Remover tool)
   - Adjust, crop, filter images

   STEP 5: Text Overlay
   - Headline: Large, bold, attention-grabbing
   - Subheadline: Supporting detail
   - CTA: Clear button atau directive
   - Check text readability (contrast)

   STEP 6: Visual Hierarchy
   - Most important element largest/most prominent
   - Eye flow top-to-bottom, left-to-right
   - Whitespace around key elements
   - Color directs attention

   STEP 7: Mobile Preview
   - Resize to phone dimensions
   - Check text readability
   - Ensure key elements visible
   - Adjust if cramped

   STEP 8: Export
   - Download as PNG (highest quality)
   - Or JPG (smaller file size)
   - Or MP4 (for video/animated designs)
   - Ensure correct dimensions

   CANVA PRO FEATURES FOR ADS:

   (Affordable subscription, significant value)

   - Background Remover: Instant cutouts
   - Brand Kit: Store colors, fonts, logos
   - Resize Magic: One-click resize untuk all platforms
   - Animations: Add motion to designs
   - Premium Stock: Millions additional photos/videos
   - Templates: Expanded library
   - Team Collaboration: Share and co-edit

#### 3. Ad Variations dan A/B Testing

   Creating multiple versions efficiently:

   METHOD 1: Duplicate dan Modify
   - Create first ad
   - Duplicate page dalam Canva
   - Change one element (headline, image, color, CTA)
   - Repeat untuk multiple variations
   - Export all

   METHOD 2: Template Consistency
   - Set up consistent template
   - Swap out variable elements
   - Maintain same structure
   - Easy comparison

   ELEMENTS TO TEST:

   - Headlines (different angles)
   - Images (product vs lifestyle vs abstract)
   - Colors (CTA button colors, backgrounds)
   - CTA copy ("Shop Now" vs "Learn More")
   - Layout (left-aligned vs centered)
   - Offers (discount amounts, bundles)

### F. CAMPAIGN EXECUTION DAN OPTIMIZATION

#### 1. Pre-Launch Checklist

   CREATIVE REVIEW:

   ☐ Correct dimensions untuk platform
   ☐ High-resolution images (no pixelation)
   ☐ Text readable on mobile
   ☐ Brand guidelines followed
   ☐ No typos atau errors
   ☐ CTA clear dan compelling
   ☐ Safe zones respected (Stories)
   ☐ File sizes within limits
   ☐ Multiple variations ready untuk testing

   COPY REVIEW:

   ☐ Attention-grabbing hook
   ☐ Value proposition clear
   ☐ Benefits over features emphasized
   ☐ Call-to-action specific
   ☐ Appropriate untuk platform tone
   ☐ Grammar dan spelling perfect
   ☐ Hashtags relevant dan strategic
   ☐ Character limits respected

   TECHNICAL SETUP:

   ☐ Correct campaign objective selected
   ☐ Target audience defined precisely
   ☐ Budget set appropriately
   ☐ Schedule determined
   ☐ Placement selection optimized
   ☐ Tracking pixels installed
   ☐ Conversion events setup
   ☐ Landing page ready dan tested

   COMPLIANCE:

   ☐ Platform advertising policies reviewed
   ☐ No restricted content
   ☐ Claims are accurate/supportable
   ☐ Disclosures included jika required
   ☐ Copyright cleared untuk all assets
   ☐ Privacy policy accessible

#### 2. Key Performance Metrics

   AWARENESS METRICS:

   - IMPRESSIONS: How many times ad shown
   - REACH: How many unique people saw ad
   - FREQUENCY: Average times each person saw ad
   - VIDEO VIEWS: How many watched video
   - COST PER 1000 IMPRESSIONS (CPM): Efficiency metric

   ENGAGEMENT METRICS:

   - CLICK-THROUGH RATE (CTR): Clicks / Impressions
   - ENGAGEMENT RATE: (Likes + Comments + Shares) / Reach
   - VIDEO COMPLETION RATE: % watched to end
   - COST PER CLICK (CPC): Budget / Clicks

   CONVERSION METRICS:

   - CONVERSIONS: Desired actions completed
   - CONVERSION RATE: Conversions / Clicks
   - COST PER ACQUISITION (CPA): Budget / Conversions
   - RETURN ON AD SPEND (ROAS): Revenue / Ad Spend

   BENCHMARKS (Vary by Industry):

   - CTR: 1-2% considered average untuk social ads
   - Engagement Rate: 1-3% average
   - CPC: $0.50-$3.00 typical range
   - CPA: Varies wildly by product value

   What metrics matter depends pada objective:
   - Awareness campaign: Impressions, Reach, CPM
   - Consideration campaign: CTR, Engagement, Video Views
   - Conversion campaign: CPA, ROAS, Conversion Rate

#### 3. Optimization Strategies

   A/B TESTING:

   What to test:
   - Ad creative (images/videos)
   - Headlines
   - Body copy
   - CTA buttons
   - Audiences
   - Placements
   - Ad formats

   Process:
   - Test one variable at a time
   - Run minimum 3-7 days
   - Ensure statistical significance
   - Implement winner
   - Continue testing

   AUDIENCE REFINEMENT:

   - Analyze demographics data
   - Narrow atau expand based on performance
   - Create lookalike audiences dari converters
   - Exclude converted users (unless repeat purchase model)
   - Geographic performance patterns

   CREATIVE REFRESH:

   Why necessary:
   - Ad fatigue (frequency too high)
   - Declining performance over time
   - Audience becomes blind to repetition

   When to refresh:
   - CTR drops significantly
   - CPC increases
   - Frequency exceeds 3-4
   - Every 2-4 weeks proactively

   How to refresh:
   - New images
   - Different headline angles
   - Updated offers
   - Seasonal relevance
   - Trend participation

   BUDGET OPTIMIZATION:

   - Shift budget toward best-performing ads
   - Increase budget gradually pada winners (20-30% increments)
   - Pause underperforming ads
   - Test dengan small budgets first
   - Scale successful campaigns carefully

   LANDING PAGE OPTIMIZATION:

   Often overlooked but critical:
   - Fast loading speed
   - Mobile-optimized
   - Message match dengan ad
   - Clear CTA above fold
   - Remove distractions
   - Trust signals (reviews, guarantees)
   - Simple form fields

## PRAKTIKUM

PRAKTIKUM 15: MULTI-PLATFORM SOCIAL MEDIA AD CAMPAIGN

OBJECTIVE:
Design comprehensive social media advertising campaign targeting three
different platforms dengan platform-optimized creative variations.

SCENARIO:
You are launching advertising campaign untuk product atau service dari your
choice. Campaign must work across Facebook, Instagram, dan TikTok dengan
platform-appropriate adaptations.

DELIVERABLES:

#### 1. CAMPAIGN STRATEGY DOCUMENT

   - Product/service description
   - Target audience profile (detailed demographics, interests, behaviors)
   - Campaign objective (awareness, consideration, atau conversion)
   - Key messaging dan value propositions
   - Budget allocation across platforms
   - Success metrics definition

#### 2. FACEBOOK AD SUITE (3 variations)

   - 1 square feed ad (1080x1080)
   - 1 carousel ad (3 cards minimum, 1080x1080 each)
   - 1 video ad (square atau vertical, 15-30 seconds)
   - Ad copy untuk each (headline, primary text, CTA)

#### 3. INSTAGRAM AD SUITE (3 variations)

   - 1 feed ad (square 1080x1080 atau vertical 1080x1350)
   - 1 Stories ad (1080x1920 vertical)
   - 1 Reels ad concept (storyboard + description jika not actually producing)
   - Ad copy dengan hashtags

#### 4. TIKTOK AD (1 video atau detailed storyboard)

   - In-Feed ad (1080x1920 vertical)
   - Either: actual video (15-30 sec) OR detailed storyboard (10+ frames)
   - Platform-appropriate copy dan hashtags

#### 5. A/B TESTING PLAN

   - Identify 2 elements to test
   - Create variations untuk testing
   - Hypothesis untuk each test
   - Metrics untuk evaluation

REQUIREMENTS:

Campaign Consistency:
- Unified brand identity across platforms
- Core message consistent but platform-adapted
- Visual consistency (colors, fonts, style)
- Complementary platform strategies

Platform Optimization:
- Correct technical specifications
- Platform-appropriate tone dan style
- Format-specific design considerations
- Mobile-first approach

Design Quality:
- High-resolution images
- Professional aesthetic
- Clear visual hierarchy
- Readable text on mobile
- Attention-grabbing composition

Copy Quality:
- Compelling headlines
- Benefit-focused messaging
- Platform-appropriate tone
- Clear, specific CTAs
- Strategic hashtag use

LANGKAH-LANGKAH:

STEP 1: Campaign Planning (45 menit)
- Choose product/service to advertise
- Define target audience dengan detail:
  * Age range
  * Gender
  * Location
  * Interests
  * Behaviors
  * Pain points
- Determine campaign objective
- Identify key selling points
- Brainstorm messaging angles
- Research competitors' ads

STEP 2: Asset Gathering (30 menit)
- Product photography atau sourcing
- Stock images relevant to campaign
- Brand assets (logo, colors, fonts)
- Inspiration examples
- Copywriting research

STEP 3: Facebook Ads Creation (90 menit)

Feed Ad (Square):
- Open Canva, 1080x1080 dimensions
- Choose atau create layout
- Insert product image (high quality)
- Headline overlay (bold, large)
- Subheadline (benefit statement)
- CTA button graphic
- Brand logo placement
- Export as PNG

Carousel Ad:
- Create 3-5 cards (1080x1080 each)
- Each card: different product angle/feature/benefit
- Consistent design template across cards
- Sequential storytelling atau standalone features
- Each card: image + text overlay + consistent branding
- Export each card separately

Video Ad:
- OPTION A: Create dalam Canva dengan animation
  * Use video templates
  * Add product images dengan transitions
  * Text animations
  * Background music
  * 15-30 seconds duration
  * Export as MP4

- OPTION B: Simple slideshow
  * 3-5 product images
  * Transitions between
  * Text overlays
  * Music track
  * Captions included
  * Export as video

Write Copy:
- Headline: 5 words maximum, attention-grabbing
- Primary text: 2-3 sentences, value proposition
- CTA: Specific action ("Shop Now", "Download Guide", etc.)

STEP 4: Instagram Ads Creation (90 menit)

Feed Ad:
- 1080x1080 atau 1080x1350 dimensions
- More visually aesthetic than Facebook (Instagram standards higher)
- Clean, beautiful composition
- Product dalam aspirational context
- Minimal text overlay
- Strong visual appeal
- Export as PNG

Stories Ad:
- 1080x1920 vertical dimensions
- Full-screen immersive design
- Safe zones respected (top/bottom 250px)
- Interactive element consideration (poll sticker, swipe-up)
- Attention-grabbing first frame
- 15 seconds jika video, single frame jika static
- Export as PNG atau MP4

Reels Ad:
- OPTION A: Actually create 15-30 second video
  * Vertical 1080x1920
  * Fast-paced editing
  * Trending audio
  * Hook immediately
  * Native TikTok/Reels style

- OPTION B: Detailed storyboard
  * 10+ frames
  * Shot-by-shot breakdown
  * Annotations untuk each frame
  * Audio notes
  * Transitions specified

Write Copy:
- Caption: Conversational, engaging (first 125 chars critical)
- Hashtags: 5-8 relevant hashtags
- Strategic mix (branded, niche, popular)

STEP 5: TikTok Ad Creation (90 menit)

OPTION A: Create Actual Video
- Shoot atau compile footage (1080x1920)
- Edit dengan quick cuts, energy
- Include captions/text overlays
- Trending audio atau original
- 15-30 seconds
- Hook dalam first second
- Native TikTok aesthetic (not polished ad)
- Export as MP4

OPTION B: Comprehensive Storyboard
- Minimum 10 frames
- Each frame:
  * Visual description atau sketch
  * Shot type
  * Text overlay
  * Audio notes
  * Duration
  * Transition type
- Overall concept clear
- Executable dari storyboard

Write Copy:
- Ad text: Ultra casual, trendy language
- Hashtags: Include trending + niche
- Maximum 100 characters

STEP 6: A/B Testing Variations (45 menit)
- Choose platform untuk testing (Facebook recommended)
- Select 2 elements to test:
  * OPTION 1: Different headlines
  * OPTION 2: Different images
  * OPTION 3: Different CTAs
  * OPTION 4: Different offers
- Create Version A dan Version B
- Write hypothesis:
  * "Version A will outperform because..."
- Define success metric:
  * CTR, CPC, Conversion Rate, etc.

STEP 7: Documentation (30 menit)
- Campaign Strategy Document:
  * Product description
  * Target audience profile
  * Campaign objectives
  * Key messages
  * Success metrics
  * Budget allocation
- Organize all assets
- Label clearly
- Include A/B test plan
- Write brief reflection

SUBMISSION REQUIREMENTS:

Submit organized folder containing:

#### 1. CAMPAIGN DOCUMENT (PDF):

   - Strategy overview
   - Target audience
   - Objectives dan metrics
   - Platform rationales
   - Budget allocation
   - A/B testing plan

#### 2. FACEBOOK ADS:

   - Feed_Ad.png (1080x1080)
   - Carousel_Card1.png, Card2.png, Card3.png (1080x1080 each)
   - Video_Ad.mp4
   - Facebook_Copy.txt (all copy untuk each ad)

#### 3. INSTAGRAM ADS:

   - IG_Feed_Ad.png (1080x1080 atau 1080x1350)
   - IG_Stories_Ad.png (1080x1920)
   - IG_Reels_Concept.mp4 OR IG_Reels_Storyboard.pdf
   - Instagram_Copy.txt

#### 4. TIKTOK AD:

   - TikTok_Ad.mp4 OR TikTok_Storyboard.pdf (1080x1920)
   - TikTok_Copy.txt

#### 5. A/B TESTING:

   - Version_A.png
   - Version_B.png
   - AB_Test_Plan.pdf

#### 6. SOURCE FILES:

   - Canva links OR source files

FILE NAMING:
NIM_Nama_P15_[Filename]

GRADING RUBRIC:

STRATEGY DAN PLANNING (20 points):
- Audience definition clarity (5 pts)
- Campaign objective appropriateness (5 pts)
- Platform strategy rationale (5 pts)
- Metrics dan testing plan (5 pts)

DESIGN EXECUTION (40 points):
- Technical specifications accuracy (10 pts)
- Visual quality dan aesthetic (10 pts)
- Platform-specific optimization (10 pts)
- Branding consistency (5 pts)
- Mobile optimization (5 pts)

COPYWRITING (20 points):
- Headline effectiveness (7 pts)
- Value proposition clarity (6 pts)
- Platform-appropriate tone (4 pts)
- CTA strength (3 pts)

A/B TESTING (10 points):
- Testing strategy soundness (5 pts)
- Variation quality (5 pts)

PROFESSIONALISM (10 points):
- Organization dan documentation (5 pts)
- Completeness (3 pts)
- Presentation quality (2 pts)

BONUS (up to 10 extra points):
- Exceptional creativity
- Advanced techniques
- Actual video production
- Outstanding polish
- Strategic innovation

## TUGAS

TUGAS INDIVIDUAL: SOCIAL MEDIA AD ANALYTICS SIMULATION

Research existing social media ads dan analyze their effectiveness.

REQUIREMENTS:

#### 1. AD COLLECTION (10 ads minimum):

   - Find 10 social media ads across different platforms
   - Screenshot each ad
   - Include variety:
     * Different platforms (Facebook, Instagram, TikTok, etc.)
     * Different industries
     * Different objectives (awareness, conversion, etc.)
     * Different formats (image, video, carousel, stories)

#### 2. AD ANALYSIS (for each ad):

   - Platform dan placement
   - Apparent target audience
   - Campaign objective (best guess)
   - Visual analysis:
     * Composition dan design quality
     * Visual hierarchy
     * Color usage
     * Branding
     * Mobile optimization
   - Copy analysis:
     * Headline effectiveness
     * Value proposition
     * CTA strength
     * Tone appropriateness
   - Predicted performance:
     * What likely performs well
     * What could be improved
     * Estimated CTR category (low/medium/high)

#### 3. COMPARATIVE ANALYSIS:

   - Select best 3 ads from collection
   - Explain why these are most effective
   - What techniques they use
   - Select worst 2 ads
   - Explain weaknesses
   - How you would improve them

#### 4. REDESIGN CHALLENGE:

   - Choose 1 poor-performing ad
   - Redesign untuk improvement
   - Create "Before" dan "After" comparison
   - Explain changes made dan why
   - Predict performance improvement

#### 5. INSIGHTS SUMMARY:

   - Key learnings from analysis
   - Common patterns dalam effective ads
   - Mistakes to avoid
   - Platform-specific insights
   - Personal takeaways untuk future campaigns

DELIVERABLES:
#### 1. Ad collection (10 screenshots dengan annotations)

#### 2. Individual ad analyses (table atau formatted document)

#### 3. Comparative analysis (2-3 pages)

#### 4. Redesign (before/after images + explanation)

#### 5. Insights summary (1-2 pages)

SUBMISSION DEADLINE: 7 days from Pertemuan 15

FORMAT: PDF document dengan embedded images

EVALUATION CRITERIA:
- Ad collection variety dan quality (15%)
- Analysis depth dan insight (35%)
- Comparative analysis quality (20%)
- Redesign improvement effectiveness (20%)
- Insights dan learnings (10%)

## QUIZ 4

Quiz 4 akan dilaksanakan pada AKHIR pertemuan ini atau AWAL Pertemuan 16,
covering Pertemuan 15.

TOPICS COVERED:
- Social media advertising landscape
- Platform-specific specifications
- Ad copywriting principles
- Video vs static advertising
- Campaign optimization

FORMAT:
- Multiple choice (40%)
- Specification matching (20%)
- Short answer (20%)
- Ad critique (20%)
- Duration: 45 minutes

PREPARATION:
- Memorize platform specifications (dimensions, formats)
- Review copywriting formulas (AIDA, PAS, etc.)
- Study platform differences
- Practice critiquing ad effectiveness
- Understand metrics dan optimization

## RESOURCE TAMBAHAN

SOFTWARE:
- Canva: canva.com (primary design tool)
- GIMP: gimp.org (advanced image editing)
- DaVinci Resolve: video ad creation
- CapCut: mobile video editing

PLATFORM RESOURCES:

FACEBOOK/INSTAGRAM:
- Facebook Blueprint: facebook.com/business/learn (free courses)
- Ad Specs: facebook.com/business/ads-guide
- Creative Hub: facebook.com/ads/creativehub (test ad formats)
- Ads Library: facebook.com/ads/library (see competitors' ads)

TIKTOK:
- TikTok For Business: tiktok.com/business
- Creative Center: ads.tiktok.com/business/creativecenter
- Ad Specs: ads.tiktok.com/help/article?aid=6829362970888929286

TWITTER:
- Twitter Flight School: flightschool.twitter.com
- Ad Specs: business.twitter.com/en/help/campaign-setup

LINKEDIN:
- LinkedIn Marketing Labs: linkedin.com/learning (free courses)
- Ad Specs: business.linkedin.com/marketing-solutions/ad-specs

LEARNING RESOURCES:

VIDEO TUTORIALS (Bahasa Indonesia):
- "Facebook Ads Tutorial Indonesia" - Digital Marketing ID
  [https://www.youtube.com/results?search_query=facebook+ads+tutorial+indonesia](https://www.youtube.com/results?search_query=facebook+ads+tutorial+indonesia)
- "Cara Membuat Iklan Instagram" - Tutorial Marketing
  [https://www.youtube.com/results?search_query=instagram+ads+indonesia](https://www.youtube.com/results?search_query=instagram+ads+indonesia)
- "TikTok Ads untuk Pemula" - Social Media Tutorial ID
  [https://www.youtube.com/results?search_query=tiktok+ads+indonesia](https://www.youtube.com/results?search_query=tiktok+ads+indonesia)

VIDEO TUTORIALS (English):
- "Facebook Ads Tutorial" - Ben Heath
  [https://www.youtube.com/c/BenHeath](https://www.youtube.com/c/BenHeath)
- "Instagram Ads Masterclass" - Miles Media
  [https://www.youtube.com/c/MilesSocialMedia](https://www.youtube.com/c/MilesSocialMedia)
- "TikTok Ads Strategy" - Social Media Examiner
  [https://www.youtube.com/user/smexaminer](https://www.youtube.com/user/smexaminer)

BLOGS DAN ARTICLES:
- Facebook Business Blog: facebook.com/business/news
- AdEspresso Blog: adespresso.com/blog
- Social Media Examiner: socialmediaexaminer.com
- WordStream Blog: wordstream.com/blog

BOOKS:
- "Ultimate Guide to Facebook Advertising" - Perry Marshall
- "Killing Marketing" - Joe Pulizzi dan Robert Rose
- "Contagious" - Jonah Berger
- "Hooked" - Nir Eyal

TOOLS:

FREE TOOLS:
- Canva Pro Trial: 30 days free
- Facebook Ads Library: spy on competitors
- AdSpy: ad inspiration tool
- Wordcount Tools: untuk character counting

PAID TOOLS (Recommended):
- AdEspresso: campaign management dan analytics
- Foreplay: ad inspiration library
- Madgicx: AI-powered ad optimization
- Hootsuite Ads: cross-platform management

COMMUNITIES:
- Facebook Ads Buyers Facebook Group
- r/PPC on Reddit
- Social Media Marketing Facebook Groups
- DigitalMarketer Community
- LinkedIn Marketing Groups

INSPIRATION:
- Facebook Ads Library: see what competitors running
- AdForum: creative ad showcase
- Ads of the World: global creativity
- TikTok Creative Center: top performing ads
- Instagram Explore: trending content

COMPLIANCE:
- Facebook Advertising Policies: facebook.com/policies/ads
- Instagram Community Guidelines
- TikTok Ad Policies: ads.tiktok.com/help/article?aid=9550
- FTC Disclosure Guidelines: ftc.gov

## TIPS PRAKTIS

DESIGN TIPS:

#### 1. Test ads pada actual phone screen before launching

#### 2. Use contrasting colors untuk CTAs (stand out)

#### 3. Face dalam images increase engagement (humans notice faces)

#### 4. Show product dalam use, not just product shot

#### 5. Include captions dalam videos (most watch muted)

#### 6. Keep text minimal (image quality speaks)

#### 7. Consistent branding builds recognition

#### 8. White space is powerful (don't clutter)

#### 9. Mobile-first always (majority of views)

#### 10. Use brand colors but don't be afraid dari bold accent colors

COPYWRITING TIPS:

#### 1. Lead dengan benefit, not feature

#### 2. Use numbers (específic is compelling: "3X faster" not "much faster")

#### 3. Ask questions to engage curiosity

#### 4. Address pain points directly

#### 5. Create urgency appropriately (limited time, scarcity)

#### 6. Speak audience's language (research how they talk)

#### 7. Test emoji usage (can increase engagement)

#### 8. One clear CTA (don't confuse dengan multiple options)

#### 9. Proofread obsessively (typos kill credibility)

#### 10. Write untuk scanning (short sentences, line breaks)

VIDEO TIPS:

#### 1. Hook dalam literally first second (not 2nd atau 3rd)

#### 2. Show branding early (many won't watch entire ad)

#### 3. Design untuk sound-off (captions, visual storytelling)

#### 4. Keep under 15 seconds when possible

#### 5. Use motion to guide eye toward CTA

#### 6. Test different thumbnails (video cover image)

#### 7. Vertical format untuk mobile platforms

#### 8. Fast cuts maintain attention

#### 9. End dengan clear next step

#### 10. Iterate based on completion rates

CAMPAIGN TIPS:

#### 1. Start dengan small budget untuk testing

#### 2. Let ads run minimum 3-4 days before judging

#### 3. Create multiple ad variations (algorithm finds winners)

#### 4. Don't forget retargeting (some highest ROI campaigns)

#### 5. Check frequency (> 4 means ad fatigue, refresh creative)

#### 6. Monitor negative feedback (lots indicates poor targeting)

#### 7. Scale gradually (20-30% budget increases)

#### 8. Refresh creative every 2-4 weeks

#### 9. Learn dari data, not hunches

#### 10. Document what works untuk future campaigns

COMMON MISTAKES:

#### 1. Wrong aspect ratio untuk platform

#### 2. Too much text overlay (Facebook historically penalized)

#### 3. Poor mobile optimization

#### 4. Targeting too broad (waste money) atau too narrow (insufficient reach)

#### 5. No clear CTA

#### 6. Ugly landing page after great ad

#### 7. Giving up too quickly (takes time untuk optimize)

#### 8. Not testing enough variations

#### 9. Ignoring platform-specific culture

#### 10. Set-and-forget (needs active management)

## PENUTUP

Congratulations pada reaching akhir dari substantial learning material
dalam course ini! Pertemuan 15 covers cutting-edge skills dalam social media
advertising yang immediately applicable dalam real-world marketing contexts.

Social media advertising adalah dynamic, rapidly evolving field. Platforms
update features constantly, algorithms change, user behaviors shift, best
practices evolve. What you've learned provides solid foundation, but commit
to continuous learning. Follow industry blogs, take platform-specific courses,
experiment dengan campaigns, analyze successful ads, participate dalam
communities.

Most importantly: practice. Theory is valuable, but execution builds
expertise. Design ads, create campaigns (even dengan tiny budgets untuk
learning), test variations, analyze results, iterate. Every campaign teaches
lessons yang books cannot.

## PERSIAPAN UAS (UJIAN AKHIR SEMESTER)

Pertemuan 16 adalah UAS (Ujian Akhir Semester) - final evaluation covering
ALL material dari Pertemuan 1-15.

PREPARE BY:

#### 1. COMPREHENSIVE REVIEW:

   - Review ALL pertemuan materials (Pertemuan 1-15)
   - Focus pada key concepts from each session
   - Understand connections between topics
   - Review terminology dan definitions

#### 2. PORTFOLIO COMPILATION:

   - Gather your BEST 5-7 works dari semester:
     * Visual rhetoric analysis (P3)
     * Semiotics project (P4)
     * Visual identity design (P6)
     * Vector illustration (P9)
     * Campaign promotion (P10)
     * Photo release (P11)
     * Magazine spread (P12)
     * Digital brosur atau EDM (P13)
     * Podcast atau video (P14)
     * Social media ads (P15)
   - Select pieces demonstrating range dan quality
   - Organize professionally
   - Prepare brief description untuk each piece

#### 3. FINAL PROJECT PLANNING:

   - UAS includes final integrated campaign project
   - Will require combining multiple skills
   - Think about concept you'd like to execute
   - Gather potential resources
   - Review all techniques learned

#### 4. WRITTEN TEST PREPARATION:

   - All quizzes content fair game
   - Theory dan concepts from all pertemuan
   - Application-based questions
   - Design principle understanding
   - Software capabilities knowledge

#### 5. MENTAL DAN LOGISTICAL PREPARATION:

   - Get adequate rest before exam
   - Bring necessary materials:
     * Laptop dengan software installed
     * Headphones
     * Charger
     * Digital portfolio ready
   - Time management practice
   - Stress management techniques

UAS FORMAT (tentative, will be confirmed):
- Portfolio Presentation (40%)
- Final Integrated Campaign Project (40%)
- Written Test (20%)

Believe dalam yourself - you've built substantial skills throughout semester.
UAS is opportunity to demonstrate mastery dan creativity!

Best of luck dengan final preparations! 🎓
