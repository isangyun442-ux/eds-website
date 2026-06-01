// src/i18n/translations.js
// 사용법: window.__t('hero.title') → 현재 언어 텍스트 반환

const translations = {

  ko: {
    // NAV
    'nav.about':     '회사소개',
    'nav.services':  '사업분야',
    'nav.procurement': '조달청 등록제품',
    'nav.portfolio': '구축사례',
    'nav.history':   '회사연혁',
    'nav.clients':   '파트너',
    'nav.contact':   '문의',

    // HERO
    'hero.tag':      'Smart Space Solution · Since 2007',
    'hero.title':    '스마트한 공간,\n이담에스티가\n만듭니다',
    'hero.sub':      '방송 스튜디오부터 LED 디스플레이까지.\n17년의 경험으로 최적의 공간을 설계합니다.',
    'hero.btn1':     '구축사례 보기 →',
    'hero.btn2':     '무료 상담 신청',

    // ABOUT — 1만 시간
    'about.eyebrow1':  'ABOUT US',
    'about.title1':    '"1만 시간의<br>법칙"',
    'about.body1':     '어떤 분야에서 전문성을 갖기 위해 투자해야 하는 시간을 의미합니다. 1993년 앤더스 에릭슨이 연구한 내용을 바탕으로 베스트셀러 작가 말콤 글래드웰이 <em>《아웃라이어, 성공의 기회를 발견한 사람들, 2009》</em>에서 이 에릭슨의 주장을 간단하게 <strong>"1만 시간을 연습하면 전문가가 된다"</strong>는 이론으로 설명했습니다.',
    'about.body1b':    '아웃라이어에서는 빌 게이츠와 비틀즈를 예로 제시했지만, 비단 그들만이 아니라 각자의 분야에서 명성을 떨치는 사람들은 대부분 이 법칙에 따라 자신의 능력을 증진시키고 한계를 극복하며 스스로 발전시키고 있는 것입니다.',
    'about.stat1':     '하루 훈련량',
    'about.stat2':     '주간 훈련량',
    'about.stat3':     '지속 기간',

    // ABOUT — 전문가 집단
    'about.eyebrow2':  'PROFESSIONAL GROUP',
    'about.title2':    '전문가 집단<br><em class="ab-em">이담에스티</em>',
    'about.body2a':    '이담에스티는 방송기술, 컴퓨터그래픽, 오디오, IT 분야의 <strong>20년 이상의 외길</strong>을 다져온 전문가들로 구성된 회사입니다. 미디어 기술은 컴퓨터와 IT분야의 빠른 성장을 바탕으로 HDTV, 3DTV, AR/VR을 거쳐 Metaverse와 홀로그램으로 빠르게 변화하고 있습니다.',
    'about.body2b':    '우리 회사는 <strong>모두 엔지니어로 구성</strong>되어 있으며 매월 자체 사내 세미나 개최와 기술습득에 필요한 요소들을 지원함으로써 트렌드에 뒤쳐지지 않습니다.',
    'about.body3':     '이러한 준비된 기술 서비스를 바탕으로 중앙정부, 지자체, 공기업을 포함한 <strong>91개 관공서·공공기관</strong>, <strong>115개 교육기관</strong>, 방송국, 종교단체, 병원, 기업 등 <strong>516개</strong> 수많은 국내고객과 해외의 미디어 시스템 고객은 상호 소개와 재구매를 통하여 이담에스티의 서비스를 검증받았습니다.',
    'about.msg':       '이담에스티는 다양한 미디어 시스템 구축 노하우와 끊임없는 사내 연구와 대외 기술 습득 활동을 통해 트렌디한 구축 서비스를 제공하겠습니다.',
    'about.sign':      '임직원 일동',

    // SERVICES
    'svc.eyebrow':     'BUSINESS FIELD',
    'svc.title':       '사업 분야',
    'svc.subtitle':    '19년의 현장 경험으로 완성된 솔루션 — 설계부터 구축, 유지보수까지 책임집니다',

    // CERTIFICATION
    'cert.eyebrow':    'CERTIFICATION',
    'cert.title':      '인증현황',
    'cert.sub':        '이담에스티가 보유한 공인 인증 및 등록 현황입니다',

    // STRENGTH
    'str.sub':         '설계·구축만 잘하는 회사는 있을 수 있습니다',
    'str.headline':    '이담에스티는<br><em>설계·구축만</em> 잘하지 않습니다',
    'str.card1.title': '철저한 유지보수',
    'str.card1.desc':  '구축 후에도 끝까지 책임집니다. 신속한 AS와 정기 점검으로 시스템을 안정적으로 유지합니다.',
    'str.card2.title': '투명한 견적',
    'str.card2.desc':  '예상치 못한 추가 비용 없이 명확하고 투명한 견적으로 신뢰할 수 있는 파트너십을 제공합니다.',
    'str.card3.title': '일정 준수',
    'str.card3.desc':  '쌓아온 노하우로 프로젝트 일정을 철저히 관리합니다. 약속한 날짜는 반드시 지킵니다.',
    'str.card4.title': '검증된 퀄리티',
    'str.card4.desc':  '516개 이상의 구축 사례가 증명합니다. 공공기관부터 방송국까지 신뢰받는 기술력입니다.',

    // PROCUREMENT (조달청)
    'proc.eyebrow':    'Procurement',
    'proc.title':      '조달청 등록제품',
    'proc.sub':        '이담에스티의 제품은 조달청에 공식 등록되어 공공기관 납품이 가능합니다',
    'proc.cta':        '자세히 보기 →',
    'proc.badge':      '등록완료',
    'svc.1.desc':      '4K UHD 촬영부터 실시간 스트리밍까지',
    'svc.2.title':     '이러닝 스튜디오',
    'svc.2.desc':      '자동 추적 카메라와 크로마키 환경',
    'svc.3.title':     'LED 디스플레이',
    'svc.3.desc':      'P1.5 피치 LED Wall XR 스튜디오',
    'svc.4.title':     '스마트 강의실',
    'svc.4.desc':      '온·오프라인 동시 수업 환경 구현',
    'svc.5.title':     '아카이브 시스템',
    'svc.5.desc':      '영상 자산 디지털화 및 장기 보존',
    'svc.6.title':     '화상회의 시스템',
    'svc.6.desc':      'Zoom·Teams 통합 원격 회의 환경',
    'svc.cta':         '도입 문의하기 →',

    // PORTFOLIO
    'port.eyebrow':    'Portfolio',
    'port.title':      '구축 사례',
    'port.more':       '전체 구축사례 보기 →',

    // HISTORY
    'hist.eyebrow':    'Company History',
    'hist.title':      'EDS의 걸어온 길',
    'hist.sub':        '2007년 창립 이래 끊임없이 성장해온 이담에스티의 연혁입니다',
    'hist.founded':    'FOUNDED 2007',

    // CLIENTS
    'cli.eyebrow':     'Clients & Partners',
    'cli.title':       '신뢰받는 파트너십',
    'cli.sub':         '국내 200+ 기관·기업과 함께합니다',
    'cli.stat1.n':     '200+',
    'cli.stat1.l':     '구축 완료 공간',
    'cli.stat2.n':     '17년',
    'cli.stat2.l':     '업력 및 전문성',
    'cli.stat3.n':     '98%',
    'cli.stat3.l':     '고객 만족도',
    'cli.stat4.n':     '24/7',
    'cli.stat4.l':     '기술 지원',
    'cli.brands':      '취급 브랜드 · Technology Partners',

    // CONTACT
    'ct.eyebrow':      'Contact',
    'ct.title':        '지금 바로\n상담을 시작하세요',
    'ct.address':      '서울시 구로구 디지털로31길 19, 406호',
    'ct.phone':        '02-857-7744',
    'ct.fax':          '02-857-7321',
    'ct.email':        'pub@edamst.com',
    'ct.hours':        '평일 09:00 – 18:00',
    'ct.form.title':   '도입 문의하기',
    'ct.form.sub':     '평균 4시간 이내 답변드립니다',
    'ct.form.name':    '담당자 이름',
    'ct.form.phone':   '연락처',
    'ct.form.email':   '이메일',
    'ct.form.type':    '도입 유형',
    'ct.form.msg':     '문의 내용',
    'ct.form.submit':  '문의 보내기 →',
    'ct.form.ph.name': '홍길동',
    'ct.form.ph.phone':'010-0000-0000',
    'ct.form.ph.email':'example@company.com',
    'ct.form.ph.msg':  '공간 규모, 예산, 일정 등 간략히 알려주시면 더욱 빠른 안내가 가능합니다.',
  },

  en: {
    'nav.about':     'About',
    'nav.services':  'Services',
    'nav.procurement': 'Procurement Products',
    'nav.portfolio': 'Portfolio',
    'nav.history':   'History',
    'nav.clients':   'Partners',
    'nav.contact':   'Contact',

    'hero.tag':      'Smart Space Solution · Since 2007',
    'hero.title':    'Smart Spaces,\nBuilt by\nEDAMST',
    'hero.sub':      'From broadcast studios to LED displays.\nOptimal space design with 17 years of expertise.',
    'hero.btn1':     'View Portfolio →',
    'hero.btn2':     'Free Consultation',

    'about.eyebrow1':  'ABOUT US',
    'about.title1':    '"The 10,000-Hour<br>Rule"',
    'about.body1':     'This refers to the time investment required to gain expertise in any field. Based on Anders Ericsson\'s 1993 research and popularized by Malcolm Gladwell in <em>Outliers (2009)</em>, the theory holds that <strong>10,000 hours of deliberate practice</strong> is what it takes to become a true expert.',
    'about.body1b':    'Gladwell cited Bill Gates and The Beatles as examples, but this principle applies to anyone who has achieved mastery in their field — by continuously pushing their limits and growing through focused repetition.',
    'about.stat1':     'Daily Training',
    'about.stat2':     'Weekly Training',
    'about.stat3':     'Duration',

    'about.eyebrow2':  'PROFESSIONAL GROUP',
    'about.title2':    'A Team of<br><em class="ab-em">Experts</em>',
    'about.body2a':    'EDAMST is composed of specialists with <strong>over 20 years</strong> of dedicated experience in broadcast technology, computer graphics, audio, and IT. Media technology is rapidly evolving — from HDTV and 3DTV to AR/VR, Metaverse, and holography.',
    'about.body2b':    'Our team is <strong>entirely made up of engineers</strong>. Through monthly in-house seminars and continuous technical training, we stay ahead of every trend.',
    'about.body3':     'Our proven technical expertise has earned the trust of <strong>91 government & public institutions</strong>, <strong>115 educational institutions</strong>, and over <strong>516 clients</strong> including broadcasters, hospitals, corporations, and religious organizations — through referrals and repeat business.',
    'about.msg':       'EDAMST will continue to deliver cutting-edge media system solutions, backed by extensive know-how and relentless research and development.',
    'about.sign':      'From all staff',

    'svc.eyebrow':     'Business Fields',
    'svc.title':       'Business Fields',
    'svc.subtitle':    'Complete solutions from design to construction and maintenance — backed by 19 years of field experience.',

    'port.eyebrow':    'Portfolio',
    'port.title':      'Project Cases',
    'port.more':       'View All Projects →',

    'hist.eyebrow':    'Company History',
    'hist.title':      'Our Journey',
    'hist.sub':        'The history of EDAMST since our founding in 2007',
    'hist.founded':    'FOUNDED 2007',

    'cert.eyebrow':    'CERTIFICATION',
    'cert.title':      'Certifications',
    'cert.sub':        'Official certifications and registrations held by EDAMST',

    'str.sub':         'Some companies only excel at design and construction.',
    'str.headline':    'EDAMST does<br><em>more than just build</em>',
    'str.card1.title': 'Thorough Maintenance',
    'str.card1.desc':  'We take responsibility even after construction. Rapid after-sales service and regular inspections keep your system stable.',
    'str.card2.title': 'Transparent Pricing',
    'str.card2.desc':  'No unexpected costs. We provide clear and honest estimates for a trustworthy partnership.',
    'str.card3.title': 'On-Time Delivery',
    'str.card3.desc':  'Our accumulated know-how ensures strict project schedule management. We always keep our promises.',
    'str.card4.title': 'Proven Quality',
    'str.card4.desc':  'Over 516 completed projects speak for themselves — trusted expertise from public institutions to broadcasters.',

    'proc.eyebrow':    'Procurement',
    'proc.title':      'Procurement Products',
    'proc.sub':        'EDAMST products are officially registered with the Public Procurement Service for direct government purchases.',
    'proc.cta':        'Learn More →',
    'proc.badge':      'Registered',

    'ct.form.title':   'Inquiry',
    'ct.form.sub':     'We\'ll get back to you as soon as possible',
    'ct.hours':        'Weekdays 09:00 – 18:00',
  },

  zh: {
    'nav.about':     '公司介绍',
    'nav.services':  '业务领域',
    'nav.procurement': '采购产品',
    'nav.portfolio': '建设案例',
    'nav.history':   '公司历程',
    'nav.clients':   '合作伙伴',
    'nav.contact':   '联系我们',

    'hero.tag':      '智能空间解决方案 · 创立于2007年',
    'hero.title':    '智能空间，\n由EDAMST\n打造',
    'hero.sub':      '从广播演播室到LED显示屏。\n凭借17年经验，设计最优空间。',
    'hero.btn1':     '查看案例 →',
    'hero.btn2':     '免费咨询',

    'about.eyebrow1':  'ABOUT US',
    'about.title1':    '"1万小时<br>定律"',
    'about.body1':     '这是指在任何领域获得专业知识所需的时间投入。基于安德斯·艾利克森1993年的研究，由马尔科姆·格拉德威尔在<em>《异类》(2009)</em>中推广，理论认为需要<strong>1万小时的刻意练习</strong>才能成为真正的专家。',
    'about.body1b':    '格拉德威尔以比尔·盖茨和披头士为例，但这一原则适用于所有在各自领域取得卓越成就的人——通过持续突破极限和专注重复来不断成长。',
    'about.stat1':     '每日训练量',
    'about.stat2':     '每周训练量',
    'about.stat3':     '持续时间',

    'about.eyebrow2':  'PROFESSIONAL GROUP',
    'about.title2':    '专业团队<br><em class="ab-em">EDAMST</em>',
    'about.body2a':    'EDAMST由在广播技术、计算机图形、音频和IT领域拥有<strong>20年以上</strong>专业经验的专家组成。媒体技术正从HDTV、3DTV、AR/VR迅速发展到元宇宙和全息技术。',
    'about.body2b':    '我们的团队<strong>全部由工程师组成</strong>。通过每月内部研讨会和持续技术培训，我们始终保持行业前沿。',
    'about.body3':     '凭借扎实的技术服务，我们赢得了<strong>91个政府及公共机构</strong>、<strong>115个教育机构</strong>以及包括广播机构、医院、企业和宗教组织在内的<strong>516个客户</strong>的信赖。',
    'about.msg':       'EDAMST将凭借丰富的媒体系统建设经验，通过不断的内部研究和技术学习，持续提供前沿的建设服务。',
    'about.sign':      '全体员工',

    'svc.eyebrow':     '业务领域',
    'svc.title':       '业务领域',
    'svc.subtitle':    '凭借19年现场经验，提供从设计到施工和维护的完整解决方案。',

    'port.eyebrow':    '案例',
    'port.title':      '建设案例',
    'port.more':       '查看全部案例 →',

    'hist.eyebrow':    '公司历程',
    'hist.title':      'EDS的发展历程',
    'hist.sub':        '自2007年创立以来，EDAMST不断成长的公司历程',
    'hist.founded':    '创立于2007年',

    'cert.eyebrow':    '认证',
    'cert.title':      '认证现况',
    'cert.sub':        'EDAMST持有的官方认证及注册情况',

    'str.sub':         '只擅长设计和建设的公司可能有很多',
    'str.headline':    'EDAMST<br><em>不止于设计与建设</em>',
    'str.card1.title': '全面的售后维护',
    'str.card1.desc':  '施工后也负责到底。通过快速售后服务和定期检查，保持系统稳定运行。',
    'str.card2.title': '透明报价',
    'str.card2.desc':  '无意外费用。提供清晰透明的报价，建立值得信赖的合作关系。',
    'str.card3.title': '准时交付',
    'str.card3.desc':  '凭借积累的经验严格管理项目进度。约定的日期必定履行。',
    'str.card4.title': '经过验证的品质',
    'str.card4.desc':  '516个以上的建设案例证明一切。从公共机构到广播机构均受信赖的技术实力。',

    'proc.eyebrow':    '采购',
    'proc.title':      '采购产品',
    'proc.sub':        'EDAMST的产品已在采购厅正式登记，可直接向公共机构供货。',
    'proc.cta':        '查看详情 →',
    'proc.badge':      '已登记',

    'ct.form.title':   '发送咨询',
    'ct.form.sub':     '我们将尽快与您联系',
    'ct.hours':        '工作日 09:00 – 18:00',
  },

  ja: {
    'nav.about':     '会社紹介',
    'nav.services':  '事業分野',
    'nav.procurement': '調達庁登録製品',
    'nav.portfolio': '構築事例',
    'nav.history':   '会社沿革',
    'nav.clients':   'パートナー',
    'nav.contact':   'お問い合わせ',

    'hero.tag':      'スマート空間ソリューション · 2007年創立',
    'hero.title':    'スマートな空間を、\nEDAMSTが\n創ります',
    'hero.sub':      '放送スタジオからLEDディスプレイまで。\n17年の経験で最適な空間を設計します。',
    'hero.btn1':     '構築事例を見る →',
    'hero.btn2':     '無料相談申込',

    'about.eyebrow1':  'ABOUT US',
    'about.title1':    '"1万時間の<br>法則"',
    'about.body1':     'ある分野で専門性を身につけるために必要な投資時間を意味します。アンダース・エリクソンの1993年の研究をもとに、マルコム・グラッドウェルが<em>『天才！』(2009)</em>で紹介した理論で、<strong>1万時間の意図的な練習</strong>で真の専門家になれるとされています。',
    'about.body1b':    'グラッドウェルはビル・ゲイツやビートルズを例に挙げましたが、この原則は各分野で卓越した成果を上げた人すべてに当てはまります。',
    'about.stat1':     '1日の練習量',
    'about.stat2':     '週の練習量',
    'about.stat3':     '継続期間',

    'about.eyebrow2':  'PROFESSIONAL GROUP',
    'about.title2':    '専門家集団<br><em class="ab-em">EDAMST</em>',
    'about.body2a':    'EDAMSTは、放送技術・コンピュータグラフィックス・オーディオ・IT分野で<strong>20年以上</strong>のキャリアを持つ専門家で構成されています。メディア技術はHDTV・3DTV・AR/VRを経てメタバースやホログラムへと急速に進化しています。',
    'about.body2b':    '当社は<strong>全員エンジニアで構成</strong>されており、毎月の社内セミナーと技術習得支援により、常に最新トレンドに対応しています。',
    'about.body3':     'こうした技術力を背景に、<strong>91の官公署・公共機関</strong>、<strong>115の教育機関</strong>、放送局・病院・企業・宗教団体など<strong>516社以上</strong>の国内外のお客様からご支持をいただいています。',
    'about.msg':       'EDAMSTは豊富な構築ノウハウと絶え間ない研究・技術習得活動を通じて、トレンドに即した構築サービスを提供してまいります。',
    'about.sign':      '役職員一同',

    'svc.eyebrow':     '事業分野',
    'svc.title':       '事業分野',
    'svc.subtitle':    '19年の現場経験で完成したソリューション — 設計から構築、保守まで責任を持って対応します。',

    'port.eyebrow':    'ポートフォリオ',
    'port.title':      '構築事例',
    'port.more':       '全構築事例を見る →',

    'hist.eyebrow':    '会社沿革',
    'hist.title':      'EDAMSTの歩み',
    'hist.sub':        '2007年の創立以来、成長し続けるEDAMSTの沿革',
    'hist.founded':    '2007年創立',

    'cert.eyebrow':    '認証',
    'cert.title':      '認証状況',
    'cert.sub':        'EDAMSTが保有する公認認証および登録状況',

    'str.sub':         '設計・構築だけが得意な会社はあるかもしれません',
    'str.headline':    'EDAMSTは<br><em>設計・構築だけ</em>ではありません',
    'str.card1.title': '徹底したアフターメンテナンス',
    'str.card1.desc':  '構築後も最後まで責任を持ちます。迅速なアフターサービスと定期点検でシステムを安定維持します。',
    'str.card2.title': '透明な見積もり',
    'str.card2.desc':  '予期せぬ追加費用なし。明確で透明な見積もりで信頼できるパートナーシップを提供します。',
    'str.card3.title': '納期厳守',
    'str.card3.desc':  '蓄積されたノウハウでプロジェクトスケジュールを徹底管理。約束した日程は必ず守ります。',
    'str.card4.title': '実証済みの品質',
    'str.card4.desc':  '516件以上の構築実績が証明。官公署から放送局まで信頼される技術力です。',

    'proc.eyebrow':    '調達',
    'proc.title':      '調達庁登録製品',
    'proc.sub':        'EDAMSTの製品は調達庁に公式登録され、公共機関への直接納品が可能です。',
    'proc.cta':        '詳細を見る →',
    'proc.badge':      '登録済み',

    'ct.form.title':   'お問い合わせ',
    'ct.form.sub':     'できる限り早くご連絡いたします',
    'ct.hours':        '平日 09:00 – 18:00',
  }
};

