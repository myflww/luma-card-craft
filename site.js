/* SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0 */
const gallery = document.querySelector('#cards');
const dialog = document.querySelector('#viewer');
const viewerImage = document.querySelector('#viewer-image');
const flip = document.querySelector('#flip');
const stage = document.querySelector('.viewer-stage');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
let current, back = false;
function resetTilt(node) { for (const p of ['--rx','--ry','--mx','--my','--light']) node.style.removeProperty(p); }
function tilt(event, node, limit = 7) {
  if (reduced.matches || event.pointerType === 'touch') return;
  const b = node.getBoundingClientRect(), x = Math.max(0, Math.min(1, (event.clientX-b.left)/b.width)), y = Math.max(0, Math.min(1, (event.clientY-b.top)/b.height));
  node.style.setProperty('--rx', `${(0.5-y)*limit}deg`); node.style.setProperty('--ry', `${(x-0.5)*limit}deg`);
  node.style.setProperty('--mx', `${x*100}%`); node.style.setProperty('--my', `${y*100}%`);
  if (node === viewerImage && document.querySelector('#finish').checked) node.style.setProperty('--light', String(1 + x*.055));
}
function showSide() {
  const asset = back ? current.back : current.front;
  viewerImage.src = asset.file; viewerImage.alt = `${current.name} · ${back ? '卡背' : '正面'}`;
  viewerImage.width = asset.width; viewerImage.height = asset.height;
  flip.textContent = back ? '查看正面 ↻' : '查看卡背 ↻'; document.querySelector('#side-label').textContent = back ? '背面' : '正面'; resetTilt(viewerImage);
}
function openCard(card) {
  current = card; back = false; document.querySelector('#viewer-name').textContent = card.name;
  document.querySelector('#viewer-edition').textContent = `${card.id} / ${card.motif}`;
  showSide(); dialog.showModal(); document.body.classList.add('modal-open');
}
document.querySelector('#close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); resetTilt(viewerImage); viewerImage.removeAttribute('src'); current = undefined; });
dialog.addEventListener('click', e => { if (e.target === dialog) { const b = dialog.getBoundingClientRect(); if (e.clientX < b.left || e.clientX > b.right || e.clientY < b.top || e.clientY > b.bottom) dialog.close(); } });
flip.addEventListener('click', () => { back = !back; showSide(); });
stage.addEventListener('pointermove', e => tilt(e, viewerImage, 12)); stage.addEventListener('pointerleave', () => resetTilt(viewerImage));
document.querySelector('#finish').addEventListener('change', () => resetTilt(viewerImage));
fetch('assets/showcase/cards.json').then(r => { if (!r.ok) throw Error('gallery'); return r.json(); }).then(cards => {
  gallery.replaceChildren();
  cards.forEach((card, i) => {
    const article = document.createElement('article'); article.className = `piece ${card.orientation}`;
    const button = document.createElement('button'); button.className = 'art-button'; button.setAttribute('aria-label', `放大 ${card.name}`);
    const frame = document.createElement('span'); frame.className = 'art-frame'; const img = document.createElement('img');
    img.src = card.front.file; img.alt = `${card.name}：${card.description}`; img.width = card.front.width; img.height = card.front.height; img.loading = 'lazy'; frame.append(img); button.append(frame);
    button.addEventListener('click', () => openCard(card)); button.addEventListener('pointermove', e => tilt(e, frame)); button.addEventListener('pointerleave', () => resetTilt(frame)); button.addEventListener('blur', () => resetTilt(frame));
    const info = document.createElement('div'); info.className = 'piece-info'; const h = document.createElement('h3'); h.textContent = card.name;
    const number = document.createElement('span'); number.className = 'number'; number.textContent = `0${i+1}`; info.append(h, number);
    const note = document.createElement('p'); note.textContent = card.motif; article.append(button, info, note); gallery.append(article);
  });
}).catch(() => { gallery.replaceChildren(); const p = document.createElement('p'); p.textContent = '作品暂时无法加载。请刷新重试，或前往 GitHub 查看图集。'; gallery.append(p); });
