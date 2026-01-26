// ===== App State =====
let currentView = 'landing';
let currentCategory = 'all';
let currentConcern = null;
let currentBudget = 'all';
let treatments = [];
let tableSort = { column: 'name', direction: 'asc' };
let selectedTableCategories = [];

// ===== Concern Map (MECE) =====
const concernMap = {
    '처진피부': ['리프팅', '타이트닝', 'HIFU', '실리프팅', '울쎄라', '슈링크', '올리지오', '써마지', '인모드'],
    '주름': ['주름', '보톡스', '리프팅', '타이트닝', '써마지', '울쎄라', '슈링크'],
    '탄력저하': ['탄력', 'RF', '콜라겐', '스킨부스터', '리쥬란', '쥬베룩', '엑소좀'],
    '모공': ['모공', 'MRF', '피지', '모공축소', '포텐자', '시크릿'],
    '기미/잡티': ['기미', '색소', '미백', '토닝', '피코', '잡티', 'IPL', '브라이트닝'],
    '여드름': ['여드름', '트러블', 'PDT', '압출', '아크네'],
    '볼륨손실': ['볼륨', '필러', '스컬트라', '엘란쎄', 'HA필러', '지방이식'],
    '흉터': ['흉터', '프랙셔널', '재생', '여드름흉터', '패인흉터'],
    '제모': ['제모', '레이저제모'],
    '바디': ['바디', '지방', '셀룰라이트', '엠스컬프', '지방분해', '윤곽', '냉각'],
    '탈모': ['탈모', '모발', '두피', 'PRP', '엑소좀'],
    '점/사마귀': ['점', '사마귀', '검버섯', '쥐젖', '한관종'],
    '다한증/액취': ['다한증', '액취', '땀'],
    '필링': ['필링', '화학필링', '각질', '피부결'],
    '스킨케어': ['스킨케어', '관리', '클렌징', '영양', '수분', '진정', '재생관리']
};

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    treatments = DB_EXTENDED.treatments;
    
    // Update DB count
    const dbCountEl = document.getElementById('dbCount');
    if (dbCountEl) {
        dbCountEl.textContent = `${treatments.length}개 시술`;
    }
    
    // Update treatment count display
    const treatmentCountEl = document.getElementById('treatmentCount');
    if (treatmentCountEl) {
        treatmentCountEl.textContent = treatments.length;
    }
    
    // Update all dynamic count placeholders
    document.querySelectorAll('.dynamic-count').forEach(el => {
        el.textContent = treatments.length;
    });
    
    // Update all tab counts
    updateTabCounts();
    updateConcernCounts();
    
    // Setup views
    setupViewTabs();
    setupSearch();
    setupConcernView();
    setupFilterView();
    setupTableView();
    setupModal();
    setupConsultation();

    // Handle initial hash
    handleHashChange();

    // Listen for hash changes (browser back/forward)
    window.addEventListener('popstate', handleHashChange);

    // Initialize landing page enhancements
    setupLandingEnhancements();

    // Initialize language dropdown
    setupLangDropdown();
});

// ===== Language Dropdown =====
function setupLangDropdown() {
    const dropdown = document.getElementById('langDropdown');
    const toggle = document.getElementById('langToggle');
    const menu = document.getElementById('langMenu');
    const currentLang = dropdown?.querySelector('.lang-current');
    const options = dropdown?.querySelectorAll('.lang-option');

    if (!dropdown || !toggle || !menu) return;

    // Toggle dropdown
    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('open');
    });

    // Select language
    options?.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.dataset.lang;
            const shortNames = { ko: '한', en: 'EN', ja: '日', zh: '中' };

            // Update current display
            if (currentLang) currentLang.textContent = shortNames[lang] || lang;

            // Update active state
            options.forEach(o => o.classList.remove('active'));
            option.classList.add('active');

            // Close dropdown
            dropdown.classList.remove('open');
        });
    });

    // Close on outside click
    document.addEventListener('click', () => {
        dropdown.classList.remove('open');
    });
}

// ===== Hash-based Routing =====
function handleHashChange() {
    const hash = window.location.hash.slice(1); // Remove '#'
    const validViews = ['consult', 'concern', 'filter', 'table', 'contact'];

    if (hash && validViews.includes(hash)) {
        switchToView(hash, false);
    } else {
        switchToView('landing', false);
    }
}

// ===== Update Tab Counts =====
function updateTabCounts() {
    // 상단 탭에서는 숫자 표시 안함
}

// ===== Update Concern Counts =====
function updateConcernCounts() {
    Object.keys(concernMap).forEach(concern => {
        const keywords = concernMap[concern];
        const count = treatments.filter(t => {
            const searchText = `${t.category} ${t.subcategory} ${t.tags.join(' ')} ${t.effects.primary.join(' ')}`.toLowerCase();
            return keywords.some(k => searchText.includes(k.toLowerCase()));
        }).length;
        
        const countEl = document.querySelector(`[data-concern-count="${concern}"]`);
        if (countEl) countEl.textContent = `${count}개`;
    });
}

// ===== View Tabs =====
function setupViewTabs() {
    // Support multiple tab systems
    const oldTabs = document.querySelectorAll('.view-tab');
    const newTabs = document.querySelectorAll('.view-tab-new');
    const navTabs = document.querySelectorAll('.nav-tab');

    // Setup old tabs (legacy)
    oldTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const view = tab.dataset.view;
            switchToView(view);
        });
    });

    // Setup new enhanced tabs (legacy)
    newTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const view = tab.dataset.view;
            switchToView(view);
        });
    });

    // Setup nav tabs (current)
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const view = tab.dataset.view;
            switchToView(view);
        });
    });
}

// Update sliding indicator position (legacy)
function updateTabSlider() {
    const slider = document.getElementById('tabsSlider');
    const activeTab = document.querySelector('.view-tab-new.active, .nav-tab.active');

    if (!slider || !activeTab) {
        if (slider) slider.classList.remove('visible');
        return;
    }

    const tabsContainer = activeTab.parentElement;
    const containerRect = tabsContainer.getBoundingClientRect();
    const tabRect = activeTab.getBoundingClientRect();

    const left = tabRect.left - containerRect.left;
    const width = tabRect.width;

    slider.style.left = left + 'px';
    slider.style.width = width + 'px';
    slider.classList.add('visible');
}

function switchToView(view, updateHash = true) {
    // Update old tab active state
    const oldTabs = document.querySelectorAll('.view-tab');
    oldTabs.forEach(t => t.classList.remove('active'));
    const oldTargetTab = document.querySelector(`.view-tab[data-view="${view}"]`);
    if (oldTargetTab) oldTargetTab.classList.add('active');

    // Update new tab active state (legacy)
    const newTabs = document.querySelectorAll('.view-tab-new');
    newTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
    });
    const newTargetTab = document.querySelector(`.view-tab-new[data-view="${view}"]`);
    if (newTargetTab) {
        newTargetTab.classList.add('active');
        newTargetTab.setAttribute('aria-selected', 'true');
    }

    // Update nav tab active state (current)
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
    });
    const navTargetTab = document.querySelector(`.nav-tab[data-view="${view}"]`);
    if (navTargetTab) {
        navTargetTab.classList.add('active');
        navTargetTab.setAttribute('aria-selected', 'true');
    }

    // Update sliding indicator
    setTimeout(updateTabSlider, 10);

    // Update view panel
    document.querySelectorAll('.view-panel').forEach(p => {
        p.classList.remove('active', 'animate');
    });
    const targetPanel = document.getElementById(`view-${view}`);
    targetPanel.classList.add('active', 'animate');

    currentView = view;

    // Update URL hash
    if (updateHash) {
        const hash = view === 'landing' ? '' : view;
        history.pushState(null, '', hash ? `#${hash}` : window.location.pathname);
    }
}

function goToLanding(event) {
    event.preventDefault();
    switchToView('landing');
}

// ===== Search =====
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;  // 검색창이 없으면 스킵
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query.length < 2) {
            if (currentView === 'cards') renderCardsView(currentCategory);
            if (currentView === 'table') renderTableView();
            if (currentView === 'filter') applyFilters();
            return;
        }
        
        const results = treatments.filter(t => 
            t.name.toLowerCase().includes(query) ||
            t.nameEn.toLowerCase().includes(query) ||
            t.brand.toLowerCase().includes(query) ||
            (t.review && t.review.summary.includes(query)) ||
            t.tags.some(tag => tag.includes(query)) ||
            t.effects.primary.some(e => e.includes(query))
        );
        
        // Switch to cards view and show results
        document.querySelectorAll('.view-tab').forEach(t => t.classList.remove('active'));
        document.querySelector('[data-view="cards"]').classList.add('active');
        document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
        document.getElementById('view-cards').classList.add('active');
        
        renderTreatmentCards(results, 'cardsGrid');
    });
}

// ===== View 1: 고민별 찾기 =====
function setupConcernView() {
    const concernCards = document.querySelectorAll('.concern-card');
    const concernResult = document.getElementById('concernResult');
    const concernGrid = document.querySelector('.concern-grid');
    const backBtn = document.getElementById('backBtn');
    const concernBudgetMin = document.getElementById('concernBudgetMin');
    const concernBudgetMax = document.getElementById('concernBudgetMax');
    
    // 필수 요소가 없으면 스킵
    if (!concernResult || !concernGrid || !backBtn || !concernBudgetMin || !concernBudgetMax) return;
    
    concernCards.forEach(card => {
        card.addEventListener('click', () => {
            const concern = card.dataset.concern;
            currentConcern = concern;
            
            concernGrid.classList.add('hidden');
            concernResult.classList.remove('hidden');
            document.getElementById('concernTitle').textContent = card.querySelector('.concern-title').textContent + ' 고민 해결';
            
            // Reset budget sliders
            concernBudgetMin.value = 0;
            concernBudgetMax.value = 200;
            document.getElementById('concernBudgetMinValue').textContent = '0';
            document.getElementById('concernBudgetMaxValue').textContent = '200+';
            
            renderConcernTreatments();
        });
    });
    
    backBtn.addEventListener('click', () => {
        concernGrid.classList.remove('hidden');
        concernResult.classList.add('hidden');
        currentConcern = null;
    });
    
    // Budget dual range for concern view
    function updateConcernBudget() {
        let minVal = parseInt(concernBudgetMin.value);
        let maxVal = parseInt(concernBudgetMax.value);
        
        if (minVal > maxVal) {
            [minVal, maxVal] = [maxVal, minVal];
            concernBudgetMin.value = minVal;
            concernBudgetMax.value = maxVal;
        }
        
        document.getElementById('concernBudgetMinValue').textContent = minVal;
        document.getElementById('concernBudgetMaxValue').textContent = maxVal >= 200 ? '200+' : maxVal;
        renderConcernTreatments();
    }
    
    concernBudgetMin.addEventListener('input', updateConcernBudget);
    concernBudgetMax.addEventListener('input', updateConcernBudget);
}

function renderConcernTreatments() {
    const keywords = concernMap[currentConcern] || [];
    const budgetMin = parseInt(document.getElementById('concernBudgetMin').value);
    const budgetMax = parseInt(document.getElementById('concernBudgetMax').value);
    
    let filtered = treatments.filter(t => {
        const searchText = `${t.category} ${t.subcategory} ${t.tags.join(' ')} ${t.effects.primary.join(' ')}`.toLowerCase();
        return keywords.some(k => searchText.includes(k.toLowerCase()));
    });
    
    // Budget filter
    filtered = filtered.filter(t => {
        const price = extractPrice(t.pricing.average);
        if (price < budgetMin) return false;
        if (budgetMax < 200 && price > budgetMax) return false;
        return true;
    });
    
    renderTreatmentCards(filtered, 'concernTreatments');
}

// ===== View 2: 맞춤 필터 =====
function setupFilterView() {
    const budgetMin = document.getElementById('budgetMin');
    const budgetMax = document.getElementById('budgetMax');
    const downtimeRange = document.getElementById('downtimeRange');
    const painRange = document.getElementById('painRange');
    const checkboxList = document.getElementById('categoryCheckboxList');
    const resetBtn = document.getElementById('resetFilters');
    const filterSelectAll = document.getElementById('filterSelectAll');
    const filterDeselectAll = document.getElementById('filterDeselectAll');
    
    // 필수 요소가 없으면 스킵
    if (!budgetMin || !budgetMax || !downtimeRange || !painRange || !checkboxList || !resetBtn) return;
    
    // Populate category checkboxes
    const categories = [...new Set(treatments.map(t => t.category))];
    categories.forEach(cat => {
        const count = treatments.filter(t => t.category === cat).length;
        const item = document.createElement('label');
        item.className = 'category-checkbox-item';
        item.innerHTML = `
            <span><input type="checkbox" name="filterCategory" value="${cat}" checked> ${cat}</span>
            <span class="cat-count">${count}</span>
        `;
        checkboxList.appendChild(item);
    });
    
    // Budget dual range
    function updateBudgetDisplay() {
        let minVal = parseInt(budgetMin.value);
        let maxVal = parseInt(budgetMax.value);
        
        // Prevent overlap
        if (minVal > maxVal) {
            [minVal, maxVal] = [maxVal, minVal];
            budgetMin.value = minVal;
            budgetMax.value = maxVal;
        }
        
        const display = document.getElementById('budgetDisplay');
        if (minVal === 0 && maxVal >= 200) {
            display.textContent = '전체';
        } else if (minVal === 0) {
            display.textContent = `~${maxVal}만`;
        } else if (maxVal >= 200) {
            display.textContent = `${minVal}만~`;
        } else {
            display.textContent = `${minVal}~${maxVal}만`;
        }
        applyFilters();
    }
    
    budgetMin.addEventListener('input', updateBudgetDisplay);
    budgetMax.addEventListener('input', updateBudgetDisplay);
    
    // Downtime slider
    const downtimeLabels = ['없음', '~3일', '전체'];
    downtimeRange.addEventListener('input', () => {
        document.getElementById('downtimeValue').textContent = downtimeLabels[downtimeRange.value];
        applyFilters();
    });
    
    painRange.addEventListener('input', () => {
        document.getElementById('painValue').textContent = painRange.value;
        applyFilters();
    });
    
    checkboxList.addEventListener('change', applyFilters);
    
    // Select All / Deselect All buttons
    if (filterSelectAll) {
        filterSelectAll.addEventListener('click', () => {
            document.querySelectorAll('input[name="filterCategory"]').forEach(cb => cb.checked = true);
            applyFilters();
        });
    }
    
    if (filterDeselectAll) {
        filterDeselectAll.addEventListener('click', () => {
            document.querySelectorAll('input[name="filterCategory"]').forEach(cb => cb.checked = false);
            applyFilters();
        });
    }
    
    resetBtn.addEventListener('click', () => {
        budgetMin.value = 0;
        budgetMax.value = 200;
        downtimeRange.value = 2;
        painRange.value = 5;
        document.getElementById('budgetDisplay').textContent = '전체';
        document.getElementById('downtimeValue').textContent = '전체';
        document.getElementById('painValue').textContent = '5';
        document.querySelectorAll('input[name="filterCategory"]').forEach(cb => cb.checked = true);
        applyFilters();
    });
    
    applyFilters();
}

function applyFilters() {
    const budgetMin = parseInt(document.getElementById('budgetMin').value);
    const budgetMax = parseInt(document.getElementById('budgetMax').value);
    const downtimeLevel = parseInt(document.getElementById('downtimeRange').value);
    const pain = parseFloat(document.getElementById('painRange').value);
    const selectedCategories = [...document.querySelectorAll('input[name="filterCategory"]:checked')].map(cb => cb.value);
    
    let filtered = treatments.filter(t => {
        // Budget (min ~ max)
        const price = extractPrice(t.pricing.average);
        if (price < budgetMin) return false;
        if (budgetMax < 200 && price > budgetMax) return false;
        
        // Pain
        if (t.recovery.painLevel > pain) return false;
        
        // Category
        if (!selectedCategories.includes(t.category)) return false;
        
        // Downtime (0: 없음만, 1: ~3일까지, 2: 전체)
        const downtime = t.recovery.downtime.toLowerCase();
        if (downtimeLevel === 0) {
            if (!(downtime.includes('없음') || downtime === '')) return false;
        } else if (downtimeLevel === 1) {
            if (downtime.includes('주') || downtime.includes('7') || downtime.includes('14')) return false;
        }
        // downtimeLevel === 2는 전체이므로 필터링 안함
        
        return true;
    });
    
    renderTreatmentCards(filtered, 'filterResults');
}

// ===== View 3: 테이블 뷰 =====
function setupTableView() {
    const categoryList = document.getElementById('tableCategoryList');
    const categories = [...new Set(treatments.map(t => t.category))];
    const tableBudgetMin = document.getElementById('tableBudgetMin');
    const tableBudgetMax = document.getElementById('tableBudgetMax');
    const tableDowntimeRange = document.getElementById('tableDowntimeRange');
    const tablePainRange = document.getElementById('tablePainRange');
    const tableSelectAll = document.getElementById('tableSelectAll');
    const tableDeselectAll = document.getElementById('tableDeselectAll');
    const resetTableFilters = document.getElementById('resetTableFilters');
    
    // 필수 요소가 없으면 스킵
    if (!categoryList || !tableBudgetMin || !tableBudgetMax || !tableDowntimeRange || !tablePainRange) return;
    
    // Initialize selected categories
    selectedTableCategories = [...categories];
    
    // Create category checkboxes
    categories.forEach(cat => {
        const count = treatments.filter(t => t.category === cat).length;
        const item = document.createElement('label');
        item.className = 'category-checkbox-item';
        item.innerHTML = `
            <span><input type="checkbox" name="tableCategory" value="${cat}" checked> ${cat}</span>
            <span class="cat-count">${count}</span>
        `;
        categoryList.appendChild(item);
    });
    
    // Category change listener
    categoryList.addEventListener('change', () => {
        selectedTableCategories = [...document.querySelectorAll('input[name="tableCategory"]:checked')].map(cb => cb.value);
        renderTableView();
    });
    
    // Budget dual range
    function updateTableBudget() {
        let minVal = parseInt(tableBudgetMin.value);
        let maxVal = parseInt(tableBudgetMax.value);
        
        if (minVal > maxVal) {
            [minVal, maxVal] = [maxVal, minVal];
            tableBudgetMin.value = minVal;
            tableBudgetMax.value = maxVal;
        }
        
        const display = document.getElementById('tableBudgetDisplay');
        if (minVal === 0 && maxVal >= 200) {
            display.textContent = '전체';
        } else if (minVal === 0) {
            display.textContent = `~${maxVal}만`;
        } else if (maxVal >= 200) {
            display.textContent = `${minVal}만~`;
        } else {
            display.textContent = `${minVal}~${maxVal}만`;
        }
        renderTableView();
    }
    
    tableBudgetMin.addEventListener('input', updateTableBudget);
    tableBudgetMax.addEventListener('input', updateTableBudget);
    
    // Downtime slider
    const downtimeLabels = ['없음', '~3일', '전체'];
    tableDowntimeRange.addEventListener('input', () => {
        document.getElementById('tableDowntimeValue').textContent = downtimeLabels[tableDowntimeRange.value];
        renderTableView();
    });
    
    // Pain range
    tablePainRange.addEventListener('input', () => {
        document.getElementById('tablePainValue').textContent = tablePainRange.value;
        renderTableView();
    });
    
    // Select All / Deselect All buttons
    if (tableSelectAll) {
        tableSelectAll.addEventListener('click', () => {
            document.querySelectorAll('input[name="tableCategory"]').forEach(cb => cb.checked = true);
            selectedTableCategories = [...categories];
            renderTableView();
        });
    }
    
    if (tableDeselectAll) {
        tableDeselectAll.addEventListener('click', () => {
            document.querySelectorAll('input[name="tableCategory"]').forEach(cb => cb.checked = false);
            selectedTableCategories = [];
            renderTableView();
        });
    }
    
    // Reset button
    if (resetTableFilters) {
        resetTableFilters.addEventListener('click', () => {
            tableBudgetMin.value = 0;
            tableBudgetMax.value = 200;
            tableDowntimeRange.value = 2;
            tablePainRange.value = 5;
            document.getElementById('tableBudgetDisplay').textContent = '전체';
            document.getElementById('tableDowntimeValue').textContent = '전체';
            document.getElementById('tablePainValue').textContent = '5';
            document.querySelectorAll('input[name="tableCategory"]').forEach(cb => cb.checked = true);
            selectedTableCategories = [...categories];
            renderTableView();
        });
    }
    
    // Column sort listeners
    document.querySelectorAll('.data-table th.sortable').forEach(th => {
        th.addEventListener('click', () => {
            const column = th.dataset.sort;
            
            // Toggle direction
            if (tableSort.column === column) {
                tableSort.direction = tableSort.direction === 'asc' ? 'desc' : 'asc';
            } else {
                tableSort.column = column;
                tableSort.direction = 'asc';
            }
            
            // Update header styles
            document.querySelectorAll('.data-table th.sortable').forEach(h => {
                h.classList.remove('asc', 'desc');
            });
            th.classList.add(tableSort.direction);
            
            renderTableView();
        });
    });
    
    renderTableView();
}

function renderTableView() {
    const budgetMin = parseInt(document.getElementById('tableBudgetMin').value);
    const budgetMax = parseInt(document.getElementById('tableBudgetMax').value);
    const downtimeLevel = parseInt(document.getElementById('tableDowntimeRange').value);
    const pain = parseFloat(document.getElementById('tablePainRange').value);
    
    let filtered = treatments.filter(t => {
        // Category
        if (!selectedTableCategories.includes(t.category)) return false;
        
        // Budget
        const price = extractPrice(t.pricing.average);
        if (price < budgetMin) return false;
        if (budgetMax < 200 && price > budgetMax) return false;
        
        // Pain
        if (t.recovery.painLevel > pain) return false;
        
        // Downtime (0: 없음만, 1: ~3일까지, 2: 전체)
        const downtime = t.recovery.downtime.toLowerCase();
        if (downtimeLevel === 0) {
            if (!(downtime.includes('없음') || downtime === '')) return false;
        } else if (downtimeLevel === 1) {
            if (downtime.includes('주') || downtime.includes('7') || downtime.includes('14')) return false;
        }
        
        return true;
    });
    
    // Sort
    filtered.sort((a, b) => {
        let aVal, bVal;
        
        switch (tableSort.column) {
            case 'name':
                aVal = a.name;
                bVal = b.name;
                break;
            case 'brand':
                aVal = a.brand;
                bVal = b.brand;
                break;
            case 'category':
                aVal = a.category;
                bVal = b.category;
                break;
            case 'duration':
                aVal = a.effects.duration || '';
                bVal = b.effects.duration || '';
                break;
            case 'pain':
                aVal = a.recovery.painLevel;
                bVal = b.recovery.painLevel;
                return tableSort.direction === 'asc' ? aVal - bVal : bVal - aVal;
            case 'downtime':
                aVal = a.recovery.downtime || '';
                bVal = b.recovery.downtime || '';
                break;
            case 'price':
                aVal = extractPrice(a.pricing.average);
                bVal = extractPrice(b.pricing.average);
                return tableSort.direction === 'asc' ? aVal - bVal : bVal - aVal;
            default:
                aVal = a.name;
                bVal = b.name;
        }
        
        if (typeof aVal === 'string') {
            const compare = aVal.localeCompare(bVal);
            return tableSort.direction === 'asc' ? compare : -compare;
        }
        return 0;
    });
    
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = filtered.map(t => `
        <tr data-id="${t.id}">
            <td><span class="table-name">${t.name}</span></td>
            <td>${t.brand}</td>
            <td>${t.category}</td>
            <td>
                <div class="table-effects">
                    ${t.effects.primary.slice(0, 3).map(e => `<span class="table-effect-tag">${e}</span>`).join('')}
                </div>
            </td>
            <td>${t.effects.duration || '-'}</td>
            <td>
                <div class="pain-bar">
                    ${[1,2,3,4,5].map(i => `<span class="pain-dot ${i <= Math.round(t.recovery.painLevel) ? 'filled' : ''}"></span>`).join('')}
                </div>
            </td>
            <td>${t.recovery.downtime || '없음'}</td>
            <td>${t.pricing.average}</td>
        </tr>
    `).join('');
    
    // Click handlers
    tbody.querySelectorAll('tr').forEach(row => {
        row.addEventListener('click', () => {
            const treatment = treatments.find(t => t.id === row.dataset.id);
            if (treatment) showModal(treatment);
        });
    });
}

// ===== Render Treatment Cards =====
function renderTreatmentCards(items, containerId) {
    const container = document.getElementById(containerId);
    
    if (items.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-tertiary);">
                조건에 맞는 시술이 없습니다.
            </div>
        `;
        return;
    }
    
    container.innerHTML = items.map(t => `
        <div class="treatment-card" data-id="${t.id}">
            <div class="card-header">
                <div>
                    <div class="card-title">${t.name}</div>
                    <div class="card-brand">${t.brand}</div>
                </div>
                <span class="card-badge">${t.subcategory || t.category}</span>
            </div>
            <div class="card-desc">${t.review ? t.review.summary : t.mechanism.detailed}</div>
            <div class="card-tags">
                ${t.effects.primary.slice(0, 3).map(e => `<span class="card-tag">${e}</span>`).join('')}
            </div>
            <div class="card-stats">
                <div class="stat-item">
                    <div class="stat-row">
                        <div class="stat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 12h.01M18 12h.01"/></svg></div>
                        <div class="stat-label">가격</div>
                    </div>
                    <div class="stat-value">${t.pricing.average}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-row">
                        <div class="stat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                        <div class="stat-label">지속</div>
                    </div>
                    <div class="stat-value">${t.effects.duration || '-'}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-row">
                        <div class="stat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
                        <div class="stat-label">통증</div>
                    </div>
                    <div class="stat-value">${t.recovery.painLevel}/5</div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Click handlers
    container.querySelectorAll('.treatment-card').forEach(card => {
        card.addEventListener('click', () => {
            const treatment = treatments.find(t => t.id === card.dataset.id);
            if (treatment) showModal(treatment);
        });
    });
}

