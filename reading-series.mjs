/* BunyiBaca Siri Bacaan original editorial content v2.
 * Educational inspiration: systematic sound-to-print blending and graded reading.
 * Independently authored; not affiliated with, reproducing, or licensed from Bacalah Anakku.
 * Book pages are practice, not evidence of validated mastery. Audio is demonstrative.
 */
const EDITORIAL = [
  {
    "id": "bb1",
    "title": "Bunyi Mula",
    "icon": "🌱",
    "color": "#59A884",
    "free": true,
    "level": "Pra-baca & fonem asas",
    "skills": [
      "a",
      "i",
      "u",
      "m",
      "s"
    ],
    "parent": "Sebut bunyi secara pendek dan jelas. Jangan wajibkan nama huruf. Tunjuk perkataan dahulu tanpa gambar.",
    "sounds": [
      "a",
      "i",
      "u",
      "m",
      "s"
    ],
    "blend": [
      "m+a=ma",
      "m+i=mi",
      "m+u=mu",
      "s+a=sa",
      "s+i=si",
      "s+u=su"
    ],
    "ladder": [
      "ma → mi → mu",
      "sa → si → su",
      "ma → sa → ma",
      "su → mu → su"
    ],
    "words": [
      "ma-ma",
      "mi-mi",
      "sa-ma",
      "ma-sa",
      "su-su",
      "si-si"
    ],
    "contrasts": [
      "ma ↔ sa",
      "mi ↔ si",
      "mu ↔ su",
      "sama ↔ masa"
    ],
    "sentences": [
      "Mama, susu!",
      "Mimi, susu!",
      "Mama, Mimi!"
    ],
    "story_title": "Susu untuk Mimi",
    "story": [
      "Mimi sama Mama.",
      "Mama, susu!",
      "Mimi suka susu."
    ],
    "story_parent": "Perkataan “suka” mempunyai bunyi k yang belum diajar; penjaga membacakannya. Murid membaca perkataan yang telah dipelajari.",
    "quiz": [
      "Yang mana bermula dengan bunyi /m/?",
      [
        "masa",
        "susu",
        "sisi"
      ],
      "masa"
    ],
    "tip": "Semak sebutan /m/ dan /s/, kemudian tunjuk satu bunyi berubah untuk membina suku kata baharu."
  },
  {
    "id": "bb2",
    "title": "Suku Kata Bergerak",
    "icon": "🚲",
    "color": "#5C9DD4",
    "free": true,
    "level": "KV & perkataan pendek",
    "skills": [
      "b",
      "t",
      "n",
      "k",
      "p"
    ],
    "parent": "Tunjukkan bunyi baharu b, t, n, k dan p. Latih perubahan satu huruf pada satu masa dan jangan meminta hafalan seluruh jadual.",
    "sounds": [
      "b",
      "t",
      "n",
      "k",
      "p"
    ],
    "blend": [
      "b+a=ba",
      "b+u=bu",
      "t+a=ta",
      "n+a=na",
      "k+i=ki",
      "p+a=pa"
    ],
    "ladder": [
      "ba → ta → na",
      "bu → ku → su",
      "pa → ba → ta",
      "ki → ni → mi"
    ],
    "words": [
      "bu-ku",
      "ba-tu",
      "na-si",
      "sa-tu",
      "su-ka",
      "ka-ki",
      "ku-ku",
      "pa-ku",
      "ta-pi"
    ],
    "contrasts": [
      "batu ↔ satu",
      "kaki ↔ kuku",
      "buku ↔ buka",
      "nasi ↔ basi"
    ],
    "sentences": [
      "Ibu suka nasi.",
      "Ini buku ibu.",
      "Kaki ibu sakit."
    ],
    "story_title": "Buku dan Nasi",
    "story": [
      "Ini buku ibu.",
      "Ibu suka buku.",
      "Ibu juga suka nasi."
    ],
    "story_parent": "Perkataan “juga” mengandungi j dan g yang akan diperkenalkan kemudian. Bacakan perkataan itu bersama anak.",
    "quiz": [
      "Pilih perkataan yang bermula dengan /k/.",
      [
        "kuku",
        "batu",
        "nasi"
      ],
      "kuku"
    ],
    "tip": "Baca suku kata secara bersambung. Perkataan baharu hendaklah dicuba tanpa bantuan gambar terlebih dahulu."
  },
  {
    "id": "bb3",
    "title": "Jelajah Huruf",
    "icon": "🛶",
    "color": "#9C7ACB",
    "free": true,
    "level": "Konsonan baharu & perkataan KVKV",
    "skills": [
      "c",
      "d",
      "g",
      "j",
      "l",
      "r"
    ],
    "parent": "Tambah konsonan sedikit demi sedikit. Beri ruang untuk menyebut /r/ mengikut perkembangan pertuturan anak. Jangan jadikan pelat sebagai kesalahan membaca.",
    "sounds": [
      "c",
      "d",
      "g",
      "j",
      "l",
      "r"
    ],
    "blend": [
      "c+a=ca",
      "d+a=da",
      "g+u=gu",
      "j+a=ja",
      "l+i=li",
      "r+a=ra"
    ],
    "ladder": [
      "ca → da → ja",
      "la → ra → sa",
      "gi → ji → li",
      "cu → du → gu"
    ],
    "words": [
      "ca-ri",
      "cu-ci",
      "da-du",
      "gi-gi",
      "gu-la",
      "ja-ri",
      "la-ri",
      "li-ma",
      "ro-da"
    ],
    "contrasts": [
      "cari ↔ jari",
      "dadu ↔ madu",
      "gigi ↔ sisi",
      "lari ↔ mari"
    ],
    "sentences": [
      "Ibu cari buku.",
      "Mila ada dadu.",
      "Jari Mila luka."
    ],
    "story_title": "Dadu Mila",
    "story": [
      "Mila ada dadu.",
      "Dadu Mila biru.",
      "Mila cari dadu itu."
    ],
    "story_parent": "Bacakan “biru” jika r belum lancar, kemudian bimbing sebutan tanpa tekanan.",
    "quiz": [
      "Yang mana mempunyai bunyi /j/ di awal?",
      [
        "jari",
        "lari",
        "cari"
      ],
      "jari"
    ],
    "tip": "Latih anak menukar hanya bunyi awal untuk melihat perkataan baharu, bukan meneka daripada rupa keseluruhan."
  },
  {
    "id": "bb4",
    "title": "Kata Jadi Cerita",
    "icon": "🌤️",
    "color": "#E5A45E",
    "free": false,
    "level": "Vokal o, konsonan h/y/w & frasa",
    "skills": [
      "o",
      "h",
      "y",
      "w"
    ],
    "parent": "Gabungkan kemahiran lama dengan huruf baharu. Ajar intonasi ayat sebagai aktiviti membaca bersama, bukan sebagai ujian kelajuan.",
    "sounds": [
      "o",
      "h",
      "y",
      "w"
    ],
    "blend": [
      "b+o=bo",
      "t+o=to",
      "h+a=ha",
      "y+a=ya",
      "w+a=wa",
      "r+o=ro"
    ],
    "ladder": [
      "bo → ba → bu",
      "ro → ra → ri",
      "ha → hi → hu",
      "wa → wi → wo"
    ],
    "words": [
      "bo-la",
      "to-pi",
      "ro-ti",
      "ko-ta",
      "ha-ri",
      "ba-hu",
      "ka-yu",
      "sa-ya",
      "ba-wa"
    ],
    "contrasts": [
      "bola ↔ bela",
      "topi ↔ tapi",
      "hari ↔ lari",
      "kayu ↔ kaki"
    ],
    "sentences": [
      "Saya bawa bola.",
      "Hani cari topi.",
      "Bola itu di situ."
    ],
    "story_title": "Bola di Halaman",
    "story": [
      "Hani bawa bola.",
      "Hari ini hari Sabtu.",
      "Hani main bola di halaman."
    ],
    "story_parent": "Perkataan “Sabtu”, “main”, dan “halaman” lebih kompleks. Penjaga membacakan perkataan yang belum diajar sambil menunjukkan konteks.",
    "quiz": [
      "Pilih perkataan dengan bunyi /o/.",
      [
        "bola",
        "batu",
        "buku"
      ],
      "bola"
    ],
    "tip": "Fokus pada bunyi baharu dan kefahaman ayat pendek. Tidak perlu menghafal teks."
  },
  {
    "id": "bb5",
    "title": "Hujung Perkataan",
    "icon": "🔑",
    "color": "#CF8B71",
    "free": false,
    "level": "V, VK, KVK & bunyi akhir",
    "skills": [
      "-n",
      "-m",
      "-k",
      "-t",
      "-s"
    ],
    "parent": "Untuk suku kata tertutup, tuntun gabungan dari vokal kepada konsonan akhir tanpa menambah bunyi vokal. Sebutan akhir k baku boleh berbeza daripada sesetengah dialek.",
    "sounds": [
      "n",
      "m",
      "k",
      "t",
      "s"
    ],
    "blend": [
      "i+kan=ikan",
      "ma+kan=makan",
      "ma+lam=malam",
      "ki+pas=kipas",
      "sa+kit=sakit",
      "ba+lik=balik"
    ],
    "ladder": [
      "kan → kam → kas",
      "lam → lan → lak",
      "kit → kip → kin",
      "pan → pas → pak"
    ],
    "words": [
      "i-kan",
      "ma-kan",
      "bu-lan",
      "ja-lan",
      "ta-man",
      "ma-lam",
      "ki-pas",
      "sa-kit",
      "ka-sut",
      "ba-lik"
    ],
    "contrasts": [
      "makan ↔ malam",
      "ikan ↔ ikat",
      "kasut ↔ kusut",
      "sakit ↔ sikat"
    ],
    "sentences": [
      "Mira makan ikan.",
      "Kipas itu laju.",
      "Ibu balik malam."
    ],
    "story_title": "Malam di Rumah",
    "story": [
      "Mira makan ikan.",
      "Ayah memasang kipas.",
      "Mira minum air.",
      "Malam itu nyaman."
    ],
    "story_parent": "Bacakan kata yang belum dipelajari (“memasang”, “nyaman”); minta anak membaca kata sasaran seperti ikan, kipas dan malam.",
    "quiz": [
      "Pilih perkataan yang berakhir dengan bunyi /n/.",
      [
        "ikan",
        "kipas",
        "sakit"
      ],
      "ikan"
    ],
    "tip": "Tandakan bahagian yang sudah boleh dibaca anak secara bebas. Elakkan memuji hanya berdasarkan tekaan melalui gambar."
  },
  {
    "id": "bb6",
    "title": "Dua Huruf Satu Bunyi",
    "icon": "🪄",
    "color": "#8C79C4",
    "free": false,
    "level": "Digraf ng, ny, sy, kh",
    "skills": [
      "ng",
      "ny",
      "sy",
      "kh"
    ],
    "parent": "Terangkan bahawa dua huruf tertentu boleh mewakili satu unit bunyi. Rakaman digraf sintetik mesti disemak oleh pakar; boleh peragakan secara langsung.",
    "sounds": [
      "ng",
      "ny",
      "sy",
      "kh"
    ],
    "blend": [
      "bu+nga=bunga",
      "si+nga=singa",
      "nya+nyi=nyanyi",
      "ku+cing=kucing",
      "kha+bar=khabar",
      "syu+kur=syukur"
    ],
    "ladder": [
      "nga → ngi → ngu",
      "nya → nyi → nyu",
      "sya → syu → syi",
      "kha → khi → khu"
    ],
    "words": [
      "bu-nga",
      "si-nga",
      "ta-ngan",
      "ku-cing",
      "nya-muk",
      "nya-nyi",
      "ba-nyak",
      "kha-bar",
      "syu-kur"
    ],
    "contrasts": [
      "bunga ↔ buaya",
      "nyanyi ↔ nanti",
      "singa ↔ sisa",
      "khabar ↔ sabar"
    ],
    "sentences": [
      "Ada bunga di taman.",
      "Kucing itu tidur.",
      "Nyamuk hinggap di tangan."
    ],
    "story_title": "Bunga Kecil",
    "story": [
      "Di taman ada bunga.",
      "Nina menyiram bunga.",
      "Seekor kucing duduk di tepi pasu."
    ],
    "story_parent": "Ayat terakhir dibaca bersama kerana mengandungi perkataan lanjutan; fokus anak pada bunyi ng dan ny.",
    "quiz": [
      "Yang mana mempunyai digraf “ny”?",
      [
        "nyanyi",
        "bunga",
        "kucing"
      ],
      "nyanyi"
    ],
    "tip": "Jangan pisahkan n dan g dalam ng apabila ia melambangkan satu bunyi. Uji dengan beberapa perkataan berbeza."
  },
  {
    "id": "bb7",
    "title": "Vokal Berwarna",
    "icon": "🎨",
    "color": "#DBB351",
    "free": false,
    "level": "e pepet, e taling & pasangan vokal",
    "skills": [
      "e pepet",
      "e taling",
      "ai",
      "au",
      "oi"
    ],
    "parent": "Bunyi e pepet dalam emak berbeza daripada e taling dalam ekor. Audio prototaip tidak boleh digunakan sebagai autoriti; rujuk penutur Melayu yang terlatih.",
    "sounds": [
      "e",
      "ai",
      "au",
      "oi"
    ],
    "blend": [
      "e+mak=emak",
      "e+kor=ekor",
      "ke+dai=kedai",
      "pu+lau=pulau",
      "pan+tai=pantai",
      "am+boi=amboi"
    ],
    "ladder": [
      "tepi → topi",
      "emak → ekor",
      "kedai → pandai",
      "pulau → pisau"
    ],
    "words": [
      "e-mak",
      "e-kor",
      "me-ja",
      "te-lur",
      "te-pi",
      "ke-dai",
      "pan-tai",
      "pu-lau",
      "pi-sau",
      "am-boi"
    ],
    "contrasts": [
      "emak (e pepet) ↔ ekor (e taling)",
      "telur (e pepet) ↔ meja (e taling)",
      "pantai (ai) ↔ pulau (au)",
      "main (vokal bersebelahan) ↔ kedai (diftong)"
    ],
    "sentences": [
      "Emak di kedai.",
      "Kami ke pantai.",
      "Ada meja di situ."
    ],
    "story_title": "Pagi di Pantai",
    "story": [
      "Pagi itu Mila ke pantai.",
      "Mila nampak pulau yang jauh.",
      "Mila duduk bersama emak di tepi laut."
    ],
    "story_parent": "Baca bersama perkataan seperti “nampak”, “yang” dan “jauh”; terangkan bahawa “laut” tidak sama pembahagiannya dengan diftong “au” dalam “pulau”.",
    "quiz": [
      "Yang mana mengandungi diftong “ai”?",
      [
        "pantai",
        "pintu",
        "bulan"
      ],
      "pantai"
    ],
    "tip": "Dua huruf vokal tidak semestinya membentuk satu diftong. Bandingkan contoh dalam ayat sebenar."
  },
  {
    "id": "bb8",
    "title": "Pembaca Berdikari",
    "icon": "📖",
    "color": "#56A3A0",
    "free": false,
    "level": "Imbuhan, ayat, cerita & kefahaman",
    "skills": [
      "ber-",
      "meN-",
      "di-",
      "-kan",
      "kata ganda"
    ],
    "parent": "Ajar anak mengesan kata dasar dan imbuhan. Minta dia menceritakan semula cerita dengan bahasanya sendiri; kelancaran tidak boleh diukur melalui kiraan halaman semata-mata.",
    "sounds": [
      "ber",
      "mem",
      "di",
      "kan"
    ],
    "blend": [
      "ber+main=bermain",
      "mem+baca=membaca",
      "di+buka=dibuka",
      "baca+kan=bacakan",
      "ber+jalan=berjalan"
    ],
    "ladder": [
      "baca → membaca → bacaan",
      "main → bermain → permainan",
      "tulis → menulis → tulisan"
    ],
    "words": [
      "ber-ma-in",
      "mem-ba-ca",
      "di-bu-ka",
      "ba-ca-kan",
      "ber-ja-lan",
      "pe-la-ja-ran",
      "bu-ku-bu-ku"
    ],
    "contrasts": [
      "baca ↔ membaca",
      "jalan ↔ berjalan",
      "buku ↔ buku-buku",
      "buka ↔ dibuka"
    ],
    "sentences": [
      "Aina membaca buku di rumah.",
      "Ayah berjalan ke taman.",
      "Dua buku itu disusun di rak."
    ],
    "story_title": "Rak Buku Aina",
    "story": [
      "Aina suka membaca setiap petang.",
      "Pada hari Ahad, dia menyusun buku-buku di atas rak.",
      "Adiknya memilih buku tentang haiwan.",
      "Mereka membaca bersama, kemudian bercerita tentang gambar yang dilihat."
    ],
    "story_parent": "Tanya anak: Siapa menyusun buku? Bila mereka membaca? Apakah maksud “menyusun”? Jawapan boleh diberikan secara lisan.",
    "quiz": [
      "Mengapakah Aina menyusun buku-buku?",
      [
        "Supaya rak lebih kemas",
        "Untuk bermain bola",
        "Supaya hujan turun"
      ],
      "Supaya rak lebih kemas"
    ],
    "tip": "Selepas membaca, uji perkataan yang belum pernah dilihat dan soalan kefahaman tanpa meminta anak menghafal cerita."
  }
];

