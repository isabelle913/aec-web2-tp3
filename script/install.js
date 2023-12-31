let deferredInstallPrompt = null;
const installBtn = document.getElementById("installBtn");

// console.log("Bonjour 5");

installBtn.addEventListener("click", installPWA);
window.addEventListener("beforeinstallprompt", saveBeforeInstallPromptEvent);
window.addEventListener("appinstalled", logAppInstalled);

function installPWA(event) {
  deferredInstallPrompt.prompt();
  event.srcElement.setAttribute("hidden", true);

  deferredInstallPrompt.userChoice.then((choice) => {
    if (choice.outcome === "accepted") {
      console.log("User accepted", choice);
    } else {
      console.log("User refused", choice);
    }
    deferredInstallPrompt = null;
  });
}

function saveBeforeInstallPromptEvent(event) {
  console.log("saveBeforeInstallPromptEvent", event);

  deferredInstallPrompt = event;

  installBtn.removeAttribute("hidden");
}

function logAppInstalled(event) {
  console.log("App déja installé", event);
}
