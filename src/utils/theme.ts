export function getTheme(): string {
  return (
    window.localStorage.getItem('theme') ??
    (window.matchMedia('(prefers-color-scheme: dark)') && 'dark') ??
    'light'
  )
}

export function setTheme() {
  document.documentElement.dataset.theme =
    window.localStorage.getItem('theme') ??
    (window.matchMedia('(prefers-color-scheme: dark)') && 'dark') ??
    'light'
}