const translations = {
  zh: {
    brand: "人生週曆",
    print: "列印",
    languageLabel: "語言",
    account: "登出",
    intro: "每一格是一週。記錄大事、標記狀態，列印時濃縮成一頁 A4。",
    loginCloudKicker: "登入",
    loginCloudTitle: "一週一格",
    loginCloudIntro: "把一生拆成可以回望的週。",
    loginProfileKicker: "首次設定",
    loginProfileTitle: "建立你的週曆",
    loginProfileIntro: "填寫名字、生日與預期壽命。已走過的週會先標成黑色，之後每格都能再修改。",
    loginSubmitCreate: "進入週曆",
    loginDemo: "使用示範資料",
    loginLocal: "記錄重要事件、標記當週狀態，最後把完整人生濃縮成一張 A4。",
    authTitle: "帳號",
    authIntro: "選擇登入方式。",
    authEmail: "Email",
    authPassword: "密碼",
    authGoogle: "使用 Google 登入",
    authSignIn: "登入",
    authSignUp: "建立帳號",
    authSignOut: "登出",
    authPrompt: "",
    authWorking: "處理中...",
    authNeedSession: "請先登入或建立帳號。",
    authConnected: "已登入 {email}",
    authSignedOut: "已登出。",
    authCheckEmail: "帳號已建立。如果你的 Supabase 專案要求 Email 確認，請先到信箱完成確認。",
    cloudLoading: "正在讀取雲端週曆...",
    cloudSynced: "已同步到 Supabase。",
    cloudSyncFailed: "Supabase 同步失敗：{message}",
    metricLived: "已活",
    metricLeft: "剩餘",
    metricProgress: "進度",
    fieldName: "名字",
    fieldBirthday: "生日",
    fieldLifespan: "預期壽命",
    viewLabel: "視圖",
    rangeDecade: "十年",
    rangeYear: "今年",
    rangeLife: "全人生",
    mobileSettings: "設定",
    mobileDone: "完成",
    mobileWeekDetails: "週記錄",
    mobileClosePanel: "關閉面板",
    overview: "人生總覽",
    resetZoom: "重置",
    selectedLabel: "週",
    eventLabel: "週內容",
    noteLabel: "新增紀錄",
    saveNote: "儲存紀錄",
    savedButton: "已儲存",
    currentRecords: "紀錄",
    noRecordsYet: "尚無紀錄。",
    deleteRecord: "刪除",
    noteIdle: "先選一週。",
    noteSelectedEmpty: "",
    noteSelectedSaved: "",
    noteSaving: "正在儲存...",
    noteSaved: "已新增到這一週。",
    noteDeleted: "已刪除這筆紀錄。",
    noteRequired: "先寫一點內容，再儲存。",
    noteColorSaved: "已更新。",
    noteSyncFailed: "已存在本機，但雲端同步失敗。",
    moodLabel: "當週心情顏色",
    moodCalm: "平靜",
    moodBright: "明亮",
    moodLow: "低潮",
    moodClear: "無顏色",
    noWeek: "還沒選週",
    hoverHint: "選一格。",
    noEvent: "尚未記錄事件",
    emptyWeek: "這週仍是空白。",
    yourNote: "你的週筆記",
    pastWeek: "",
    futureWeek: "",
    weeks: "週",
    weekTitle: "{age} 歲第 {week} 週",
    printTitle: "{name} 的人生週曆 · {start} 到 {end}",
    notePlaceholder: "寫下這週的一件事。"
  },
  en: {
    brand: "Life Calendar",
    print: "Print",
    languageLabel: "Language",
    account: "Sign out",
    intro: "One square is one week. Record events, mark states, and print the full map on one A4 sheet.",
    loginCloudKicker: "Sign in",
    loginCloudTitle: "One Week, One Square",
    loginCloudIntro: "A quiet map for seeing the shape of a life.",
    loginProfileKicker: "First setup",
    loginProfileTitle: "Build Your Calendar",
    loginProfileIntro: "Set your name, birthday, and expected lifespan. Lived weeks start in black and can be edited later.",
    loginSubmitCreate: "Enter calendar",
    loginDemo: "Use demo profile",
    loginLocal: "Record major events, mark each week, and print the whole map on one A4 sheet.",
    authTitle: "Account",
    authIntro: "Choose a sign-in method.",
    authEmail: "Email",
    authPassword: "Password",
    authGoogle: "Continue with Google",
    authSignIn: "Sign in",
    authSignUp: "Create account",
    authSignOut: "Sign out",
    authPrompt: "",
    authWorking: "Working...",
    authNeedSession: "Please sign in or create an account first.",
    authConnected: "Signed in as {email}",
    authSignedOut: "Signed out.",
    authCheckEmail: "Account created. If your Supabase project requires email confirmation, check your inbox before signing in.",
    cloudLoading: "Loading cloud calendar...",
    cloudSynced: "Synced to Supabase.",
    cloudSyncFailed: "Supabase sync failed: {message}",
    metricLived: "Lived",
    metricLeft: "Left",
    metricProgress: "Progress",
    fieldName: "Name",
    fieldBirthday: "Birthday",
    fieldLifespan: "Expected lifespan",
    viewLabel: "View",
    rangeDecade: "Decade",
    rangeYear: "Year",
    rangeLife: "Life",
    mobileSettings: "Settings",
    mobileDone: "Done",
    mobileWeekDetails: "Week records",
    mobileClosePanel: "Close panel",
    overview: "Life overview",
    resetZoom: "Reset",
    selectedLabel: "Week",
    eventLabel: "Week content",
    noteLabel: "New record",
    saveNote: "Save record",
    savedButton: "Saved",
    currentRecords: "Records",
    noRecordsYet: "No records yet.",
    deleteRecord: "Delete",
    noteIdle: "Select a week.",
    noteSelectedEmpty: "",
    noteSelectedSaved: "",
    noteSaving: "Saving...",
    noteSaved: "Added to this week.",
    noteDeleted: "Record deleted.",
    noteRequired: "Write a record before saving.",
    noteColorSaved: "Updated.",
    noteSyncFailed: "Saved locally, but cloud sync failed.",
    moodLabel: "Week mood color",
    moodCalm: "Calm",
    moodBright: "Bright",
    moodLow: "Low",
    moodClear: "No color",
    noWeek: "No week selected",
    hoverHint: "Select a square.",
    noEvent: "No event yet",
    emptyWeek: "This week is empty.",
    yourNote: "Your note",
    pastWeek: "",
    futureWeek: "",
    weeks: "weeks",
    weekTitle: "Age {age}, week {week}",
    printTitle: "{name}'s Life Calendar · {start} to {end}",
    notePlaceholder: "Write one thing from this week."
  }
};

const builtInEvents = {};

const storageKey = "lifeCalendarApp.v1";
const minLifespan = 10;
const maxLifespan = 100;
const defaultLifespan = 100;
const zoomButtonFactor = 1.22;
const wheelZoomSensitivity = 0.0105;
const mobileMedia = window.matchMedia("(max-width: 900px)");