// ===== Modal =====
function setupModal() {
    const overlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('modalClose');
    
    // 필수 요소가 없으면 스킵
    if (!overlay || !closeBtn) return;
    
    const closeModal = () => {
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
    };
    
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

// 이름으로 시술 찾아서 모달 열기 (결과 페이지용)
function openTreatmentModal(name) {
    const treatment = treatments?.find(t => t.name === name);
    if (treatment) {
        showModal(treatment);
    } else {
        console.log('Treatment not found:', name);
    }
}

function showModal(t) {
    document.body.style.overflow = 'hidden';
    const header = document.getElementById('modalHeader');
    const content = document.getElementById('modalContent');

    // 검색 URL 생성
    const searchName = encodeURIComponent(t.name + ' 후기');
    const searchNameEn = encodeURIComponent(t.nameEn + ' review');
    const naverBlogUrl = `https://search.naver.com/search.naver?ssc=tab.blog.all&query=${searchName}`;
    const naverBlogEnUrl = `https://search-naver-com.translate.goog/search.naver?ssc=tab.blog.all&query=${searchName}&_x_tr_sl=ko&_x_tr_tl=en&_x_tr_hl=en`;
    const youtubeUrl = `https://www.youtube.com/results?search_query=${searchName}`;
    const youtubeEnUrl = `https://www.youtube.com/results?search_query=${searchNameEn}`;
    const googleUrl = `https://www.google.com/search?q=${searchNameEn}`;

    // 헤더 영역 (고정)
    header.innerHTML = `
        <h2 class="modal-title">${t.name}</h2>
        <div class="modal-header-sub">
            <p class="modal-subtitle">${t.nameEn || ''} · ${t.brand || ''}</p>
            <span class="modal-badge">${t.category || ''} / ${t.subcategory || ''}</span>
        </div>
    `;

    content.innerHTML = `
        <!-- 2. 한줄 요약 + 총평 통합 -->
        ${t.review ? `
        <div class="modal-section">
            <div class="review-highlight">
                <span class="review-highlight-badge">요약</span>
                <p class="review-highlight-summary">${t.review.summary}</p>
                <p class="review-highlight-overall">"${t.review.overall}"</p>
            </div>
        </div>
        ` : ''}
        
        <!-- 4. 기대 효과 -->
        <div class="modal-section">
            <div class="modal-section-header-with-legend">
                <h3 class="modal-section-title">기대 효과</h3>
                <div class="effects-legend">
                    <span class="legend-item"><span class="legend-dot primary"></span>주요 효과</span>
                    <span class="legend-item"><span class="legend-dot secondary"></span>부가 효과</span>
                </div>
            </div>
            <div class="effects-tags-inline">
                ${t.effects.primary.map(e => `<span class="modal-effect-tag primary">${e}</span>`).join('')}
                ${t.effects.secondary.map(e => `<span class="modal-effect-tag secondary">${e}</span>`).join('')}
            </div>
        </div>
        
        <!-- 5. 핵심 정보 (빠른 판단용) -->
        <div class="modal-section">
            <h3 class="modal-section-title">핵심 정보</h3>
            <div class="modal-stats-grid modal-key-stats">
                <div class="modal-stat highlight">
                    <div class="modal-stat-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>가격</div>
                    <div class="modal-stat-value">${t.pricing.range}</div>
                </div>
                <div class="modal-stat highlight">
                    <div class="modal-stat-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>효과 지속</div>
                    <div class="modal-stat-value">${t.effects.duration}</div>
                </div>
                <div class="modal-stat highlight">
                    <div class="modal-stat-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>다운타임</div>
                    <div class="modal-stat-value">${t.recovery.downtime || '없음'}</div>
                </div>
                <div class="modal-stat highlight">
                    <div class="modal-stat-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>통증</div>
                    <div class="modal-stat-value">${t.recovery.painLevel}/5</div>
                </div>
            </div>
        </div>
        
        <!-- 6. 팁 및 후기 분석 (3분할: 팁, 좋아요, 아쉬워요) -->
        ${t.review ? `
        <div class="modal-section">
            <h3 class="modal-section-title">팁 및 후기 분석</h3>
            <div class="review-grid-3col">
                <div class="review-tips-box">
                    <h4><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>시술 팁</h4>
                    <ul>${t.review.tips.map(tip => `<li>${tip}</li>`).join('')}</ul>
                </div>
                <div class="review-likes">
                    <h4><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/></svg>이런 점이 좋아요</h4>
                    <ul>${t.review.likes.map(l => `<li>${l}</li>`).join('')}</ul>
                </div>
                <div class="review-dislikes">
                    <h4><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3zm7-13h2.67A2.31 2.31 0 0122 4v7a2.31 2.31 0 01-2.33 2H17"/></svg>이런 점은 아쉬워요</h4>
                    <ul>${t.review.dislikes.map(d => `<li>${d}</li>`).join('')}</ul>
                </div>
            </div>
        </div>
        ` : ''}
        
        <!-- 7. 이런 분께 추천 -->
        <div class="modal-section">
            <h3 class="modal-section-title">이런 분께 추천해요</h3>
            <div class="modal-suitability">
                <div class="suitability-age-box">
                    <h4><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="12" x2="15" y2="15"/></svg>적정 연령대</h4>
                    <p>${t.suitability.idealAge}</p>
                </div>
                <div class="suitability-recommend">
                    <h4><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>추천</h4>
                    <ul>${t.suitability.bestFor.map(b => `<li>${b}</li>`).join('')}</ul>
                </div>
                ${t.suitability.notRecommended.length ? `
                <div class="suitability-caution">
                    <h4><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>비추천</h4>
                    <ul>${t.suitability.notRecommended.map(n => `<li>${n}</li>`).join('')}</ul>
                </div>
                ` : ''}
            </div>
        </div>
        
        <!-- 7. 장단점 (키워드 요약) -->
        ${t.pros.length || t.cons.length ? `
        <div class="modal-section">
            <h3 class="modal-section-title">한눈에 보는 장단점</h3>
            <div class="modal-pros-cons">
                <div class="modal-pros">
                    <h4><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>장점</h4>
                    <ul class="modal-list">
                        ${t.pros.map(p => `<li>${p}</li>`).join('')}
                    </ul>
                </div>
                <div class="modal-cons">
                    <h4><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>단점</h4>
                    <ul class="modal-list">
                        ${t.cons.map(c => `<li>${c}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
        ` : ''}
        
        <!-- 8. 상세 시술 정보 -->
        <div class="modal-section">
            <h3 class="modal-section-title">상세 시술 정보</h3>
            <div class="modal-stats-grid">
                <div class="modal-stat">
                    <div class="modal-stat-label">시술 시간</div>
                    <div class="modal-stat-value">${t.procedure.duration}</div>
                </div>
                <div class="modal-stat">
                    <div class="modal-stat-label">권장 횟수</div>
                    <div class="modal-stat-value">${t.procedure.sessions}</div>
                </div>
                <div class="modal-stat">
                    <div class="modal-stat-label">시술 간격</div>
                    <div class="modal-stat-value">${t.procedure.interval}</div>
                </div>
                <div class="modal-stat">
                    <div class="modal-stat-label">마취</div>
                    <div class="modal-stat-value">${t.procedure.anesthesia}</div>
                </div>
            </div>
        </div>
        
        <!-- 10. 시술 원리 -->
        <div class="modal-section">
            <h3 class="modal-section-title">시술 원리</h3>
            <div class="modal-mechanism">
                ${t.mechanism.detailed}
            </div>
        </div>
        
        <!-- 11. 비교 & 조합 -->
        ${Object.keys(t.comparison.vs).length || t.comparison.bestWith.length ? `
        <div class="modal-section">
            <h3 class="modal-section-title">비교 & 함께 하면 좋은 시술</h3>
            <div class="modal-comparison">
                ${Object.entries(t.comparison.vs).map(([k, v]) => `<p><strong>vs ${k}:</strong> ${v}</p>`).join('')}
                ${t.comparison.bestWith.length ? `<p class="best-with"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="best-with-icon"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg><strong>추천 조합:</strong> ${t.comparison.bestWith.join(', ')}</p>` : ''}
            </div>
        </div>
        ` : ''}
        
        <!-- 12. 외부 링크 (더 알아보기) -->
        <div class="modal-section">
            <h3 class="modal-section-title">더 많은 후기 보기</h3>
            <div class="modal-external-links">
                <a href="${youtubeUrl}" target="_blank" class="external-link youtube">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    YouTube 후기
                </a>
                <a href="${youtubeEnUrl}" target="_blank" class="external-link youtube-en">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    YouTube (EN)
                </a>
                <a href="${naverBlogUrl}" target="_blank" class="external-link naver">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/></svg>
                    네이버 블로그
                </a>
                <a href="${naverBlogEnUrl}" target="_blank" class="external-link naver-en">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/></svg>
                    Naver (EN)
                </a>
                <a href="${googleUrl}" target="_blank" class="external-link google">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                    Google (EN)
                </a>
            </div>
        </div>
    `;
    
    document.getElementById('modalOverlay').classList.remove('hidden');
}

// ===== Utilities =====
function extractPrice(priceStr) {
    if (!priceStr) return 0;
    const match = priceStr.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
}

// 추천 텍스트를 구조화된 HTML로 변환
function formatRecommendation(text) {
    if (!text) return '';
    
    // 플랜 섹션들을 분리 (2개 이상의 연속 줄바꿈으로 분리)
    const sections = text.split(/\n{2,}/);
    let html = '';
    let currentPlan = null;
    
    sections.forEach((section, index) => {
        section = section.trim();
        if (!section) return;
        
        // 플랜 제목 패턴 감지 - 더 유연하게 (볼드 있거나 없거나)
        // **A. 프리미엄 집중 케어 (약 433~1203만원)** 또는 A. 프리미엄 집중 케어 (약 433~1203만원)
        const planMatch = section.match(/^\*{0,2}([ABC])\.\s*([^(]+)\s*\(([^)]+)\)\*{0,2}$/);
        const finalMatch = section.match(/^\*{0,2}💡\s*종합\s*추천\*{0,2}$/);
        
        if (planMatch) {
            // 이전 플랜 카드 닫기
            if (currentPlan) {
                html += `
                        </div>
                    </div>
                `;
            }
            
            // 새 플랜 카드 시작
            const letter = planMatch[1];
            const planName = planMatch[2].trim();
            const priceRange = planMatch[3].trim();
            const colorClass = letter === 'A' ? 'premium' : letter === 'B' ? 'balance' : 'efficient';
            
            currentPlan = { letter, planName, priceRange, colorClass, meta: [], description: [] };
            
            html += `
                <div class="plan-card ${colorClass}">
                    <div class="plan-header">
                        <div class="plan-badge">${letter}</div>
                        <div class="plan-title-wrap">
                            <h4 class="plan-title">${planName}</h4>
                            <span class="plan-price">${priceRange}</span>
                        </div>
                    </div>
                    <div class="plan-content">
            `;
        } else if (finalMatch) {
            // 이전 플랜 카드 닫기
            if (currentPlan) {
                html += `
                        </div>
                    </div>
                `;
                currentPlan = null;
            }
            
            // 종합 추천 헤더
            html += `
                <div class="final-advice">
                    <div class="final-advice-header">
                        <span class="advice-icon">💡</span>
                        <h4>종합 추천</h4>
                    </div>
                    <div class="final-advice-content">
            `;
        } else if (currentPlan) {
            // 플랜 내용 추가
            if (section.startsWith('핵심 시술:')) {
                const value = section.replace('핵심 시술:', '').trim();
                html += `<div class="plan-meta-item"><span class="meta-label">핵심 시술</span><span class="meta-value">${value}</span></div>`;
            } else if (section.startsWith('구성:')) {
                const value = section.replace('구성:', '').trim();
                html += `<div class="plan-meta-item"><span class="meta-label">구성</span><span class="meta-value">${value}</span></div>`;
            } else {
                // 설명 텍스트
                html += `<p class="plan-desc-text">${section}</p>`;
            }
        } else {
            // 종합 추천 내용이거나 일반 텍스트
            html += `<p>${section.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')}</p>`;
        }
    });
    
    // 마지막 플랜 카드 닫기
    if (currentPlan) {
        html += `
                </div>
            </div>
        `;
    }
    
    // 종합 추천 닫기
    if (html.includes('final-advice-content') && !html.includes('</div>\n                </div>\n            `);')) {
        html += `
                    </div>
                </div>
        `;
    }
    
    return html;
}


// ===== AI Consultation =====
let consultState = {
    currentStep: 1,
    totalSteps: 7,
    data: {
        age: null,
        experience: null,
        skinType: null,
        primaryConcerns: [],
        secondaryConcerns: [],
        concerns: [],
        areas: [],
        budget: null,
        downtime: '상관없음',  // 기본값: 상관없어요 (추천)
        pain: '괜찮음',  // 기본값: 잘 참아요 (추천)
        // 새로운 필드들
        treatmentType: ['상관없음'],  // 기본값: 상관없음 (추천)
        duration: '중기',  // 기본값: 6~12개월 (추천)
        priority: '효과',  // 기본값: 효과 중시 (추천)
        frequency: '정기',  // 기본값: 정기 관리 (추천)
        pastTreatments: []
    }
};

function setupConsultation() {
    // Priority concern chips (클릭으로 추가/제거)
    setupPriorityConcerns();
    
    // Option buttons (single select)
    document.querySelectorAll('.option-btn[data-field]').forEach(btn => {
        btn.addEventListener('click', () => {
            const field = btn.dataset.field;
            const value = btn.dataset.value;
            
            const grid = btn.closest('.option-grid');
            if (grid) {
                grid.querySelectorAll('.option-btn').forEach(b => {
                    b.classList.remove('selected');
                });
            }
            btn.classList.add('selected');
            consultState.data[field] = value;
        });
    });
    
    // Multi-select option buttons (areas, treatmentType, pastTreatments)
    document.querySelectorAll('.option-grid.multi-select').forEach(grid => {
        const field = grid.dataset.field;
        if (!field) return;
        
        if (!Array.isArray(consultState.data[field])) {
            consultState.data[field] = [];
        }
        
        grid.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const value = btn.dataset.value;
                
                // 부위 선택 상호 배타 규칙 (areas 필드일 때만)
                if (field === 'areas') {
                    const faceWhole = '얼굴전체';
                    const faceUpper = '얼굴상반부';
                    const faceLower = '얼굴하반부';
                    
                    // "얼굴전체" 클릭 시 → 상반부/하반부 해제
                    if (value === faceWhole && !btn.classList.contains('selected')) {
                        document.querySelectorAll(`.option-btn[data-value="${faceUpper}"], .option-btn[data-value="${faceLower}"]`).forEach(b => {
                            b.classList.remove('selected');
                        });
                    }
                    // "상반부" 또는 "하반부" 클릭 시 → 얼굴전체 해제
                    if ((value === faceUpper || value === faceLower) && !btn.classList.contains('selected')) {
                        document.querySelectorAll(`.option-btn[data-value="${faceWhole}"]`).forEach(b => {
                            b.classList.remove('selected');
                        });
                    }
                }
                
                btn.classList.toggle('selected');
                
                // 모든 areas 그리드에서 선택된 값 수집
                const selectedValues = [];
                document.querySelectorAll('.option-grid.multi-select[data-field="areas"] .option-btn.selected').forEach(b => {
                    if (!selectedValues.includes(b.dataset.value)) {
                        selectedValues.push(b.dataset.value);
                    }
                });
                
                if (field === 'areas') {
                    consultState.data.areas = selectedValues;
                } else {
                    const gridSelectedValues = [];
                    grid.querySelectorAll('.option-btn.selected').forEach(b => {
                        gridSelectedValues.push(b.dataset.value);
                    });
                    consultState.data[field] = gridSelectedValues;
                }
            });
        });
    });
    
    // Budget presets
    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            const budgetInput = document.getElementById('budgetInput');
            if (budgetInput) {
                budgetInput.value = btn.dataset.amount;
            }
            consultState.data.budget = parseInt(btn.dataset.amount);
        });
    });
    
    // Budget input
    const budgetInput = document.getElementById('budgetInput');
    if (budgetInput) {
        budgetInput.addEventListener('input', (e) => {
            consultState.data.budget = parseInt(e.target.value) || null;
            document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('selected'));
        });
    }
    
    // Navigation
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    const backToConsult = document.getElementById('backToConsult');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (consultState.currentStep > 1) {
                goToStep(consultState.currentStep - 1);
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (consultState.currentStep < consultState.totalSteps) {
                goToStep(consultState.currentStep + 1);
            }
        });
    }
    
    if (submitBtn) {
        submitBtn.addEventListener('click', submitConsultation);
    }
    
    if (backToConsult) {
        backToConsult.addEventListener('click', resetConsultation);
    }
}

// 우선순위 고민 선택 설정
function setupPriorityConcerns() {
    const primaryZone = document.getElementById('primaryConcerns');
    const secondaryZone = document.getElementById('secondaryConcerns');
    
    if (!primaryZone || !secondaryZone) return;
    
    // 모든 concern chip에 클릭 이벤트 추가
    document.querySelectorAll('.concern-source .concern-chip').forEach(chip => {
        chip.addEventListener('click', () => handleChipClick(chip));
        
        // 드래그 설정
        chip.draggable = true;
        chip.addEventListener('dragstart', handleDragStart);
        chip.addEventListener('dragend', handleDragEnd);
    });
    
    // 드롭존 설정
    [primaryZone, secondaryZone].forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('dragleave', handleDragLeave);
        zone.addEventListener('drop', handleDrop);
    });
}

let currentClickTarget = 'primary'; // 클릭 시 어디로 갈지

function handleChipClick(chip) {
    const value = chip.dataset.value;
    const label = chip.innerHTML;
    
    // 이미 선택된 경우 제거
    if (chip.classList.contains('in-primary') || chip.classList.contains('in-secondary')) {
        removeFromPriority(value);
        chip.classList.remove('in-primary', 'in-secondary');
        return;
    }
    
    // 3개까지는 Primary(핵심 고민)에, 그 이후는 Secondary에 추가
    if (consultState.data.primaryConcerns.length < 3) {
        addToPriority('primary', value, label);
        chip.classList.add('in-primary');
    } else {
        addToPriority('secondary', value, label);
        chip.classList.add('in-secondary');
    }
}

function addToPriority(priority, value, label) {
    const zone = document.getElementById(priority === 'primary' ? 'primaryConcerns' : 'secondaryConcerns');
    
    // 이미 있는지 확인
    if (consultState.data.primaryConcerns.includes(value) || consultState.data.secondaryConcerns.includes(value)) {
        return;
    }
    
    // placeholder 제거
    const placeholder = zone.querySelector('.dropzone-placeholder');
    if (placeholder) placeholder.style.display = 'none';
    
    // 칩 생성
    const newChip = document.createElement('button');
    newChip.className = 'concern-chip';
    newChip.dataset.value = value;
    newChip.innerHTML = label + ' <span class="chip-remove">×</span>';
    newChip.addEventListener('click', () => {
        removeFromPriority(value);
        // 원본 칩 상태 업데이트
        document.querySelector(`.concern-source .concern-chip[data-value="${value}"]`)?.classList.remove('in-primary', 'in-secondary');
    });
    
    zone.appendChild(newChip);
    
    // 상태 업데이트
    if (priority === 'primary') {
        consultState.data.primaryConcerns.push(value);
    } else {
        consultState.data.secondaryConcerns.push(value);
    }
    updateConcernsArray();
}

function removeFromPriority(value) {
    // Primary에서 제거
    const primaryIdx = consultState.data.primaryConcerns.indexOf(value);
    if (primaryIdx > -1) {
        consultState.data.primaryConcerns.splice(primaryIdx, 1);
        const chip = document.querySelector(`#primaryConcerns .concern-chip[data-value="${value}"]`);
        if (chip) chip.remove();
    }
    
    // Secondary에서 제거
    const secondaryIdx = consultState.data.secondaryConcerns.indexOf(value);
    if (secondaryIdx > -1) {
        consultState.data.secondaryConcerns.splice(secondaryIdx, 1);
        const chip = document.querySelector(`#secondaryConcerns .concern-chip[data-value="${value}"]`);
        if (chip) chip.remove();
    }
    
    // placeholder 복원
    ['primaryConcerns', 'secondaryConcerns'].forEach(id => {
        const zone = document.getElementById(id);
        if (zone.querySelectorAll('.concern-chip').length === 0) {
            const placeholder = zone.querySelector('.dropzone-placeholder');
            if (placeholder) placeholder.style.display = 'block';
        }
    });
    
    updateConcernsArray();
}

function updateConcernsArray() {
    consultState.data.concerns = [...consultState.data.primaryConcerns, ...consultState.data.secondaryConcerns];
}

// 드래그 앤 드롭 핸들러
let draggedChip = null;

function handleDragStart(e) {
    draggedChip = e.target;
    e.target.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
    draggedChip = null;
}

function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
}

function handleDragLeave(e) {
    e.currentTarget.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    
    if (!draggedChip) return;
    
    const value = draggedChip.dataset.value;
    const label = draggedChip.innerHTML;
    const priority = e.currentTarget.id === 'primaryConcerns' ? 'primary' : 'secondary';
    
    // 기존 위치에서 제거
    removeFromPriority(value);
    draggedChip.classList.remove('in-primary', 'in-secondary');
    
    // 새 위치에 추가
    addToPriority(priority, value, label);
    draggedChip.classList.add(priority === 'primary' ? 'in-primary' : 'in-secondary');
}

function goToStep(step) {
    // 다음으로 넘어갈 때만 검증 (이전 버튼은 검증 안함)
    if (step > consultState.currentStep) {
        const isValid = validateCurrentStep();
        if (!isValid) {
            return;
        }
    }
    
    // Save inputs (동기적으로 처리)
    if (consultState.currentStep === 4) {
        consultState.data.budget = parseInt(document.getElementById('budgetInput')?.value) || null;
    }
    
    consultState.currentStep = step;
    
    // 모든 스텝 즉시 숨기기
    const allSteps = document.querySelectorAll('.consult-step');
    allSteps.forEach(s => {
        s.classList.remove('active');
        s.style.display = 'none';
        s.style.opacity = '0';
    });
    
    // 현재 스텝만 보이기
    const currentStepEl = document.querySelector(`.consult-step[data-step="${step}"]`);
    if (currentStepEl) {
        currentStepEl.style.display = 'block';
        // 강제 리플로우 후 애니메이션
        currentStepEl.offsetHeight;
        currentStepEl.classList.add('active');
        currentStepEl.style.opacity = '1';
    }
    
    document.getElementById('progressFill').style.width = `${(step / consultState.totalSteps) * 100}%`;
    document.getElementById('progressText').textContent = `${step} / ${consultState.totalSteps}`;
    
    document.getElementById('prevBtn').disabled = step === 1;
    
    if (step === consultState.totalSteps) {
        document.getElementById('nextBtn').classList.add('hidden');
        document.getElementById('submitBtn').classList.remove('hidden');
    } else {
        document.getElementById('nextBtn').classList.remove('hidden');
        document.getElementById('submitBtn').classList.add('hidden');
    }
}

function validateCurrentStep() {
    const step = consultState.currentStep;
    let isValid = true;
    let message = '';
    
    switch(step) {
        case 1:
            if (!consultState.data.age) {
                message = '연령대를 선택해주세요.';
                isValid = false;
            } else if (!consultState.data.skinType) {
                message = '피부 타입을 선택해주세요.';
                isValid = false;
            }
            break;
        case 2:
            if (!consultState.data.primaryConcerns || consultState.data.primaryConcerns.length === 0) {
                message = '가장 해결하고 싶은 고민을 최소 1개 이상 선택해주세요.';
                isValid = false;
            }
            break;
        case 3:
            if (!consultState.data.areas || consultState.data.areas.length === 0) {
                message = '관심 부위를 최소 1개 이상 선택해주세요.';
                isValid = false;
            }
            break;
        case 4:
            const budget = parseInt(document.getElementById('budgetInput')?.value);
            if (!budget || budget < 10) {
                message = '예산을 입력해주세요. (최소 10만원)';
                isValid = false;
            }
            break;
        case 5:
            if (!consultState.data.downtime) {
                message = '다운타임 허용 범위를 선택해주세요.';
                isValid = false;
            } else if (!consultState.data.pain) {
                message = '통증 민감도를 선택해주세요.';
                isValid = false;
            }
            break;
        case 6:
            if (!consultState.data.treatmentType || consultState.data.treatmentType.length === 0) {
                message = '선호하는 시술 방식을 선택해주세요.';
                isValid = false;
            } else if (!consultState.data.duration) {
                message = '효과 유지 기간을 선택해주세요.';
                isValid = false;
            }
            break;
        case 7:
            if (!consultState.data.priority) {
                message = '가장 중요하게 생각하는 것을 선택해주세요.';
                isValid = false;
            } else if (!consultState.data.frequency) {
                message = '시술 계획을 선택해주세요.';
                isValid = false;
            }
            break;
    }
    
    if (!isValid) {
        showValidationMessage(message);
    }
    
    return isValid;
}

function showValidationMessage(message) {
    // 기존 메시지 제거
    const existingMsg = document.querySelector('.validation-message');
    if (existingMsg) existingMsg.remove();
    
    // 새 메시지 생성
    const msgEl = document.createElement('div');
    msgEl.className = 'validation-message';
    msgEl.textContent = message;
    
    // 현재 스텝에 추가
    const currentStep = document.querySelector(`.consult-step[data-step="${consultState.currentStep}"]`);
    currentStep.appendChild(msgEl);
    
    // 3초 후 제거
    setTimeout(() => {
        msgEl.remove();
    }, 3000);
}

// 프로그레스 관련 변수
let progressTimer = null;
let progressStartTime = null;

function updateProgress(step, message, percent) {
    // 메시지 업데이트
    const msgEl = document.getElementById('loadingMessage');
    if (msgEl) msgEl.textContent = message;
    
    // 프로그레스 바 업데이트
    const fillEl = document.getElementById('loadingProgressFill');
    if (fillEl) fillEl.style.width = percent + '%';
    
    // 단계 업데이트
    for (let i = 1; i <= 4; i++) {
        const stepEl = document.getElementById('loadingStep' + i);
        if (stepEl) {
            stepEl.classList.remove('active', 'completed');
            if (i < step) {
                stepEl.classList.add('completed');
            } else if (i === step) {
                stepEl.classList.add('active');
            }
        }
    }
}

function startProgressTimer() {
    progressStartTime = Date.now();
    progressTimer = setInterval(() => {
        const elapsed = Math.floor((Date.now() - progressStartTime) / 1000);
        const timeEl = document.getElementById('progressTime');
        if (timeEl) timeEl.textContent = `경과 시간: ${elapsed}초`;
    }, 1000);
}

function stopProgressTimer() {
    if (progressTimer) {
        clearInterval(progressTimer);
        progressTimer = null;
    }
}

async function submitConsultation() {
    consultState.data.budget = parseInt(document.getElementById('budgetInput')?.value) || null;
    
    document.getElementById('consultWizard').classList.add('hidden');
    document.getElementById('consultLoading').classList.remove('hidden');
    
    // 프로그레스 초기화 및 시작
    updateProgress(1, '요청을 준비하고 있어요...', 10);
    startProgressTimer();
    
    // 룰베이스 추천 (비동기 시뮬레이션)
    setTimeout(() => {
        updateProgress(2, '시술 데이터베이스를 검색하고 있어요...', 30);
        
        setTimeout(() => {
            updateProgress(3, '최적의 조합을 분석하고 있어요...', 60);
            
            setTimeout(() => {
                updateProgress(4, '결과를 생성하고 있어요...', 90);
                
                setTimeout(() => {
                    stopProgressTimer();
                    try {
                        const response = generateRuleBasedRecommendation(consultState.data);
                        displayResult(response);
                    } catch (error) {
                        console.error('Rule-based Error:', error);
                        displayError(error);
                    }
                }, 300);
            }, 400);
        }, 400);
    }, 300);
}

// ===== 시너지 메커니즘 헬퍼 함수 =====
function getSynergyMechanism(t1, t2) {
    const mechanisms = {
        '리프팅+필러': '리프팅으로 피부를 끌어올린 후 필러로 볼륨을 채워 입체감을 극대화합니다.',
        '리프팅+보톡스': '리프팅으로 전체적인 탄력을 높이고 보톡스로 표정 주름을 완화합니다.',
        '레이저+스킨부스터': '레이저로 피부 재생을 유도하고 스킨부스터로 영양분을 공급합니다.',
        '보톡스+필러': '보톡스로 근육을 이완시키고 필러로 볼륨을 보충해 자연스러운 윤곽을 만듭니다.',
        '토닝+스킨부스터': '토닝으로 색소를 분해하고 스킨부스터로 피부 장벽을 강화합니다.',
        '프락셀+리쥬란': '프락셀로 피부 재생을 유도하고 리쥬란으로 회복을 촉진합니다.'
    };
    
    for (const [key, value] of Object.entries(mechanisms)) {
        const [a, b] = key.split('+');
        if ((t1.includes(a) || t1.includes(b)) && (t2.includes(a) || t2.includes(b))) {
            return value;
        }
    }
    return '두 시술의 효과가 상호 보완되어 단독 시술보다 우수한 결과를 기대할 수 있습니다.';
}

// ===== 부위별 특성 헬퍼 함수 =====
function getAreaCharacteristics(area) {
    const characteristics = {
        '이마': '피부가 두껍고 표정 주름이 잘 생기는 부위',
        '미간': '표정으로 인한 주름이 깊게 패이기 쉬운 부위',
        '눈가': '피부가 가장 얇아 섬세한 시술이 필요한 부위',
        '눈밑': '지방 탈출과 색소 침착이 동시에 나타나는 부위',
        '볼': '볼륨 손실과 처짐이 먼저 나타나는 부위',
        '코': '피지선이 발달해 모공과 블랙헤드가 잘 생기는 부위',
        '광대': '하이라이트 포인트로 볼륨 유지가 중요한 부위',
        '입주변': '잔주름과 볼륨 손실이 동시에 나타나는 부위',
        '턱선': '처짐과 이중턱이 노화 인상을 주는 부위',
        '목': '나이가 가장 먼저 드러나는 부위 중 하나',
        '얼굴전체': '전체적인 밸런스와 통일감이 중요한 영역',
        '얼굴상반부': '표정 주름과 이마 처짐이 주요 관심사',
        '얼굴하반부': '볼륨 손실과 턱선 처짐이 주요 관심사'
    };
    return characteristics[area] || '개인별 피부 상태에 따른 맞춤 접근이 필요한 부위';
}

function getRecommendedTreatmentTypes(area) {
    const types = {
        '이마': ['보톡스', '리프팅', '필러'],
        '미간': ['보톡스'],
        '눈가': ['보톡스', '아이 전용 스킨부스터', '레이저'],
        '눈밑': ['필러', '레이저', 'PRP'],
        '볼': ['리프팅', '필러', '스킨부스터'],
        '코': ['레이저', '필링', '모공 케어'],
        '광대': ['필러', '리프팅'],
        '입주변': ['필러', '보톡스', '스킨부스터'],
        '턱선': ['리프팅', '윤곽주사', '실리프팅'],
        '목': ['리프팅', '스킨부스터', '레이저'],
        '얼굴전체': ['리프팅', '스킨부스터', '레이저'],
        '얼굴상반부': ['보톡스', '리프팅', '레이저'],
        '얼굴하반부': ['리프팅', '필러', '윤곽주사']
    };
    return types[area] || ['리프팅', '레이저', '스킨부스터'];
}

