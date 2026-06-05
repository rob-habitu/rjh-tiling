/* RJH Tiling — Logo lockup.
   variant: 'light' (ink mark, for bone surfaces) | 'dark' (cream knockout, for charcoal)
   size: rendered height in px. Source art is 954x436 (~2.19:1). */
export default function Logo({ variant = 'light', size = 30 }) {
  const src = variant === 'dark'
    ? '/assets/rjh-logo-light.png'
    : '/assets/rjh-logo-dark.png';
  return (
    <img
      src={src}
      alt="RJH Tiling"
      style={{ height: size * 2.0, width: 'auto', display: 'block', userSelect: 'none' }}
    />
  );
}