// 현재 언어 상태
let currentLang = localStorage.getItem('eds-lang') || 'ko';

// 번역 텍스트 반환
function t(key) {
  return (translations[currentLang] && translations[currentLang][key])
    || translations['ko'][key]
    || key;
}

// 페이지 전체 텍스트 교체
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('eds-lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = text;
    } else {
      el.innerHTML = text.replace(/\n/g, '<br>');
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    el.innerHTML = t(key);
  });

  // ── About 섹션 직접 교체 ──
  const sec2 = document.getElementById('sec2');
  if (sec2) {
    const labels  = sec2.querySelectorAll('.ab-label');
    const titles  = sec2.querySelectorAll('.ab-title');
    const bodies  = sec2.querySelectorAll('.ab-body');
    const sig     = sec2.querySelector('.ab-sig');

    if (lang === 'ko') {
      // KO는 원본 HTML 복원
      if (labels[0])  labels[0].textContent  = 'ABOUT US';
      if (titles[0])  titles[0].innerHTML    = '"1만 시간의<br>법칙"';
      if (bodies[0])  bodies[0].innerHTML    = '어떤 분야에서 전문성을 갖기 위해 투자해야 하는 시간을 의미합니다. 1993년 앤더스 에릭슨이 연구한 내용을 바탕으로 베스트셀러 작가 말콤 글래드웰이 <em>《아웃라이어, 성공의 기회를 발견한 사람들, 2009》</em>에서 이 에릭슨의 주장을 간단하게 <strong>"1만 시간을 연습하면 전문가가 된다"</strong>는 이론으로 설명했습니다.';
      if (bodies[1])  bodies[1].innerHTML    = '아웃라이어에서는 빌 게이츠와 비틀즈를 예로 제시했지만, 비단 그들만이 아니라 각자의 분야에서 명성을 떨치는 사람들은 대부분 이 법칙에 따라 자신의 능력을 증진시키고 한계를 극복하며 스스로 발전시키고 있는 것입니다.';
      if (labels[1])  labels[1].textContent  = 'PROFESSIONAL GROUP';
      if (titles[1])  titles[1].innerHTML    = '전문가 집단<br><em class="ab-em">이담에스티</em>';
      if (bodies[2])  bodies[2].innerHTML    = '이담에스티는 방송기술, 컴퓨터그래픽, 오디오, IT 분야의 <strong>20년 이상의 외길</strong>을 다져온 전문가들로 구성된 회사입니다. 미디어 기술은 컴퓨터와 IT분야의 빠른 성장을 바탕으로 HDTV, 3DTV, AR/VR을 거쳐 Metaverse와 홀로그램으로 빠르게 변화하고 있습니다.';
      if (bodies[3])  bodies[3].innerHTML    = '우리 회사는 <strong>모두 엔지니어로 구성</strong>되어 있으며 매월 자체 사내 세미나 개최와 기술습득에 필요한 요소들을 지원함으로써 트렌드에 뒤쳐지지 않습니다.';
      if (bodies[4])  bodies[4].innerHTML    = '이러한 준비된 기술 서비스를 바탕으로 중앙정부, 지자체, 공기업을 포함한 <strong>91개 관공서·공공기관</strong>, <strong>115개 교육기관</strong>, 방송국, 종교단체, 병원, 기업 등 <strong>516개</strong> 수많은 국내고객과 해외의 미디어 시스템 고객은 상호 소개와 재구매를 통하여 이담에스티의 서비스를 검증받았습니다.';
      if (bodies[5])  bodies[5].innerHTML    = '이담에스티는 다양한 미디어 시스템 구축 노하우와 끊임없는 사내 연구와 대외 기술 습득 활동을 통해 트렌디한 구축 서비스를 제공하겠습니다.';
      if (sig)        sig.textContent        = '임직원 일동';
    } else {
      if (labels[0])  labels[0].innerHTML  = t('about.eyebrow1');
      if (titles[0])  titles[0].innerHTML  = t('about.title1');
      if (bodies[0])  bodies[0].innerHTML  = t('about.body1');
      if (bodies[1])  bodies[1].innerHTML  = t('about.body1b');
      if (labels[1])  labels[1].innerHTML  = t('about.eyebrow2');
      if (titles[1])  titles[1].innerHTML  = t('about.title2');
      if (bodies[2])  bodies[2].innerHTML  = t('about.body2a');
      if (bodies[3])  bodies[3].innerHTML  = t('about.body2b');
      if (bodies[4])  bodies[4].innerHTML  = t('about.body3');
      if (bodies[5])  bodies[5].innerHTML  = t('about.msg');
      if (sig)        sig.textContent      = t('about.sign');
    }
  }

  // ── SecServices 헤더 직접 교체 ──
  const sec3 = document.getElementById('sec3');
  if (sec3) {
    const eyebrow  = sec3.querySelector('.svc-eyebrow');
    const subtitle = sec3.querySelector('.svc-subtitle');
    if (eyebrow)  eyebrow.textContent  = t('svc.eyebrow');
    if (subtitle) subtitle.textContent = t('svc.subtitle');
  }

  // ── SecCert 직접 교체 ──
  const secCert = document.getElementById('sec-cert');
  if (secCert) {
    const label    = secCert.querySelector('.cert-label');
    const titleSpan = secCert.querySelector('.cert-title span');
    const sub      = secCert.querySelector('.cert-sub');
    if (label)     label.textContent     = t('cert.eyebrow');
    if (titleSpan) titleSpan.textContent = t('cert.title');
    if (sub)       sub.textContent       = t('cert.sub');
  }

  // ── SecHistory 직접 교체 ──
  const sec6 = document.getElementById('sec6');
  if (sec6) {
    const eyebrow = sec6.querySelector('.h-eyebrow');
    const title   = sec6.querySelector('.h-title');
    const sub     = sec6.querySelector('.h-sub');
    if (eyebrow) eyebrow.textContent = t('hist.eyebrow');
    if (title)   title.textContent   = t('hist.title');
    if (sub)     sub.textContent     = t('hist.sub');
  }

  // ── SecPortfolio 직접 교체 ──
  const sec4 = document.getElementById('sec4');
  if (sec4) {
    const eyebrow = sec4.querySelector('.port-eyebrow');
    const more    = sec4.querySelector('.port-all');
    if (eyebrow) eyebrow.textContent = t('port.eyebrow');
    if (more)    more.textContent    = t('port.more');
  }

  // ── SecContact 직접 교체 ──
  const modal = document.getElementById('inquiryModal');
  if (modal) {
    const title = modal.querySelector('.iq-title');
    const sub   = modal.querySelector('.iq-sub');
    if (title) title.textContent = t('ct.form.title');
    if (sub)   sub.textContent   = t('ct.form.sub');
  }

  // ── SecStrength 직접 교체 ──
  const secStr = document.getElementById('sec-strength');
  if (secStr) {
    const sub      = secStr.querySelector('.ab-str-sub');
    const headline = secStr.querySelector('.ab-str-headline');
    const titles   = secStr.querySelectorAll('.ab-str-title');
    const descs    = secStr.querySelectorAll('.ab-str-desc');
    if (sub)      sub.textContent      = t('str.sub');
    if (headline) headline.innerHTML   = t('str.headline');
    if (titles[0]) titles[0].textContent = t('str.card1.title');
    if (descs[0])  descs[0].textContent  = t('str.card1.desc');
    if (titles[1]) titles[1].textContent = t('str.card2.title');
    if (descs[1])  descs[1].textContent  = t('str.card2.desc');
    if (titles[2]) titles[2].textContent = t('str.card3.title');
    if (descs[2])  descs[2].textContent  = t('str.card3.desc');
    if (titles[3]) titles[3].textContent = t('str.card4.title');
    if (descs[3])  descs[3].textContent  = t('str.card4.desc');
  }

  // ── SecClients(조달청) 직접 교체 ──
  const sec5 = document.getElementById('sec5');
  if (sec5) {
    const eyebrow = sec5.querySelector('.s6-eyebrow');
    const title   = sec5.querySelector('.s6-title');
    const sub     = sec5.querySelector('.s6-sub');
    const badges  = sec5.querySelectorAll('.s6-card-badge');
    const ctas    = sec5.querySelectorAll('.s6-thumb-cta');
    if (eyebrow) eyebrow.textContent = t('proc.eyebrow');
    if (title)   title.textContent   = t('proc.title');
    if (sub)     sub.textContent     = t('proc.sub');
    badges.forEach(el => el.textContent = t('proc.badge'));
    ctas.forEach(el => el.textContent   = t('proc.cta'));
  }

  // lang 버튼 활성화 표시
  document.querySelectorAll('.lang-btn, .ab-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // html lang 속성 변경
  const langMap = { ko: 'ko', en: 'en', zh: 'zh-CN', ja: 'ja' };
  document.documentElement.lang = langMap[lang] || lang;
}

// 초기 적용
document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang);
});

window.__t = t;
window.__applyLang = applyLang;
