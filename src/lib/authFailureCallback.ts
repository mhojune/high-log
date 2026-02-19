let callback: (() => void) | null = null;

export function setAuthFailureCallback(fn: (() => void) | null) {
  callback = fn;
}

export function invokeAuthFailure() {
  callback?.();
}
