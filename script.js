const LS='himasti_vanilla_v1',DEPTS=['BPH','Kominfo','Humas','Pendidikan','PSDA','Kestari'],STATUS=['Mendatang','Sedang Berjalan','Terselenggara'];
const NAV=[['beranda','Beranda'],['visi','Visi Misi'],['pengurus','Pengurus'],['proker','Proker'],['berita','Berita'],['kontak','Kontak']];
const SC={'Mendatang':'bg-sky-50 text-sky-700 border-sky-200','Sedang Berjalan':'bg-amber-50 text-amber-700 border-amber-300','Terselenggara':'bg-green-50 text-green-700 border-green-300'};
const IC={ig:'M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zM12 8a4 4 0 100 8 4 4 0 000-8z',li:'M4 9h4v11H4zM6 4a2 2 0 100 4 2 2 0 000-4zM10 9h4v2c1-2 6-3 6 2v7h-4v-6c0-3-3-2-3 0v6h-3z',yt:'M3 8a3 3 0 013-3h12a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3zM10 9v6l5-3z',mail:'M3 6h18v12H3zM3 7l9 7 9-7',cal:'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4',team:'M12 4a3 3 0 100 6 3 3 0 000-6zM5 20a7 7 0 0114 0',pin:'M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11zM12 7a3 3 0 100 6 3 3 0 000-6z',eye:'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9a3 3 0 100 6 3 3 0 000-6z',flag:'M5 21V4M5 4h12l-2 4 2 4H5',x:'M6 6l12 12M18 6L6 18',plus:'M12 5v14M5 12h14',edit:'M4 20h4L19 9l-4-4L4 16z',trash:'M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3'};
const ic=(n,s=18)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${IC[n]}"/></svg>`;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const url=u=>/^(https?:|mailto:|#)/.test(u||'')?u:'#';
const imgOk=u=>/^(https?:|data:image\/)/.test(u||'')?u:'';
const fmt=d=>{try{return new Date(d).toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'})}catch(e){return d||''}};
const $=s=>document.querySelector(s);

const DEF={
 set:{sambutan:'Himpunan ini milik seluruh mahasiswa STI. Kami ingin menjadi tempat belajar, berkarya, dan menyampaikan aspirasi dengan cara yang jelas dan bisa dipertanggungjawabkan.',visi:'Menjadikan HIMASTI wadah aspirasi dan pengembangan kompetensi mahasiswa Sistem dan Teknologi Informasi yang aktif, kolaboratif, dan berintegritas.',misi:'Menyalurkan aspirasi mahasiswa STI kepada program studi dan kampus.\nMenyelenggarakan pelatihan dan kelas berbagi skill teknologi secara rutin.\nMembangun kolaborasi dengan himpunan, komunitas, dan industri.\nMendokumentasikan dan mempublikasikan kegiatan melalui media resmi himpunan.\nMenjaga kekeluargaan antar angkatan.',alamat:'Kampus ITEBIS PGRI Dewantara, Jombang, Jawa Timur',ig:'#',yt:'#',li:'#',email:'himasti@example.com'},
 pengurus:[
  {id:1,nama:'Nama Ketua Himpunan',nim:'00000000',jabatan:'Ketua Himpunan',dept:'BPH',role:'ketua',urut:1,foto:'',quote:'Bergerak bersama, berkarya nyata.',ig:'#',li:'#'},
  {id:2,nama:'Nama Wakil Ketua',nim:'00000000',jabatan:'Wakil Ketua Himpunan',dept:'BPH',role:'wakil',urut:2,foto:'',quote:'Kolaborasi dimulai dari mendengar.',ig:'#',li:'#'},
  ...['Kominfo','Humas','Pendidikan','PSDA','Kestari'].map((d,i)=>({id:3+i,nama:'Nama Kadep '+d,nim:'00000000',jabatan:'Kepala Departemen '+d,dept:d,role:'',urut:3+i,foto:'',quote:'',ig:'',li:''}))],
 proker:[
  {id:1,nama:'Pengenalan Himpunan untuk Mahasiswa Baru',tanggal:'2026-09-06',pj:'BPH',status:'Terselenggara',desk:'Perkenalan struktur, program, dan cara bergabung di kegiatan HIMASTI.'},
  {id:2,nama:'Workshop Dasar Web untuk Pemula',tanggal:'2026-11-28',pj:'Pendidikan',status:'Mendatang',desk:'Belajar HTML, CSS, dan JavaScript dari nol bersama pemateri internal.'},
  {id:3,nama:'Pendataan Aspirasi Mahasiswa Semester Ganjil',tanggal:'2026-11-15',pj:'Humas',status:'Sedang Berjalan',desk:'Pengumpulan masukan mahasiswa terkait perkuliahan dan fasilitas.'}],
 berita:[
  {id:1,judul:'Pendaftaran Workshop Dasar Web Dibuka',tanggal:'2026-11-18',penulis:'Kominfo HIMASTI',isi:'Departemen Pendidikan membuka pendaftaran workshop dasar web untuk seluruh mahasiswa STI.\n\nPeserta cukup membawa laptop. Materi mencakup struktur halaman, styling, dan interaksi sederhana. Kuota terbatas, jadi segera daftar melalui admin angkatan masing-masing.'},
  {id:2,judul:'Rekap Kegiatan Pengenalan Himpunan',tanggal:'2026-09-08',penulis:'Kominfo HIMASTI',isi:'Kegiatan pengenalan himpunan berjalan lancar dan diikuti mahasiswa baru dari seluruh kelas.\n\nPengurus memaparkan struktur departemen dan rencana program kerja satu periode ke depan.'}]
};
let D=(()=>{try{const x=JSON.parse(localStorage.getItem(LS));if(x&&x.pengurus&&x.set)return x}catch(e){}return JSON.parse(JSON.stringify(DEF))})();
let admin=false,dept='Semua',adm={tab:'pengurus',edit:false},form={};
const save=()=>{try{localStorage.setItem(LS,JSON.stringify(D));$('#warn').classList.add('hidden')}catch(e){$('#warn').classList.remove('hidden')}};
const sorted=()=>[...D.pengurus].sort((a,b)=>a.urut-b.urut);

/* ---------- Render publik ---------- */
const av=(p,cls)=>{const ini=esc((p.nama||'?').split(' ').slice(0,2).map(w=>w[0]).join(''));const s=imgOk(p.foto);
 return `<div class="${cls} relative overflow-hidden bg-slate-200"><div class="absolute inset-0 flex items-center justify-center font-bold text-2xl text-[#0A4D9A]">${ini}</div>${s?`<img src="${esc(s)}" alt="${esc(p.nama)}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" onerror="this.remove()">`:''}</div>`};
const badge=s=>`<span class="inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-1 rounded-full border w-fit ${SC[s]||''}">${s==='Sedang Berjalan'?'<span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>':''}${esc(s)}</span>`;
const leader=(p,d)=>p?`<div class="st group card rounded-2xl p-[2px] gold-g" style="--d:${d}ms"><div class="glass bg-white/90 rounded-[14px] p-6 flex flex-col sm:flex-row gap-5 h-full">${av(p,'w-32 h-40 rounded-lg shrink-0 ring-2 ring-amber-300 ring-offset-2')}<div class="min-w-0"><div class="text-xs font-semibold text-[#0A93D4] uppercase">${esc(p.jabatan)}</div><div class="text-xl font-bold text-[#0A4D9A]">${esc(p.nama)}</div><div class="text-sm text-slate-500 mb-3">NIM ${esc(p.nim)}</div>${p.quote?`<p class="text-sm italic border-l-4 border-amber-400 pl-3 mb-3">“${esc(p.quote)}”</p>`:''}<div class="flex gap-3 text-[#0A4D9A]">${p.ig?`<a href="${esc(url(p.ig))}" aria-label="Instagram" class="hover:text-[#0A93D4]">${ic('ig')}</a>`:''}${p.li?`<a href="${esc(url(p.li))}" aria-label="LinkedIn" class="hover:text-[#0A93D4]">${ic('li')}</a>`:''}</div></div></div></div>`:'';
function render(){
 const S=D.set,ps=sorted();
 $('#stats').innerHTML=[[ps.length,'Pengurus'],[D.proker.length,'Program kerja'],[D.berita.length,'Berita']].map((x,i)=>`<div class="st glass bg-white/10 border border-white/20 rounded-lg p-4" style="--d:${300+i*100}ms"><div class="text-3xl font-extrabold text-amber-300">${x[0]}</div><div class="text-sm text-blue-100">${x[1]}</div></div>`).join('');
 $('#leaders').innerHTML=leader(ps.find(p=>p.role==='ketua'),0)+leader(ps.find(p=>p.role==='wakil'),150);
 $('#sambutan').innerHTML=S.sambutan?`<div class="glass bg-white/70 border border-white shadow-md rounded-xl p-6"><div class="text-sm font-semibold text-[#0A93D4] mb-1">Kata Sambutan</div><p class="text-slate-700">${esc(S.sambutan)}</p></div>`:'';
 $('#vm').innerHTML=`<div class="st card navy-g text-white rounded-xl p-6 shadow-lg"><div class="w-10 h-10 rounded-lg cy-g flex items-center justify-center mb-3">${ic('eye')}</div><h3 class="font-bold text-amber-300 mb-2">Visi</h3><p>${esc(S.visi)}</p></div>
 <div class="st card glass bg-white/80 border border-slate-200 rounded-xl p-6 shadow-md" style="--d:150ms"><div class="w-10 h-10 rounded-lg cy-g text-white flex items-center justify-center mb-3">${ic('flag')}</div><h3 class="font-bold text-[#0A4D9A] mb-3">Misi</h3><ol class="space-y-3">${S.misi.split('\n').filter(Boolean).map((m,i)=>`<li class="flex gap-3"><span class="w-6 h-6 shrink-0 rounded-full gold-g text-slate-900 text-xs font-bold flex items-center justify-center">${i+1}</span><span>${esc(m)}</span></li>`).join('')}</ol></div>`;
 renderGrid();
 $('#prokerList').innerHTML=D.proker.map((r,i)=>`<div class="st card border rounded-xl p-5 bg-white/90 shadow-sm flex flex-col gap-3" style="--d:${i%3*100}ms">${badge(r.status)}<h3 class="font-bold text-[#0A4D9A]">${esc(r.nama)}</h3><p class="text-sm text-slate-600 flex-1">${esc(r.desk)}</p><div class="text-xs text-slate-500 flex flex-wrap gap-x-4 gap-y-1"><span class="inline-flex items-center gap-1">${ic('cal',14)}${fmt(r.tanggal)}</span><span class="inline-flex items-center gap-1">${ic('team',14)}${esc(r.pj)}</span></div></div>`).join('')||'<p class="text-slate-500 text-sm">Belum ada program kerja.</p>';
 $('#beritaList').innerHTML=[...D.berita].sort((a,b)=>(b.tanggal||'').localeCompare(a.tanggal||'')).map((a,i)=>`<article class="st card bg-white/90 border border-l-4 border-l-[#0A93D4] rounded-xl p-5 shadow-sm" style="--d:${i%2*100}ms"><div class="text-xs text-slate-500">${fmt(a.tanggal)} · ${esc(a.penulis)}</div><h3 class="font-bold text-[#0A4D9A] mt-1">${esc(a.judul)}</h3><p class="text-sm text-slate-600 mt-2" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${esc(a.isi)}</p><button data-act="read" data-id="${a.id}" class="mt-3 text-sm font-semibold text-[#0A93D4]">Baca Selengkapnya →</button></article>`).join('')||'<p class="text-slate-500 text-sm">Belum ada berita.</p>';
 $('#foot').innerHTML=`<div><div class="flex items-center gap-3 mb-3"><img src="assets/logo.png" alt="Logo HIMASTI" width="56" height="56" class="w-14 h-14 rounded-full bg-white object-cover ring-2 ring-amber-300"><div class="font-bold text-lg leading-tight">HIMASTI Dewantara</div></div><p class="text-blue-100 flex gap-2"><span class="mt-0.5">${ic('pin',16)}</span>${esc(S.alamat)}</p></div><div><div class="font-semibold text-amber-300 mb-2">Tautan</div><div class="flex flex-col gap-1">${NAV.map(n=>`<a href="#${n[0]}">${n[1]}</a>`).join('')}</div></div><div><div class="font-semibold text-amber-300 mb-2">Media sosial</div><div class="flex gap-3">${[['ig','Instagram',S.ig],['yt','YouTube',S.yt],['li','LinkedIn',S.li],['mail','Email','mailto:'+S.email]].map(x=>`<a href="${esc(url(x[2]))}" aria-label="${x[1]}" class="hover:text-amber-300 transition">${ic(x[0],22)}</a>`).join('')}</div></div>`;
 observe();
}
function renderGrid(){
 const l=dept==='Semua'?sorted():sorted().filter(p=>p.dept===dept);
 $('#grid').innerHTML=l.map((p,i)=>`<div class="st group card bg-white/90 border rounded-xl overflow-hidden shadow-sm" style="--d:${Math.min(i,12)*50}ms">${av(p,'w-full aspect-[4/5]')}<div class="p-3 border-t-4 border-amber-400"><div class="font-semibold text-sm text-[#0A4D9A]">${esc(p.nama)}</div><div class="text-xs text-slate-500">${esc(p.jabatan)}</div><span class="inline-block mt-2 text-[11px] font-semibold text-white px-2 py-0.5 rounded-full cy-g">${esc(p.dept)}</span></div></div>`).join('')||'<p class="col-span-full text-slate-500 text-sm">Belum ada pengurus di departemen ini.</p>';
}
function initTabs(){
 const t=['Semua',...DEPTS];
 $('#tabs').innerHTML=`<span id="pill" aria-hidden="true" class="absolute top-1 left-1 h-[calc(100%-8px)] w-[96px] rounded-full shadow navy-g transition-transform duration-300 ease-out"></span>`+t.map(x=>`<button data-act="dept" data-d="${x}" class="relative z-10 w-[96px] py-2 rounded-full text-sm font-semibold transition-colors duration-300">${x}</button>`).join('');
 setTab();
 $('#nav').innerHTML=NAV.map(n=>`<a href="#${n[0]}" class="nl">${n[1]}</a>`).join('')+`<button data-act="portal" class="card gold-g text-slate-900 font-semibold px-3 py-2 rounded">Portal Admin</button>`;
 $('#mnav').innerHTML=NAV.map(n=>`<a href="#${n[0]}" data-act="burger">${n[1]}</a>`).join('')+`<button data-act="portal" class="gold-g text-slate-900 font-semibold px-3 py-2 rounded w-fit">Portal Admin</button>`;
}
function setTab(){const t=['Semua',...DEPTS];$('#pill').style.transform=`translateX(${t.indexOf(dept)*96}px)`;document.querySelectorAll('[data-act=dept]').forEach(b=>{const on=b.dataset.d===dept;b.classList.toggle('text-white',on);b.classList.toggle('text-slate-600',!on)})}
let io;function observe(){if(!io)io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll('.rv:not(.in)').forEach(el=>io.observe(el))}

/* ---------- Modal ---------- */
function modal(html,wide,panel){$('#modal').innerHTML=`<div data-overlay class="fd fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm overflow-y-auto p-3 flex items-start md:items-center justify-center"><div id="mbox" class="pop bg-white rounded-xl w-full ${wide?'max-w-2xl':'max-w-md'} my-4 ${panel?'flex flex-col max-h-[90vh]':''}">${html}</div></div>`}
const closeModal=()=>{$('#modal').innerHTML='';adm.edit=false};

/* ---------- Admin ---------- */
const FIELDS={
 pengurus:[{k:'nama',l:'Nama lengkap'},{k:'nim',l:'NIM'},{k:'jabatan',l:'Jabatan'},{k:'dept',l:'Departemen',t:'select',o:DEPTS.map(d=>[d,d])},{k:'role',l:'Status pimpinan',t:'select',o:[['','Bukan pimpinan'],['ketua','Ketua Himpunan'],['wakil','Wakil Ketua Himpunan']]},{k:'urut',l:'Urutan tampil',t:'number'},{k:'foto',l:'Foto',t:'image'},{k:'quote',l:'Quote / kata sambutan',t:'textarea',r:2},{k:'ig',l:'Link Instagram'},{k:'li',l:'Link LinkedIn'}],
 proker:[{k:'nama',l:'Nama proker'},{k:'tanggal',l:'Tanggal',t:'date'},{k:'pj',l:'Divisi penanggung jawab',t:'select',o:DEPTS.map(d=>[d,d])},{k:'status',l:'Status',t:'select',o:STATUS.map(d=>[d,d])},{k:'desk',l:'Deskripsi',t:'textarea'}],
 berita:[{k:'judul',l:'Judul'},{k:'tanggal',l:'Tanggal',t:'date'},{k:'penulis',l:'Penulis'},{k:'isi',l:'Isi berita',t:'textarea',r:8}],
 set:[{k:'sambutan',l:'Kata sambutan Ketua',t:'textarea'},{k:'visi',l:'Visi',t:'textarea'},{k:'misi',l:'Misi (satu poin per baris)',t:'textarea',r:6},{k:'alamat',l:'Alamat kampus'},{k:'ig',l:'Link Instagram'},{k:'yt',l:'Link YouTube'},{k:'li',l:'Link LinkedIn'},{k:'email',l:'Email'}]};
const TABS=[['pengurus','Pengurus'],['proker','Proker'],['berita','Berita'],['set','Pengaturan']];
const TL={pengurus:['nama','jabatan'],proker:['nama','status'],berita:['judul','tanggal']};
const BLANK=()=>({pengurus:{nama:'',nim:'',jabatan:'',dept:'Kominfo',role:'',urut:D.pengurus.length+1,foto:'',quote:'',ig:'',li:''},proker:{nama:'',tanggal:'',pj:'BPH',status:'Mendatang',desk:''},berita:{judul:'',tanggal:new Date().toISOString().slice(0,10),penulis:'Kominfo HIMASTI',isi:''}}[adm.tab]);
function ctrl(f,v){v=v??'';
 if(f.t==='textarea')return `<textarea data-k="${f.k}" rows="${f.r||3}" class="inp">${esc(v)}</textarea>`;
 if(f.t==='select')return `<select data-k="${f.k}" class="inp">${f.o.map(o=>`<option value="${o[0]}" ${o[0]===v?'selected':''}>${o[1]}</option>`).join('')}</select>`;
 if(f.t==='image')return `<input data-k="foto" class="inp mb-2" placeholder="URL foto (https://…)" value="${esc(String(v).startsWith('data:')?'':v)}"><input type="file" accept="image/*" data-file class="text-sm">${imgOk(v)?`<img src="${esc(v)}" alt="" class="h-16 rounded object-cover mt-2">`:''}`;
 return `<input data-k="${f.k}" type="${f.t||'text'}" class="inp" value="${esc(v)}">`}
const fields=(tab,obj)=>FIELDS[tab].map(f=>`<div><label class="text-xs font-semibold text-slate-600">${f.l}</label>${ctrl(f,obj[f.k])}</div>`).join('');
function panelHTML(){
 let body;
 if(adm.tab==='set')body=`<div class="space-y-3">${fields('set',D.set)}<p class="text-xs text-slate-500">Perubahan langsung tampil di halaman publik dan tersimpan otomatis.</p><button data-act="a-tab" data-t="pengurus" class="border px-4 py-2 rounded text-sm font-semibold text-[#0A4D9A]">← Kembali ke Pengurus</button></div>`;
 else if(adm.edit)body=`<div class="space-y-3">${fields(adm.tab,form)}<div class="flex gap-2 pt-2"><button data-act="a-save" class="navy-g text-white px-4 py-2 rounded text-sm font-semibold">Simpan</button><button data-act="a-cancel" class="border px-4 py-2 rounded text-sm">Batal</button></div></div>`;
 else{const items=adm.tab==='pengurus'?sorted():D[adm.tab];const [a,b]=TL[adm.tab];
  body=`<button data-act="a-add" class="gold-g text-slate-900 px-3 py-2 rounded text-sm font-semibold inline-flex items-center gap-2 mb-3">${ic('plus',16)}Tambah</button><div class="divide-y border rounded">${items.map(i=>`<div class="flex items-center gap-3 p-3"><div class="flex-1 min-w-0"><div class="font-semibold text-sm truncate">${esc(i[a])}</div><div class="text-xs text-slate-500 truncate">${esc(i[b])}</div></div><button data-act="a-edit" data-id="${i.id}" aria-label="Edit" class="p-2 text-[#0A4D9A]">${ic('edit',16)}</button><button data-act="a-del" data-id="${i.id}" aria-label="Hapus" class="p-2 text-red-600">${ic('trash',16)}</button></div>`).join('')||'<div class="p-4 text-sm text-slate-500">Belum ada data.</div>'}</div>`}
 return `<div class="flex items-center justify-between navy-g text-white px-5 py-3 rounded-t-xl shrink-0"><div class="font-bold">Dashboard Admin</div><button data-act="close" aria-label="Tutup">${ic('x')}</button></div><div class="flex gap-1 px-4 pt-3 border-b overflow-x-auto shrink-0">${TABS.map(t=>`<button data-act="a-tab" data-t="${t[0]}" class="px-3 py-2 text-sm font-semibold whitespace-nowrap border-b-2 ${adm.tab===t[0]?'border-amber-400 text-[#0A4D9A]':'border-transparent text-slate-500'}">${t[1]}</button>`).join('')}</div><div class="p-5 overflow-y-auto min-h-0 flex-1">${body}</div>`}
const refresh=()=>{const b=$('#mbox');if(b)b.innerHTML=panelHTML()};
const openPanel=()=>{adm.edit=false;modal(panelHTML(),true,true)};
function resize(file){return new Promise(r=>{const fr=new FileReader();fr.onload=()=>{const im=new Image();im.onload=()=>{const c=document.createElement('canvas'),k=Math.min(1,400/Math.max(im.width,im.height));c.width=im.width*k;c.height=im.height*k;c.getContext('2d').drawImage(im,0,0,c.width,c.height);r(c.toDataURL('image/jpeg',.8))};im.src=fr.result};fr.readAsDataURL(file)})}
function doLogin(){if($('#pw').value==='admin123'){admin=true;$('#adminbar').classList.replace('hidden','flex');openPanel()}else $('#pwerr').classList.remove('hidden')}

/* ---------- Event ---------- */
document.addEventListener('click',e=>{
 if(e.target.hasAttribute&&e.target.hasAttribute('data-overlay'))return closeModal();
 const el=e.target.closest('[data-act]');if(!el)return;const a=el.dataset.act,id=+el.dataset.id;
 if(a==='burger'){const m=$('#mnav');m.classList.toggle('hidden');m.classList.toggle('flex')}
 else if(a==='portal'){$('#mnav').classList.add('hidden');admin?openPanel():(modal(`<div class="p-6 space-y-3"><h3 class="font-bold text-[#0A4D9A] text-lg">Login Admin</h3><input id="pw" type="password" class="inp" placeholder="Password" autofocus><div id="pwerr" class="hidden text-sm text-red-600">Password salah.</div><div class="flex gap-2"><button data-act="login" class="navy-g text-white px-4 py-2 rounded font-semibold text-sm">Masuk</button><button data-act="close" class="border px-4 py-2 rounded text-sm">Batal</button></div><p class="text-xs text-slate-500">Login simulasi untuk prototipe. Belum aman untuk produksi.</p></div>`),setTimeout(()=>$('#pw')&&$('#pw').focus(),50))}
 else if(a==='login')doLogin();
 else if(a==='logout'){admin=false;$('#adminbar').classList.replace('flex','hidden')}
 else if(a==='panel')openPanel();
 else if(a==='close')closeModal();
 else if(a==='dept'){dept=el.dataset.d;setTab();renderGrid()}
 else if(a==='read'){const x=D.berita.find(b=>b.id===id);if(x)modal(`<div class="p-6"><div class="flex justify-between items-start gap-3"><h3 class="text-xl font-bold text-[#0A4D9A]">${esc(x.judul)}</h3><button data-act="close" aria-label="Tutup">${ic('x')}</button></div><div class="text-xs text-slate-500 my-2">${fmt(x.tanggal)} · ${esc(x.penulis)}</div><div class="space-y-3 text-slate-700">${esc(x.isi).split('\n').filter(Boolean).map(t=>`<p>${t}</p>`).join('')}</div></div>`,true)}
 else if(a==='a-tab'){adm.tab=el.dataset.t;adm.edit=false;refresh()}
 else if(a==='a-add'){form=BLANK();adm.edit=true;refresh()}
 else if(a==='a-edit'){form={...D[adm.tab].find(i=>i.id===id)};adm.edit=true;refresh()}
 else if(a==='a-cancel'){adm.edit=false;refresh()}
 else if(a==='a-del'){if(confirm('Hapus data ini?')){D[adm.tab]=D[adm.tab].filter(i=>i.id!==id);save();render();refresh()}}
 else if(a==='a-save'){const key=FIELDS[adm.tab][0].k;if(!String(form[key]||'').trim())return alert('Kolom pertama wajib diisi.');
  const rec={...form,id:form.id||Date.now()};let l=D[adm.tab].some(i=>i.id===rec.id)?D[adm.tab].map(i=>i.id===rec.id?rec:i):[...D[adm.tab],rec];
  if(adm.tab==='pengurus'&&rec.role)l=l.map(i=>i.id!==rec.id&&i.role===rec.role?{...i,role:''}:i);
  D[adm.tab]=l;save();render();adm.edit=false;refresh()}
});
document.addEventListener('input',e=>{const k=e.target.dataset&&e.target.dataset.k;if(!k)return;const v=e.target.type==='number'?+e.target.value:e.target.value;
 if(adm.tab==='set'){D.set[k]=v;save();render()}else form[k]=v});
document.addEventListener('change',async e=>{if(e.target.matches('[data-file]')&&e.target.files[0]){form.foto=await resize(e.target.files[0]);refresh()}});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();if(e.key==='Enter'&&e.target.id==='pw')doLogin()});

initTabs();render();
