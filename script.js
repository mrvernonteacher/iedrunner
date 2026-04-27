const canvas = document.getElementById('mainCanvas');
const ctx = canvas.getContext('2d');
const gameWrapper = document.getElementById('game-wrapper');

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

// --- GAME SYSTEM STATE ---
let gameState = 'START'; 
let pendingMode = 'ADVENTURE'; 
let activeMode = 'ADVENTURE'; 
let character = '';
let score = 0; let level = 1; let repairs = 5;
let animationId; let frameCount = 0; let levelFrames = 0; 
let isProcessingAnswer = false; 
let triviaStartTime = 0; 

// Player & Obstacles
const player = { x: 50, y: 300, width: 36, height: 50, dy: 0, gravity: 0.6, jumpPower: -12.5, grounded: false };
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

// --- SAFE LOCAL STORAGE INITIALIZATION ---
let adventureScores = [
    { name: "MRV", score: 1500 }, { name: "IED", score: 1000 }, { name: "ENG", score: 500 }
];
let practiceScores = {};
for(let i=1; i<=8; i++) { practiceScores[i] = []; }

try {
    let savedAdv = JSON.parse(localStorage.getItem('waltonAdventureScores'));
    if (savedAdv) adventureScores = savedAdv;
    
    let savedPrac = JSON.parse(localStorage.getItem('waltonPracticeScores'));
    if (savedPrac) {
        practiceScores = savedPrac;
        for(let i=1; i<=8; i++) { if(!practiceScores[i]) practiceScores[i] = []; }
    }
} catch (e) {
    console.warn("Local storage is restricted or unavailable in this environment. High scores will not persist.");
}

// --- INITIALIZATION (WAIT FOR HTML TO LOAD) ---
document.addEventListener('DOMContentLoaded', () => {
    if (typeof pltwBanks === 'undefined') {
        console.error("ERROR: questions.js failed to load. Ensure the file is in the same folder and linked in your HTML.");
    }

    if (canvas) {
        canvas.addEventListener('mousedown', handleAction);
    }
    
    document.addEventListener('keydown', e => { if (e.code === 'Space') handleAction(); });
    
    updateLeaderboardUI();
    drawCanvasPreview('preview-v', 'Mr. V');
    drawCanvasPreview('preview-g', 'Mrs. G');
});

// --- EXPOSE FUNCTIONS TO HTML BUTTONS ---
window.navToMainMenu = navToMainMenu;
window.navToLevelSelect = navToLevelSelect;
window.navToCharSelect = navToCharSelect;
window.startGame = startGame;
window.initBossFight = initBossFight;
window.nextLevel = nextLevel;
window.submitHighScore = submitHighScore;

// --- CONTROLS ---
function handleAction() {
    initAudio(); 
    if (gameState === 'RUNNING' && player.grounded) {
        player.dy = player.jumpPower; player.grounded = false;
        playJumpSound();
    } else if (gameState === 'BOSS_FIGHT') {
        attemptSwing();
    }
}

// --- NAVIGATION & UI ---
function drawCanvasPreview(canvasId, charName) {
    const c = document.getElementById(canvasId);
    if (!c) return;
    const cx = c.getContext('2d');
    cx.clearRect(0, 0, 40, 60);
    if(charName === 'Mr. V') drawMrV(cx, 0, 5);
    else drawMrsG(cx, 0, 5);
}

