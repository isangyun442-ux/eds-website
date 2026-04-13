// src/i18n/translations.js
// 사용법: window.__t('hero.title') → 현재 언어 텍스트 반환

const translations = {

  ko: {
    // NAV
    'nav.about':     '회사소개',
    'nav.services':  '서비스',
    'nav.portfolio': '구축사례',
    'nav.history':   '회사연혁',
    'nav.clients':   '파트너스',
    'nav.contact':   '도입 문의',

    // HERO
    'hero.tag':      'Smart Space Solution · Since 2007',
    'hero.title':    '스마트한 공간,\n이담에스티가\n만듭니다',
    'hero.sub':      '방송 스튜디오부터 LED 디스플레이까지.\n17년의 경험으로 최적의 공간을 설계합니다.',
    'hero.btn1':     '구축사례 보기 →',
    'hero.btn2':     '무료 상담 신청',

    // ABOUT — 1만 시간
    'about.eyebrow1':  'Introduce',
    'about.title1':    '"1만 시간의 법칙"',
    'about.body1':     '어떤 분야에서 전문성을 갖기 위해 투자해야 하는 시간을 의미합니다. 1993년 앤더스 에릭슨의 연구를 바탕으로 말콤 글래드웰이 《아웃라이어》(2009)에서 제시한 이론으로, 하루 3시간, 주 20시간씩 10년간 한 가지 일을 반복해야 비로소 전문가가 될 수 있다는 뜻입니다.',
    'about.stat1':     '하루 훈련량',
    'about.stat2':     '주간 훈련량',
    'about.stat3':     '지속 기간',

    // ABOUT — 전문가 집단
    'about.eyebrow2':  'Expert Group',
    'about.title2':    '전문가 집단\n이담에스티',
    'about.body2a':    '방송기술, 컴퓨터그래픽, 오디오, IT 분야에서 20년 이상의 외길을 다져온 전문가들로 구성된 회사입니다. 미디어 기술은 HDTV·3DTV·AR/VR을 거쳐 메타버스와 홀로그램으로 빠르게 변화하고 있습니다.',
    'about.body2b':    '우리 회사는 전원 엔지니어로 구성되어 있으며, 매월 자체 사내 세미나와 기술 습득 지원을 통해 트렌드에 뒤쳐지지 않습니다.',

    // ABOUT — 고객 실적
    'about.eyebrow3':  'Customer Service',
    'about.title3':    '다양하고 만족도 높은 고객 서비스',
    'about.body3':     '준비된 기술 서비스를 바탕으로 수많은 국내외 고객에게 상호 소개와 재구매를 통해 이담에스티의 서비스를 검증받았습니다.',
    'about.num1.l':    '관공서 · 공공기관',
    'about.num1.s':    '중앙정부, 지자체, 공기업 포함',
    'about.num2.l':    '교육기관',
    'about.num2.s':    '대학교, 학교, 교육청',
    'about.num3.l':    '총 고객사',
    'about.num3.s':    '방송국, 병원, 기업, 종교단체',
    'about.msg':       'EDS 이담에스티는 다양한 미디어 시스템 구축 노하우와 끊임없는 사내 연구 및 대외 기술 습득 활동을 통해 트렌디한 구축 서비스를 제공하겠습니다.',
    'about.sign':      '— 임직원 일동',

    // SERVICES
    'svc.eyebrow':     'Services',
    'svc.title':       '서비스',
    'svc.1.title':     '방송제작 스튜디오',
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
    'nav.portfolio': 'Portfolio',
    'nav.history':   'History',
    'nav.clients':   'Partners',
    'nav.contact':   'Contact',

    'hero.tag':      'Smart Space Solution · Since 2007',
    'hero.title':    'Smart Spaces,\nBuilt by\nEDAMST',
    'hero.sub':      'From broadcast studios to LED displays.\nOptimal space design with 17 years of expertise.',
    'hero.btn1':     'View Portfolio →',
    'hero.btn2':     'Free Consultation',

    'about.eyebrow1':  'Introduce',
    'about.title1':    '"The 10,000-Hour Rule"',
    'about.body1':     'This refers to the time investment required to gain expertise in any field. Based on Anders Ericsson\'s 1993 research and popularized by Malcolm Gladwell in Outliers (2009), the theory holds that 3 hours a day, 20 hours a week, for 10 years of dedicated practice is what it takes to become a true expert.',
    'about.stat1':     'Daily Training',
    'about.stat2':     'Weekly Training',
    'about.stat3':     'Duration',

    'about.eyebrow2':  'Expert Group',
    'about.title2':    'A Team of\nExperts',
    'about.body2a':    'EDAMST is composed of specialists with over 20 years of dedicated experience in broadcast technology, computer graphics, audio, and IT. Media technology is rapidly evolving — from HDTV and 3DTV to AR/VR, Metaverse, and holography.',
    'about.body2b':    'Our team is entirely made up of engineers. Through monthly in-house seminars and continuous technical training, we stay ahead of every trend.',

    'about.eyebrow3':  'Customer Service',
    'about.title3':    'High-Quality Service for Diverse Clients',
    'about.body3':     'Our proven technical expertise has earned the trust of countless domestic and international clients through referrals and repeat business.',
    'about.num1.l':    'Government & Public Institutions',
    'about.num1.s':    'Central gov., local gov., public enterprises',
    'about.num2.l':    'Educational Institutions',
    'about.num2.s':    'Universities, schools, education offices',
    'about.num3.l':    'Total Clients',
    'about.num3.s':    'Broadcasters, hospitals, corporations, religious orgs',
    'about.msg':       'EDAMST will continue to deliver cutting-edge media system solutions, backed by extensive know-how and relentless research and development.',
    'about.sign':      '— From all staff',

    'svc.eyebrow':     'Services',
    'svc.title':       'Services',
    'svc.1.title':     'Broadcast Studio',
    'svc.1.desc':      'From 4K UHD shooting to live streaming',
    'svc.2.title':     'eLearning Studio',
    'svc.2.desc':      'Auto-tracking cameras & chroma key',
    'svc.3.title':     'LED Display',
    'svc.3.desc':      'P1.5 pitch LED Wall XR Studio',
    'svc.4.title':     'Smart Classroom',
    'svc.4.desc':      'Simultaneous online & offline instruction',
    'svc.5.title':     'Archive System',
    'svc.5.desc':      'Digitization & long-term preservation',
    'svc.6.title':     'Video Conferencing',
    'svc.6.desc':      'Zoom & Teams integrated remote meetings',
    'svc.cta':         'Get in Touch →',

    'port.eyebrow':    'Portfolio',
    'port.title':      'Project Cases',
    'port.more':       'View All Projects →',

    'hist.eyebrow':    'Company History',
    'hist.title':      'Our Journey',
    'hist.sub':        'The history of EDAMST since our founding in 2007',
    'hist.founded':    'FOUNDED 2007',

    'cli.eyebrow':     'Clients & Partners',
    'cli.title':       'Trusted Partnerships',
    'cli.sub':         'Working with 200+ organizations nationwide',
    'cli.stat1.n':     '200+',
    'cli.stat1.l':     'Completed Spaces',
    'cli.stat2.n':     '17 Yrs',
    'cli.stat2.l':     'Experience',
    'cli.stat3.n':     '98%',
    'cli.stat3.l':     'Satisfaction',
    'cli.stat4.n':     '24/7',
    'cli.stat4.l':     'Support',
    'cli.brands':      'Technology Partners',

    'ct.eyebrow':      'Contact',
    'ct.title':        'Start Your\nConsultation Today',
    'ct.address':      '406, 19, Digital-ro 31-gil, Guro-gu, Seoul',
    'ct.phone':        '02-857-7744',
    'ct.fax':          '02-857-7321',
    'ct.email':        'pub@edamst.com',
    'ct.hours':        'Weekdays 09:00 – 18:00',
    'ct.form.title':   'Send an Inquiry',
    'ct.form.sub':     'We respond within 4 hours on average',
    'ct.form.name':    'Contact Name',
    'ct.form.phone':   'Phone Number',
    'ct.form.email':   'Email',
    'ct.form.type':    'Inquiry Type',
    'ct.form.msg':     'Message',
    'ct.form.submit':  'Send Inquiry →',
    'ct.form.ph.name': 'John Doe',
    'ct.form.ph.phone':'010-0000-0000',
    'ct.form.ph.email':'example@company.com',
    'ct.form.ph.msg':  'Please share details about your space size, budget, and timeline for faster assistance.',
  },

  zh: {
    'nav.about':     '公司介绍',
    'nav.services':  '服务',
    'nav.portfolio': '建设案例',
    'nav.history':   '公司历程',
    'nav.clients':   '合作伙伴',
    'nav.contact':   '咨询',

    'hero.tag':      '智能空间解决方案 · 2007年至今',
    'hero.title':    '智能空间，\n由EDAMST\n打造',
    'hero.sub':      '从广播演播室到LED显示屏。\n凭借17年经验，打造最优空间。',
    'hero.btn1':     '查看案例 →',
    'hero.btn2':     '免费咨询',

    'about.eyebrow1':  '介绍',
    'about.title1':    '"一万小时法则"',
    'about.body1':     '这指的是在任何领域获得专业知识所需投入的时间。基于安德斯·埃里克森1993年的研究，由马尔科姆·格拉德威尔在《异类》(2009)中普及，该理论认为每天3小时、每周20小时、坚持10年的专注练习，才能成为真正的专家。',
    'about.stat1':     '每日训练',
    'about.stat2':     '每周训练',
    'about.stat3':     '持续时间',

    'about.eyebrow2':  '专家团队',
    'about.title2':    '专家集团\nEDAMST',
    'about.body2a':    'EDAMST由在广播技术、计算机图形、音频及IT领域拥有20年以上专业经验的专家组成。媒体技术正从HDTV、3DTV、AR/VR迅速演进至元宇宙和全息技术。',
    'about.body2b':    '我们的团队全部由工程师组成，通过每月内部研讨会和持续技术培训，始终保持行业领先。',

    'about.eyebrow3':  '客户服务',
    'about.title3':    '多样化的高满意度客户服务',
    'about.body3':     '凭借扎实的技术服务，通过客户介绍和回购，EDAMST的服务已获得众多国内外客户的认可与信赖。',
    'about.num1.l':    '政府及公共机构',
    'about.num1.s':    '含中央政府、地方政府、公共企业',
    'about.num2.l':    '教育机构',
    'about.num2.s':    '大学、学校、教育厅',
    'about.num3.l':    '客户总数',
    'about.num3.s':    '广播机构、医院、企业、宗教团体',
    'about.msg':       'EDAMST将凭借丰富的媒体系统建设经验，通过不断的内部研究和技术学习，持续提供前沿的建设服务。',
    'about.sign':      '— 全体员工',

    'svc.eyebrow':     '服务',
    'svc.title':       '服务内容',
    'svc.1.title':     '广播制作演播室',
    'svc.1.desc':      '从4K UHD拍摄到实时直播',
    'svc.2.title':     '电子学习演播室',
    'svc.2.desc':      '自动追踪摄像机与抠像环境',
    'svc.3.title':     'LED显示屏',
    'svc.3.desc':      'P1.5间距LED Wall XR演播室',
    'svc.4.title':     '智能教室',
    'svc.4.desc':      '实现线上线下同步教学环境',
    'svc.5.title':     '档案系统',
    'svc.5.desc':      '影像资产数字化及长期保存',
    'svc.6.title':     '视频会议系统',
    'svc.6.desc':      'Zoom·Teams整合远程会议环境',
    'svc.cta':         '立即咨询 →',

    'port.eyebrow':    '案例',
    'port.title':      '建设案例',
    'port.more':       '查看全部案例 →',

    'hist.eyebrow':    '公司历程',
    'hist.title':      'EDS的发展历程',
    'hist.sub':        '自2007年创立以来，EDAMST不断成长的公司历程',
    'hist.founded':    '创立于2007年',

    'cli.eyebrow':     '客户与合作伙伴',
    'cli.title':       '值得信赖的合作关系',
    'cli.sub':         '携手国内200+机构与企业',
    'cli.stat1.n':     '200+',
    'cli.stat1.l':     '建设完成空间',
    'cli.stat2.n':     '17年',
    'cli.stat2.l':     '行业经验',
    'cli.stat3.n':     '98%',
    'cli.stat3.l':     '客户满意度',
    'cli.stat4.n':     '24/7',
    'cli.stat4.l':     '技术支持',
    'cli.brands':      '技术合作品牌',

    'ct.eyebrow':      '联系我们',
    'ct.title':        '立即开始\n您的咨询',
    'ct.address':      '首尔市九老区数字路31街19号406室',
    'ct.phone':        '02-857-7744',
    'ct.fax':          '02-857-7321',
    'ct.email':        'pub@edamst.com',
    'ct.hours':        '工作日 09:00 – 18:00',
    'ct.form.title':   '发送咨询',
    'ct.form.sub':     '平均4小时内回复',
    'ct.form.name':    '联系人姓名',
    'ct.form.phone':   '联系电话',
    'ct.form.email':   '电子邮件',
    'ct.form.type':    '咨询类型',
    'ct.form.msg':     '咨询内容',
    'ct.form.submit':  '发送咨询 →',
    'ct.form.ph.name': '张三',
    'ct.form.ph.phone':'010-0000-0000',
    'ct.form.ph.email':'example@company.com',
    'ct.form.ph.msg':  '请简要说明空间规模、预算和时间安排，以便我们提供更快速的服务。',
  },

  ja: {
    'nav.about':     '会社紹介',
    'nav.services':  'サービス',
    'nav.portfolio': '構築事例',
    'nav.history':   '会社沿革',
    'nav.clients':   'パートナー',
    'nav.contact':   'お問い合わせ',

    'hero.tag':      'スマート空間ソリューション · 2007年創立',
    'hero.title':    'スマートな空間を、\nEDAMSTが\n創ります',
    'hero.sub':      '放送スタジオからLEDディスプレイまで。\n17年の経験で最適な空間を設計します。',
    'hero.btn1':     '構築事例を見る →',
    'hero.btn2':     '無料相談申込',

    'about.eyebrow1':  'はじめに',
    'about.title1':    '"1万時間の法則"',
    'about.body1':     'ある分野で専門性を身につけるために必要な投資時間を意味します。アンダース・エリクソンの1993年の研究をもとに、マルコム・グラッドウェルが『天才！』(2009)で紹介した理論で、1日3時間、週20時間を10年間続けることで真の専門家になれるとされています。',
    'about.stat1':     '1日の練習量',
    'about.stat2':     '週の練習量',
    'about.stat3':     '継続期間',

    'about.eyebrow2':  '専門家集団',
    'about.title2':    '専門家集団\nEDAMST',
    'about.body2a':    'EDAMSTは、放送技術・コンピュータグラフィックス・オーディオ・IT分野で20年以上のキャリアを持つ専門家で構成されています。メディア技術はHDTV・3DTV・AR/VRを経てメタバースやホログラムへと急速に進化しています。',
    'about.body2b':    '当社は全員エンジニアで構成されており、毎月の社内セミナーと技術習得支援により、常に最新トレンドに対応しています。',

    'about.eyebrow3':  'カスタマーサービス',
    'about.title3':    '多様で満足度の高い顧客サービス',
    'about.body3':     '確かな技術サービスを基に、多くの国内外のお客様から紹介・リピートをいただき、EDAMSTのサービスの品質が実証されています。',
    'about.num1.l':    '官公署・公共機関',
    'about.num1.s':    '中央省庁、地方自治体、公企業含む',
    'about.num2.l':    '教育機関',
    'about.num2.s':    '大学、学校、教育委員会',
    'about.num3.l':    '総顧客数',
    'about.num3.s':    '放送局、病院、企業、宗教団体',
    'about.msg':       'EDAMSTは豊富な構築ノウハウと絶え間ない研究・技術習得活動を通じて、トレンドに即した構築サービスを提供してまいります。',
    'about.sign':      '— 役職員一同',

    'svc.eyebrow':     'サービス',
    'svc.title':       'サービス',
    'svc.1.title':     '放送制作スタジオ',
    'svc.1.desc':      '4K UHD撮影からライブ配信まで',
    'svc.2.title':     'eラーニングスタジオ',
    'svc.2.desc':      '自動追尾カメラとクロマキー環境',
    'svc.3.title':     'LEDディスプレイ',
    'svc.3.desc':      'P1.5ピッチLED Wall XRスタジオ',
    'svc.4.title':     'スマート教室',
    'svc.4.desc':      'オンライン・オフライン同時授業',
    'svc.5.title':     'アーカイブシステム',
    'svc.5.desc':      '映像資産のデジタル化と長期保存',
    'svc.6.title':     'ビデオ会議システム',
    'svc.6.desc':      'Zoom・Teams統合リモート会議環境',
    'svc.cta':         'お問い合わせ →',

    'port.eyebrow':    'ポートフォリオ',
    'port.title':      '構築事例',
    'port.more':       '全構築事例を見る →',

    'hist.eyebrow':    '会社沿革',
    'hist.title':      'EDAMSTの歩み',
    'hist.sub':        '2007年の創立以来、成長し続けるEDAMSTの沿革',
    'hist.founded':    '2007年創立',

    'cli.eyebrow':     'クライアント & パートナー',
    'cli.title':       '信頼されるパートナーシップ',
    'cli.sub':         '国内200以上の機関・企業と共に',
    'cli.stat1.n':     '200+',
    'cli.stat1.l':     '構築完了空間',
    'cli.stat2.n':     '17年',
    'cli.stat2.l':     '業歴・専門性',
    'cli.stat3.n':     '98%',
    'cli.stat3.l':     '顧客満足度',
    'cli.stat4.n':     '24/7',
    'cli.stat4.l':     '技術サポート',
    'cli.brands':      'テクノロジーパートナー',

    'ct.eyebrow':      'お問い合わせ',
    'ct.title':        'いますぐ\nご相談ください',
    'ct.address':      'ソウル市九老区デジタル路31街19番406号',
    'ct.phone':        '02-857-7744',
    'ct.fax':          '02-857-7321',
    'ct.email':        'pub@edamst.com',
    'ct.hours':        '平日 09:00 – 18:00',
    'ct.form.title':   'お問い合わせ',
    'ct.form.sub':     '平均4時間以内にご返答します',
    'ct.form.name':    '担当者名',
    'ct.form.phone':   '電話番号',
    'ct.form.email':   'メールアドレス',
    'ct.form.type':    'お問い合わせ種別',
    'ct.form.msg':     'お問い合わせ内容',
    'ct.form.submit':  '送信する →',
    'ct.form.ph.name': '山田太郎',
    'ct.form.ph.phone':'010-0000-0000',
    'ct.form.ph.email':'example@company.com',
    'ct.form.ph.msg':  'スペースの規模、予算、スケジュールなどをご記入いただくと、より迅速にご対応できます。',
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
      // 줄바꿈 처리
      el.innerHTML = text.replace(/\n/g, '<br>');
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    el.innerHTML = t(key);
  });

  // lang 버튼 활성화 표시
  document.querySelectorAll('.lang-btn').forEach(btn => {
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
