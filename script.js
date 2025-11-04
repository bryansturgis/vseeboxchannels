// ================================
// Channel Data - vSeeBox Channels 2025
// ================================

// NOTE: Due to the size of the full dataset (1064 channels), this includes a representative sample.
// For production, you should load the complete channel data from /data/channels.json

const CHANNELS_DATA = [
    // Sample channels - Replace with full data in production
    { number: 1, name: "A&E", category: "National Channels", playback: true, id: "national-1" },
    { number: 2, name: "ABC East", category: "National Channels", playback: true, id: "national-2" },
    { number: 3, name: "ABC West", category: "National Channels", playback: false, id: "national-3" },
    { number: 4, name: "ABC News", category: "National Channels", playback: true, id: "national-4" },
    { number: 5, name: "AccuWeather", category: "National Channels", playback: false, id: "national-5" },
    { number: 6, name: "Adult Swim", category: "National Channels", playback: false, id: "national-6" },
    { number: 7, name: "AMC East", category: "National Channels", playback: true, id: "national-7" },
    { number: 28, name: "CBS East", category: "National Channels", playback: true, id: "national-28" },
    { number: 37, name: "CNN", category: "National Channels", playback: true, id: "national-37" },
    { number: 48, name: "Discovery Channel East", category: "National Channels", playback: true, id: "national-48" },
    { number: 64, name: "Fox East", category: "National Channels", playback: true, id: "national-64" },
    { number: 66, name: "Fox News Channel", category: "National Channels", playback: true, id: "national-66" },
    { number: 79, name: "Hallmark Channel East", category: "National Channels", playback: true, id: "national-79" },
    { number: 94, name: "HGTV East", category: "National Channels", playback: true, id: "national-94" },
    { number: 96, name: "History", category: "National Channels", playback: true, id: "national-96" },
    { number: 100, name: "Investigation Discovery East", category: "National Channels", playback: true, id: "national-100" },
    { number: 107, name: "Lifetime", category: "National Channels", playback: true, id: "national-107" },
    { number: 112, name: "MSNBC", category: "National Channels", playback: true, id: "national-112" },
    { number: 119, name: "NBC East", category: "National Channels", playback: true, id: "national-119" },
    { number: 156, name: "TBS East", category: "National Channels", playback: true, id: "national-156" },
    { number: 160, name: "TLC East", category: "National Channels", playback: true, id: "national-160" },
    { number: 174, name: "USA Network East", category: "National Channels", playback: true, id: "national-174" },
    { number: 279, name: "ABC Miami WPLG", category: "Local Channels", playback: false, id: "local-279" },
    { number: 280, name: "ABC Fresno KFSN", category: "Local Channels", playback: false, id: "local-280" },
    { number: 281, name: "ABC Los Angeles KABC", category: "Local Channels", playback: false, id: "local-281" },
    { number: 282, name: "ABC Boston WCVB", category: "Local Channels", playback: false, id: "local-282" },
    { number: 601, name: "NFL Network", category: "Sports", playback: true, id: "sports-601" },
    { number: 602, name: "NFL Redzone", category: "Sports", playback: false, id: "sports-602" },
    { number: 603, name: "ESPN", category: "Sports", playback: true, id: "sports-603" },
    { number: 604, name: "ESPN2", category: "Sports", playback: true, id: "sports-604" },
    { number: 605, name: "FS1", category: "Sports", playback: true, id: "sports-605" },
    { number: 606, name: "FS2", category: "Sports", playback: false, id: "sports-606" },
    { number: 607, name: "CBS Sports Network", category: "Sports", playback: false, id: "sports-607" },
    { number: 608, name: "NBCSN", category: "Sports", playback: false, id: "sports-608" },
    { number: 609, name: "NBA TV", category: "Sports", playback: false, id: "sports-609" },
    { number: 610, name: "MLB Network", category: "Sports", playback: false, id: "sports-610" },
    { number: 611, name: "NHL Network", category: "Sports", playback: false, id: "sports-611" },
    { number: 612, name: "Golf Channel", category: "Sports", playback: false, id: "sports-612" },
    { number: 613, name: "Tennis Channel", category: "Sports", playback: false, id: "sports-613" },
    { number: 614, name: "ESPN U", category: "Sports", playback: false, id: "sports-614" },
    { number: 615, name: "ESPNEWS", category: "Sports", playback: true, id: "sports-615" },
    { number: 616, name: "Big Ten Network", category: "Sports", playback: false, id: "sports-616" },
    { number: 617, name: "SEC Network", category: "Sports", playback: false, id: "sports-617" },
    { number: 618, name: "ACC Network", category: "Sports", playback: false, id: "sports-618" },
    { number: 619, name: "PAC-12 Network", category: "Sports", playback: false, id: "sports-619" }
];

