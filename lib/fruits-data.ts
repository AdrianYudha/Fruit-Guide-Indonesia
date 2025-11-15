export type Fruit = {
  id: string;
  name: string;
  scientificName: string;
  image: string;
  benefits: string[];
  processing: {
    name: string;
    benefits: string[];
  }[];
  parts: {
    name: string;
    benefits: string[];
  }[];
  season: string;
  nutrition: {
    vitamin: string;
    mineral: string;
  };
};

export const fruitsDatabase: Fruit[] = [
  {
    id: "mangga",
    name: "Mangga",
    scientificName: "Mangifera indica L.",
    image: "/fresh-ripe-mango-fruit.jpg",
    benefits: [
      "Kaya vitamin A untuk kesehatan mata",
      "Mengandung vitamin C tinggi untuk imunitas",
      "Sumber serat untuk pencernaan",
      "Mengandung antioksidan dan polifenol",
      "Membantu penurunan kolesterol",
    ],
    processing: [
      {
        name: "Jus Mangga",
        benefits: [
          "Mudah dicerna",
          "Meningkatkan energi",
          "Segar dan menyegarkan",
        ],
      },
      {
        name: "Manisan Mangga",
        benefits: ["Awet lebih lama", "Tekstur kenyal", "Rasa manis alami"],
      },
      {
        name: "Selai Mangga",
        benefits: ["Kaya serat", "Mudah disimpan", "Cocok untuk olesan roti"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Lembut dan manis", "Kaya nutrisi", "Mudah dicerna"],
      },
      {
        name: "Biji",
        benefits: [
          "Mengandung mineral",
          "Bisa untuk benih",
          "Berkhasiat tradisional",
        ],
      },
      {
        name: "Kulit",
        benefits: ["Kaya serat", "Bisa untuk teh", "Antioksidan tinggi"],
      },
    ],
    season: "Mei - Agustus",
    nutrition: {
      vitamin: "Vitamin A, C, E",
      mineral: "Potassium, Magnesium, Copper",
    },
  },
  {
    id: "pisang",
    name: "Pisang",
    scientificName: "Musa sapientum",
    image: "/fresh-yellow-banana-bunch.jpg",
    benefits: [
      "Kaya kalium untuk kesehatan jantung",
      "Mengandung vitamin B6 untuk otak",
      "Sumber energi cepat",
      "Mengandung serat untuk pencernaan",
      "Membantu mood positif",
    ],
    processing: [
      {
        name: "Jus Pisang",
        benefits: ["Kaya nutrisi", "Mudah dicerna", "Cocok untuk sarapan"],
      },
      {
        name: "Pisang Goreng",
        benefits: ["Tekstur renyah", "Rasa manis", "Cocok untuk snack"],
      },
      {
        name: "Es Pisang Ijo",
        benefits: ["Segar dan dingin", "Lezat", "Populer di Indonesia"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Lembut dan manis", "Mudah dicerna", "Kaya mineral"],
      },
      {
        name: "Kulit",
        benefits: [
          "Bisa untuk kompos",
          "Mengandung nutrisi",
          "Ramah lingkungan",
        ],
      },
      {
        name: "Batang",
        benefits: ["Bisa untuk sayuran", "Mengandung serat", "Tradisional"],
      },
    ],
    season: "Sepanjang tahun",
    nutrition: {
      vitamin: "Vitamin B6, C",
      mineral: "Potassium, Manganese, Folate",
    },
  },
  {
    id: "nanas",
    name: "Nanas",
    scientificName: "Ananas comosus",
    image: "/fresh-pineapple-tropical-fruit.jpg",
    benefits: [
      "Kaya vitamin C untuk imunitas",
      "Mengandung bromelain untuk pencernaan",
      "Anti-inflamasi alami",
      "Membantu penyerapan nutrisi",
      "Baik untuk kesehatan tulang",
    ],
    processing: [
      {
        name: "Jus Nanas",
        benefits: ["Menyegarkan", "Kaya enzim", "Mudah dicerna"],
      },
      {
        name: "Selai Nanas",
        benefits: ["Tahan lama", "Rasa unik", "Cocok untuk kue"],
      },
      {
        name: "Nanas Panggang",
        benefits: [
          "Rasa manis intensif",
          "Tekstur lembut",
          "Cocok untuk dessert",
        ],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Enzim pencernaan", "Kaya nutrisi", "Manis asam"],
      },
      {
        name: "Inti",
        benefits: ["Kaya serat", "Bisa dimakan", "Bernutrisi"],
      },
      {
        name: "Kulit",
        benefits: ["Bisa untuk teh", "Antioksidan", "Tradisional"],
      },
    ],
    season: "Maret - Mei",
    nutrition: {
      vitamin: "Vitamin C, B6",
      mineral: "Manganese, Copper, Folate",
    },
  },
  {
    id: "papaya",
    name: "Pepaya",
    scientificName: "Carica papaya L.",
    image: "/fresh-orange-papaya-fruit.jpg",
    benefits: [
      "Kaya vitamin C untuk imunitas",
      "Mengandung papain untuk pencernaan",
      "Sumber vitamin A untuk mata",
      "Anti-inflamasi alami",
      "Baik untuk kesehatan kulit",
    ],
    processing: [
      {
        name: "Jus Pepaya",
        benefits: ["Menyegarkan", "Mudah dicerna", "Lembut"],
      },
      {
        name: "Salad Pepaya Muda",
        benefits: ["Rasa segar", "Tekstur renyah", "Sehat"],
      },
      {
        name: "Jam Pepaya",
        benefits: ["Tahan lama", "Manis alami", "Mudah dibuat"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Enzim pencernaan", "Manis", "Lembut"],
      },
      {
        name: "Biji",
        benefits: ["Antimikroba", "Tradisional", "Kaya nutrisi"],
      },
      {
        name: "Kulit",
        benefits: ["Kaya serat", "Kaya nutrisi", "Bisa untuk jamu"],
      },
    ],
    season: "Sepanjang tahun",
    nutrition: {
      vitamin: "Vitamin A, C, E",
      mineral: "Potassium, Magnesium, Copper",
    },
  },
  {
    id: "jeruk",
    name: "Jeruk",
    scientificName: "Citrus aurantium",
    image: "/fresh-orange-citrus-fruit.jpg",
    benefits: [
      "Kaya vitamin C untuk imunitas",
      "Mengandung flavonoid untuk antioksidan",
      "Membantu penyerapan zat besi",
      "Baik untuk kesehatan jantung",
      "Membantu pencernaan",
    ],
    processing: [
      {
        name: "Jus Jeruk",
        benefits: ["Menyegarkan", "Kaya vitamin", "Sehat"],
      },
      {
        name: "Selai Jeruk",
        benefits: ["Tahan lama", "Rasa unik", "Mudah dibuat"],
      },
      {
        name: "Sirup Jeruk",
        benefits: ["Praktis", "Tahan lama", "Mudah disimpan"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Segar dan asam manis", "Kaya nutrisi", "Mudah dicerna"],
      },
      {
        name: "Kulit",
        benefits: ["Kaya minyak esensial", "Aroma harum", "Bisa untuk teh"],
      },
      {
        name: "Biji",
        benefits: [
          "Berkhasiat tradisional",
          "Kaya nutrisi",
          "Bisa untuk benih",
        ],
      },
    ],
    season: "Juni - September",
    nutrition: {
      vitamin: "Vitamin C, B1, B6",
      mineral: "Potassium, Folate, Copper",
    },
  },
  {
    id: "rambutan",
    name: "Rambutan",
    scientificName: "Nephelium lappaceum L.",
    image: "/rambutan-hairy-spiky-fruit-red.jpg",
    benefits: [
      "Kaya vitamin C untuk imunitas",
      "Mengandung tembaga untuk kesehatan darah",
      "Sumber serat untuk pencernaan",
      "Anti-inflamasi alami",
      "Baik untuk kesehatan kulit",
    ],
    processing: [
      {
        name: "Jus Rambutan",
        benefits: ["Menyegarkan", "Mudah dicerna", "Sehat"],
      },
      {
        name: "Selai Rambutan",
        benefits: ["Tahan lama", "Rasa unik", "Tekstur baik"],
      },
      {
        name: "Manisan Rambutan",
        benefits: ["Rasa manis", "Tekstur lembut", "Tradisional"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Lembut dan manis", "Mudah dicerna", "Juicy"],
      },
      {
        name: "Biji",
        benefits: ["Bisa digoreng", "Kaya nutrisi", "Tradisional"],
      },
      {
        name: "Kulit Luar",
        benefits: [
          "Unik dan dekoratif",
          "Bisa untuk kerajinan",
          "Ramah lingkungan",
        ],
      },
    ],
    season: "Juni - Agustus",
    nutrition: {
      vitamin: "Vitamin C, B1, B2",
      mineral: "Tembaga, Manganese, Folate",
    },
  },
  {
    id: "mangosteen",
    name: "Manggis",
    scientificName: "Garcinia mangostana L.",
    image: "/mangosteen-purple-fruit.jpg",
    benefits: [
      "Kaya xanthone untuk antioksidan",
      "Anti-inflamasi kuat",
      "Baik untuk kesehatan pencernaan",
      "Membantu menurunkan kolesterol",
      "Baik untuk kesehatan kulit",
    ],
    processing: [
      {
        name: "Jus Manggis",
        benefits: ["Antioksidan tinggi", "Menyegarkan", "Sehat"],
      },
      {
        name: "Ekstrak Manggis",
        benefits: ["Kaya nutrisi", "Awet", "Mudah dikonsumsi"],
      },
      {
        name: "Manisan Manggis",
        benefits: ["Rasa manis asam", "Tekstur lembut", "Tradisional"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Manis asam", "Lembut", "Antioksidan tinggi"],
      },
      {
        name: "Kulit",
        benefits: ["Antioksidan kuat", "Bisa untuk jamu", "Tradisional"],
      },
      {
        name: "Biji",
        benefits: ["Kaya nutrisi", "Tradisional", "Berkhasiat"],
      },
    ],
    season: "Mei - Agustus",
    nutrition: {
      vitamin: "Vitamin C",
      mineral: "Tembaga, Magnesium, Manganese",
    },
  },
  {
    id: "avocado",
    name: "Alpukat",
    scientificName: "Persea americana Mill.",
    image: "/avocado-green-fruit-cut.jpg",
    benefits: [
      "Kaya lemak sehat untuk jantung",
      "Mengandung kalium untuk kesehatan",
      "Sumber serat untuk pencernaan",
      "Antioksidan alami",
      "Baik untuk kesehatan kulit",
    ],
    processing: [
      {
        name: "Jus Alpukat",
        benefits: ["Kaya nutrisi", "Creamy", "Mengenyangkan"],
      },
      {
        name: "Salad Alpukat",
        benefits: ["Segar dan sehat", "Mudah dibuat", "Lezat"],
      },
      {
        name: "Spread Alpukat",
        benefits: ["Tekstur smooth", "Lezat untuk roti", "Sehat"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Lemak sehat", "Creamy", "Bergizi"],
      },
      {
        name: "Biji",
        benefits: ["Tradisional", "Bisa untuk teh", "Kaya nutrisi"],
      },
      {
        name: "Kulit",
        benefits: ["Ramah lingkungan", "Bisa untuk kompos", "Berkelanjutan"],
      },
    ],
    season: "Maret - Mei",
    nutrition: {
      vitamin: "Vitamin K, C, E",
      mineral: "Potassium, Tembaga, Folate",
    },
  },
  {
    id: "durian",
    name: "Durian",
    scientificName: "Durio zibethinus",
    image: "/durian-spiky-king-fruit.jpg",
    benefits: [
      "Kaya triptofan untuk kesehatan mental",
      "Sumber energi tinggi",
      "Kaya vitamin dan mineral",
      "Baik untuk kesehatan tulang",
      "Membantu penyerapan zat besi",
    ],
    processing: [
      {
        name: "Es Krim Durian",
        benefits: ["Creamy", "Rasa khas", "Lezat"],
      },
      {
        name: "Dodol Durian",
        benefits: ["Rasa kuat", "Tekstur legit", "Tradisional"],
      },
      {
        name: "Puree Durian",
        benefits: ["Mudah disimpan", "Praktis", "Kaya nutrisi"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Kaya kalori", "Rasa khas", "Bergizi"],
      },
      {
        name: "Biji",
        benefits: ["Bisa digoreng", "Tekstur garing", "Tradisional"],
      },
      {
        name: "Kulit",
        benefits: ["Kaya serat", "Bisa untuk jamu", "Ramah lingkungan"],
      },
    ],
    season: "Mei - Agustus",
    nutrition: {
      vitamin: "Vitamin C, B1, B6",
      mineral: "Potassium, Tembaga, Manganese",
    },
  },
  {
    id: "salak",
    name: "Salak",
    scientificName: "Salacca zalacca",
    image: "/salak-brown-snake-fruit.jpg",
    benefits: [
      "Kaya tannin untuk kesehatan",
      "Sumber serat untuk pencernaan",
      "Baik untuk kesehatan mata",
      "Mengandung antioksidan",
      "Membantu mengontrol gula darah",
    ],
    processing: [
      {
        name: "Jus Salak",
        benefits: ["Segar", "Mudah dicerna", "Sehat"],
      },
      {
        name: "Selai Salak",
        benefits: ["Tahan lama", "Rasa unik", "Mudah dibuat"],
      },
      {
        name: "Manisan Salak",
        benefits: ["Manis", "Tekstur baik", "Tradisional"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Renyah dan manis", "Mudah dicerna", "Sehat"],
      },
      {
        name: "Biji",
        benefits: ["Tradisional", "Bisa dimakan", "Kaya nutrisi"],
      },
      {
        name: "Kulit",
        benefits: ["Kaya tannin", "Bisa untuk jamu", "Tradisional"],
      },
    ],
    season: "Mei - Juni",
    nutrition: {
      vitamin: "Vitamin C",
      mineral: "Potassium, Tembaga, Manganese",
    },
  },
  {
    id: "duku",
    name: "Duku",
    scientificName: "Lansium domesticum",
    image: "/duku-yellow-round-fruit.jpg",
    benefits: [
      "Kaya vitamin C untuk imunitas",
      "Sumber karbohidrat untuk energi",
      "Mengandung antioksidan",
      "Baik untuk kesehatan jantung",
      "Membantu pencernaan",
    ],
    processing: [
      {
        name: "Jus Duku",
        benefits: ["Manis alami", "Mudah dicerna", "Sehat"],
      },
      {
        name: "Selai Duku",
        benefits: ["Tahan lama", "Rasa manis", "Tradisional"],
      },
      {
        name: "Manisan Duku",
        benefits: ["Tekstur lembut", "Manis", "Lezat"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Manis dan lembut", "Mudah dicerna", "Juicy"],
      },
      {
        name: "Biji",
        benefits: ["Bisa digoreng", "Kaya nutrisi", "Tradisional"],
      },
      {
        name: "Kulit",
        benefits: ["Kaya serat", "Bisa untuk jamu", "Berkelanjutan"],
      },
    ],
    season: "Mei - Agustus",
    nutrition: {
      vitamin: "Vitamin C, B1",
      mineral: "Potassium, Tembaga, Manganese",
    },
  },
  {
    id: "langsat",
    name: "Langsat",
    scientificName: "Lansium domesticum var. pubescens",
    image: "/langsat-yellow-small-round-fruit.jpg",
    benefits: [
      "Kaya vitamin C untuk imunitas",
      "Mengandung antioksidan",
      "Baik untuk pencernaan",
      "Membantu penyerapan zat besi",
      "Mendukung kesehatan kulit",
    ],
    processing: [
      {
        name: "Jus Langsat",
        benefits: ["Segar", "Mudah dicerna", "Sehat"],
      },
      {
        name: "Manisan Langsat",
        benefits: ["Rasa manis asam", "Tekstur baik", "Tradisional"],
      },
      {
        name: "Sirup Langsat",
        benefits: ["Praktis", "Tahan lama", "Mudah disimpan"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Manis asam", "Mudah dicerna", "Sehat"],
      },
      {
        name: "Biji",
        benefits: ["Tradisional", "Kaya nutrisi", "Bisa untuk benih"],
      },
      {
        name: "Kulit",
        benefits: ["Kaya serat", "Bisa untuk jamu", "Antioksidan"],
      },
    ],
    season: "Juni - Agustus",
    nutrition: {
      vitamin: "Vitamin C",
      mineral: "Potassium, Manganese, Folate",
    },
  },
  {
    id: "jambu",
    name: "Jambu",
    scientificName: "Psidium guajava L.",
    image: "/guava-green-fruit.jpg",
    benefits: [
      "Kaya vitamin C untuk imunitas",
      "Sumber serat untuk pencernaan",
      "Rendah kalori untuk diet",
      "Membantu mengontrol gula darah",
      "Baik untuk kesehatan jantung",
    ],
    processing: [
      {
        name: "Jus Jambu",
        benefits: ["Menyegarkan", "Kaya vitamin", "Sehat"],
      },
      {
        name: "Selai Jambu",
        benefits: ["Tahan lama", "Tekstur baik", "Mudah dibuat"],
      },
      {
        name: "Manisan Jambu",
        benefits: ["Rasa manis", "Tekstur lembut", "Tradisional"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Segar dan manis", "Mudah dicerna", "Bergizi"],
      },
      {
        name: "Biji",
        benefits: ["Kaya serat", "Tradisional", "Bisa dimakan"],
      },
      {
        name: "Kulit",
        benefits: ["Kaya serat", "Antioksidan", "Bisa untuk jamu"],
      },
    ],
    season: "Sepanjang tahun",
    nutrition: {
      vitamin: "Vitamin C, A",
      mineral: "Potassium, Manganese, Folate",
    },
  },
  {
    id: "semangka",
    name: "Semangka",
    scientificName: "Citrullus lanatus",
    image: "/watermelon-red-juicy-fruit.jpg",
    benefits: [
      "Kaya air untuk hidrasi",
      "Mengandung likopen untuk kesehatan",
      "Sumber vitamin C",
      "Baik untuk kesehatan jantung",
      "Membantu penyerapan nutrisi",
    ],
    processing: [
      {
        name: "Jus Semangka",
        benefits: ["Menyegarkan", "Mudah dicerna", "Sehat"],
      },
      {
        name: "Es Semangka",
        benefits: ["Dingin dan segar", "Lezat", "Populer"],
      },
      {
        name: "Sorbet Semangka",
        benefits: ["Tekstur smooth", "Rasa segar", "Sehat"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Banyak air", "Segar", "Mudah dicerna"],
      },
      {
        name: "Biji",
        benefits: ["Kaya nutrisi", "Bisa digoreng", "Tradisional"],
      },
      {
        name: "Kulit",
        benefits: ["Kaya serat", "Bisa untuk masakan", "Ramah lingkungan"],
      },
    ],
    season: "Oktober - Desember",
    nutrition: {
      vitamin: "Vitamin C, A",
      mineral: "Potassium, Magnesium, Manganese",
    },
  },
  {
    id: "melon",
    name: "Melon",
    scientificName: "Cucumis melo L.",
    image: "/melon-orange-cantaloupe-fruit.jpg",
    benefits: [
      "Kaya vitamin A untuk mata",
      "Sumber vitamin C untuk imunitas",
      "Kaya air untuk hidrasi",
      "Baik untuk pencernaan",
      "Membantu kesehatan kulit",
    ],
    processing: [
      {
        name: "Jus Melon",
        benefits: ["Menyegarkan", "Mudah dicerna", "Sehat"],
      },
      {
        name: "Sorbet Melon",
        benefits: ["Tekstur smooth", "Rasa segar", "Sehat"],
      },
      {
        name: "Es Melon",
        benefits: ["Dingin segar", "Lezat", "Populer"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Banyak air", "Manis", "Mudah dicerna"],
      },
      {
        name: "Biji",
        benefits: ["Kaya nutrisi", "Bisa digoreng", "Tradisional"],
      },
      {
        name: "Kulit",
        benefits: ["Kaya serat", "Bisa untuk kompos", "Ramah lingkungan"],
      },
    ],
    season: "Maret - Mei",
    nutrition: {
      vitamin: "Vitamin A, C",
      mineral: "Potassium, Magnesium, Folate",
    },
  },
  {
    id: "kurma",
    name: "Kurma",
    scientificName: "Phoenix dactylifera L.",
    image: "/dates-brown-fruit-dried.jpg",
    benefits: [
      "Kaya energi untuk stamina",
      "Sumber serat untuk pencernaan",
      "Kaya mineral dan vitamin",
      "Baik untuk kesehatan tulang",
      "Membantu penyerapan nutrisi",
    ],
    processing: [
      {
        name: "Kurma Stuffed",
        benefits: ["Rasa unik", "Tekstur baik", "Lezat"],
      },
      {
        name: "Pasta Kurma",
        benefits: ["Praktis", "Kaya nutrisi", "Mudah digunakan"],
      },
      {
        name: "Teh Kurma",
        benefits: ["Hangat", "Menenangkan", "Berkhasiat"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Manis alami", "Kaya energi", "Bergizi"],
      },
      {
        name: "Biji",
        benefits: ["Tradisional", "Bisa untuk kopi", "Berkhasiat"],
      },
      {
        name: "Kulit",
        benefits: ["Kaya serat", "Ramah lingkungan", "Bisa untuk jamu"],
      },
    ],
    season: "Agustus - Oktober",
    nutrition: {
      vitamin: "Vitamin B1, B2, B3",
      mineral: "Potassium, Magnesium, Copper",
    },
  },
  {
    id: "kiwi",
    name: "Kiwi",
    scientificName: "Actinidia deliciosa",
    image: "/kiwi-fruit.png",
    benefits: [
      "Kaya vitamin C untuk imunitas",
      "Mengandung serotonin untuk mood",
      "Baik untuk pencernaan",
      "Kaya antioksidan",
      "Membantu penyerapan nutrisi",
    ],
    processing: [
      {
        name: "Jus Kiwi",
        benefits: ["Menyegarkan", "Mudah dicerna", "Sehat"],
      },
      {
        name: "Selai Kiwi",
        benefits: ["Tahan lama", "Rasa unik", "Mudah dibuat"],
      },
      {
        name: "Smoothie Kiwi",
        benefits: ["Kaya nutrisi", "Mudah dibuat", "Sehat"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Lembut dan manis asam", "Mudah dicerna", "Bergizi"],
      },
      {
        name: "Biji",
        benefits: ["Kaya nutrisi", "Bisa dimakan", "Tradisional"],
      },
      {
        name: "Kulit",
        benefits: ["Kaya serat", "Antioksidan", "Bisa untuk teh"],
      },
    ],
    season: "Mei - Agustus",
    nutrition: {
      vitamin: "Vitamin C, E",
      mineral: "Potassium, Magnesium, Folate",
    },
  },
  {
    id: "jeruk-nipis",
    name: "Jeruk Nipis",
    scientificName: "Citrus aurantifolia",
    image: "/jeruk-nipis-small-green.jpg",
    benefits: [
      "Kaya vitamin C untuk imunitas",
      "Membantu pencernaan",
      "Anti-inflamasi alami",
      "Baik untuk kesehatan gigi",
      "Membantu penyerapan zat besi",
    ],
    processing: [
      {
        name: "Jus Jeruk Nipis",
        benefits: ["Segar dan asam", "Mudah dicerna", "Sehat"],
      },
      {
        name: "Sirup Jeruk Nipis",
        benefits: ["Praktis", "Tahan lama", "Mudah disimpan"],
      },
      {
        name: "Wedang Jeruk Nipis",
        benefits: ["Hangat dan segar", "Menenangkan", "Tradisional"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Asam segar", "Mudah dicerna", "Praktis"],
      },
      {
        name: "Kulit",
        benefits: ["Kaya minyak esensial", "Aroma harum", "Bisa untuk teh"],
      },
      {
        name: "Biji",
        benefits: ["Tradisional", "Berkhasiat", "Kaya nutrisi"],
      },
    ],
    season: "Sepanjang tahun",
    nutrition: {
      vitamin: "Vitamin C, B",
      mineral: "Potassium, Copper, Manganese",
    },
  },
  {
    id: "jeruk-mandarin",
    name: "Jeruk Mandarin",
    scientificName: "Citrus reticulata",
    image: "/jeruk-mandarin-orange.jpg",
    benefits: [
      "Kaya vitamin C untuk imunitas",
      "Mengandung flavonoid antioksidan",
      "Baik untuk kesehatan jantung",
      "Membantu pencernaan",
      "Mudah dikonsumsi",
    ],
    processing: [
      {
        name: "Jus Jeruk Mandarin",
        benefits: ["Manis alami", "Mudah dicerna", "Sehat"],
      },
      {
        name: "Selai Jeruk Mandarin",
        benefits: ["Tahan lama", "Rasa manis", "Mudah dibuat"],
      },
      {
        name: "Konserve Jeruk",
        benefits: ["Tradisional", "Tahan lama", "Lezat"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Manis dan juicy", "Mudah dicerna", "Sehat"],
      },
      {
        name: "Kulit",
        benefits: ["Kaya minyak esensial", "Aroma harum", "Bisa untuk teh"],
      },
      {
        name: "Biji",
        benefits: ["Tradisional", "Berkhasiat", "Kaya nutrisi"],
      },
    ],
    season: "Juni - Oktober",
    nutrition: {
      vitamin: "Vitamin C, A",
      mineral: "Potassium, Folate, Manganese",
    },
  },
  {
    id: "grapefruit",
    name: "Grapefruit",
    scientificName: "Citrus paradisi",
    image: "/grape-purple-fruit.jpg",
    benefits: [
      "Kaya vitamin C untuk imunitas",
      "Mengandung lycopene antioksidan",
      "Baik untuk kesehatan jantung",
      "Membantu menurunkan berat badan",
      "Anti-inflamasi alami",
    ],
    processing: [
      {
        name: "Jus Grapefruit",
        benefits: ["Menyegarkan", "Mudah dicerna", "Sehat"],
      },
      {
        name: "Selai Grapefruit",
        benefits: ["Tahan lama", "Rasa unik", "Mudah dibuat"],
      },
      {
        name: "Marmalade Grapefruit",
        benefits: ["Tradisional", "Tahan lama", "Lezat"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Asam manis", "Mudah dicerna", "Sehat"],
      },
      {
        name: "Kulit",
        benefits: ["Kaya minyak esensial", "Aroma harum", "Bisa untuk teh"],
      },
      {
        name: "Biji",
        benefits: ["Antibakteri", "Tradisional", "Berkhasiat"],
      },
    ],
    season: "Oktober - Desember",
    nutrition: {
      vitamin: "Vitamin C, A",
      mineral: "Potassium, Magnesium, Folate",
    },
  },
  {
    id: "naga",
    name: "Buah Naga",
    scientificName: "Hylocereus undatus",
    image: "/dragon-fruit-pink.jpg",
    benefits: [
      "Kaya vitamin C untuk imunitas",
      "Sumber serat untuk pencernaan",
      "Rendah kalori untuk diet",
      "Antioksidan alami",
      "Baik untuk kesehatan kulit",
    ],
    processing: [
      {
        name: "Jus Buah Naga",
        benefits: ["Menyegarkan", "Mudah dicerna", "Sehat"],
      },
      {
        name: "Smoothie Buah Naga",
        benefits: ["Kaya nutrisi", "Mudah dibuat", "Sehat"],
      },
      {
        name: "Es Buah Naga",
        benefits: ["Dingin segar", "Lezat", "Populer"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Lembut dan segar", "Mudah dicerna", "Bergizi"],
      },
      {
        name: "Biji",
        benefits: ["Kaya nutrisi", "Bisa dimakan", "Tradisional"],
      },
      {
        name: "Kulit",
        benefits: ["Kaya serat", "Ramah lingkungan", "Bisa untuk jamu"],
      },
    ],
    season: "Juni - Agustus",
    nutrition: {
      vitamin: "Vitamin C, B1, B2",
      mineral: "Potassium, Magnesium, Iron",
    },
  },
  {
    id: "air-mawar",
    name: "Air Mawar",
    scientificName: "Syzygium aqueum",
    image: "/placeholder.svg?height=300&width=300",
    benefits: [
      "Kaya air untuk hidrasi",
      "Sumber vitamin C",
      "Baik untuk pencernaan",
      "Rendah kalori",
      "Membantu penyerapan nutrisi",
    ],
    processing: [
      {
        name: "Jus Air Mawar",
        benefits: ["Menyegarkan", "Mudah dicerna", "Sehat"],
      },
      {
        name: "Manisan Air Mawar",
        benefits: ["Rasa manis", "Tekstur renyah", "Tradisional"],
      },
      {
        name: "Es Air Mawar",
        benefits: ["Dingin segar", "Lezat", "Populer"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Banyak air", "Segar renyah", "Mudah dicerna"],
      },
      {
        name: "Biji",
        benefits: ["Tradisional", "Kaya nutrisi", "Bisa dimakan"],
      },
      {
        name: "Kulit",
        benefits: ["Kaya serat", "Antioksidan", "Ramah lingkungan"],
      },
    ],
    season: "Juni - Agustus",
    nutrition: {
      vitamin: "Vitamin C",
      mineral: "Potassium, Manganese, Copper",
    },
  },
  {
    id: "jambu-biji",
    name: "Jambu Biji",
    scientificName: "Psidium guajava L. var. Carnea",
    image: "/guava-green-fruit.jpg",
    benefits: [
      "Kaya vitamin C untuk imunitas",
      "Sumber serat untuk pencernaan",
      "Rendah kalori untuk diet",
      "Membantu mengontrol gula darah",
      "Anti-inflamasi alami",
    ],
    processing: [
      {
        name: "Jus Jambu Biji",
        benefits: ["Menyegarkan", "Kaya vitamin", "Sehat"],
      },
      {
        name: "Selai Jambu Biji",
        benefits: ["Tahan lama", "Rasa unik", "Mudah dibuat"],
      },
      {
        name: "Manisan Jambu Biji",
        benefits: ["Rasa manis", "Tekstur baik", "Tradisional"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Lembut dan manis", "Mudah dicerna", "Bergizi"],
      },
      {
        name: "Biji",
        benefits: ["Kaya serat", "Tradisional", "Bisa dimakan"],
      },
      {
        name: "Kulit",
        benefits: ["Kaya serat", "Antioksidan", "Bisa untuk jamu"],
      },
    ],
    season: "Sepanjang tahun",
    nutrition: {
      vitamin: "Vitamin C, A",
      mineral: "Potassium, Manganese, Folate",
    },
  },
  {
    id: "belimbing",
    name: "Belimbing",
    scientificName: "Averrhoa carambola",
    image: "/starfruit-yellow.jpg",
    benefits: [
      "Kaya vitamin C untuk imunitas",
      "Sumber serat untuk pencernaan",
      "Baik untuk kesehatan jantung",
      "Membantu menurunkan kolesterol",
      "Antioksidan alami",
    ],
    processing: [
      {
        name: "Jus Belimbing",
        benefits: ["Menyegarkan", "Mudah dicerna", "Sehat"],
      },
      {
        name: "Manisan Belimbing",
        benefits: ["Rasa manis asam", "Tekstur baik", "Tradisional"],
      },
      {
        name: "Sirup Belimbing",
        benefits: ["Praktis", "Tahan lama", "Mudah disimpan"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Segar asam manis", "Mudah dicerna", "Bergizi"],
      },
      {
        name: "Biji",
        benefits: ["Tradisional", "Kaya nutrisi", "Bisa dimakan"],
      },
      {
        name: "Kulit",
        benefits: ["Kaya serat", "Antioksidan", "Ramah lingkungan"],
      },
    ],
    season: "Mei - Agustus",
    nutrition: {
      vitamin: "Vitamin C, B",
      mineral: "Potassium, Copper, Manganese",
    },
  },
  {
    id: "markisa",
    name: "Markisa",
    scientificName: "Passiflora edulis",
    image: "/markisa.png",
    benefits: [
      "Kaya serat untuk pencernaan",
      "Sumber vitamin C",
      "Membantu tidur berkualitas",
      "Anti-inflamasi alami",
      "Baik untuk kesehatan kulit",
    ],
    processing: [
      {
        name: "Jus Markisa",
        benefits: ["Menyegarkan", "Rasa unik", "Sehat"],
      },
      {
        name: "Selai Markisa",
        benefits: ["Tahan lama", "Rasa unik", "Lezat"],
      },
      {
        name: "Sirup Markisa",
        benefits: ["Praktis", "Tahan lama", "Mudah disimpan"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Asam segar", "Mudah dicerna", "Bergizi"],
      },
      {
        name: "Biji",
        benefits: ["Kaya nutrisi", "Bisa dimakan", "Tradisional"],
      },
      {
        name: "Kulit",
        benefits: ["Kaya serat", "Antioksidan", "Ramah lingkungan"],
      },
    ],
    season: "Mei - Agustus",
    nutrition: {
      vitamin: "Vitamin C, A",
      mineral: "Potassium, Magnesium, Copper",
    },
  },
  {
    id: "ceri",
    name: "Ceri",
    scientificName: "Prunus serrulata",
    image: "/cherry-red-fruit.jpg",
    benefits: [
      "Kaya antioksidan untuk kesehatan",
      "Membantu tidur berkualitas",
      "Baik untuk kesehatan jantung",
      "Anti-inflamasi alami",
      "Membantu penyerapan nutrisi",
    ],
    processing: [
      {
        name: "Jus Ceri",
        benefits: ["Menyegarkan", "Mudah dicerna", "Sehat"],
      },
      {
        name: "Selai Ceri",
        benefits: ["Tahan lama", "Rasa manis", "Lezat"],
      },
      {
        name: "Manisan Ceri",
        benefits: ["Manis dan lezat", "Tekstur baik", "Tradisional"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Manis dan juicy", "Mudah dicerna", "Bergizi"],
      },
      {
        name: "Biji",
        benefits: ["Tradisional", "Kaya nutrisi", "Bisa dimakan"],
      },
      {
        name: "Kulit",
        benefits: ["Kaya serat", "Antioksidan", "Ramah lingkungan"],
      },
    ],
    season: "Mei - Juni",
    nutrition: {
      vitamin: "Vitamin C, A",
      mineral: "Potassium, Copper, Manganese",
    },
  },
  {
    id: "sukun",
    name: "Sukun",
    scientificName: "Artocarpus altilis",
    image: "/sukun.png",
    benefits: [
      "Kaya karbohidrat untuk energi",
      "Sumber serat untuk pencernaan",
      "Kaya mineral dan vitamin",
      "Baik untuk kesehatan tulang",
      "Mudah dicerna",
    ],
    processing: [
      {
        name: "Sukun Goreng",
        benefits: ["Renyah garing", "Lezat", "Praktis"],
      },
      {
        name: "Bubur Sukun",
        benefits: ["Lembut lezat", "Mudah dicerna", "Bergizi"],
      },
      {
        name: "Keripik Sukun",
        benefits: ["Renyah", "Tahan lama", "Mudah disimpan"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Bertepung", "Mudah dicerna", "Bergizi"],
      },
      {
        name: "Biji",
        benefits: ["Kaya nutrisi", "Bisa digoreng", "Tradisional"],
      },
      {
        name: "Kulit",
        benefits: ["Kaya serat", "Ramah lingkungan", "Bisa untuk jamu"],
      },
    ],
    season: "September - November",
    nutrition: {
      vitamin: "Vitamin B, C",
      mineral: "Potassium, Magnesium, Copper",
    },
  },
  {
    id: "buah-mentega",
    name: "Buah Mentega",
    scientificName: "Lansium parasiticum var. Butter",
    image: "/placeholder.svg?height=300&width=300",
    benefits: [
      "Kaya vitamin C untuk imunitas",
      "Sumber karbohidrat untuk energi",
      "Mengandung antioksidan",
      "Baik untuk kesehatan jantung",
      "Membantu pencernaan",
    ],
    processing: [
      {
        name: "Jus Buah Mentega",
        benefits: ["Manis alami", "Mudah dicerna", "Sehat"],
      },
      {
        name: "Selai Buah Mentega",
        benefits: ["Tahan lama", "Rasa manis", "Tradisional"],
      },
      {
        name: "Manisan Buah Mentega",
        benefits: ["Tekstur lembut", "Manis", "Lezat"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Lembut dan manis", "Mudah dicerna", "Juicy"],
      },
      {
        name: "Biji",
        benefits: ["Kaya nutrisi", "Tradisional", "Bisa dimakan"],
      },
      {
        name: "Kulit",
        benefits: ["Kaya serat", "Antioksidan", "Ramah lingkungan"],
      },
    ],
    season: "Agustus - Oktober",
    nutrition: {
      vitamin: "Vitamin C, B1",
      mineral: "Potassium, Manganese, Copper",
    },
  },
  {
    id: "buah-tin",
    name: "Buah Tin",
    scientificName: "Ficus carica",
    image: "/tin.png",
    benefits: [
      "Kaya serat untuk pencernaan",
      "Sumber mineral penting",
      "Baik untuk kesehatan tulang",
      "Membantu mengontrol gula darah",
      "Antioksidan alami",
    ],
    processing: [
      {
        name: "Jus Buah Tin",
        benefits: ["Lembut", "Kaya nutrisi", "Sehat"],
      },
      {
        name: "Selai Buah Tin",
        benefits: ["Tahan lama", "Rasa unik", "Tradisional"],
      },
      {
        name: "Manisan Buah Tin",
        benefits: ["Manis", "Tekstur baik", "Lezat"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Lembut dan manis", "Mudah dicerna", "Bergizi"],
      },
      {
        name: "Biji",
        benefits: ["Kaya nutrisi", "Bisa dimakan", "Tradisional"],
      },
      {
        name: "Kulit",
        benefits: ["Kaya serat", "Antioksidan", "Ramah lingkungan"],
      },
    ],
    season: "Juli - Oktober",
    nutrition: {
      vitamin: "Vitamin B, C",
      mineral: "Potassium, Magnesium, Calcium",
    },
  },
  {
    id: "buah-loquat",
    name: "Buah Loquat",
    scientificName: "Eriobotrya japonica",
    image: "/placeholder.svg?height=300&width=300",
    benefits: [
      "Kaya vitamin A untuk mata",
      "Sumber vitamin C untuk imunitas",
      "Baik untuk kesehatan paru-paru",
      "Membantu pencernaan",
      "Anti-inflamasi alami",
    ],
    processing: [
      {
        name: "Jus Loquat",
        benefits: ["Menyegarkan", "Mudah dicerna", "Sehat"],
      },
      {
        name: "Selai Loquat",
        benefits: ["Tahan lama", "Rasa unik", "Tradisional"],
      },
      {
        name: "Sirup Loquat",
        benefits: ["Praktis", "Tahan lama", "Mudah disimpan"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Lembut dan manis", "Mudah dicerna", "Bergizi"],
      },
      {
        name: "Biji",
        benefits: ["Tradisional", "Kaya nutrisi", "Bisa dimakan"],
      },
      {
        name: "Kulit",
        benefits: ["Kaya serat", "Antioksidan", "Ramah lingkungan"],
      },
    ],
    season: "Maret - Juni",
    nutrition: {
      vitamin: "Vitamin A, C",
      mineral: "Potassium, Copper, Manganese",
    },
  },
  {
    id: "rambutan-putih",
    name: "Rambutan Putih",
    scientificName: "Nephelium lappaceum var. Albino",
    image: "/rambutan-hairy-fruit.jpg",
    benefits: [
      "Kaya vitamin C untuk imunitas",
      "Mengandung tembaga untuk kesehatan darah",
      "Sumber serat untuk pencernaan",
      "Anti-inflamasi alami",
      "Baik untuk kesehatan kulit",
    ],
    processing: [
      {
        name: "Jus Rambutan Putih",
        benefits: ["Menyegarkan", "Mudah dicerna", "Sehat"],
      },
      {
        name: "Selai Rambutan Putih",
        benefits: ["Tahan lama", "Rasa unik", "Tradisional"],
      },
      {
        name: "Manisan Rambutan Putih",
        benefits: ["Manis lembut", "Tekstur baik", "Lezat"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Lembut dan manis", "Mudah dicerna", "Juicy"],
      },
      {
        name: "Biji",
        benefits: ["Kaya nutrisi", "Bisa dimakan", "Tradisional"],
      },
      {
        name: "Kulit",
        benefits: [
          "Unik dan dekoratif",
          "Bisa untuk kerajinan",
          "Ramah lingkungan",
        ],
      },
    ],
    season: "Juni - Agustus",
    nutrition: {
      vitamin: "Vitamin C, B1, B2",
      mineral: "Tembaga, Manganese, Folate",
    },
  },
  {
    id: "pulasan",
    name: "Pulasan",
    scientificName: "Nephelium mutabile",
    image: "/placeholder.svg?height=300&width=300",
    benefits: [
      "Kaya vitamin C untuk imunitas",
      "Mengandung tembaga untuk kesehatan darah",
      "Sumber serat untuk pencernaan",
      "Anti-inflamasi alami",
      "Baik untuk kesehatan kulit",
    ],
    processing: [
      {
        name: "Jus Pulasan",
        benefits: ["Menyegarkan", "Mudah dicerna", "Sehat"],
      },
      {
        name: "Selai Pulasan",
        benefits: ["Tahan lama", "Rasa unik", "Tradisional"],
      },
      {
        name: "Manisan Pulasan",
        benefits: ["Manis lembut", "Tekstur baik", "Lezat"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Lembut dan manis", "Mudah dicerna", "Juicy"],
      },
      {
        name: "Biji",
        benefits: ["Kaya nutrisi", "Bisa dimakan", "Tradisional"],
      },
      {
        name: "Kulit",
        benefits: [
          "Unik dan dekoratif",
          "Bisa untuk kerajinan",
          "Ramah lingkungan",
        ],
      },
    ],
    season: "Juli - September",
    nutrition: {
      vitamin: "Vitamin C, B1, B2",
      mineral: "Tembaga, Manganese, Folate",
    },
  },
  {
    id: "nangka",
    name: "Nangka",
    scientificName: "Artocarpus heterophyllus",
    image: "/jackfruit-yellow.jpg",
    benefits: [
      "Kaya vitamin C untuk imunitas",
      "Sumber serat untuk pencernaan",
      "Kaya mineral dan vitamin",
      "Baik untuk kesehatan tulang",
      "Membantu penyerapan nutrisi",
    ],
    processing: [
      {
        name: "Nangka Goreng",
        benefits: ["Renyah lezat", "Tekstur baik", "Populer"],
      },
      {
        name: "Gula Nangka",
        benefits: ["Manis alami", "Tradisional", "Mudah dibuat"],
      },
      {
        name: "Selai Nangka",
        benefits: ["Tahan lama", "Rasa unik", "Lezat"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Bertepung manis", "Mudah dicerna", "Bergizi"],
      },
      {
        name: "Biji",
        benefits: ["Kaya nutrisi", "Bisa digoreng", "Tradisional"],
      },
      {
        name: "Kulit",
        benefits: ["Kaya serat", "Ramah lingkungan", "Bisa untuk jamu"],
      },
    ],
    season: "Juni - Agustus",
    nutrition: {
      vitamin: "Vitamin B, C",
      mineral: "Potassium, Magnesium, Copper",
    },
  },
  {
    id: "pisang-raja",
    name: "Pisang Raja",
    scientificName: "Musa sapientum var. Raja",
    image: "/placeholder.svg?height=300&width=300",
    benefits: [
      "Kaya kalium untuk kesehatan jantung",
      "Mengandung vitamin B6 untuk otak",
      "Sumber energi cepat",
      "Mengandung serat untuk pencernaan",
      "Membantu mood positif",
    ],
    processing: [
      {
        name: "Pisang Raja Goreng",
        benefits: ["Renyah garing", "Lezat manis", "Populer"],
      },
      {
        name: "Es Pisang Raja",
        benefits: ["Dingin segar", "Lezat", "Mudah dibuat"],
      },
      {
        name: "Selai Pisang Raja",
        benefits: ["Tahan lama", "Rasa lezat", "Tradisional"],
      },
    ],
    parts: [
      {
        name: "Daging Buah",
        benefits: ["Lembut dan manis", "Mudah dicerna", "Kaya mineral"],
      },
      {
        name: "Kulit",
        benefits: ["Kaya serat", "Ramah lingkungan", "Bisa untuk kompos"],
      },
      {
        name: "Batang",
        benefits: ["Bisa untuk sayuran", "Mengandung serat", "Tradisional"],
      },
    ],
    season: "Sepanjang tahun",
    nutrition: {
      vitamin: "Vitamin B6, C",
      mineral: "Potassium, Manganese, Folate",
    },
  },
  {
    id: "kakao",
    name: "Kakao",
    scientificName: "Theobroma cacao L.",
    image: "/placeholder.svg?height=300&width=300",
    benefits: [
      "Kaya antioksidan untuk kesehatan",
      "Membantu kesehatan jantung",
      "Meningkatkan mood dan energi",
      "Kaya mineral penting",
      "Anti-inflamasi alami",
    ],
    processing: [
      {
        name: "Coklat Kakao",
        benefits: ["Rasa kaya", "Lezat", "Populer"],
      },
      {
        name: "Minuman Kakao",
        benefits: ["Hangat nyaman", "Kaya nutrisi", "Tradisional"],
      },
      {
        name: "Butter Kakao",
        benefits: ["Praktis", "Kaya nutrisi", "Mudah digunakan"],
      },
    ],
    parts: [
      {
        name: "Biji Kakao",
        benefits: ["Kaya antioksidan", "Rasa kaya", "Bergizi"],
      },
      {
        name: "Kulit Biji",
        benefits: ["Kaya serat", "Antioksidan", "Ramah lingkungan"],
      },
      {
        name: "Daging Buah",
        benefits: ["Manis alami", "Mudah dicerna", "Lezat"],
      },
    ],
    season: "September - Desember",
    nutrition: {
      vitamin: "Vitamin B1, B2",
      mineral: "Potassium, Magnesium, Copper",
    },
  },
];
