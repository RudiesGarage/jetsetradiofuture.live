window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "UA-45495852-6");
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("./sw.js", {
    scope: "./",
  });
  navigator.serviceWorker.addEventListener("message", event => {
    var msg = event.data.msg;
    switch (msg.name) {
      default: console.log("unknown sw message", event);
      gtag("event", "unknown_sw_message_1", {
        name: msg.name,
      });
      return;
    }
  });
}
window.onerror = function (messageOrEvent, source, lineno, colno, error) {
  try {
    var str = "";
    if (typeof messageOrEvent === "object") {
      str += "Event: " + messageOrEvent.type + " " + messageOrEvent.message + " ;";
    } else {
      str += messageOrEvent + "; ";
    }
    if (source) {
      str += " Source: " + source + "; ";
    }
    if (lineno !== void 0) {
      str += " Line: " + lineno + "; ";
    }
    if (colno !== void 0) {
      str += " Col: " + colno + "; ";
    }
    if (error) {
      str += " Message: " + error.message + "; ";
      try {
        str += " StackTop: " + error.stack.split(/\n/g)[1].trim() + "; ";
      } catch (e) {}
    }
    console.log("Remote logged: ", str);
    gtag("event", "exception", {
      description: str,
    });
  } catch (e) {
    console.error(e);
  }
};
"use strict";
try {
  void new Image("/logo.png");
} catch (e) {
  // Not sure why but on some browsers this crashes.
}
var qs = {};
if (location.search) {
  location.search.substr(1).split(/&/g).map(function (term) {
    var parts = term.split(/=/g);
    if (parts.length === 1) {
      parts.push("1");
    }
    qs[parts[0]] = parts[1];
  });
}

function escapeHtml(string) {
  var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#039;',
  };
  return string.replace(/[&<>"']/g, function (s) {
    return entityMap[s] || s;
  });
};

function unescapeHtml(string) {
  var reverseEntityMap = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    '&quot;': '"',
    '&#039;': "'",
  };
  return string.replace(/&.+?;/g, function (s) {
    return reverseEntityMap[s] || s;
  });
};
// Disable backspace navigation
var backspaceHandler = function (e) {
  if (e.which === 8) {
    if (!/INPUT|SELECT|TEXTAREA/i.test(e.target.tagName) || e.target.disabled || e.target.readOnly) {
      e.preventDefault();
    }
  }
}.bind(this);
document.addEventListener("keydown", backspaceHandler);
document.addEventListener("keypress", backspaceHandler);
// Shim performance.now
window.performance = window.performance || {};
performance.now = (function () {
  return performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function () {
    return new Date().getTime();
  };
})();
// Shim localstorage
if (!window.localStorage) {
  window.localStorage = {};
}
try {
  localStorage._ = 1;
} catch (e) {
  window.isShittyLocalstorage = true;
}
var readyHandlers = {};
var onReady = function (what, fn) {
  if (readyHandlers[what] === null) {
    setTimeout(function () {
      fn();
    });
    return;
  }
  if (readyHandlers[what] === void 0) {
    readyHandlers[what] = [];
  }
  readyHandlers[what].push(fn);
};
var triggerReady = function (what) {
  if (readyHandlers[what]) {
    readyHandlers[what].forEach(function (v) {
      v();
    });
  }
  readyHandlers[what] = null;
};

function isPowerOf2(x) {
  return (x != 0) && ((x & (x - 1)) == 0);
}
var modalEls;
var modalRefcount = 0;

