export const useLockBody = (isLocked: Ref<boolean>): void => {
  watch(isLocked, (isLocked) => {
    const { style } = document.body

    if (isLocked) {
      const top = window.scrollY

      style.setProperty('overflow', 'hidden')
      style.setProperty('position', 'fixed')
      style.setProperty('left', '0')
      style.setProperty('width', '100%')
      style.setProperty('min-height', '100%')
      style.setProperty('top', `${-top}px`)
    } else {
      const top = Math.abs(Number.parseInt(style.getPropertyValue('top')))

      style.removeProperty('overflow')
      style.removeProperty('position')
      style.removeProperty('left')
      style.removeProperty('width')
      style.removeProperty('min-height')
      style.removeProperty('top')

      window.scrollTo({ top })
    }
  })
}
