# Color Utilities Documentation

## 📚 **Text Color Classes**

Gunakan class `text-{color}-{shade}` untuk memberikan warna pada text:

### Contoh Penggunaan:
```html
<h1 class="text-blue-200">Judul dengan warna biru muda</h1>
<p class="text-red-600">Teks dengan warna merah sedang</p>
<span class="text-green-500">Status berhasil</span>
```

## 🎨 **Background Color Classes**

Gunakan class `bg-{color}-{shade}` untuk memberikan warna background:

### Contoh Penggunaan:
```html
<div class="bg-blue-100 p-3">Background biru muda</div>
<div class="bg-red-500 text-white p-3">Background merah dengan teks putih</div>
```

## 🌈 **Warna yang Tersedia**

### Primary Colors:
- **Gray**: `gray-50` hingga `gray-900`
- **Red**: `red-50` hingga `red-900`
- **Orange**: `orange-50` hingga `orange-900`
- **Yellow**: `yellow-50` hingga `yellow-900`
- **Green**: `green-50` hingga `green-900`
- **Blue**: `blue-50` hingga `blue-900`
- **Indigo**: `indigo-50` hingga `indigo-900`
- **Purple**: `purple-50` hingga `purple-900`
- **Pink**: `pink-50` hingga `pink-900`

### Extended Colors:
- **Teal**: `teal-50` hingga `teal-900`
- **Cyan**: `cyan-50` hingga `cyan-900`
- **Emerald**: `emerald-50` hingga `emerald-900`
- **Lime**: `lime-50` hingga `lime-900`
- **Amber**: `amber-50` hingga `amber-900`
- **Rose**: `rose-50` hingga `rose-900`
- **Slate**: `slate-50` hingga `slate-900`
- **Stone**: `stone-50` hingga `stone-900`
- **Zinc**: `zinc-50` hingga `zinc-900`

### Special Colors:
- **Black**: `black`
- **White**: `white`
- **Transparent**: `transparent`
- **Current**: `current`

## 💡 **Sistem Tingkatan Warna**

- **50**: Paling terang (lightest)
- **100-200**: Sangat terang
- **300-400**: Terang  
- **500**: Standard/medium
- **600-700**: Gelap
- **800-900**: Paling gelap (darkest)

## 🔧 **Contoh Praktis**

### Alert Messages:
```html
<div class="bg-green-100 text-green-700 p-3 rounded">
    Success message
</div>

<div class="bg-red-100 text-red-700 p-3 rounded">
    Error message
</div>

<div class="bg-yellow-100 text-yellow-700 p-3 rounded">
    Warning message
</div>
```

### Card Components:
```html
<div class="bg-gray-50 p-4 rounded">
    <h3 class="text-blue-600">Card Title</h3>
    <p class="text-gray-700">Card content</p>
    <span class="text-green-500">Status</span>
</div>
```

### Navigation:
```html
<nav class="bg-blue-600">
    <a href="#" class="text-white">Home</a>
    <a href="#" class="text-blue-200">About</a>
</nav>
```

## 🚀 **Testing**

Untuk test color utilities:
1. Jalankan: `python -m http.server 3000`
2. Buka: `http://localhost:3000/color-demo.html`
3. Atau buka: `http://localhost:3000/index.html` untuk portfolio utama

## 📝 **Tips Penggunaan**

1. **Kontras yang Baik**: Pastikan kontras text dan background cukup untuk readability
2. **Konsistensi**: Gunakan palet warna yang konsisten di seluruh website
3. **Accessibility**: Test dengan color contrast checker
4. **Responsive**: Pertimbangkan bagaimana warna terlihat di berbagai device

### Kombinasi yang Direkomendasikan:
- `text-gray-900` dengan `bg-white` - Kontras tinggi
- `text-white` dengan `bg-blue-600` - Primary button
- `text-blue-600` dengan `bg-blue-50` - Subtle highlight
- `text-green-700` dengan `bg-green-100` - Success state
- `text-red-700` dengan `bg-red-100` - Error state