const state = {
  lang: "zh",
  range: "decade",
  selectedWeek: null,
  hoveredWeek: null,
  notes: {},
  moods: {},
  profileReady: false,
  loginOpen: false,
  cloud: {
    enabled: false,
    client: null,
    session: null,
    user: null,
    profileSaveTimer: null,
    hydrating: false,
    signingOut: false
  },
  authLoading: true,
  viewBox: null,
  targetViewBox: null,
  fitViewBox: null,
  mapBounds: { x: 0, y: 0, width: 1, height: 1 },
  dragging: false,
  dragStart: null,
  longPressTimer: null,
  longPressTarget: null,
  longPressTriggered: false,
  touchPreviewCell: null,
  ignoreNextClick: false,
  raf: null,
  previousPrintRange: null,
  wheelZoomDelta: 0,
  wheelZoomPoint: null,
  wheelZoomRaf: null,
  wheelPanX: 0,
  wheelPanY: 0,
  wheelPanRaf: null,
  saveButtonTimer: null,
  mobilePanel: null,
  mobileTrigger: null,
  currentCellIndex: null,
  dayRefreshTimer: null
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const els = {
  loginScreen: $("#loginScreen"),
  loginKicker: $("#loginKicker"),
  loginTitle: $("#loginTitle"),
  loginIntro: $("#loginIntro"),
  authPanel: $("#authPanel"),
  authForm: $("#authForm"),
  authEmailInput: $("#authEmailInput"),
  authPasswordInput: $("#authPasswordInput"),
  authGoogle: $("#authGoogle"),
  authSignIn: $("#authSignIn"),
  authSignUp: $("#authSignUp"),
  profileAccount: $("#profileAccount"),
  profileAccountEmail: $("#profileAccountEmail"),
  profileSignOut: $("#profileSignOut"),
  authStatus: $("#authStatus"),
  loginForm: $("#loginForm"),
  loginNameInput: $("#loginNameInput"),
  loginBirthdayInput: $("#loginBirthdayInput"),
  loginLifespanInput: $("#loginLifespanInput"),
  loginSubmit: $("#loginSubmit"),
  loginDemo: $("#loginDemo"),
  nameInput: $("#nameInput"),
  birthdayInput: $("#birthdayInput"),
  lifespanInput: $("#lifespanInput"),
  decadeInput: $("#decadeInput"),
  headlineName: $("#headlineName"),
  weeksLived: $("#weeksLived"),
  weeksLeft: $("#weeksLeft"),
  lifeProgress: $("#lifeProgress"),
  calendarStage: $("#calendarStage"),
  calendarMap: $("#calendarMap"),
  hoverCard: $("#hoverCard"),
  zoomReadout: $("#zoomReadout"),
  printTitle: $("#printTitle"),
  printSheet: $("#printSheet"),
  printSheetLabel: $("#printSheetLabel"),
  printSheetName: $("#printSheetName"),
  printLivedLabel: $("#printLivedLabel"),
  printLivedValue: $("#printLivedValue"),
  printLivedUnit: $("#printLivedUnit"),
  printLeftLabel: $("#printLeftLabel"),
  printLeftValue: $("#printLeftValue"),
  printLeftUnit: $("#printLeftUnit"),
  printProgressLabel: $("#printProgressLabel"),
  printProgressValue: $("#printProgressValue"),
  printMap: $("#printMap"),
  selectedTitle: $("#selectedTitle"),
  selectedMeta: $("#selectedMeta"),
  eventCard: $("#eventCard"),
  recordsSection: $("#recordsSection"),
  moodSection: $("#moodSection"),
  noteInput: $("#noteInput"),
  recordEmpty: $("#recordEmpty"),
  recordList: $("#recordList"),
  noteStatus: $("#noteStatus"),
  languageToggle: $("#languageToggle"),
  languageValue: $("#languageValue"),
  accountButton: $("#accountButton"),
  printButton: $("#printButton"),
  saveNote: $("#saveNote"),
  rangeDecade: $("#rangeDecade"),
  rangeYear: $("#rangeYear"),
  rangeLife: $("#rangeLife"),
  resetZoom: $("#resetZoom"),
  settingsPanel: $("#settingsPanel"),
  inspector: $("#journal"),
  mobileBackdrop: $("#mobileBackdrop"),
  mobileSettingsOpen: $("#mobileSettingsOpen"),
  mobileSettingsClose: $("#mobileSettingsClose"),
  mobileInspectorClose: $("#mobileInspectorClose"),
  mobileRangeButtons: $$("[data-mobile-range]")
};

loadSavedState();
syncLoginFields();
updateLoginVisibility();
renderCalendar({ fit: true, focusCurrent: true });
bindEvents();
initCloud();
scheduleDayRefresh();

function loadSavedState() {
  const saved = JSON.parse(localStorage.getItem(storageKey) || "null");
  if (!saved) return;

  els.nameInput.value = saved.name || els.nameInput.value;
  els.birthdayInput.value = saved.birthday || els.birthdayInput.value;
  els.lifespanInput.value = saved.lifespan || els.lifespanInput.value;
  els.decadeInput.value = saved.decadeStart || els.decadeInput.value;
  state.lang = saved.lang || state.lang;
  state.notes = normalizeNotes(saved.notes || {});
  state.moods = saved.moods || {};
  state.profileReady = Boolean(saved.profileReady || (saved.birthday && saved.lifespan));
}

function bindEvents() {
  els.authForm.addEventListener("submit", (event) => {
    event.preventDefault();
    authenticateWithSupabase("signIn");
  });
  els.authGoogle.addEventListener("click", signInWithGoogle);
  els.authSignIn.addEventListener("click", () => authenticateWithSupabase("signIn"));
  els.authSignUp.addEventListener("click", () => authenticateWithSupabase("signUp"));
  els.profileSignOut.addEventListener("click", signOutOfSupabase);

  els.loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    applyLoginProfile();
  });

  els.loginDemo.addEventListener("click", () => {
    els.loginNameInput.value = "Sunny";
    els.loginBirthdayInput.value = "1996-05-20";
    els.loginLifespanInput.value = String(defaultLifespan);
    applyLoginProfile();
  });

  [els.nameInput, els.birthdayInput, els.lifespanInput, els.decadeInput].forEach((input) => {
    input.addEventListener("input", () => {
      renderCalendar({ fit: true, focusCurrent: true });
      syncLoginFields();
      saveState();
    });
  });

  els.languageToggle.addEventListener("click", () => {
    state.lang = state.lang === "zh" ? "en" : "zh";
    renderCalendar({ fit: false });
    updateLoginVisibility();
    saveState();
  });

  els.accountButton.addEventListener("click", () => {
    closeMobilePanels({ restoreFocus: false });
    if (state.cloud.enabled && state.cloud.session) {
      signOutOfSupabase();
      return;
    }

    state.profileReady = false;
    state.loginOpen = true;
    updateLoginVisibility();
    updateText();
    saveState({ cloud: false });
  });

  els.printButton.addEventListener("click", () => {
    closeMobilePanels({ restoreFocus: false });
    printFullLife();
  });

  els.rangeDecade.addEventListener("click", () => setRange("decade"));
  els.rangeYear.addEventListener("click", () => setRange("year"));
  els.rangeLife.addEventListener("click", () => setRange("life"));
  els.mobileRangeButtons.forEach((button) => {
    button.addEventListener("click", () => setRange(button.dataset.mobileRange));
  });

  els.mobileSettingsOpen.addEventListener("click", (event) => {
    openMobilePanel("settings", { focus: event.detail === 0 });
  });
  els.mobileSettingsClose.addEventListener("click", (event) => {
    closeMobilePanels({ restoreFocus: event.detail === 0 });
  });
  els.mobileInspectorClose.addEventListener("click", (event) => {
    closeMobilePanels({ restoreFocus: event.detail === 0 });
  });
  els.mobileBackdrop.addEventListener("click", () => closeMobilePanels({ restoreFocus: false }));

  $("#zoomIn").addEventListener("click", () => {
    const rect = els.calendarStage.getBoundingClientRect();
    zoomAt(rect.left + rect.width / 2, rect.top + rect.height / 2, 1 / zoomButtonFactor);
  });

  $("#zoomOut").addEventListener("click", () => {
    const rect = els.calendarStage.getBoundingClientRect();
    zoomAt(rect.left + rect.width / 2, rect.top + rect.height / 2, zoomButtonFactor);
  });

  $("#resetZoom").addEventListener("click", () => fitMap(false));

  els.saveNote.addEventListener("click", async () => {
    if (state.selectedWeek === null) return;
    const selectedWeek = state.selectedWeek;
    const value = els.noteInput.value.trim();
    if (!value) {
      setNoteStatus(t("noteRequired"), "error");
      els.noteInput.focus();
      return;
    }

    const records = getWeekRecords(selectedWeek);
    records.push(createRecord(value));
    state.notes[selectedWeek] = records;
    els.noteInput.value = "";
    renderMap(getModel());
    renderSelectedDetail(selectedWeek);
    setNoteStatus(t("noteSaving"), "saving");
    saveState();
    const synced = await saveWeekToCloud(selectedWeek);
    setNoteStatus(t(synced ? "noteSaved" : "noteSyncFailed"), synced ? "success" : "error");
    if (synced) flashSaveButton();
  });

  els.recordList.addEventListener("click", async (event) => {
    const deleteButton = event.target.closest("[data-delete-record]");
    if (!deleteButton || state.selectedWeek === null) return;

    const selectedWeek = state.selectedWeek;
    const recordId = deleteButton.dataset.deleteRecord;
    const records = getWeekRecords(selectedWeek).filter((record) => record.id !== recordId);
    if (records.length) state.notes[selectedWeek] = records;
    else delete state.notes[selectedWeek];

    renderMap(getModel());
    renderSelectedDetail(selectedWeek);
    setNoteStatus(t("noteSaving"), "saving");
    saveState();
    const synced = await saveWeekToCloud(selectedWeek);
    setNoteStatus(t(synced ? "noteDeleted" : "noteSyncFailed"), synced ? "success" : "error");
  });

  $$(".mood-grid button").forEach((button) => {
    button.addEventListener("click", async () => {
      if (state.selectedWeek === null) return;
      const selectedWeek = state.selectedWeek;
      const mood = button.dataset.mood || "blank";
      state.moods[selectedWeek] = mood;
      updateWeekClass(selectedWeek);
      renderSelectedDetail(selectedWeek);
      setNoteStatus(t("noteSaving"), "saving");
      saveState();
      const synced = await saveWeekToCloud(selectedWeek);
      setNoteStatus(t(synced ? "noteColorSaved" : "noteSyncFailed"), synced ? "success" : "error");
    });
  });

  els.calendarStage.addEventListener("pointerdown", handlePointerDown);
  els.calendarStage.addEventListener("pointermove", handlePointerMove);
  els.calendarStage.addEventListener("pointerup", endDrag);
  els.calendarStage.addEventListener("pointercancel", endDrag);

  els.calendarMap.addEventListener("mousemove", handleMapHover);
  els.calendarMap.addEventListener("mouseleave", () => {
    if (state.touchPreviewCell) return;
    els.hoverCard.classList.remove("visible");
    state.hoveredWeek = null;
    renderSelectedDetail(state.selectedWeek);
  });
  els.calendarMap.addEventListener("click", (event) => {
    if (state.ignoreNextClick) {
      state.ignoreNextClick = false;
      return;
    }
    hideTouchPreview();
    const cell = event.target.closest(".week-cell");
    if (!cell) return;
    selectWeek(Number(cell.dataset.week));
  });

  window.addEventListener("resize", () => fitMap(true));
  mobileMedia.addEventListener("change", syncMobileMode);
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && state.mobilePanel) closeMobilePanels();
  });
  window.addEventListener("beforeprint", preparePrint);
  window.addEventListener("afterprint", restoreAfterPrint);
  syncMobileMode();
}

