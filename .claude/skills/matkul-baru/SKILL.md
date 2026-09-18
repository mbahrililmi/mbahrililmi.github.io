---
name: matkul-baru
description: Membuat mata kuliah baru lengkap — 16 pertemuan materi (+ kisi-kisi UTS + kisi-kisi UAS) di public/materi/, DAN soal quiz per pertemuan di public/quiz/ — mengikuti desain dan pola struktur yang sudah dipakai course-course lain (contoh acuan: Big Data & Desain Thinking for Multimedia). Pakai skill ini kapan pun user minta menambahkan/membuat mata kuliah baru — user cukup sebutkan nama mata kuliahnya (+ instruksi tambahan kalau ada), skill ini yang menyusun kurikulum 16 pertemuan, menulis semua halaman HTML, menyambungkannya ke index materi/share page/OG image, DAN membuat file soal quiz siap-copas untuk tiap pertemuan.
---

# Membuat Mata Kuliah Baru (Materi + Quiz)

Ini adalah runbook lengkap untuk menambahkan satu mata kuliah baru ke situs materi kuliah (`public/materi/`) milik M. Bahril Ilmi (Politeknik Negeri Banjarmasin) — LENGKAP dengan soal quiz per pertemuan di `public/quiz/`. User biasanya cuma akan bilang sesuatu seperti "tambahin mata kuliah X" atau "buatkan materi untuk mata kuliah Y, dengan tambahan Z" — kamu (Claude) yang harus menyusun seluruh kurikulum dan kontennya sendiri, tidak perlu tanya balik kecuali user memang menyebutkan sesuatu yang ambigu/kontradiktif.

Alur skill ini punya DUA bagian besar yang berurutan: (A) Langkah 0-5 — bikin 16 halaman materi HTML dan sambungkan ke situs, (B) Langkah 6 — bikin soal quiz per pertemuan berdasarkan materi yang baru dibuat di bagian A. Bagian B **selalu dikerjakan** setiap kali skill ini dipakai untuk course baru, bukan langkah opsional — kecuali user secara eksplisit bilang tidak usah dibuatkan quiz.

Baca **seluruh** file ini dulu sebelum mulai bekerja — jangan lompat langsung ke bagian eksekusi.

## Prinsip Isi Materi (WAJIB, ini bukan opsional)

Ini adalah instruksi paling penting dari pemilik situs, berlaku untuk SEMUA mata kuliah baru yang dibuat lewat skill ini:

1. **Materinya harus banyak/kaya** — tiap pertemuan harus punya beberapa sub-topik, bukan cuma satu-dua poin dangkal. Targetkan 650–850 baris HTML per halaman materi (mirip kepadatan halaman-halaman Big Data/Desain Thinking yang sudah ada).
2. **Tapi JANGAN terlalu berat/kompleks secara teknis.** Ini beda dengan course "Big Data" yang memang berat karena topiknya statistik/ML tingkat lanjut. Untuk mata kuliah baru, pilih kedalaman level pengantar-menengah yang wajar untuk mahasiswa vokasi/D3-D4, bukan level riset. Banyak bukan berarti rumit — banyak berarti *dijelaskan dengan lengkap dan bertahap*.
3. **Setiap hal harus dijelaskan, bukan cuma disebut.** Kalau menyebut sebuah istilah/konsep/tools, jangan cuma kasih definisi satu baris — kasih 2-4 kalimat yang mengalir: kenapa konsep ini penting → apa itu dalam bahasa sederhana → contoh konkret (idealnya contoh yang akrab buat mahasiswa Indonesia: aplikasi/brand/produk yang mereka pakai sehari-hari).
4. **Nada bahasa harus hangat dan mengalir**, seperti dosen menjelaskan langsung ke mahasiswa — BUKAN seperti kamus istilah atau textbook kaku. Hindari kalimat pasif berlebihan dan definisi kering yang berdiri sendiri tanpa konteks. Buka tiap section dengan 1-2 kalimat "kenapa ini penting" sebelum masuk detail.
5. Tetap gunakan komponen visual template (card, grid-2/grid-3, highlight-box, tab-group, accordion, rubric-table, task-card) untuk mengorganisir isi — itu bagian dari desainnya, bukan opsional — tapi isi di dalamnya harus prosa yang hangat, bukan bullet kering.

