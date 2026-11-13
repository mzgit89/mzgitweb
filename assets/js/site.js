const words={
  en:{
    navAbout:'About',navWork:'Research',navExperience:'Experience',navPublications:'Publications',
    contact:'Get in touch ↗',available:'ACADEMIC · IT PROJECT LEAD · RESEARCHER',
    headline:'Building trust<br>into the <em>digital world.</em>',
    intro:'I’m Mirza Sutrisno — an informatics lecturer and researcher exploring how blockchain, cryptography, and digital forensics can make evidence more trustworthy.',
    explore:'Explore my work',more:'More about me ↓',years:'Years across technology & education',
    focus:'Core research projects',faculty:'Faculty of Engineering',about:'ABOUT',aboutTitle:'Technology is only as strong as the trust behind it.',
    aboutText:'I work at the intersection of higher education, public-sector technology, and applied research. As a lecturer at Universitas Muhammadiyah Jakarta and an IT project lead, I turn complex technical challenges into practical, accountable systems.',
    aboutText2:'My current work investigates blockchain-backed evidence provenance, secure network acquisition, and reliable chain-of-custody practices.',
    research:'SELECTED RESEARCH',researchTitle:'Making digital evidence<br>verifiable by design.',researchLead:'Applied research at the crossroads of cryptography, distributed systems, and forensic practice.',
    proj1:'Blockchain-Based Preservation of Network Forensic Evidence',proj1d:'A framework combining SHA-256, blockchain provenance, distributed verification, and off-chain storage to strengthen the integrity and traceability of PCAP evidence.',
    proj2:'WhatsApp Evidence Archiving Verification',proj2d:'A prototype for integrity verification and custody management of evidence archives using smart contracts, manifests, and cryptographic hashes.',
    proj3:'Live Network Acquisition & Pre-Serialization Hashing',proj3d:'Exploring in-memory hashing before PCAP serialization to minimize evidence exposure and strengthen acquisition integrity.',
    journey:'PROFESSIONAL JOURNEY',journeyTitle:'Curiosity, put to work.',education:'EDUCATION',pub:'SELECTED PUBLICATIONS',pubTitle:'Ideas, shared and peer-reviewed.',connect:'LET’S CONNECT',closing:'Have a research idea<br>or a challenge to solve?',top:'Back to top',navTeaching:'Teaching',navSupervision:'Supervision',
    navHome:'Home',
    teaching:'Teaching',supervision:'Supervision',
    aboutLabel:'About' 
  },
  id:{
    navAbout:'Tentang',navWork:'Riset',navExperience:'Pengalaman',navPublications:'Publikasi',
    contact:'Hubungi saya ↗',available:'AKADEMIK · PEMIMPIN PROYEK TI · PENELITI',
    headline:'Membangun kepercayaan<br>di <em>dunia digital.</em>',
    intro:'Saya Mirza Sutrisno — dosen informatika dan peneliti yang mengeksplorasi bagaimana blockchain, kriptografi, dan forensik digital dapat meningkatkan kepercayaan terhadap bukti digital.',
    explore:'Lihat karya saya',more:'Kenali saya ↓',years:'Tahun di bidang teknologi & pendidikan',
    focus:'Proyek riset utama',faculty:'Fakultas Teknik',about:'TENTANG',aboutTitle:'Teknologi hanya sekuat kepercayaan di baliknya.',
    aboutText:'Saya bekerja di persimpangan pendidikan tinggi, teknologi sektor publik, dan riset terapan. Sebagai dosen di Universitas Muhammadiyah Jakarta dan pemimpin proyek TI, saya mengubah tantangan teknis yang kompleks menjadi sistem yang praktis dan akuntabel.',
    aboutText2:'Karya saya saat ini menyelidiki blockchain-backed evidence provenance, secure network acquisition, dan reliable chain-of-custody practices.',
    research:'RISET TERPILIH',researchTitle:'Merancang bukti digital<br>agar dapat diverifikasi.',researchLead:'Riset terapan di persimpangan kriptografi, sistem terdistribusi, dan praktik forensik.',
    proj1:'Preservasi Bukti Forensik Jaringan Berbasis Blockchain',proj1d:'Kerangka kerja yang menggabungkan SHA-256, blockchain provenance, distributed verification, dan off-chain storage untuk memperkuat integritas dan traceability of PCAP evidence.',
    proj2:'Verifikasi Arsip Bukti WhatsApp',proj2d:'Prototipe untuk integrity verification and custody management of evidence archives menggunakan smart contracts, manifests, dan cryptographic hashes.',
    proj3:'Akuisisi Jaringan Langsung & Hash Sebelum Serialisasi',proj3d:'Eksplorasi hashing dalam memori sebelum serialisasi PCAP untuk meminimalkan paparan bukti dan memperkuat integritas akuisisi.',
    journey:'PENJALANAN PROFESIONAL',journeyTitle:'Rasa ingin tahu, dipakai untuk bekerja.',education:'PENDIDIKAN',pub:'PUBLIKASI PILIHAN',pubTitle:'Gagasan, dibagikan dan ditelaah.',connect:'MARI TERHUBUNG',closing:'Punya gagasan riset<br>atau tantangan untuk dipecahkan?',top:'Kembali ke atas',navTeaching:'Pengajaran',navSupervision:'Pembimbingan',navHome:'Beranda',teaching:'Pengajaran',supervision:'Pembimbingan'
  },
  ar:{
    navAbout:'حول',navWork:'الأبحاث',navExperience:'الخبرة',navPublications:'المنشورات',
    contact:'تواصل معي ↗',available:'أكاديمي · قائد مشاريع تقني · باحث',
    headline:'نبني الثقة<br>في <em>العالم الرقمي.</em>',
    intro:'أنا ميرزا سوتريسنو — أستاذ تكنولوجيا المعلومات وباحث أستكشف كيف يمكن أن تعزز blockchain والتشفير والتحقيقات الرقمية ثقة الأدلة الرقمية.',
    explore:'اكتشف أعمالي',more:'المزيد عني ↓',years:'سنوات في التكنولوجيا والتعليم',
    focus:'مشروعات البحث الأساسية',faculty:'كلية الهندسة',about:'حول',aboutTitle:'التكنولوجيا لا تكون أقوى إلا من الثقة التي تقف خلفها.',
    aboutText:'أعمل عند تقاطع التعليم العالي، تقنيات القطاع العام، والبحث التطبيقي. بصفتي أستاذًا في جامعة محمدية جاكرتا وقائد مشروع تقني، أحوّل التحديات التقنية المعقدة إلى أنظمة عملية ومحاسبة.',
    aboutText2:'يتركز عملي الحالي على سلاسل الكتل الموثقة للأدلة، والاستحواذ الآمن للشبكات، وسلامة سلسلة custody.',
    research:'أبحاث مختارة',researchTitle:'جعل الأدلة الرقمية<br>قابلة للتحقق من التصميم.',researchLead:'بحث تطبيقي عند تقاطع التشفير، الأنظمة الموزعة، وممارسة الطب الشرعي.',
    proj1:'حفظ أدلة الطب الشرعي للشبكات على blockchain',proj1d:'إطار يدمج SHA-256، إثبات blockchain، التحقق الموزع، والتخزين خارج السلسلة لتعزيز سلامة وتتبّع أدلة PCAP.',
    proj2:'تحقق أرشيف أدلة واتساب',proj2d:'نموذج أولي للتحقق من سلامة وأرشفة الأدلة باستخدام العقود الذكية والمواصفات والتوقيعات الرقمية.',
    proj3:'استحواذ الشبكات المباشر وتشفير الهاش قبل التسلسل',proj3d:'استكشاف هاش الذاكرة قبل تسلسل PCAP لتقليل تعرض الأدلة وتعزيز سلامة الاستحواذ.',
    journey:'رحلة مهنية',journeyTitle:'الفضول، مستعمل في العمل.',education:'التعليم',pub:'منشورات مختارة',pubTitle:'أفكار، مُشاركة ومراجعة.',connect:'تواصل معنا',closing:'هل لديك فكرة بحثية<br>أو تحدي لحله؟',top:'للأعلى',navTeaching:'التدريس',navSupervision:'الإشراف',navHome:'الرئيسية',teaching:'التدريس',supervision:'الإشراف'
  }
};

