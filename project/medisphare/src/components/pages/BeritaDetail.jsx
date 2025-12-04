import React from "react";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

// Import gambar berita
import img1 from "D:/project/medisphare/src/assets/news/1.png";
import img2 from "D:/project/medisphare/src/assets/news/2.png";
import img3 from "D:/project/medisphare/src/assets/news/3.png";
import img4 from "D:/project/medisphare/src/assets/news/4.png";

// Data lengkap berita dengan konten
const newsDatabase = {
  1: {
    id: 1,
    name: "Program Donasi dan Distribusi Obat kepada Masyarakat",
    image: img1,
    category: "Program Sosial",
    author: "Tim Medisphere",
    date: "20 Oktober 2025",
    readTime: "5 menit",
    desc: "Kegiatan ini dilakukan sebagai bentuk kepedulian PT Medisphere terhadap kesehatan masyarakat, terutama bagi kelompok yang kurang mampu atau wilayah yang terdampak bencana.",
    content: `
      <p> Kegiatan ini dilakukan sebagai bentuk kepedulian PT Medisphere terhadap kesehatan masyarakat, terutama bagi kelompok yang kurang mampu atau wilayah yang terdampak bencana. Melalui program ini, perusahaan menyalurkan obat-obatan esensial, vitamin, serta produk kesehatan lain yang diproduksi oleh perusahaan. Proses distribusi dilakukan secara langsung oleh tim Medisphere dengan tetap memperhatikan keamanan, mutu, dan kepatuhan terhadap regulasi obat. Program ini diharapkan dapat membantu masyarakat dalam memenuhi kebutuhan dasar kesehatan sekaligus memperkuat citra perusahaan sebagai entitas yang aktif berkontribusi sosial.</p>
    `,
  },
  2: {
    id: 2,
    name: "Edukasi Kesehatan melalui Booth Informasi dan Konsultasi",
    image: img2,
    category: "Edukasi",
    author: "Tim Medisphere",
    date: "18 Oktober 2025",
    readTime: "4 menit",
    desc: "PT Medisphere secara rutin membuka booth edukasi kesehatan pada kegiatan masyarakat seperti posyandu, car free day, acara komunitas, maupun program pemerintah daerah.",
    content: `
        <p>PT Medisphere secara rutin membuka booth edukasi kesehatan pada kegiatan masyarakat seperti posyandu, car free day, acara komunitas, maupun program pemerintah daerah. Pada kegiatan ini, tenaga kesehatan dari perusahaan memberikan informasi terkait penggunaan obat yang benar, keamanan obat, interaksi obat, serta cara penyimpanan obat yang sesuai standar. Selain itu, masyarakat juga dapat melakukan konsultasi kesehatan secara langsung dengan tenaga farmasi. Kegiatan ini bertujuan meningkatkan literasi kesehatan masyarakat sekaligus membangun kepercayaan publik terhadap produk yang dihasilkan Medisphere.</p>
    `,
  },
  3: {
    id: 3,
    name: "Layanan Kesehatan Bergerak (Mobile Health Service)",
    image: img3,
    category: "Layanan",
    author: "Tim Medisphere",
    date: "15 Oktober 2025",
    readTime: "6 menit",
    desc: "Sebagai perusahaan yang memahami pentingnya akses kesehatan, PT Medisphere menyediakan layanan kesehatan bergerak menggunakan kendaraan operasional yang dilengkapi dengan alat kesehatan dasar.",
    content: `
    <p>Sebagai perusahaan yang memahami pentingnya akses kesehatan, PT Medisphere menyediakan layanan kesehatan bergerak menggunakan kendaraan operasional yang dilengkapi dengan alat kesehatan dasar. Melalui program ini, masyarakat dapat memperoleh layanan seperti pemeriksaan tekanan darah, pengecekan gula darah, konsultasi ringan, serta pemberian obat dasar sesuai kebutuhan. Layanan ini ditujukan bagi daerah dengan akses fasilitas kesehatan terbatas, sehingga dapat membantu pemerataan pelayanan kesehatan di wilayah yang lebih luas.</p>  
    `,
  },
  4: {
    id: 4,
    name: "Layanan Kesehatan Bergerak (Mobile Health Service)",
    image: img4,
    category: "Layanan",
    author: "Tim Medisphere",
    date: "15 Oktober 2025",
    readTime: "6 menit",
    desc: "Sebagai perusahaan yang memahami pentingnya akses kesehatan, PT Medisphere menyediakan layanan kesehatan bergerak menggunakan kendaraan operasional yang dilengkapi dengan alat kesehatan dasar.",
    content: `
    <p>PT Medisphere juga melaksanakan kegiatan edukatif berupa seminar, penyuluhan, dan pelatihan kepada berbagai kelompok masyarakat, termasuk siswa sekolah, mahasiswa kesehatan, serta organisasi komunitas. Materi yang diberikan meliputi penggunaan obat yang rasional, bahaya penyalahgunaan obat, inovasi dan proses pengembangan obat, serta edukasi terkait penyakit yang umum terjadi. Melalui kegiatan ini, perusahaan berperan aktif dalam meningkatkan pengetahuan masyarakat mengenai aspek kesehatan dan farmasi, sekaligus memberikan kontribusi terhadap peningkatan kualitas sumber daya manusia di bidang kesehatan.</p>  
    `,
  },
};

const BeritaDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Ambil data dari state atau database
  const newsFromState = location.state?.news;
  const newsFromDatabase = newsDatabase[id];
  
  // Gabungkan data
  const newsDetail = newsFromState && newsFromDatabase
    ? { ...newsFromDatabase, image: newsFromState.image }
    : newsFromDatabase;

  // Jika tidak ada data, tampilkan 404
  if (!newsDetail) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Berita tidak ditemukan</h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-semibold"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header with Back Button */}
      <div className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali
          </button>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            {newsDetail.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {newsDetail.name}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span>{newsDetail.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>{newsDetail.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>{newsDetail.readTime}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={newsDetail.image}
            alt={newsDetail.name}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none
            prose-headings:text-gray-900 prose-headings:font-bold
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-ul:my-6 prose-ul:text-gray-700
            prose-li:my-3 prose-li:text-lg
            prose-ol:text-gray-700"
          dangerouslySetInnerHTML={{ __html: newsDetail.content }}
        />
      </article>

      {/* Simple Footer */}
      <footer className="bg-gray-50 border-t mt-20 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center text-gray-600">
          <p>© 2025 Medisphere Pharma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BeritaDetail;