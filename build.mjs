import {mkdir,copyFile,cp,rm} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});
await mkdir('dist',{recursive:true});
for(const f of ['index.html','styles.css','script.js','favicon.svg']) await copyFile(f,`dist/${f}`);
await cp('assets','dist/assets',{recursive:true});
console.log('Built VisitMade in dist/');
