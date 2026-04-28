const canvas = document.getElementById('mainCanvas');
let ctx;
const gameWrapper = document.getElementById('game-wrapper');

// --- DATABASE CONFIGURATION ---
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxxLX5imVOH0Xl0NeWNMKzUsB-YLacOiSUjAu2j7FrGgyLZvGH2ANB3pNzPk_oYYFO1Lg/exec";
let globalScores = [];
let scoresLoaded = false;
let clientIP = "Unknown"; 

// --- SECURITY & FILTERING ---
const BANNED_INITIALS = ["KKK", "SSS", "NIG", "FAG", "ASS", "DIC", "DIK", "PNS", "VAG", "KYS", "FUQ", "FUK", "FUC"];

async function getIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (e) {
        return "Unknown";
    }
}

// --- RETRO AUDIO ENGINE ---
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx;

function initAudio() {
    if (!audioCtx) audioCtx = new AudioContext();
    if (audioCtx.state === 'suspended') audioCtx.resume();
}

function playJumpSound() {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.connect(gainNode); gainNode.connect(audioCtx.destination);
    osc.type = 'square';
    osc.frequency.setValueAtTime(150, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.1);
    gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
}

function playSwingSound() {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.connect(gainNode); gainNode.connect(audioCtx.destination);
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(300, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(50, audioCtx.currentTime + 0.15);
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
    osc.start(); osc.stop(audioCtx.currentTime + 0.15);
}

function playStrikeSound() {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.connect(gainNode); gainNode.connect(audioCtx.destination);
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(400, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(50, audioCtx.currentTime + 0.15);
    gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
    osc.start(); osc.stop(audioCtx.currentTime + 0.15);
}

function playDefeatSound() {
    if (!audioCtx) return;
    const gainNode = audioCtx.createGain();
    gainNode.connect(audioCtx.destination);
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 1.5);

    [300, 400, 500, 600, 800].forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        osc.connect(gainNode);
        osc.type = 'square';
        osc.frequency.value = freq;
        osc.start(audioCtx.currentTime + (i * 0.1));
        osc.stop(audioCtx.currentTime + (i * 0.1) + 0.2);
    });
}

function playBossRoar() {
    if (!audioCtx) return;
    const duration = 0.8;
    const osc = audioCtx.createOscillator();
    const lfo = audioCtx.createOscillator();
    const lfoGain = audioCtx.createGain();
    const mainGain = audioCtx.createGain();
    
    osc.type = 'sawtooth';
    lfo.type = 'square';
    lfo.frequency.value = 40; 
    
    lfo.connect(lfoGain); lfoGain.connect(osc.frequency);
    lfoGain.gain.value = 100; 
    
    osc.frequency.setValueAtTime(200, audioCtx.currentTime); 
    osc.frequency.exponentialRampToValueAtTime(50, audioCtx.currentTime + duration); 
    
    mainGain.gain.setValueAtTime(0.2, audioCtx.currentTime);
    mainGain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
    
    osc.connect(mainGain); mainGain.connect(audioCtx.destination);
    
    osc.start(); lfo.start();
    osc.stop(audioCtx.currentTime + duration); lfo.stop(audioCtx.currentTime + duration);
}

// --- NUCLEAR DETERRENT SIREN ---
let sirenPlaying = false;

function playSiren() {
    if (sirenPlaying) return;
    
    if (!audioCtx) audioCtx = new AudioContext();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    
    sirenPlaying = true;
    
    const osc = audioCtx.createOscillator();
    const lfo = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = 'sawtooth';
    lfo.type = 'square';
    lfo.frequency.value = 5; 
    
    const modGain = audioCtx.createGain();
    modGain.gain.value = 300;
    lfo.connect(modGain);
    modGain.connect(osc.frequency);
    
    osc.frequency.value = 600;
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    gain.gain.value = 0.4;
    
    osc.start();
    lfo.start();
    
    // Siren plays infinitely until the tab is closed
}

