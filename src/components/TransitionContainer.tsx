const transitionClasses = 'flex flex-1'
const blockClassesRow1 = 'origin-top'
const blockClassesRow2 = 'origin-bottom'

export default function TransitionContainer() {
  return (
    <div className="fixed top-0 left-0 w-screen h-dvh flex flex-col z-0">
      <div id="transition-row-1" className={transitionClasses}>
        <div className={blockClassesRow1}></div>
        <div className={blockClassesRow1}></div>
        <div className={blockClassesRow1}></div>
        <div className={blockClassesRow1}></div>
        <div className={blockClassesRow1}></div>
      </div>
      <div id="transition-row-2" className={transitionClasses}>
        <div className={blockClassesRow2}></div>
        <div className={blockClassesRow2}></div>
        <div className={blockClassesRow2}></div>
        <div className={blockClassesRow2}></div>
        <div className={blockClassesRow2}></div>
      </div>
    </div>
  )
}
