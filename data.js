/**
 * LIGUE PRO DES ACADÉMIES - DATA MANAGEMENT (VERSION DYNAMIQUE)
 */

const LIGUE_DATA_KEY = 'ligue_pro_academies_data';

// Default initial data
const defaultData = {
    categories: [
        { id: 'u17-a', name: "U17 Poule A", type: "poule" },
        { id: 'u17-b', name: "U17 Poule B", type: "poule" },
        { id: 'u19', name: "U19", type: "unique" }
    ],
    teams: [
        // U17 Poule A (8 teams)
        { id: 1, name: "Diambars A", categoryId: "u17-a", logo: "images/logo_ligue.png", points: 0, v: 0, n: 0, d: 0, bp: 0, bc: 0, diff: 0 },
        { id: 2, name: "Génération Foot A", categoryId: "u17-a", logo: "images/logo_ligue.png", points: 0, v: 0, n: 0, d: 0, bp: 0, bc: 0, diff: 0 },
        { id: 3, name: "Dakar Sacré-Cœur A", categoryId: "u17-a", logo: "images/logo_ligue.png", points: 0, v: 0, n: 0, d: 0, bp: 0, bc: 0, diff: 0 },
        { id: 4, name: "Jaraaf A", categoryId: "u17-a", logo: "images/logo_ligue.png", points: 0, v: 0, n: 0, d: 0, bp: 0, bc: 0, diff: 0 },
        { id: 5, name: "AS Pikine A", categoryId: "u17-a", logo: "images/logo_ligue.png", points: 0, v: 0, n: 0, d: 0, bp: 0, bc: 0, diff: 0 },
        { id: 6, name: "Casa Sports A", categoryId: "u17-a", logo: "images/logo_ligue.png", points: 0, v: 0, n: 0, d: 0, bp: 0, bc: 0, diff: 0 },
        { id: 7, name: "Teungueth FC A", categoryId: "u17-a", logo: "images/logo_ligue.png", points: 0, v: 0, n: 0, d: 0, bp: 0, bc: 0, diff: 0 },
        { id: 8, name: "US Gorée A", categoryId: "u17-a", logo: "images/logo_ligue.png", points: 0, v: 0, n: 0, d: 0, bp: 0, bc: 0, diff: 0 },

        // U17 Poule B (8 teams)
        { id: 9, name: "Diambars B", categoryId: "u17-b", logo: "images/logo_ligue.png", points: 0, v: 0, n: 0, d: 0, bp: 0, bc: 0, diff: 0 },
        { id: 10, name: "Génération Foot B", categoryId: "u17-b", logo: "images/logo_ligue.png", points: 0, v: 0, n: 0, d: 0, bp: 0, bc: 0, diff: 0 },
        { id: 11, name: "Dakar Sacré-Cœur B", categoryId: "u17-b", logo: "images/logo_ligue.png", points: 0, v: 0, n: 0, d: 0, bp: 0, bc: 0, diff: 0 },
        { id: 12, name: "Jaraaf B", categoryId: "u17-b", logo: "images/logo_ligue.png", points: 0, v: 0, n: 0, d: 0, bp: 0, bc: 0, diff: 0 },
        { id: 13, name: "AS Pikine B", categoryId: "u17-b", logo: "images/logo_ligue.png", points: 0, v: 0, n: 0, d: 0, bp: 0, bc: 0, diff: 0 },
        { id: 14, name: "Casa Sports B", categoryId: "u17-b", logo: "images/logo_ligue.png", points: 0, v: 0, n: 0, d: 0, bp: 0, bc: 0, diff: 0 },
        { id: 15, name: "Teungueth FC B", categoryId: "u17-b", logo: "images/logo_ligue.png", points: 0, v: 0, n: 0, d: 0, bp: 0, bc: 0, diff: 0 },
        { id: 16, name: "US Gorée B", categoryId: "u17-b", logo: "images/logo_ligue.png", points: 0, v: 0, n: 0, d: 0, bp: 0, bc: 0, diff: 0 },

        // U19 (8 teams)
        { id: 17, name: "Diambars U19", categoryId: "u19", logo: "images/logo_ligue.png", points: 0, v: 0, n: 0, d: 0, bp: 0, bc: 0, diff: 0 },
        { id: 18, name: "Génération Foot U19", categoryId: "u19", logo: "images/logo_ligue.png", points: 0, v: 0, n: 0, d: 0, bp: 0, bc: 0, diff: 0 },
        { id: 19, name: "Dakar Sacré-Cœur U19", categoryId: "u19", logo: "images/logo_ligue.png", points: 0, v: 0, n: 0, d: 0, bp: 0, bc: 0, diff: 0 },
        { id: 20, name: "Jaraaf U19", categoryId: "u19", logo: "images/logo_ligue.png", points: 0, v: 0, n: 0, d: 0, bp: 0, bc: 0, diff: 0 },
        { id: 21, name: "AS Pikine U19", categoryId: "u19", logo: "images/logo_ligue.png", points: 0, v: 0, n: 0, d: 0, bp: 0, bc: 0, diff: 0 },
        { id: 22, name: "Casa Sports U19", categoryId: "u19", logo: "images/logo_ligue.png", points: 0, v: 0, n: 0, d: 0, bp: 0, bc: 0, diff: 0 },
        { id: 23, name: "Teungueth FC U19", categoryId: "u19", logo: "images/logo_ligue.png", points: 0, v: 0, n: 0, d: 0, bp: 0, bc: 0, diff: 0 },
        { id: 24, name: "US Gorée U19", categoryId: "u19", logo: "images/logo_ligue.png", points: 0, v: 0, n: 0, d: 0, bp: 0, bc: 0, diff: 0 }
    ],
    matches: []
};