Kalau user memberi instruksi tambahan spesifik soal topik/tools/penekanan tertentu untuk mata kuliah yang diminta, prioritaskan itu saat menyusun kurikulum di bawah.

## Langkah 0 — Baca Template Acuan

Sebelum menulis apa pun, baca file-file referensi berikut secara utuh (pakai Read, bukan cuma grep) untuk memahami struktur HTML/CSS/JS yang harus direplikasi persis:

- `public/materi/bigdata/bigdata-p1.html` — template dasar halaman materi biasa: `<style>` block lengkap, sidebar + TOC, page-header, pola content-section (card/grid-card/highlight-box/tab-group/accordion/rubric-table/code-block/task-card), footer-nav, footer-credit, dan TIGA `<script>` block di akhir (TOC scrollspy + accordion/tab logic; hamburger menu + copy-code + auto-tooltip glossary; clean-URL script).
- `public/materi/bigdata/bigdata-p8.html` — pola halaman kisi-kisi UTS (5 section: Informasi UTS, Format Ujian, Materi yang Diujikan, Persiapan, Ketentuan).
- `public/materi/bigdata/bigdata-p16.html` — pola halaman kisi-kisi UAS (6 section: Informasi UAS, Format Ujian, Materi yang Diujikan — dengan beberapa sub-section per kelompok pertemuan, Contoh Soal — PG + Essay lengkap dengan kunci jawaban, Persiapan, Ketentuan).
- `public/materi/index.html` — halaman katalog utama. Baca terutama: bagian `<head>` (meta description/OG/Twitter yang menyebutkan jumlah mata kuliah & modul), bagian `hero-stats` (angka besar "N Mata Kuliah" / "N Modul"), satu `course-block` contoh (misal `id="course-bigdata"` atau `id="course-dtm"`) untuk pola markup satu course lengkap dengan `praktikum-grid`-nya, script `courseNames` map, dan script handler `?matkul=` di bagian bawah.
- `public/materi/share/bigdata.html` atau `public/materi/share/dtm.html` — pola share/redirect page per course.
- `public/materi/og/bigdata.svg` atau `public/materi/og/dtm.svg` — pola OG image SVG per course.
- `public/materi/og/cover.svg` — OG image umum katalog (berisi total hitungan course & modul, dan daftar nama course).
- `public/materi/bigdata/.htaccess` — isi `.htaccess` standar per folder course (clean URL rewrite).

Jangan pernah menebak-nebak isi CSS/JS dari ingatan — selalu baca ulang dari salah satu file di atas setiap kali menjalankan skill ini, karena template bisa saja sudah berevolusi sejak terakhir kali skill ini ditulis.

## Langkah 1 — Tentukan Identitas Mata Kuliah

Dari nama mata kuliah yang diberikan user, tentukan:

- **Nama tampilan** (`Judul Mata Kuliah`) — pakai persis seperti yang ditulis user (situs ini konsisten mempertahankan penulisan asli user apa adanya, contoh: folder `rekayasa-vidio-dan-audio` sengaja mempertahankan ejaan "vidio").
- **Slug folder** (kebab-case, biasanya terjemahan/singkatan Indonesia dari nama, contoh: `desain-thinking-multimedia`, `rekayasa-vidio-dan-audio`). Folder: `public/materi/<slug>/`. Nama file: `public/materi/<slug>/<slug>-p1.html` … `-p16.html`.
- **Short id** (dipakai untuk `course-<id>`, `grid-<id>`, `?matkul=<id>`, nama file share `share/<id>.html`, dan `og/<id>.svg`) — singkatan pendek huruf kecil, contoh: `bigdata`, `dkv`, `rva`, `dtm`. Pilih yang unik, belum dipakai course lain (cek dulu `courseNames` map di index.html).
- **Metadata administratif** — kalau user tidak menyebutkan, buat asumsi wajar (kode mata kuliah 3 huruf + angka, SKS `3 (T=1, P=2)` kalau matkul praktik-berat atau `3 (T=2, P=1)` kalau lebih teori, semester yang masuk akal untuk topiknya) dan **beri tahu user di ringkasan akhir bahwa ini asumsi, bisa diganti**. Dosen selalu: `M. BAHRIL ILMI, S.Kom., M.Kom` (huruf besar di meta-badge & footer-credit, persis seperti pola Big Data). Institusi selalu: `Politeknik Negeri Banjarmasin`.

