export default function MobileMenu({ open, onToggle }) {
  return (
    <button
      className="nav-toggle"
      id="navToggle"
      type="button"
      aria-expanded={open ? 'true' : 'false'}
      aria-controls="siteNav"
      aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
      onClick={onToggle}
    >
      <span className="nav-toggle-copy">
        <span className="nav-toggle-open">
          <span className="lbl-ar">القائمة</span>
          <span className="lbl-en" lang="en">MENU</span>
        </span>
      </span>
      <span className="nav-toggle-ico" aria-hidden="true">
        <svg className="ico ico-menu"><use href="#i-menu"></use></svg>
        <svg className="ico ico-close"><use href="#i-close"></use></svg>
      </span>
    </button>
  );
}
