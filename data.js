/**
 * LIGUE PRO DES ACADÉMIES - DATA MANAGEMENT (VERSION CLOUD SUPABASE)
 */

const LIGUE_DATA_KEY = 'ligue_pro_academies_data';
const SUPABASE_CONFIG_KEY = 'ligue_supabase_config';

// --- SUPABASE CLIENT INITIALIZATION ---
// Credential fallback for Vercel deployment
const PUBLIC_SUPABASE_URL = "https://auidasirnsigninmrsdu.supabase.co";
const PUBLIC_SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1aWRhc2lybnNpZ25pbm1yc2R1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3ODkyNjUsImV4cCI6MjA4NTM2NTI2NX0.eFdqr5zqn-3ncVBV4YgTzgDnsjKCgwBV7zowtKm51Bw";

let supabaseClient = null;

function initSupabase() {
    console.log("--- Supabase Init Started ---");
    let config = JSON.parse(localStorage.getItem(SUPABASE_CONFIG_KEY));

    const url = (config && config.url) ? config.url.trim() : PUBLIC_SUPABASE_URL;
    const key = (config && config.key) ? config.key.trim() : PUBLIC_SUPABASE_KEY;

    if (url && key) {
        try {
            // Check for the library in various global locations
            const lib = window.supabase || (window.supabaseJS ? window.supabaseJS : null);

            if (lib && lib.createClient) {
                supabaseClient = lib.createClient(url, key);
                console.log("Supabase client created successfully");
                return supabaseClient;
            } else if (typeof lib === 'function') {
                // In some builds, the window.supabase might be the createClient function itself
                supabaseClient = lib(url, key);
                console.log("Supabase client created (lib was function)");
                return supabaseClient;
            } else {
                console.error("Supabase library NOT FOUND or invalid. Global 'supabase' is:", typeof lib, lib);
            }
        } catch (e) {
            console.error("Creation error:", e);
        }
    }
    return null;
}

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

let initPromise = null;

async function initData() {
    if (initPromise) return initPromise;

    initPromise = (async () => {
        initSupabase();

        if (supabaseClient) {
            try {
                const { data, error } = await supabaseClient
                    .from('app_state')
                    .select('config_data')
                    .eq('id', 'global_state')
                    .single();

                if (error) {
                    if (error.code === 'PGRST116') {
                        console.log("Supabase table exists but is empty.");
                    } else {
                        console.warn("Supabase check error (might be missing table):", error);
                    }
                }

                if (data && data.config_data) {
                    localStorage.setItem(LIGUE_DATA_KEY, JSON.stringify(data.config_data));
                    console.log("Data loaded from Supabase");
                    return;
                }
            } catch (e) {
                console.error("Failed to load from Supabase:", e);
            }
        }

        // Fallback to local storage or default
        const storedData = localStorage.getItem(LIGUE_DATA_KEY);
        if (!storedData) {
            localStorage.setItem(LIGUE_DATA_KEY, JSON.stringify(defaultData));
        }
    })();

    return initPromise;
}

function getData() {
    const data = JSON.parse(localStorage.getItem(LIGUE_DATA_KEY)) || defaultData;
    return data;
}

async function saveData(data) {
    localStorage.setItem(LIGUE_DATA_KEY, JSON.stringify(data));

    // Sync to Supabase if configured
    if (supabaseClient) {
        try {
            const { error } = await supabaseClient
                .from('app_state')
                .upsert({ id: 'global_state', config_data: data });

            if (error) {
                console.error("Supabase Sync Error:", error);
                if (error.message.includes("relation \"public.app_state\" does not exist")) {
                    alert("ERREUR : La table 'app_state' n'existe pas sur Supabase. Allez sur Supabase et créez la table avec le script SQL fourni.");
                } else {
                    alert("Erreur de synchronisation Cloud : " + error.message);
                }
                throw error;
            }
            console.log("Data synced to Supabase");
        } catch (e) {
            console.error("Failed to sync to Supabase:", e);
        }
    }
}

// Categories Management
function addCategory(name, type) {
    const data = getData();
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
    match.status = match.status || 'upcoming';
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
    data.teams.forEach(t => {
        t.points = 0; t.v = 0; t.n = 0; t.d = 0; t.bp = 0; t.bc = 0; t.diff = 0;
    });

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
                t1.bp += s1; t1.bc += s2;
                t2.bp += s2; t2.bc += s1;

                if (s1 > s2) {
                    t1.v += 1; t1.points += 3; t2.d += 1;
                } else if (s1 < s2) {
                    t2.v += 1; t2.points += 3; t1.d += 1;
                } else {
                    t1.n += 1; t1.points += 1; t2.n += 1; t2.points += 1;
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
            return new Date(b.date) - new Date(a.date);
        })
        .slice(0, limit);
}

// Initial sync
initData();