function modal(text, options) {
  modalRefcount++;
  modalEls = modalEls || {
    modal: document.querySelector(".modal"),
    modalTitle: document.querySelector(".modal-title"),
    modalTitleText: document.querySelector(".modal-title").childNodes[0],
    modalText: document.querySelector(".modal-text"),
    modalTextText: document.querySelector(".modal-text").childNodes[0],
    modalLeftButton: document.querySelector(".modal-button-left"),
    modalLeftButtonText: document.querySelector(".modal-button-left").childNodes[0],
    modalRightButton: document.querySelector(".modal-button-right"),
    modalRightButtonText: document.querySelector(".modal-button-right").childNodes[0],
    modalProgress: document.querySelector(".modal-progress"),
    modalInput: document.querySelector(".modal-input"),
  };
  var removeEvents;

  function hideModal() {
    modalRefcount--;
    if (modalRefcount <= 0) {
      modalRefcount = 0;
      document.body.style.overflow = "";
    }
    modalEls.modal.style.display = "none";
    removeEvents();
  }

  function setProgress(n) {
    modalEls.modalProgress.style.display = "block";
    modalEls.modalProgress.style.width = n + "%";
  }

  function getInputValue() {
    return modalEls.modalInput.value;
  }
  options = options || {};
  options = {
    title: options.title || null,
    text: text,
    leftButtonText: options.leftButtonText || "OK",
    leftButtonFn: options.hasOwnProperty("leftButtonFn") ? options.leftButtonFn : function () {},
    rightButtonText: options.rightButtonText || "OK",
    rightButtonFn: options.rightButtonFn || null,
    input: typeof options.input === "string" ? options.input : null,
  };
  modalEls.modal.style.display = "block";
  document.body.style.overflow = "hidden";
  window.scrollTo(0, 0);
  if (options.title) {
    modalEls.modalTitle.style.display = "block";
    modalEls.modalTitleText.textContent = options.title;
  } else {
    modalEls.modalTitle.style.display = "none";
  }
  modalEls.modalTextText.textContent = options.text;
  modalEls.modalLeftButtonText.textContent = options.leftButtonText;
  modalEls.modalRightButtonText.textContent = options.rightButtonText;
  if (options.leftButtonFn) {
    modalEls.modalLeftButton.style.display = "";
  } else {
    modalEls.modalLeftButton.style.display = "none";
  }
  if (options.rightButtonFn) {
    modalEls.modalRightButton.style.display = "";
  } else {
    modalEls.modalRightButton.style.display = "none";
  }
  modalEls.modalProgress.style.display = "none";
  modalEls.modalInput.value = "";
  if (typeof options.input === "string") {
    modalEls.modalInput.style.display = "";
  } else {
    modalEls.modalInput.style.display = "none";
  }
  var leftHandler = function () {
    if (!options.leftButtonFn || options.leftButtonFn() !== false) {
      hideModal();
    }
  };
  modalEls.modalLeftButton.addEventListener("click", leftHandler);
  var rightHandler = function () {
    if (!options.rightButtonFn || options.rightButtonFn() !== false) {
      hideModal();
    }
  };
  modalEls.modalRightButton.addEventListener("click", rightHandler);
  removeEvents = function () {
    modalEls.modalLeftButton.removeEventListener("click", leftHandler);
    modalEls.modalRightButton.removeEventListener("click", rightHandler);
  };
  return {
    hideModal: hideModal,
    setProgress: setProgress,
    getInputValue: getInputValue,
  };
}

function stringToCharCodes(str) {
  return str.split("").map(function (c) {
    return c.charCodeAt(0);
  });
}