function openMobilePanel(panel, options = {}) {
  if (!mobileMedia.matches) return;
  hideTouchPreview();
  const isSettings = panel === "settings";
  state.mobilePanel = panel;
  state.mobileTrigger = isSettings ? els.mobileSettingsOpen : document.activeElement;
  document.body.classList.toggle("mobile-settings-open", isSettings);
  document.body.classList.toggle("mobile-inspector-open", !isSettings);
  document.body.classList.add("mobile-panel-open");
  els.mobileBackdrop.hidden = false;
  els.mobileSettingsOpen.setAttribute("aria-expanded", String(isSettings));
  els.settingsPanel.setAttribute("aria-hidden", String(!isSettings));
  els.inspector.setAttribute("aria-hidden", String(isSettings));

  if (options.focus === false) return;
  window.requestAnimationFrame(() => {
    (isSettings ? els.mobileSettingsClose : els.mobileInspectorClose).focus();
  });
}

function closeMobilePanels(options = {}) {
  const trigger = state.mobileTrigger;
  state.mobilePanel = null;
  state.mobileTrigger = null;
  document.body.classList.remove("mobile-settings-open", "mobile-inspector-open", "mobile-panel-open");
  els.mobileBackdrop.hidden = true;
  els.mobileSettingsOpen.setAttribute("aria-expanded", "false");

  if (mobileMedia.matches) {
    els.settingsPanel.setAttribute("aria-hidden", "true");
    els.inspector.setAttribute("aria-hidden", "true");
  } else {
    els.settingsPanel.removeAttribute("aria-hidden");
    els.inspector.removeAttribute("aria-hidden");
  }

  if (options.restoreFocus === false || !trigger?.isConnected) return;
  trigger.focus({ preventScroll: true });
}

function syncMobileMode() {
  hideTouchPreview();
  closeMobilePanels({ restoreFocus: false });
  window.requestAnimationFrame(() => fitMap(true));
}

async function initCloud() {
  const config = window.LIFE_CALENDAR_SUPABASE || {};
  const hasConfig = Boolean(config.url && config.anonKey);
  const hasSdk = Boolean(window.supabase?.createClient);

  if (!hasConfig || !hasSdk) {
    state.cloud.enabled = false;
    updateAuthUi();
    updateLoginVisibility();
    setAuthLoading(false);
    return;
  }

  state.cloud.enabled = true;
  state.cloud.client = window.supabase.createClient(config.url, config.anonKey);
  updateAuthUi();
  setAuthStatus(t("cloudLoading"));

  const { data, error } = await state.cloud.client.auth.getSession();
  if (error) {
    setAuthStatus(t("cloudSyncFailed", { message: error.message }), true);
    setAuthLoading(false);
    return;
  }

  await handleCloudSession(data.session);
  state.cloud.client.auth.onAuthStateChange((_event, session) => {
    handleCloudSession(session);
  });
  setAuthLoading(false);
}

async function authenticateWithSupabase(mode) {
  if (!state.cloud.enabled || !state.cloud.client) {
    setAuthStatus(t("cloudSyncFailed", { message: "Supabase is not configured" }), true);
    return;
  }

  const email = els.authEmailInput.value.trim();
  const password = els.authPasswordInput.value;
  if (!email || !password) {
    setAuthStatus(t("authNeedSession"), true);
    return;
  }

  setAuthStatus(t("authWorking"));
  const request = mode === "signUp"
    ? state.cloud.client.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: getAppRedirectUrl() }
    })
    : state.cloud.client.auth.signInWithPassword({ email, password });
  const { data, error } = await request;

  if (error) {
    setAuthStatus(t("cloudSyncFailed", { message: error.message }), true);
    return;
  }

  if (data.session) {
    await handleCloudSession(data.session);
    return;
  }

  setAuthStatus(t("authCheckEmail"));
}

async function signInWithGoogle() {
  if (!state.cloud.enabled || !state.cloud.client) {
    setAuthStatus(t("cloudSyncFailed", { message: "Supabase is not configured" }), true);
    return;
  }

  setAuthStatus(t("authWorking"));
  const { error } = await state.cloud.client.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: getAppRedirectUrl() }
  });

  if (error) {
    setAuthStatus(t("cloudSyncFailed", { message: error.message }), true);
  }
}

function getAppRedirectUrl() {
  const configured = window.LIFE_CALENDAR_SUPABASE?.redirectUrl?.trim();
  if (configured) return configured.replace(/\/$/, "");

  const currentPath = window.location.pathname === "/" ? "" : window.location.pathname.replace(/\/$/, "");
  return `${window.location.origin}${currentPath}`;
}

async function signOutOfSupabase() {
  if (!state.cloud.enabled || !state.cloud.client) return;
  state.cloud.signingOut = true;
  setAuthStatus(t("authWorking"));
  const { error } = await state.cloud.client.auth.signOut();
  if (error) {
    state.cloud.signingOut = false;
    setAuthStatus(t("cloudSyncFailed", { message: error.message }), true);
    return;
  }

  state.cloud.session = null;
  state.cloud.user = null;
  state.profileReady = false;
  state.loginOpen = true;
  resetCloudProfileForm();
  clearAuthForm();
  updateAuthUi();
  updateLoginVisibility();
  setAuthStatus("");
  state.cloud.signingOut = false;
  saveState({ cloud: false });
}

async function handleCloudSession(session) {
  if (state.cloud.signingOut && session) return;
  state.cloud.session = session;
  state.cloud.user = session?.user || null;
  updateAuthUi();
  updateLoginVisibility();

  if (!session?.user) {
    if (!state.cloud.signingOut) setAuthStatus(t("authPrompt"));
    return;
  }

  setAuthStatus(t("cloudLoading"));
  const loaded = await loadCloudCalendar();
  if (loaded) {
    state.profileReady = true;
    state.loginOpen = false;
    saveState({ cloud: false });
    updateLoginVisibility();
    renderCalendar({ fit: true, focusCurrent: true });
  } else {
    state.profileReady = false;
    state.loginOpen = true;
    updateLoginVisibility();
  }
  setAuthStatus("");
}

async function loadCloudCalendar() {
  const userId = state.cloud.user?.id;
  if (!state.cloud.client || !userId) return false;

  state.cloud.hydrating = true;
  const { data: profiles, error: profileError } = await state.cloud.client
    .from("life_calendar_profiles")
    .select("name,birthday,lifespan,decade_start,lang")
    .eq("user_id", userId)
    .limit(1);

  if (profileError) {
    state.cloud.hydrating = false;
    setAuthStatus(t("cloudSyncFailed", { message: profileError.message }), true);
    return false;
  }

  const profile = profiles?.[0];
  if (!profile) {
    resetCloudProfileForm();
    state.cloud.hydrating = false;
    return false;
  }

  els.nameInput.value = profile.name || els.nameInput.value;
  els.birthdayInput.value = profile.birthday || els.birthdayInput.value;
  els.lifespanInput.value = profile.lifespan || defaultLifespan;
  els.decadeInput.value = profile.decade_start || 0;
  state.lang = profile.lang || state.lang;

  const { data: weeks, error: weeksError } = await state.cloud.client
    .from("life_calendar_weeks")
    .select("week_index,note,mood")
    .eq("user_id", userId);

  if (weeksError) {
    state.cloud.hydrating = false;
    setAuthStatus(t("cloudSyncFailed", { message: weeksError.message }), true);
    return false;
  }

  state.notes = {};
  state.moods = {};
  (weeks || []).forEach((week) => {
    const records = normalizeWeekRecords(week.note);
    if (records.length) state.notes[week.week_index] = records;
    if (week.mood) state.moods[week.week_index] = week.mood;
  });

  syncLoginFields();
  state.cloud.hydrating = false;
  return true;
}