function initData() {
    const storedData = localStorage.getItem(LIGUE_DATA_KEY);
    if (!storedData) {
        localStorage.setItem(LIGUE_DATA_KEY, JSON.stringify(defaultData));
    }
}

function getData() {
    return JSON.parse(localStorage.getItem(LIGUE_DATA_KEY)) || defaultData;
}

function saveData(data) {
    localStorage.setItem(LIGUE_DATA_KEY, JSON.stringify(data));
}

// Categories Management
function addCategory(name, type) {
    const data = getData();
    // Unique ID generation
    const baseId = name.toLowerCase().trim().replace(/\s+/g, '-');
    let id = baseId;
    let counter = 1;
    while (data.categories.find(c => c.id === id)) {
        id = `${baseId}-${counter}`;
        counter++;
    }

    data.categories.push({ id, name, type });
    saveData(data);
    return id;
}

function updateCategory(id, updates) {
    const data = getData();
    const index = data.categories.findIndex(c => c.id === id);
    if (index !== -1) {
        data.categories[index] = { ...data.categories[index], ...updates };
        saveData(data);
        return true;
    }
    return false;
}

function deleteCategory(id) {
    const data = getData();
    data.categories = data.categories.filter(c => c.id !== id);
    // Also remove teams from this category or delete them? For now, just unbind?
    // Let's delete teams and matches associated with it to be clean.
    data.teams = data.teams.filter(t => t.categoryId !== id);
    data.matches = data.matches.filter(m => m.categoryId !== id);
    saveData(data);
}

// Teams Management
function addTeam(name, categoryId, logo = 'images/logo_ligue.png') {
    const data = getData();
    const newTeam = {
        id: Date.now(),
        name,
        categoryId,
        logo,
        points: 0, v: 0, n: 0, d: 0, bp: 0, bc: 0, diff: 0
    };
    data.teams.push(newTeam);
    saveData(data);
    return newTeam;
}