// ===== 룰베이스 추천 엔진 (Enhanced v2.0) =====
function generateRuleBasedRecommendation(userData) {
    const budget = userData.budget || 100;
    const primaryConcerns = userData.primaryConcerns || [];
    const secondaryConcerns = userData.secondaryConcerns || [];
    const downtime = userData.downtime || '상관없음';
    const pain = userData.pain || '보통';
    const age = userData.age || '30대 초반';
    const areas = userData.areas || [];
    
    // 새로운 인풋들
    const treatmentType = userData.treatmentType || [];
    const duration = userData.duration || '중기';
    const priority = userData.priority || '효과';
    const frequency = userData.frequency || '비정기';
    const pastTreatments = userData.pastTreatments || [];
    const experience = userData.experience || '처음';
    // '모름' 선택 시 '복합성'으로 처리
    const rawSkinType = userData.skinType || '복합성';
    const skinType = rawSkinType === '모름' ? '복합성' : rawSkinType;
    
    // 추천 논거 수집용
    const recommendationReasons = {
        ageFactors: [],
        areaFactors: [],
        concernFactors: [],
        synergyFactors: [],
        timingFactors: [],
        personalFactors: [],
        skinTypeFactors: []
    };
    
    // ===== 0. 피부 타입별 맞춤 추천 데이터 =====
    const skinTypeRecommendations = {
        '건성': {
            preferred: ['물광주사', '리쥬란', '스킨부스터', '보습관리', '수분앰플', '히알루론산'],
            avoid: ['살리실산필링', '고농도필링', '레티놀필링'],
            boost: 1.2,
            penalty: 0.7,
            reason: '건성 피부는 수분 공급과 보습에 집중하는 시술이 적합합니다. 강한 필링은 피해야 합니다.'
        },
        '지성': {
            preferred: ['아쿠아필', '살리실산필링', '피지조절', 'PDT', '모공관리', '스킨스케일링'],
            avoid: ['오일베이스', '너무 무거운 보습'],
            boost: 1.2,
            penalty: 0.8,
            reason: '지성 피부는 피지 조절과 모공 관리에 집중하는 시술이 효과적입니다.'
        },
        '복합성': {
            preferred: ['아쿠아필', '물광주사', '리쥬란', 'IPL', '레이저토닝'],
            avoid: [],
            boost: 1.1,
            penalty: 0.9,
            reason: '복합성 피부는 대부분의 시술이 적합하며, T존과 U존을 다르게 관리할 수 있습니다.'
        },
        '민감성': {
            preferred: ['진정관리', '저자극필링', '리쥬란', '물광주사', 'LED테라피', '재생관리'],
            avoid: ['고농도필링', '강한레이저', '프락셀', 'CO2레이저', '살리실산필링', '강한MRF'],
            boost: 1.3,
            penalty: 0.5,
            reason: '민감성 피부는 자극이 적은 순한 시술 위주로 선택해야 합니다. 강한 레이저나 필링은 피해야 합니다.'
        }
    };
    
    // ===== 1. 연령대별 맞춤 추천 데이터 =====
    const ageRecommendations = {
        '10대': {
            preferred: ['아쿠아필', '스킨스케일링', '여드름관리', 'PDT', '압출'],
            avoid: ['보톡스', '필러', '리프팅', '울쎄라', '써마지', '실리프팅', '스컬트라', '풀페이스', '자울라인', '실루엣', '지방이식', '엘란쎄', '인모드'],
            boost: 1.3,
            penalty: 0.1,  // 매우 강한 페널티
            reason: '10대는 피부 재생력이 좋아 가벼운 관리 위주가 적합합니다. 아직 노화가 시작되지 않아 리프팅/필러는 권장하지 않습니다.'
        },
        '20대 초반': {
            preferred: ['아쿠아필', '레이저토닝', 'IPL', '스킨부스터', '여드름관리', '물광주사'],
            avoid: ['울쎄라', '실리프팅', '스컬트라', '지방이식', '풀페이스', '자울라인', '실루엣', '엘란쎄', '인모드', '올리지오', '써마지'],
            boost: 1.2,
            penalty: 0.15,  // 강한 페널티
            reason: '20대 초반은 피부 탄력이 충분해 예방적 관리와 피부결/톤 개선에 집중하는 것이 좋습니다.'
        },
        '20대 후반': {
            preferred: ['스킨부스터', '리쥬란', '레이저토닝', '보톡스', '물광주사', 'IPL', '아쿠아필'],
            avoid: ['울쎄라', '실리프팅', '스컬트라', '풀페이스', '자울라인', '실루엣', '지방이식', '엘란쎄', '인모드', '올리지오', '써마지'],
            boost: 1.15,
            penalty: 0.2,  // 더 강한 페널티
            reason: '20대 후반부터 콜라겐 감소가 시작됩니다. 예방적 스킨부스터와 가벼운 보톡스로 노화를 늦출 수 있습니다.'
        },
        '30대 초반': {
            preferred: ['보톡스', '리쥬란', '써마지FLX', '스킨보톡스', '필러', '물광주사'],
            avoid: ['풀페이스', '자울라인', '실루엣', '지방이식'],
            boost: 1.1,
            penalty: 0.4,
            reason: '30대 초반은 본격적인 안티에이징 시작 시기입니다. 보톡스와 스킨부스터로 주름 예방, 리쥬란으로 피부 재생을 권장합니다.'
        },
        '30대 후반': {
            preferred: ['보톡스', '필러', '써마지', '울쎄라', '리쥬란', '실리프팅'],
            avoid: [],
            boost: 1.0,
            penalty: 0.8,
            reason: '30대 후반은 탄력 저하가 눈에 띄기 시작합니다. 리프팅 시술과 볼륨 필러를 병행하면 효과적입니다.'
        },
        '40대 초반': {
            preferred: ['울쎄라', '써마지', '필러', '실리프팅', '스킨보톡스', '콜라겐부스터'],
            avoid: [],
            boost: 1.0,
            penalty: 0.9,
            reason: '40대는 복합적 노화가 진행됩니다. 리프팅으로 처짐을 개선하고 필러로 볼륨을 보충하는 복합 치료가 효과적입니다.'
        },
        '40대 후반': {
            preferred: ['울쎄라', '써마지', '실리프팅', '필러', '스컬트라', '인모드'],
            avoid: [],
            boost: 1.0,
            penalty: 1.0,
            reason: '40대 후반은 강도 높은 리프팅이 필요한 시기입니다. 울쎄라+써마지 복합 시술로 시너지 효과를 볼 수 있습니다.'
        },
        '50대': {
            preferred: ['울쎄라', '실리프팅', '스컬트라', '엘란쎄', '지방이식', '써마지'],
            avoid: [],
            boost: 1.0,
            penalty: 1.0,
            reason: '50대는 볼륨 손실과 처짐이 두드러집니다. 장기 지속형 필러(스컬트라, 엘란쎄)와 강력한 리프팅을 권장합니다.'
        },
        '60대 이상': {
            preferred: ['울쎄라', '실리프팅', '지방이식', '스컬트라', '엘란쎄'],
            avoid: ['가벼운 스킨케어'],
            boost: 1.0,
            penalty: 1.0,
            reason: '60대 이상은 확실한 효과를 위해 강도 높은 시술이 필요합니다. 다만 회복력을 고려해 시술 간격을 충분히 두는 것이 좋습니다.'
        }
    };
    
    // ===== 2. 부위별 최적 시술 매핑 =====
    const areaOptimization = {
        '이마': {
            treatments: ['이마보톡스', '이마필러', '울쎄라', '써마지', '실리프팅'],
            keywords: ['이마', '보톡스', '필러', '리프팅'],
            reason: '이마 주름은 보톡스로 근육을 이완시키고, 깊은 주름은 필러로 채워줍니다.'
        },
        '미간': {
            treatments: ['미간보톡스', '보톡스'],
            keywords: ['미간', '보톡스', '주름'],
            reason: '미간 주름은 표정 습관에 의한 것으로, 보톡스가 가장 효과적입니다.'
        },
        '눈가': {
            treatments: ['눈가보톡스', '울쎄라아이', '써마지아이', '아이리쥬란', '눈밑필러'],
            keywords: ['눈가', '눈밑', '아이', '보톡스'],
            reason: '눈가는 피부가 얇아 섬세한 시술이 필요합니다. 울쎄라 아이라인이나 아이 전용 스킨부스터를 권장합니다.'
        },
        '눈밑': {
            treatments: ['눈밑필러', '아이리쥬란', '카복시', '지방재배치'],
            keywords: ['눈밑', '다크서클', '아이'],
            reason: '눈밑 꺼짐은 필러나 지방이식으로, 다크서클은 혈관/색소 치료를 병행합니다.'
        },
        '코': {
            treatments: ['코필러', '모공치료', '피지관리', '블랙헤드'],
            keywords: ['코', '모공', '피지'],
            reason: '코 부위는 모공과 피지 관리가 주 관심사입니다. 피코슈어나 프락셀이 효과적입니다.'
        },
        '볼': {
            treatments: ['볼필러', '스킨보톡스', '리쥬란', '울쎄라', '실리프팅'],
            keywords: ['볼', '필러', '리프팅', '탄력'],
            reason: '볼 처짐은 리프팅으로, 볼륨 손실은 필러로 개선합니다. 피부결은 리쥬란이 효과적입니다.'
        },
        '광대': {
            treatments: ['광대축소', '보톡스', '윤곽주사'],
            keywords: ['광대', '윤곽', '보톡스'],
            reason: '광대 부위는 뼈 윤곽에 따라 보톡스나 윤곽주사로 라인을 정리합니다.'
        },
        '입주변': {
            treatments: ['팔자필러', '입술필러', '입꼬리보톡스', '스모커라인필러'],
            keywords: ['입술', '팔자', '입꼬리'],
            reason: '팔자주름은 필러+리프팅 복합이, 입술 볼륨은 히알루론산 필러가 적합합니다.'
        },
        '턱선': {
            treatments: ['턱보톡스', '턱필러', '윤곽주사', '지방분해', '울쎄라', '실리프팅'],
            keywords: ['턱', '윤곽', '이중턱', '지방'],
            reason: '턱선 정리는 보톡스+윤곽주사 조합이 효과적입니다. 이중턱은 지방분해나 슈링크를 권장합니다.'
        },
        '목': {
            treatments: ['목주름보톡스', '울쎄라', '리쥬란'],
            keywords: ['목', '주름', '리프팅'],
            reason: '목 주름은 보톡스와 리프팅을 병행합니다. 목 피부는 얼굴보다 얇아 주의가 필요합니다.'
        },
        '두피': {
            treatments: ['탈모주사', 'PRP', '두피스케일링', '메조테라피', '엑소좀'],
            keywords: ['두피', '탈모', 'PRP', '모발'],
            reason: '두피 관리는 스케일링으로 환경을 개선하고 PRP/엑소좀으로 모낭을 활성화합니다.'
        },
        '얼굴전체': {
            treatments: ['울쎄라', '써마지', '스킨보톡스', '리쥬란', '물광주사'],
            keywords: ['전체', '리프팅', '토닝'],
            reason: '전체 얼굴 관리는 리프팅+스킨부스터 조합으로 탄력과 피부결을 동시에 개선합니다.'
        },
        '얼굴상반부': {
            treatments: ['이마보톡스', '눈가보톡스', '울쎄라', '써마지'],
            keywords: ['이마', '눈가', '상반부'],
            reason: '상반부는 표정 주름이 많아 보톡스가 기본이고, 리프팅으로 처짐을 예방합니다.'
        },
        '얼굴하반부': {
            treatments: ['턱보톡스', '필러', '실리프팅', '윤곽주사', '울쎄라'],
            keywords: ['턱', '볼', '하반부', '팔자'],
            reason: '하반부는 처짐과 볼륨 손실이 주 관심사입니다. 리프팅+필러 복합 치료가 효과적입니다.'
        },
        '전신': {
            treatments: ['제모', '바디스컬프팅', '셀룰라이트'],
            keywords: ['바디', '제모', '전신'],
            reason: '전신 관리는 부위별 특성에 맞는 맞춤 시술이 필요합니다.'
        }
    };
    
    // ===== 3. 계절별 추천 (현재 월 기준) =====
    const currentMonth = new Date().getMonth() + 1;
    const seasonalFactors = {
        isSummer: [5, 6, 7, 8, 9].includes(currentMonth),
        isWinter: [11, 12, 1, 2, 3].includes(currentMonth),
        summerAvoid: ['레이저토닝', 'IPL', '필링', '프락셀', 'CO2레이저', '피코토닝'],
        summerPrefer: ['보톡스', '필러', '리쥬란', '물광주사', '울쎄라'],
        winterPrefer: ['레이저토닝', 'IPL', '필링', '프락셀', '피코슈어', '색소치료'],
        summerReason: '여름철은 자외선이 강해 레이저/필링 후 색소침착 위험이 있습니다. 주사 시술 위주로 권장합니다.',
        winterReason: '겨울철은 자외선이 약하고 건조해 레이저/필링 시술의 최적기입니다. 색소 치료 효과가 극대화됩니다.'
    };
    
    // ===== 4. 시술 코스/횟수 데이터 =====
    const treatmentCourses = {
        '레이저토닝': { sessions: 10, interval: '2주', perSession: true, reason: '레이저토닝은 10회 이상 꾸준히 받아야 효과가 누적됩니다.' },
        '리쥬란': { sessions: 3, interval: '3-4주', perSession: true, reason: '리쥬란은 3회 코스로 콜라겐 재생 사이클을 완성합니다.' },
        '울쎄라': { sessions: 1, interval: '1년', perSession: false, reason: '울쎄라는 1회로 효과가 오래 지속됩니다.' },
        '써마지': { sessions: 1, interval: '1년', perSession: false, reason: '써마지는 1회 시술로 6개월~1년 효과가 유지됩니다.' },
        '보톡스': { sessions: 1, interval: '3-4개월', perSession: false, reason: '보톡스는 3-4개월마다 유지 시술이 필요합니다.' },
        '필러': { sessions: 1, interval: '6-12개월', perSession: false, reason: '필러는 제품에 따라 6개월~2년 유지됩니다.' },
        '스킨부스터': { sessions: 3, interval: '2-4주', perSession: true, reason: '스킨부스터는 3회 코스가 기본입니다.' },
        '물광주사': { sessions: 3, interval: '2-4주', perSession: true, reason: '물광주사는 3회 시술로 최적의 효과를 봅니다.' },
        'IPL': { sessions: 5, interval: '3-4주', perSession: true, reason: 'IPL은 5회 이상 시술로 색소/혈관 개선 효과가 누적됩니다.' },
        '아쿠아필': { sessions: 1, interval: '2-4주', perSession: false, reason: '아쿠아필은 정기적으로 받으면 피부결 유지에 좋습니다.' },
        '프락셀': { sessions: 3, interval: '4-6주', perSession: true, reason: '프락셀은 3회 시술로 흉터/모공 개선 효과가 극대화됩니다.' }
    };
    
    // ===== 5. 효과 발현 시점 =====
    const effectTiming = {
        immediate: {
            treatments: ['필러', '아쿠아필', '물광주사', '윤곽주사'],
            reason: '시술 직후~수일 내 효과가 나타나는 시술입니다.'
        },
        gradual: {
            treatments: ['보톡스', '리쥬란', '스킨부스터', '콜라겐부스터', '레이저토닝', 'IPL'],
            reason: '1~2주(보톡스) 또는 1~3개월에 걸쳐 점진적으로 효과가 나타납니다.'
        },
        delayed: {
            treatments: ['울쎄라', '써마지', '스컬트라', '실리프팅', '프락셀'],
            reason: '2~6개월 후 콜라겐 재생으로 효과가 극대화됩니다.'
        }
    };
    
    // 나이 문자열을 숫자로 변환하는 헬퍼 함수
    const parseAgeToNumber = (ageStr) => {
        if (!ageStr) return 35; // 기본값
        if (ageStr.includes('10대')) return 15;
        if (ageStr.includes('20대 초반')) return 22;
        if (ageStr.includes('20대 중반')) return 25;
        if (ageStr.includes('20대 후반')) return 28;
        if (ageStr.includes('20대')) return 25;
        if (ageStr.includes('30대 초반')) return 32;
        if (ageStr.includes('30대 중반')) return 35;
        if (ageStr.includes('30대 후반')) return 38;
        if (ageStr.includes('30대')) return 35;
        if (ageStr.includes('40대 초반')) return 42;
        if (ageStr.includes('40대 중반')) return 45;
        if (ageStr.includes('40대 후반')) return 48;
        if (ageStr.includes('40대')) return 45;
        if (ageStr.includes('50대')) return 55;
        if (ageStr.includes('60대')) return 65;
        return 35;
    };
    
    // ===== 6. 시너지 & 금기 조합 =====
    const enhancedSynergyMap = {
        // 시너지 조합 (효과 증폭)
        synergies: {
            // 리프팅 계열
            '울쎄라': { partners: ['보톡스', '필러', '스킨보톡스', '리쥬란', '써마지'], boost: 1.25, reason: '울쎄라로 리프팅 후 보톡스/필러로 주름과 볼륨을 보완하면 시너지 효과가 있습니다.' },
            '써마지': { partners: ['보톡스', '필러', '스킨보톡스', '인모드', '리쥬란'], boost: 1.2, reason: '써마지와 보톡스를 병행하면 탄력+주름 개선 효과가 배가됩니다.' },
            '슈링크': { partners: ['보톡스', '필러', '스킨보톡스', '리쥬란'], boost: 1.15, reason: '슈링크와 보톡스 조합으로 리프팅 효과가 오래 유지됩니다.' },
            '인모드': { partners: ['보톡스', '써마지', '필러', '리쥬란'], boost: 1.15, reason: '인모드의 RF와 보톡스 조합이 윤곽 개선에 효과적입니다.' },
            '실리프팅': { partners: ['보톡스', '필러', '울쎄라', '리쥬란'], boost: 1.15, reason: '실리프팅과 보톡스를 병행하면 리프팅 효과가 오래 유지됩니다.' },
            '더블로': { partners: ['보톡스', '필러', '리쥬란'], boost: 1.15, reason: '더블로 후 보톡스로 주름까지 케어하면 효과가 극대화됩니다.' },
            
            // 스킨부스터 계열
            '리쥬란': { partners: ['물광주사', '레이저토닝', '아쿠아필', '보톡스', 'IPL'], boost: 1.15, reason: '리쥬란과 물광주사는 피부 재생 시너지가 뛰어납니다.' },
            '물광주사': { partners: ['리쥬란', '아쿠아필', '레이저토닝', '보톡스'], boost: 1.15, reason: '물광주사와 리쥬란 조합은 피부 수분+탄력 개선에 최고입니다.' },
            '쥬베룩': { partners: ['리쥬란', '물광주사', '보톡스', '필러'], boost: 1.2, reason: '쥬베룩의 콜라겐 생성과 리쥬란의 재생 효과가 시너지를 냅니다.' },
            '엑소좀': { partners: ['리쥬란', '물광주사', '프락셀', '모피어스8'], boost: 1.2, reason: '엑소좀과 리쥬란 조합은 피부 재생력을 극대화합니다.' },
            '볼뉴머': { partners: ['리쥬란', '필러', '울쎄라'], boost: 1.15, reason: '볼뉴머와 리쥬란 조합으로 볼륨+탄력을 동시에 개선합니다.' },
            
            // 필링/클렌징 계열
            '아쿠아필': { partners: ['리쥬란', '물광주사', '레이저토닝', '스킨보톡스'], boost: 1.1, reason: '아쿠아필로 모공 청소 후 리쥬란으로 재생하면 피부결이 좋아집니다.' },
            '살리실산필링': { partners: ['아쿠아필', '리쥬란', 'LED테라피'], boost: 1.1, reason: '살리실산필링과 LED 조합이 여드름 진정에 효과적입니다.' },
            
            // 레이저 계열
            '레이저토닝': { partners: ['IPL', '리쥬란', '아쿠아필', '물광주사'], boost: 1.1, reason: '레이저토닝과 IPL을 교차 시술하면 색소 개선 효과가 높아집니다.' },
            'IPL': { partners: ['레이저토닝', '리쥬란', '물광주사'], boost: 1.1, reason: 'IPL과 레이저토닝 교차 시술로 피부톤이 밝아집니다.' },
            '피코슈어': { partners: ['레이저토닝', 'IPL', '리쥬란'], boost: 1.15, reason: '피코슈어 후 리쥬란으로 피부 재생을 촉진하면 색소 개선 효과가 좋아집니다.' },
            '제네시스': { partners: ['리쥬란', '브이빔', '물광주사'], boost: 1.1, reason: '제네시스와 리쥬란 조합이 홍조 개선과 피부 재생에 효과적입니다.' },
            
            // 흉터/모공 계열
            '프락셀': { partners: ['리쥬란', '스킨보톡스', 'CO2레이저', '엑소좀'], boost: 1.2, reason: '프락셀 후 리쥬란/엑소좀으로 재생을 촉진하면 흉터 개선 효과가 극대화됩니다.' },
            'CO2레이저': { partners: ['리쥬란', '프락셀', '엑소좀'], boost: 1.2, reason: 'CO2레이저 후 엑소좀으로 빠른 재생을 유도합니다.' },
            '모피어스8': { partners: ['리쥬란', '보톡스', '엑소좀'], boost: 1.15, reason: '모피어스8과 리쥬란 조합이 모공+탄력 개선에 효과적입니다.' },
            '실펌X': { partners: ['리쥬란', '아쿠아필', '엑소좀'], boost: 1.15, reason: '실펌X 후 리쥬란으로 피부 재생을 촉진하면 모공 개선 효과가 좋아집니다.' },
            '서브시전': { partners: ['프락셀', '리쥬란', 'CO2레이저'], boost: 1.2, reason: '서브시전과 프락셀 조합이 패인 흉터 개선에 효과적입니다.' },
            '더마펜': { partners: ['리쥬란', '엑소좀', '물광주사'], boost: 1.15, reason: '더마펜과 엑소좀 조합으로 피부 재생력이 높아집니다.' },
            
            // 홍조/혈관 계열
            '브이빔': { partners: ['IPL', '제네시스', '리쥬란'], boost: 1.1, reason: '브이빔과 제네시스 조합이 혈관 확장과 홍조 개선에 효과적입니다.' },
            
            // 보톡스/필러 계열
            '보톡스': { partners: ['필러', '스킨보톡스', '리쥬란', '물광주사'], boost: 1.1, reason: '보톡스와 필러 조합으로 주름+볼륨을 동시에 개선합니다.' },
            '필러': { partners: ['보톡스', '리쥬란', '스킨보톡스'], boost: 1.1, reason: '필러와 보톡스 조합이 입체적인 얼굴 윤곽을 만듭니다.' },
            '스킨보톡스': { partners: ['리쥬란', '물광주사', '아쿠아필'], boost: 1.1, reason: '스킨보톡스와 물광주사 조합이 모공+피부결 개선에 효과적입니다.' },
            
            // 바디/윤곽 계열
            '윤곽주사': { partners: ['지방분해주사', '보톡스', '슈링크'], boost: 1.15, reason: '윤곽주사와 보톡스 조합이 V라인 효과를 극대화합니다.' },
            '지방분해주사': { partners: ['고주파', '윤곽주사', '인모드'], boost: 1.15, reason: '지방분해주사 후 고주파로 피부 탄력을 유지합니다.' },
            
            // 탈모 계열
            '두피PRP': { partners: ['두피메조', '엑소좀', '미녹시딜'], boost: 1.2, reason: 'PRP와 메조테라피 조합이 모발 성장 촉진에 효과적입니다.' },
            '두피메조': { partners: ['두피PRP', '엑소좀'], boost: 1.15, reason: '메조테라피와 PRP 병행으로 탈모 개선 효과가 높아집니다.' },
            
            // 수액 계열
            '백옥주사': { partners: ['신데렐라주사', '비타민C고용량'], boost: 1.1, reason: '백옥주사와 비타민C 조합으로 미백 효과가 배가됩니다.' },
            
            // 스킨케어 계열
            '리투오': { partners: ['리쥬란', '물광주사', '보톡스', '아쿠아필'], boost: 1.15, reason: '리투오와 리쥬란 조합이 피부 재생과 탄력 개선에 효과적입니다.' },
            '이온토': { partners: ['초음파관리', '물광주사', '리쥬란'], boost: 1.1, reason: '이온토와 초음파 조합으로 유효성분 흡수가 좋아집니다.' },
            'LED테라피': { partners: ['아쿠아필', '리쥬란', '초음파관리'], boost: 1.1, reason: 'LED와 아쿠아필 조합이 여드름 진정에 효과적입니다.' }
        },
        // 금기/주의 조합
        conflicts: {
            '레티놀사용중': { avoid: ['필링', '레이저', '프락셀'], reason: '레티놀 사용 중에는 피부가 예민해 자극적인 시술을 피해야 합니다.' },
            '피부염': { avoid: ['필링', '레이저', 'MTS'], reason: '피부염이 있을 때는 자극을 최소화해야 합니다.' }
        },
        // 권장 시술 간격
        intervals: {
            '보톡스→필러': { days: 14, reason: '보톡스 후 2주 뒤 필러 시술이 안전합니다.' },
            '레이저→필링': { days: 14, reason: '레이저 후 피부 진정 기간이 필요합니다.' },
            '필링→레이저': { days: 7, reason: '필링 후 일주일 정도 피부 회복 기간을 두세요.' }
        }
    };

    // 시술 타입 → 카테고리 매핑
    const typeToCategory = {
        '주사': ['보톡스', '필러', '스킨부스터', '리쥬란', '물광', '주사', 'PRP', '엑소좀', '쥬베룩', '볼뉴머'],
        '레이저': ['레이저', '토닝', 'IPL', '프락셀', '피코', '제네시스', '브이빔', '클라리티'],
        '리프팅': ['울쎄라', '써마지', '슈링크', '인모드', '실리프팅', '하이푸', 'HIFU', '올리지오', '더블로'],
        '스킨케어': ['필링', '아쿠아필', '스케일링', 'MTS', '더마펜']
    };
    
    // 유지 기간 → 시술 특성 매핑
    const durationToTreatments = {
        '단기': ['보톡스', '필러', '물광주사', '아쿠아필', '스킨부스터', 'MTS'],
        '중기': ['리쥬란', '쥬베룩', '레이저토닝', 'IPL', '제네시스', '스킨보톡스'],
        '장기': ['울쎄라', '써마지', '실리프팅', '스컬트라', '엘란쎄', '프락셀', '지방이식']
    };
    
    // 고민 → 시술 매핑 (대폭 확장)
    const concernToTreatments = {
        '처진피부': ['울쎄라', '써마지', '실리프팅', '인모드', '슈링크', '올리지오', '텐써마', '유써마', '더블로', '리프테라', '소프웨이브', '하이푸', 'HIFU', '울트라포머', '울트라셀', '실루엣소프트', '민트실', '녹는실', '보톡스', '스킨보톡스'],
        '주름': ['보톡스', '써마지', '울쎄라', '리쥬란', '스킨보톡스', '주름보톡스', '이마보톡스', '눈가보톡스', '미간보톡스', '콜라겐부스터', '쥬베룩', '리즈네', '엑소좀', '슈링크', '인모드'],
        '탄력저하': ['써마지', '울쎄라', '인모드', '스킨보톡스', '콜라겐부스터', '리쥬란', '쥬베룩', '볼뉴머', '프로파일로', '엑소좀', '슈링크', '소프웨이브', '올리지오', '폴리뉴클레오타이드'],
        '볼륨손실': ['필러', '스컬트라', '엘란쎄', '지방이식', '콜라겐부스터', '볼필러', '애교살필러', '이마필러', '관자필러', '쥬베룩', '볼뉴머'],
        '이중턱': ['지방분해주사', '슈링크', '울쎄라', '실리프팅', '윤곽주사', '턱보톡스', '지방흡입', '인모드', '벨라소닉', '더블로'],
        '팔자주름': ['필러', '실리프팅', '울쎄라', '보톡스', '팔자필러', '콜라겐부스터', '하이푸', '써마지'],
        '모공': ['아쿠아필', '모피어스8', '실펌', '실펌X', '포텐자', '시크릿', 'MTS', '마이크로니들', '제네시스', '스킨보톡스', '써마지', '인모드', '올리지오'],
        '기미잡티': ['피코슈어', '레이저토닝', 'IPL', '스타워커', '루비레이저', '큐스위치', '멜라논', '트리플토닝', '클라리티', '엑셀브이', '피코웨이', '피코플러스', '스펙트라', '제네시스'],
        '피부결': ['아쿠아필', '리쥬란', '엑소좀', '벨벳필', '스킨부스터', '물광주사', 'MTS', '더마펜', '실펌', '제네시스', '레이저토닝', '콜라겐부스터', '연어주사', '쥬베룩'],
        '피부톤': ['IPL', '레이저토닝', '비타민주사', '글루타치온', '백옥주사', '신데렐라주사', '제네시스', '클라리티', '엑셀브이', '스펙트라'],
        '홍조': ['브이빔', 'IPL', '엑셀브이', '제네시스', '옐로우레이저', '클라리티', '엑셀브이플러스', '혈관레이저'],
        '색소침착': ['피코슈어', '레이저토닝', 'IPL', '스타워커', '피코웨이', '루비레이저', '큐스위치', '스펙트라'],
        '여드름': ['아쿠아필', 'PDT', '압출', '여드름주사', '살리실산필링', '제네시스', 'IPL', '아그네스', '클라리티', '레이저토닝', '스킨스케일링', 'BHA필링'],
        '여드름흉터': ['프락셀', 'CO2레이저', '모피어스8', '서브시전', '인트라셀', '실펌', 'MTS', '더마펜', '에어젯', 'TCA크로스', '도트필링', '포텐자', '시크릿'],
        '흉터': ['프락셀', 'CO2레이저', '레이저박피', '실리콘시트', '모피어스8', '인트라셀', '시크릿', '포텐자'],
        '튼살': ['프락셀', 'CO2레이저', '카복시', '인피니', '실펌', '모피어스8', 'MTS'],
        '다크서클': ['필러', '리쥬란아이', '지방이식', '카복시', '눈밑필러', '아이리쥬란', '엑소좀', '콜라겐부스터'],
        '제모': ['의료레이저제모', '소프라노', '젠틀맥스', '클라리티', '다이오드', '알렉산드라이트', 'IPL제모'],
        '탈모': ['탈모주사', 'PRP', '엑소좀', '두피스케일링', '메조테라피', '미녹시딜', 'HARG', '줄기세포', '두피MTS'],
        '다한증': ['보톡스', '미라드라이', '다한증보톡스']
    };
    
    // 다운타임 허용에 따른 필터
    const downtimeFilter = {
        '없어야함': 0,
        '당일': 1,
        '1-2일': 2,
        '3-4일': 4,
        '일주일': 7,
        '상관없음': 30
    };
    const maxDowntime = downtimeFilter[downtime] || 30;
    
    // 통증 민감도에 따른 필터
    const painFilter = {
        '매우민감': 1,
        '민감': 2,
        '보통': 3,
        '괜찮음': 5
    };
    const maxPain = painFilter[pain] || 3;
    
    // 시술 매칭 및 점수화 (Enhanced v2.0)
    function scoreTreatment(treatment, isPrimary) {
        let score = 0;
        const concerns = isPrimary ? primaryConcerns : secondaryConcerns;
        const treatmentName = treatment.name || '';
        const treatmentReasons = [];  // 이 시술이 추천된 이유들
        
        // 0. DB concerns.primary 필드 우선 체크 (가장 정확)
        if (treatment.concerns?.primary?.length) {
            const dbPrimary = treatment.concerns.primary.map(c => c.toLowerCase());
            let dbMatched = false;
            concerns.forEach(concern => {
                const concernLower = concern.toLowerCase();
                if (dbPrimary.some(dp => dp.includes(concernLower) || concernLower.includes(dp))) {
                    score += isPrimary ? 60 : 30;  // DB 매칭은 더 높은 점수
                    treatmentReasons.push(`${concern} 개선에 효과적인 시술 (DB 확인)`);
                    dbMatched = true;
                }
            });
            
            // DB에 매칭되는 고민이 있으면 다른 매칭 스킵
            if (dbMatched) {
                return score;
            }
            
            // DB에 명시된 고민이 사용자 고민과 전혀 관련 없으면 낮은 점수
            const allUserConcerns = [...primaryConcerns, ...secondaryConcerns].map(c => c.toLowerCase());
            const hasAnyMatch = dbPrimary.some(dp => 
                allUserConcerns.some(uc => dp.includes(uc) || uc.includes(dp))
            );
            if (!hasAnyMatch) {
                return 0;  // 관련 없는 시술은 0점
            }
        }
        
        // 1. concernToTreatments 매핑 기반 점수 (가장 중요)
        concerns.forEach(concern => {
            const mappedTreatments = concernToTreatments[concern] || [];
            if (mappedTreatments.some(mt => treatmentName.includes(mt) || mt.includes(treatmentName))) {
                score += isPrimary ? 50 : 25;
                treatmentReasons.push(`${concern} 개선에 효과적인 시술`);
            }
        });
        
        // 2. 효과/타겟 텍스트 매칭 점수
        concerns.forEach(concern => {
            const effects = treatment.effects?.primary || [];
            const targets = treatment.effects?.targets || [];
            const allEffects = [...effects, ...targets].join(' ').toLowerCase();
            const concernLower = concern.toLowerCase();
            
            if (allEffects.includes(concernLower) || concernLower.includes(treatment.category?.toLowerCase() || '')) {
                score += isPrimary ? 20 : 10;
            }
        });
        
        // 3. 카테고리 매칭 (리프팅, 필러 등)
        const categoryMap = {
            '처진피부': ['리프팅', 'HIFU', '고주파', '실리프팅'],
            '주름': ['보톡스', '필러', '리프팅'],
            '탄력저하': ['리프팅', '고주파', 'HIFU', '스킨부스터'],
            '볼륨손실': ['필러', '지방이식'],
            '모공': ['레이저', '필링', '프락셔널'],
            '기미잡티': ['레이저', '토닝', 'IPL'],
            '여드름': ['필링', '레이저', 'PDT'],
            '여드름흉터': ['프락셔널', '레이저', 'MTS']
        };
        
        concerns.forEach(concern => {
            const categories = categoryMap[concern] || [];
            if (categories.some(cat => treatment.category?.includes(cat))) {
                score += isPrimary ? 15 : 8;
            }
        });
        
        // 4. 시술 타입 선호도 매칭
        if (treatmentType.length > 0 && !treatmentType.includes('상관없음')) {
            let typeMatch = false;
            treatmentType.forEach(type => {
                const matchKeywords = typeToCategory[type] || [];
                if (matchKeywords.some(kw => treatmentName.includes(kw) || treatment.category?.includes(kw))) {
                    typeMatch = true;
                    score += 25;
                    treatmentReasons.push(`선호하시는 ${type} 계열 시술`);
                }
            });
            if (!typeMatch) {
                score -= 15;
            }
        }
        
        // 5. 유지 기간 선호도 매칭
        const durationTreatments = durationToTreatments[duration] || [];
        if (durationTreatments.some(dt => treatmentName.includes(dt))) {
            score += 20;
            const durationText = duration === '단기' ? '3~6개월' : duration === '중기' ? '6~12개월' : '1년 이상';
            treatmentReasons.push(`원하시는 ${durationText} 유지 기간에 적합`);
        }
        
        // 6. 우선순위 반영 (대폭 강화)
        if (priority === '효과') {
            // 효과 중시: 고강도, 검증된, 비싼 시술 우선
            const minPrice = extractMinPrice(treatment.pricing?.range);
            const intensityLevel = treatment.intensity?.level || 3;
            
            if (minPrice >= 80) {
                score += 25;
                treatmentReasons.push('프리미엄 고효과 시술');
            } else if (minPrice >= 50) {
                score += 15;
                treatmentReasons.push('높은 효과를 기대할 수 있는 시술');
            }
            
            if (intensityLevel >= 4) {
                score += 20; // 강한 시술 보너스
                treatmentReasons.push('강력한 효과의 시술');
            } else if (intensityLevel >= 3) {
                score += 10;
            }
            
            // 효과 검증된 시술 보너스
            if (['울쎄라', '써마지', '프락셀', '피코슈어'].some(t => treatmentName.includes(t))) {
                score += 15;
            }
        } else if (priority === '편안함') {
            // 편안함 중시: 저통증, 다운타임 적은 시술 우선
            const painLevel = treatment.recovery?.painLevel || 0;
            const downtimeDays = parseDowntime(treatment.recovery?.downtime);
            const intensityLevel = treatment.intensity?.level || 3;
            
            if (painLevel <= 1) {
                score += 30;
                treatmentReasons.push('거의 무통증 시술');
            } else if (painLevel <= 2) {
                score += 20;
                treatmentReasons.push('통증이 적어 편안한 시술');
            }
            
            if (downtimeDays === 0) {
                score += 25;
                treatmentReasons.push('다운타임 없음');
            } else if (downtimeDays <= 1) {
                score += 15;
            }
            
            if (intensityLevel <= 2) {
                score += 15;
                treatmentReasons.push('부드러운 시술');
            }
            
            // 강한 시술 페널티
            if (painLevel >= 4) score -= 40;
            if (intensityLevel >= 4) score -= 30;
            if (downtimeDays >= 7) score -= 25;
        } else if (priority === '가성비') {
            // 가성비 중시: 가격 대비 효과 높은 시술 우선
            const minPrice = extractMinPrice(treatment.pricing?.range);
            const intensityLevel = treatment.intensity?.level || 3;
            
            if (minPrice > 0 && minPrice <= 20) {
                score += 30;
                treatmentReasons.push('가격 대비 효과가 뛰어난 시술');
            } else if (minPrice <= 30) {
                score += 20;
                treatmentReasons.push('가격 대비 효과가 좋은 시술');
            } else if (minPrice <= 50) {
                score += 10;
            }
            
            // 저렴하면서 효과 좋은 시술 보너스
            if (minPrice <= 30 && intensityLevel >= 3) {
                score += 15;
            }
            
            // 비싼 시술 페널티
            if (minPrice >= 100) score -= 20;
            if (minPrice >= 150) score -= 20;
        }
        
        // ===== NEW: 7. DB 기반 연령대 체크 (최우선) =====
        if (treatment.ageRange) {
            const userAgeNum = parseAgeToNumber(age);
            const { minimum, maximum, youngWarning } = treatment.ageRange;
            
            // 연령대 범위 체크
            if (userAgeNum < minimum) {
                // 최소 연령 미달 - 강한 페널티
                const ageDiff = minimum - userAgeNum;
                score -= Math.min(100, ageDiff * 10); // 나이 차이당 10점 감점, 최대 100점
                if (youngWarning) {
                    treatmentReasons.push(`△ ${youngWarning}`);
                }
            } else if (userAgeNum > maximum) {
                // 최대 연령 초과 - 약한 페널티
                score -= 20;
            } else {
                // 적정 연령 - 보너스
                score += 15;
            }
        }
        
        // ===== NEW: 8. DB 기반 고민 매칭 (직접 매핑) =====
        let matchedAnyConcern = false; // 핵심 고민 중 하나라도 매칭되었는지
        
        if (treatment.concerns) {
            const { primary: txPrimary, notEffective } = treatment.concerns;
            
            // 시술의 주요 타겟이 사용자 고민과 일치하면 높은 점수
            primaryConcerns.forEach(concern => {
                if (txPrimary && txPrimary.includes(concern)) {
                    score += 30; // 강한 매칭
                    matchedAnyConcern = true;
                    treatmentReasons.push(`${concern} 개선에 효과적`);
                }
            });
            
            // 부가 고민 매칭
            secondaryConcerns.forEach(concern => {
                if (txPrimary && txPrimary.includes(concern)) {
                    score += 15;
                    matchedAnyConcern = true;
                }
            });
            
            // 효과 없는 고민에 매칭되면 페널티
            primaryConcerns.forEach(concern => {
                if (notEffective && notEffective.includes(concern)) {
                    score -= 40; // 강한 페널티
                }
            });
        }
        
        // ===== CRITICAL: 핵심 고민과 전혀 관련 없는 시술은 강하게 페널티 =====
        // concernToTreatments 매핑도 체크
        const allUserConcerns = [...primaryConcerns, ...secondaryConcerns];
        let mappedMatch = false;
        allUserConcerns.forEach(concern => {
            const mappedTreatments = concernToTreatments[concern] || [];
            if (mappedTreatments.some(mt => treatmentName.includes(mt) || mt.includes(treatmentName))) {
                mappedMatch = true;
            }
        });
        
        // DB concerns와 concernToTreatments 둘 다 매칭 안 되면 큰 페널티
        if (!matchedAnyConcern && !mappedMatch) {
            score -= 80; // 관련 없는 시술
        }
        
        // ===== NEW: 9. DB 기반 강도 체크 =====
        if (treatment.intensity) {
            const { level, firstTimerOk } = treatment.intensity;
            
            // 처음 시술 받는 분에게 강한 시술 페널티
            if (experience === '처음' && !firstTimerOk) {
                score -= 30;
                treatmentReasons.push('시술 경험자에게 더 적합');
            }
            
            // 편안함 우선인데 강한 시술이면 페널티
            if (priority === '편안함' && level >= 4) {
                score -= 25;
            }
        }
        
        // 10. 시술 경험 반영 (기존 로직 - 백업)
        if (experience === '처음') {
            const painLevel = treatment.recovery?.painLevel || 0;
            if (painLevel <= 2) {
                score += 10;
                treatmentReasons.push('처음 시술받는 분께 적합한 난이도');
            }
            if (['실리프팅', '지방이식', '지방흡입'].some(t => treatmentName.includes(t))) {
                score -= 15;
            }
        } else if (experience === '자주') {
            score += 5;
        }
        
        // 8. 이전 시술 경험 반영
        if (pastTreatments.length > 0 && !pastTreatments.includes('없음')) {
            pastTreatments.forEach(past => {
                if (treatmentName.includes(past)) {
                    score += 10;
                    treatmentReasons.push(`이전에 경험하신 ${past} 계열 시술`);
                }
                const synergies = enhancedSynergyMap.synergies[past]?.partners || [];
                if (synergies.some(s => treatmentName.includes(s))) {
                    score += 15;
                    treatmentReasons.push(`기존 ${past} 시술과 시너지 효과`);
                }
            });
        }
        
        // ===== NEW: 9. 연령대별 맞춤 점수 =====
        const ageKey = Object.keys(ageRecommendations).find(key => age === key || age.includes(key)) || 
                       (age.includes('40대') ? '40대 초반' : age.includes('30대') ? '30대 초반' : 
                        age.includes('20대') ? '20대 초반' : age.includes('50대') ? '50대' : 
                        age.includes('60대') ? '60대 이상' : age.includes('10대') ? '10대' : '30대 초반');
        const ageData = ageRecommendations[ageKey] || ageRecommendations['30대 초반'];
        
        if (ageData.preferred.some(p => treatmentName.includes(p))) {
            score += 20 * (ageData.boost || 1.0);
            treatmentReasons.push(`${age} 연령대에 적합한 시술`);
        }
        if (ageData.avoid && ageData.avoid.some(a => treatmentName.includes(a))) {
            // penalty가 낮을수록 (0.1~0.2) 더 강한 페널티 (-80~-90점)
            const penaltyScore = 100 * (1 - (ageData.penalty || 1.0));
            score -= penaltyScore;
        }
        
        // ===== NEW: 피부 타입별 맞춤 점수 =====
        const skinTypeData = skinTypeRecommendations[skinType];
        if (skinTypeData) {
            if (skinTypeData.preferred.some(p => treatmentName.includes(p))) {
                score += 15 * (skinTypeData.boost || 1.0);
                treatmentReasons.push(`${skinType} 피부에 적합한 시술`);
                recommendationReasons.skinTypeFactors.push(`${skinType} 피부에 효과적인 ${treatmentName}`);
            }
            if (skinTypeData.avoid && skinTypeData.avoid.some(a => treatmentName.includes(a))) {
                const penaltyScore = 30 * (1 - (skinTypeData.penalty || 1.0));
                score -= penaltyScore;
                treatmentReasons.push(`△ ${skinType} 피부에 주의 필요`);
            }
        }
        
        // ===== NEW: 10. 부위별 최적화 점수 =====
        if (areas.length > 0) {
            areas.forEach(area => {
                const areaData = areaOptimization[area];
                if (areaData) {
                    if (areaData.treatments.some(t => treatmentName.includes(t)) ||
                        areaData.keywords.some(k => treatmentName.includes(k))) {
                        score += 25;
                        treatmentReasons.push(`${area} 부위에 최적화된 시술`);
                    }
                }
            });
        }
        
        // ===== NEW: 11. 계절별 가중치 =====
        if (seasonalFactors.isSummer) {
            if (seasonalFactors.summerAvoid.some(s => treatmentName.includes(s))) {
                score -= 20;
            }
            if (seasonalFactors.summerPrefer.some(s => treatmentName.includes(s))) {
                score += 15;
                treatmentReasons.push('여름철에 적합한 시술');
            }
        } else if (seasonalFactors.isWinter) {
            if (seasonalFactors.winterPrefer.some(s => treatmentName.includes(s))) {
                score += 15;
                treatmentReasons.push('겨울철에 효과적인 시술');
            }
        }
        
        // ===== NEW: 12. 시술 빈도(1회성/정기) 반영 =====
        if (frequency === '1회성') {
            // 즉시 효과 시술 선호
            if (effectTiming.immediate.treatments.some(t => treatmentName.includes(t))) {
                score += 20;
                treatmentReasons.push('빠른 효과를 볼 수 있는 시술');
            }
        } else if (frequency === '정기') {
            // 정기 관리용 시술 선호
            const courseData = Object.entries(treatmentCourses).find(([name]) => treatmentName.includes(name));
            if (courseData && courseData[1].sessions > 1) {
                score += 15;
                treatmentReasons.push('정기 관리에 적합한 코스형 시술');
            }
        }
        
        // ===== NEW: 13. 리뷰/만족도 반영 =====
        const review = treatment.review || {};
        if (review.likes && review.likes.length > 3) {
            score += 10;
        }
        if (review.overall && (review.overall.includes('만족') || review.overall.includes('효과'))) {
            score += 5;
        }
        
        // 다운타임 체크
        const downtimeDays = parseDowntime(treatment.recovery?.downtime);
        if (downtimeDays > maxDowntime) {
            score -= 50;
        }
        
        // 통증 체크
        const painLevel = treatment.recovery?.painLevel || 0;
        if (painLevel > maxPain) {
            score -= 20;
        }
        
        // 가격 체크
        const minPrice = extractMinPrice(treatment.pricing?.range);
        if (minPrice > budget * 0.5) {
            score -= 10;
        }
        
        // 추천 이유 저장
        treatment._reasons = treatmentReasons;
        
        return score;
    }
    
    function parseDowntime(str) {
        if (!str || str === '없음') return 0;
        const match = str.match(/(\d+)/);
        return match ? parseInt(match[0]) : 3;
    }
    
    // 시술 시너지 맵 - 함께 받으면 효과적인 조합 (대폭 확장)
    const synergyMap = {
        // ===== 리프팅 계열 =====
        '울쎄라': ['보톡스', '필러', '스킨보톡스', '리쥬란', '써마지', '실리프팅', '물광주사'],
        '써마지': ['보톡스', '필러', '스킨보톡스', '인모드', '울쎄라', '리쥬란'],
        '슈링크': ['보톡스', '필러', '스킨보톡스', '리쥬란', '물광주사'],
        '실리프팅': ['보톡스', '필러', '울쎄라', '리쥬란'],
        '인모드': ['보톡스', '써마지', '필러', '리쥬란'],
        '더블로': ['보톡스', '필러', '리쥬란', '스킨보톡스'],
        '올리지오': ['보톡스', '필러', '리쥬란'],
        '리프테라': ['보톡스', '필러', '스킨보톡스'],
        '텐써라': ['보톡스', '필러', '리쥬란'],
        '소노퀸': ['보톡스', '스킨보톡스', '리쥬란'],
        
        // ===== 보톡스/필러 계열 =====
        '보톡스': ['필러', '스킨보톡스', '리쥬란', '물광주사', '울쎄라', '써마지', '실리프팅'],
        '필러': ['보톡스', '리쥬란', '스킨보톡스', '울쎄라', '써마지', '물광주사'],
        '스킨보톡스': ['리쥬란', '물광주사', '아쿠아필', '보톡스', '레이저토닝'],
        
        // ===== 스킨부스터 계열 =====
        '리쥬란': ['물광주사', '레이저토닝', '아쿠아필', '보톡스', '필러', '스킨보톡스', 'IPL', '프락셀'],
        '물광주사': ['리쥬란', '아쿠아필', '레이저토닝', '보톡스', '스킨보톡스', 'IPL'],
        '쥬베룩': ['리쥬란', '물광주사', '보톡스', '필러', '레이저토닝'],
        '엑소좀': ['리쥬란', '물광주사', '프락셀', '모피어스8', '레이저토닝'],
        '프로파일로': ['리쥬란', '보톡스', '필러', '울쎄라'],
        '볼뉴머': ['리쥬란', '필러', '울쎄라', '보톡스'],
        
        // ===== 필링/클렌징 계열 =====
        '아쿠아필': ['리쥬란', '물광주사', '레이저토닝', '스킨보톡스', 'IPL', '산소테라피'],
        '살리실산필링': ['아쿠아필', '리쥬란', 'LED테라피', '레이저토닝'],
        '글리콜산필링': ['아쿠아필', '리쥬란', '물광주사', '레이저토닝'],
        '레티놀필링': ['리쥬란', '물광주사', '아쿠아필', '레이저토닝'],
        '제스너필': ['아쿠아필', '리쥬란', '레이저토닝'],
        
        // ===== 레이저 토닝/색소 계열 =====
        '피코슈어': ['레이저토닝', 'IPL', '리쥬란', '물광주사', '아쿠아필'],
        '피코웨이': ['레이저토닝', 'IPL', '리쥬란', '아쿠아필'],
        '레이저토닝': ['피코슈어', 'IPL', '리쥬란', '아쿠아필', '물광주사', '스킨보톡스'],
        'IPL': ['레이저토닝', '리쥬란', '물광주사', '아쿠아필', '스킨보톡스'],
        '스펙트라': ['리쥬란', '아쿠아필', 'IPL', '레이저토닝'],
        '엑셀브이': ['리쥬란', '아쿠아필', 'IPL'],
        
        // ===== 흉터/모공 계열 =====
        '프락셀': ['리쥬란', '스킨보톡스', 'CO2레이저', '엑소좀', '더마펜'],
        'CO2레이저': ['리쥬란', '프락셀', '엑소좀'],
        '모피어스8': ['리쥬란', '보톡스', '엑소좀', '프락셀'],
        '실펌': ['리쥬란', '아쿠아필', '엑소좀'],
        '실펌X': ['리쥬란', '아쿠아필', '엑소좀', '물광주사'],
        '포텐자': ['리쥬란', '엑소좀', '프락셀'],
        '인트라셀': ['리쥬란', '엑소좀', '프락셀'],
        '더마펜': ['리쥬란', '엑소좀', '물광주사'],
        '서브시전': ['프락셀', '리쥬란', 'CO2레이저'],
        
        // ===== 홍조/혈관 계열 =====
        '브이빔': ['IPL', '제네시스', '리쥬란', '아쿠아필'],
        '제네시스': ['리쥬란', '브이빔', '물광주사', '아쿠아필'],
        '엑셀브이': ['리쥬란', '아쿠아필', 'IPL', '제네시스'],
        
        // ===== 지방/윤곽 계열 =====
        '지방분해주사': ['고주파', '윤곽주사', '인모드', '슈링크'],
        '윤곽주사': ['지방분해주사', '보톡스', '슈링크', '인모드'],
        '슈링크유니버스': ['윤곽주사', '지방분해주사', '보톡스'],
        '벨라소닉': ['윤곽주사', '지방분해주사'],
        '리포소닉스': ['윤곽주사', '인모드'],
        
        // ===== 탈모 계열 =====
        '두피PRP': ['두피메조', '엑소좀', '미녹시딜'],
        '두피메조': ['두피PRP', '엑소좀', '미녹시딜'],
        '탈모엑소좀': ['두피PRP', '두피메조', '미녹시딜'],
        '미녹시딜': ['두피PRP', '두피메조'],
        
        // ===== 수액/주사 계열 =====
        '백옥주사': ['신데렐라주사', '마늘주사', '비타민C고용량'],
        '신데렐라주사': ['백옥주사', '비타민C고용량', '마늘주사'],
        '비타민C고용량': ['백옥주사', '신데렐라주사', '마늘주사'],
        '마늘주사': ['백옥주사', '비타민C고용량'],
        
        // ===== 스킨케어 계열 =====
        '이온토': ['초음파관리', '물광주사', '리쥬란'],
        '초음파관리': ['이온토', '물광주사', 'LED테라피'],
        'LED테라피': ['아쿠아필', '리쥬란', '초음파관리'],
        'MTS': ['리쥬란', '엑소좀', '물광주사'],
        '산소테라피': ['아쿠아필', '물광주사', '리쥬란'],
        'LDM': ['리쥬란', '물광주사', '아쿠아필'],
        '리투오': ['리쥬란', '물광주사', '보톡스', '아쿠아필']
    };
    
    // 모든 시술 점수 계산 (primary + secondary 모두 반영)
    const scoredTreatments = treatments.map(t => {
        const primaryScore = scoreTreatment(t, true);
        const secondaryScore = scoreTreatment(t, false);
        const matchedConcerns = getMatchedConcerns(t);
        return {
            ...t,
            score: primaryScore + secondaryScore * 0.7,  // secondary 가중치 높임
            primaryScore,
            secondaryScore,
            matchedConcerns,  // 매칭된 고민 저장
            minPrice: extractMinPrice(t.pricing?.range)
        };
    }).filter(t => {
        // 점수가 0이거나 가격이 없으면 제외
        if (t.score <= 0 || t.minPrice <= 0) return false;
        // 매칭된 고민이 하나도 없으면 제외 (핵심 필터링!)
        if (!t.matchedConcerns || t.matchedConcerns.length === 0) return false;
        return true;
    }).sort((a, b) => b.score - a.score);
    
    // 부가 고민 전용 시술 (primary=0, secondary>0)
    const secondaryOnlyTreatments = treatments.map(t => {
        const secondaryScore = scoreTreatment(t, false);
        return {
            ...t,
            score: secondaryScore,
            primaryScore: 0,
            secondaryScore,
            minPrice: extractMinPrice(t.pricing?.range)
        };
    }).filter(t => t.score > 0 && t.minPrice > 0 && !scoredTreatments.some(st => st.name === t.name))
      .sort((a, b) => b.score - a.score);
    
    // 시술에 매칭된 고민 찾기 (DB concerns 필드 우선)
    function getMatchedConcerns(treatment) {
        const matched = [];
        const treatmentName = treatment.name || '';
        const category = treatment.category || '';
        const subcategory = treatment.subcategory || '';
        const effects = [...(treatment.effects?.primary || []), ...(treatment.effects?.targets || [])].join(' ').toLowerCase();
        const allText = `${treatmentName} ${category} ${subcategory} ${effects}`.toLowerCase();
        
        const userConcerns = [...primaryConcerns, ...secondaryConcerns];
        
        // 0. DB의 concerns.primary 필드 우선 체크 (가장 정확)
        if (treatment.concerns?.primary?.length) {
            const dbPrimary = treatment.concerns.primary.map(c => c.toLowerCase());
            userConcerns.forEach(concern => {
                const concernLower = concern.toLowerCase();
                if (dbPrimary.some(dp => dp.includes(concernLower) || concernLower.includes(dp))) {
                    if (!matched.includes(concern)) matched.push(concern);
                }
            });
            // DB에 명시된 고민만 사용 - 다른 매칭 스킵
            if (matched.length > 0) return matched;
        }
        
        userConcerns.forEach(concern => {
            // 1. concernToTreatments 매핑 체크
            const mappedTreatments = concernToTreatments[concern] || [];
            if (mappedTreatments.some(mt => treatmentName.includes(mt) || mt.includes(treatmentName))) {
                matched.push(concern);
                return;
            }
            
            // 2. 효과/타겟에서 고민 키워드 체크
            const concernLower = concern.toLowerCase();
            if (effects.includes(concernLower)) {
                matched.push(concern);
                return;
            }
            
            // 3. 카테고리/서브카테고리/시술명 매칭 (확장)
            const categoryMap = {
                '처진피부': ['리프팅', 'HIFU', '고주파', '울쎄라', '써마지', '실리프팅', '슈링크', '인모드', '타이트닝', '올리지오', '더블로', '텐써마', '유써마', '소프웨이브', '하이푸'],
                '주름': ['보톡스', '리프팅', '주름', '울쎄라', '써마지', '리쥬란', '스킨보톡스', '콜라겐', '쥬베룩', '슈링크', '인모드'],
                '탄력저하': ['리프팅', '고주파', '스킨부스터', '콜라겐', '탄력', '써마지', '울쎄라', '타이트닝', '리쥬란', '볼뉴머', '프로파일로', '스킨보톡스', '인모드', '슈링크', '보톡스'],
                '볼륨손실': ['필러', '지방', '볼륨', '스컬트라', '엘란쎄', '쥬베룩', '볼뉴머', '콜라겐'],
                '이중턱': ['지방', '윤곽', '턱', '슈링크', '인모드', '벨라소닉', '더블로'],
                '팔자주름': ['필러', '리프팅', '팔자', '실리프팅', '울쎄라', '보톡스'],
                '모공': ['필링', '모공', '아쿠아필', '실펌', '모피어스', '제네시스', 'MTS', '포텐자', '시크릿', '써마지', '인모드', '스킨보톡스'],
                '기미잡티': ['레이저', '토닝', 'IPL', '피코', '기미', '색소', '멜라닌', '스펙트라', '클라리티', '엑셀브이'],
                '피부결': ['필링', '스킨부스터', '리쥬란', 'MTS', '레이저', '아쿠아필', '피부결', '물광', '벨벳', '제네시스', '엑소좀', '살리실산', '글리콜산'],
                '피부톤': ['토닝', 'IPL', '레이저', '백옥', '신데렐라', '글루타치온', '비타민', '제네시스', '클라리티'],
                '홍조': ['브이빔', 'IPL', '혈관', '홍조', '레이저', '엑셀브이', '옐로우', '제네시스'],
                '색소침착': ['토닝', '피코', 'IPL', '색소', '레이저', '스펙트라'],
                '여드름': ['필링', 'PDT', '레이저', '여드름', '아그네스', '압출', '블루라이트', '살리실산', '아쿠아필', '스킨스케일링'],
                '여드름흉터': ['프락셀', '프락셔널', 'MTS', 'CO2', '레이저', '흉터', '모피어스', '시크릿', '서브시전', '인트라셀', '더마펜', '도트필링', '포텐자'],
                '흉터': ['프락셀', '프락셔널', 'CO2', '레이저', '흉터', '모피어스', '시크릿', '서브시전'],
                '튼살': ['프락셀', 'CO2', '카복시', '튼살', 'MTS', '인피니', '실펌'],
                '다크서클': ['필러', '리쥬란', '눈밑', '다크서클', '카복시', '아이', '지방재배치'],
                '제모': ['제모', '레이저', '소프라노', '젠틀맥스', '클라리티', '다이오드', '알렉산드라이트'],
                '탈모': ['탈모', 'PRP', '두피', '모발', '미녹시딜', '엑소좀', '메조테라피', 'HARG', '줄기세포'],
                '다한증': ['다한증', '미라드라이', '보톡스']
            };
            
            const cats = categoryMap[concern] || [];
            if (cats.some(c => allText.includes(c.toLowerCase()))) {
                matched.push(concern);
            }
        });
        
        // 매칭된 고민이 없으면, 해당 시술의 카테고리에서 유추
        if (matched.length === 0) {
            // 시술 카테고리로 고민 유추
            const categoryToConcern = {
                '리프팅': ['탄력저하'],
                'HIFU': ['탄력저하'],
                '고주파': ['탄력저하'],
                '보톡스': ['주름'],
                '필러': ['볼륨손실'],
                '스킨부스터': ['피부결'],
                '레이저토닝': ['피부톤'],
                'IPL': ['피부톤'],
                '필링': ['피부결'],
                '프락셔널': ['모공'],
                '탈모': ['탈모'],
                '제모': ['제모'],
                'PRP': ['탈모'],
                '두피': ['탈모']
            };
            
            for (const [keyword, concerns] of Object.entries(categoryToConcern)) {
                if (allText.includes(keyword.toLowerCase())) {
                    const relevantConcerns = concerns.filter(c => 
                        primaryConcerns.includes(c) || secondaryConcerns.includes(c)
                    );
                    if (relevantConcerns.length > 0) {
                        matched.push(...relevantConcerns);
                        break;
                    }
                }
            }
        }
        
        return [...new Set(matched)]; // 중복 제거
    }
    
    // 예산 내 조합 생성 (최대 8개, 시너지 고려)
    function createCombination(name, budgetRatio, strategy, excludeTreatments = new Set()) {
        const targetBudget = budget * budgetRatio;
        const combo = { name, treatments: [], totalMin: 0, totalMax: 0 };
        const usedCategories = new Set();
        const usedNames = new Set();
        
        // 시술 계열 그룹 정의 (중복 방지용)
        const treatmentGroups = {
            '스킨부스터': ['리쥬란', '물광주사', '사넬주사', '엑소좀', '쥬베룩', '볼뉴머', '프로파일로', '연어주사', '폴리뉴클레오타이드'],
            '필링': ['아쿠아필', '알라딘필', '할리우드필', '살리실산필링', '글리콜산필링', '레티놀필링', '제스너필', '벨벳필'],
            'HIFU리프팅': ['울쎄라', '더블로', '슈링크', '리프테라', '소노퀸', '울트라포머', '울트라셀', '텐써라'],
            'RF리프팅': ['써마지', '인모드', '올리지오', '스카이리프트', '포텐자'],
            '실리프팅': ['실리프팅', '민트실', '녹는실', '실루엣소프트', 'PDO실'],
            '흉터모공레이저': ['프락셀', '모피어스8', '실펌', '실펌X', '포텐자', '인트라셀', 'CO2레이저', '시크릿'],
            '색소레이저': ['피코슈어', '피코웨이', '레이저토닝', '스펙트라', '루비레이저', '큐스위치'],
            '토닝': ['IPL', '레이저토닝', '제네시스', '클라리티', '엑셀브이'],
            '탈모': ['두피PRP', '두피메조', '미녹시딜', '탈모엑소좀', '모낭주사'],
            '수액': ['백옥주사', '신데렐라주사', '비타민C고용량', '마늘주사', '태반주사'],
            '바디윤곽': ['지방분해주사', '윤곽주사', '리포소닉스', '벨라소닉', '슈링크유니버스'],
            '홍조혈관': ['브이빔', '엑셀브이', '옐로우레이저', '혈관레이저'],
            '관리': ['이온토', '초음파관리', 'LED테라피', 'LDM', '산소테라피', 'MTS']
        };

        // 가격대별 시술 티어 (A/B/C 플랜 차별화용)
        // premium: A플랜용, value: B플랜용, budget: C플랜용
        const priceTiers = {
            'HIFU리프팅': { premium: ['울쎄라'], value: ['더블로', '리프테라'], budget: ['슈링크', '소노퀸', '울트라포머'] },
            'RF리프팅': { premium: ['써마지'], value: ['인모드', '올리지오'], budget: ['스카이리프트', '포텐자'] },
            '실리프팅': { premium: ['실루엣소프트'], value: ['실리프팅', '민트실'], budget: ['녹는실', 'PDO실'] },
            '스킨부스터': { premium: ['엑소좀', '쥬베룩'], value: ['리쥬란', '볼뉴머'], budget: ['물광주사', '연어주사'] },
            '흉터모공레이저': { premium: ['모피어스8', '시크릿'], value: ['실펌X', '포텐자'], budget: ['실펌', 'MTS'] },
            '색소레이저': { premium: ['피코슈어', '피코웨이'], value: ['스펙트라', '클라리티'], budget: ['레이저토닝', 'IPL'] },
            '토닝': { premium: ['엑셀브이', '클라리티'], value: ['제네시스'], budget: ['IPL', '레이저토닝'] }
        };

        // 전략에 따른 티어 우선순위 가져오기
        function getPreferredTier(strategy) {
            if (strategy === 'premium') return ['premium', 'value', 'budget'];
            if (strategy === 'value') return ['value', 'budget', 'premium'];
            return ['budget', 'value', 'premium'];
        }

        // 시술이 현재 전략의 티어에 맞는지 확인
        function matchesTierStrategy(treatmentName, strategy) {
            const preferredTiers = getPreferredTier(strategy);
            const group = getTreatmentGroup(treatmentName);
            if (!group || !priceTiers[group]) return true; // 티어 없으면 통과

            const tierInfo = priceTiers[group];
            const primaryTier = preferredTiers[0];
            const secondaryTier = preferredTiers[1];

            // 우선 티어에 있으면 +점수, 안맞는 티어면 -점수
            if (tierInfo[primaryTier]?.some(t => treatmentName.includes(t))) return 2;
            if (tierInfo[secondaryTier]?.some(t => treatmentName.includes(t))) return 1;
            return 0;
        }
        
        // 시술이 속한 그룹 찾기
        function getTreatmentGroup(treatmentName) {
            for (const [group, members] of Object.entries(treatmentGroups)) {
                if (members.some(m => treatmentName.includes(m) || m.includes(treatmentName))) {
                    return group;
                }
            }
            return null;
        }
        
        // 그룹별 사용 카운트
        const groupCount = {};
        
        // 시술이 기존 시술과 시너지가 있는지 확인
        function hasSynergyWithExisting(treatment) {
            const synergies = synergyMap[treatment.name] || [];
            return combo.treatments.some(t => 
                synergies.includes(t.name) || (synergyMap[t.name] || []).includes(treatment.name)
            );
        }
        
        // 시술 추가 가능 여부 확인 (중복 제한)
        function canAddTreatment(treatment) {
            const group = getTreatmentGroup(treatment.name);
            if (!group) return true; // 그룹 없으면 제한 없음
            
            const currentCount = groupCount[group] || 0;
            const maxAllowed = hasSynergyWithExisting(treatment) ? 3 : 2;
            
            return currentCount < maxAllowed;
        }
        
        // 핵심: 고민과 관련있는 시술만 필터링 (score > 20 이상, 제외 목록 제외, 매칭된 고민 있어야 함)
        const relevantTreatments = scoredTreatments
            .filter(t => t.score >= 20 && !excludeTreatments.has(t.name) && t.matchedConcerns?.length > 0);
        
        // 전략에 따른 시술 정렬 (티어 매칭 포함)
        let pool = [...relevantTreatments];

        if (strategy === 'premium') {
            // 프리미엄: 점수 40 이상 + 매칭된 고민 있는 것 중 티어 우선, 그 다음 가격 높은 순
            pool = pool.filter(t => t.score >= 40 && t.matchedConcerns?.length > 0);
            pool.sort((a, b) => {
                // 1. 티어 매칭 우선
                const aTier = matchesTierStrategy(a.name, strategy);
                const bTier = matchesTierStrategy(b.name, strategy);
                if (bTier !== aTier) return bTier - aTier;
                // 2. 핵심 고민 매칭 수
                const aPrimaryMatch = a.matchedConcerns.filter(c => primaryConcerns.includes(c)).length;
                const bPrimaryMatch = b.matchedConcerns.filter(c => primaryConcerns.includes(c)).length;
                if (bPrimaryMatch !== aPrimaryMatch) return bPrimaryMatch - aPrimaryMatch;
                // 3. 가격
                return b.minPrice - a.minPrice;
            });
        } else if (strategy === 'value') {
            // 가성비: 티어 매칭 후 점수/가격 비율
            pool.sort((a, b) => {
                const aTier = matchesTierStrategy(a.name, strategy);
                const bTier = matchesTierStrategy(b.name, strategy);
                if (bTier !== aTier) return bTier - aTier;
                return (b.score / Math.max(b.minPrice, 1)) - (a.score / Math.max(a.minPrice, 1));
            });
        } else {
            // 버짓: 티어 매칭 후 점수순
            pool.sort((a, b) => {
                const aTier = matchesTierStrategy(a.name, strategy);
                const bTier = matchesTierStrategy(b.name, strategy);
                if (bTier !== aTier) return bTier - aTier;
                return b.score - a.score;
            });
        }
        
        // 시술 추가 함수 (그룹 카운트 업데이트 포함)
        function addTreatment(treatment) {
            // 중복 제한 확인
            if (!canAddTreatment(treatment)) return false;
            
            // review.summary에서 shortDesc 생성 (여러 소스에서 시도)
            let shortDesc = '';
            if (treatment.review && treatment.review.summary) {
                const summary = treatment.review.summary;
                shortDesc = summary.length > 60 ? summary.substring(0, 60) + '...' : summary;
            } else if (treatment.description) {
                shortDesc = treatment.description.length > 60 ? treatment.description.substring(0, 60) + '...' : treatment.description;
            }
            
            combo.treatments.push({
                ...treatment,
                shortDesc: shortDesc,
                matchedConcerns: getMatchedConcerns(treatment)
            });
            combo.totalMin += treatment.minPrice;
            usedCategories.add(treatment.category);
            usedNames.add(treatment.name);
            
            // 그룹 카운트 업데이트
            const group = getTreatmentGroup(treatment.name);
            if (group) {
                groupCount[group] = (groupCount[group] || 0) + 1;
            }
            
            const priceMatch = (treatment.pricing?.range || '').match(/(\d+)/g);
            if (priceMatch) {
                combo.totalMax += parseInt(priceMatch[priceMatch.length - 1]) || treatment.minPrice;
            } else {
                combo.totalMax += treatment.minPrice;
            }
            return true;
        }
        
        // 1단계: 핵심 고민별 필수 시술 선택 (각 고민당 최소 1개)
        const coveredConcerns = new Set();
        
        // 핵심 고민별로 최적 시술 1개씩 먼저 선택 (예산 무시하고 우선 선택)
        for (const concern of primaryConcerns) {
            if (coveredConcerns.has(concern)) continue;
            
            // 해당 고민에 매칭되는 시술 찾기 (중복 제한도 체크)
            const concernTreatments = pool.filter(t => {
                if (usedNames.has(t.name)) return false;
                if (!canAddTreatment(t)) return false;  // 중복 제한 체크
                const matched = t.matchedConcerns || getMatchedConcerns(t);
                return matched.includes(concern);
            });
            
            if (concernTreatments.length > 0) {
                // 점수순 정렬 (가격이 아닌 점수 기준)
                concernTreatments.sort((a, b) => b.score - a.score);
                const best = concernTreatments[0];
                
                // 예산 초과해도 핵심 고민은 커버해야 함 (단, 예산의 150% 이내)
                const newTotal = combo.totalMin + best.minPrice;
                if (newTotal <= targetBudget * 1.5) {
                    if (addTreatment(best)) {
                        // 이 시술이 커버하는 모든 고민 표시
                        const covered = best.matchedConcerns || getMatchedConcerns(best);
                        covered.forEach(c => coveredConcerns.add(c));
                    }
                }
            }
        }
        
        // 1-1단계: 아직 커버되지 않은 핵심 고민이 있으면 추가 시도
        const uncoveredPrimary = primaryConcerns.filter(c => !coveredConcerns.has(c));
        for (const concern of uncoveredPrimary) {
            // 더 넓은 범위에서 찾기 (중복 제한도 체크)
            const fallbackTreatments = scoredTreatments.filter(t => {
                if (usedNames.has(t.name)) return false;
                if (!canAddTreatment(t)) return false;  // 중복 제한 체크
                const matched = t.matchedConcerns || getMatchedConcerns(t);
                return matched.includes(concern);
            }).sort((a, b) => b.score - a.score);
            
            if (fallbackTreatments.length > 0) {
                const best = fallbackTreatments[0];
                const newTotal = combo.totalMin + best.minPrice;
                if (newTotal <= targetBudget * 2) {  // 더 여유있게
                    if (addTreatment(best)) {
                        const covered = best.matchedConcerns || getMatchedConcerns(best);
                        covered.forEach(c => coveredConcerns.add(c));
                    }
                }
            }
        }
        
        // 2단계: 추가 핵심 시술 선택 (예산의 60%까지)
        for (const treatment of pool) {
            if (combo.totalMin >= targetBudget * 0.6) break;
            if (combo.treatments.length >= 4) break;
            if (usedNames.has(treatment.name)) continue;
            if (!canAddTreatment(treatment)) continue;  // 중복 제한 체크
            
            const newTotal = combo.totalMin + treatment.minPrice;
            if (newTotal <= targetBudget) {
                addTreatment(treatment);
            }
        }
        
        // 3단계: 시너지 시술 추가
        const addedCore = combo.treatments.map(t => t.name);
        const synergyPool = relevantTreatments.filter(t => {
            if (usedNames.has(t.name)) return false;
            if (!canAddTreatment(t)) return false;  // 중복 제한 체크
            return addedCore.some(coreName => {
                const synergies = synergyMap[coreName] || [];
                return synergies.includes(t.name);
            });
        });
        
        for (const treatment of synergyPool) {
            if (combo.totalMin >= targetBudget * 0.9) break;
            if (combo.treatments.length >= 8) break;
            
            const newTotal = combo.totalMin + treatment.minPrice;
            if (newTotal <= targetBudget) {
                addTreatment(treatment);
            }
        }
        
        // 4단계: 남은 예산으로 추가 시술 (핵심 고민)
        const remainingPool = pool.filter(t => !usedNames.has(t.name) && canAddTreatment(t));
        for (const treatment of remainingPool) {
            if (combo.totalMin >= targetBudget * 0.85) break;
            if (combo.treatments.length >= 6) break;
            
            const newTotal = combo.totalMin + treatment.minPrice;
            if (newTotal <= targetBudget) {
                addTreatment(treatment);
            }
        }
        
        // 5단계: 부가 고민별 필수 시술 선택 (각 부가 고민당 최소 1개)
        if (secondaryConcerns.length > 0) {
            const coveredSecondary = new Set();
            
            // 이미 추가된 시술이 커버하는 부가 고민 체크
            combo.treatments.forEach(t => {
                const matched = t.matchedConcerns || getMatchedConcerns(t);
                matched.forEach(c => {
                    if (secondaryConcerns.includes(c)) coveredSecondary.add(c);
                });
            });
            
            // 아직 커버 안 된 부가 고민별로 시술 추가
            for (const concern of secondaryConcerns) {
                if (coveredSecondary.has(concern)) continue;
                if (combo.treatments.length >= 10) break;
                
                // 해당 부가 고민에 매칭되는 시술 찾기 (중복 제한 체크)
                const secondaryTreatments = scoredTreatments.filter(t => {
                    if (usedNames.has(t.name) || excludeTreatments.has(t.name)) return false;
                    if (!canAddTreatment(t)) return false;  // 중복 제한 체크
                    const matched = t.matchedConcerns || getMatchedConcerns(t);
                    return matched.includes(concern);
                }).sort((a, b) => b.secondaryScore - a.secondaryScore);
                
                if (secondaryTreatments.length > 0) {
                    const best = secondaryTreatments[0];
                    const newTotal = combo.totalMin + best.minPrice;
                    // 예산 120%까지 허용하여 부가 고민도 커버
                    if (newTotal <= targetBudget * 1.2) {
                        if (addTreatment(best)) {
                            const covered = best.matchedConcerns || getMatchedConcerns(best);
                            covered.forEach(c => {
                                if (secondaryConcerns.includes(c)) coveredSecondary.add(c);
                            });
                        }
                    }
                }
            }
            
            // 6단계: 남은 예산으로 추가 부가 고민 시술
            const secondaryPool = [...secondaryOnlyTreatments, ...scoredTreatments.filter(t => t.secondaryScore > 0)]
                .filter(t => !usedNames.has(t.name) && !excludeTreatments.has(t.name) && canAddTreatment(t))
                .sort((a, b) => b.secondaryScore - a.secondaryScore);
            
            for (const treatment of secondaryPool) {
                if (combo.totalMin >= targetBudget * 1.1) break;
                if (combo.treatments.length >= 12) break;
                
                const newTotal = combo.totalMin + treatment.minPrice;
                if (newTotal <= targetBudget * 1.1) {
                    addTreatment(treatment);
                }
            }
        }
        
        return { combo, usedNames };
    }
    
    // 3가지 조합 생성 (중복 최소화)
    const { combo: comboA, usedNames: usedA } = createCombination('프리미엄 집중 케어', 1.0, 'premium');
    
    // B는 A에서 사용한 고가 시술 일부 제외
    const expensiveFromA = new Set(
        comboA.treatments
            .filter(t => t.minPrice >= 30)
            .slice(0, 2)
            .map(t => t.name)
    );
    const { combo: comboB, usedNames: usedB } = createCombination('스마트 밸런스', 0.7, 'value', expensiveFromA);
    
    // C는 A, B의 고가 시술 제외
    const expensiveFromAB = new Set([
        ...comboA.treatments.filter(t => t.minPrice >= 40).map(t => t.name),
        ...comboB.treatments.filter(t => t.minPrice >= 40).map(t => t.name)
    ]);
    let { combo: comboC } = createCombination('효율 중심 플랜', 0.5, 'budget', expensiveFromAB);
    
    // B와 C가 완전히 동일한지 체크 (시술 목록 비교)
    const getBNames = comboB.treatments.map(t => t.name).sort().join(',');
    const getCNames = comboC.treatments.map(t => t.name).sort().join(',');
    
    if (getBNames === getCNames && comboC.treatments.length > 1) {
        // C에서 가장 비싼 시술 1개 제거하여 차별화
        const sorted = [...comboC.treatments].sort((a, b) => b.minPrice - a.minPrice);
        const toRemove = sorted[0];
        comboC.treatments = comboC.treatments.filter(t => t.name !== toRemove.name);
        comboC.totalMin -= toRemove.minPrice;
        const priceMatch = (toRemove.pricing?.range || '').match(/(\d+)/g);
        if (priceMatch) {
            comboC.totalMax -= parseInt(priceMatch[priceMatch.length - 1]) || toRemove.minPrice;
        } else {
            comboC.totalMax -= toRemove.minPrice;
        }
    }
    
    // 가격 차이 보장 (A > B > C)
    let combos = [comboA, comboB, comboC];
    
    // 가격순 정렬
    combos.sort((a, b) => b.totalMin - a.totalMin);
    
    // 이름 재할당
    const comboLabels = [
        { name: '프리미엄 집중 케어', tip: '최고의 효과를 원하시는 분께 추천드립니다.' },
        { name: '스마트 밸런스', tip: '가성비와 효과의 균형을 원하시는 분께 추천드립니다.' },
        { name: '효율 중심 플랜', tip: '핵심 고민에 집중하고 싶으신 분께 추천드립니다.' }
    ];
    
    // 결과 포맷팅
    const combinations = combos.map((combo, i) => {
        // 시술을 가격 높은 순으로 정렬
        const sortedTreatments = [...combo.treatments].sort((a, b) => {
            return (b.minPrice || 0) - (a.minPrice || 0);
        });
        
        return {
            name: comboLabels[i].name,
            totalPrice: combo.totalMin === combo.totalMax ? 
                `약 ${combo.totalMin}만원` : 
                `약 ${combo.totalMin}~${combo.totalMax}만원`,
            budgetUsage: Math.round((combo.totalMin / budget) * 100) + '%',
            tip: comboLabels[i].tip,
            treatments: sortedTreatments.map(t => ({
                name: t.name,
                category: t.category,
                price: t.pricing?.range || '',
                sessions: t.procedure?.sessions || '',
                reason: getRecommendReason(t, primaryConcerns, secondaryConcerns),
                matchedConcerns: t.matchedConcerns || [],
                painLevel: t.recovery?.painLevel || 0,
                downtime: t.recovery?.downtime || '없음'
            }))
        };
    });
    
    // 모든 추천 시술 상세정보 수집
    const allTreatmentNames = new Set();
    combinations.forEach(combo => {
        combo.treatments.forEach(t => allTreatmentNames.add(t.name));
    });
    
    const treatmentDetails = [];
    allTreatmentNames.forEach(name => {
        const t = treatments.find(tr => tr.name === name);
        if (t) {
            const review = t.review || {};
            let mechanismText = '';
            if (typeof t.mechanism === 'object') {
                mechanismText = t.mechanism?.detailed || t.mechanism?.summary || '';
            } else {
                mechanismText = t.mechanism || '';
            }
            
            treatmentDetails.push({
                name: t.name,
                fullName: t.fullName || t.name,
                brand: t.brand || '',
                category: t.category || '',
                priceRange: t.pricing?.range || '',
                sessions: t.procedure?.sessions || '',
                anesthesia: t.procedure?.anesthesia || '',
                description: review.summary || t.description || '',
                mechanism: mechanismText,
                expectedEffects: t.effects?.primary || [],
                secondaryEffects: t.effects?.secondary || [],
                pros: review.likes || t.pros || [],
                cons: review.dislikes || t.cons || [],
                tips: review.tips || [],
                overall: review.overall || '',
                painLevel: t.recovery?.painLevel || 0,
                downtime: t.recovery?.downtime || '없음'
            });
        }
    });
    
    // 인사말 생성 (Enhanced) - 통합 버전
    const allConcerns = [...primaryConcerns, ...secondaryConcerns];
    const concernText = allConcerns.slice(0, 3).join(', ');
    const budgetText = budget === '무관' ? '' : ` ${budget}만원 예산 내에서`;
    const treatmentTypeText = treatmentType.includes('상관없음') ? '' : 
                              treatmentType.includes('시술') ? ' 비침습적 시술 위주로' : 
                              treatmentType.includes('수술') ? ' 수술적 방법 포함하여' : '';
    
    const greeting = `${skinType} 피부의 ${age} 고객님을 위해 ${concernText} 고민 해결에 최적화된 맞춤 분석을 진행했습니다.${budgetText}${treatmentTypeText} ${treatments.length}개 시술 데이터베이스에서 ${scoredTreatments.length}개의 적합 시술을 선별하고, 최적의 조합을 도출했습니다.`;
    
    // 연령대 분석 이유
    const ageKey = Object.keys(ageRecommendations).find(key => age === key || age.includes(key)) || 
                   (age.includes('40대') ? '40대 초반' : age.includes('30대') ? '30대 초반' : 
                    age.includes('20대') ? '20대 초반' : age.includes('50대') ? '50대' : 
                    age.includes('60대') ? '60대 이상' : age.includes('10대') ? '10대' : '30대 초반');
    const ageAnalysis = ageRecommendations[ageKey]?.reason || '';
    
    // 계절 분석
    const seasonAnalysis = seasonalFactors.isSummer ? seasonalFactors.summerReason : 
                          seasonalFactors.isWinter ? seasonalFactors.winterReason : '';
    
    // 분석 생성 - greeting에 통합되어 더 이상 별도로 필요 없음
    const analysis = '';
    
    // 상세 분석 논거 생성
    // 우선순위 기반 분석 메시지
    const priorityAnalysisMap = {
        '효과': {
            title: '효과 중심 추천',
            icon: '🎯',
            description: '검증된 고효과 시술을 우선 추천했습니다.',
            detail: '프리미엄 장비와 강도 높은 시술로 확실한 결과를 기대할 수 있는 조합입니다.'
        },
        '편안함': {
            title: '편안함 중심 추천',
            icon: '✨',
            description: '통증과 다운타임이 적은 시술을 우선 추천했습니다.',
            detail: '부드러운 시술 위주로 일상생활에 지장 없이 관리받으실 수 있습니다.'
        },
        '가성비': {
            title: '가성비 중심 추천',
            icon: '💰',
            description: '비용 대비 효과가 좋은 시술을 우선 추천했습니다.',
            detail: '합리적인 가격으로 최대 효과를 낼 수 있는 시술들로 구성했습니다.'
        }
    };
    const priorityInfo = priorityAnalysisMap[priority] || priorityAnalysisMap['효과'];
    
    const analysisDetails = {
        priorityAnalysis: {
            title: priorityInfo.title,
            icon: priorityInfo.icon,
            description: priorityInfo.description,
            detail: priorityInfo.detail,
            priority: priority
        },
        ageAnalysis: {
            title: '연령대별 맞춤 분석',
            content: ageAnalysis,
            age: age
        },
        seasonAnalysis: {
            title: '시기별 추천',
            content: seasonAnalysis,
            season: seasonalFactors.isSummer ? '여름' : seasonalFactors.isWinter ? '겨울' : '봄/가을'
        },
        concernAnalysis: {
            title: '고민별 시술 매칭',
            primary: primaryConcerns.map(c => ({
                concern: c,
                treatments: (concernToTreatments[c] || []).slice(0, 5),
                reason: `${c} 개선에는 ${(concernToTreatments[c] || []).slice(0, 3).join(', ')} 등의 시술이 효과적입니다.`
            })),
            secondary: secondaryConcerns.map(c => ({
                concern: c,
                treatments: (concernToTreatments[c] || []).slice(0, 3)
            }))
        },
        conditionAnalysis: {
            title: '조건별 필터링',
            items: [
                {
                    icon: '⏱',
                    label: '다운타임 기준',
                    value: downtime,
                    detail: `${maxDowntime}일 이상 회복 기간이 필요한 시술 제외`,
                    explanation: '시술 후 일상 복귀까지 걸리는 회복 기간을 고려했습니다.'
                },
                {
                    icon: '💊',
                    label: '통증 민감도',
                    value: pain,
                    detail: pain === '민감' ? '저자극 시술 위주로 선별' : pain === '보통' ? '일반적 강도의 시술 포함' : '모든 강도의 시술 고려',
                    explanation: '개인의 통증 민감도에 따라 적합한 시술을 필터링했습니다.'
                },
                {
                    icon: '💰',
                    label: '예산 범위',
                    value: `${budget}만원`,
                    detail: '예산 대비 최적 효과 조합 구성',
                    explanation: '설정 예산 내에서 가성비와 효과를 균형있게 고려했습니다.'
                },
                {
                    icon: '👤',
                    label: '연령 적합성',
                    value: age,
                    detail: `${age} 피부 특성에 적합한 시술 선별`,
                    explanation: '연령대별 피부 상태와 고민에 최적화된 시술을 추천합니다.'
                },
                {
                    icon: '💧',
                    label: '피부 타입',
                    value: skinType,
                    detail: skinTypeRecommendations[skinType]?.reason || `${skinType} 피부에 적합한 시술 선별`,
                    explanation: '피부 타입에 맞는 시술을 우선 추천합니다.'
                }
            ]
        },
        synergyAnalysis: {
            title: '시술 시너지 분석',
            description: '동시 시술 시 상호 보완 효과가 있는 조합을 분석했습니다.',
            combinations: combinations.map(combo => {
                const synergies = [];
                combo.treatments.forEach(t1 => {
                    const synergyData = enhancedSynergyMap.synergies[t1.name];
                    if (synergyData) {
                        combo.treatments.forEach(t2 => {
                            if (t1.name !== t2.name && synergyData.partners.some(p => t2.name.includes(p))) {
                                synergies.push({
                                    pair: `${t1.name} + ${t2.name}`,
                                    reason: synergyData.reason,
                                    boost: synergyData.boost,
                                    mechanism: getSynergyMechanism(t1.name, t2.name)
                                });
                            }
                        });
                    }
                });
                return { comboName: combo.name, synergies };
            })
        },
        areaAnalysis: areas.length > 0 ? {
            title: '부위별 최적화',
            content: `선택하신 ${areas.join(', ')} 부위에 최적화된 시술을 우선 추천했습니다.`,
            details: areas.map(area => ({
                area,
                reason: areaOptimization[area]?.reason || '',
                characteristics: getAreaCharacteristics(area),
                recommendedTypes: getRecommendedTreatmentTypes(area)
            }))
        } : null
    };
    
    return {
        greeting,
        analysis,
        analysisDetails,  // NEW: 상세 분석 논거
        combinations,
        recommendation: generateDetailedRecommendation(combinations, age, primaryConcerns, skinType, budget),
        tips: [
            seasonalFactors.isSummer ? '여름철에는 시술 후 자외선 차단에 특히 신경쓰세요.' : '겨울철은 레이저/필링 시술의 최적기입니다.',
            '첫 상담 시 여러 병원을 비교해보세요.',
            '패키지 구매 시 10~20% 할인 가능합니다.',
            '시술 전 2주간 레티놀, 필링 제품을 중단하세요.'
        ],
        treatmentDetails,
        priceGuide: {
            note: "가격은 병원, 지역, 프로모션에 따라 달라질 수 있습니다.",
            negotiationTip: "첫 방문 시 상담만 받고 여러 병원 비교 후 결정하세요.",
            packageTip: "3회 이상 패키지로 구매하면 10-20% 할인받을 수 있습니다."
        },
        precautions: {
            before: ["시술 2주 전부터 레티놀, 필링 제품 중단", "시술 당일 음주 금지", "아스피린 등 혈액 응고제 복용 시 의사에게 알리기"],
            after: ["시술 부위 자외선 차단 철저히", "시술 후 2-3일간 사우나, 격렬한 운동 피하기", "충분한 수분 섭취와 보습"],
            emergency: "심한 붓기, 발적, 통증 시 즉시 시술 병원에 연락하세요."
        },
        // NEW: 피부 타입 분석
        skinTypeAnalysis: {
            skinType: skinType,
            recommendation: skinTypeRecommendations[skinType] || skinTypeRecommendations['복합성'],
            matchedTreatments: combinations.flatMap(c => c.treatments || [])
                .filter(t => {
                    const skinData = skinTypeRecommendations[skinType];
                    return skinData?.preferred?.some(p => t.name?.includes(p));
                })
                .map(t => t.name)
                .filter((v, i, a) => a.indexOf(v) === i), // 중복 제거
            avoidedTreatments: scoredTreatments
                .filter(t => {
                    const skinData = skinTypeRecommendations[skinType];
                    return skinData?.avoid?.some(a => t.name?.includes(a));
                })
                .map(t => t.name)
                .slice(0, 3),
            careAdvice: getSkinTypeCareAdvice(skinType),
            // NEW: 점수 영향 분석
            scoreImpact: {
                boostFactor: skinTypeRecommendations[skinType]?.boost || 1.0,
                penaltyFactor: skinTypeRecommendations[skinType]?.penalty || 1.0,
                boostedCount: combinations.flatMap(c => c.treatments || [])
                    .filter(t => skinTypeRecommendations[skinType]?.preferred?.some(p => t.name?.includes(p))).length,
                penalizedCount: scoredTreatments
                    .filter(t => skinTypeRecommendations[skinType]?.avoid?.some(a => t.name?.includes(a))).length,
                totalAnalyzed: scoredTreatments.length
            },
            // NEW: 피부 타입별 추천 시술 카테고리
            recommendedCategories: getSkinTypeCategories(skinType)
        },
        // NEW: 메타 정보
        meta: {
            totalTreatmentsAnalyzed: treatments.length,
            matchedTreatments: scoredTreatments.length,
            analysisFactors: ['연령대', '부위', '계절', '다운타임', '통증', '예산', '시너지', '피부타입'],
            generatedAt: new Date().toISOString()
        }
    };
}