function updateAuthUi() {
  updateLoginCopyMode();
  document.body.classList.toggle("cloud-enabled", state.cloud.enabled);
  const needsCloudAuth = state.cloud.enabled && !state.cloud.session;
  const signedIn = Boolean(state.cloud.session);

  els.authPanel.hidden = !state.cloud.enabled || signedIn;
  els.loginForm.hidden = needsCloudAuth;
  els.loginForm.classList.toggle("is-disabled", needsCloudAuth);
  els.loginDemo.hidden = state.cloud.enabled;
  els.profileAccount.hidden = true;

  if (!state.cloud.enabled) return;

  els.authEmailInput.disabled = signedIn;
  els.authPasswordInput.disabled = signedIn;
  els.authGoogle.hidden = signedIn;
  els.authSignIn.hidden = signedIn;
  els.authSignUp.hidden = signedIn;

  if (signedIn) {
    els.authEmailInput.value = state.cloud.user?.email || els.authEmailInput.value;
    els.profileAccountEmail.textContent = t("authConnected", { email: state.cloud.user?.email || "" });
  }
}

function setAuthStatus(message, isError = false) {
  els.authStatus.textContent = message || "";
  els.authStatus.classList.toggle("is-error", Boolean(isError));
}

function updateLoginCopyMode() {
  const needsCloudAuth = state.cloud.enabled && !state.cloud.session;
  const prefix = needsCloudAuth ? "loginCloud" : "loginProfile";
  els.loginKicker.hidden = true;
  els.loginKicker.dataset.i18n = needsCloudAuth ? "loginCloudKicker" : "loginProfileKicker";
  els.loginTitle.dataset.i18n = `${prefix}Title`;
  els.loginIntro.dataset.i18n = `${prefix}Intro`;
  els.loginSubmit.dataset.i18n = "loginSubmitCreate";
  els.loginTitle.textContent = t(els.loginTitle.dataset.i18n);
  els.loginIntro.textContent = t(els.loginIntro.dataset.i18n);
  els.loginSubmit.textContent = t(els.loginSubmit.dataset.i18n);
}

function syncLoginFields() {
  els.loginNameInput.value = els.nameInput.value;
  els.loginBirthdayInput.value = els.birthdayInput.value;
  els.loginLifespanInput.value = els.lifespanInput.value;
}

function resetCloudProfileForm() {
  const emailName = state.cloud.user?.email?.split("@")[0] || "";
  els.nameInput.value = emailName;
  els.birthdayInput.value = "";
  els.lifespanInput.value = String(defaultLifespan);
  els.decadeInput.value = "0";
  state.selectedWeek = null;
  state.hoveredWeek = null;
  state.notes = {};
  state.moods = {};
  syncLoginFields();
}

function clearAuthForm() {
  els.authEmailInput.value = "";
  els.authPasswordInput.value = "";
  els.profileAccountEmail.textContent = "";
}

function updateLoginVisibility() {
  const needsCloudAuth = state.cloud.enabled && !state.cloud.session;
  document.body.classList.toggle("needs-login", needsCloudAuth || !state.profileReady || state.loginOpen);
}

function setAuthLoading(loading) {
  state.authLoading = Boolean(loading);
  document.body.classList.toggle("auth-loading", state.authLoading);
}

function applyLoginProfile() {
  if (typeof els.loginForm.reportValidity === "function" && !els.loginForm.reportValidity()) return;
  if (state.cloud.enabled && !state.cloud.session) {
    setAuthStatus(t("authNeedSession"), true);
    return;
  }

  const birthday = new Date(`${els.loginBirthdayInput.value}T00:00:00`);
  const lifespan = clampInteger(els.loginLifespanInput.value, minLifespan, maxLifespan);
  const currentAge = Number.isNaN(birthday.getTime()) ? 0 : currentAgeFromBirthday(birthday);
  const decadeStart = Math.floor(Math.min(currentAge, lifespan - 1) / 10) * 10;

  els.nameInput.value = els.loginNameInput.value.trim() || "Sunny";
  els.birthdayInput.value = els.loginBirthdayInput.value || "1996-05-20";
  els.lifespanInput.value = String(lifespan);
  els.decadeInput.value = String(decadeStart);

  state.profileReady = true;
  state.loginOpen = false;
  state.range = "decade";
  state.viewBox = null;
  state.fitViewBox = null;
  updateLoginVisibility();
  renderCalendar({ fit: true, focusCurrent: true });
  saveState();
}

function t(key, params = {}) {
  const dictionary = translations[state.lang] || translations.zh;
  const value = Object.prototype.hasOwnProperty.call(dictionary, key) ? dictionary[key] : key;
  return String(value).replace(/\{(\w+)\}/g, (_, name) => params[name] ?? "");
}

function clamp(value, min, max) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return min;
  return Math.min(max, Math.max(min, numeric));
}

function clampInteger(value, min, max) {
  return Math.trunc(clamp(value, min, max));
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function addYears(date, years) {
  const targetYear = date.getFullYear() + years;
  const month = date.getMonth();
  const day = date.getDate();
  const lastDay = new Date(targetYear, month + 1, 0).getDate();
  const next = new Date(date);
  next.setDate(1);
  next.setFullYear(targetYear);
  next.setMonth(month);
  next.setDate(Math.min(day, lastDay));
  return next;
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function calendarDayNumber(date) {
  return Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000);
}

function daysBetween(start, end) {
  return Math.max(0, calendarDayNumber(end) - calendarDayNumber(start));
}

function currentAgeFromBirthday(birthday, today = new Date()) {
  if (!birthday || Number.isNaN(birthday.getTime())) return 0;
  let age = today.getFullYear() - birthday.getFullYear();
  if (today < addYears(birthday, age)) age -= 1;
  return Math.max(0, age);
}

function lifeCellIndexForDate(birthday, date, lifespan) {
  if (!birthday || Number.isNaN(birthday.getTime()) || date < birthday) return -1;
  const totalCells = lifespan * 52;
  const endDate = addYears(birthday, lifespan);
  if (date >= endDate) return totalCells;

  const age = Math.min(lifespan - 1, currentAgeFromBirthday(birthday, date));
  const ageStart = addYears(birthday, age);
  const ageEnd = addYears(birthday, age + 1);
  const elapsedDays = daysBetween(ageStart, date);
  const ageDays = Math.max(1, daysBetween(ageStart, ageEnd));
  const weekInAge = clampInteger(Math.ceil((elapsedDays + 1) * 52 / ageDays) - 1, 0, 51);
  return age * 52 + weekInAge;
}

function weekDateRange(birthday, index) {
  const age = Math.floor(index / 52);
  const week = index % 52;
  const ageStart = addYears(birthday, age);
  const ageEnd = addYears(birthday, age + 1);
  const ageDays = Math.max(1, daysBetween(ageStart, ageEnd));
  const startOffset = Math.floor(week * ageDays / 52);
  const endOffset = Math.max(startOffset, Math.floor((week + 1) * ageDays / 52) - 1);
  return {
    start: addDays(ageStart, startOffset),
    end: addDays(ageStart, endOffset)
  };
}

function formatDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatNumber(value) {
  const locale = state.lang === "zh" ? "zh-Hant-TW" : "en-US";
  return new Intl.NumberFormat(locale).format(value);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function makeRecordId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function createRecord(text) {
  return {
    id: makeRecordId(),
    text,
    createdAt: new Date().toISOString()
  };
}

function normalizeNotes(notes) {
  const normalized = {};
  Object.entries(notes || {}).forEach(([week, value]) => {
    const records = normalizeWeekRecords(value);
    if (records.length) normalized[week] = records;
  });
  return normalized;
}

function normalizeWeekRecords(value) {
  if (!value) return [];

  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!trimmed) return [];

    if (trimmed.startsWith("[")) {
      try {
        return normalizeWeekRecords(JSON.parse(trimmed));
      } catch {
        return [createRecord(trimmed)];
      }
    }

    return [createRecord(trimmed)];
  }

  if (!Array.isArray(value)) return [];

  return value
    .map((record) => {
      if (typeof record === "string") return createRecord(record.trim());
      const text = String(record?.text || "").trim();
      if (!text) return null;
      return {
        id: record.id || makeRecordId(),
        text,
        createdAt: record.createdAt || new Date().toISOString()
      };
    })
    .filter(Boolean);
}

