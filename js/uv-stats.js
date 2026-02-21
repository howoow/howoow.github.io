/**
 * 首页 UV 统计 - 使用不蒜子 (busuanzi)
 * 显示在首页右下角
 */

(function() {
  // 只在首页显示
  if (!window.location.pathname || window.location.pathname !== '/') {
    return;
  }

  // 等待 DOM 加载完成
  document.addEventListener('DOMContentLoaded', function() {
    createUVCounter();
    loadUVData();
  });

  // 创建 UV 统计元素
  function createUVCounter() {
    // 检查是否已存在
    if (document.getElementById('uv-stats')) {
      return;
    }

    const uvStats = document.createElement('div');
    uvStats.id = 'uv-stats';
    uvStats.innerHTML = `
      <div class="uv-stats-content">
        <span class="uv-stats-icon">👁️</span>
        <span class="uv-stats-label">访客数：</span>
        <span id="busuanzi_value_site_uv" class="uv-stats-number">-</span>
      </div>
    `;

    document.body.appendChild(uvStats);
  }

  // 加载不蒜子统计脚本
  function loadUVData() {
    // 异步加载不蒜子 JS
    const script = document.createElement('script');
    script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
    script.async = true;
    document.body.appendChild(script);

    // 处理加载失败的情况
    script.onerror = function() {
      const uvNumber = document.getElementById('busuanzi_value_site_uv');
      if (uvNumber) {
        uvNumber.textContent = 'N/A';
      }
    };
  }
})();
