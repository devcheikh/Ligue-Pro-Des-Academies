/**
 * LIGUE PRO DES ACADÉMIES — i18n (FR/EN)
 * Lightweight internationalization system.
 * Default language: French (text stays in HTML).
 * English translations applied dynamically via data-i18n attributes.
 */

const I18N_LANG_KEY = 'lpa_language';

const translations = {
    en: {
        // ===== NAVBAR =====
        'nav.home': 'Home',
        'nav.stadiums': 'Stadiums',
        'nav.news': 'News',
        'nav.members': 'Members',

        // ===== INDEX — HERO =====
        'hero.label': 'Official Platform',
        'hero.desc': 'Accelerate your rise to the top. The Ligue Pro Des Académies goes beyond a simple platform to become the <strong>ultimate elite catalyst</strong>. We propel future football stars onto an international stage where every match and every statistic shapes an <strong>unprecedented professional visibility</strong>.',
        'hero.btn.u17': '<i class="bx bx-trophy"></i> U17 Championship',
        'hero.btn.u19': '<i class="bx bx-football"></i> U19 Championship',
        'hero.badge1': 'Live Now',
        'hero.badge2': 'Season 2026/2027',

        // ===== INDEX — MATCHES SECTION =====
        'matches.label': 'Schedule',
        'matches.title.1': 'Upcoming ',
        'matches.title.2': 'Matches',
        'matches.seeall': 'See full schedule',

        // ===== INDEX — CHAMPIONSHIPS =====
        'champ.label': 'Our Competitions',
        'champ.title.1': 'Official ',
        'champ.title.2': 'Championships',
        'champ.u17.cat': 'Elite Championship',
        'champ.u17.title': 'U17 Championship',
        'champ.u17.desc': '2 groups of 8 teams • Playoff phase • The best U17 talents in competition.',
        'champ.u19.cat': 'Championship',
        'champ.u19.title': 'U19 Championship',
        'champ.u19.desc': '1 single group • Playoffs • The U19 elite.',
        'champ.team.cat': 'Organization',
        'champ.team.title': 'Our Team',
        'champ.team.desc': 'Discover the members who bring the league to life.',

        // ===== INDEX — ABOUT =====
        'about.label': 'About',
        'about.title.1': 'The ',
        'about.title.2': 'Elite Showcase',
        'about.p1': 'The <strong>Ligue Pro Des Académies</strong> stands as the epicenter of excellence and the ultimate reference for tomorrow\'s football. More than a platform, we are the digital bridge between raw talent and the professional world.',
        'about.p2': 'We transform traditional competitions into <strong>world-class showcases</strong>. By combining precision technology, detailed statistics, and a striking online presence, we offer every prospect the opportunity to shine under the elite spotlight.',
        'about.stat.comps': 'Competitions',
        'about.stat.teams': 'Teams',
        'about.stat.matches': 'Scheduled Matches',
        'about.stat.cats': 'Categories',

        // ===== INDEX — COMMUNITY =====
        'community.label': 'Elite Standings',
        'community.title.1': 'Championship ',
        'community.title.2': 'Leaders',
        'community.visitors': 'Unique Visitors',
        'community.visits': 'Total Visits',
        'community.messages': 'Messages Sent',
        'community.comments': 'Comments Posted',
        'community.toppage': 'Most visited page: ',
        'community.leader.u17a': 'Leader U17 - Group A',
        'community.leader.u17b': 'Leader U17 - Group B',
        'community.leader.u19': 'Leader U19',
        'community.stats.title': 'Platform Stats',
        'community.points': 'pts',
        'community.mj': 'MP',
        'community.v': 'W',
        'community.n': 'D',
        'community.d': 'L',
        'community.diff': 'GD',

        // ===== INDEX — GANI CUP ALERT =====
        'alert.cup.label': 'Official Launch',
        'alert.cup.title': 'GANI CUP',
        'alert.cup.desc': 'The elite tournament bringing together the 8 best academies for an unprecedented cup.',

        // ===== INDEX — GALLERY & PARTNERS =====
        'gallery.label': 'Gallery',
        'gallery.title.1': 'Our Best ',
        'gallery.title.2': 'Moments',
        'partners.label': 'Trust',
        'partners.title.1': 'Our ',
        'partners.title.2': 'Partners',

        // ===== INDEX — CTA =====
        'cta.title': 'Follow us on social media!',
        'cta.desc': 'Stay informed about results, standings and news from all our championships by following us on social media.',

        // ===== FOOTER =====
        'footer.brand': 'The Ligue Pro Des Académies: your partner for professional visibility of your football competitions.',
        'footer.champ': 'Championships',
        'footer.org': 'Organization',
        'footer.org.members': 'Our Members',
        'footer.org.news': 'News',
        'footer.org.contact': 'Contact',
        'footer.social': 'Social Media',
        'footer.copy': '© 2026 Ligue Pro Des Académies. All rights reserved.',
        'footer.dev': 'Developed with Mbodja fara <i class="bx bx-heart" style="color: #E53935;"></i> in Senegal',

        // ===== U17 PAGE =====
        'u17.hero.label': 'Elite Championship',
        'u17.hero.desc': 'The future is shaped here. Experience the intensity of an elite championship where the <strong>8 best academies</strong> per group compete for the top. Discover the talents who will soon dominate world football.',
        'u17.btn.pouleA': '<i class="bx bx-group"></i> Group A',
        'u17.btn.pouleB': '<i class="bx bx-group"></i> Group B',
        'u17.season': 'Season 2026',
        'u17.pouleA': 'Group A',
        'u17.pouleB': 'Group B',
        'u17.classA.label': 'Standings',
        'u17.classA.title.1': 'Group ',
        'u17.classA.title.2': 'A',
        'u17.classA.title.prefix': 'Standings Group ',
        'u17.classB.label': 'Standings',
        'u17.classB.title.1': 'Group ',
        'u17.classB.title.2': 'B',
        'u17.classB.title.prefix': 'Standings Group ',
        'u17.calendar.label': 'Upcoming Matches',
        'u17.calendar.title.1': 'U17 ',
        'u17.calendar.title.2': 'Schedule',
        'u17.legend.semi': 'Semi-finals',
        'u17.legend.quarter': 'Quarter-finals',

        // ===== U19 PAGE =====
        'u19.hero.label': 'Academic Elite',
        'u19.hero.desc': 'The gateway to professionalism. A clash of titans between the <strong>most prestigious academies</strong>. Dive into the heart of the action where prospects become legends.',
        'u19.btn.classement': '<i class="bx bx-list-ol"></i> Standings',
        'u19.class.label': 'Dynamic Standings',
        'u19.class.title.1': 'Single ',
        'u19.class.title.2': 'Group',
        'u19.classtable.label': 'Official Standings',
        'u19.classtable.title.1': 'U19 ',
        'u19.classtable.title.2': 'Standings',
        'u19.calendar.label': 'Schedule',
        'u19.calendar.title.1': 'U19 ',
        'u19.calendar.title.2': 'Matches',

        // ===== STANDINGS TABLE HEADERS =====
        'table.team': 'Team',
        'table.pts': 'Pts',

        // ===== BLOG PAGE =====
        'blog.title.1': 'News ',
        'blog.title.2': '& Updates',
        'blog.desc': 'Stay up to date with all things Ligue Pro Des Académies in real time.',
        'blog.loading': '<i class="bx bx-loader-alt bx-spin"></i> Loading news...',
        'blog.empty': 'No news at the moment.',
        'blog.readmore': 'Read more',
        'blog.readless': 'Read less',

        // ===== STADES PAGE =====
        'stades.title.1': 'Stadiums & ',
        'stades.title.2': 'Bookings',
        'stades.desc': 'Book training or match slots at our partner stadiums.',
        'stades.empty': 'No partner stadiums at the moment.',
        'stades.slots': 'Available Slots',
        'stades.contact': 'Contact to Book',
        'stades.noslots': 'No slots currently available.',
        'stades.manager': 'Stadium Manager:',
        'stades.notset': 'Not specified',

        // ===== MEMBRES PAGE =====
        'membres.badge': 'Our Team',
        'membres.title.1': 'The ',
        'membres.title.2': 'Members',
        'membres.desc': 'The team that brings the Ligue Pro Des Académies to life',
        'membres.direction.label': 'Leadership',
        'membres.direction.title.1': 'Executive ',
        'membres.direction.title.2': 'Board',
        'membres.president': 'President',
        'membres.vp': 'Vice-President',
        'membres.sg': 'Secretary General',
        'membres.tresorier': 'Treasurer',
        'membres.tech.label': 'Technical',
        'membres.tech.title.1': 'Technical ',
        'membres.tech.title.2': 'Commission',
        'membres.dt': 'Technical Director',
        'membres.arbitrage': 'Referee Manager',
        'membres.stats': 'Statistician',
        'membres.comm.label': 'Communication',
        'membres.comm.title.1': 'Media ',
        'membres.comm.title.2': 'Team',
        'membres.cm': 'Community Manager',
        'membres.video': 'Videographer',
        'membres.redac': 'Writer',
        'membres.contact.title.1': 'Contact ',
        'membres.contact.title.2': 'Us',
        'membres.contact.desc': 'For any information or partnership request',
        'membres.footer.brand': 'The elite showcase of academy football.',
        'membres.footer.nav': 'Navigation',

        // ===== SHARED =====
        'no.match': 'No matches scheduled at the moment.',
        'scroll': 'Scroll',
        'vs': 'VS'
    }
};

