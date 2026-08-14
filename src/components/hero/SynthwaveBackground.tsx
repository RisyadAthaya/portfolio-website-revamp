export default function SynthwaveBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -top-30 z-0">
      <video
        loop
        autoPlay
        muted
        playsInline
        preload="auto"
        src="/videos/synthwaveBackground.mp4"
      />
    </div>
  )
}
