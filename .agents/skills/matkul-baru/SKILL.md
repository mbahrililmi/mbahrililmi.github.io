---
name: matkul-baru
description: Membuat mata kuliah baru lengkap 16 pertemuan untuk situs ini di public/materi/, termasuk materi, kisi-kisi UTS/UAS, katalog, share page, dan OG image. Gunakan saat user meminta membuat atau menambahkan mata kuliah baru; cukup nama mata kuliah dan instruksi khusus bila ada.
---

# Membuat Mata Kuliah Baru

Tambahkan satu mata kuliah baru ke situs materi kuliah M. Bahril Ilmi, Politeknik Negeri Banjarmasin. Susun kurikulum dan konten secara mandiri. Jangan meminta klarifikasi kecuali permintaan benar-benar ambigu atau kontradiktif. Baca seluruh skill ini sebelum bekerja.

## Prinsip Isi Materi

1. Materi harus kaya: beberapa subtopik tiap pertemuan, dengan target sekitar 650–850 baris HTML per halaman seperti Big Data dan Desain Thinking.
2. Kedalaman teknis harus wajar untuk mahasiswa vokasi D3/D4 tingkat pengantar–menengah. Kaya berarti lengkap dan bertahap, bukan rumit atau setingkat riset.
3. Jelaskan setiap konsep, istilah, dan tool dalam 2–4 kalimat: mengapa penting, makna sederhananya, lalu contoh konkret yang dekat dengan mahasiswa Indonesia.
4. Gunakan nada hangat seperti dosen berbicara langsung kepada mahasiswa. Hindari gaya kamus/textbook kaku, pasif berlebihan, dan definisi tanpa konteks. Awali bagian dengan alasan pembahasannya penting.
5. Gunakan komponen template seperti `card`, `grid-2`, `grid-3`, `highlight-box`, `tab-group`, `accordion`, `rubric-table`, dan `task-card` untuk mengorganisasi prosa yang tetap mengalir.

Prioritaskan topik, alat, dan penekanan khusus dari user.

## 1. Baca Acuan dan Kondisi Repo

Baca file berikut secara utuh. Jangan menebak CSS, JavaScript, markup, atau statistik karena template dapat berubah:

- `public/materi/bigdata/bigdata-p1.html`: template materi, style, sidebar/TOC, komponen, navigasi, kredit, dan seluruh script.
- `public/materi/bigdata/bigdata-p8.html`: pola kisi-kisi UTS.
- `public/materi/bigdata/bigdata-p16.html`: pola kisi-kisi UAS, contoh soal, dan kunci.
- `public/materi/index.html`: metadata, statistik, satu `course-block`, `courseNames`, dan handler `?matkul=`.
- `public/materi/share/bigdata.html` atau `share/dtm.html`: pola share/redirect.
- `public/materi/og/bigdata.svg` atau `og/dtm.svg`: pola OG course.
- `public/materi/og/cover.svg`: cover katalog dan statistik.
- `public/materi/bigdata/.htaccess`: clean URL.

Periksa `AGENTS.md` bila ada dan `git status`. Pertahankan perubahan user dan jangan menyentuh file yang tidak diperlukan.

## 2. Identitas Mata Kuliah

Tentukan:

- Nama tampilan persis seperti tulisan user, termasuk ejaan yang disengaja.
- Slug kebab-case untuk folder dan `<slug>-p1.html` hingga `<slug>-p16.html`.
- Short ID unik untuk `course-<id>`, `grid-<id>`, `?matkul=<id>`, `share/<id>.html`, dan `og/<id>.svg`; cek `courseNames` lebih dahulu.
- Metadata administratif. Bila tidak diberikan, asumsikan kode tiga huruf dan angka; SKS `3 (T=1, P=2)` untuk dominan praktik atau `3 (T=2, P=1)` untuk dominan teori; dan semester yang masuk akal. Laporkan asumsi ini di akhir.

Dosen selalu `M. BAHRIL ILMI, S.Kom., M.Kom` pada meta badge/footer sesuai template. Institusi selalu `Politeknik Negeri Banjarmasin`.

## 3. Kurikulum 16 Pertemuan

Rancang dahulu outline eksplisit berupa judul dan 5–8 subtopik per pertemuan. Kurikulum harus spesifik untuk matkul baru, bukan salinan course lain. Gunakan pola berikut kecuali user meminta berbeda:

