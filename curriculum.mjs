/* BunyiBaca original curriculum v1.0 — educator/language review required before efficacy claims.
 * Each world has eight instructional lessons and an automatically generated review challenge.
 * Syllable separators in source content are instructional prompts, not a universal linguistic analyser.
 */
const words = (source) => source.split(';').filter(Boolean).map(entry => {
  const [seg, emoji='🔤'] = entry.trim().split('|');
  const parts = seg.trim().split('-').map(v => v === '~' ? '-' : v);
  return { word: parts.join(''), parts, emoji };
});
const basic = (rows, mode='word') => rows.map((r, index) => {
  const [title, focus, data, tip] = r;
  return { title, focus, mode, words: words(data), tip: tip || '' };
});
const oral = (rows) => rows.map(([title, focus, matched, distractor, tip]) => ({title, focus, mode:'oral',
  words: words(matched), distractors: words(distractor), tip}));
const letters = (rows) => rows.map(([title, focus, data, tip]) => ({title, focus, mode:'letter', words:words(data), tip}));
const stories = (rows, mode='story') => rows.map(([title, text, question, options, answer, tip]) => ({
 title, mode, focus: 'bacaan', text, question, options, answer, words: words('bu-ku|📘;ma-ta|👀;i-bu|👩'), tip:tip||''
}));
const W = [
  {icon:'👂', name:'Telinga Hebat',subtitle:'Dengar dan bezakan bunyi',color:'#8A69DA',free:true, lessons:oral([
    ['Bunyi /m/','m','ma-ma|👩;ma-ta|👀;mu-ka|🙂','su-su|🥛;bu-ku|📘','Dengar bunyi pertama tanpa mengeja nama huruf.'],
    ['Bunyi /s/','s','su-su|🥛;sa-pi|🐄;sa-ya|🙋','ma-ta|👀;bu-ku|📘','Ajak anak menyebut bunyi /s/ secara berterusan.'],
    ['Bunyi /b/','b','ba-ju|👕;bu-ku|📘;bo-la|⚽','sa-pi|🐄;ma-ta|👀','Gunakan perkataan yang sudah diketahui anak.'],
    ['Bunyi /p/','p','pa-su|🪴;pi-pi|😊;pa-pa|👨','bu-ku|📘;su-su|🥛','Bezakan /p/ daripada /b/ melalui pendengaran.'],
    ['Bunyi /t/','t','ta-li|🧵;to-pi|🧢;ta-mu|👋','ba-ju|👕;su-su|🥛','Bunyi konsonan pendek tanpa menambah vokal.'],
    ['Bunyi /k/','k','ka-ki|🦶;ku-ku|💅;ku-da|🐎','ma-ta|👀;bo-la|⚽','Cuba sebut perkataan perlahan dan dengar permulaannya.'],
    ['Bunyi /n/','n','na-si|🍚;na-ma|🏷️;ne-nek|👵','pa-su|🪴;ka-ki|🦶','Kenal pasti bunyi awal dalam perkataan.'],
    ['Ulang Kaji Telinga','m','ma-ta|👀;ma-ma|👩;mu-ka|🙂','pa-su|🪴;sa-pi|🐄;ba-ju|👕','Semak kepekaan bunyi. Kemahiran lisan boleh berkembang sebelum bacaan.']
  ])},
  {icon:'🔠',name:'Bunyi Huruf',subtitle:'Hubungkan simbol dengan bunyi',color:'#E58A39',free:true,lessons:letters([
    ['Vokal a','a','a-yam|🐓;a-pi|🔥;a-dik|🧒','Bunyi /a/, bukan nama huruf semata-mata.'],
    ['Bunyi m','m','ma-ta|👀;ma-ma|👩;mu-ka|🙂','Bandingkan bunyi /m/ dengan huruf m.'],
    ['Vokal i','i','i-bu|👩;i-kan|🐟;i-ni|👉','Perkenalkan vokal /i/ yang konsisten.'],
    ['Bunyi s','s','su-su|🥛;sa-pi|🐄;sa-ya|🙋','Bunyikan /s/ tanpa menambah /ə/.'],
    ['Vokal u','u','u-bi|🍠;u-lar|🐍;u-bat|💊','Bezakan /u/ dengan /i/.'],
    ['Bunyi b dan t','b','ba-ju|👕;bu-ku|📘;bo-la|⚽','Kenalkan juga t sebagai kontras; latihan sasarkan b.'],
    ['Vokal o dan bunyi p','o','o-ren|🍊;o-tak|🧠;o-bor|🔦','Vokal o dan bunyi p diperkukuh dalam ulang kaji.'],
    ['Bunyi n dan k','n','na-si|🍚;na-ma|🏷️;ne-nek|👵','Kenalkan k untuk latihan gabung bunyi seterusnya.']
  ])},
  {icon:'🧩',name:'Gabung Bunyi',subtitle:'Daripada fonem kepada suku kata',color:'#26A99C',free:true,lessons:basic([
    ['m + a = ma','ma','ma|👩;mi|🎵;mu|🐮','Dengar /m/ diikuti /a/, kemudian sebut ma dengan lancar.'],
    ['s + a = sa','sa','sa|🐄;si|🪑;su|🥛','Jangan sebut nama huruf semasa menggabung.'],
    ['b + a = ba','ba','ba|👕;bi|🧒;bu|📘','Ulang bunyi perlahan kemudian sebut suku kata biasa.'],
    ['t + a = ta','ta','ta|🧵;ti|💧;tu|➡️','Jadikan gabungan lebih pantas secara beransur.'],
    ['p + a = pa','pa','pa|🪴;pi|😊;pu|🌿','Tunjukkan huruf sambil sebut bunyinya.'],
    ['k + a = ka','ka','ka|🦶;ki|⬅️;ku|🐎','Ulang campuran bunyi lama dan baru.'],
    ['n + a = na','na','na|🍚;ni|👉;nu|🌤️','Sebutan ini latihan suku kata, bukan semua perkataan.'],
    ['Campuran KV','ma','ma|👩;sa|🐄;ba|👕;ta|🧵;pa|🪴;ka|🦶','Tunjukkan gabungan tanpa bantuan gambar dahulu.']
  ],'blend')},
  {icon:'🚂',name:'Suku Kata KV',subtitle:'Bina perkataan dua suku kata',color:'#398AD9',free:true,lessons:basic([
    ['ma + ta','mata','ma-ta|👀;ma-ma|👩;ma-sa|⏰','Bunyikan setiap suku kata kemudian gabungkan.'],
    ['su + su','susu','su-su|🥛;su-ka|💚;su-ku|👥','Guna perkataan mudah dan bermakna.'],
    ['bu + ku','buku','bu-ku|📘;bu-ka|📂;bu-di|💚','Sembunyikan gambar sehingga anak mencuba membaca.'],
    ['ba + ju','baju','ba-ju|👕;ba-tu|🪨;ba-yi|👶','Mulakan dengan gabungan bunyi, bukan meneka gambar.'],
    ['pa + su','pasu','pa-su|🪴;pa-pa|👨;pa-gi|🌅','Campurkan perkataan baru dan lama.'],
    ['sa + pi','sapi','sa-pi|🐄;sa-ya|🙋;sa-ku|👜','Kenalkan persamaan permulaan dan perbezaan hujung.'],
    ['ka + ki','kaki','ka-ki|🦶;ku-ku|💅;ku-da|🐎','Baca beberapa perkataan tanpa bantuan gambar.'],
    ['Cabaran KV','baca','ba-ca|📖;bo-la|⚽;to-pi|🧢;na-si|🍚','Gabungkan semua perkataan KV yang sudah dipelajari.']
  ])},
  {icon:'🌳',name:'Perkataan Lebih Panjang',subtitle:'Tiga suku kata dan pelbagai konsonan',color:'#50A16C',free:false,lessons:basic([
    ['Tiga suku kata 1','kelapa','ke-la-pa|🥥;ke-pa-la|🙂;ke-re-ta|🚗','Vokal e dalam perkataan ini lazimnya e pepet; perlu audio tepat.'],
    ['Tiga suku kata 2','kamera','ka-me-ra|📷;se-pa-tu|👟;se-mu-la|🔄','Arahkan anak membaca dahulu sebelum mendengar.'],
    ['Tiga suku kata 3','bahaya','ba-ha-ya|⚠️;ca-ha-ya|☀️;ra-hang|😁','Perkataan dengan h dan y; ra-hang boleh dijadikan bahan kontras.'],
    ['Pelbagai suku kata','menari','me-na-ri|💃;be-ri-ta|📰;pe-li-ta|🪔','Latih gabungan melalui tiga bahagian.'],
    ['Bunyi c dan j','cari','ca-ri|🔎;cu-ci|🧼;ja-ri|☝️','Huruf c dalam BM berbunyi /tʃ/, j berbunyi /dʒ/.'],
    ['Bunyi g dan d','gigi','gi-gi|🦷;da-du|🎲;gu-la|🍬','Bunyi g ialah /g/, bukan sebutan English soft-g.'],
    ['Bunyi l dan r','lari','la-ri|🏃;li-ma|5️⃣;ro-da|⚙️','Gunakan bunyi /l/ dan /r/ yang tepat.'],
    ['Cabaran pelbagai','keladi','ke-la-di|🌱;ke-na-ri|🐤;se-pa-tu|👟','Suku kata baru dengan bunyi yang sudah dikenali.']
  ])},
  {icon:'🔑',name:'Suku Kata Tertutup',subtitle:'V, VK, KVK dan gabungan',color:'#9E69C3',free:false,lessons:basic([
    ['Perkataan ikan','ikan','i-kan|🐟;a-nak|🧒;u-bat|💊','Perhatikan vokal awal diikuti suku kata tertutup.'],
    ['Akhiran n','makan','ma-kan|🍽️;ja-lan|🚶;bu-lan|🌙','Dengar bunyi konsonan akhir.'],
    ['Akhiran m','malam','ma-lam|🌃;da-lam|📦;ta-man|🏞️','Latih penutupan mulut untuk /m/.'],
    ['Akhiran k','masak','ma-sak|🍳;se-jak|⏳;ba-lik|↩️','Jelaskan sebutan akhir k bergantung pada dialek dan sebutan baku.'],
    ['Akhiran t','sakit','sa-kit|🤒;mu-lut|👄;ra-pat|🤝','Jangan tambah vokal selepas konsonan terakhir.'],
    ['Akhiran s','kipas','ki-pas|🌀;pa-nas|☀️;cu-kup|✅','Bunyikan setiap akhir perkataan dengan jelas.'],
    ['Gabungan VK','ayam','a-yam|🐓;e-nam|6️⃣;e-sok|📆','Perkenalkan variasi pola suku kata.'],
    ['Campur KVK','bintang','bin-tang|⭐;kan-tin|🍱;sam-pan|🚣','Campurkan kata terbuka dan tertutup.']
  ])},
  {icon:'🎶',name:'Bunyi Berganding',subtitle:'ng, ny, sy, kh dan gh',color:'#D77989',free:false,lessons:basic([
    ['Kenal ng','bunga','bu-nga|🌼;ta-ngan|✋;si-nga|🦁','Dua huruf ng mewakili satu bunyi.'],
    ['ng di akhir','kucing','ku-cing|🐈;ku-ning|🟡;pa-njang|📏','Jangan pisahkan n dan g apabila kedua-duanya satu digraf.'],
    ['Kenal ny','nyamuk','nya-muk|🦟;nya-nyi|🎤;nya-la|🔥','Dua huruf ny mewakili satu bunyi.'],
    ['ny dalam perkataan','banyak','ba-nyak|🧮;mi-nyak|🛢️;se-nyum|😊','Latih ny pada kedudukan berlainan.'],
    ['Kenal sy','syukur','syu-kur|🙏;sya-rat|📋;sya-wal|🌙','Kata pinjaman. Semak audio dengan penutur BM.'],
    ['Kenal kh','khabar','kha-bar|📰;a-khir|🔚;khu-sus|🎯','Kh ialah satu unit bunyi untuk pengajaran.'],
    ['Kenal gh','ghaib','gha-ib|✨;magh-rib|🌆;gha-zal|🎼','Digraf gh lebih jarang. Bimbingan dan pengesahan audio perlu.'],
    ['Campuran digraf','nyanyi','nya-nyi|🎵;bu-nga|🌻;ku-cing|🐈;kha-bar|📰','Bandingkan bunyi istimewa dalam perkataan.']
  ])},
  {icon:'🌈',name:'Vokal & Diftong',subtitle:'Dua e, ai, au, oi dan gabungan vokal',color:'#DCA64B',free:false,lessons:basic([
    ['e pepet','emak','e-mak|👩;be-li|🛍️;ke-la-pa|🥥','E pepet /ə/; perhatikan variasi bunyi e.'],
    ['e taling','ekor','e-kor|🐒;me-ja|🪑;esok|📅','E taling /e/. Audio perlu membezakan kedua-duanya.'],
    ['Bandingkan dua e','ekor','e-mak|👩;e-kor|🐒;te-lur|🥚','Bandingkan e pepet dalam emak/telur dengan e taling dalam ekor.'],
    ['Diftong ai','pantai','pan-tai|🏖️;tu-pai|🐿️;ke-dai|🏪','Diftong ai diucap sebagai satu luncuran vokal.'],
    ['Diftong au','pulau','pu-lau|🏝️;pi-sau|🔪;ker-bau|🐃','Latih bunyi au tanpa memisahkan suku kata secara salah.'],
    ['Diftong oi','amboi','am-boi|😮;do-doi|🎵;se-poi|🍃','Oi jarang berbanding ai dan au.'],
    ['Vokal bersebelahan','laut','la-ut|🌊;ma-in|🪁;do-a|🙏','Bukan semua dua vokal bersebelahan ialah diftong.'],
    ['Cabaran vokal','pandai','pan-dai|🧠;ke-re-ta|🚗;pu-lau|🏝️','Semak dengan rakaman sebutan yang tepat.']
  ])},
  {icon:'🚀',name:'Perkataan Lanjutan',subtitle:'Imbuhan dan gabungan konsonan',color:'#3D8CBA',free:false,lessons:basic([
    ['Imbuhan ber-','bermain','ber-ma-in|🪁;ber-ja-lan|🚶;ber-ta-nya|❓','Tunjukkan unit imbuhan dan kata dasar.'],
    ['Imbuhan meN-','membaca','mem-ba-ca|📖;me-nu-lis|✍️;me-nga-ji|📘','Jelaskan perubahan bentuk imbuhan secara bertahap.'],
    ['Imbuhan di-','dibaca','di-ba-ca|📖;di-bu-ka|📂;di-tu-lis|✍️','Imbuhan di- kata kerja rapat dengan kata dasar.'],
    ['Imbuhan -kan','bacakan','ba-ca-kan|📖;bu-ka-kan|🔓;ma-in-kan|🎲','Kenal pasti imbuhan di hujung perkataan.'],
    ['Kata ganda','buku-buku','bu-ku-~-bu-ku|📚;a-nak-~-a-nak|🧒;bo-la-~-bo-la|⚽','Kata ganda ditulis dengan tanda sempang dalam ejaan.'],
    ['Gugus konsonan','drama','dra-ma|🎭;pra-mu-ka|🏕️;pro-gram|📋','Gugus muncul dalam banyak kata pinjaman.'],
    ['Kata lebih panjang','permainan','per-ma-i-nan|🎮;pe-la-ja-ran|🏫;ke-se-la-ma-tan|🦺','Gunakan gabungan suku kata dan morfem.'],
    ['Cabaran lanjutan','pembacaan','pem-ba-ca-an|📖;per-ja-la-nan|🛤️;pe-nu-li-san|📝','Uji keupayaan membaca kata baru dengan strategi yang dipelajari.']
  ])},
  {icon:'✏️',name:'Ayat Mudah',subtitle:'Baca ayat dan fahami maksud',color:'#31A88E',free:false,lessons:stories([
    ['Ibu dan buku','Ibu baca buku.','Siapa baca buku?',['Ibu','Kucing','Sapi'],'Ibu','Baca dahulu, kemudian dengar semula.'],
    ['Adik minum','Adik minum susu.','Apa yang adik minum?',['Susu','Air laut','Pasir'],'Susu'],
    ['Kucing tidur','Kucing itu tidur di atas tikar.','Siapa yang tidur?',['Kucing','Ibu','Ayam'],'Kucing'],
    ['Baju biru','Baju Ali berwarna biru.','Apakah warna baju Ali?',['Biru','Merah','Hijau'],'Biru'],
    ['Di taman','Aina main bola di taman.','Di manakah Aina main bola?',['Taman','Pasar','Sekolah'],'Taman'],
    ['Buah mangga','Ayah membeli buah mangga.','Apakah buah yang dibeli?',['Mangga','Epal','Pisang'],'Mangga'],
    ['Cuaca panas','Hari ini cuaca panas. Adik minum air.','Bagaimanakah cuaca hari ini?',['Panas','Sejuk','Hujan'],'Panas'],
    ['Ayat baharu','Sara membawa payung ke sekolah.','Apakah yang dibawa Sara?',['Payung','Kasut','Buku'],'Payung']
  ],'sentence')},
  {icon:'📚',name:'Taman Cerita',subtitle:'Cerita ringkas dan kefahaman',color:'#AA73C1',free:false,lessons:stories([
    ['Buku Baru','Mila ada buku baru. Buku itu berwarna biru. Mila membaca buku bersama ibu.','Siapakah yang membaca bersama Mila?',['Ibu','Ayah','Guru'],'Ibu'],
    ['Kucing Mimi','Mimi ada kucing. Nama kucing itu Momo. Momo suka tidur di atas tikar. Mimi memberi Momo air.','Di manakah Momo suka tidur?',['Atas tikar','Dalam kolam','Atas pokok'],'Atas tikar'],
    ['Pagi di Taman','Pada waktu pagi, Amir pergi ke taman. Amir melihat rama-rama. Dia juga melihat bunga merah. Amir berasa gembira.','Apakah warna bunga yang dilihat Amir?',['Merah','Ungu','Biru'],'Merah'],
    ['Hadiah untuk Ibu','Hari ini hari lahir ibu. Adik membuat kad kecil. Dia melukis bunga pada kad itu. Ibu tersenyum apabila menerima kad.','Apakah yang dilukis pada kad?',['Bunga','Rumah','Kereta'],'Bunga'],
    ['Payung Sara','Langit menjadi gelap. Sara membawa payung. Hujan mula turun ketika Sara berjalan pulang. Sara tidak basah kerana menggunakan payung.','Mengapakah Sara tidak basah?',['Ada payung','Ada topi','Tidak hujan'],'Ada payung'],
    ['Di Kedai Buku','Adam pergi ke kedai buku dengan ayah. Dia memilih sebuah buku tentang haiwan. Adam mahu membaca buku itu pada waktu malam.','Buku tentang apakah yang dipilih Adam?',['Haiwan','Kapal','Bola'],'Haiwan'],
    ['Si Anak Burung','Seekor anak burung berada di bawah pokok. Sayapnya masih kecil. Ibu burung membawa makanan. Anak burung makan dan berehat.','Siapakah membawa makanan?',['Ibu burung','Kucing','Adam'],'Ibu burung'],
    ['Kebun Kecil','Nina menanam biji benih di dalam pasu. Setiap pagi dia menyiram tanah. Beberapa hari kemudian, pucuk hijau tumbuh. Nina menjaga pokok itu dengan baik.','Apakah yang tumbuh daripada biji benih?',['Pucuk hijau','Batu','Kasut'],'Pucuk hijau']
  ])},
  {icon:'🏆',name:'Pembaca Hebat',subtitle:'Fasih, faham dan guna bacaan',color:'#E38D48',free:false,lessons:stories([
    ['Rutin Pagi','Aiman bangun awal pada hari sekolah. Dia mengemas tempat tidur dan memberus gigi. Selepas mandi, dia bersarapan bersama keluarga. Aiman menyemak beg supaya buku dan botol air tidak tertinggal. Kemudian dia bersedia untuk pergi ke sekolah.','Apakah yang diperiksa oleh Aiman sebelum ke sekolah?',['Beg sekolah','Basikal','Televisyen'],'Beg sekolah'],
    ['Menjaga Haiwan','Lina memelihara seekor kucing bernama Putih. Setiap hari, Lina menyediakan air bersih dan makanan yang sesuai. Dia juga membersihkan tempat tidur Putih. Apabila Putih kelihatan kurang sihat, Lina memberitahu ayah. Ayah membawa Putih ke klinik haiwan.','Mengapakah Putih dibawa ke klinik?',['Kurang sihat','Mahu bermain','Mahu tidur'],'Kurang sihat'],
    ['Jimat Air','Air sangat penting dalam kehidupan harian. Kita menggunakan air untuk minum, mandi dan membersihkan rumah. Iman menutup paip ketika memberus gigi. Dia juga menggunakan air secukupnya semasa mencuci tangan. Tindakan kecil ini membantu mengurangkan pembaziran air.','Apakah tindakan Iman untuk menjimatkan air?',['Menutup paip','Membuka paip','Membiarkan air mengalir'],'Menutup paip'],
    ['Lawatan ke Perpustakaan','Kelas Hana melawat perpustakaan sekolah pada hari Rabu. Guru menerangkan cara mencari buku mengikut kategori. Hana memilih buku tentang planet kerana dia suka belajar tentang angkasa. Selepas membaca, dia meletakkan buku di tempat yang betul. Hana berharap dapat datang lagi pada minggu hadapan.','Mengapakah Hana memilih buku planet?',['Suka angkasa','Suka bola','Suka memasak'],'Suka angkasa'],
    ['Kitar Semula','Pada hujung minggu, keluarga Faris mengasingkan kertas, plastik dan tin. Mereka memastikan bekas yang dikumpulkan bersih. Faris membawa bahan tersebut ke pusat kitar semula bersama kakaknya. Di sana, mereka belajar mengapa sampah perlu dikurangkan. Faris mahu mengamalkan tabiat ini di rumah.','Bahan manakah dikumpulkan untuk dikitar semula?',['Kertas dan tin','Makanan panas','Tanah basah'],'Kertas dan tin'],
    ['Pokok di Halaman','Datuk menanam sebatang pokok mangga di halaman. Pada mulanya, pokok itu sangat kecil. Datuk menyiramnya apabila tanah kering dan memastikan pokok mendapat cahaya matahari. Setelah beberapa tahun, pokok menjadi besar dan berbuah. Cucu-cucu gembira dapat menikmati mangga yang masak.','Apakah yang diperlukan oleh pokok?',['Air dan cahaya','Garam dan gula','Mainan dan buku'],'Air dan cahaya'],
    ['Membantu Jiran','Pada suatu petang, hujan turun dengan lebat. Pak Karim sedang membawa beberapa beg barang ke rumah. Aisyah melihatnya dari beranda lalu meminta izin ibunya untuk membantu. Bersama-sama, mereka membawa beg ke tempat yang teduh. Pak Karim mengucapkan terima kasih atas pertolongan itu.','Apakah yang dibuat oleh Aisyah?',['Membantu membawa beg','Bermain bola','Menyiram pokok'],'Membantu membawa beg'],
    ['Pembaca Berdikari','Rafi suka membaca pelbagai jenis buku. Ada buku yang mudah, dan ada juga perkataan yang belum pernah ditemuinya. Apabila berjumpa perkataan baharu, Rafi melihat huruf, menggabungkan bunyi dan membaca seluruh perkataan. Kemudian dia memikirkan maksud ayat tersebut. Jika masih keliru, dia bertanya kepada guru atau ibu. Dengan latihan, Rafi semakin yakin membaca sendiri.','Apakah yang dilakukan Rafi apabila melihat perkataan baharu?',['Gabung bunyi','Langkau semua','Teka daripada gambar sahaja'],'Gabung bunyi']
  ])}
];
export const WORLDS = W.map((world, wi) => ({...world,id:`w${wi+1}`,index:wi+1,
 lessons:world.lessons.map((lesson,li)=>({...lesson,id:`w${wi+1}l${li+1}`,worldId:`w${wi+1}`,index:li+1,
  estimatedMinutes:8, isFree:world.free}))}));
export const ALL_LESSONS = WORLDS.flatMap(w=>w.lessons);
export const TOTAL_LESSONS = ALL_LESSONS.length;
export const FREE_LESSONS = ALL_LESSONS.filter(l=>l.isFree).length;
export const getLesson = id => ALL_LESSONS.find(l=>l.id===id);
export const getWorld = id => WORLDS.find(w=>w.id===id);
export const soundLabel = s => s === 'e' ? '/e/' : `/${s}/`;