function getWeekRecords(index) {
  return normalizeWeekRecords(state.notes[index]);
}

function hasWeekRecords(index) {
  return getWeekRecords(index).length > 0;
}

function serializeWeekRecords(records) {
  const normalized = normalizeWeekRecords(records);
  return normalized.length ? JSON.stringify(normalized) : "";
}

function formatRecordPreview(records) {
  const normalized = normalizeWeekRecords(records);
  if (!normalized.length) return "";
  return normalized[normalized.length - 1].text;
}

function getModel() {
  const birthday = new Date(`${els.birthdayInput.value}T00:00:00`);
  const lifespan = clampInteger(els.lifespanInput.value || defaultLifespan, minLifespan, maxLifespan);
  const maxDecadeStart = Math.max(0, Math.floor((lifespan - 1) / 10) * 10);
  const today = startOfDay(new Date());
  const validBirthday = !Number.isNaN(birthday.getTime());
  const endDate = validBirthday ? addYears(birthday, lifespan) : null;
  const totalDays = validBirthday ? daysBetween(birthday, endDate) : 0;
  const elapsedDays = validBirthday ? Math.min(totalDays, daysBetween(birthday, today)) : 0;
  const remainingDays = validBirthday && today < endDate ? daysBetween(today, endDate) : 0;
  const totalWeeks = Math.ceil(totalDays / 7);
  const weeksLived = Math.floor(elapsedDays / 7);
  const currentAge = currentAgeFromBirthday(birthday, today);
  const decadeStart = Math.floor(Math.min(currentAge, Math.max(0, lifespan - 1)) / 10) * 10;

  return {
    name: els.nameInput.value.trim() || "Sunny",
    birthday,
    lifespan,
    decadeStart,
    maxDecadeStart,
    totalWeeks,
    weeksLived,
    weeksLeft: Math.ceil(remainingDays / 7),
    progress: totalDays ? elapsedDays / totalDays * 100 : 0,
    currentCellIndex: validBirthday ? lifeCellIndexForDate(birthday, today, lifespan) : -1,
    currentAge,
    endDate
  };
}

function visibleYears(data) {
  if (state.range === "year") return [data.currentAge, Math.min(data.lifespan, data.currentAge + 1)];
  if (state.range === "life") return [0, data.lifespan];
  const start = Math.min(data.decadeStart, Math.max(0, data.lifespan - 1));
  return [start, Math.min(data.lifespan, start + 10)];
}

function weekRange(data, index) {
  if (!data.birthday || Number.isNaN(data.birthday.getTime())) return "";
  const range = weekDateRange(data.birthday, index);
  return `${formatDateKey(range.start)} - ${formatDateKey(range.end)}`;
}

function getWeekInfo(index) {
  const event = builtInEvents[index];
  const records = getWeekRecords(index);
  return {
    event,
    records,
    note: formatRecordPreview(records),
    mood: state.moods[index] || ""
  };
}

function updateText() {
  document.documentElement.lang = state.lang === "zh" ? "zh-Hant" : "en";
  updateLoginCopyMode();
  $$("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  els.languageValue.textContent = state.lang === "zh" ? "EN" : "中文";
  els.noteInput.placeholder = t("notePlaceholder");
  els.mobileBackdrop.setAttribute("aria-label", t("mobileClosePanel"));
  els.mobileSettingsOpen.setAttribute("aria-label", t("mobileSettings"));
  els.mobileSettingsOpen.setAttribute("title", t("mobileSettings"));
  [els.mobileSettingsClose, els.mobileInspectorClose].forEach((button) => {
    button.setAttribute("aria-label", t("mobileDone"));
    button.setAttribute("title", t("mobileDone"));
  });
  els.resetZoom.setAttribute("aria-label", t("resetZoom"));
}

function updateNavState() {
  els.rangeDecade.setAttribute("aria-pressed", String(state.range === "decade"));
  els.rangeYear.setAttribute("aria-pressed", String(state.range === "year"));
  els.rangeLife.setAttribute("aria-pressed", String(state.range === "life"));
  els.mobileRangeButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.mobileRange === state.range));
  });
}

function setRange(range) {
  stopViewBoxAnimation();
  hideTouchPreview();
  state.range = range;
  state.viewBox = null;
  state.fitViewBox = null;
  els.calendarStage.scrollTop = 0;
  renderCalendar({ fit: true, focusCurrent: true });
}

function renderCalendar({ fit = false, focusCurrent = false } = {}) {
  updateText();
  updateNavState();

  const data = getModel();
  const currentWeekChanged = state.currentCellIndex !== null
    && state.currentCellIndex !== data.currentCellIndex;
  state.currentCellIndex = data.currentCellIndex;
  els.lifespanInput.value = data.lifespan;
  els.decadeInput.value = data.decadeStart;
  els.lifespanInput.min = minLifespan;
  els.lifespanInput.max = maxLifespan;
  els.loginLifespanInput.min = minLifespan;
  els.loginLifespanInput.max = maxLifespan;
  els.decadeInput.max = data.maxDecadeStart;
  els.headlineName.textContent = data.name;
  setMetricValue(els.weeksLived, formatNumber(data.weeksLived), t("weeks"));
  setMetricValue(els.weeksLeft, formatNumber(data.weeksLeft), t("weeks"));
  setMetricValue(els.lifeProgress, data.progress.toFixed(1), "%");
  els.printTitle.textContent = t("printTitle", {
    name: data.name,
    start: els.birthdayInput.value,
    end: data.endDate ? formatDateKey(data.endDate) : ""
  });

  renderMap(data);
  renderSelectedDetail(state.selectedWeek);
  if (fit) {
    window.requestAnimationFrame(() => {
      fitMap(true);
      if (focusCurrent || currentWeekChanged) {
        window.requestAnimationFrame(() => scrollCurrentWeekIntoView());
      }
    });
  } else if (focusCurrent || currentWeekChanged) {
    window.requestAnimationFrame(() => scrollCurrentWeekIntoView());
  }
}

function renderMap(data) {
  const [startYear, endYear] = visibleYears(data);
  const layout = getMapLayout();
  const columnWidth = layout.weeksPerRow * layout.cell + (layout.weeksPerRow - 1) * layout.gap;
  const width = layout.padding * 2 + layout.labelWidth + columnWidth;
  const nodes = [];
  const overlayNodes = [];
  let y = layout.padding;
  let renderedDecades = 0;
  const ageRowHeight = getAgeRowHeight(layout);

  for (let decade = Math.floor(startYear / 10) * 10; decade < endYear; decade += 10) {
    const from = Math.max(decade, startYear);
    const to = Math.min(decade + 10, endYear);
    if (from >= to) continue;

    if (renderedDecades > 0) y += layout.decadeGap;

    if (layout.labels) {
      const labelY = y + layout.decadeLabelHeight / 2;
      nodes.push(`<text class="svg-decade-label" x="${layout.padding}" y="${labelY}">${from}-${to - 1}</text>`);
      nodes.push(`<line class="svg-decade-rule" x1="${layout.padding + layout.labelWidth}" y1="${labelY}" x2="${width - layout.padding}" y2="${labelY}"></line>`);
      y += layout.decadeLabelHeight;
    }

    for (let age = from; age < to; age += 1) {
      const rowY = y;
      if (layout.labels) {
        nodes.push(`<text class="svg-age-label" x="${layout.padding}" y="${rowY + ageRowHeight / 2}">${age}</text>`);
      }

      for (let week = 0; week < 52; week += 1) {
        const index = age * 52 + week;
        const classes = getWeekClasses(data, index);
        const weekCol = week % layout.weeksPerRow;
        const weekRow = Math.floor(week / layout.weeksPerRow);
        const x = layout.padding + layout.labelWidth + weekCol * (layout.cell + layout.gap);
        const cellY = rowY + weekRow * (layout.cell + layout.gap);
        const label = escapeHtml(t("weekTitle", { age, week: week + 1 }));
        nodes.push(`<rect class="${classes}" data-week="${index}" x="${x}" y="${cellY}" width="${layout.cell}" height="${layout.cell}" rx="${layout.radius}" ry="${layout.radius}" role="button" aria-label="${label}"></rect>`);
        if (index === data.currentCellIndex) {
          const haloInset = Math.max(1.4, layout.cell * 0.13);
          overlayNodes.push(`<rect class="week-now-halo" x="${x - haloInset}" y="${cellY - haloInset}" width="${layout.cell + haloInset * 2}" height="${layout.cell + haloInset * 2}" rx="${layout.radius + haloInset}" ry="${layout.radius + haloInset}" aria-hidden="true"></rect>`);
        }
        if (hasWeekRecords(index)) {
          const dotRadius = Math.max(1.2, layout.cell * 0.12);
          const dotInset = Math.max(2, layout.cell * 0.18);
          nodes.push(`<circle class="week-note-dot" cx="${x + layout.cell - dotInset}" cy="${cellY + dotInset}" r="${dotRadius}"></circle>`);
        }
      }

      y += ageRowHeight + layout.rowGap;
    }

    renderedDecades += 1;
  }

  const height = Math.max(layout.cell, y - layout.rowGap + layout.padding);
  state.mapBounds = { x: 0, y: 0, width, height };
  els.calendarMap.dataset.range = state.range;
  els.calendarMap.innerHTML = nodes.concat(overlayNodes).join("");

  setViewBox(getFitViewBox(), { constrain: false });
}

