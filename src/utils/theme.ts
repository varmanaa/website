export function getTheme(): string {
  const theme = window.localStorage.getItem('theme') ??
    (window.matchMedia('(prefers-color-scheme: dark)') && 'dark') ??
    'light'

  return theme
}

export function setTheme() {
  document.documentElement.dataset.theme =
    window.localStorage.getItem('theme') ??
    (window.matchMedia('(prefers-color-scheme: dark)') && 'dark') ??
    'light'
}