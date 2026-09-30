// ============================================================
// PROJECTS DATA
// Add new projects by appending to the array below.
// Each project will automatically appear in the Projects section.
// ============================================================

export const projects = [
  {
    id: "001",
    title: "Aplikasi Galeri Media",
    slug: "galeri-media",
    year: "2026",
    category: "Mobile / Desktop App",
    status: "ACTIVE",
    description:
      "Aplikasi galeri media yang mendukung pengelolaan foto dan video secara lokal. Mendukung upload, tampilan, dan manajemen media dengan penyimpanan berbasis SQLite.",
    longDescription:
      "Aplikasi galeri media lintas platform yang dibangun dengan Flutter, mendukung upload foto dan video, manajemen galeri, serta penyimpanan data lokal menggunakan SQLite. Dapat berjalan di Android, Windows, dan Web.",
    technologies: ["Flutter", "Dart", "SQLite"],
    features: [
      "Upload foto & video",
      "SQLite local storage",
      "Multi-platform: Android, Windows, Web",
      "Galeri grid view",
    ],
    githubUrl: "https://github.com/HaiKaelll-arch/galeri.git",
    liveUrl: null,
    liveStatus: null,
    thumbnail: "/galeri-logo.png",
    thumbnailFit: "contain",
    featured: true,
  },
  {
    id: "002",
    title: "Website Edukasi Narkoba",
    slug: "edukasi-narkoba",
    year: "2026",
    category: "Web Application",
    status: "ACTIVE",
    description:
      "Website edukasi tentang bahaya narkoba dengan desain responsif dan quiz interaktif untuk meningkatkan kesadaran pengguna.",
    longDescription:
      "Website edukasi berbasis web yang memberikan informasi komprehensif tentang bahaya narkoba. Dilengkapi dengan quiz interaktif, desain responsif, dan konten yang informatif untuk berbagai kalangan.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Quiz interaktif",
      "Responsive design",
      "Konten edukasi lengkap",
      "Animasi UI",
    ],
    githubUrl: "https://github.com/HaiKaelll-arch/edukasi-narkoba.git",
    liveUrl: "https://haikaelll-arch.github.io/edukasi-narkoba/",
    liveStatus: "LIVE",
    thumbnail: "/website edukasi.png",
    thumbnailFit: "cover",
    featured: true,
  },
  // ── ADD NEW PROJECTS BELOW THIS LINE ──────────────────────
  // {
  //   id: "003",
  //   title: "Project Title",
  //   slug: "project-slug",
  //   year: "2026",
  //   category: "Category",
  //   status: "ACTIVE",       // ACTIVE | IN_PROGRESS | ARCHIVED
  //   description: "Short description (shown on card)",
  //   longDescription: "Full description (shown in modal)",
  //   technologies: ["Tech1", "Tech2"],
  //   features: ["Feature 1", "Feature 2"],
  //   githubUrl: "https://github.com/...",
  //   liveUrl: "https://...",    // null if not available
  //   liveStatus: "LIVE",        // LIVE | COMING_SOON | LINK_PENDING
  //   thumbnail: null,           // path to image or null
  //   featured: false,
  // },
];