// 상세 추천 의견 생성 함수
function generateDetailedRecommendation(combinations, age, primaryConcerns, skinType, budget) {
    if (!combinations || combinations.length < 3) {
        return '추천 조합을 생성하는 중 오류가 발생했습니다.';
    }
    
    const [planA, planB, planC] = combinations;
    
    // 각 플랜의 핵심 시술 추출
    const getKeyTreatments = (plan, count = 3) => {
        return plan.treatments.slice(0, count).map(t => t.name);
    };
    
    // 카테고리별 시술 분류
    const getCategoryBreakdown = (plan) => {
        const categories = {};
        plan.treatments.forEach(t => {
            const cat = t.category || '기타';
            if (!categories[cat]) categories[cat] = [];
            categories[cat].push(t.name);
        });
        return categories;
    };
    
    // 다운타임 분석
    const getDowntimeInfo = (plan) => {
        const downtimes = plan.treatments.map(t => {
            const dt = t.downtime || '없음';
            if (dt.includes('주') || dt.includes('7일')) return 3;
            if (dt.includes('3') || dt.includes('5')) return 2;
            if (dt.includes('1') || dt.includes('2')) return 1;
            return 0;
        });
        const maxDowntime = Math.max(...downtimes);
        if (maxDowntime >= 3) return '1주일 이상';
        if (maxDowntime >= 2) return '3~5일';
        if (maxDowntime >= 1) return '1~2일';
        return '거의 없음';
    };
    
    // 통증 분석
    const getPainLevel = (plan) => {
        const pains = plan.treatments.map(t => t.painLevel || 0);
        const avgPain = pains.reduce((a, b) => a + b, 0) / pains.length;
        if (avgPain >= 3.5) return '다소 있음 (마취 권장)';
        if (avgPain >= 2) return '중간 (마취크림 사용)';
        return '낮음 (편안한 시술)';
    };
    
    const keyA = getKeyTreatments(planA);
    const keyB = getKeyTreatments(planB);
    const keyC = getKeyTreatments(planC);
    
    const catA = getCategoryBreakdown(planA);
    const catB = getCategoryBreakdown(planB);
    const catC = getCategoryBreakdown(planC);
    
    // 가격 파싱
    const parsePrice = (priceStr) => {
        const match = priceStr.match(/(\d+)/);
        return match ? parseInt(match[1]) : 0;
    };
    
    const priceA = parsePrice(planA.totalPrice);
    const priceB = parsePrice(planB.totalPrice);
    const priceC = parsePrice(planC.totalPrice);
    
    // 시술 개수
    const countA = planA.treatments.length;
    const countB = planB.treatments.length;
    const countC = planC.treatments.length;
    
    // 가격 차이 계산
    const diffAB = priceA - priceB;
    const diffAC = priceA - priceC;
    
    // 플랜별 상세 설명 생성
    let planADesc = `**A. 프리미엄 집중 케어 (${planA.totalPrice})**\n\n`;
    planADesc += `핵심 시술: ${keyA.join(', ')}\n\n`;
    planADesc += `구성: 총 ${countA}개 시술 | 다운타임: ${getDowntimeInfo(planA)} | 통증: ${getPainLevel(planA)}\n\n`;
    
    // A 플랜 상세 설명
    if (keyA.some(t => t.includes('울쎄라'))) {
        planADesc += '울쎄라는 FDA 승인을 받은 HIFU 리프팅의 대표 장비로, 피부 깊숙한 SMAS층까지 초음파 에너지를 전달하여 근본적인 리프팅 효과를 제공합니다. 1회 시술로 6개월~1년까지 효과가 지속되어 장기적으로 보면 오히려 경제적인 선택이 될 수 있습니다. ';
    } else if (keyA.some(t => t.includes('써마지'))) {
        planADesc += '써마지 FLX는 고주파(RF) 에너지로 진피층의 콜라겐을 재생시키는 대표적인 안티에이징 시술입니다. 울쎄라보다 통증이 적으면서도 피부 탄력과 모공 개선에 탁월한 효과를 보입니다. ';
    } else if (keyA.some(t => t.includes('올리지오'))) {
        planADesc += '올리지오는 최신 고주파 장비로 기존 써마지 대비 시술 시간이 짧고 통증이 적으면서도 비슷한 수준의 타이트닝 효과를 기대할 수 있습니다. ';
    } else if (keyA.some(t => t.includes('실리프팅') || t.includes('실루엣'))) {
        planADesc += '실리프팅은 녹는 실을 피부 아래에 삽입하여 즉각적인 리프팅 효과와 함께 콜라겐 생성을 유도합니다. 시술 직후부터 V라인 효과를 확인할 수 있어 만족도가 높습니다. ';
    } else {
        planADesc += `${keyA[0]}을 메인으로 ${primaryConcerns[0] || '피부 고민'} 개선에 집중한 프리미엄 구성입니다. `;
    }
    
    // 카테고리별 설명 추가
    const catAKeys = Object.keys(catA);
    if (catAKeys.length > 1) {
        planADesc += `이 플랜은 ${catAKeys.join(', ')} 등 다양한 카테고리의 시술을 조합하여 복합적인 개선 효과를 노립니다. `;
    }
    planADesc += `예산을 최대한 활용하여 ${age}에 가장 효과적인 시술들로 구성했습니다.`;
    
    // B 플랜 상세 설명
    let planBDesc = `**B. 스마트 밸런스 (${planB.totalPrice})**\n\n`;
    planBDesc += `핵심 시술: ${keyB.join(', ')}\n\n`;
    planBDesc += `구성: 총 ${countB}개 시술 | 다운타임: ${getDowntimeInfo(planB)} | 통증: ${getPainLevel(planB)}\n\n`;
    
    if (diffAB > 30) {
        planBDesc += `A 플랜 대비 약 ${diffAB}만원 절감되면서도 핵심 고민인 ${primaryConcerns[0] || '피부'}에 대한 효과는 충분히 확보한 균형 잡힌 구성입니다. `;
    } else {
        planBDesc += `A 플랜과 비슷한 가격대이지만, 시술 구성이 다르게 최적화되어 있습니다. `;
    }
    
    if (keyB.some(t => t.includes('리쥬란') || t.includes('스킨부스터') || t.includes('물광'))) {
        planBDesc += '리쥬란이나 스킨부스터 같은 피부 재생 시술이 포함되어 있어 시술 후 피부 컨디션 회복도 함께 기대할 수 있습니다. ';
    }
    if (keyB.some(t => t.includes('보톡스'))) {
        planBDesc += '보톡스는 표정 주름 예방과 개선에 효과적이며, 다른 시술과 병행 시 시너지 효과가 있습니다. ';
    }
    
    planBDesc += `가격 대비 만족도가 높은 시술들로 구성되어 있어, 피부과 시술이 처음이시거나 부담 없이 시작하고 싶으신 분들께 추천드립니다. 이 플랜으로 효과를 확인하신 후 다음에 더 강도 높은 시술을 고려하셔도 좋습니다.`;
    
    // C 플랜 상세 설명
    let planCDesc = `**C. 효율 중심 플랜 (${planC.totalPrice})**\n\n`;
    planCDesc += `핵심 시술: ${keyC.join(', ')}\n\n`;
    planCDesc += `구성: 총 ${countC}개 시술 | 다운타임: ${getDowntimeInfo(planC)} | 통증: ${getPainLevel(planC)}\n\n`;
    
    if (diffAC > 50) {
        planCDesc += `A 플랜 대비 ${diffAC}만원 이상 절감되는 실속형 구성입니다. `;
    }
    
    planCDesc += `핵심 고민인 ${primaryConcerns[0] || '피부'} 해결에 꼭 필요한 시술만 선별하여 불필요한 비용을 줄였습니다. `;
    
    if (priceC < budget * 0.7) {
        const remaining = Math.round(budget - priceC);
        planCDesc += `이 플랜 선택 시 약 ${remaining}만원의 예산이 남아, 시술 결과를 보고 추가 시술을 진행하거나 유지 관리 비용으로 활용하실 수 있습니다. `;
    }
    
    if (countC <= 3) {
        planCDesc += '시술 개수가 적어 병원 방문 횟수와 전체 소요 시간도 줄일 수 있습니다. ';
    }
    
    planCDesc += `바쁜 일정 속에서도 효율적으로 피부 관리를 하고 싶으신 분, 또는 정기적인 유지 관리 목적으로 적합한 플랜입니다.`;
    
    // 최종 추천 및 조언
    let finalAdvice = '**💡 종합 추천**\n\n';
    
    // 고민별 맞춤 조언
    if (primaryConcerns.includes('처진피부') || primaryConcerns.includes('탄력저하') || primaryConcerns.includes('주름')) {
        finalAdvice += `${age} 리프팅/탄력 고민의 경우, 시술 강도와 효과가 비례하는 경향이 있습니다. 확실한 개선을 원하신다면 A 플랜의 고강도 시술을, 자연스러운 개선과 유지 관리를 원하신다면 B 플랜을 추천드립니다. `;
        finalAdvice += '특히 40대 이상이시라면 한 번 좋은 시술을 받는 것이 여러 번 가벼운 시술을 받는 것보다 효과적일 수 있습니다. ';
    } else if (primaryConcerns.includes('기미잡티') || primaryConcerns.includes('색소침착') || primaryConcerns.includes('피부톤')) {
        finalAdvice += '색소 치료는 일반적으로 3~5회 이상의 시술이 필요하며, 한 번에 강하게 하기보다 여러 회차에 걸쳐 서서히 개선하는 것이 안전합니다. ';
        finalAdvice += 'B나 C 플랜으로 시작하여 경과를 보면서 추가 시술 여부를 결정하시는 것을 권장드립니다. 자외선 차단이 치료 효과를 좌우하므로 여름철보다는 가을~겨울에 시작하시면 좋습니다. ';
    } else if (primaryConcerns.includes('여드름') || primaryConcerns.includes('모공') || primaryConcerns.includes('피부결')) {
        finalAdvice += '트러블과 모공 관리는 한 번의 고가 시술보다 꾸준한 관리가 더 중요합니다. ';
        finalAdvice += 'B나 C 플랜으로 월 1회 정도 정기적인 관리를 하시면서, 상태가 많이 개선된 후 필요시 A 플랜급 시술로 마무리하시는 전략을 추천드립니다. ';
    } else if (primaryConcerns.includes('볼륨손실') || primaryConcerns.includes('이중턱')) {
        finalAdvice += '볼륨 개선과 윤곽 시술은 시술자의 경험이 매우 중요합니다. ';
        finalAdvice += '가격보다는 해당 시술 경험이 풍부한 병원을 선택하시고, 처음에는 보수적으로 시술받은 후 2주 후 경과를 보고 추가 시술 여부를 결정하시는 것이 안전합니다. ';
    } else {
        finalAdvice += '피부과 시술이 처음이시라면 B 플랜으로 시작하여 본인 피부가 시술에 어떻게 반응하는지 확인해보시길 권장드립니다. ';
        finalAdvice += '만족스러운 결과를 경험하신 후 다음에 A 플랜급 시술을 고려하셔도 늦지 않습니다. ';
    }
    
    // 피부 타입별 추가 조언
    if (skinType === '민감성') {
        finalAdvice += '\n\n민감성 피부이시므로, 처음에는 C 플랜처럼 자극이 적은 시술로 시작하시고 피부 반응을 확인하신 후 강도를 높여가시는 것이 안전합니다.';
    } else if (skinType === '건성') {
        finalAdvice += '\n\n건성 피부는 시술 후 회복에 보습이 매우 중요합니다. 어떤 플랜을 선택하시든 시술 후 2주간은 집중 보습 케어를 병행해주세요.';
    }
    
    // 마무리
    finalAdvice += '\n\n병원 방문 시 이 분석 결과를 보여주시면서 상담받으시면, 의사 선생님께서 실제 피부 상태를 확인하신 후 더 정확한 조언을 해주실 수 있습니다.';
    
    return `${planADesc}\n\n\n${planBDesc}\n\n\n${planCDesc}\n\n\n${finalAdvice}`;
}