## Langkah 2 — Susun Kurikulum 16 Pertemuan

Pola baku yang dipakai semua course di situs ini (jangan diubah kecuali user minta lain):

- **Pertemuan 1** — Kontrak kuliah + pengantar/dasar-dasar mata kuliah (definisi, sejarah singkat, ruang lingkup, kenapa relevan, contoh nyata, peluang karier).
- **Pertemuan 2–6** — Materi inti, disusun progresif dari konsep dasar → teknik/skill spesifik → makin kompleks. Pecah topik besar mata kuliah jadi 5 blok logis.
- **Pertemuan 7** — Integrasi/penerapan: gabungkan semua yang sudah dipelajari P1-P6 dalam satu studi kasus/latihan menyeluruh, sebagai persiapan sebelum UTS.
- **Pertemuan 8** — Kisi-kisi UTS (ikuti pola `bigdata-p8.html` persis — lihat Langkah 4).
- **Pertemuan 9–12** — Materi lanjutan/babak kedua mata kuliah (topik yang lebih spesifik/aplikatif, atau tools/praktik lanjutan).
- **Pertemuan 13** — Materi lanjutan terakhir sebelum masuk ke studi kasus (biasanya evaluasi/pengujian/quality-check khas bidang tersebut).
- **Pertemuan 14** — Studi kasus implementasi 1 (contoh industri/produk nyata, walkthrough mendalam).
- **Pertemuan 15** — Studi kasus 2 + persiapan/presentasi proyek akhir semester + review menyeluruh materi satu semester (rubric-table ringkasan P1-P14).
- **Pertemuan 16** — Kisi-kisi UAS (ikuti pola `bigdata-p16.html` persis — lihat Langkah 4).

Sebelum menulis prompt untuk sub-agent, **rancang dulu outline 16 pertemuan ini secara eksplisit** (judul + 5-8 sub-topik per pertemuan) berdasarkan topik mata kuliah yang diminta. Contoh kurikulum yang sudah pernah dibuat dengan pola ini (boleh dibaca sebagai referensi kalau ada): `public/materi/desain-thinking-multimedia/` (Empathize→Define→Ideate→Prototype→Test, lalu visual design→storytelling→UX→tools→testing→studi kasus). Rancang kurikulum baru yang benar-benar spesifik untuk topik yang diminta — jangan copy-paste topik dari course lain.

## Langkah 3 — Setup Struktural (kerjakan sendiri, JANGAN didelegasikan ke sub-agent)

Lakukan langkah-langkah ini langsung dengan tool Bash/Write/Edit, sebelum spawn sub-agent:

