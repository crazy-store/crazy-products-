document.querySelectorAll('.product-img').forEach(img => {
  const afterImg = img.getAttribute('data-after');
  if (afterImg) {
    img.addEventListener('mouseenter', () => img.src = afterImg);
    img.addEventListener('mouseleave', () => {
      const before = afterImg.replace('-after', '-before');
      img.src = before.includes('amazon') ? img.dataset.original || before : before;
    });
  }
});
