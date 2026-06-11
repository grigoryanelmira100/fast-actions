const BANNER_CLICK_EVENT = "banner-click";

const postToParent = (payload) => {
  window.parent.postMessage(payload, "*");
};

const isInsideIframe = () => {
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
};

export const redirectOnParent = (url) => {
  if (!url) return;

  if (isInsideIframe()) {
    postToParent({
      [BANNER_CLICK_EVENT]: {
        action: "redirect",
        params: { url },
      },
    });
    return;
  }

  window.location.href = url;
};