function hasEmuModule() {
  return !!window.gbaninja.HEAP8;
}
var romBuffer8 = null;
window.loadRomFromBuffer = function (_romBuffer8, filename) {
  var errorOpts = {
    title: "Error"
  };
  if (_romBuffer8.length < 512) {
    gtag("event", "load_tiny_rom_1", {
      event_label: filename,
    });
    return modal("That file isn't a GBA ROM. (It's too small to be a ROM.)", errorOpts);
  }
  // Check if it's a real rom
  var romCode = String.fromCharCode(_romBuffer8[0xAC], _romBuffer8[0xAD], _romBuffer8[0xAE], _romBuffer8[0xAF]);
  var gbMagic = [
    _romBuffer8[0x0104], _romBuffer8[0x0105], _romBuffer8[0x0106], _romBuffer8[0x0107],
    _romBuffer8[0x0108], _romBuffer8[0x0109], _romBuffer8[0x010A], _romBuffer8[0x010B],
  ].map(function (v) {
    return v.toString(16);
  }).join();
  if (filename.search(/\.zip$/i) !== -1) {
    gtag("event", "load_zip_rom_1", {
      event_label: filename,
    });
    return modal("You need to extract the rom file from the zip.", errorOpts);
  }
  if (String.fromCharCode(_romBuffer8[0], _romBuffer8[1]) === "PK") {
    gtag("event", "load_zip_rom_1", {
      event_label: filename + " (non-dot-zip-file)",
    });
    return modal("You need to extract the rom file.", errorOpts);
  }
  if (filename.search(/\.sav$/i) !== -1) {
    gtag("event", "load_sav_rom_1", {
      event_label: filename,
    });
    return modal("That's not a ROM, it's a savegame file. GBA ROM files usually end in '.gba'.", errorOpts);
  }
  if (filename.search(/\.smc$/i) !== -1 || filename.search(/\.sfc$/i) !== -1) {
    gtag("event", "load_smc_rom_1", {
      event_label: filename,
    });
    return modal("That's a SNES ROM, this emulator runs Gameboy Advance ROMs.", errorOpts);
  }
  if (gbMagic === "ce,ed,66,66,cc,d,0,b") {
    gtag("event", "load_gb_rom_1", {
      event_label: filename,
    });
    var colorMaybe = "";
    if (filename.search(/\.gbc$/i) !== -1) {
      colorMaybe = "Color ";
    }
    return modal("That's a Gameboy " + colorMaybe + "ROM, this emulator only runs Gameboy Advance ROMs.", errorOpts);
  }
  if (!isPowerOf2(_romBuffer8.length)) {
    // Some roms are actually non-pot, so don't enforce this.
    gtag("event", "non_pot_rom_1", {
      event_label: stringToCharCodes(romCode) + " " + filename + " " + _romBuffer8.length,
    });
    // Don't return
  }

  function ok() {
    romBuffer8 = _romBuffer8;
    triggerReady("cartridge");
  }

  function waitForEmuLoad() {
    if (hasEmuModule()) {
      ok();
    } else {
      gtag("event", "emu_file_missing_at_load_rom_1", {});
      var interval;
      var modalOpts = modal("The emulator module isn't loaded yet. Give it a moment.", {
        title: "Waiting For Emulator Module",
        leftButtonText: "Back",
        leftButtonFn: function () {
          clearInterval(interval);
        },
      });

      function progress() {
        if (window.emuScriptProgress === -1) {
          modalOpts.hideModal();
          return modal("There was an error while loading the emulator module. You'll need to refresh the page.", {
            title: "Error",
            leftButtonText: "Ok",
            leftButtonFn: function () {
              clearInterval(interval);
            },
          });
        } else {
          modalOpts.setProgress(window.emuScriptProgress);
        }
      }
      progress();
      interval = setInterval(function () {
        progress();
        if (window.emuScriptProgress >= 100) {
          clearInterval(interval);
          modalOpts.hideModal();
          ok();
        }
      }, 100);
    }
  }
  if (romCode.search(/^[A-Z0-9]{4}$/) && !qs.ignoreInvalidRomCode) {
    gtag("event", "invalid_rom_code_1", {
      event_label: stringToCharCodes(romCode) + " " + filename,
    });
    return modal("That file doesn't look like a GBA ROM. (Couldn't find a rom code in the file.)", {
      title: "Error",
      rightButtonText: "Run it anyway",
      rightButtonFn: waitForEmuLoad,
    });
  } else {
    waitForEmuLoad();
  }
};
window.loadRomFromFile = function (e) {
  var binaryFile = e.currentTarget.files[0];
  var filename = binaryFile.name;
  e.currentTarget.form.reset();
  if (!binaryFile) {
    return;
  }
  var modalOpts = modal(filename, {
    title: "Loading File",
    leftButtonFn: null,
  });
  var fr = new FileReader();
  fr.readAsArrayBuffer(binaryFile);
  fr.onload = function () {
    modalOpts.hideModal();
    var _romBuffer8 = new Uint8Array(fr.result);
    loadRomFromBuffer(_romBuffer8, binaryFile.name);
    resizeCanvas();
  };
};
window.loadRomFromNetwork = function (url) {
  var xhr = new XMLHttpRequest();
  let loadingModalSettings = {
    title: "Loading",
    leftButtonText: "Cancel",
    leftButtonFn: function () {
      xhr.abort();
    }
  };
  if (qs.exclusive) {
    loadingModalSettings.leftButtonFn = null;
  }
  var modalOpts = modal("Loading " + url, loadingModalSettings);
  modalOpts.setProgress(0);
  xhr.onload = function (e) {
    modalOpts.hideModal();
    window.loadRomFromBuffer(new Uint8Array(xhr.response), url);
  };
  xhr.onprogress = function (e) {
    modalOpts.setProgress((e.loaded / e.total) * 100);
  };
  xhr.onerror = function (e) {
    modalOpts.hideModal();
    let errorModalSettings = {
      title: "Error",
      leftButtonText: "Ok",
    };
    if (qs.exclusive) {
      errorModalSettings.leftButtonFn = function () {
        location.reload();
      }
      errorModalSettings.leftButtonText = "Reload Page";
    }
    modal("There was an error loading the ROM.", errorModalSettings);
  };
  xhr.open("GET", url);
  xhr.responseType = "arraybuffer";
  xhr.send();
};
window.gbaninja = {
  onRuntimeInitialized: function () {
    triggerReady("emu");
  },
};
document.addEventListener("DOMContentLoaded", function () {
  triggerReady("document");
});
document.addEventListener("mousedown", function () {
  if (window.vbaSound.audioCtx.state === "suspended") {
    window.vbaSound.audioCtx.resume();
  }
});
onReady("document", function () {
  if (window.init) {
    window.init();
  } else {
    document.querySelector(".pixels").innerHTML = "<p style='margin: 20px;'>A required file failed to load.</p>";
  }
  if (qs.autorun) {
    loadRomFromNetwork(qs.autorun);
  }
});
onReady("emu", function () {
  onReady("document", function () {
    onReady("cartridge", function () {
      window.start();
      resizeCanvas();
    });
  });
});
// ------ VBA ENTRY POINTS -------
var VBAInterface = {};
VBAInterface.VBA_get_emulating = function () {
  return gbaninja.ccall("VBA_get_emulating", "int", [], []);
};
VBAInterface.VBA_start = function () {
  return gbaninja.ccall("VBA_start", "int", [], []);
};
VBAInterface.VBA_do_cycles = function (cycles) {
  return gbaninja.ccall("VBA_do_cycles", "int", ["int"], [cycles]);
};
VBAInterface.VBA_stop = function () {
  return gbaninja.ccall("VBA_stop", "int", [], []);
};
VBAInterface.VBA_get_bios = function () {
  return gbaninja.ccall("VBA_get_bios", "int", [], []);
};
VBAInterface.VBA_get_rom = function () {
  return gbaninja.ccall("VBA_get_rom", "int", [], []);
};
VBAInterface.VBA_get_internalRAM = function () {
  return gbaninja.ccall("VBA_get_internalRAM", "int", [], []);
};
VBAInterface.VBA_get_workRAM = function () {
  return gbaninja.ccall("VBA_get_workRAM", "int", [], []);
};
VBAInterface.VBA_get_paletteRAM = function () {
  return gbaninja.ccall("VBA_get_paletteRAM", "int", [], []);
};
VBAInterface.VBA_get_vram = function () {
  return gbaninja.ccall("VBA_get_vram", "int", [], []);
};
VBAInterface.VBA_get_pix = function () {
  return gbaninja.ccall("VBA_get_pix", "int", [], []);
};
VBAInterface.VBA_get_oam = function () {
  return gbaninja.ccall("VBA_get_oam", "int", [], []);
};
VBAInterface.VBA_get_ioMem = function () {
  return gbaninja.ccall("VBA_get_ioMem", "int", [], []);
};
VBAInterface.VBA_get_systemColorMap16 = function () {
  return gbaninja.ccall("VBA_get_systemColorMap16", "int", [], []);
};
VBAInterface.VBA_get_systemColorMap32 = function () {
  return gbaninja.ccall("VBA_get_systemColorMap32", "int", [], []);
};
VBAInterface.VBA_get_systemFrameSkip = function () {
  return gbaninja.ccall("VBA_get_systemFrameSkip", "int", [], []);
};
VBAInterface.VBA_set_systemFrameSkip = function (n) {
  return gbaninja.ccall("VBA_set_systemFrameSkip", "int", ["int"], [n]);
};
VBAInterface.VBA_get_systemSaveUpdateCounter = function () {
  return gbaninja.ccall("VBA_get_systemSaveUpdateCounter", "int", [], []);
};
VBAInterface.VBA_reset_systemSaveUpdateCounter = function () {
  return gbaninja.ccall("VBA_reset_systemSaveUpdateCounter", "int", [], []);
};
VBAInterface.VBA_emuWriteBattery = function () {
  return gbaninja.ccall("VBA_emuWriteBattery", "int", [], []);
};
VBAInterface.VBA_agbPrintFlush = function () {
  return gbaninja.ccall("VBA_agbPrintFlush", "int", [], []);
};
// ------- VBA EXIT POINTS --------
VBAInterface.NYI = function (feature) {
  console.log("Feature is NYI: ", feature);
};
VBAInterface.getAudioSampleRate = function () {
  return window.vbaSound.getSampleRate();
};
VBAInterface.getRomSize = function (startPointer8) {
  return romBuffer8.byteLength;
};
VBAInterface.copyRomToMemory = function (startPointer8) {
  var gbaHeap8 = gbaninja.HEAP8;
  var byteLength = romBuffer8.byteLength;
  for (var i = 0; i < byteLength; i++) {
    gbaHeap8[startPointer8 + i] = romBuffer8[i];
  }
};
VBAInterface.renderFrame = function (pixPointer8) {
  window.vbaGraphics.drawGBAFrame(pixPointer8);
};
VBAInterface.initSound = function () {};
VBAInterface.pauseSound = function () {};
VBAInterface.resetSound = function () {
  window.vbaSound.resetSound();
};
VBAInterface.resumeSound = function () {};
VBAInterface.writeSound = function (pointer8, length16) {
  return window.vbaSound.writeSound(pointer8, length16);
};
VBAInterface.setThrottleSound = function (pointer8, length16) {};
VBAInterface.getSaveSize = function () {
  return vbaSaves.getSaveSize();
};
VBAInterface.commitFlash = VBAInterface.commitEeprom = function (pointer8, size) {
  return vbaSaves.softCommit(pointer8, size);
};
VBAInterface.restoreSaveMemory = function (pointer8, targetBufferSize) {
  return vbaSaves.restoreSaveMemory(pointer8, targetBufferSize);
};
VBAInterface.getJoypad = function (joypadNum) {
  return vbaInput.getJoypad(joypadNum);
};
VBAInterface.dbgOutput = function (textPointer8, unknownPointer8) {
  return console.log("dbgOutput", textPointer8, unknownPointer8);
};

function ajaxScript(url, progressCallback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function (e) {
    var script = document.createElement('script');
    script.text = xhr.responseText;
    document.head.appendChild(script);
  };
  xhr.onprogress = function (e) {
    progressCallback((e.loaded / e.total) * 100);
  };
  xhr.onerror = function () {
    progressCallback(-1);
    gtag("event", "emu_load_error", {});
  };
  xhr.open("GET", url);
  xhr.responseType = "text";
  xhr.send();
}
window.emuScriptProgress = 0;
ajaxScript("./emu.js", function (progress, text) {
  window.emuScriptProgress = progress;
});
