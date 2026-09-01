import sharp from 'sharp';
import { readdirSync, mkdirSync } from 'fs';
import path from 'path';

const projects = [
  { id: 1785480259527, folder: '01_사이버한국외국어대학교_A', prefix: 'CHUFS_A', title: '사이버한국외국어대학교' },
  { id: 1785480165688, folder: '02_인디스쿨_제2캠퍼스', prefix: 'INDISCHOOL2', title: '인디스쿨 제2캠퍼스' },
  { id: 1785480035083, folder: '03_앙코르유적_홍보관', prefix: 'ANGKOR', title: '앙코르유적 홍보관' },
  { id: 1785479919473, folder: '04_서울디지털대학교', prefix: 'SDU', title: '서울디지털대학교' },
  { id: 1785479172400, folder: '05_서울사이버대학교', prefix: 'SCU', title: '서울사이버대학교' },
  { id: 1785478661023, folder: '06_국민통일방송', prefix: 'KUB', title: '국민통일방송' },
  { id: 1785478437260, folder: '07_페이지랩의원', prefix: 'PAGELAB', title: '페이지랩의원' },
  { id: 1785478341631, folder: '08_종로_청소년문화의집', prefix: 'JONGNO_YOUTH', title: '종로 청소년문화의 집' },
  { id: 1785478172601, folder: '09_서울_e스타디움_경기장', prefix: 'SEOUL_ESTADIUM', title: '서울 e-스타디움 경기장' },
  { id: 1785478043779, folder: '10_경기도서관_K문화스튜디오', prefix: 'GG_LIB_K', title: '경기도서관 K-문화스튜디오' },
  { id: 1785477931991, folder: '11_서울사이버대학교_옴니클래스', prefix: 'SCU_OMNI', title: '서울사이버대학교 옴니클래스' },
  { id: 1785477666958, folder: '12_KTV_방송시스템', prefix: 'KTV_SYS', title: 'KTV 방송시스템' },
  { id: 1785477045911, folder: '13_삼육대학교_글로벌한국학과', prefix: 'SYU_GKS', title: '삼육대학교 글로벌한국학과' },
  { id: 1785476880383, folder: '14_경희사이버대학교_미디어개발처', prefix: 'KHCU_MEDIA', title: '경희사이버대학교 미디어개발처' },
  { id: 1785476753263, folder: '15_KCYCLE_경륜', prefix: 'KCYCLE', title: 'KCYCLE 경륜' },
  { id: 1785224053463, folder: '16_사이버한국외국어대학교_B', prefix: 'CHUFS_B', title: '사이버한국외국어대학교(2)' },
];

const OUT_DIR = 'public/images/portfolio';
mkdirSync(OUT_DIR, { recursive: true });

const result = {};

for (const p of projects) {
  const dir = path.join('restore', p.folder);
  const files = readdirSync(dir)
    .filter(f => /\.(jpe?g|png)$/i.test(f))
    .sort((a, b) => {
      const na = parseInt(a.match(/\d+/)?.[0] || '0', 10);
      const nb = parseInt(b.match(/\d+/)?.[0] || '0', 10);
      return na - nb;
    });

  const outPaths = [];
  for (let i = 0; i < files.length; i++) {
    const inPath = path.join(dir, files[i]);
    const outName = `${p.prefix}_${String(i + 1).padStart(2, '0')}.jpg`;
    const outPath = path.join(OUT_DIR, outName);
    await sharp(inPath)
      .resize({ width: 1920, withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(outPath);
    outPaths.push(`/images/portfolio/${outName}`);
  }
  result[p.id] = { title: p.title, images: outPaths };
  console.log(`${p.title}: ${outPaths.length} images -> ${p.prefix}_*.jpg`);
}

import { writeFileSync } from 'fs';
writeFileSync('scripts/restore-mapping.json', JSON.stringify(result, null, 2));
console.log('\nDone. Mapping saved to scripts/restore-mapping.json');