// Load full channel data from external JSON if available
async function loadFullChannelData() {
    try {
        const response = await fetch('./data/channels.json');
        if (response.ok) {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.warn('Full channel data not available, using sample data');
    }
    return CHANNELS_DATA;
}

// ================================
// Application State
// ================================

const AppState = {
    channels: [],
    filteredChannels: [],
    paginatedChannels: [],
    searchQuery: '',
    selectedCategory: 'all',
    favorites: new Set(),
    darkMode: false,
    currentPage: 1,
    itemsPerPage: 10,
    totalPages: 1
};

// ================================
// Category Filter Configuration
// ================================

const CATEGORY_FILTERS = [
    { id: 'all', label: 'All Channels', color: 'bg-blue', icon: '📺' },
    { id: 'playback', label: '7-Day Playback', color: 'bg-emerald', icon: '⏰' },
    { id: 'network', label: 'Network TV', color: 'bg-purple', icon: '🖥️' },
    { id: 'regional', label: 'Regional Locals', color: 'bg-orange', icon: '📍' },
    { id: 'sports', label: 'Sports Networks', color: 'bg-red', icon: '🏆' },
    { id: 'ppv', label: 'PPV Events', color: 'bg-yellow', icon: '💵' },
    { id: 'nba', label: 'NBA', color: 'bg-indigo', icon: '🏀' },
    { id: 'mlb', label: 'MLB', color: 'bg-pink', icon: '⚾' },
    { id: 'favorites', label: 'Favorites', color: 'bg-rose', icon: '❤️' }
];

// ================================
// FAQ Data
// ================================

const FAQ_DATA = [
    {
        id: 1,
        question: 'What channels are available on vSeeBox?',
        answer: 'vSeeBox supports over 2,000 live channels, including major sports, news, movies, regional locals, and international options. Use the search tool above or browse our full vSeeBox channels list 2025 for details. New channels are added periodically to keep your experience fresh.'
    },
    {
        id: 2,
        question: 'Does vSeeBox include 7-day playback?',
        answer: 'Yes, vSeeBox apps support up to 7-day playback on over 50 live channels, letting you rewatch recently aired programs without recording. Playback channels are listed in the Heat Live app section of our channel guide.'
    },
    {
        id: 3,
        question: 'Does vSeeBox have live sports?',
        answer: 'Yes — vSeeBox provides access to all major live sports, including NFL, NBA, MLB, NHL, UFC, Boxing, and Pay-Per-View events. Sports channels stream 24/7 through apps like Heat Live, covering both local and international leagues.'
    },
    {
        id: 4,
        question: 'Do I need a subscription to use vSeeBox?',
        answer: 'No, vSeeBox is a one-time purchase with no monthly or hidden fees. Once activated, access all pre-installed apps like Heat Live for free, including the complete vSeeBox channel lineup.'
    },
    {
        id: 5,
        question: 'Does any internet work with vSeeBox?',
        answer: 'Yes, vSeeBox works with any stable internet connection — Wi-Fi, Ethernet, or hotspot. For smooth HD streaming, we recommend at least 15 Mbps, and 25 Mbps+ for 4K quality.'
    },
    {
        id: 6,
        question: 'Can I use vSeeBox outside of the United States?',
        answer: 'Yes, vSeeBox works worldwide with a stable connection, including access to international channels. Channel availability may vary slightly by region.'
    },
    {
        id: 7,
        question: 'Where can I buy an official vSeeBox?',
        answer: 'Purchase from official sellers such as vSeeTV.shop for verified devices, updates, and support. Avoid unauthorized resellers to ensure authenticity and performance.'
    },
    {
        id: 8,
        question: 'How often is the vSeeBox channels list updated?',
        answer: 'Updates occur monthly in 2025 as new channels become available. Check the official vSeeBox channels list for the latest additions.'
    },
    {
        id: 9,
        question: 'What internet speed do I need for vSeeBox?',
        answer: 'A minimum of 15 Mbps is recommended for HD streaming and 25 Mbps or higher for 4K. Ethernet connections offer the best performance.'
    },
    {
        id: 10,
        question: 'Can I record on the vSeeBox?',
        answer: 'Recording isn\'t currently supported on Heat Live, but 50+ playback channels let you rewatch content up to seven days after it airs — serving as a modern DVR replacement.'
    }
];

// ================================
// Utility Functions
// ================================

function getCategoryTitle(category) {
    const titles = {
        all: 'All Channels',
        playback: '7-Day Playback Channels',
        network: 'Network TV',
        regional: 'Regional Locals',
        sports: 'Sports Networks',
        ppv: 'PPV Events',
        nba: 'NBA',
        mlb: 'MLB',
        favorites: 'Favorite Channels'
    };
    return titles[category] || 'All Channels';
}

function getCategoryCount(categoryId) {
    if (categoryId === 'all') return AppState.channels.length;
    if (categoryId === 'favorites') return AppState.favorites.size;
    if (categoryId === 'playback') return AppState.channels.filter(ch => ch.playback).length;
    if (categoryId === 'network') return AppState.channels.filter(ch => ch.category === 'National Channels').length;
    if (categoryId === 'regional') return AppState.channels.filter(ch => ch.category === 'Local Channels').length;
    if (categoryId === 'sports') return AppState.channels.filter(ch => ch.category === 'Sports').length;
    if (categoryId === 'nba') return AppState.channels.filter(ch => ch.category === 'Sports' && ch.name.toLowerCase().includes('nba')).length;
    if (categoryId === 'mlb') return AppState.channels.filter(ch => ch.category === 'Sports' && ch.name.toLowerCase().includes('mlb')).length;
    if (categoryId === 'ppv') return AppState.channels.filter(ch => ch.name.toLowerCase().includes('ppv') || ch.name.toLowerCase().includes('pay-per-view')).length;
    return 0;
}

function highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// ================================
// Local Storage Functions
// ================================

function loadFromLocalStorage() {
    try {
        const savedFavorites = localStorage.getItem('vseeboxFavorites');
        if (savedFavorites) {
            AppState.favorites = new Set(JSON.parse(savedFavorites));
        }
        
        const savedDarkMode = localStorage.getItem('vseeboxDarkMode');
        if (savedDarkMode !== null) {
            AppState.darkMode = savedDarkMode === 'true';
            if (AppState.darkMode) {
                document.body.classList.add('dark-mode');
            }
        }
    } catch (error) {
        console.error('Error loading from localStorage:', error);
    }
}

function saveFavoritesToLocalStorage() {
    try {
        localStorage.setItem('vseeboxFavorites', JSON.stringify([...AppState.favorites]));
    } catch (error) {
        console.error('Error saving favorites:', error);
    }
}

function saveDarkModeToLocalStorage() {
    try {
        localStorage.setItem('vseeboxDarkMode', AppState.darkMode.toString());
    } catch (error) {
        console.error('Error saving dark mode:', error);
    }
}

// ================================
// Filtering Functions
// ================================

function filterChannels() {
    let filtered = [...AppState.channels];
    
    // Apply search filter
    if (AppState.searchQuery) {
        const query = AppState.searchQuery.toLowerCase();
        filtered = filtered.filter(channel =>
            channel.name.toLowerCase().includes(query) ||
            channel.number.toString().includes(query)
        );
    }
    
    // Apply category filter
    if (AppState.selectedCategory === 'favorites') {
        filtered = filtered.filter(channel => AppState.favorites.has(channel.id));
    } else if (AppState.selectedCategory === 'playback') {
        filtered = filtered.filter(channel => channel.playback);
    } else if (AppState.selectedCategory === 'network') {
        filtered = filtered.filter(channel => channel.category === 'National Channels');
    } else if (AppState.selectedCategory === 'regional') {
        filtered = filtered.filter(channel => channel.category === 'Local Channels');
    } else if (AppState.selectedCategory === 'sports') {
        filtered = filtered.filter(channel => channel.category === 'Sports');
    } else if (AppState.selectedCategory === 'nba') {
        filtered = filtered.filter(channel => 
            channel.category === 'Sports' && channel.name.toLowerCase().includes('nba')
        );
    } else if (AppState.selectedCategory === 'mlb') {
        filtered = filtered.filter(channel => 
            channel.category === 'Sports' && channel.name.toLowerCase().includes('mlb')
        );
    } else if (AppState.selectedCategory === 'ppv') {
        filtered = filtered.filter(channel =>
            channel.name.toLowerCase().includes('ppv') || 
            channel.name.toLowerCase().includes('pay-per-view')
        );
    }
    
    AppState.filteredChannels = filtered;
    AppState.totalPages = Math.ceil(filtered.length / AppState.itemsPerPage);
    
    // Reset to page 1 if current page exceeds total pages
    if (AppState.currentPage > AppState.totalPages && AppState.totalPages > 0) {
        AppState.currentPage = 1;
    }
    
    paginateChannels();
}

function paginateChannels() {
    const startIndex = (AppState.currentPage - 1) * AppState.itemsPerPage;
    const endIndex = startIndex + AppState.itemsPerPage;
    AppState.paginatedChannels = AppState.filteredChannels.slice(startIndex, endIndex);
}

// ================================
// Render Functions
// ================================

function renderCategoryFilters() {
    const container = document.getElementById('categoryFilters');
    container.innerHTML = '';
    
    CATEGORY_FILTERS.forEach(filter => {
        const count = getCategoryCount(filter.id);
        const isActive = AppState.selectedCategory === filter.id;
        
        const button = document.createElement('button');
        button.className = `category-filter ${isActive ? 'active' : filter.color}`;
        button.innerHTML = `
            <span>${filter.icon}</span>
            <span>${filter.label}</span>
            <span class="category-count">${count}</span>
        `;
        button.onclick = () => handleCategoryChange(filter.id);
        
        container.appendChild(button);
    });
}

function renderChannelGrid() {
    const container = document.getElementById('channelGrid');
    
    if (AppState.paginatedChannels.length === 0) {
        container.innerHTML = '<div class="no-results">No channels found matching your criteria.</div>';
        return;
    }
    
    container.innerHTML = AppState.paginatedChannels.map(channel => {
        const isFavorite = AppState.favorites.has(channel.id);
        const highlightedName = highlightText(channel.name, AppState.searchQuery);
        
        return `
            <div class="channel-card">
                <div class="channel-number">${channel.number}</div>
                <div class="channel-info">
                    <h3 class="channel-name">${highlightedName}</h3>
                    <p class="channel-meta">${channel.category} • Channel ${channel.number}</p>
                </div>
                <div class="channel-actions">
                    <button 
                        class="favorite-button ${isFavorite ? 'favorited' : ''}" 
                        onclick="toggleFavorite('${channel.id}')"
                        aria-label="Toggle favorite"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function renderPaginationControls() {
    const paginationHTML = `
        <div class="pagination-left">
            <span>Show:</span>
            <select class="pagination-select" id="itemsPerPageSelect">
                <option value="10" ${AppState.itemsPerPage === 10 ? 'selected' : ''}>10</option>
                <option value="25" ${AppState.itemsPerPage === 25 ? 'selected' : ''}>25</option>
                <option value="50" ${AppState.itemsPerPage === 50 ? 'selected' : ''}>50</option>
            </select>
            <span>per page</span>
        </div>
        <div class="pagination-right">
            <button 
                class="pagination-button" 
                onclick="handlePageChange(${Math.max(1, AppState.currentPage - 1)})"
                ${AppState.currentPage === 1 ? 'disabled' : ''}
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <span class="pagination-info">Page ${AppState.currentPage} of ${AppState.totalPages || 1}</span>
            <button 
                class="pagination-button" 
                onclick="handlePageChange(${Math.min(AppState.totalPages || 1, AppState.currentPage + 1)})"
                ${AppState.currentPage >= AppState.totalPages ? 'disabled' : ''}
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
        </div>
    `;
    
    document.getElementById('paginationTop').innerHTML = paginationHTML;
    
    if (AppState.totalPages > 1) {
        document.getElementById('paginationBottom').innerHTML = paginationHTML;
        document.getElementById('paginationBottom').classList.remove('hidden');
    } else {
        document.getElementById('paginationBottom').classList.add('hidden');
    }
    
    // Add event listener for items per page
    const selects = document.querySelectorAll('#itemsPerPageSelect');
    selects.forEach(select => {
        select.onchange = (e) => handleItemsPerPageChange(parseInt(e.target.value));
    });
}

function renderPageTitle() {
    const title = document.getElementById('pageTitle');
    const subtitle = document.getElementById('pageSubtitle');
    
    if (AppState.searchQuery) {
        title.textContent = 'All Channels';
        subtitle.textContent = `Searching for "${AppState.searchQuery}" - ${AppState.filteredChannels.length} results`;
    } else {
        title.textContent = getCategoryTitle(AppState.selectedCategory);
        subtitle.textContent = `Browse ${AppState.filteredChannels.length} ${getCategoryTitle(AppState.selectedCategory).toLowerCase()}`;
    }
}

function renderFAQ() {
    const container = document.getElementById('faqAccordion');
    container.innerHTML = FAQ_DATA.map((faq, index) => `
        <div class="faq-item" data-faq-id="${faq.id}">
            <button class="faq-question" onclick="toggleFAQ(${faq.id})">
                <div class="faq-number">${index + 1}</div>
                <span class="faq-question-text">${faq.question}</span>
                <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>
            <div class="faq-answer">
                <div class="faq-answer-content">
                    <p class="faq-answer-text">${faq.answer}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function render() {
    renderCategoryFilters();
    renderChannelGrid();
    renderPaginationControls();
    renderPageTitle();
}

// ================================
// Event Handlers
// ================================

function handleSearchChange(query) {
    AppState.searchQuery = query;
    AppState.currentPage = 1;
    filterChannels();
    render();
}

function handleCategoryChange(category) {
    AppState.selectedCategory = category;
    AppState.currentPage = 1;
    filterChannels();
    render();
}

function handlePageChange(page) {
    if (page >= 1 && page <= AppState.totalPages) {
        AppState.currentPage = page;
        paginateChannels();
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function handleItemsPerPageChange(value) {
    AppState.itemsPerPage = value;
    AppState.currentPage = 1;
    filterChannels();
    render();
}

function toggleFavorite(channelId) {
    if (AppState.favorites.has(channelId)) {
        AppState.favorites.delete(channelId);
    } else {
        AppState.favorites.add(channelId);
    }
    
    saveFavoritesToLocalStorage();
    
    // Re-render if we're on the favorites view
    if (AppState.selectedCategory === 'favorites') {
        filterChannels();
    }
    
    render();
}

function toggleDarkMode() {
    AppState.darkMode = !AppState.darkMode;
    document.body.classList.toggle('dark-mode');
    saveDarkModeToLocalStorage();
}

function toggleFAQ(faqId) {
    const faqItem = document.querySelector(`[data-faq-id="${faqId}"]`);
    const wasActive = faqItem.classList.contains('active');
    
    // Close all FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked FAQ if it wasn't active
    if (!wasActive) {
        faqItem.classList.add('active');
    }
}

function handleBackToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleDownload() {
    window.open('https://docs.google.com/spreadsheets/d/1J16LxliPjec1Vy5n8NjghqC0qPF-53ej1f0WaKMbLNI/edit?usp=sharing', '_blank');
}

// ================================
// Event Listeners
// ================================

function setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        handleSearchChange(e.target.value);
    });
    
    // Keyboard shortcut (Cmd/Ctrl + K)
    document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
    });
    
    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', toggleDarkMode);
    
    // Download button
    const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.addEventListener('click', handleDownload);
    
    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    backToTopBtn.addEventListener('click', handleBackToTop);
}

// ================================
// Initialization
// ================================

async function init() {
    // Load data
    loadFromLocalStorage();
    
    // Load channels (try to load full data, fallback to sample)
    AppState.channels = await loadFullChannelData();
    
    // Initial filtering and rendering
    filterChannels();
    render();
    renderFAQ();
    
    // Setup event listeners
    setupEventListeners();
    
    console.log('vSeeBox Channels App Initialized');
    console.log(`Total Channels: ${AppState.channels.length}`);
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