const safeText = (value) => {
  if (typeof value !== 'string') return '';
  return value;
};

function setLanguage(lang) {
  const chosen = words[lang] || words.en;
  const root = document.documentElement;
  root.lang = lang || 'en';
  root.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i]').forEach((el) => {
    const key = el.dataset.i;
    if (chosen[key] !== undefined) {
      el.innerHTML = safeText(chosen[key]);
    }
  });

  const select = document.querySelector('#language');
  if (select) select.value = lang || 'en';
  localStorage.setItem('portfolio-language', lang || 'en');
}

document.addEventListener('DOMContentLoaded', () => {
  const select = document.querySelector('#language');
  const stored = localStorage.getItem('portfolio-language') || 'en';
  setLanguage(stored);

  if (select) {
    select.addEventListener('change', (event) => setLanguage(event.target.value));
  }

  const menuButton = document.querySelector('.menu');
  const nav = document.querySelector('.top nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => nav.classList.toggle('open'));
  }

  const backToTop = document.querySelector('#back-to-top');
  if (backToTop) {
    const update = () => backToTop.classList.toggle('visible', window.scrollY > 320);
    update();
    window.addEventListener('scroll', update, { passive: true });
  }
});

window.addEventListener('load', () => {
  const saved = localStorage.getItem('portfolio-language') || 'en';
  setLanguage(saved);
});