function scrollCurrentWeekIntoView() {
  const cell = els.calendarMap.querySelector(".week-cell.now");
  if (!cell || els.calendarStage.scrollHeight <= els.calendarStage.clientHeight + 1) return;

  const stageRect = els.calendarStage.getBoundingClientRect();
  const cellRect = cell.getBoundingClientRect();
  const safeTop = stageRect.top + stageRect.height * 0.18;
  const safeBottom = stageRect.bottom - stageRect.height * 0.18;
  if (cellRect.top >= safeTop && cellRect.bottom <= safeBottom) return;

  const target = els.calendarStage.scrollTop
    + cellRect.top - stageRect.top
    - stageRect.height * 0.42
    + cellRect.height / 2;
  const maxScroll = Math.max(0, els.calendarStage.scrollHeight - els.calendarStage.clientHeight);
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  els.calendarStage.scrollTo({
    top: clamp(target, 0, maxScroll),
    behavior: reducedMotion ? "auto" : "smooth"
  });
}

function scheduleDayRefresh() {
  window.clearTimeout(state.dayRefreshTimer);
  const now = new Date();
  const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 2);
  state.dayRefreshTimer = window.setTimeout(() => {
    renderCalendar({ fit: true });
    scheduleDayRefresh();
  }, Math.max(1000, nextDay.getTime() - now.getTime()));
}

function getMapLayout() {
  if (state.range === "life") {
    return {
      padding: 24,
      labelWidth: 26,
      decadeLabelHeight: 13,
      cell: 7,
      gap: 2,
      rowGap: 2,
      decadeGap: 11,
      radius: 1,
      labels: true,
      weeksPerRow: 52
    };
  }

  if (state.range === "year") {
    return {
      padding: 24,
      labelWidth: 34,
      decadeLabelHeight: 18,
      cell: 31,
      gap: 6,
      rowGap: 8,
      decadeGap: 16,
      radius: 3,
      labels: true,
      weeksPerRow: mobileMedia.matches ? 7 : 13
    };
  }

  return {
    padding: 28,
    labelWidth: 38,
    decadeLabelHeight: 18,
    cell: 22,
    gap: 5,
    rowGap: 7,
    decadeGap: 18,
    radius: 2.5,
    labels: true,
    weeksPerRow: mobileMedia.matches ? 13 : 26
  };
}

function getAgeRowHeight(layout) {
  const rows = Math.ceil(52 / layout.weeksPerRow);
  return rows * layout.cell + (rows - 1) * layout.gap;
}

function setMetricValue(node, value, unit) {
  node.textContent = "";

  const number = document.createElement("span");
  number.className = "metric-number";
  number.textContent = value;

  const unitNode = document.createElement("span");
  unitNode.className = "metric-unit";
  unitNode.textContent = unit;

  node.append(number, unitNode);
}

function getWeekClasses(data, index) {
  const info = getWeekInfo(index);
  const classes = ["week-cell"];
  if (index < data.currentCellIndex) classes.push("lived");
  if (index === data.currentCellIndex) classes.push("now");
  if (info.event) classes.push("milestone");
  if (info.records.length) classes.push("has-note");
  if (["calm", "bright", "low", "blank"].includes(info.mood)) classes.push(info.mood);
  if (index === state.selectedWeek) classes.push("selected");
  return classes.join(" ");
}

function updateWeekClass(index) {
  const cell = els.calendarMap.querySelector(`[data-week="${index}"]`);
  if (!cell) return;
  cell.setAttribute("class", getWeekClasses(getModel(), index));
}

function renderSelectedDetail(index) {
  const data = getModel();
  const hasSelectedWeek = index !== null && index !== undefined && index === state.selectedWeek;
  setWeekControlsEnabled(hasSelectedWeek);

  if (index === null || index === undefined) {
    els.selectedTitle.textContent = t("noWeek");
    els.selectedMeta.textContent = t("hoverHint");
    if (els.eventCard) els.eventCard.innerHTML = `<strong>${t("noEvent")}</strong><p>${t("emptyWeek")}</p>`;
    els.recordsSection.hidden = true;
    els.moodSection.hidden = true;
    els.noteInput.value = "";
    renderRecordList(null);
    setNoteStatus("");
    return;
  }

  const age = Math.floor(index / 52);
  const week = index % 52 + 1;
  const info = getWeekInfo(index);
  const eventTitle = info.event?.title?.[state.lang];
  const eventBody = info.event?.body?.[state.lang];
  const title = eventTitle || (info.records.length ? t("yourNote") : t("noEvent"));
  const body = info.note || eventBody || (index < data.currentCellIndex ? t("pastWeek") : t("futureWeek"));

  els.selectedTitle.textContent = t("weekTitle", { age, week });
  els.selectedMeta.textContent = weekRange(data, index);
  if (els.eventCard) els.eventCard.innerHTML = `<strong>${escapeHtml(title)}</strong><p>${escapeHtml(body)}</p>`;
  els.recordsSection.hidden = false;
  els.moodSection.hidden = false;
  els.noteInput.value = "";
  renderRecordList(index);
  setNoteStatus(info.records.length ? t("noteSelectedSaved", { count: info.records.length }) : t("noteSelectedEmpty"));
}

function setWeekControlsEnabled(enabled) {
  els.noteInput.disabled = !enabled;
  els.saveNote.disabled = !enabled;
  $$(".mood-grid button").forEach((button) => {
    button.disabled = !enabled;
  });
}

function setNoteStatus(message = "", tone = "neutral") {
  els.noteStatus.textContent = message;
  els.noteStatus.dataset.tone = tone;
}

function renderRecordList(index) {
  const records = index === null || index === undefined ? [] : getWeekRecords(index);
  els.recordList.textContent = "";
  els.recordEmpty.hidden = records.length > 0;

  records.forEach((record) => {
    const item = document.createElement("li");
    item.className = "record-item";

    const bullet = document.createElement("span");
    bullet.className = "record-bullet";
    bullet.setAttribute("aria-hidden", "true");

    const text = document.createElement("p");
    text.textContent = record.text;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "record-delete";
    button.dataset.deleteRecord = record.id;
    button.setAttribute("aria-label", t("deleteRecord"));
    button.title = t("deleteRecord");
    button.textContent = "";

    item.append(bullet, text, button);
    els.recordList.append(item);
  });
}

function flashSaveButton() {
  window.clearTimeout(state.saveButtonTimer);
  els.saveNote.classList.add("is-saved");
  els.saveNote.textContent = t("savedButton");
  state.saveButtonTimer = window.setTimeout(() => {
    els.saveNote.classList.remove("is-saved");
    els.saveNote.textContent = t("saveNote");
  }, 1400);
}

function selectWeek(index) {
  hideTouchPreview();
  const previous = state.selectedWeek;
  state.selectedWeek = index;
  if (previous !== null) updateWeekClass(previous);
  updateWeekClass(index);
  renderSelectedDetail(index);
  openMobilePanel("inspector", { focus: false });
}

function handleMapHover(event) {
  if (mobileMedia.matches) return;
  if (state.dragStart || state.dragging) {
    els.hoverCard.classList.remove("visible");
    return;
  }

  const cell = event.target.closest(".week-cell");
  if (!cell) {
    els.hoverCard.classList.remove("visible");
    state.hoveredWeek = null;
    if (state.selectedWeek !== null) renderSelectedDetail(state.selectedWeek);
    return;
  }

  const index = Number(cell.dataset.week);

  if (state.hoveredWeek !== index) {
    state.hoveredWeek = index;
    renderHoverCard(index);
    if (state.selectedWeek === null) renderSelectedDetail(index);
  }

  positionHoverCard(event);
}

function renderHoverCard(index) {
  const data = getModel();
  const age = Math.floor(index / 52);
  const week = index % 52 + 1;
  const info = getWeekInfo(index);
  const records = info.records.slice(-5).reverse();
  const recordItems = records
    .map((record) => `<li>${escapeHtml(record.text)}</li>`)
    .join("");
  const recordsHtml = recordItems ? `<ul class="hover-records">${recordItems}</ul>` : "";

  els.hoverCard.innerHTML = `
    <strong>${escapeHtml(t("weekTitle", { age, week }))}</strong>
    <p>${escapeHtml(weekRange(data, index))}</p>
    ${recordsHtml}
  `;
  els.hoverCard.classList.add("visible");
}