- P1: kontrak dan pengantar—definisi, sejarah, ruang lingkup, relevansi, contoh, karier.
- P2–P6: materi inti progresif dari dasar menuju teknik lebih kompleks.
- P7: integrasi P1–P6 lewat studi kasus/latihan dan persiapan UTS.
- P8: kisi-kisi UTS mengikuti `bigdata-p8.html`.
- P9–P13: materi lanjutan/aplikatif; P13 biasanya evaluasi, pengujian, atau quality check.
- P14: studi kasus industri/produk nyata dengan walkthrough mendalam.
- P15: studi kasus kedua, proyek/presentasi akhir, dan review P1–P14 dalam tabel rubrik.
- P16: kisi-kisi UAS mengikuti `bigdata-p16.html`.

## 4. Struktur Bersama

Kerjakan sebelum menulis halaman:

1. Buat `public/materi/<slug>/` dan `.htaccess` dari pola Big Data.
2. Buat `public/materi/og/<id>.svg` dari OG course yang ada: gradient navy `#1a2942`→`#2c3e6b`, aksen emas `#b8893b`, emoji relevan, judul, badge `16 Modul`, dosen, dan institusi.
3. Buat `public/materi/share/<id>.html` dari pola share, redirect ke `../index.html?matkul=<id>`, dengan metadata OG/Twitter baru.
4. Perbarui `public/materi/index.html`: baca angka terkini lalu tambah 1 mata kuliah dan 16 modul pada hero serta metadata terkait; tambahkan `course-block` urutan berikutnya berisi 16 `prak-card` (P8=UTS, P16=UAS); tambahkan entry `courseNames`.
5. Perbarui `public/materi/og/cover.svg`: statistik baru dan nama/singkatan course.

Gunakan `apply_patch` untuk edit. Periksa `git status` dan `git diff --stat` agar cakupannya tepat.

## 5. Penulisan 16 Halaman

Skill ini secara eksplisit mengizinkan sub-agent paralel untuk penulisan halaman. Patuhi batas concurrency lingkungan dan kerjakan per gelombang bila slot tidak cukup. Pembagian yang disarankan: P1–P3, P4–P6, P7–P8, P9–P11, P12–P13, dan P14–P16. Orkestrator menangani struktur bersama, integrasi, dan verifikasi. Bila delegasi tidak tersedia, kerjakan kelompok secara lokal.

Setiap tugas sub-agent wajib memuat:

1. Root repo dan konteks situs.
2. Keharusan membaca template P1, ditambah P8/P16 bila relevan, secara utuh. Salin blok style dan semua script tanpa mengubah class/ID yang menjadi kontrak desain.
3. Metadata lengkap dan link katalog `../index.html?matkul=<id>`.
4. Peta 16 judul agar konteks dan navigasi konsisten.
5. Footer: P1 hanya index+next; P16 hanya prev+index; halaman tengah prev+index+next.
6. Kelima Prinsip Isi Materi di atas secara lengkap.
7. Satu daftar glossary bersama berisi 12–20 istilah. Jangan hapus istilah lama; tambahkan daftar identik tepat sebelum penutup objek `terms` pada setiap halaman.
8. Outline rinci halaman tugas. Materi biasa ditutup praktikum konkret dan deliverable seperti `NIM_Nama_PX_<Topik>.pdf`; UTS/UAS mengikuti template khusus.
9. Target path jelas dan larangan menyentuh file di luar assignment.
10. Sanity check tag, jumlah baris, dan laporan file selesai.

Orkestrator menyusun glossary sekali; jangan membiarkan agent mengarang daftar yang berbeda.

## 6. Verifikasi

1. Pastikan 16 file ada dan pasangan `<html>`, `<style>`, serta `<script>` seimbang.
2. Pastikan satu istilah glossary penanda muncul tepat sekali per halaman.
3. Periksa rantai footer P1→P16, tanpa prev pada P1 dan tanpa next pada P16.
4. Periksa link katalog, redirect, OG, statistik, ID unik, dan semua path lokal.
5. Tinjau sampel materi serta halaman UTS/UAS untuk kepadatan, nada, visual, dan kesesuaian outline—bukan hanya hitungan tag.
6. Jika kelompok gagal, pertahankan file yang selesai dan lanjutkan hanya yang kurang; gunakan agent yang sama bila masih tersedia.
7. Jalankan `git diff --check`, `git status --short`, dan ringkasan diff. Jangan membuang perubahan user.

## 7. Laporan Akhir

Laporkan course dan artefak yang dibuat, hasil verifikasi, serta asumsi kode/SKS/semester. Nyatakan perubahan belum di-commit. Jangan commit kecuali diminta eksplisit.

## Batasan

Alur utama hanya untuk course baru. Jika user meminta menyederhanakan atau memperbaiki bahasa course yang sudah ada, edit prosanya in-place setelah membaca semua file course; pertahankan struktur, CSS, JavaScript, dan kedalaman materi. Pembagian kelompok halaman tetap dapat dipakai.