function updateTeam(teamId, updates) {
    const data = getData();
    const index = data.teams.findIndex(t => t.id === parseInt(teamId));
    if (index !== -1) {
        const oldName = data.teams[index].name;
        const newName = updates.name;

        // Propagate name change to matches if the name actually changed
        if (newName && newName !== oldName) {
            data.matches.forEach(m => {
                const teams = m.teams.split(' vs ');
                if (teams[0] === oldName) teams[0] = newName;
                if (teams[1] === oldName) teams[1] = newName;
                m.teams = teams.join(' vs ');
            });
        }

        data.teams[index] = { ...data.teams[index], ...updates };
        saveData(data);

        // Always recalculate standings after a team update (could be category change or name change)
        recalculateStandings();
        return true;
    }
    return false;
}

function deleteTeam(id) {
    const data = getData();
    data.teams = data.teams.filter(t => t.id !== parseInt(id));
    saveData(data);
}

// Matches Management
function addMatch(match) {
    const data = getData();
    match.id = Date.now();
    match.score1 = match.score1 !== undefined ? match.score1 : 0;
    match.score2 = match.score2 !== undefined ? match.score2 : 0;
    match.status = match.status || 'upcoming'; // 'upcoming' or 'played'
    data.matches.push(match);
    saveData(data);
    return match;
}

function updateMatch(matchId, updates) {
    const data = getData();
    const index = data.matches.findIndex(m => m.id === parseInt(matchId));
    if (index !== -1) {
        data.matches[index] = { ...data.matches[index], ...updates };
        saveData(data);
        if (updates.status === 'played' || updates.score1 !== undefined || updates.score2 !== undefined) {
            recalculateStandings();
        }
        return true;
    }
    return false;
}

function deleteMatch(matchId) {
    const data = getData();
    data.matches = data.matches.filter(m => m.id !== parseInt(matchId));
    saveData(data);
    recalculateStandings();
}

function recalculateStandings() {
    const data = getData();

    // 1. Reset all team stats
    data.teams.forEach(t => {
        t.points = 0;
        t.v = 0;
        t.n = 0;
        t.d = 0;
        t.bp = 0;
        t.bc = 0;
        t.diff = 0;
    });

    // 2. Process all played matches
    data.matches.forEach(m => {
        if (m.status === 'played') {
            const teams = m.teams.split(' vs ');
            const t1Name = teams[0];
            const t2Name = teams[1];
            const s1 = parseInt(m.score1) || 0;
            const s2 = parseInt(m.score2) || 0;

            const t1 = data.teams.find(t => t.name === t1Name && t.categoryId === m.categoryId);
            const t2 = data.teams.find(t => t.name === t2Name && t.categoryId === m.categoryId);

            if (t1 && t2) {
                t1.bp += s1;
                t1.bc += s2;
                t2.bp += s2;
                t2.bc += s1;

                if (s1 > s2) {
                    t1.v += 1;
                    t1.points += 3;
                    t2.d += 1;
                } else if (s1 < s2) {
                    t2.v += 1;
                    t2.points += 3;
                    t1.d += 1;
                } else {
                    t1.n += 1;
                    t1.points += 1;
                    t2.n += 1;
                    t2.points += 1;
                }
                t1.diff = t1.bp - t1.bc;
                t2.diff = t2.bp - t2.bc;
            }
        }
    });

    saveData(data);
}

function getUpcomingMatches(limit = 4) {
    const data = getData();
    return data.matches
        .filter(m => m.status === 'upcoming')
        .sort((a, b) => {
            if (!a.date) return 1;
            if (!b.date) return -1;
            return new Date(a.date) - new Date(b.date);
        })
        .slice(0, limit);
}

function getRecentResults(limit = 4) {
    const data = getData();
    return data.matches
        .filter(m => m.status === 'played')
        .sort((a, b) => {
            if (!a.date) return 1;
            if (!b.date) return -1;
            return new Date(b.date) - new Date(a.date); // Most recent results first
        })
        .slice(0, limit);
}

initData();