function positionHoverCard(event) {
  const rect = els.calendarStage.getBoundingClientRect();
  const cardRect = els.hoverCard.getBoundingClientRect();
  const cardWidth = cardRect.width || 300;
  const cardHeight = cardRect.height || 160;
  const maxLeft = Math.max(12, rect.width - cardWidth - 12);
  const maxTop = Math.max(12, rect.height - cardHeight - 12);
  const cursorX = event.clientX - rect.left;
  const cursorY = event.clientY - rect.top;
  const leftCandidate = cursorX + cardWidth + 28 > rect.width
    ? cursorX - cardWidth - 18
    : cursorX + 18;
  const topCandidate = cursorY + cardHeight + 28 > rect.height
    ? cursorY - cardHeight - 18
    : cursorY + 18;
  const left = Math.min(maxLeft, Math.max(12, leftCandidate));
  const top = Math.min(maxTop, Math.max(12, topCandidate)) + els.calendarStage.scrollTop;
  els.hoverCard.style.left = `${left}px`;
  els.hoverCard.style.top = `${top}px`;
}

function handleWheel(event) {
  event.preventDefault();
  const scale = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? getStageMetrics().height : 1;
  if (event.ctrlKey || event.metaKey) {
    queueWheelZoom(event.clientX, event.clientY, event.deltaY * scale);
    return;
  }

  queueWheelPan(event.deltaX * scale, event.deltaY * scale);
}

function queueWheelZoom(clientX, clientY, delta) {
  state.wheelZoomDelta += delta;
  state.wheelZoomPoint = { clientX, clientY };

  if (state.wheelZoomRaf) return;
  state.wheelZoomRaf = window.requestAnimationFrame(() => {
    const point = state.wheelZoomPoint || { clientX, clientY };
    const nextDelta = state.wheelZoomDelta;
    state.wheelZoomDelta = 0;
    state.wheelZoomPoint = null;
    state.wheelZoomRaf = null;
    zoomAt(point.clientX, point.clientY, Math.exp(nextDelta * wheelZoomSensitivity));
  });
}

function queueWheelPan(deltaX, deltaY) {
  state.wheelPanX += deltaX;
  state.wheelPanY += deltaY;

  if (state.wheelPanRaf) return;
  state.wheelPanRaf = window.requestAnimationFrame(() => {
    const nextX = state.wheelPanX;
    const nextY = state.wheelPanY;
    state.wheelPanX = 0;
    state.wheelPanY = 0;
    state.wheelPanRaf = null;
    panBy(nextX, nextY);
  });
}

function handlePointerDown(event) {
  if (!mobileMedia.matches || event.pointerType === "mouse") return;
  const weekCell = event.target.closest(".week-cell");
  if (!weekCell) {
    hideTouchPreview();
    return;
  }

  window.clearTimeout(state.longPressTimer);
  state.longPressTriggered = false;
  state.longPressTarget = {
    pointerId: event.pointerId,
    clientX: event.clientX,
    clientY: event.clientY,
    weekIndex: Number(weekCell.dataset.week),
    cell: weekCell
  };
  state.longPressTimer = window.setTimeout(() => {
    showTouchPreview(state.longPressTarget);
  }, 460);
}

function handlePointerMove(event) {
  if (!state.longPressTarget || event.pointerId !== state.longPressTarget.pointerId) return;
  const distance = Math.hypot(
    event.clientX - state.longPressTarget.clientX,
    event.clientY - state.longPressTarget.clientY
  );
  if (distance <= 10) return;
  cancelLongPress();
}

function endDrag(event) {
  if (!state.longPressTarget || event?.pointerId !== state.longPressTarget.pointerId) return;
  window.clearTimeout(state.longPressTimer);
  state.longPressTimer = null;
  state.longPressTarget = null;

  if (!state.longPressTriggered) return;
  state.longPressTriggered = false;
  state.touchPreviewCell?.classList.remove("long-pressed");
  window.setTimeout(() => {
    state.ignoreNextClick = false;
  }, 700);
}

function cancelLongPress() {
  window.clearTimeout(state.longPressTimer);
  state.longPressTimer = null;
  state.longPressTarget = null;
  state.longPressTriggered = false;
}

function showTouchPreview(target) {
  if (!target?.cell?.isConnected) return;
  state.touchPreviewCell?.classList.remove("long-pressed");
  els.hoverCard.classList.remove("touch-visible", "visible");
  state.longPressTriggered = true;
  state.ignoreNextClick = true;
  state.touchPreviewCell = target.cell;
  target.cell.classList.add("long-pressed");
  renderHoverCard(target.weekIndex);
  els.hoverCard.classList.add("touch-visible");
  positionTouchPreview(target.cell);
}

function positionTouchPreview(cell) {
  const stageRect = els.calendarStage.getBoundingClientRect();
  const cellRect = cell.getBoundingClientRect();
  const cardRect = els.hoverCard.getBoundingClientRect();
  const cardWidth = cardRect.width || Math.min(300, stageRect.width - 24);
  const cardHeight = cardRect.height || 150;
  const centerX = cellRect.left - stageRect.left + cellRect.width / 2;
  const centerY = cellRect.top - stageRect.top + cellRect.height / 2;
  const maxLeft = Math.max(12, stageRect.width - cardWidth - 12);
  const left = clamp(centerX - cardWidth / 2, 12, maxLeft);
  const above = centerY - cardHeight - 22;
  const viewportTop = above >= 12 ? above : centerY + 22;
  const top = viewportTop + els.calendarStage.scrollTop;
  els.hoverCard.style.left = `${left}px`;
  els.hoverCard.style.top = `${top}px`;
}

function hideTouchPreview() {
  window.clearTimeout(state.longPressTimer);
  state.longPressTimer = null;
  state.longPressTarget = null;
  state.longPressTriggered = false;
  state.touchPreviewCell?.classList.remove("long-pressed");
  state.touchPreviewCell = null;
  els.hoverCard.classList.remove("touch-visible", "visible");
}

function fitMap(immediate = false) {
  stopViewBoxAnimation();
  const box = getFitViewBox();
  state.fitViewBox = box;
  setViewBox(box, { constrain: false });
  sizeScrollableMap(box);
}

function getFitViewBox() {
  const bounds = state.mapBounds;
  const margin = state.range === "life" ? 18 : 24;
  return {
    x: bounds.x - margin,
    y: bounds.y - margin,
    width: bounds.width + margin * 2,
    height: bounds.height + margin * 2
  };
}

function sizeScrollableMap(box) {
  const stageHeight = Math.max(320, els.calendarStage.clientHeight);
  const stageWidth = Math.max(320, els.calendarStage.clientWidth);
  const naturalHeight = Math.ceil(stageWidth * box.height / box.width);
  const usesVerticalReading = state.range === "life"
    || (mobileMedia.matches && state.range === "decade");
  const mapHeight = usesVerticalReading
    ? Math.max(stageHeight, naturalHeight)
    : stageHeight;
  els.calendarMap.style.height = `${mapHeight}px`;
}

function getLifeFocusBox(width, height) {
  const data = getModel();
  const layout = getMapLayout();
  const age = clamp(data.currentAge, 0, Math.max(0, data.lifespan - 1));
  const focusY = getAgeRowY(age, layout) + getAgeRowHeight(layout) / 2;
  const bounds = state.mapBounds;

  return constrainViewBox({
    x: bounds.x + bounds.width / 2 - width / 2,
    y: focusY - height * 0.42,
    width,
    height
  });
}

function getAgeRowY(age, layout) {
  const decadeIndex = Math.floor(age / 10);
  const ageRowHeight = getAgeRowHeight(layout);
  return layout.padding
    + decadeIndex * layout.decadeGap
    + (decadeIndex + 1) * layout.decadeLabelHeight
    + age * (ageRowHeight + layout.rowGap);
}

function getPrintViewBox() {
  const bounds = state.mapBounds;
  const printAspect = 194 / 270;
  const margin = 82;
  let height = bounds.height + margin * 2;
  let width = height * printAspect;

  if (width < bounds.width + margin * 2) {
    width = bounds.width + margin * 2;
    height = width / printAspect;
  }

  return centerBox(width, height);
}

function centerBox(width, height) {
  const bounds = state.mapBounds;
  return {
    x: bounds.x + bounds.width / 2 - width / 2,
    y: bounds.y + bounds.height / 2 - height / 2,
    width,
    height
  };
}

