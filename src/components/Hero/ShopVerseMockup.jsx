import laptopImg from '../../../assets/web/hero-laptop.webp'
import phoneImg from '../../../assets/web/hero-phone.webp'

/**
 * ShopVerseMockup — real device renders (supplied images) shown as a
 * laptop + phone composition. Both images are transparent WebP exports
 * of the supplied PNG renders, so the warm cream page and soft glow show
 * through. The wrapper width, glow and the phone float/overlap are
 * preserved from the original hand-built mockup.
 */
export default function ShopVerseMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] select-none">
      {/* Soft warm glow behind the devices */}
      <div
        aria-hidden="true"
        className="absolute -inset-10 rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(200,138,8,0.16),transparent_65%)] blur-2xl"
      />

      {/* Laptop render — aligned straight */}
      <div className="relative">
        <img
          src={laptopImg}
          alt="ShopVerse e-commerce storefront previewed on a laptop"
          className="relative block w-full drop-shadow-[0_22px_40px_rgba(16,24,40,0.18)]"
        />
      </div>

      {/* Phone render overlay */}
      <div className="absolute -bottom-12 -right-2 w-[128px] animate-float sm:-right-4 sm:w-[148px]">
        <img
          src={phoneImg}
          alt="Responsive ShopVerse storefront previewed on a smartphone"
          className="block w-full drop-shadow-[0_16px_28px_rgba(16,24,40,0.22)]"
        />
      </div>
    </div>
  )
}