1. `mkdir -p public/materi/<slug>` lalu buat `.htaccess` di dalamnya, isi persis pola `bigdata/.htaccess` (ganti komentar contoh URL-nya saja).
2. Buat `public/materi/og/<id>.svg` — copy pola `og/dtm.svg` atau `og/bigdata.svg` (gradient navy `#1a2942`→`#2c3e6b`, aksen emas `#b8893b`, satu emoji relevan dengan topik, judul mata kuliah, "16 Modul" badge, nama dosen + institusi).
3. Buat `public/materi/share/<id>.html` — copy pola `share/dtm.html` persis (redirect ke `../index.html?matkul=<id>`, OG/Twitter meta tags dengan judul & deskripsi mata kuliah baru, referensi ke `og/<id>.svg`).
4. Edit `public/materi/index.html`:
   - Baca dulu angka `hero-stat-num` saat ini (jumlah mata kuliah & jumlah modul) — JANGAN hardcode angka dari dokumen ini, situs terus bertambah course. Naikkan "Mata Kuliah" +1 dan "Modul" +16 dari angka yang terbaca saat ini.
   - Update juga angka yang sama di `<meta property="og:description">`, `<meta property="og:image:alt">`, `<meta name="twitter:description">` di `<head>`.
   - Tambahkan `<div class="course-block" id="course-<id>">` baru sebelum `<!-- /page-body -->`, dengan divider + section-label `Mata Kuliah 0N` (N = urutan berikutnya), lengkap 16 `prak-card` (satu per pertemuan, judul + topik singkat + icon Bootstrap Icons `bi-*` yang relevan + tag pendek). P8 dan P16 pakai tag "UTS"/"UAS". Ikuti markup persis dari salah satu `course-block` yang sudah ada (misal `id="course-dtm"`).
   - Tambahkan entry baru ke JS object `courseNames` (dekat bagian bawah file): `'<id>': 'Judul Mata Kuliah',`.
5. Edit `public/materi/og/cover.svg`: update angka "N Mata Kuliah · M Modul Pembelajaran" dan tambahkan nama mata kuliah baru (atau singkatannya) ke baris daftar nama course di bagian bawah SVG.

Setelah langkah ini selesai, verifikasi cepat dengan `git status`/`git diff --stat` bahwa hanya file-file yang dimaksud yang berubah.

## Langkah 4 — Tulis 16 Halaman via Sub-Agent Paralel

Jangan menulis 16 halaman sendirian secara sekuensial di context ini — itu boros dan lambat. Pecah jadi beberapa `Agent` (subagent_type: `general-purpose`) yang dijalankan **paralel** dan **di background** (`run_in_background: true`), dipanggil dalam SATU pesan (banyak `Agent` tool_use sekaligus). Pembagian yang sudah terbukti bagus (16 halaman ÷ 6 agent):

- Agent 1 → Pertemuan 1, 2, 3
- Agent 2 → Pertemuan 4, 5, 6
- Agent 3 → Pertemuan 7, 8 (7 = materi integrasi, 8 = UTS)
- Agent 4 → Pertemuan 9, 10, 11
- Agent 5 → Pertemuan 12, 13
- Agent 6 → Pertemuan 14, 15, 16 (16 = UAS)

Setiap prompt agent WAJIB berisi (agent mulai dari nol, tidak tahu apa-apa soal percakapan ini):