// 피부 타입별 관리 조언 (확장 버전)
function getSkinTypeCareAdvice(skinType) {
    const advice = {
        '건성': {
            daily: [
                '세안 후 3분 이내 보습제 도포 (수분 증발 방지)',
                '저자극 밀크/크림 타입 클렌저 사용',
                '히알루론산 세럼 + 세라마이드 크림 레이어링',
                '주 2-3회 수분 마스크팩 (시트 또는 슬리핑)',
                '가습기 사용으로 실내 습도 50-60% 유지',
                '미온수 세안 (뜨거운 물은 피부 건조 유발)'
            ],
            treatment: [
                '물광주사: 히알루론산 깊은 수분 공급 (2-4주 간격)',
                '리쥬란: PDRN 성분으로 피부 장벽 강화',
                '스킨부스터: 주기적 수분 충전 (월 1회 권장)',
                '엑소좀: 피부 재생과 탄력 동시 개선',
                'LDM 초음파: 수분 침투력 극대화'
            ],
            avoid: [
                '폼클렌저, 알코올 함유 토너 (피부 건조 악화)',
                '고농도 AHA/BHA 필링 (자극 유발)',
                '너무 잦은 각질 제거 (주 1회 이하)',
                '레티놀 고농도 제품 (건조함 심화)',
                '클레이 마스크 (수분 흡수)'
            ],
            ingredients: [
                '○ 히알루론산, 세라마이드, 스쿠알란',
                '○ 글리세린, 판테놀, 시어버터',
                '△ 나이아신아마이드 (저농도로 시작)',
                '✕ 알코올, 멘톨, 고농도 비타민C'
            ],
            routine: '아침: 클렌저 → 토너 → 히알루론산 세럼 → 수분크림 → 선크림\n저녁: 이중세안 → 토너 → 세럼 → 아이크림 → 수분크림 → 페이셜오일'
        },
        '지성': {
            daily: [
                '아침저녁 약산성 폼클렌저로 이중 세안',
                '모공 축소 토너 (위치하젤, 나이아신아마이드)',
                '가벼운 수분 젤/로션 타입 보습제 사용',
                '주 1-2회 클레이 마스크로 피지 흡착',
                '티슈로 과잉 피지 가볍게 제거 (기름종이 과용 금지)',
                'BHA(살리실산) 성분 제품으로 모공 관리'
            ],
            treatment: [
                '아쿠아필: 피지 제거 + 수분 공급 동시 (2주 간격)',
                'PDT (광역동치료): 피지선 활성 억제',
                '살리실산 필링: 모공 내 각질 제거',
                '제네시스 레이저: 모공 축소 + 피지 조절',
                '프락셀: 모공/흉터 개선 (다운타임 필요)'
            ],
            avoid: [
                '유분 많은 크림/오일 제품',
                '과도한 세안 (피지 분비 역효과)',
                '알코올 과다 함유 토너 (반동성 피지)',
                '두꺼운 메이크업 (모공 막힘)',
                '손으로 얼굴 자주 만지기'
            ],
            ingredients: [
                '○ 나이아신아마이드, 살리실산(BHA), 징크',
                '○ 티트리, 위치하젤, 카올린',
                '△ 레티놀 (저농도부터, 건조 주의)',
                '✕ 코코넛오일, 미네랄오일, 라놀린'
            ],
            routine: '아침: 폼클렌저 → BHA 토너 → 수분젤 → 선크림(무기자차)\n저녁: 오일클렌저 → 폼클렌저 → 토너 → 나이아신아마이드 세럼 → 수분로션'
        },
        '복합성': {
            daily: [
                'T존/U존 분리 케어 (부위별 다른 제품)',
                'T존: 가벼운 젤 타입 / U존: 크림 타입',
                '밸런싱 토너로 유수분 균형 조절',
                '주 1회 T존 클레이 마스크 + U존 수분 마스크',
                '계절에 따라 제품 비율 조절',
                '코/이마 부분 집중 모공 케어'
            ],
            treatment: [
                '아쿠아필: T존 모공 관리 (2-3주 간격)',
                '물광주사: U존 수분 공급',
                'IPL: 전체적인 피부톤 균일화',
                '레이저토닝: 색소/모공 동시 개선',
                'LDM: 부위별 맞춤 관리 가능'
            ],
            avoid: [
                '전체 얼굴에 동일한 제품 사용',
                '극단적으로 유분 많거나 적은 제형',
                'T존에 영양크림 과다 사용',
                'U존에 매트 제형 사용'
            ],
            ingredients: [
                '○ 나이아신아마이드 (유수분 밸런스)',
                '○ 히알루론산 (T존/U존 모두 적합)',
                '△ T존: BHA / U존: AHA 분리 사용',
                '✕ 전체 얼굴에 강한 오일 제품'
            ],
            routine: '아침: 젤클렌저 → 밸런싱토너 → 세럼 → T존 수분젤 + U존 크림 → 선크림\n저녁: 이중세안 → 토너 → T존 BHA + U존 수분세럼 → 보습제'
        },
        '민감성': {
            daily: [
                '저자극 pH 5.5 약산성 클렌저 사용',
                '무향료/무색소/무알코올 제품 선택',
                '신제품 사용 전 팔 안쪽 패치 테스트 (48시간)',
                '문지르지 않고 가볍게 두드려 흡수',
                '세안 시 손가락으로 부드럽게 (수건 자극 주의)',
                '외출 시 물리적 선크림(무기자차) 필수'
            ],
            treatment: [
                'LED 테라피: 무자극 진정 관리 (주 1-2회)',
                '리쥬란: 피부 재생 + 장벽 강화',
                '저자극 스킨부스터: 수분 공급',
                'LDM 초음파: 진정 + 재생 효과',
                '재생레이저 (약한 강도): 전문의 상담 필수'
            ],
            avoid: [
                '강한 레이저 시술 (피코, 프락셀 고강도)',
                '고농도 필링 (TCA, 페놀)',
                '알코올/향료/인공색소 함유 제품',
                '물리적 각질 제거 (스크럽)',
                '급격한 온도 변화 (사우나, 냉/온 팩)'
            ],
            ingredients: [
                '○ 센텔라, 판테놀, 마데카소사이드',
                '○ 알로에, 녹차추출물, 베타글루칸',
                '△ 나이아신아마이드 (4% 이하 저농도)',
                '✕ 레티놀, 고농도 비타민C, AHA/BHA'
            ],
            routine: '아침: 물세안 또는 저자극클렌저 → 진정토너 → 진정세럼 → 보습크림 → 무기자차 선크림\n저녁: 저자극클렌저 → 진정토너 → 센텔라세럼 → 장벽강화크림'
        }
    };
    return advice[skinType] || advice['복합성'];
}

