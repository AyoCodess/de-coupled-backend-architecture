export function signIn() {
  return {
    ok: true,
    message: "AUTHORIZED",
    error: null,
  };
}

export function verify() {
  return {
    ok: true,
    message: "VERIFYING",
    error: null,
  };
}