1. **Repo root path** dan konteks singkat situs ini.
2. Instruksi baca `public/materi/bigdata/bigdata-p1.html` (dan `-p8.html`/`-p16.html` kalau agent itu kebagian pertemuan UTS/UAS) sebagai template WAJIB — copy `<style>` block dan SEMUA `<script>` block persis byte-for-byte, jangan ganti nama class/id apa pun.
3. **Metadata mata kuliah** yang sudah ditentukan di Langkah 1 (nama, kode, SKS, semester, dosen, footer-credit, sidebar label, link index `../index.html?matkul=<id>`).
4. **Peta lengkap 16 judul pertemuan** (hasil Langkah 2) supaya prev/next link & konteks antar-agent konsisten, meski agent itu cuma menulis sebagian.
5. **Aturan footer-nav**: P1 cuma index-btn + next-btn (2 link, JANGAN duplikat index-btn seperti bug lama di `bigdata-p1.html`). P16 cuma prev + index-btn (2 link, tanpa next). Pertemuan tengah: prev (`<a>` polos) + index-btn + next-btn (3 link).
6. **Seluruh Prinsip Isi Materi** dari bagian atas dokumen ini (banyak, tidak berat, semua dijelaskan, nada hangat) — salin ulang prinsip itu ke prompt agent kata per kata, jangan diringkas, supaya agent benar-benar mengikuti standarnya.
7. **Daftar istilah glossary tambahan** — di dalam script tooltip ada objek JS `terms`. Instruksikan agent untuk TIDAK menghapus entry lama, hanya menambahkan 12-20 entry baru yang relevan dengan topik mata kuliah ini (format: `'istilah':'penjelasan singkat gaya kamus tapi tetap ramah, dalam Bahasa Indonesia',`), ditambahkan tepat sebelum `};` penutup objek `terms`. Kamu (orkestrator) yang menyusun daftar istilah ini per mata kuliah — tempelkan persis ke tiap prompt agent supaya semua file pakai daftar tambahan yang identik/konsisten (jangan biarkan tiap agent bebas mengarang sendiri, nanti tidak seragam antar file).
8. **Outline konten per pertemuan** yang ditulis agent itu — bukan cuma judul, tapi breakdown section (mirip pola: Pengantar dengan highlight-box Sub-CPMK → beberapa content-section inti dengan card/grid/table/tab sesuai topik → ditutup section "Praktikum" dengan 1-2 latihan konkret + format nama file deliverable `NIM_Nama_PX_<Topik>.pdf` atau setara). Untuk pertemuan UTS/UAS pakai pola dari `bigdata-p8.html`/`bigdata-p16.html` (lihat Langkah 0).
9. Instruksi target path file: `public/materi/<slug>/<slug>-pN.html`, dan larangan menyentuh file lain di luar assignment-nya (agent lain sedang menulis file lain secara paralel).
10. Minta agent melakukan sanity check sendiri di akhir (baca ulang, cek tag seimbang) dan melaporkan jumlah baris tiap file.

## Langkah 5 — Verifikasi & Laporan

Setelah semua agent selesai (kamu akan dapat notifikasi otomatis per agent — jangan polling manual):

1. Jalankan pengecekan struktural cepat via Bash untuk SEMUA 16 file sekaligus: hitung kemunculan `<html`/`</html>`, `<script`/`</script>`, `<style>`/`</style>` (harus match), cek satu entry glossary terakhir yang kamu minta muncul tepat 1x per file (tanda `terms` object ditambahkan sekali, tidak dobel/rusak).
2. Cek rantai footer-nav: grep href `<slug>-pN.html` di tiap file untuk pastikan P1→P2→…→P16 tersambung tanpa link putus, P1 tanpa prev, P16 tanpa next.
3. Kalau ada agent yang gagal (misal kena rate limit/error) — JANGAN mulai ulang dari nol. Cek dulu file mana saja yang sudah sempat tertulis (`ls`/`wc -l`), lalu `SendMessage` ke `agentId` yang sama untuk melanjutkan dari file yang belum selesai (agent yang di-resume ingat konteks sebelumnya).
4. Setelah 16 halaman materi ini bersih terverifikasi, lanjut ke **Langkah 6** di bawah untuk membuat soal quiz-nya — jangan laporkan hasil ke user dulu sebelum quiz-nya juga selesai (laporan akhir digabung, lihat penutup Langkah 6).

## Langkah 6 — Buat Soal Quiz per Pertemuan (public/quiz/)

Bagian ini SELALU dikerjakan setelah 16 halaman materi selesai & terverifikasi (Langkah 5), sebagai bagian standar dari "menambah mata kuliah baru" — bukan langkah terpisah yang perlu diminta ulang oleh user.

Soal-soal ini akan langsung di-copy-paste user ke aplikasi quiz mereka, jadi formatnya HARUS presisi sampai ke spasi dan baris kosong. Berikut format WAJIB (tempelkan blok ini apa adanya ke setiap prompt sub-agent di bawah):

```
Teks pertanyaan pertama
[single]
a) Pilihan A
b) Pilihan B*
c) Pilihan C
d) Pilihan D

Teks pertanyaan kedua
[single]
a) Pilihan A*
b) Pilihan B
c) Pilihan C
```