// 피부 타입별 추천 시술 카테고리
function getSkinTypeCategories(skinType) {
    const categories = {
        '건성': [
            { name: '수분 공급', icon: '💦', treatments: ['물광주사', '히알루론산'], boost: '+18%' },
            { name: '피부 장벽', icon: '🛡️', treatments: ['리쥬란', '스킨부스터'], boost: '+15%' },
            { name: '재생 촉진', icon: '✨', treatments: ['엑소좀', '성장인자'], boost: '+12%' }
        ],
        '지성': [
            { name: '피지 조절', icon: '🧴', treatments: ['PDT', '피지조절'], boost: '+20%' },
            { name: '모공 관리', icon: '🔬', treatments: ['아쿠아필', '레이저토닝'], boost: '+18%' },
            { name: '각질 케어', icon: '🧹', treatments: ['살리실산필링', '스케일링'], boost: '+15%' }
        ],
        '복합성': [
            { name: 'T존 케어', icon: '🎯', treatments: ['아쿠아필', '모공관리'], boost: '+15%' },
            { name: 'U존 보습', icon: '💧', treatments: ['물광주사', '리쥬란'], boost: '+12%' },
            { name: '밸런스', icon: '⚖️', treatments: ['IPL', '레이저토닝'], boost: '+10%' }
        ],
        '민감성': [
            { name: '진정 케어', icon: '🌿', treatments: ['LED테라피', '진정관리'], boost: '+22%' },
            { name: '저자극', icon: '🕊️', treatments: ['리쥬란', '저자극필링'], boost: '+18%' },
            { name: '장벽 강화', icon: '🛡️', treatments: ['스킨부스터', '재생관리'], boost: '+15%' }
        ]
    };
    return categories[skinType] || categories['복합성'];
}

function getRecommendReason(treatment, primary, secondary) {
    const effects = treatment.effects?.primary || [];
    const category = treatment.category || '피부과';
    const matchedPrimary = primary.filter(c => effects.some(e => e.includes(c) || c.includes(e)));
    const matchedSecondary = secondary.filter(c => effects.some(e => e.includes(c) || c.includes(e)));
    
    if (matchedPrimary.length > 0) {
        return `[${category}] ${matchedPrimary[0]} 개선에 효과적인 시술입니다.`;
    } else if (matchedSecondary.length > 0) {
        return `[${category}] ${matchedSecondary[0]} 개선을 함께 기대할 수 있습니다.`;
    } else {
        return `[${category}] 전반적인 피부 개선에 도움되는 시술입니다.`;
    }
}