const item=(kind,title,description,payload,tip)=>({kind,title,description,...payload,tip});
const toSegments=x=>x.trim().split('-').filter(Boolean);
const parseWord=x=>({label:x.replaceAll('-',''),parts:toSegments(x)});
const parseBlend=x=>{const [source,outcome]=x.split('=');return {parts:source.split('+'),outcome};};
const pageKinds=['listen','blend','ladder','words','contrast','sentence','story','check'];
const createPages=(book)=>[
 item('listen','Dengar dahulu','Kenali bunyi baharu. Sebut dengan jelas dan tanpa nama huruf.',{sounds:book.sounds},book.parent),
 item('blend','Bunyi bertemu','Sentuhkan dua bahagian bunyi dan baca hasil gabungannya.',{blends:book.blend.map(parseBlend)},'Sebut bunyi secara bersambung. Jangan tambah vokal pada konsonan.'),
 item('ladder','Tangga bunyi','Ikuti perubahan satu bunyi dalam setiap baris.',{ladders:book.ladder},'Tutup pilihan lain dan baca satu baris pada satu masa.'),
 item('words','Perkataan baharu','Cuba baca dahulu. Sentuh butang audio selepas mencuba.',{words:book.words.map(parseWord)},'Perkataan dipilih khusus untuk latihan ini; sebutan mesti disahkan oleh guru atau penjaga.'),
 item('contrast','Cari perbezaan','Bandingkan bentuk dan bunyi. Apakah yang berubah?',{pairs:book.contrasts},'Bincang perbezaan tanpa meminta anak menghafal bentuk seluruh perkataan.'),
 item('sentence','Ayat pendek','Baca ayat dengan suara sendiri dan terangkan maksudnya.',{lines:book.sentences},'Kata belum diperkenalkan boleh dibantu oleh orang dewasa; jangan nilai sebagai kegagalan.'),
 item('story',book.story_title,'Bacaan bersama: anak membaca bahagian yang sudah dipelajari.',{lines:book.story},book.story_parent),
 item('check','Semak bersama','Jawab soalan ini, kemudian cuba membaca perkataan baharu bersama penjaga.',{quiz:{question:book.quiz[0],choices:book.quiz[1],answer:book.quiz[2]}},book.tip)
];
export const BOOKS = EDITORIAL.map((b,index)=>({
 id:b.id,index:index+1,title:b.title,icon:b.icon,color:b.color,free:b.free,
 level:b.level,skills:b.skills,parent:b.parent,pages:createPages(b).map((page,i)=>({...page,id:`${b.id}p${i+1}`,number:i+1}))
}));
export const BOOK_PAGES=BOOKS.flatMap(b=>b.pages);
export const getBook=id=>BOOKS.find(b=>b.id===id);
export const getBookPage=(bookId,page)=>getBook(bookId)?.pages[page-1];
export const SERIES_PAGE_COUNT=BOOK_PAGES.length;
export const FREE_SERIES_PAGE_COUNT=BOOKS.filter(b=>b.free).reduce((n,b)=>n+b.pages.length,0);
export const SERIES_KINDS=pageKinds;