function triggerLockdown(ip) {
    // Attempt to play immediately (works if triggered by button click)
    playSiren();
    
    // Fallback: If browser autoplay blocked it (like on a page refresh),
    // trigger the siren the absolute second they try to interact with the page.
    const forceSiren = () => {
        playSiren();
        document.removeEventListener('click', forceSiren);
        document.removeEventListener('keydown', forceSiren);
    };
    document.addEventListener('click', forceSiren);
    document.addEventListener('keydown', forceSiren);
    
    // Completely overwrite the document body with the unmasked IP
    document.body.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 99999; display: flex; flex-direction: column; justify-content: center; align-items: center; animation: flash 0.3s infinite alternate; cursor: crosshair;">
            <h1 style="color: black; font-size: 10vw; font-family: 'Courier New', Courier, monospace; margin: 0; text-shadow: 4px 4px 0px white;">INAPPROPRIATE!!!</h1>
            <p style="color: white; font-size: 3vw; font-family: 'Courier New', Courier, monospace; font-weight: bold; background: black; padding: 20px; border-radius: 10px; margin-top: 30px; text-align: center;">
                IP Address ${ip} has been recorded<br>and flagged for review.
            </p>
        </div>
        <style>
            @keyframes flash {
                0% { background-color: #ff0000; }
                100% { background-color: #ffff00; }
            }
        </style>
    `;
}

// --- GAME SYSTEM STATE ---
let gameState = 'START'; 
let pendingMode = 'ADVENTURE'; 
let activeMode = 'ADVENTURE'; 
let character = '';
let score = 0; let level = 1; let repairs = 5;
let animationId; let frameCount = 0; let levelFrames = 0; 
let isProcessingAnswer = false; 
let triviaStartTime = 0; 

// Input Tracking
const keys = { action: false, left: false, right: false };

// Player & Obstacles
const player = { x: 50, y: 300, width: 36, height: 50, dy: 0, gravity: 0.6, jumpPower: -12.5, grounded: false, power: 600 };
let gears = []; let gearSpeedBase = 5;

// Boss Battle Variables
let playerHP = 5;
let bossHP = 3;
let bossX = 400; let bossSpeed = 4; let bossDirection = 1; let bossHitFlash = 0;
let playerHitFlash = 0;
let caliperAngle = 0; let isSwinging = false; let swingFrame = 0;
let swingTimerFrames = 0; 
let bossAttacked = false;

let currentTriviaSet = [];
let currentQuestionIndex = 0;
let swingsEarned = 0;
let triviaMode = 'BOSS'; 

const bossNames = ["Robo-Rex", "Mecha-Triceratops", "Ptero-Drone", "Stego-Cyborg", "Veloci-Router", "Bronto-Dozer", "Spino-Saw", "Ankylo-Smash"];

// Local Storage for Unlocks ONLY
let unlockedPowers = { 'Mr. V': [], 'Mrs. G': [] };

try {
    let savedUnlocks = JSON.parse(localStorage.getItem('waltonUnlocks'));
    if (savedUnlocks) unlockedPowers = savedUnlocks;
} catch (e) {
    console.warn("Local storage restricted. Unlocks will not persist.");
}

// --- ASYNC DATABASE FUNCTIONS ---
async function fetchGlobalData() {
    try {
        // Fetch IP first to check against the ban list
        clientIP = await getIP();

        let response = await fetch(WEB_APP_URL);
        let data = await response.json();
        
        // 1. Check if the user's IP is on the banned list
        if (data.banned && data.banned.includes(clientIP)) {
            triggerLockdown(clientIP);
            return; // Halt all game loading
        }

        // 2. Load Scores
        globalScores = data.scores || [];
        scoresLoaded = true;
        
        updateLeaderboardUI();
        if (!document.getElementById('level-select-screen').classList.contains('hidden') && pendingMode === 'PRACTICE') {
            navToLevelSelect('PRACTICE'); 
        }
    } catch (error) {
        console.error("Error fetching global data:", error);
    }
}

async function submitHighScore() {
    const initialsInput = document.getElementById('hs-initials');
    let initials = initialsInput.value.toUpperCase().trim();
    const submitBtn = document.querySelector('#highscore-entry button');
    
    // 1. BLOCK NUMBERS
    if (/\d/.test(initials)) {
        alert("Numbers are not allowed in initials. Please use letters only.");
        initialsInput.value = "";
        return;
    }
    
    if (submitBtn) {
        submitBtn.innerText = "VERIFYING...";
        submitBtn.disabled = true;
    }

    // 2. CHECK FOR BANNED WORDS & NUCLEAR LOCKDOWN
    if (BANNED_INITIALS.includes(initials)) {
        const badPayload = {
            name: initials,
            score: score,
            char: character,
            mode: activeMode,
            unit: activeMode === 'ADVENTURE' ? 'N/A' : level,
            ip: clientIP,
            banned: true // Triggers the shadow ban in Apps Script
        };
        fetch(WEB_APP_URL, { method: 'POST', body: JSON.stringify(badPayload) }); 

        triggerLockdown(clientIP);
        return; 
    }
    
    if (initials.length !== 3) {
        alert("Please enter exactly 3 letters.");
        if (submitBtn) {
            submitBtn.innerText = "SUBMIT";
            submitBtn.disabled = false;
        }
        return;
    }
    
    // 3. SUBMIT CLEAN SCORE
    if (submitBtn) submitBtn.innerText = "SAVING...";
    
    const payload = {
        name: initials,
        score: score,
        char: character,
        mode: activeMode,
        unit: activeMode === 'ADVENTURE' ? 'N/A' : level,
        ip: clientIP,
        banned: false
    };
    
    try {
        await fetch(WEB_APP_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain' }, 
            body: JSON.stringify(payload)
        });
    } catch (e) {
        console.error("Error saving score:", e);
    }
    
    if(submitBtn) {
        submitBtn.innerText = "SUBMIT";
        submitBtn.disabled = false;
    }
    
    document.getElementById('highscore-entry').classList.add('hidden');
    document.getElementById('btn-return-menu').classList.remove('hidden');
    
    await fetchGlobalData();
    navToMainMenu();
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    if (typeof pltwBanks === 'undefined') {
        console.error("ERROR: questions.js failed to load.");
    }

    const hsEntry = document.getElementById('highscore-entry');
    if (hsEntry) {
        const warning = document.createElement('p');
        warning.style.color = '#ff5555';
        warning.style.fontSize = '9px';
        warning.style.marginBottom = '8px';
        warning.innerText = "NOTICE: USER IP & WORKSTATION ID LOGGED. INAPPROPRIATE ENTRIES ARE AUTO-REPORTED TO ADMINISTRATION.";
        hsEntry.insertBefore(warning, hsEntry.firstChild);
    }

    if (canvas) {
        ctx = canvas.getContext('2d');
        canvas.addEventListener('mousedown', () => { keys.action = true; handleAction(); });
        canvas.addEventListener('mouseup', () => { keys.action = false; });
        canvas.addEventListener('mouseleave', () => { keys.action = false; });
        
        canvas.addEventListener('touchstart', (e) => { e.preventDefault(); keys.action = true; handleAction(); }, {passive: false});
        canvas.addEventListener('touchend', (e) => { e.preventDefault(); keys.action = false; }, {passive: false});
    }
    
    document.addEventListener('keydown', e => { 
        if (e.code === 'Space') {
            if (!keys.action) handleAction(); 
            keys.action = true; 
        }
        if (e.code === 'ArrowLeft' || e.code === 'KeyA') keys.left = true;
        if (e.code === 'ArrowRight' || e.code === 'KeyD') keys.right = true;
    });

    document.addEventListener('keyup', e => { 
        if (e.code === 'Space') keys.action = false;
        if (e.code === 'ArrowLeft' || e.code === 'KeyA') keys.left = false;
        if (e.code === 'ArrowRight' || e.code === 'KeyD') keys.right = false;
    });
    
    const hudEl = document.getElementById('hud');
    const bossHudEl = document.getElementById('boss-hud');
    if (hudEl) hudEl.style.zIndex = '100';
    if (bossHudEl) bossHudEl.style.zIndex = '100';
    
    for(let i=1; i<=3; i++) {
        let el = document.getElementById(`lb-${i}`);
        if(el) el.innerHTML = `<div style="display: flex; align-items: center;">${i}. LOADING...</div>`;
    }
    
    // Kick off the data fetch (which also checks for bans)
    fetchGlobalData();
});

// --- EXPOSE FUNCTIONS ---
window.navToMainMenu = navToMainMenu;
window.navToLevelSelect = navToLevelSelect;
window.navToCharSelect = navToCharSelect;
window.startGame = startGame;
window.initBossFight = initBossFight;
window.nextLevel = nextLevel;
window.submitHighScore = submitHighScore;
window.resumeAfterIncorrect = resumeAfterIncorrect;

// --- CONTROLS ---
function handleAction() {
    initAudio(); 
    if (gameState === 'RUNNING' && player.grounded) {
        player.dy = player.jumpPower; 
        player.grounded = false;
        playJumpSound();
    } else if (gameState === 'BOSS_FIGHT') {
        attemptSwing();
    }
}

// --- NAVIGATION & UI ---
function createCharButton(name, canvasId) {
    return `
    <button class="char-btn" onclick="startGame('${name}')" style="display:flex; flex-direction:column; align-items:center;">
        <canvas id="${canvasId}" width="40" height="60"></canvas>
        <div style="margin-top:10px; font-weight:bold;">${name.toUpperCase()}</div>
    </button>`;
}

function drawCanvasPreview(canvasId, charName) {
    const c = document.getElementById(canvasId);
    if (!c) return;
    const cx = c.getContext('2d');
    cx.clearRect(0, 0, 40, 60);
    
    if(charName.startsWith('Super')) drawCape(cx, 0, 5);
    
    if(charName.includes('V')) drawMrV(cx, 0, 5);
    else drawMrsG(cx, 0, 5);
}

function drawFacePreview(canvasId, charName, isSmall = false) {
    const c = document.getElementById(canvasId);
    if (!c) return;
    const cx = c.getContext('2d');
    cx.clearRect(0, 0, c.width, c.height);
    cx.save();

    if (isSmall) {
        cx.scale(0.7, 0.7);
        cx.translate(-3, 1);
    } else {
        cx.translate(-4, 2);
    }

    if(charName.startsWith('Super')) drawCape(cx, 0, 0);

    if(charName.includes('V')) drawMrV(cx, 0, 0);
    else drawMrsG(cx, 0, 0);

    cx.restore();
}

function updateLeaderboardUI() {
    const mainMenuDiv = document.getElementById('main-menu');
    if (mainMenuDiv) {
        const headings = mainMenuDiv.querySelectorAll('h1, h2, h3');
        headings.forEach(h => {
            if (h.innerText.toUpperCase().includes("HIGH SCORES") || h.innerText.toUpperCase().includes("LEADERBOARD")) {
                h.innerText = "ADVENTURE MODE HIGH SCORES";
            }
        });
    }

    let advScores = globalScores.filter(s => s.mode === 'ADVENTURE').sort((a,b) => b.score - a.score);
    
    for(let i=0; i<3; i++) {
        const el = document.getElementById(`lb-${i+1}`);
        if(el) {
            if (!scoresLoaded) {
                el.innerHTML = `<div style="display: flex; align-items: center;">${i+1}. LOADING...</div>`;
            } else if (advScores[i]) {
                let entry = advScores[i];
                let canvasId = `lb-canvas-${i}`;
                let charFace = "";
                
                if (entry.char) {
                    charFace = `<canvas id="${canvasId}" width="26" height="24" style="flex-shrink: 0; margin: 0 8px; border-radius: 4px; background: rgba(0,0,0,0.3); border: 1px solid #444;"></canvas>`;
                }
                
                el.innerHTML = `<div style="display: flex; align-items: center; white-space: nowrap;">${i+1}. ${charFace} ${entry.name} ... ${entry.score}</div>`;
                
                if (entry.char) {
                    setTimeout(() => {
                        drawFacePreview(canvasId, entry.char);
                    }, 10);
                }
            } else {
                el.innerHTML = `<div style="display: flex; align-items: center; white-space: nowrap;">${i+1}. --- ... 0</div>`;
            }
        }
    }
}

function navToMainMenu() {
    hideAllOverlays();
    updateLeaderboardUI();
    document.getElementById('main-menu').classList.remove('hidden');
    gameState = 'START';
}

function navToLevelSelect(mode) {
    hideAllOverlays();
    pendingMode = mode; 
    
    if (mode === 'ADVENTURE') {
        navToCharSelect(1);
        return;
    }

    document.getElementById('level-select-title').innerText = "SELECT UNIT TO PRACTICE";
    
    for(let i=1; i<=8; i++) {
        let btn = document.getElementById('btn-prac-' + i);
        if(!btn) continue;
        
        let title = btn.getAttribute('data-title');
        
        if (!scoresLoaded) {
             btn.innerHTML = `${title}<br><span style="color:#ffcc00; font-size:10px; margin-top:5px; display:block;">Loading Scores...</span>`;
             continue;
        }
        
        let unitScores = globalScores.filter(s => s.mode === 'PRACTICE' && parseInt(s.unit) === i).sort((a,b) => b.score - a.score);
        let topScore = unitScores.length > 0 ? unitScores[0].score : 0;
        let topName = unitScores.length > 0 ? unitScores[0].name : "---";
        
        let topCharCanvas = "";
        let topCharId = `prac-canvas-${i}`;
        
        if (unitScores.length > 0 && unitScores[0].char) {
            topCharCanvas = `<canvas id="${topCharId}" width="20" height="20" style="flex-shrink: 0; margin: 0 4px; border-radius: 3px; background: rgba(0,0,0,0.3); border: 1px solid #444;"></canvas>`;
        }
        
        btn.innerHTML = `${title}<br><span style="color:#ffcc00; font-size:10px; margin-top:5px; display:flex; align-items:center; justify-content:center; white-space: nowrap;">Top: ${topCharCanvas} ${topName} ${topScore}</span>`;
        
        if (unitScores.length > 0 && unitScores[0].char) {
            setTimeout(() => drawFacePreview(topCharId, unitScores[0].char, true), 10);
        }
    }
    document.getElementById('level-select-screen').classList.remove('hidden');
}

function navToCharSelect(selectedLevel) {
    initAudio(); 
    level = selectedLevel;
    hideAllOverlays();
    
    const container = document.querySelector('#char-select-screen div[style*="display: flex"]');
    if (container) {
        container.innerHTML = createCharButton('Mr. V', 'preview-v') + createCharButton('Mrs. G', 'preview-g');
        
        let vUnlocked = (activeMode === 'ADVENTURE') ? unlockedPowers['Mr. V']?.includes('ADVENTURE_COMPLETE') : unlockedPowers['Mr. V']?.includes(level);
        let gUnlocked = (activeMode === 'ADVENTURE') ? unlockedPowers['Mrs. G']?.includes('ADVENTURE_COMPLETE') : unlockedPowers['Mrs. G']?.includes(level);
        
        if (vUnlocked) container.innerHTML += createCharButton('Super V', 'preview-sv');
        if (gUnlocked) container.innerHTML += createCharButton('Super G', 'preview-sg');
        
        setTimeout(() => {
            drawCanvasPreview('preview-v', 'Mr. V');
            drawCanvasPreview('preview-g', 'Mrs. G');
            if (vUnlocked) drawCanvasPreview('preview-sv', 'Super V');
            if (gUnlocked) drawCanvasPreview('preview-sg', 'Super G');
        }, 10);
    }
    
    document.getElementById('char-select-screen').classList.remove('hidden');
}

function hideAllOverlays() {
    const overlays = document.querySelectorAll('.overlay');
    overlays.forEach(o => o.classList.add('hidden'));
}

// --- CORE GAME FLOW ---
function startGame(selectedChar) {
    initAudio();
    character = selectedChar;
    activeMode = pendingMode;
    hideAllOverlays();
    
    score = 0; gearSpeedBase = 5; 
    repairs = (activeMode === 'ADVENTURE') ? 5 : 10;
    
    resetLevelState(false);
    gameLoop(); 
}

function nextLevel() {
    document.getElementById('stage-clear-screen').classList.add('hidden'); 
    
    if (activeMode === 'PRACTICE') {
        triggerGameOver("UNIT COMPLETE!", "Great job mastering the material.");
        return;
    }

    level++;
    if(level > 8) {
        triggerGameOver("COURSE COMPLETE!", "You passed Introduction to Engineering Design!");
        return;
    }
    score += 100; 
    gearSpeedBase += 0.5;
    repairs = 5; 
    
    resetLevelState(false);
}

function resetLevelState(isBossTest) {
    gears = []; 
    player.x = 50; player.y = 300; player.dy = 0; player.grounded = false; player.power = 600;
    levelFrames = 0;
    isProcessingAnswer = false;
    
    document.getElementById('boss-hud').classList.add('hidden');
    document.getElementById('hud').classList.remove('hidden');
    
    gameState = 'RUNNING';
    updateHUD();
    updateClockDisplay(levelFrames);
    
    const bgColors = ['#87CEEB', '#b0c4de', '#cd853f', '#4b0082', '#2f4f4f', '#8b4513', '#556b2f', '#483d8b'];
    if(gameWrapper) gameWrapper.style.backgroundColor = bgColors[level - 1];
}

function updateHUD() {
    document.getElementById('level-display').innerText = level;
    document.getElementById('score').innerText = score;
    document.getElementById('repairs-display').innerText = repairs;
    document.getElementById('player-hp-display').innerText = playerHP;
    document.getElementById('boss-health').innerText = bossHP;
    document.getElementById('swing-time-display').innerText = (swingTimerFrames / 60).toFixed(1);
}

function updateClockDisplay(framesToUse) {
    let targetFrames = activeMode === 'PRACTICE' ? 10800 : (1800 + ((level - 1) * 300));
    let remainingSeconds = Math.ceil((targetFrames - framesToUse) / 60);
    if (remainingSeconds < 0) remainingSeconds = 0;
    
    let minutes = Math.floor(remainingSeconds / 60);
    let seconds = remainingSeconds % 60;
    let timeDisplay = document.getElementById('time-display');
    if (timeDisplay) timeDisplay.innerText = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    
    return remainingSeconds;
}

function triggerGameOver(title, desc) {
    gameState = 'GAMEOVER';
    
    document.getElementById('trivia-screen').classList.add('hidden');
    document.getElementById('boss-hud').classList.add('hidden');
    document.getElementById('hud').classList.add('hidden');

    document.getElementById('game-over-title').innerText = title;
    document.getElementById('game-over-desc').innerText = desc;
    document.getElementById('final-score-display').innerText = score;
    
    const hsDiv = document.getElementById('highscore-entry');
    const returnBtn = document.getElementById('btn-return-menu');
    
    hsDiv.classList.add('hidden');
    returnBtn.classList.remove('hidden');

    let isHighScore = false;
    if (activeMode === 'ADVENTURE') {
        let advScores = globalScores.filter(s => s.mode === 'ADVENTURE').sort((a,b) => b.score - a.score);
        let lowest = advScores.length < 3 ? -1 : advScores[2].score;
        if (score > lowest) isHighScore = true;
    } else if (activeMode === 'PRACTICE') {
        let pracScores = globalScores.filter(s => s.mode === 'PRACTICE' && parseInt(s.unit) === level).sort((a,b) => b.score - a.score);
        let lowest = pracScores.length < 3 ? -1 : pracScores[2].score;
        if (score > lowest) isHighScore = true;
    }
    
    if (isHighScore) {
        hsDiv.classList.remove('hidden');
        returnBtn.classList.add('hidden'); 
        document.getElementById('hs-initials').value = ''; 
    }
    
    document.getElementById('game-over-screen').classList.remove('hidden');
}

// --- TRIVIA LOGIC ---
function triggerRescue() {
    gameState = 'TRIVIA'; 
    triviaMode = 'RESCUE';
    
    if (typeof pltwBanks === 'undefined') {
        alert("Question bank missing! Cannot continue.");
        return;
    }

    currentTriviaSet = [...pltwBanks[level]].sort(() => Math.random() - 0.5).slice(0, 1);
    currentQuestionIndex = 0; 
    isProcessingAnswer = false;
    triviaStartTime = Date.now();
    
    document.getElementById('trivia-header').innerText = "GEAR JAM! REPAIR SEQUENCE";
    document.getElementById('trivia-status').innerText = "Answer to resume. (Time penalty capped at 10s)";
    document.getElementById('trivia-status').style.color = '#ffcc00';
    document.getElementById('trivia-screen').classList.remove('hidden');
    
    loadQuestion();
}

function triggerBossTrivia() {
    gameState = 'TRIVIA'; 
    triviaMode = 'BOSS';
    
    playerHP = 5;
    bossHP = level + 2;
    
    if (typeof pltwBanks !== 'undefined') {
        currentTriviaSet = [...pltwBanks[level]].sort(() => Math.random() - 0.5);
    }
    currentQuestionIndex = 0;
    swingsEarned = 0;
    isProcessingAnswer = false;
    
    document.getElementById('hud').classList.add('hidden');
    document.getElementById('boss-hud').classList.remove('hidden');
    
    document.getElementById('trivia-header').innerText = "UNIT ASSESSMENT";
    document.getElementById('trivia-status').innerText = `Earn swings by answering correctly!`;
    document.getElementById('trivia-status').style.color = '#55ff55';
    
    document.getElementById('boss-title').innerText = bossNames[level-1].toUpperCase() + " APPROACHES";
    document.getElementById('boss-intro-screen').classList.remove('hidden');
    playBossRoar(); 
}

function askBossQuestion() {
    gameState = 'TRIVIA';
    triviaMode = 'BOSS';
    isProcessingAnswer = false;
    triviaStartTime = Date.now();
    
    document.getElementById('boss-hud').classList.remove('hidden');
    document.getElementById('hud').classList.add('hidden');
    
    document.getElementById('trivia-status').innerText = `Answer to earn a swing!`;
    document.getElementById('trivia-status').style.color = '#55ff55';
    document.getElementById('trivia-screen').classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= currentTriviaSet.length) {
        currentTriviaSet = [...pltwBanks[level]].sort(() => Math.random() - 0.5);
        currentQuestionIndex = 0;
    }

    const q = currentTriviaSet[currentQuestionIndex];
    
    if (triviaMode === 'BOSS') {
         document.getElementById('question-text').innerText = `Boss Question:\n${q.q}`;
    } else {
         document.getElementById('question-text').innerText = `Rescue Question:\n${q.q}`;
    }
    
    const answersDiv = document.getElementById('answers-container');
    answersDiv.innerHTML = ''; 
    
    const shuffledOpts = [...q.opts].sort(() => Math.random() - 0.5);
    shuffledOpts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn'; btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt, q.ans);
        answersDiv.appendChild(btn);
    });
}

function checkAnswer(selected, correct) {
    if (isProcessingAnswer) return; 
    isProcessingAnswer = true;

    let timeSpent = Date.now() - triviaStartTime;
    let framesSpent = Math.floor((timeSpent / 1000) * 60);
    if (framesSpent > 600) framesSpent = 600; 
    levelFrames += framesSpent;

    const q = currentTriviaSet[currentQuestionIndex];
    let explanation = q.exp || "Review your PLTW IED course notes for this concept.";
    let source = q.src || (level === 7 ? "Properties of Engineering Materials Worksheet" : "PLTW Curriculum");

    if (selected === correct) {
        document.getElementById('trivia-status').innerText = "CORRECT!";
        document.getElementById('trivia-status').style.color = '#55ff55';
        
        setTimeout(() => {
            document.getElementById('trivia-screen').classList.add('hidden');
            if (triviaMode === 'RESCUE') {
                gears = []; 
                gameState = 'RUNNING';
            } else {
                swingsEarned = 1; 
                currentQuestionIndex++; 
                startBossSwingPhase();
            }
        }, 1000);
        
    } else {
        const answersDiv = document.getElementById('answers-container');
        answersDiv.innerHTML = `
            <div style="color: #ff5555; font-weight: bold; margin-bottom: 10px; font-size:18px;">INCORRECT</div>
            <div style="color: #fff; margin-bottom: 10px; font-size: 14px;">The correct answer is: <span style="color:#55ff55;">${correct}</span></div>
            <div style="color: #ddd; font-size: 12px; margin-bottom: 10px; line-height:1.4;"><i>${explanation}</i></div>
            <div style="color: #ffcc00; font-size: 10px; margin-bottom: 15px;">Source: ${source}</div>
            <button class="answer-btn" style="background:#ff5555; color:#000;" onclick="resumeAfterIncorrect()">CONTINUE</button>
        `;
        
        document.getElementById('trivia-status').innerText = "Read the explanation, then click CONTINUE.";
        document.getElementById('trivia-status').style.color = '#ffcc00';

        if (triviaMode === 'BOSS') {
            playBossRoar();
        }
    }
}

function resumeAfterIncorrect() {
    if (triviaMode === 'RESCUE') {
        repairs--; 
        updateHUD();
        
        if (repairs < 0) {
            triggerGameOver("WORKSHOP HAZARD", "You ran out of repairs during sequence!");
        } else {
            isProcessingAnswer = false;
            currentQuestionIndex++; 
            triviaStartTime = Date.now(); 
            
            document.getElementById('trivia-status').innerText = "Answer to resume. (Time penalty capped at 10s)";
            document.getElementById('trivia-status').style.color = '#ffcc00';
            
            loadQuestion(); 
        }
    } else if (triviaMode === 'BOSS') {
        playerHP--; 
        updateHUD();
        
        if (playerHP <= 0) {
            triggerGameOver("DEFEATED", bossNames[level-1] + " dismantled you!");
        } else {
            isProcessingAnswer = false;
            currentQuestionIndex++; 
            askBossQuestion(); 
        }
    }
}

// --- FIRST PERSON BOSS FIGHT ---
function initBossFight() {
    document.getElementById('boss-intro-screen').classList.add('hidden');
    askBossQuestion();
}

function startBossSwingPhase() {
    gameState = 'BOSS_FIGHT';
    bossX = 400; 
    
    let baseSpeed = 3 + level;
    let randomVariance = Math.random() * (level * 1.5);
    bossSpeed = baseSpeed + randomVariance;
    
    caliperAngle = 0; 
    isSwinging = false;
    bossAttacked = false;
    swingTimerFrames = 300; 
    
    document.getElementById('hud').classList.add('hidden');
    document.getElementById('boss-hud').classList.remove('hidden');
    updateHUD();
}

function attemptSwing() {
    if (isSwinging || bossAttacked) return; 
    
    swingsEarned--;
    isSwinging = true; swingFrame = 0;
    playSwingSound();
}

function updateBossFight() {
    bossX += bossSpeed * bossDirection;
    if (bossX > 700 || bossX < 100) bossDirection *= -1;
    if (bossHitFlash > 0) bossHitFlash--;

    if (!isSwinging && !bossAttacked) {
        swingTimerFrames--;
        updateHUD();
        
        if (swingTimerFrames <= 0) {
            bossAttacked = true;
            playerHP--;
            playBossRoar();
            playerHitFlash = 15;
            updateHUD();
            
            setTimeout(() => {
                if (playerHP <= 0) {
                    triggerGameOver("DEFEATED!", bossNames[level-1] + " dismantled you!");
                } else {
                    askBossQuestion();
                }
            }, 1500);
        }
    }

    if (isSwinging) {
        swingFrame++;
        if (swingFrame <= 10) { caliperAngle = (swingFrame / 10) * -1.2; } 
        else if (swingFrame === 11) {
            let distFromCenter = Math.abs(bossX - 400);
            if (distFromCenter < 120) { 
                bossHP--; bossHitFlash = 10;
                score += 50; 
                playStrikeSound();
                updateHUD();
            } else {
                playerHP--;
                playBossRoar();
                playerHitFlash = 15;
                updateHUD();
            }
        } else if (swingFrame < 30) {
            caliperAngle = -1.2 + ((swingFrame - 11) / 19) * 1.2; 
        } else {
            isSwinging = false; caliperAngle = 0;
            
            setTimeout(() => {
                if (playerHP <= 0) {
                    triggerGameOver("DEFEATED!", bossNames[level-1] + " dismantled you!");
                } else if (bossHP <= 0) {
                    
                    playDefeatSound();
                    
                    let stageClearHeader = document.querySelector('#stage-clear-screen h1');
                    let baseChar = character.replace('Super ', '');
                    if (!unlockedPowers[baseChar]) unlockedPowers[baseChar] = [];

                    if (activeMode === 'ADVENTURE') {
                        if (level === 8) {
                            if (!unlockedPowers[baseChar].includes('ADVENTURE_COMPLETE')) {
                                unlockedPowers[baseChar].push('ADVENTURE_COMPLETE');
                                try { localStorage.setItem('waltonUnlocks', JSON.stringify(unlockedPowers)); } catch(e){}
                                stageClearHeader.innerHTML = `COURSE COMPLETE!<br><span style="font-size:12px; color:#ffcc00; display:block; margin-top:15px; text-transform:uppercase;">${baseChar} POWER UNLOCKED FOR ADVENTURE MODE!</span>`;
                            } else {
                                stageClearHeader.innerHTML = "COURSE COMPLETE!";
                            }
                        } else {
                            stageClearHeader.innerHTML = "BOSS DISMANTLED!";
                        }
                    } else { 
                        if (!unlockedPowers[baseChar].includes(level)) {
                            unlockedPowers[baseChar].push(level);
                            try { localStorage.setItem('waltonUnlocks', JSON.stringify(unlockedPowers)); } catch(e){}
                            stageClearHeader.innerHTML = `BOSS DISMANTLED!<br><span style="font-size:12px; color:#ffcc00; display:block; margin-top:15px; text-transform:uppercase;">${baseChar} POWER UNLOCKED FOR UNIT ${level}!</span>`;
                        } else {
                            stageClearHeader.innerHTML = "BOSS DISMANTLED!";
                        }
                    }
                    
                    let bonus = (Math.max(0, repairs) * 25) + (Math.max(0, playerHP) * 25);
                    score += bonus;
                    updateHUD();

                    gameState = 'STAGE_CLEAR';
                    let btnText = (activeMode === 'ADVENTURE' && level === 8) ? "FINISH COURSE" : "FINISH";
                    document.getElementById('btn-next-level').innerText = btnText;
                    document.getElementById('stage-clear-screen').classList.remove('hidden');
                } else {
                    askBossQuestion();
                }
            }, 500);
        }
    }
}

// --- DRAWING FUNCTIONS ---
function drawFirstPersonBoss(ctxRef) {
    if (!ctxRef) return;
    ctxRef.fillStyle = '#222'; ctxRef.fillRect(0, 0, 800, 400);
    
    ctxRef.strokeStyle = '#333'; ctxRef.lineWidth = 2; ctxRef.beginPath();
    for(let i=0; i<800; i+=50) { ctxRef.moveTo(i, 200); ctxRef.lineTo((i-400)*2 + 400, 400); }
    for(let i=200; i<400; i+=30) { ctxRef.moveTo(0, i); ctxRef.lineTo(800, i); }
    ctxRef.stroke();

    ctxRef.fillStyle = '#111'; ctxRef.fillRect(0, 0, 800, 200);

    ctxRef.save();
    ctxRef.translate(bossX, 150 + Math.sin(frameCount * 0.1) * 10);
    ctxRef.fillStyle = bossHitFlash > 0 ? '#fff' : getBossColor(level);
    
    drawBossShape(ctxRef, level);
    ctxRef.restore();

    ctxRef.strokeStyle = '#fff'; ctxRef.lineWidth = 2; ctxRef.beginPath();
    ctxRef.moveTo(380, 250); ctxRef.lineTo(420, 250);
    ctxRef.moveTo(400, 230); ctxRef.lineTo(400, 270); ctxRef.stroke();

    ctxRef.save(); ctxRef.translate(650, 450); ctxRef.rotate(caliperAngle);
    ctxRef.fillStyle = '#ddd'; ctxRef.fillRect(-20, -250, 40, 250);
    ctxRef.fillStyle = '#ccc'; ctxRef.fillRect(-80, -250, 60, 20); ctxRef.fillRect(-80, -180, 60, 20);
    ctxRef.fillStyle = '#eee'; ctxRef.beginPath(); ctxRef.arc(0, -180, 30, 0, Math.PI*2); ctxRef.fill();
    ctxRef.fillStyle = '#fff'; ctxRef.beginPath(); ctxRef.arc(0, -180, 25, 0, Math.PI*2); ctxRef.fill();
    ctxRef.fillStyle = '#000'; ctxRef.fillRect(-2, -180, 4, -20);
    ctxRef.restore();
    
    if (playerHitFlash > 0) {
        ctxRef.fillStyle = 'rgba(255, 0, 0, 0.5)';
        ctxRef.fillRect(0, 0, 800, 400);
        playerHitFlash--;
    }
}

function getBossColor(lvl) {
    const colors = ['#555', '#4169e1', '#da70d6', '#228b22', '#ff4500', '#8b4513', '#dc143c', '#808080'];
    return colors[(lvl-1) % colors.length];
}

function drawBossShape(c, lvl) {
    c.fillRect(-40, -20, 100, 80); 
    c.fillRect(-60, -80, 80, 60); 
    c.fillStyle = '#ff0000'; c.fillRect(-40, -60, 10, 10);
    c.fillStyle = '#888'; c.fillRect(-60, -30, 40, 10); 
    
    c.fillStyle = '#444';
    let legOffset = Math.sin(frameCount * 0.2) * 20;
    c.fillRect(-20 + legOffset, 60, 20, 60);
    c.fillRect(40 - legOffset, 60, 20, 60);

    c.fillStyle = getBossColor(lvl);
    if (lvl === 2) { 
        c.beginPath(); c.moveTo(-60,-80); c.lineTo(-100,-100); c.lineTo(-40,-80); c.fill(); 
        c.fillRect(0,-100, 20, 40); 
    } else if (lvl === 3) { 
        c.fillRect(-100, 0, 60, 20); c.fillRect(60, 0, 60, 20); 
    } else if (lvl === 4) { 
        for(let i=0; i<3; i++) { c.beginPath(); c.moveTo(-20+(i*30), -20); c.lineTo(-10+(i*30), -60); c.lineTo(0+(i*30), -20); c.fill(); }
    } else if (lvl === 5) { 
        c.clearRect(-40,-80,100,160); 
        c.fillRect(-20, 0, 60, 40); c.fillRect(-40, -40, 40, 40); 
        c.fillStyle = '#0f0'; c.fillRect(-30, -30, 8, 8); 
    } else if (lvl === 6) { 
        c.fillRect(20, -120, 30, 100); 
    } else if (lvl === 7) { 
        c.beginPath(); c.arc(10, -20, 50, Math.PI, 0); c.fill();
    } else if (lvl === 8) { 
        c.fillRect(60, 20, 60, 20); c.beginPath(); c.arc(130, 30, 20, 0, Math.PI*2); c.fill();
    }
}

function drawCape(c, px, py) {
    c.fillStyle = '#cc0000';
    c.beginPath();
    c.moveTo(px + 6, py + 10);
    c.lineTo(px + 30, py + 10);
    c.lineTo(px + 45, py + 50);
    c.lineTo(px - 9, py + 50);
    c.fill();
}

function drawMrV(c, px, py) {
    c.fillStyle = '#f1c27d'; c.fillRect(px+8, py, 20, 16);
    c.fillStyle = '#4a3000'; c.fillRect(px+8, py, 20, 4); c.fillRect(px+8, py+10, 20, 6); 
    c.fillStyle = '#000'; c.fillRect(px+10, py+6, 6, 4); c.fillRect(px+20, py+6, 6, 4); c.fillRect(px+16, py+7, 4, 2);
    for(let r=0; r<4; r++){ for(let col=0; col<5; col++){ c.fillStyle = (r+col)%2===0 ? '#cc0000' : '#880000'; c.fillRect(px+4 + (col*6), py+16 + (r*5), 6, 5); } }
    c.fillStyle = '#000080'; c.fillRect(px+8, py+36, 8, 14); c.fillRect(px+20, py+36, 8, 14);
}

function drawMrsG(c, px, py) {
    c.fillStyle = '#fff'; c.fillRect(px+4, py, 24, 4); c.fillRect(px+24, py+4, 8, 2); 
    c.fillStyle = '#3a2000'; c.fillRect(px+6, py+4, 24, 14);
    c.fillStyle = '#f1c27d'; c.fillRect(px+12, py+8, 14, 10);
    c.fillStyle = '#20b2aa'; c.fillRect(px+8, py+18, 20, 12);
    c.fillStyle = '#fff'; c.fillRect(px+6, py+30, 24, 10);
    c.fillStyle = '#ddd'; c.fillRect(px+10, py+30, 4, 10); c.fillRect(px+18, py+30, 4, 10);
    c.fillStyle = '#f1c27d'; c.fillRect(px+10, py+40, 6, 10); c.fillRect(px+20, py+40, 6, 10);
}

function updateRunner() {
    if (!ctx) return;
    
    let isUsingPower = false;
    let isSuper = character.startsWith('Super');
    
    if (isSuper && character.includes('G') && !player.grounded && player.dy > 0 && keys.action && player.power > 0) {
        player.dy = 0; 
        player.power -= 40; 
        isUsingPower = true;
    } else {
        player.dy += player.gravity; 
    }
    
    if (isSuper && character.includes('V') && !player.grounded && player.power > 0) {
        if (keys.left) { player.x -= 6; player.power -= 20; isUsingPower = true; }
        else if (keys.right) { player.x += 6; player.power -= 20; isUsingPower = true; }
    }
    
    if (player.power < 0) player.power = 0;
    
    if (!isUsingPower && player.power < 600) {
        player.power += 1; 
    }
    
    if (player.x < 10) player.x = 10;
    if (player.x > 750) player.x = 750;
    
    player.y += player.dy;
    
    if (player.y + player.height >= 340) { 
        player.y = 340 - player.height; 
        player.dy = 0; 
        player.grounded = true; 
    }

    if (isSuper && character.includes('V') && player.grounded) {
        if (player.x > 50) player.x -= 4;
        if (player.x < 50) player.x += 4;
        if (Math.abs(player.x - 50) <= 4) player.x = 50;
    }

    for (let i = 0; i < gears.length; i++) {
        let g = gears[i];
        g.x -= g.speed; g.rotation -= 0.1; 
        let distX = Math.abs(g.x - (player.x + player.width / 2));
        let distY = Math.abs(g.y - (player.y + player.height / 2));

        if (distX < (player.width / 2 + g.radius - 6) && distY < (player.height / 2 + g.radius - 6)) {
            
            gears.splice(i, 1); 
            i--;
            
            repairs--; updateHUD();
            
            if (repairs < 0) {
                triggerGameOver("WORKSHOP HAZARD!", "You ran out of repairs!");
            } else {
                triggerRescue();
            }
            return;
        }
        if (g.x + g.radius < 0) { gears.splice(i, 1); i--; }
    }

    frameCount++;
    levelFrames++;
    if (frameCount % 10 === 0) { score++; updateHUD(); }
    
    if (frameCount % 60 === 0) { updateClockDisplay(levelFrames); }

    let spawnRate = Math.max(35, 80 - (level * 6));
    if (frameCount % (Math.floor(Math.random() * spawnRate) + spawnRate) === 0 && gears.length < 5) {
        gears.push({ x: 800, y: 310, radius: 18, speed: gearSpeedBase + (Math.random() * 2), rotation: 0 });
    }

    let targetFrames = activeMode === 'PRACTICE' ? 10800 : (1800 + ((level - 1) * 300));
    if (levelFrames >= targetFrames) {
        if (activeMode === 'PRACTICE' && score < 500) {
            triggerGameOver("NOT WORTHY!", `You must score 500+ points to face ${bossNames[level-1].toUpperCase()}!`);
            return;
        }
        triggerBossTrivia(); 
    }
}

function drawRunner(c) {
    if (!c) return;
    c.clearRect(0, 0, 800, 400);

    c.fillStyle = '#333'; c.fillRect(0, 340, 800, 60);
    c.strokeStyle = '#555'; c.lineWidth = 2;
    for(let i = 0; i < 800; i+=40) {
        c.beginPath(); c.moveTo(i - (frameCount % 40), 340); c.lineTo(i - (frameCount % 40) - 20, 400); c.stroke();
    }
    c.fillStyle = '#ffcc00'; c.fillRect(0, 340, 800, 4);

    if (character === 'Super V' || character === 'Super G') {
        drawCape(c, player.x, player.y);
    }
    
    if (character.includes('V')) drawMrV(c, player.x, player.y);
    else drawMrsG(c, player.x, player.y);
    
    if (character.startsWith('Super')) {
        c.fillStyle = '#fff';
        c.fillRect(player.x - 10, player.y - 15, 56, 6);
        c.fillStyle = player.power === 600 ? '#55ff55' : '#ffcc00';
        c.fillRect(player.x - 8, player.y - 13, 52 * (player.power / 600), 2);
    }

    gears.forEach(g => {
        c.save(); c.translate(g.x, g.y); c.rotate(g.rotation);
        c.fillStyle = '#555'; c.beginPath(); c.arc(0, 0, g.radius, 0, Math.PI * 2); c.fill();
        c.fillStyle = '#444'; for (let i = 0; i < 8; i++) { c.rotate(Math.PI / 4); c.fillRect(-4, -g.radius - 4, 8, 8); }
        c.fillStyle = gameWrapper ? gameWrapper.style.backgroundColor : '#87CEEB'; c.beginPath(); c.arc(0, 0, g.radius * 0.5, 0, Math.PI * 2); c.fill();
        c.fillStyle = '#222'; c.beginPath(); c.arc(0, 0, g.radius * 0.2, 0, Math.PI * 2); c.fill();
        c.restore();
    });
}

function gameLoop() {
    if (gameState === 'GAMEOVER') return;

    if (gameState === 'RUNNING') {
        updateRunner(); 
        drawRunner(ctx);
    } else if (gameState === 'BOSS_FIGHT') {
        frameCount++; 
        updateBossFight(); 
        drawFirstPersonBoss(ctx);
    } else if (gameState === 'TRIVIA') {
        if (!isProcessingAnswer) {
            
            let timeSpent = Date.now() - triviaStartTime;
            let framesSpent = Math.floor((timeSpent / 1000) * 60);
            
            if (framesSpent > 600) {
                framesSpent = 600; 
                document.getElementById('trivia-status').innerText = "Time Penalty Capped. Game Paused.";
                document.getElementById('trivia-status').style.color = '#ffcc00';
            } else {
                let secondsDeducted = Math.floor(framesSpent/60);
                document.getElementById('trivia-status').innerText = `Answer to resume. (Penalty: -${secondsDeducted}s / 10s)`;
                document.getElementById('trivia-status').style.color = '#ffcc00';
            }
            
            let displayFrames = levelFrames + framesSpent;
            updateClockDisplay(displayFrames);
            
        }
    }
    
    animationId = requestAnimationFrame(gameLoop);
}