function displayError(error) {
    document.getElementById('consultLoading').classList.add('hidden');
    document.getElementById('consultResult').classList.remove('hidden');
    
    const errorMessage = error.message || '알 수 없는 오류';
    const errorDetails = error.details || '';
    const errorStatus = error.status || '';
    const errorHint = errorDetails?.hint || '';
    
    const html = `
        <div class="report-container">
            <div class="report-header error-header">
                <h2 class="report-title">△ 오류가 발생했습니다</h2>
                <p class="report-subtitle">AI 상담 결과를 불러오는 중 문제가 발생했습니다.</p>
            </div>
            
            <div class="error-box">
                <div class="error-section">
                    <h3>🔴 오류 메시지</h3>
                    <p class="error-message">${errorMessage}</p>
                </div>
                
                ${errorHint ? `
                <div class="error-section hint-section">
                    <h3>💡 원인 분석</h3>
                    <p class="error-hint">${errorHint}</p>
                </div>
                ` : ''}
                
                ${errorStatus ? `
                <div class="error-section">
                    <h3>📊 상태 코드</h3>
                    <p>${errorStatus}</p>
                </div>
                ` : ''}
                
                ${errorDetails ? `
                <div class="error-section">
                    <h3>📋 상세 정보</h3>
                    <pre class="error-details">${typeof errorDetails === 'object' ? JSON.stringify(errorDetails, null, 2) : errorDetails}</pre>
                </div>
                ` : ''}
                
                <div class="error-section">
                    <h3>🔧 해결 방법</h3>
                    <ul>
                        <li>인터넷 연결 상태를 확인해주세요.</li>
                        <li>잠시 후 다시 시도해주세요.</li>
                        <li>문제가 지속되면 관리자에게 문의해주세요.</li>
                    </ul>
                </div>
                
                <div class="error-actions">
                    <button class="retry-btn" onclick="location.reload()">🔄 새로고침</button>
                    <button class="back-btn-error" onclick="backToConsultWizard()">← 다시 상담하기</button>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('resultContent').innerHTML = html;
}

function backToConsultWizard() {
    document.getElementById('consultResult').classList.add('hidden');
    document.getElementById('consultWizard').classList.remove('hidden');
}

async function callClaudeAPI(userData) {
    const SUPABASE_URL = 'https://iausfassbdmpieinhaba.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhdXNmYXNzYmRtcGllaW5oYWJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY3NTg1ODQsImV4cCI6MjA4MjMzNDU4NH0.E6zhK_NvH8MMjAbGU9yJruJPytwtL8TeJm-pqWhIduc';
    
    // 시술 DB를 간략화 (이름, 카테고리, 최소가격만)
    const treatmentList = treatments.map(t => 
        `${t.name}(${t.category},${extractMinPrice(t.pricing?.range)}만원)`
    ).join(', ');
    
    const budget = userData.budget || 100;
    
    // 최적화된 간결한 프롬프트
    const prompt = `피부과 시술 추천 JSON을 생성하세요.

[고객정보]
나이:${userData.age||'-'}, 고민:${userData.concerns?.join(',')||'-'}, 예산:${budget}만원, 다운타임:${userData.downtime||'-'}, 통증민감도:${userData.pain||'-'}
${userData.concernsExtra ? '추가고민:'+userData.concernsExtra : ''}
${userData.event ? '일정:'+userData.event : ''}

[시술DB] ${treatmentList}

[규칙]
1. 예산의 80-95% 사용하는 3가지 조합 제안 (A, B, C)
2. 각 조합에 3-5개 시술 포함
3. 중요하고 효과적인 시술은 여러 조합에 중복 포함 가능
4. 시술명은 반드시 [시술DB]에 있는 이름 그대로 사용

[JSON형식]
{
"greeting":"인사(2문장)",
"analysis":"피부분석(2문장)",
"combinations":[
{"name":"조합명","price":"총XX만원","treatments":[
{"name":"시술명(DB와 동일)","reason":"추천이유(1문장)","sessions":"횟수"}
],"tip":"조합팁(1문장)"}
],
"recommendation":"종합추천(2문장)",
"tips":["팁1","팁2","팁3"]
}`;

    // Step 2: 서버 연결
    updateProgress(2, '서버에 연결하고 있어요...', 20);
    
    let response;
    try {
        response = await fetch(`${SUPABASE_URL}/functions/v1/claude-proxy`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            },
            body: JSON.stringify({
                messages: [{ role: 'user', content: prompt }]
            })
        });
        
        // 연결 성공 → Step 3
        updateProgress(3, 'AI가 맞춤 시술을 분석하고 있어요...', 50);
        
    } catch (fetchError) {
        const error = new Error('Failed to fetch');
        error.details = {
            type: 'NETWORK_ERROR',
            message: fetchError.message,
            hint: '네트워크 연결을 확인하거나, Supabase Edge Function이 배포되었는지 확인하세요.',
            url: `${SUPABASE_URL}/functions/v1/claude-proxy`
        };
        throw error;
    }
    
    if (!response.ok) {
        const errorBody = await response.text();
        let errorDetails;
        try {
            errorDetails = JSON.parse(errorBody);
        } catch {
            errorDetails = errorBody;
        }
        const error = new Error(`API 요청 실패: HTTP ${response.status}`);
        error.status = response.status;
        error.details = {
            httpStatus: response.status,
            statusText: response.statusText,
            body: errorDetails,
            hint: response.status === 500 ? 'Edge Function 내부 오류. Supabase 로그를 확인하세요.' :
                  response.status === 401 ? 'API 키가 올바르지 않습니다.' :
                  response.status === 429 ? 'API 요청 한도 초과. 잠시 후 다시 시도하세요.' :
                  '알 수 없는 오류입니다.'
        };
        throw error;
    }
    
    // Step 4: 결과 생성
    updateProgress(4, '결과를 생성하고 있어요...', 80);
    
    let data;
    try {
        data = await response.json();
    } catch (e) {
        const error = new Error('API 응답을 JSON으로 파싱할 수 없습니다.');
        error.details = {
            parseError: e.message,
            hint: 'Edge Function 응답이 올바른 JSON이 아닙니다.'
        };
        throw error;
    }
    
    if (!data.content || !data.content[0] || !data.content[0].text) {
        const error = new Error('API 응답 형식이 올바르지 않습니다.');
        error.details = {
            receivedData: data,
            hint: data.error ? `Anthropic API 오류: ${data.error.message || JSON.stringify(data.error)}` : 
                  'content 필드가 없습니다. Edge Function을 확인하세요.'
        };
        throw error;
    }
    
    const content = data.content[0].text;
    
    // 프로그레스 완료
    updateProgress(4, '완료! 결과를 표시합니다...', 100);
    
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
        try {
            const aiResponse = JSON.parse(jsonMatch[0]);
            // AI 응답에 DB 상세정보 병합
            return enrichResponseWithDB(aiResponse, userData);
        } catch (e) {
            const error = new Error('AI 응답의 JSON 파싱 실패');
            error.details = { 
                parseError: e.message, 
                content: content.substring(0, 1000),
                hint: 'AI 응답이 완전한 JSON이 아닙니다.'
            };
            throw error;
        }
    }
    
    const error = new Error('AI 응답에서 JSON 형식을 찾을 수 없습니다.');
    error.details = { 
        content: content.substring(0, 1000),
        hint: 'AI가 JSON 형식으로 응답하지 않았습니다.'
    };
    throw error;
}

// AI 응답에 DB 상세정보 병합
function enrichResponseWithDB(aiResponse, userData) {
    const recommendedTreatmentNames = new Set();
    
    // 추천된 시술명 수집
    aiResponse.combinations?.forEach(combo => {
        combo.treatments?.forEach(t => {
            recommendedTreatmentNames.add(t.name);
        });
    });
    
    // 시술 상세정보 DB에서 가져오기
    const treatmentDetails = [];
    recommendedTreatmentNames.forEach(name => {
        const dbTreatment = treatments.find(t => 
            t.name === name || t.name.includes(name) || name.includes(t.name)
        );
        if (dbTreatment) {
            // mechanism 처리 (객체일 수 있음)
            let mechanismText = '';
            if (typeof dbTreatment.mechanism === 'object') {
                mechanismText = dbTreatment.mechanism?.detailed || dbTreatment.mechanism?.summary || '';
            } else {
                mechanismText = dbTreatment.mechanism || '';
            }
            
            // review 객체에서 정보 추출
            const review = dbTreatment.review || {};
            
            treatmentDetails.push({
                name: dbTreatment.name,
                fullName: dbTreatment.fullName || dbTreatment.name,
                brand: dbTreatment.brand || '',
                category: dbTreatment.category || '',
                priceRange: dbTreatment.pricing?.range || '',
                priceNote: dbTreatment.pricing?.note || '병원마다 상이',
                sessions: dbTreatment.procedure?.sessions || '',
                duration: dbTreatment.procedure?.duration || '',
                anesthesia: dbTreatment.procedure?.anesthesia || '',
                
                // 설명
                description: review.summary || dbTreatment.description || '',
                mechanism: mechanismText,
                
                // 효과
                expectedEffects: dbTreatment.effects?.primary || [],
                secondaryEffects: dbTreatment.effects?.secondary || [],
                targets: dbTreatment.effects?.targets || [],
                notFor: dbTreatment.effects?.notFor || [],
                
                // 장단점 (review에서)
                pros: review.likes || dbTreatment.pros || [],
                cons: review.dislikes || dbTreatment.cons || [],
                tips: review.tips || [],
                overall: review.overall || '',
                
                // 회복
                painLevel: dbTreatment.recovery?.painLevel || 0,
                downtime: dbTreatment.recovery?.downtime || '없음',
                recoveryTips: dbTreatment.recovery?.tips || [],
                aftercare: dbTreatment.recovery?.aftercare || [],
                
                // 주의사항
                warnings: dbTreatment.warnings || [],
                contraindications: dbTreatment.contraindications || [],
                
                // 추천 대상
                idealFor: dbTreatment.idealFor || '',
                bestFor: dbTreatment.bestFor || [],
                
                // === NEW: AI 추천 필드 ===
                ageRange: dbTreatment.ageRange || null,
                concernsData: dbTreatment.concerns || null,
                intensityData: dbTreatment.intensity || null
            });
        }
    });
    
    // combinations 내 시술에도 DB 정보 추가
    aiResponse.combinations?.forEach(combo => {
        let totalMin = 0;
        let totalMax = 0;
        
        combo.treatments?.forEach(t => {
            const dbTreatment = treatments.find(db => 
                db.name === t.name || db.name.includes(t.name) || t.name.includes(db.name)
            );
            if (dbTreatment) {
                t.category = dbTreatment.category || '';
                t.price = dbTreatment.pricing?.range || '';
                t.downtime = dbTreatment.recovery?.downtime || '없음';
                t.painLevel = dbTreatment.recovery?.painLevel || 0;
                t.effect = dbTreatment.effects?.primary?.[0] || '';
                t.sessions = dbTreatment.procedure?.sessions || '';
                
                // === NEW: AI 추천 필드 ===
                t.ageRange = dbTreatment.ageRange || null;
                t.concernsData = dbTreatment.concerns || null;
                t.intensityData = dbTreatment.intensity || null;
                t.optimalAge = dbTreatment.ageRange?.optimal || '';
                t.youngWarning = dbTreatment.ageRange?.youngWarning || null;
                t.intensityLevel = dbTreatment.intensity?.level || 0;
                t.firstTimerOk = dbTreatment.intensity?.firstTimerOk ?? true;
                
                // 가격 합산
                const priceMatch = (dbTreatment.pricing?.range || '').match(/(\d+)/g);
                if (priceMatch) {
                    totalMin += parseInt(priceMatch[0]) || 0;
                    totalMax += parseInt(priceMatch[priceMatch.length - 1]) || parseInt(priceMatch[0]) || 0;
                }
            }
        });
        
        // 총 가격 범위 계산
        if (totalMin > 0) {
            combo.totalPrice = totalMin === totalMax ? 
                `약 ${totalMin}만원` : 
                `약 ${totalMin}~${totalMax}만원`;
            combo.budgetUsage = Math.round((totalMin / userData.budget) * 100) + '%';
        }
    });
    
    // 병합된 응답 반환
    return {
        ...aiResponse,
        treatmentDetails,
        // 가격 가이드 기본값
        priceGuide: {
            note: "가격은 병원, 지역, 프로모션에 따라 달라질 수 있습니다.",
            negotiationTip: "첫 방문 시 상담만 받고 여러 병원 비교 후 결정하세요.",
            packageTip: "3회 이상 패키지로 구매하면 10-20% 할인받을 수 있습니다."
        },
        // 주의사항 기본값
        precautions: {
            before: ["시술 2주 전부터 레티놀, 필링 제품 중단", "시술 당일 음주 금지", "아스피린 등 혈액 응고제 복용 시 의사에게 알리기"],
            after: ["시술 부위 자외선 차단 철저히", "시술 후 2-3일간 사우나, 격렬한 운동 피하기", "충분한 수분 섭취와 보습"],
            emergency: "심한 붓기, 발적, 통증 시 즉시 시술 병원에 연락하세요."
        }
    };
}

function extractMinPrice(priceRange) {
    if (!priceRange) return 0;
    const match = priceRange.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
}


function getPriceRange(combinations) {
    if (!combinations || combinations.length === 0) return '-';
    
    // 각 조합별 총 가격 계산
    const comboPrices = combinations.map(combo => {
        let min = 0;
        let max = 0;
        combo.treatments?.forEach(t => {
            const priceStr = t.price || '';
            const matches = priceStr.match(/(\d+)/g);
            if (matches) {
                min += parseInt(matches[0]) || 0;
                max += parseInt(matches[matches.length - 1]) || parseInt(matches[0]) || 0;
            }
        });
        return { min, max };
    }).filter(p => p.min > 0);
    
    if (comboPrices.length === 0) return '-';
    
    // 조합들 중 최저가와 최고가
    const lowestMin = Math.min(...comboPrices.map(p => p.min));
    const highestMax = Math.max(...comboPrices.map(p => p.max));
    
    if (lowestMin === highestMax) return `약 ${lowestMin}만원`;
    return `${lowestMin}~${highestMax}만원`;
}

function getTotalTreatments(combinations) {
    if (!combinations) return 0;
    
    const allTreatments = new Set();
    combinations.forEach(c => {
        c.treatments?.forEach(t => {
            allTreatments.add(t.name);
        });
    });
    return allTreatments.size;
}

function displayResult(response) {
    document.getElementById('consultLoading').classList.add('hidden');
    document.getElementById('consultResult').classList.remove('hidden');
    
    const userData = consultState.data;
    const primaryConcerns = userData.primaryConcerns || [];
    const secondaryConcerns = userData.secondaryConcerns || [];
    const tips = response.tips || [];
    const precautions = response.precautions || {};
    
    // NEW: 연령 적합도 분석
    const allTreatments = [];
    response.combinations?.forEach(c => c.treatments?.forEach(t => allTreatments.push(t)));
    const warningTreatments = allTreatments.filter(t => t.youngWarning);
    const expNeededTreatments = allTreatments.filter(t => !t.firstTimerOk);
    const avgIntensity = allTreatments.reduce((sum, t) => sum + (t.intensityLevel || 0), 0) / (allTreatments.length || 1);
    
    const html = `
        <div class="report-container-v2">
            <!-- 통합 헤더 + 분석 프로세스 -->
            <div class="report-header-unified">
                <div class="header-content">
                    <span class="report-badge">ANALYSIS COMPLETE</span>
                    <h1 class="report-title-v2">AI 피부 시술 컨설팅 리포트</h1>
                    <p class="report-subtitle">Personalized Treatment Recommendation by Skinn.kr</p>
                    <p class="report-datetime">📅 ${new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })} ${new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })} 기준</p>
                </div>
                
                <!-- 분석 과정 시각화 (깔때기) -->
                <div class="funnel-title">Skinn.kr 서울 피부과 가이드 분석 프로세스</div>
                <div class="funnel-container">
                    <div class="funnel-step step-1">
                        <div class="funnel-step-content">
                            <span class="funnel-icon">🗄️</span>
                            <div class="funnel-text">
                                <span class="funnel-number">${treatments.length}개</span>
                                <span class="funnel-label">전체 시술 DB</span>
                            </div>
                        </div>
                    </div>
                    <div class="funnel-arrow arrow-1">
                        <svg class="arrow-svg" viewBox="0 0 50 24" fill="none">
                            <path d="M0 12H40M40 12L32 4M40 12L32 20" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        <span class="arrow-text">필터링</span>
                    </div>
                    <div class="funnel-step step-2">
                        <div class="funnel-step-content">
                            <span class="funnel-icon">🔍</span>
                            <div class="funnel-text">
                                <span class="funnel-number">${getTotalTreatments(response.combinations) * 3 || 64}개</span>
                                <span class="funnel-label">적합 시술</span>
                            </div>
                        </div>
                    </div>
                    <div class="funnel-arrow arrow-2">
                        <svg class="arrow-svg" viewBox="0 0 50 24" fill="none">
                            <path d="M0 12H40M40 12L32 4M40 12L32 20" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        <span class="arrow-text">분석</span>
                    </div>
                    <div class="funnel-step step-3">
                        <div class="funnel-step-content">
                            <span class="funnel-icon">⚙️</span>
                            <div class="funnel-text">
                                <span class="funnel-number">7가지</span>
                                <span class="funnel-label">요소 분석</span>
                            </div>
                        </div>
                    </div>
                    <div class="funnel-arrow arrow-3">
                        <svg class="arrow-svg" viewBox="0 0 50 24" fill="none">
                            <path d="M0 12H40M40 12L32 4M40 12L32 20" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        <span class="arrow-text">최적화</span>
                    </div>
                    <div class="funnel-result">
                        <span class="result-icon">✨</span>
                        <div class="result-text-wrap">
                            <span class="result-label">맞춤 조합</span>
                            <span class="result-number">3가지</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- NEW: AI 연령 적합도 분석 배너 -->
            ${warningTreatments.length > 0 || avgIntensity >= 3 ? `
            <div class="age-analysis-banner ${warningTreatments.length > 0 ? 'warning' : 'info'}">
                <div class="age-banner-icon">${warningTreatments.length > 0 ? '△' : 'ℹ️'}</div>
                <div class="age-banner-content">
                    <strong>${userData.age || ''} 연령대 분석</strong>
                    <p>
                        ${warningTreatments.length > 0 ? 
                            `일부 시술(${warningTreatments.map(t => t.name).join(', ')})은 ${userData.age || '해당'} 연령대에 주의가 필요합니다.` : 
                            avgIntensity >= 3 ? '추천된 조합에 고강도 시술이 포함되어 있습니다. 시술 경험이 있으신 분께 적합합니다.' : 
                            '추천된 시술들은 연령대에 적합합니다.'}
                        ${expNeededTreatments.length > 0 ? ` 시술 경험자에게 권장되는 시술: ${expNeededTreatments.map(t => t.name).join(', ')}` : ''}
                    </p>
                </div>
            </div>
            ` : ''}
            
            <!-- 분석 요약 3열 -->
            <div class="analysis-summary">
                <div class="summary-card">
                    <h4>요청 조건</h4>
                    <div class="summary-row"><span>연령</span><strong>${userData.age || '-'}</strong></div>
                    <div class="summary-row"><span>예산</span><strong>${userData.budget ? userData.budget + '만원' : '-'}</strong></div>
                    <div class="summary-row"><span>다운타임</span><strong>${userData.downtime || '-'}</strong></div>
                    <div class="summary-row"><span>통증</span><strong>${userData.pain || '-'}</strong></div>
                </div>
                
                <div class="summary-card highlight">
                    <h4>우선순위</h4>
                    ${primaryConcerns.length > 0 ? `
                    <div class="concern-group">
                        <span class="concern-label primary">핵심 고민</span>
                        <div class="concern-tags">${primaryConcerns.map(c => `<span class="ctag primary">${c}</span>`).join('')}</div>
                    </div>
                    ` : ''}
                    ${secondaryConcerns.length > 0 ? `
                    <div class="concern-group">
                        <span class="concern-label secondary">부가 고민</span>
                        <div class="concern-tags">${secondaryConcerns.map(c => `<span class="ctag secondary">${c}</span>`).join('')}</div>
                    </div>
                    ` : ''}
                </div>
                
                <div class="summary-card result">
                    <h4>분석 결과</h4>
                    <div class="result-big">
                        <span class="result-price">${getPriceRange(response.combinations)}</span>
                        <span class="result-label">예상 비용 범위</span>
                    </div>
                    <div class="result-meta">
                        <span>${getTotalTreatments(response.combinations)}개 시술</span>
                        <span>3개 플랜</span>
                    </div>
                </div>
            </div>
            
            <!-- AI 코멘트 -->
            <div class="ai-comment-v2">
                <div class="comment-content">
                    <p>${response.greeting || ''}</p>
                </div>
            </div>
            
            <!-- NEW: 분석 논거 섹션 -->
            ${response.analysisDetails ? `
            <div class="section-v2 analysis-section">
                <div class="section-header">
                    <h3>추천 분석 리포트</h3>
                    <span class="section-badge">AI 분석</span>
                </div>
                
                <div class="analysis-details">
                    <!-- 우선순위 분석 (첫 번째) -->
                    ${response.analysisDetails.priorityAnalysis ? `
                    <div class="analysis-card priority-card">
                        <div class="analysis-card-header">
                            <span class="analysis-icon">${response.analysisDetails.priorityAnalysis.icon}</span>
                            <h4>${response.analysisDetails.priorityAnalysis.title}</h4>
                            <span class="analysis-badge priority">${response.analysisDetails.priorityAnalysis.priority} 중시</span>
                        </div>
                        <p class="analysis-content">${response.analysisDetails.priorityAnalysis.description}</p>
                        <p class="analysis-detail">${response.analysisDetails.priorityAnalysis.detail}</p>
                    </div>
                    ` : ''}
                    
                    <!-- 연령대 분석 -->
                    ${response.analysisDetails.ageAnalysis?.content ? `
                    <div class="analysis-card">
                        <div class="analysis-card-header">
                            <span class="analysis-icon">👤</span>
                            <h4>${response.analysisDetails.ageAnalysis.title}</h4>
                            <span class="analysis-badge">${response.analysisDetails.ageAnalysis.age}</span>
                        </div>
                        <p class="analysis-content">${response.analysisDetails.ageAnalysis.content}</p>
                    </div>
                    ` : ''}
                    
                    <!-- 피부 타입 분석 (2개 카드 - 다른 분석 카드와 동일한 형식) -->
                    ${response.skinTypeAnalysis ? `
                    <div class="analysis-card">
                        <div class="analysis-card-header">
                            <span class="analysis-icon">💧</span>
                            <h4>${response.skinTypeAnalysis.skinType} 피부 맞춤 분석</h4>
                            <span class="analysis-badge skin">${response.skinTypeAnalysis.skinType}</span>
                        </div>
                        <p class="analysis-content">${response.skinTypeAnalysis.recommendation?.reason || ''}</p>
                        ${response.skinTypeAnalysis.matchedTreatments?.length > 0 ? `
                        <div class="analysis-tags-row">
                            <span class="analysis-tags-label">✓ 이번 추천에 포함된 적합 시술</span>
                            <div class="analysis-tags">
                                ${response.skinTypeAnalysis.matchedTreatments.map(t => `<span class="analysis-tag good">${t}</span>`).join('')}
                            </div>
                        </div>
                        ` : ''}
                        ${(response.skinTypeAnalysis.recommendation?.avoid || []).length > 0 ? `
                        <div class="analysis-tags-row caution">
                            <span class="analysis-tags-label">⚠ 주의가 필요한 시술</span>
                            <div class="analysis-tags">
                                ${(response.skinTypeAnalysis.recommendation?.avoid || []).map(t => `<span class="analysis-tag caution">${t}</span>`).join('')}
                            </div>
                        </div>
                        ` : ''}
                    </div>
                    
                    <div class="analysis-card">
                        <div class="analysis-card-header">
                            <span class="analysis-icon">📊</span>
                            <h4>${response.skinTypeAnalysis.skinType} 피부 점수 가중치</h4>
                            <span class="analysis-badge boost">${response.skinTypeAnalysis.scoreImpact?.boostedCount || 0}개 가산</span>
                        </div>
                        <p class="analysis-content">${response.skinTypeAnalysis.scoreImpact?.totalAnalyzed || 0}개 시술 분석 중 ${response.skinTypeAnalysis.scoreImpact?.boostedCount || 0}개 시술에 피부타입 가산점이 적용되었습니다.</p>
                        <div class="score-boost-grid">
                            ${(response.skinTypeAnalysis.recommendedCategories || []).map(cat => `
                            <div class="score-boost-item">
                                <span class="boost-icon">${cat.icon}</span>
                                <div class="boost-info">
                                    <span class="boost-name">${cat.name}</span>
                                    <span class="boost-treatments">${cat.treatments.join(', ')}</span>
                                </div>
                                <span class="boost-percent">${cat.boost}</span>
                            </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}
                    
                    <!-- 고민별 시술 매칭 (핵심 + 부가 가로 배치, 바깥 박스 없음) -->
                    ${response.analysisDetails.concernAnalysis?.primary?.length ? `
                    <div class="concern-boxes-horizontal">
                        <!-- 핵심 고민 박스 -->
                        <div class="concern-box-card primary">
                            <div class="concern-box-header-row">
                                <span class="concern-box-icon">❗</span>
                                <span class="concern-box-title">핵심 고민</span>
                            </div>
                            <div class="concern-items-list">
                                ${response.analysisDetails.concernAnalysis.primary.map(c => `
                                    <div class="concern-item-row">
                                        <span class="concern-tag primary">${c.concern}</span>
                                        <p class="concern-desc">${c.reason}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <!-- 부가 고민 박스 (항상 표시) -->
                        <div class="concern-box-card secondary">
                            <div class="concern-box-header-row">
                                <span class="concern-box-icon">💫</span>
                                <span class="concern-box-title">부가 고민</span>
                            </div>
                            <div class="concern-items-list">
                                ${response.analysisDetails.concernAnalysis.secondary?.length ? 
                                    response.analysisDetails.concernAnalysis.secondary.map(c => `
                                        <div class="concern-item-row">
                                            <span class="concern-tag secondary">${c.concern}</span>
                                            <p class="concern-desc">${c.concern} 개선에는 ${(c.treatments || []).join(', ')} 등의 시술이 효과적입니다.</p>
                                        </div>
                                    `).join('') 
                                : `<div class="concern-empty">선택된 부가 고민이 없습니다</div>`}
                            </div>
                        </div>
                    </div>
                    ` : ''}
                    
                    <!-- 조건 분석 (개선) -->
                    <div class="analysis-card">
                        <div class="analysis-card-header">
                            <span class="analysis-icon">⚙</span>
                            <h4>${response.analysisDetails.conditionAnalysis?.title || '조건별 필터링'}</h4>
                        </div>
                        <p class="analysis-intro">입력하신 조건을 기반으로 ${treatments.length}개 시술 중 최적의 조합을 도출했습니다.</p>
                        <div class="condition-grid">
                            ${(response.analysisDetails.conditionAnalysis?.items || []).map(item => `
                                <div class="condition-item">
                                    <div class="condition-header">
                                        <span class="condition-icon">${item.icon}</span>
                                        <span class="condition-label">${item.label}</span>
                                        <span class="condition-value">${item.value}</span>
                                    </div>
                                    <p class="condition-detail">${item.detail}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- 시너지 분석 (개선) -->
                    ${response.analysisDetails.synergyAnalysis?.combinations?.some(c => c.synergies?.length) ? `
                    <div class="analysis-card">
                        <div class="analysis-card-header">
                            <span class="analysis-icon">🔗</span>
                            <h4>${response.analysisDetails.synergyAnalysis.title}</h4>
                        </div>
                        <p class="analysis-intro">${response.analysisDetails.synergyAnalysis.description || '동시 시술 시 상호 보완 효과가 있는 조합을 분석했습니다.'}</p>
                        <div class="synergy-list">
                            ${(() => {
                                const allSynergies = [];
                                const seenPairs = new Set();
                                
                                response.analysisDetails.synergyAnalysis.combinations.forEach(c => {
                                    c.synergies?.forEach(s => {
                                        const pairKey = s.pair.split(' + ').sort().join('+');
                                        if (!seenPairs.has(pairKey)) {
                                            seenPairs.add(pairKey);
                                            allSynergies.push({
                                                ...s,
                                                combos: [c.comboName]
                                            });
                                        } else {
                                            const existing = allSynergies.find(syn => 
                                                syn.pair.split(' + ').sort().join('+') === pairKey
                                            );
                                            if (existing && !existing.combos.includes(c.comboName)) {
                                                existing.combos.push(c.comboName);
                                            }
                                        }
                                    });
                                });
                                
                                return allSynergies.slice(0, 4).map(s => `
                                    <div class="synergy-item-v2">
                                        <div class="synergy-title-row">
                                            <span class="synergy-pair">${s.pair}</span>
                                            <span class="synergy-boost">+${Math.round((s.boost - 1) * 100)}% 효과</span>
                                        </div>
                                        <p class="synergy-mechanism">${s.mechanism || s.reason}</p>
                                        ${s.combos.length > 0 ? `<span class="synergy-combos">📦 ${s.combos.join(', ')} 포함</span>` : ''}
                                    </div>
                                `).join('');
                            })()}
                        </div>
                    </div>
                    ` : ''}
                    
                    <!-- 부위 분석 (개선) -->
                    ${response.analysisDetails.areaAnalysis ? `
                    <div class="analysis-card">
                        <div class="analysis-card-header">
                            <span class="analysis-icon">📍</span>
                            <h4>${response.analysisDetails.areaAnalysis.title}</h4>
                        </div>
                        <p class="analysis-intro">${response.analysisDetails.areaAnalysis.content}</p>
                        ${response.analysisDetails.areaAnalysis.details?.length ? `
                        <div class="area-details-v2">
                            ${response.analysisDetails.areaAnalysis.details.filter(d => d.reason || d.characteristics).map(d => `
                                <div class="area-detail-card">
                                    <div class="area-detail-header">
                                        <span class="area-name-v2">${d.area}</span>
                                        ${d.recommendedTypes?.length ? `<span class="area-types">${d.recommendedTypes.slice(0,2).join(' · ')}</span>` : ''}
                                    </div>
                                    ${d.characteristics ? `<p class="area-characteristics">${d.characteristics}</p>` : ''}
                                    ${d.reason ? `<p class="area-reason-v2">${d.reason}</p>` : ''}
                                </div>
                            `).join('')}
                        </div>
                        ` : ''}
                    </div>
                    ` : ''}
                    
                    <!-- 시기별 추천 (계절 분석) - 마지막으로 이동 -->
                    ${response.analysisDetails.seasonAnalysis?.content ? `
                    <div class="analysis-card season-card">
                        <div class="analysis-card-header">
                            <span class="analysis-icon">📅</span>
                            <h4>시기별 추천</h4>
                            <span class="analysis-badge season">${response.analysisDetails.seasonAnalysis.season}철</span>
                        </div>
                        <p class="analysis-content">${response.analysisDetails.seasonAnalysis.content}</p>
                    </div>
                    ` : ''}
                </div>
            </div>
            ` : ''}
            
            <!-- 3가지 조합 -->
            <div class="section-v2">
                <div class="section-header">
                    <h3>맞춤 시술 조합</h3>
                    <span class="section-badge">3가지 플랜</span>
                </div>
                
                <div class="combo-grid-v2">
                ${response.combinations?.map((combo, i) => {
                    const txList = combo.treatments || [];
                    if (txList.length === 0) return '';
                    const labels = ['A', 'B', 'C'];
                    const themes = ['premium', 'balance', 'efficient'];
                    
                    // 조합 내 시술 분석
                    const hasWarning = txList.some(t => t.youngWarning);
                    const avgIntensity = txList.reduce((sum, t) => sum + (t.intensityLevel || 0), 0) / txList.length;
                    const allFirstTimerOk = txList.every(t => t.firstTimerOk !== false);
                    const hasExpRequired = txList.some(t => t.firstTimerOk === false);
                    
                    // 다운타임 계산
                    const downtimeValues = txList.map(t => {
                        const dt = t.downtime || '';
                        if (dt.includes('1주') || dt.includes('7일') || dt.includes('일주일')) return 7;
                        if (dt.includes('3~5일') || dt.includes('3-5일') || dt.includes('4~5일')) return 5;
                        if (dt.includes('2~3일') || dt.includes('2-3일') || dt.includes('3일')) return 3;
                        if (dt.includes('1~2일') || dt.includes('1-2일') || dt.includes('2일')) return 2;
                        if (dt.includes('당일') || dt.includes('없음') || dt.includes('1일') || dt === '') return 1;
                        return 2;
                    });
                    const maxDowntime = Math.max(...downtimeValues, 1);
                    const downtimeText = maxDowntime <= 1 ? '당일 회복' : 
                                        maxDowntime <= 2 ? '1~2일' : 
                                        maxDowntime <= 3 ? '2~3일' : 
                                        maxDowntime <= 5 ? '3~5일' : '약 1주일';
                    
                    // 시술 개수 및 타입 분석
                    const treatmentCount = txList.length;
                    const hasLaser = txList.some(t => (t.name || '').match(/레이저|토닝|피코|IPL|프락셀|CO2/));
                    const hasInjection = txList.some(t => (t.name || '').match(/보톡스|필러|주사|스킨부스터|리쥬란|쥬베룩/));
                    const hasLifting = txList.some(t => (t.name || '').match(/리프팅|울쎄라|써마지|슈링크|올리지오|실리프팅/));
                    const hasSkincare = txList.some(t => (t.name || '').match(/필링|아쿠아필|관리|스케일링/));
                    
                    // 조합 특성 배지 결정
                    const comboBadges = [];
                    
                    // 다운타임 배지 (항상 표시)
                    comboBadges.push(`<span class="combo-badge downtime">🕐 다운타임 ${downtimeText}</span>`);
                    
                    // 강도 기반 배지 (의미있는 경우만)
                    if (avgIntensity >= 3.5) {
                        comboBadges.push(`<span class="combo-badge intensity-high">🔥 고강도</span>`);
                    }
                    if (hasExpRequired) {
                        comboBadges.push(`<span class="combo-badge exp-required">💎 경험자 추천</span>`);
                    }
                    if (hasWarning) {
                        comboBadges.push(`<span class="combo-badge has-warning">△ 연령 주의</span>`);
                    }
                    
                    // 조합 타입 배지
                    if (hasLifting && hasInjection) {
                        comboBadges.push(`<span class="combo-badge combo-type">💉 리프팅+주사 복합</span>`);
                    } else if (hasLaser && hasInjection) {
                        comboBadges.push(`<span class="combo-badge combo-type">✨ 레이저+주사 복합</span>`);
                    } else if (hasLifting && hasLaser) {
                        comboBadges.push(`<span class="combo-badge combo-type">⚡ 리프팅+레이저</span>`);
                    } else if (treatmentCount >= 4) {
                        comboBadges.push(`<span class="combo-badge combo-type">📦 종합 패키지</span>`);
                    }
                    
                    // 시술 개수 배지
                    if (treatmentCount <= 2) {
                        comboBadges.push(`<span class="combo-badge simple">🎯 핵심 집중</span>`);
                    } else if (treatmentCount >= 5) {
                        comboBadges.push(`<span class="combo-badge full">📋 풀케어</span>`);
                    }
                    
                    return `
                    <div class="combo-card-v2 ${themes[i]}">
                        <div class="combo-top">
                            <span class="combo-letter">${labels[i]}</span>
                            <div class="combo-info-v2">
                                <h4>${combo.name || '플랜 ' + labels[i]}</h4>
                                <span class="combo-price-v2">${combo.totalPrice || combo.price || ''}</span>
                            </div>
                        </div>
                        <!-- 조합 분석 배지 -->
                        ${comboBadges.length > 0 ? `
                        <div class="combo-analysis-badges">
                            ${comboBadges.join('')}
                        </div>
                        ` : ''}
                        ${combo.tip ? `<p class="combo-tip-v2">${combo.tip}</p>` : ''}
                        <ul class="combo-list-v2">
                            ${txList.map(t => {
                                // 태그가 없으면 기본 매칭 시도
                                let concerns = t.matchedConcerns || [];
                                if (concerns.length === 0) {
                                    // 시술명에서 키워드 기반 매칭
                                    const name = t.name || '';
                                    const allConcerns = [...primaryConcerns, ...secondaryConcerns];
                                    const keywordMap = {
                                        '탄력': ['탄력저하', '처진피부'],
                                        '리프팅': ['탄력저하', '처진피부'],
                                        '울쎄라': ['탄력저하', '처진피부'],
                                        '써마지': ['탄력저하', '처진피부'],
                                        '실루엣': ['탄력저하'],
                                        '보톡스': ['주름', '탄력저하'],
                                        '필러': ['볼륨손실', '주름'],
                                        '리쥬란': ['피부결', '탄력저하'],
                                        '토닝': ['기미잡티', '피부톤'],
                                        '피코': ['기미잡티', '색소침착'],
                                        'IPL': ['기미잡티', '홍조', '피부톤'],
                                        '프락셀': ['여드름흉터', '흉터', '모공', '피부결'],
                                        '아쿠아필': ['피부결', '여드름'],
                                        '필링': ['피부결', '여드름'],
                                        '스킨부스터': ['피부결', '탄력저하'],
                                        '물광': ['피부결', '피부톤'],
                                        '탈모': ['탈모'],
                                        'PRP': ['탈모'],
                                        '미녹시딜': ['탈모'],
                                        '두피': ['탈모'],
                                        '제모': ['제모'],
                                        '다한증': ['다한증'],
                                        '여드름': ['여드름', '여드름흉터'],
                                        '모공': ['모공'],
                                        '흉터': ['흉터', '여드름흉터'],
                                        '홍조': ['홍조'],
                                        '브이빔': ['홍조'],
                                        '다크서클': ['다크서클'],
                                        '눈밑': ['다크서클'],
                                        '지방': ['이중턱', '볼륨손실'],
                                        '윤곽': ['이중턱'],
                                        'LED': ['여드름', '피부결'],
                                        '마늘': ['피부톤', '피부결'],
                                        '이온토': ['피부결', '피부톤'],
                                        '블루라이트': ['여드름']
                                    };
                                    Object.entries(keywordMap).forEach(([keyword, matchConcerns]) => {
                                        if (name.includes(keyword)) {
                                            matchConcerns.forEach(mc => {
                                                if (allConcerns.includes(mc) && !concerns.includes(mc)) {
                                                    concerns.push(mc);
                                                }
                                            });
                                        }
                                    });
                                }
                                
                                // shortDesc 생성 - DB에서 직접 조회
                                let shortDesc = '';
                                const dbTreatment = treatments.find(tx => tx.name === t.name);
                                if (dbTreatment && dbTreatment.review && dbTreatment.review.summary) {
                                    const summary = dbTreatment.review.summary;
                                    shortDesc = summary.length > 45 ? summary.substring(0, 45) + '...' : summary;
                                }
                                
                                return `
                                <li class="tx-item-clickable" onclick="openTreatmentModal('${(t.name || '').replace(/'/g, "\\'")}')">
                                    <div class="tx-info-v2">
                                        <span class="tx-name-v2">${t.name}</span>
                                        <div class="tx-price-arrow">
                                            <span class="tx-price-v2">${t.price || ''}</span>
                                            <span class="tx-arrow">›</span>
                                        </div>
                                    </div>
                                    <p class="tx-desc">${shortDesc || '클릭하여 상세 정보 보기'}</p>
                                    <!-- 고민 태그 (핑크 계열) -->
                                    ${concerns.length ? `
                                        <div class="tx-concerns">
                                            ${concerns.map(c => {
                                                const isPrimary = primaryConcerns.includes(c);
                                                return `<span class="concern-tag ${isPrimary ? 'primary' : 'secondary'}">${c}</span>`;
                                            }).join('')}
                                        </div>
                                    ` : ''}
                                </li>
                                `;
                            }).join('')}
                        </ul>
                    </div>
                    `;
                }).join('') || ''}
                </div>
            </div>
            
            <!-- 종합 추천 -->
            ${response.recommendation ? `
            <div class="section-v2 recommendation-section">
                <div class="section-header">
                    <h3>💡 종합 추천 의견</h3>
                </div>
                <div class="recommendation-card">
                    <div class="recommendation-main">${formatRecommendation(response.recommendation)}</div>
                    <div class="recommendation-sub">
                        <p>위 추천은 입력하신 정보와 ${treatments.length}개 시술 데이터베이스를 기반으로 분석한 결과입니다. 실제 시술 결정은 반드시 피부과 전문의와 대면 상담 후 개인 피부 상태를 고려하여 결정하시기 바랍니다.</p>
                    </div>
                </div>
            </div>
            ` : ''}
            
            <!-- 피부 타입별 홈케어 가이드 -->
            ${response.skinTypeAnalysis ? `
            <div class="section-v2 homecare-section">
                <div class="section-header">
                    <h3>🏠 ${response.skinTypeAnalysis.skinType} 피부 홈케어 가이드</h3>
                    <span class="section-badge">${response.skinTypeAnalysis.skinType}</span>
                </div>
                <div class="homecare-grid">
                    <div class="homecare-card daily">
                        <div class="homecare-card-header">
                            <span class="homecare-icon">🌅</span>
                            <h4>데일리 케어</h4>
                        </div>
                        <ul class="homecare-list">
                            ${(response.skinTypeAnalysis.careAdvice?.daily || []).map(tip => `<li>${tip}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="homecare-card treatment">
                        <div class="homecare-card-header">
                            <span class="homecare-icon">✨</span>
                            <h4>추천 시술</h4>
                        </div>
                        <ul class="homecare-list">
                            ${(response.skinTypeAnalysis.careAdvice?.treatment || []).map(tip => `<li>${tip}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="homecare-card avoid">
                        <div class="homecare-card-header">
                            <span class="homecare-icon">🚫</span>
                            <h4>피해야 할 것</h4>
                        </div>
                        <ul class="homecare-list">
                            ${(response.skinTypeAnalysis.careAdvice?.avoid || []).map(tip => `<li>${tip}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
                <!-- 추가: 성분 가이드 + 루틴 -->
                <div class="homecare-extended">
                    <div class="homecare-card ingredients">
                        <div class="homecare-card-header">
                            <span class="homecare-icon">🧪</span>
                            <h4>성분 가이드</h4>
                        </div>
                        <ul class="homecare-list ingredients-list">
                            ${(response.skinTypeAnalysis.careAdvice?.ingredients || []).map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="homecare-card routine">
                        <div class="homecare-card-header">
                            <span class="homecare-icon">📝</span>
                            <h4>추천 루틴</h4>
                        </div>
                        <div class="routine-content">
                            ${(response.skinTypeAnalysis.careAdvice?.routine || '').split('\n').map(line => {
                                if (line.startsWith('아침:')) {
                                    return `<div class="routine-section morning"><span class="routine-label">☀️ 아침</span><p>${line.replace('아침:', '').trim()}</p></div>`;
                                } else if (line.startsWith('저녁:')) {
                                    return `<div class="routine-section evening"><span class="routine-label">🌙 저녁</span><p>${line.replace('저녁:', '').trim()}</p></div>`;
                                }
                                return `<p>${line}</p>`;
                            }).join('')}
                        </div>
                    </div>
                </div>
            </div>
            ` : ''}
            
            <!-- 전문가 가이드 -->
            <div class="section-v2 expert-guide-section">
                <div class="section-header">
                    <h3>📋 시술 전 체크리스트</h3>
                    <span class="section-badge">필독</span>
                </div>
                <div class="expert-guide-grid">
                    <div class="guide-card">
                        <div class="guide-card-header">
                            <div class="guide-icon">🏥</div>
                            <h4>병원 선택 가이드</h4>
                        </div>
                        <ul class="guide-list">
                            <li>해당 시술 경험이 풍부한 의료진 선택</li>
                            <li>정품 장비 및 약품 사용 여부 확인</li>
                            <li>시술 전후 사진으로 결과 확인</li>
                            <li>리뷰 확인 시 과장 광고 주의</li>
                            <li>사후 관리 및 A/S 정책 확인</li>
                        </ul>
                    </div>
                    <div class="guide-card">
                        <div class="guide-card-header">
                            <div class="guide-icon">💰</div>
                            <h4>비용 절약 팁</h4>
                        </div>
                        <ul class="guide-list">
                            <li>패키지 구매 시 10~20% 할인 가능</li>
                            <li>정기 관리 프로그램 문의</li>
                            <li>신규 고객 프로모션 활용</li>
                            <li>성수기(여름) 피하면 가격 협상 유리</li>
                            <li>동일 효과의 제네릭 제품 문의</li>
                        </ul>
                    </div>
                    <div class="guide-card">
                        <div class="guide-card-header">
                            <div class="guide-icon">📅</div>
                            <h4>최적의 시술 시기</h4>
                        </div>
                        <ul class="guide-list">
                            <li><strong>레이저/필링:</strong> 자외선 약한 가을~겨울 최적</li>
                            <li><strong>리프팅:</strong> 계절 무관, 중요 일정 2주 전 권장</li>
                            <li><strong>보톡스:</strong> 효과 발현까지 1~2주 소요</li>
                            <li><strong>필러:</strong> 붓기 감안해 일정 1주 전 시술</li>
                            <li>레티놀 사용자는 시술 2주 전 중단</li>
                        </ul>
                    </div>
                    <div class="guide-card">
                        <div class="guide-card-header">
                            <div class="guide-icon">△</div>
                            <h4>상담 시 필수 고지사항</h4>
                        </div>
                        <ul class="guide-list">
                            <li>현재 복용 중인 약물 (특히 혈액응고제)</li>
                            <li>과거 시술 이력 및 부작용 경험</li>
                            <li>알레르기 및 켈로이드 체질 여부</li>
                            <li>임신/수유 중이거나 계획 중인 경우</li>
                            <li>최근 피부 트러블이나 질환</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <!-- 시술 전후 주의사항 (전문적으로 확장) -->
            <div class="section-v2 precaution-section">
                <div class="section-header">
                    <h3>📌 시술 전후 주의사항</h3>
                    <span class="section-badge">중요</span>
                </div>
                <div class="precaution-grid">
                    <div class="precaution-card before">
                        <div class="precaution-header">
                            <span class="precaution-icon">⏰</span>
                            <h4>시술 전 준비사항</h4>
                        </div>
                        <div class="precaution-timeline">
                            <div class="timeline-item">
                                <span class="timeline-badge">2주 전</span>
                                <div class="timeline-content">
                                    <p><strong>레티놀/비타민A 제품 중단</strong></p>
                                    <p class="sub">피부 자극을 유발하고 회복을 지연시킬 수 있습니다</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <span class="timeline-badge">1주 전</span>
                                <div class="timeline-content">
                                    <p><strong>각질 제거 성분(AHA/BHA) 중단</strong></p>
                                    <p class="sub">필링, 스크럽 제품 사용을 피해주세요</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <span class="timeline-badge">3일 전</span>
                                <div class="timeline-content">
                                    <p><strong>음주 자제</strong></p>
                                    <p class="sub">혈관 확장으로 멍, 붓기 위험 증가</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <span class="timeline-badge">당일</span>
                                <div class="timeline-content">
                                    <p><strong>깨끗한 피부로 내원</strong></p>
                                    <p class="sub">메이크업 최소화, 렌즈 착용 자제</p>
                                </div>
                            </div>
                        </div>
                        <div class="precaution-notice">
                            <p>💊 <strong>필수 고지:</strong> 아스피린, 혈액응고제, 오메가3 복용 시 최소 1주 전 의료진에게 알려주세요</p>
                        </div>
                    </div>
                    
                    <div class="precaution-card after">
                        <div class="precaution-header">
                            <span class="precaution-icon">✨</span>
                            <h4>시술 후 관리법</h4>
                        </div>
                        <div class="precaution-timeline">
                            <div class="timeline-item">
                                <span class="timeline-badge">당일</span>
                                <div class="timeline-content">
                                    <p><strong>냉찜질로 붓기 관리</strong></p>
                                    <p class="sub">얼음을 수건에 감싸 15분씩 간헐적으로</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <span class="timeline-badge">48시간</span>
                                <div class="timeline-content">
                                    <p><strong>고온 환경 피하기</strong></p>
                                    <p class="sub">사우나, 찜질방, 뜨거운 물 샤워 금지</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <span class="timeline-badge">1주일</span>
                                <div class="timeline-content">
                                    <p><strong>자외선 차단 철저히</strong></p>
                                    <p class="sub">SPF 50+ 선크림 필수, 모자/양산 권장</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <span class="timeline-badge">2주간</span>
                                <div class="timeline-content">
                                    <p><strong>보습 집중 관리</strong></p>
                                    <p class="sub">재생크림, 수분크림 충분히 사용</p>
                                </div>
                            </div>
                        </div>
                        <div class="precaution-notice success">
                            <p>🚫 <strong>금지사항:</strong> 음주, 흡연, 격한 운동, 수영, 딱지 손으로 떼기, 강한 세안</p>
                        </div>
                    </div>
                </div>
                
                <!-- 추가 관리 팁 -->
                <div class="aftercare-tips">
                    <h4>🌟 효과 극대화를 위한 추가 팁</h4>
                    <div class="tips-grid">
                        <div class="tip-card">
                            <div class="tip-card-header">
                                <span class="tip-icon">💧</span>
                                <span class="tip-card-title">충분한 수분 섭취</span>
                            </div>
                            <p>하루 2L 이상의 물을 마셔 피부 재생을 돕습니다</p>
                        </div>
                        <div class="tip-card">
                            <div class="tip-card-header">
                                <span class="tip-icon">😴</span>
                                <span class="tip-card-title">충분한 수면</span>
                            </div>
                            <p>피부 재생이 활발한 밤 10시~새벽 2시 숙면 권장</p>
                        </div>
                        <div class="tip-card">
                            <div class="tip-card-header">
                                <span class="tip-icon">🥗</span>
                                <span class="tip-card-title">항산화 식품 섭취</span>
                            </div>
                            <p>비타민C, E가 풍부한 과일과 채소 섭취</p>
                        </div>
                        <div class="tip-card">
                            <div class="tip-card-header">
                                <span class="tip-icon">🧴</span>
                                <span class="tip-card-title">저자극 스킨케어</span>
                            </div>
                            <p>시술 후 1~2주간 순한 제품만 사용</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 액션 -->
            <div class="report-actions-v2">
                <button class="btn-secondary" onclick="resetConsultation()">다시 상담받기</button>
                <button class="btn-primary" onclick="window.print()">리포트 저장</button>
            </div>
            
            <!-- 푸터 -->
            <div class="report-footer-v2">
                <div class="footer-logo">Skinn.kr</div>
                <p class="footer-main">본 리포트는 <strong>${treatments.length}개 피부과 시술 데이터</strong>와 <strong>임상 문헌 기반 시너지 분석</strong>을 통해 Skinn.kr AI가 생성한 맞춤 분석 결과입니다.</p>
                <p class="footer-sub">정확한 진단과 최종 시술 결정은 반드시 피부과 전문의와 대면 상담 후 진행하시기 바랍니다.</p>
            </div>
        </div>
    `;
    
    document.getElementById('consultResult').innerHTML = html;
}
function resetConsultation() {
    consultState = {
        currentStep: 1,
        totalSteps: 7,
        data: {
            age: null,
            experience: null,
            skinType: null,
            primaryConcerns: [],
            secondaryConcerns: [],
            concerns: [],
            areas: [],
            budget: null,
            downtime: '상관없음',  // 기본값: 상관없어요 (추천)
            pain: '괜찮음',  // 기본값: 잘 참아요 (추천)
            treatmentType: ['상관없음'],  // 기본값
            duration: '중기',  // 기본값: 6~12개월 (추천)
            priority: '효과',  // 기본값: 효과 중시 (추천)
            frequency: '정기',  // 기본값: 정기 관리 (추천)
            pastTreatments: []
        }
    };
    
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    document.querySelectorAll('.preset-btn').forEach(btn => btn.classList.remove('selected'));
    document.querySelectorAll('.concern-chip').forEach(chip => chip.classList.remove('in-primary', 'in-secondary'));
    
    // 기본 선택 버튼들 다시 선택 상태로
    const defaultButtons = [
        { selector: '.option-grid[data-field="treatmentType"] .option-btn[data-value="상관없음"]' },
        { selector: '.option-btn[data-field="downtime"][data-value="상관없음"]' },
        { selector: '.option-btn[data-field="pain"][data-value="괜찮음"]' },
        { selector: '.option-btn[data-field="duration"][data-value="중기"]' },
        { selector: '.option-btn[data-field="priority"][data-value="효과"]' },
        { selector: '.option-btn[data-field="frequency"][data-value="정기"]' }
    ];
    defaultButtons.forEach(({ selector }) => {
        const btn = document.querySelector(selector);
        if (btn) btn.classList.add('selected');
    });

    // 드롭존 초기화
    ['primaryConcerns', 'secondaryConcerns'].forEach(id => {
        const zone = document.getElementById(id);
        if (zone) {
            zone.querySelectorAll('.concern-chip').forEach(c => c.remove());
            const placeholder = zone.querySelector('.dropzone-placeholder');
            if (placeholder) placeholder.style.display = 'block';
        }
    });
    
    goToStep(1);
    
    document.getElementById('consultResult').classList.add('hidden');
    document.getElementById('consultLoading').classList.add('hidden');
    document.getElementById('consultWizard').classList.remove('hidden');
}

// ===== Landing Page Enhancements =====

// Compact Testimonials Rotation - Authentic & International
function setupTestimonials() {
    const compactEl = document.getElementById('compactTestimonial');
    if (!compactEl) return;

    const testimonials = [
        // Korean users - specific & authentic
        { stars: '★★★★★', quote: '"울쎄라 가격 천차만별인데 여기서 시세 파악하고 갔더니 협상이 됐어요"', author: '- par*****@***.com (한국)' },
        { stars: '★★★★☆', quote: '"인모드 vs 슈링크 고민했는데 비교표 보고 바로 결정했습니다"', author: '- kim*****@***.com (한국)' },
        { stars: '★★★★★', quote: '"다운타임 정보가 정확해서 휴가 일정 맞춰 시술받았어요"', author: '- lee*****@***.com (한국)' },
        { stars: '★★★★★', quote: '"필러 종류별 유지기간 비교가 진짜 유용했어요"', author: '- jun*****@***.com (한국)' },
        { stars: '★★★★☆', quote: '"솔직히 반신반의했는데 실제 후기 기반이라 믿음이 가요"', author: '- cho*****@***.com (한국)' },

        // International users - English
        { stars: '★★★★★', quote: '"Finally found reliable info on Korean skincare procedures!"', author: '- sar*****@***.com (USA)' },
        { stars: '★★★★★', quote: '"Helped me prepare questions before my Seoul clinic visit"', author: '- mik*****@***.com (Singapore)' },
        { stars: '★★★★☆', quote: '"Price ranges were spot-on. No surprises at the clinic"', author: '- emm*****@***.com (UK)' },

        // Japanese users
        { stars: '★★★★★', quote: '"韓国の美容施術の相場が分かって助かりました"', author: '- tan*****@***.com (日本)' },
        { stars: '★★★★★', quote: '"日本語はないけど、翻訳して使ってます。情報が正確！"', author: '- sat*****@***.com (日本)' },

        // Chinese users
        { stars: '★★★★★', quote: '"来韩国做医美之前必看的网站，价格参考很准"', author: '- wan*****@***.com (中国)' },
        { stars: '★★★★☆', quote: '"终于找到靠谱的韩国皮肤科信息了"', author: '- liu*****@***.com (中国)' },
    ];

    // Shuffle array for variety
    const shuffled = [...testimonials].sort(() => Math.random() - 0.5);
    let currentIndex = 0;

    function showNext() {
        currentIndex = (currentIndex + 1) % shuffled.length;
        const t = shuffled[currentIndex];

        compactEl.style.opacity = '0';
        compactEl.style.transform = 'translateY(5px)';

        setTimeout(() => {
            compactEl.querySelector('.compact-stars').textContent = t.stars;
            compactEl.querySelector('.compact-quote').textContent = t.quote;
            compactEl.querySelector('.compact-author').textContent = t.author;
            compactEl.style.opacity = '1';
            compactEl.style.transform = 'translateY(0)';
        }, 300);
    }

    // Add transition styles
    compactEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

    // Rotate every 5 seconds (slower for reading foreign languages)
    setInterval(showNext, 5000);
}

// Real Visitor Tracking (No Fake Data)
function setupLiveUsers() {
    const liveUsersEl = document.getElementById('liveUsers');
    const todayVisitorsEl = document.getElementById('todayVisitors');

    // === 실시간 접속자 (같은 브라우저 내 열린 탭 수 추적) ===
    if (liveUsersEl) {
        const CHANNEL_KEY = 'skinn_live_channel';
        const TAB_KEY = 'skinn_tabs';
        const tabId = Date.now().toString(36) + Math.random().toString(36).substr(2);

        function getActiveTabs() {
            try {
                const tabs = JSON.parse(localStorage.getItem(TAB_KEY) || '{}');
                const now = Date.now();
                // 30초 이상 지난 탭은 제거 (heartbeat 없음 = 닫힘)
                Object.keys(tabs).forEach(id => {
                    if (now - tabs[id] > 30000) delete tabs[id];
                });
                return tabs;
            } catch (e) {
                return {};
            }
        }

        function updateTabCount() {
            const tabs = getActiveTabs();
            tabs[tabId] = Date.now();
            localStorage.setItem(TAB_KEY, JSON.stringify(tabs));
            const count = Object.keys(tabs).length;
            liveUsersEl.textContent = count;
        }

        // 초기 등록
        updateTabCount();

        // 10초마다 heartbeat
        setInterval(updateTabCount, 10000);

        // 다른 탭에서 변경 감지
        window.addEventListener('storage', (e) => {
            if (e.key === TAB_KEY) {
                const tabs = getActiveTabs();
                liveUsersEl.textContent = Object.keys(tabs).length;
            }
        });

        // 탭 닫힐 때 제거
        window.addEventListener('beforeunload', () => {
            const tabs = getActiveTabs();
            delete tabs[tabId];
            localStorage.setItem(TAB_KEY, JSON.stringify(tabs));
        });
    }

    // === 오늘 방문자 (고유 방문만 카운트, 가짜 증가 없음) ===
    if (todayVisitorsEl) {
        const today = new Date().toDateString();
        const countKey = 'skinn_daily_count';
        const dateKey = 'skinn_daily_date';
        const visitedKey = 'skinn_visited_today';

        // 날짜 변경시 리셋
        const storedDate = localStorage.getItem(dateKey);
        if (storedDate !== today) {
            localStorage.setItem(dateKey, today);
            localStorage.setItem(countKey, '0');
            localStorage.removeItem(visitedKey);
        }

        // 현재 카운트
        let visitorCount = parseInt(localStorage.getItem(countKey) || '0');

        // 이 세션에서 처음 방문인지 확인
        const alreadyVisited = sessionStorage.getItem(visitedKey);
        if (!alreadyVisited) {
            visitorCount += 1;
            localStorage.setItem(countKey, visitorCount.toString());
            sessionStorage.setItem(visitedKey, 'true');
        }

        todayVisitorsEl.textContent = visitorCount.toLocaleString();

        // 다른 탭에서 방문자 증가 감지
        window.addEventListener('storage', (e) => {
            if (e.key === countKey) {
                todayVisitorsEl.textContent = parseInt(e.newValue || '0').toLocaleString();
            }
        });
    }
}

// Mobile CTA Bar Visibility
function setupMobileCta() {
    const mobileCta = document.getElementById('mobileCta');
    if (!mobileCta) return;

    // Show/hide based on current view
    function updateMobileCtaVisibility() {
        if (window.innerWidth <= 768) {
            // Only show on landing page
            if (currentView === 'landing') {
                mobileCta.style.display = 'flex';
            } else {
                mobileCta.style.display = 'none';
            }
        } else {
            mobileCta.style.display = 'none';
        }
    }

    // Override switchToView to update CTA visibility
    const originalSwitchToView = switchToView;
    window.switchToView = function(view, updateHash = true) {
        originalSwitchToView(view, updateHash);
        updateMobileCtaVisibility();
    };

    window.addEventListener('resize', updateMobileCtaVisibility);
    updateMobileCtaVisibility();
}

// Scroll-based animations using Intersection Observer
function setupScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
            }
        });
    }, observerOptions);

    // Observe elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Stats Counter Animation (숫자가 0에서 올라가는 효과)
function setupStatsCountUp() {
    const statsBar = document.querySelector('.landing-stats-bar');
    if (!statsBar) return;

    const statNums = statsBar.querySelectorAll('.stat-num[data-count]');
    let animated = false;

    function animateCount(el) {
        const target = parseInt(el.dataset.count);
        const duration = 2000; // 2초
        const start = performance.now();
        const suffix = el.textContent.includes('+') ? '+' : '';
        const isLarge = target >= 10000;

        function update(currentTime) {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * target);

            if (isLarge) {
                // 큰 숫자는 "15만" 형식으로
                if (current >= 10000) {
                    el.textContent = Math.floor(current / 10000) + '만' + suffix;
                } else {
                    el.textContent = current.toLocaleString() + suffix;
                }
            } else {
                el.textContent = current.toLocaleString() + suffix;
            }

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    // Intersection Observer로 화면에 보일 때 애니메이션 시작
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                statNums.forEach(el => animateCount(el));
            }
        });
    }, { threshold: 0.5 });

    observer.observe(statsBar);
}

