const id=new URLSearchParams(location.search).get('doc');
const doc=window.portfolioDocuments.find(d=>d.id===id);
const title=document.querySelector('#reader-title'),summary=document.querySelector('#reader-summary'),original=document.querySelector('#original');
function setDetails(item){title.textContent=item.title;summary.textContent=item.summary;original.href=item.file;original.download=item.filename;document.title=item.title+' · 孙翔宇';}
if(doc){setDetails(doc);document.querySelector('#pdf-original').href=doc.file;doc.tags.forEach(t=>{const span=document.createElement('span');span.textContent=t;document.querySelector('#reader-tags').append(span)});let page=1;const image=document.querySelector('#page-image'),select=document.querySelector('#page-select');document.querySelector('#page-total').textContent='/ '+doc.pages.length;doc.pages.forEach((src,i)=>{const option=new Option(String(i+1),String(i+1));select.add(option);const button=document.createElement('button');button.textContent=String(i+1).padStart(2,'0');button.setAttribute('aria-label','第 '+(i+1)+' 页');button.addEventListener('click',()=>render(i+1));document.querySelector('#page-thumbs').append(button)});function render(n){page=Math.max(1,Math.min(n,doc.pages.length));image.src=doc.pages[page-1];image.alt=doc.title+'，第 '+page+' 页，共 '+doc.pages.length+' 页';select.value=String(page);document.querySelector('#previous').disabled=page===1;document.querySelector('#next').disabled=page===doc.pages.length;document.querySelectorAll('#page-thumbs button').forEach((b,i)=>{b.classList.toggle('current',i===page-1);b.setAttribute('aria-current',String(i===page-1))})}document.querySelector('#previous').onclick=()=>render(page-1);document.querySelector('#next').onclick=()=>render(page+1);select.onchange=()=>render(Number(select.value));document.addEventListener('keydown',e=>{if(['SELECT','INPUT','TEXTAREA'].includes(e.target.tagName))return;if(e.key==='ArrowRight'){e.preventDefault();render(page+1)}if(e.key==='ArrowLeft'){e.preventDefault();render(page-1)}});render(1);
} else if (id === 'team-map') {
  setDetails({
    title: '产品人力资源分配 · 结构脑图',
    summary: '业务范围、团队投入、结构诊断与优化机制。',
    file: 'documents/team-map.xmind',
    filename: '灵芽产品人力资源分配（整理版）.xmind'
  });
  document.querySelector('#page-controls').hidden = true;
  document.querySelector('#pdf-original').hidden = true;
  document.querySelector('.reader-hint').textContent = '静态结构预览。完整节点和备注可在 XMind 源文件中查看。';
  const preview = document.querySelector('#page-image');
  preview.src = 'documents/team-map-preview.svg?v=2';
  preview.alt = '灵芽产品人力资源分配结构示意图';
}else{document.querySelector('#reader-error').hidden=false;document.querySelector('#page-controls').hidden=true;document.querySelector('#page-stage').hidden=true;original.hidden=true;document.querySelector('#pdf-original').hidden=true}