function getStageMetrics() {
  const rect = els.calendarStage.getBoundingClientRect();
  const width = Math.max(320, rect.width || 0);
  const height = Math.max(320, rect.height || 0);
  return {
    width,
    height,
    aspect: width / height
  };
}

function panBy(deltaX, deltaY) {
  stopViewBoxAnimation();
  const metrics = getStageMetrics();
  const box = state.viewBox || getFitViewBox();
  setViewBox({
    x: box.x + deltaX * box.width / metrics.width,
    y: box.y + deltaY * box.height / metrics.height,
    width: box.width,
    height: box.height
  });
}

function zoomAt(clientX, clientY, factor) {
  stopViewBoxAnimation();
  const box = state.viewBox || getFitViewBox();
  const point = screenToViewPoint(clientX, clientY, box);
  const width = clampViewWidth(box.width * factor);
  const actualFactor = width / box.width;
  const height = box.height * actualFactor;
  const ratioX = (point.x - box.x) / box.width;
  const ratioY = (point.y - box.y) / box.height;

  setViewBox({
    x: point.x - ratioX * width,
    y: point.y - ratioY * height,
    width,
    height
  });
}

function screenToViewPoint(clientX, clientY, box = state.viewBox) {
  const rect = els.calendarStage.getBoundingClientRect();
  const metrics = getStageMetrics();
  return {
    x: box.x + (clientX - rect.left) * box.width / metrics.width,
    y: box.y + (clientY - rect.top) * box.height / metrics.height
  };
}

function setViewBox(box, options = {}) {
  const next = options.constrain === false ? box : constrainViewBox(box);
  state.viewBox = { ...next };
  els.calendarMap.setAttribute("viewBox", `${next.x} ${next.y} ${next.width} ${next.height}`);
  els.calendarMap.setAttribute("preserveAspectRatio", "xMidYMid meet");
  updateZoomReadout();
}

function constrainViewBox(box) {
  const metrics = getStageMetrics();
  const bounds = state.mapBounds;
  const width = clampViewWidth(box.width);
  const height = width / metrics.aspect;
  return {
    x: clampViewAxis(box.x, width, bounds.x, bounds.width),
    y: clampViewAxis(box.y, height, bounds.y, bounds.height),
    width,
    height
  };
}

function clampViewWidth(width) {
  const metrics = getStageMetrics();
  const minWidth = Math.max(72, metrics.width / 6.2);
  const maxWidth = Math.max(state.mapBounds.width * 2.8, metrics.width * 2.2);
  return Math.min(maxWidth, Math.max(minWidth, width));
}

function clampViewAxis(value, viewSize, boundsStart, boundsSize) {
  const slack = viewSize * 0.28;
  const min = boundsStart - slack;
  const max = boundsStart + boundsSize - viewSize + slack;
  if (min > max) return boundsStart + boundsSize / 2 - viewSize / 2;
  return Math.min(max, Math.max(min, value));
}

function animateToViewBox(box) {
  stopViewBoxAnimation();
  state.targetViewBox = constrainViewBox(box);
  if (!state.viewBox) {
    setViewBox(state.targetViewBox);
    state.targetViewBox = null;
    return;
  }

  state.raf = window.requestAnimationFrame(animateViewBox);
}

function animateViewBox() {
  const target = state.targetViewBox;
  if (!target || !state.viewBox) return;

  const current = state.viewBox;
  const next = {
    x: current.x + (target.x - current.x) * 0.28,
    y: current.y + (target.y - current.y) * 0.28,
    width: current.width + (target.width - current.width) * 0.28,
    height: current.height + (target.height - current.height) * 0.28
  };

  setViewBox(next);

  const settled = Math.abs(next.x - target.x) < 0.2
    && Math.abs(next.y - target.y) < 0.2
    && Math.abs(next.width - target.width) < 0.2
    && Math.abs(next.height - target.height) < 0.2;

  if (settled) {
    setViewBox(target);
    state.raf = null;
    state.targetViewBox = null;
    return;
  }

  state.raf = window.requestAnimationFrame(animateViewBox);
}

function stopViewBoxAnimation() {
  if (state.raf) {
    window.cancelAnimationFrame(state.raf);
    state.raf = null;
  }
  if (state.wheelZoomRaf) {
    window.cancelAnimationFrame(state.wheelZoomRaf);
    state.wheelZoomRaf = null;
    state.wheelZoomDelta = 0;
    state.wheelZoomPoint = null;
  }
  if (state.wheelPanRaf) {
    window.cancelAnimationFrame(state.wheelPanRaf);
    state.wheelPanRaf = null;
    state.wheelPanX = 0;
    state.wheelPanY = 0;
  }
  state.targetViewBox = null;
}

function updateZoomReadout() {
  if (!state.viewBox) return;
  const baseWidth = state.fitViewBox?.width || state.viewBox.width;
  const zoom = Math.round(baseWidth / state.viewBox.width * 100);
  els.zoomReadout.textContent = `${Math.min(620, Math.max(10, zoom))}%`;
}

function scheduleCloudProfileSave() {
  if (!state.cloud.enabled || !state.cloud.session || !state.profileReady || state.cloud.hydrating) return;
  window.clearTimeout(state.cloud.profileSaveTimer);
  state.cloud.profileSaveTimer = window.setTimeout(saveProfileToCloud, 450);
}

async function saveProfileToCloud() {
  if (!state.cloud.enabled || !state.cloud.client || !state.cloud.user || state.cloud.hydrating) return;
  const data = getModel();
  const { error } = await state.cloud.client
    .from("life_calendar_profiles")
    .upsert({
      user_id: state.cloud.user.id,
      name: data.name,
      birthday: els.birthdayInput.value,
      lifespan: data.lifespan,
      decade_start: data.decadeStart,
      lang: state.lang,
      updated_at: new Date().toISOString()
    }, { onConflict: "user_id" });

  if (error) {
    setAuthStatus(t("cloudSyncFailed", { message: error.message }), true);
    return;
  }

  setAuthStatus(t("cloudSynced"));
}

async function saveWeekToCloud(index) {
  if (!state.cloud.enabled || !state.cloud.client || !state.cloud.user || index === null || index === undefined) return true;
  const { error } = await state.cloud.client
    .from("life_calendar_weeks")
    .upsert({
      user_id: state.cloud.user.id,
      week_index: index,
      note: serializeWeekRecords(state.notes[index]),
      mood: state.moods[index] || "",
      updated_at: new Date().toISOString()
    }, { onConflict: "user_id,week_index" });

  if (error) {
    setAuthStatus(t("cloudSyncFailed", { message: error.message }), true);
    return false;
  }

  setAuthStatus(t("cloudSynced"));
  return true;
}

function preparePrint() {
  if (state.previousPrintRange === null) state.previousPrintRange = state.range;
  stopViewBoxAnimation();
  document.body.classList.add("printing");
  state.range = "life";
  renderCalendar({ fit: false });
  const printBox = getPrintViewBox();
  renderPrintSheet(getModel(), printBox);
}

function restoreAfterPrint() {
  document.body.classList.remove("printing");
  if (state.previousPrintRange !== null) {
    state.range = state.previousPrintRange;
    state.previousPrintRange = null;
  }
  renderCalendar({ fit: true, focusCurrent: true });
}

function renderPrintSheet(data, printBox) {
  const weeksLabel = t("weeks");
  els.printSheetLabel.textContent = t("brand");
  els.printSheetName.textContent = data.name;
  els.printLivedLabel.textContent = t("metricLived");
  els.printLivedValue.textContent = formatNumber(data.weeksLived);
  els.printLivedUnit.textContent = weeksLabel;
  els.printLeftLabel.textContent = t("metricLeft");
  els.printLeftValue.textContent = formatNumber(data.weeksLeft);
  els.printLeftUnit.textContent = weeksLabel;
  els.printProgressLabel.textContent = t("metricProgress");
  els.printProgressValue.textContent = data.progress.toFixed(1);
  els.printMap.dataset.range = "life";
  els.printMap.innerHTML = els.calendarMap.innerHTML;
  els.printMap.setAttribute("viewBox", `${printBox.x} ${printBox.y} ${printBox.width} ${printBox.height}`);
  els.printMap.setAttribute("preserveAspectRatio", "xMidYMid meet");
}

function printFullLife() {
  preparePrint();
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      window.setTimeout(() => window.print(), 80);
    });
  });
}

function saveState(options = {}) {
  state.notes = normalizeNotes(state.notes);
  localStorage.setItem(storageKey, JSON.stringify({
    name: els.nameInput.value,
    birthday: els.birthdayInput.value,
    lifespan: els.lifespanInput.value,
    decadeStart: els.decadeInput.value,
    lang: state.lang,
    profileReady: state.profileReady,
    notes: state.notes,
    moods: state.moods
  }));
  if (options.cloud !== false) scheduleCloudProfileSave();
}