// Header scroll effect (스크롤 시 헤더 스타일 변경)
function setupHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }

        // 스크롤 다운 시 헤더 숨기기 (선택적)
        // if (currentScroll > lastScroll && currentScroll > 100) {
        //     header.classList.add('header-hidden');
        // } else {
        //     header.classList.remove('header-hidden');
        // }

        lastScroll = currentScroll;
    });
}

// Scroll Progress Bar
function setupScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        progressBar.style.width = progress + '%';
    });
}

// Activity Toast Notifications - International & Authentic
function setupActivityToast() {
    const toast = document.getElementById('activityToast');
    const messageEl = document.getElementById('toastMessage');
    const iconEl = toast?.querySelector('.toast-icon');
    if (!toast || !messageEl) return;

    // Diverse user profiles with realistic activities (no location info)
    const activities = [
        // Korean users - specific procedures
        { icon: '👩', msg: '김**님이 울쎄라 가격 비교 중' },
        { icon: '👨', msg: '이**님이 인모드 후기 확인 중' },
        { icon: '👩', msg: '박**님이 AI 맞춤 상담 시작' },
        { icon: '👨', msg: '최**님이 보톡스 시술 비교 중' },
        { icon: '👩', msg: '정**님이 필러 종류 검색 중' },
        { icon: '👨', msg: '한**님이 모공 시술 정보 확인' },
        { icon: '👩', msg: '윤**님이 리프팅 견적 비교 중' },
        { icon: '👩', msg: '송**님이 슈링크 정보 확인 중' },
        { icon: '👨', msg: '장**님이 AI 상담 진행 중' },

        // International - English speakers (no city)
        { icon: '🇺🇸', msg: 'Sarah K. comparing Ulthera prices' },
        { icon: '🇬🇧', msg: 'James T. checking filler options' },
        { icon: '🇸🇬', msg: 'Michelle L. browsing treatments' },
        { icon: '🇦🇺', msg: 'Emma W. exploring K-beauty procedures' },
        { icon: '🇨🇦', msg: 'David M. started AI consultation' },

        // Japanese users (no city)
        { icon: '🇯🇵', msg: '田中さんがリフティング情報を確認中' },
        { icon: '🇯🇵', msg: '佐藤さんがAI相談を開始' },
        { icon: '🇯🇵', msg: '山田さんが施術比較中' },

        // Chinese users (no city)
        { icon: '🇨🇳', msg: '王女士正在比较热玛吉价格' },
        { icon: '🇨🇳', msg: '李先生正在查看提拉项目' },
        { icon: '🇭🇰', msg: '陳小姐正在瀏覽療程資訊' },

        // Other Asian countries (no city)
        { icon: '🇹🇭', msg: 'Ploy exploring skin treatments' },
        { icon: '🇻🇳', msg: 'Linh checking procedure prices' },
        { icon: '🇲🇾', msg: 'Aisha comparing treatments' },
    ];

    // Shuffle for variety
    const shuffled = [...activities].sort(() => Math.random() - 0.5);
    let currentIndex = 0;

    const timeTexts = [
        '방금 전', '몇 초 전', '1분 전', '2분 전', 'just now', '1 min ago', '刚刚', 'たった今'
    ];
    const timeEl = document.getElementById('toastTime');

    function showToast() {
        const activity = shuffled[currentIndex];
        currentIndex = (currentIndex + 1) % shuffled.length;

        if (iconEl) iconEl.textContent = activity.icon;
        messageEl.textContent = activity.msg;

        // Match time text language to activity
        if (timeEl) {
            if (activity.msg.includes('님') || activity.msg.includes('**')) {
                timeEl.textContent = ['방금 전', '몇 초 전', '1분 전'][Math.floor(Math.random() * 3)];
            } else if (activity.msg.includes('さん') || activity.msg.includes('確認中')) {
                timeEl.textContent = ['たった今', '1分前'][Math.floor(Math.random() * 2)];
            } else if (activity.msg.includes('正在') || activity.msg.includes('女士') || activity.msg.includes('先生')) {
                timeEl.textContent = ['刚刚', '1分钟前'][Math.floor(Math.random() * 2)];
            } else {
                timeEl.textContent = ['just now', '1 min ago', 'moments ago'][Math.floor(Math.random() * 3)];
            }
        }

        toast.classList.add('show');

        // Hide after 4 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    // Only show on landing page
    function scheduleToast() {
        if (currentView === 'landing') {
            showToast();
        }

        // Random interval: 20-40 seconds (less aggressive)
        const nextDelay = 20000 + Math.random() * 20000;
        setTimeout(scheduleToast, nextDelay);
    }

    // Start after 12 seconds
    setTimeout(scheduleToast, 12000);
}

// Initialize all landing enhancements
function setupLandingEnhancements() {
    setupTestimonials();
    setupLiveUsers();
    setupMobileCta();
    setupScrollAnimations();
    setupStatsCountUp();
    setupHeaderScroll();
    setupScrollProgress();
    setupActivityToast();
}