// Store original FR text for reverting
let originalTexts = {};

function getCurrentLang() {
    return localStorage.getItem(I18N_LANG_KEY) || 'fr';
}

function setLanguage(lang) {
    localStorage.setItem(I18N_LANG_KEY, lang);
    applyLanguage(lang);
    updateToggleUI(lang);
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

function toggleLanguage() {
    const current = getCurrentLang();
    setLanguage(current === 'fr' ? 'en' : 'fr');
}

function applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');

        // Save original FR text on first run
        if (!originalTexts[key + '_' + el.id + '_' + Array.from(el.parentNode?.children || []).indexOf(el)]) {
            const uid = key + '_' + el.id + '_' + Array.from(el.parentNode?.children || []).indexOf(el);
            originalTexts[uid] = el.innerHTML;
        }

        if (lang === 'en' && translations.en[key]) {
            el.innerHTML = translations.en[key];
        } else if (lang === 'fr') {
            const uid = key + '_' + el.id + '_' + Array.from(el.parentNode?.children || []).indexOf(el);
            if (originalTexts[uid]) {
                el.innerHTML = originalTexts[uid];
            }
        }
    });

    // Update html lang attribute
    document.documentElement.lang = lang === 'en' ? 'en' : 'fr';
}

function updateToggleUI(lang) {
    const toggleBtn = document.getElementById('lang-toggle-btn');
    if (toggleBtn) {
        toggleBtn.innerHTML = lang === 'fr'
            ? '<span class="lang-flag">🇬🇧</span> EN'
            : '<span class="lang-flag">🇫🇷</span> FR';
        toggleBtn.title = lang === 'fr' ? 'Switch to English' : 'Passer en Français';
    }
}

// Inject the toggle button into the navbar
function injectLangToggle() {
    const nav = document.getElementById('navbar');
    if (!nav) return;

    // Don't inject on admin page
    if (document.body.classList.contains('admin_dashboard')) return;

    // Check if already injected
    if (document.getElementById('lang-toggle-btn')) return;

    const btn = document.createElement('button');
    btn.id = 'lang-toggle-btn';
    btn.className = 'lang-switch-btn';
    btn.onclick = toggleLanguage;

    const currentLang = getCurrentLang();
    btn.innerHTML = currentLang === 'fr'
        ? '<span class="lang-flag">🇬🇧</span> EN'
        : '<span class="lang-flag">🇫🇷</span> FR';
    btn.title = currentLang === 'fr' ? 'Switch to English' : 'Passer en Français';

    // Insert before the menu toggle (hamburger)
    const menuToggle = nav.querySelector('.menu_toggle');
    if (menuToggle) {
        nav.insertBefore(btn, menuToggle);
    } else {
        nav.appendChild(btn);
    }
}

// Auto-initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    injectLangToggle();
    const lang = getCurrentLang();
    if (lang !== 'fr') {
        applyLanguage(lang);
    }
    updateToggleUI(lang);
});