function updateLeaderboardUI() {
    for(let i=0; i<3; i++) {
        let entry = adventureScores[i] || {name: "---", score: 0};
        const el = document.getElementById(`lb-${i+1}`);
        if(el) el.innerText = `${i+1}. ${entry.name} ... ${entry.score}`;
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

    document.getElementById('level-select-title').innerText = mode === 'BOSS_TEST' ? "SELECT BOSS TEST UNIT" : "SELECT UNIT TO PRACTICE";
    
    for(let i=1; i<=8; i++) {
        let btn = document.getElementById('btn-prac-' + i);
        if(!btn) continue;
        let unitScores = practiceScores[i] || [];
        let topScore = unitScores.length > 0 ? unitScores[0].score : 0;
        let topName = unitScores.length > 0 ? unitScores[0].name : "---";
        let title = btn.getAttribute('data-title');
        btn.innerHTML = `${title}<br><span style="color:#ffcc00; font-size:10px; margin-top:5px; display:block;">Top: ${topName} ${topScore}</span>`;
    }
    document.getElementById('level-select-screen').classList.remove('hidden');
}

function navToCharSelect(selectedLevel) {
    initAudio(); 
    level = selectedLevel;
    hideAllOverlays();
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
    
    if (activeMode === 'BOSS_TEST') {
        score = 300; 
        resetLevelState(true);
        triggerBossTrivia();
        gameLoop(); // Start continuous loop
        return;
    }
    
    resetLevelState(false);
    gameLoop(); // Start continuous loop
}

function nextLevel() {
    document.getElementById('stage-clear-screen').classList.add('hidden'); 
    
    if (activeMode === 'PRACTICE' || activeMode === 'BOSS_TEST') {
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
    repairs += 5; 
    
    resetLevelState(false);
    // Game loop runs continuously, no need to trigger it again
}

function resetLevelState(isBossTest) {
    gears = []; player.y = 300; player.dy = 0; player.grounded = false;
    levelFrames = 0;
    isProcessingAnswer = false;
    
    document.getElementById('boss-hud').classList.add('hidden');
    document.getElementById('hud').classList.remove('hidden');
    
    gameState = 'RUNNING';
    updateHUD();
    updateClockDisplay();
    
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

function updateClockDisplay() {
    let targetFrames = activeMode === 'PRACTICE' ? 10800 : (1800 + ((level - 1) * 300));
    let remainingSeconds = Math.ceil((targetFrames - levelFrames) / 60);
    if (remainingSeconds < 0) remainingSeconds = 0;
    
    let minutes = Math.floor(remainingSeconds / 60);
    let seconds = remainingSeconds % 60;
    let timeDisplay = document.getElementById('time-display');
    if (timeDisplay) timeDisplay.innerText = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

function triggerGameOver(title, desc) {
    gameState = 'GAMEOVER';
    document.getElementById('game-over-title').innerText = title;
    document.getElementById('game-over-desc').innerText = desc;
    document.getElementById('final-score-display').innerText = score;
    
    const hsDiv = document.getElementById('highscore-entry');
    const returnBtn = document.getElementById('btn-return-menu');
    
    hsDiv.classList.add('hidden');
    returnBtn.classList.remove('hidden');

    if (activeMode === 'ADVENTURE') {
        let lowestHighScore = adventureScores.length < 3 ? -1 : adventureScores[2].score;
        if (score > lowestHighScore) {
            hsDiv.classList.remove('hidden');
            returnBtn.classList.add('hidden'); 
            document.getElementById('hs-initials').value = ''; 
        }
    } else if (activeMode === 'PRACTICE' || activeMode === 'BOSS_TEST') {
        let unitScores = practiceScores[level] || [];
        let lowestHighScore = unitScores.length < 3 ? -1 : unitScores[2].score;
        if (score > lowestHighScore) {
            hsDiv.classList.remove('hidden');
            returnBtn.classList.add('hidden'); 
            document.getElementById('hs-initials').value = ''; 
        }
    }
    
    document.getElementById('game-over-screen').classList.remove('hidden');
}

function submitHighScore() {
    const initials = document.getElementById('hs-initials').value;
    if (initials.length !== 3) {
        alert("Please enter exactly 3 letters for the arcade scoreboard.");
        return;
    }
    
    if (activeMode === 'ADVENTURE') {
        adventureScores.push({ name: initials, score: score });
        adventureScores.sort((a,b) => b.score - a.score);
        adventureScores = adventureScores.slice(0, 3);
        try { localStorage.setItem('waltonAdventureScores', JSON.stringify(adventureScores)); } catch(e){}
    } else {
        if(!practiceScores[level]) practiceScores[level] = [];
        practiceScores[level].push({ name: initials, score: score });
        practiceScores[level].sort((a,b) => b.score - a.score);
        practiceScores[level] = practiceScores[level].slice(0, 3);
        try { localStorage.setItem('waltonPracticeScores', JSON.stringify(practiceScores)); } catch(e){}
    }
    
    document.getElementById('highscore-entry').classList.add('hidden');
    document.getElementById('btn-return-menu').classList.remove('hidden');
    updateLeaderboardUI();
    navToMainMenu();
}

// --- TRIVIA LOGIC ---
function triggerRescue() {
    gameState = 'TRIVIA'; triviaMode = 'RESCUE';
    
    if (typeof pltwBanks === 'undefined') {
        alert("Question bank missing! Cannot continue.");
        return;
    }

    currentTriviaSet = [...pltwBanks[level]].sort(() => Math.random() - 0.5).slice(0, 1);
    currentQuestionIndex = 0; 
    isProcessingAnswer = false;
    triviaStartTime = Date.now();
    
    document.getElementById('trivia-header').innerText = "GEAR JAM! REPAIR SEQUENCE";
    document.getElementById('trivia-status').innerText = "Answer to resume. (Time keeps ticking!)";
    document.getElementById('trivia-status').style.color = '#ffcc00';
    document.getElementById('trivia-screen').classList.remove('hidden');
    loadQuestion();
}

function triggerBossTrivia() {
    gameState = 'TRIVIA'; triviaMode = 'BOSS';
    
    playerHP = 5;
    bossHP = level + 2;
    
    if (typeof pltwBanks !== 'undefined') {
        currentTriviaSet = [...pltwBanks[level]].sort(() => Math.random() - 0.5);
    }
    currentQuestionIndex = 0;
    swingsEarned = 0;
    isProcessingAnswer = false;
    
    // Switch HUDs
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
    
    // Ensure Boss HUD stays active
    document.getElementById('hud').classList.add('hidden');
    document.getElementById('boss-hud').classList.remove('hidden');
    
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

    if (triviaMode === 'RESCUE') {
        isProcessingAnswer = true;
        
        let timeSpent = Date.now() - triviaStartTime;
        let framesSpent = Math.floor((timeSpent / 1000) * 60);
        levelFrames += framesSpent; // Add the time penalty permanently
        
        if (selected === correct) {
            document.getElementById('trivia-status').innerText = "REPAIR SUCCESSFUL! Resuming...";
            document.getElementById('trivia-status').style.color = '#55ff55';
            setTimeout(() => {
                document.getElementById('trivia-screen').classList.add('hidden');
                gears = []; 
                gameState = 'RUNNING';
                updateClockDisplay();
            }, 1000);
        } else {
            if (repairs > 0) {
                repairs--; updateHUD();
                document.getElementById('trivia-status').innerText = "INCORRECT! -1 Repair. Try another specification.";
                document.getElementById('trivia-status').style.color = '#ff5555';
                setTimeout(() => {
                    isProcessingAnswer = false;
                    currentQuestionIndex++; 
                    triviaStartTime = Date.now(); // Restart timer for next question
                    loadQuestion(); 
                }, 1500);
            } else {
                document.getElementById('trivia-status').innerText = "CRITICAL FAILURE! Out of repairs.";
                document.getElementById('trivia-status').style.color = '#ff5555';
                setTimeout(() => {
                    document.getElementById('trivia-screen').classList.add('hidden');
                    triggerGameOver("WORKSHOP HAZARD", "You ran out of repairs during sequence!");
                }, 1500);
            }
        }
    } else if (triviaMode === 'BOSS') {
        isProcessingAnswer = true;
        if (selected === correct) {
            swingsEarned = 1; 
            document.getElementById('trivia-status').innerText = "CORRECT! Get ready to swing!";
            document.getElementById('trivia-status').style.color = '#55ff55';
            setTimeout(() => {
                document.getElementById('trivia-screen').classList.add('hidden');
                currentQuestionIndex++; 
                startBossSwingPhase();
            }, 1000);
        } else {
            playerHP--;
            updateHUD();
            document.getElementById('trivia-status').innerText = `INCORRECT! Boss attacks! (-1 HP)`;
            document.getElementById('trivia-status').style.color = '#ff5555';
            playBossRoar();
            document.getElementById('trivia-container').style.borderColor = '#ff0000';
            setTimeout(() => {
                document.getElementById('trivia-container').style.borderColor = '#ffcc00';
                if (playerHP <= 0) {
                    document.getElementById('trivia-screen').classList.add('hidden');
                    triggerGameOver("DEFEATED", bossNames[level-1] + " dismantled you!");
                } else {
                    currentQuestionIndex++; 
                    askBossQuestion(); 
                }
            }, 1500);
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
    bossSpeed = 4 + (level * 2); 
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
                    
                    // --- APPLY BONUS POINTS FOR WINNING ---
                    let bonus = (Math.max(0, repairs) * 25) + (Math.max(0, playerHP) * 25);
                    score += bonus;
                    updateHUD();

                    gameState = 'STAGE_CLEAR';
                    let btnText = (activeMode === 'ADVENTURE' && level === 8) ? "FINISH COURSE" : ((activeMode === 'PRACTICE' || activeMode === 'BOSS_TEST') ? "FINISH" : "CONTINUE TO NEXT UNIT");
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
    player.dy += player.gravity; player.y += player.dy;
    if (player.y + player.height > 340) { player.y = 340 - player.height; player.dy = 0; player.grounded = true; }

    for (let i = 0; i < gears.length; i++) {
        let g = gears[i];
        g.x -= g.speed; g.rotation -= 0.1; 
        let distX = Math.abs(g.x - (player.x + player.width / 2));
        let distY = Math.abs(g.y - (player.y + player.height / 2));

        if (distX < (player.width / 2 + g.radius - 6) && distY < (player.height / 2 + g.radius - 6)) {
            if (level === 1) {
                triggerGameOver("WORKSHOP HAZARD!", "You hit a gear on Level 1!");
            } else {
                repairs--; updateHUD();
                if (repairs < 0) {
                    triggerGameOver("WORKSHOP HAZARD!", "You ran out of repairs!");
                } else {
                    triggerRescue();
                }
            }
            return;
        }
        if (g.x + g.radius < 0) { gears.splice(i, 1); i--; }
    }

    frameCount++;
    levelFrames++;
    if (frameCount % 10 === 0) { score++; updateHUD(); }
    
    // Update the clock regularly (but without interfering with levelFrames logic)
    if (frameCount % 60 === 0) { updateClockDisplay(); }

    let spawnRate = Math.max(35, 80 - (level * 6));
    if (frameCount % (Math.floor(Math.random() * spawnRate) + spawnRate) === 0 && gears.length < 5) {
        gears.push({ x: 800, y: 310, radius: 18, speed: gearSpeedBase + (Math.random() * 2), rotation: 0 });
    }

    let targetFrames = activeMode === 'PRACTICE' ? 10800 : (1800 + ((level - 1) * 300));
    if (levelFrames >= targetFrames) {
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

    if (character === 'Mr. V') drawMrV(c, player.x, player.y);
    else drawMrsG(c, player.x, player.y);

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
        updateRunner(); drawRunner(ctx);
    } else if (gameState === 'BOSS_FIGHT') {
        frameCount++; updateBossFight(); drawFirstPersonBoss(ctx);
    } else if (gameState === 'TRIVIA') {
        if (triviaMode === 'RESCUE' && !isProcessingAnswer) {
            // Actively calculate the time being burned reading the question
            let timeSpent = Date.now() - triviaStartTime;
            let framesSpent = Math.floor((timeSpent / 1000) * 60);
            let displayFrames = levelFrames + framesSpent;
            
            let targetFrames = activeMode === 'PRACTICE' ? 10800 : (1800 + ((level - 1) * 300));
            let remainingSeconds = Math.ceil((targetFrames - displayFrames) / 60);
            if (remainingSeconds < 0) remainingSeconds = 0;
            
            let minutes = Math.floor(remainingSeconds / 60);
            let seconds = remainingSeconds % 60;
            let timeDisplay = document.getElementById('time-display');
            if (timeDisplay) timeDisplay.innerText = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
            
            // If they burn through all their time reading the repair question!
            if (remainingSeconds <= 0) {
                isProcessingAnswer = true;
                document.getElementById('trivia-status').innerText = "TIME OUT! Repair bypassed.";
                document.getElementById('trivia-status').style.color = '#ff5555';
                
                // Keep the time synced up
                levelFrames += framesSpent;
                
                setTimeout(() => {
                    document.getElementById('trivia-screen').classList.add('hidden');
                    triggerBossTrivia(); 
                }, 1500);
            }
        }
    }
    
    animationId = requestAnimationFrame(gameLoop);
}