Aturan format (semua WAJIB, tanpa pengecualian):
1. JANGAN tulis nomor (1. 2. 3. dst) di depan pertanyaan — langsung teks pertanyaannya.
2. TEPAT SATU baris kosong di antara tiap blok soal — tidak lebih, tidak kurang. Tidak ada baris kosong di awal atau akhir file.
3. Semua soal pakai tipe `[single]` — JANGAN pakai `[multiple]`, `[essay]`, atau `[likert]` sama sekali, kecuali user secara eksplisit minta jenis lain untuk course ini.
4. Setiap soal WAJIB punya persis 4 opsi, diberi label `a)` `b)` `c)` `d)` (huruf kecil + tanda kurung tutup + spasi + teks opsi).
5. TEPAT SATU opsi per soal diberi tanda bintang (`*`) tertempel langsung di akhir teksnya (tanpa spasi sebelum bintang) sebagai penanda jawaban benar. Tiga opsi lainnya tanpa tanda apa pun.
6. File HANYA berisi blok-blok soal — TANPA judul, TANPA nama pertemuan/mata kuliah, TANPA penjelasan/catatan, TANPA markdown (tidak ada ```, #, atau bold) di mana pun dalam file.
7. Bahasa Indonesia, memakai istilah yang sama persis dengan yang dipakai di halaman materi aslinya.
8. Setiap soal WAJIB digali dari isi nyata halaman materi HTML (definisi, konsep, istilah, perbandingan, contoh, angka/fakta yang benar-benar disebutkan di teks) — JANGAN mengarang fakta yang tidak ada di materi. Variasikan gaya soal dalam satu file: sebagian recall definisi, sebagian "manakah yang BUKAN...", sebagian perbandingan (X vs Y), sebagian soal skenario/penerapan memakai contoh yang ada di materi.
9. Hindari soal yang duplikat/mirip dalam satu file.
10. Opsi jawaban (a/b/c/d) harus masuk akal dan proporsional panjangnya — distraktor (opsi salah) harus terasa mungkin benar, bukan asal-asalan/absurd/terlalu pendek dibanding opsi lain.

Jumlah soal per file:
- Pertemuan materi biasa (1-7 dan 9-15): TEPAT 10 soal per file, digali HANYA dari halaman pertemuan itu sendiri.
- Pertemuan 8 (UTS): TEPAT 30 soal, kumulatif mencakup materi Pertemuan 1-7 (boleh skim `<slug>-p8.html` untuk kalibrasi topik yang diujikan/gaya soal, tapi JANGAN jadikan teks p8.html sendiri sebagai sumber soal — itu halaman info-ujian/logistik, bukan materi ajar; jangan copy soal contoh yang mungkin sudah ada di p8.html, buat soal baru dari materi p1-p7). Distribusikan kira-kira merata ke 7 pertemuan (±4-5 soal per pertemuan).
- Pertemuan 16 (UAS): TEPAT 30 soal, kumulatif dari materi Pertemuan 9-15, pola sama seperti UTS di atas (kalibrasi dari `<slug>-p16.html`, tapi soal digali dari p9-p15).

Struktur folder & nama file: `public/quiz/<slug>/p1.txt` sampai `public/quiz/<slug>/p16.txt` (nama file cukup `pN.txt`, tanpa prefix slug, karena sudah jelas dari nama foldernya). Buat folder `public/quiz/<slug>/` kalau belum ada.

Eksekusi — pecah jadi 2 sub-agent `Agent` (`subagent_type: general-purpose`, `run_in_background: true`) dipanggil paralel dalam satu pesan (lebih ringan dari 6 agent materi karena tugas ini "ekstraksi dari sumber", bukan "mengarang struktur HTML dari nol"):

- **Agent A** → baca `public/materi/<slug>/<slug>-p1.html` s.d. `-p7.html` satu per satu secara utuh, tulis `public/quiz/<slug>/p1.txt` s.d. `p7.txt` (10 soal tiap file, dari halaman itu sendiri). Lalu skim `-p8.html`, tulis `p8.txt` (30 soal kumulatif dari p1-p7).
- **Agent B** → sama polanya untuk `-p9.html` s.d. `-p15.html` → `p9.txt`-`p15.txt` (10 soal tiap file), lalu skim `-p16.html` → tulis `p16.txt` (30 soal kumulatif dari p9-p15).

Setiap prompt agent WAJIB berisi: repo root + konteks singkat mata kuliah ini (nama, topik), daftar path file materi sumber yang harus dibaca (sebutkan judul tiap pertemuan supaya agent tahu apa yang dicari), daftar path file quiz output yang harus ditulis, seluruh blok format+10 aturan di atas (tempel kata per kata, jangan diringkas), dan larangan menyentuh file di luar assignment-nya (agent lain menulis paruh lainnya secara paralel).

Verifikasi setelah kedua agent selesai — **jalankan sendiri via Bash**, jangan cuma percaya laporan tekstual agent:

```bash
for f in public/quiz/<slug>/*.txt; do
  n=$(grep -c '^\[single\]$' "$f")
  a=$(grep -o '\*' "$f" | wc -l)
  echo "$f: soal=$n asterisk=$a"
done
grep -rlE '^[0-9]+\.' public/quiz/<slug>/ || echo "tidak ada nomor — bersih"
grep -rE '^\[(multiple|essay|likert)\]' public/quiz/<slug>/ || echo "semua [single] — sesuai"
```

Pastikan: p1-p7 dan p9-p15 masing-masing persis 10 soal, p8 dan p16 masing-masing persis 30 soal, jumlah asterisk = jumlah soal di tiap file (satu jawaban benar per soal, tidak nol tidak dua), tidak ada baris bernomor, dan tidak ada tipe selain `[single]` yang menyelip. Kalau ada mismatch, perbaiki langsung (Edit file yang bermasalah) sebelum lapor ke user.

Kalau ada agent gagal di tengah jalan (rate limit/connection error) — sama seperti Langkah 5: cek file `pN.txt` mana yang sudah ada di disk, lalu `SendMessage` ke `agentId` yang sama untuk melanjutkan dari file yang belum selesai, jangan mulai ulang dari nol.

**Laporan akhir ke user** (setelah materi + quiz keduanya selesai): daftar 16 halaman materi yang dibuat, daftar 16 file quiz yang dibuat (sebutkan totalnya, misal "160 soal materi harian + 60 soal UTS/UAS = 220 soal"), asumsi metadata yang dipakai (kode/SKS/semester), dan bahwa semua perubahan belum di-commit (jangan commit sendiri kecuali diminta eksplisit).

## Catatan Tambahan

- Skill ini SELALU membuat course baru dari nol. Kalau user memang minta "sederhanakan/perbaiki bahasa" pada course yang **sudah ada** (bukan course baru), itu bukan alur skill ini — itu adalah task edit-in-place: baca semua file course tsb, lalu delegasikan ke sub-agent paralel untuk menulis ulang PROSA-nya saja (jangan sentuh struktur/CSS/JS) supaya lebih hangat & mudah dipahami, tanpa mengurangi kedalaman materi. Pola pembagian kerja sub-agent-nya sama seperti Langkah 4 (paralel, per beberapa file).
- Kalau user minta "buatkan quiz" untuk course yang **materinya sudah ada** (bukan minta course baru) — jalankan **hanya Langkah 6** langsung terhadap course tsb (skip Langkah 0-5 sepenuhnya, materinya sudah ada jadi tidak perlu dibuat ulang). Ini juga berlaku kalau user minta quiz untuk beberapa course sekaligus — jalankan Langkah 6 secara terpisah per course (masing-masing dapat 2 sub-agent sendiri: Agent A untuk P1-8, Agent B untuk P9-16), semua course boleh dikerjakan paralel dalam satu batch pemanggilan `Agent` asal tiap agent hanya menyentuh folder `public/quiz/<slug>/` miliknya sendiri.
- Jangan pernah commit git tanpa diminta eksplisit oleh user, meski semua langkah di atas sudah selesai.
