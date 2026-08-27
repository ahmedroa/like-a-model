import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { GOALS, goalLabel, normalizeGoal, storiesFor } from '../data/stories.js';

export default function StoriesPage({ onOpenBooking }) {
  const [params, setParams] = useSearchParams();
  const current = normalizeGoal(params.get('goal'));
  const [modalIndex, setModalIndex] = useState(-1);
  const [busy, setBusy] = useState(false);
  const [panelClass, setPanelClass] = useState('');
  const animTimer = useRef(0);

  const queue = useMemo(() => storiesFor(current).slice(0, 6), [current]);
  const goal = GOALS[current] || GOALS.all;
  const story = modalIndex >= 0 ? queue[modalIndex] : null;

  const setGoal = (id) => {
    const next = normalizeGoal(id);
    const nextParams = new URLSearchParams(params);
    if (next === 'all') nextParams.delete('goal');
    else nextParams.set('goal', next);
    setParams(nextParams, { replace: true });
    setModalIndex(-1);
  };

  const openStory = (id) => {
    const i = queue.findIndex((s) => s.id === id);
    if (i >= 0) setModalIndex(i);
  };

  const go = (delta) => {
    if (busy || modalIndex < 0) return;
    const next = modalIndex + delta;
    if (next < 0 || next >= queue.length) return;
    setBusy(true);
    setPanelClass(delta > 0 ? 'is-leave-next' : 'is-leave-prev');
    window.clearTimeout(animTimer.current);
    animTimer.current = window.setTimeout(() => {
      setModalIndex(next);
      setPanelClass(delta > 0 ? 'is-enter-next' : 'is-enter-prev');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setPanelClass('');
          setBusy(false);
        });
      });
    }, 180);
  };

  const closeModal = () => {
    window.clearTimeout(animTimer.current);
    setModalIndex(-1);
    setPanelClass('');
    setBusy(false);
  };

  useEffect(() => () => window.clearTimeout(animTimer.current), []);

  useEffect(() => {
    document.documentElement.classList.toggle('is-sp-modal-open', modalIndex >= 0);
    return () => document.documentElement.classList.remove('is-sp-modal-open');
  }, [modalIndex]);

  useEffect(() => {
    if (modalIndex < 0) return undefined;
    const onKey = (e) => {
      if (document.body.classList.contains('is-bk-open')) return;
      if (e.key === 'Escape') {
        closeModal();
        return;
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [modalIndex, busy, queue.length]);

  return (
    <main id="main">
      <section className="sp-page" id="storiesPage" aria-labelledby="spTitle">
        <div className="sp-hero">
          <div className="shell sp-hero-inner">
            <Link className="sp-back" to={{ pathname: '/', hash: '#stories' }}>
              <svg className="ico" aria-hidden="true"><use href="#i-arrow"></use></svg>
              العودة للرئيسية
            </Link>
            <div className="sp-hero-copy">
              <h1 className="sp-title" id="spTitle">{goal.title}</h1>
              <p className="sp-lead">رحلات حقيقية بدأت بهدف يشبه هدفكِ.</p>
              <p className="sp-count" id="spCount">{queue.length} قصص ملهمة</p>
              <p className="sec-ornament sp-hero-ornament" aria-hidden="true">
                <span className="sec-ornament-line"></span>
                <svg className="ico" aria-hidden="true"><use href="#i-heart"></use></svg>
                <span className="sec-ornament-line"></span>
              </p>
            </div>
          </div>
        </div>

        <div className="shell sp-filters-wrap">
          <div className="sp-filters" id="spFilters" role="toolbar" aria-label="فلاتر القصص">
            {Object.keys(GOALS).map((id) => (
              <button
                key={id}
                type="button"
                className={'sp-pill' + (id === current ? ' is-active' : '')}
                aria-pressed={id === current ? 'true' : 'false'}
                onClick={() => setGoal(id)}
              >
                {GOALS[id].label}
              </button>
            ))}
          </div>
        </div>

        <div className="shell sp-main">
          <div className="sp-layout">
            <aside className="sp-visual">
              <div className="sp-visual-frame">
                <img className="sp-visual-img" src={goal.image} alt={goal.label} width="900" height="1200" />
                <div className="sp-visual-overlay" aria-hidden="true"></div>
                <div className="sp-visual-copy">
                  <p className="sp-visual-name">{goal.label}</p>
                  <p className="sp-visual-sub">رحلات حقيقية بدأت من هنا</p>
                </div>
              </div>
            </aside>

            <div className="sp-content">
              <div className="sp-list" hidden={queue.length === 0} aria-live="polite">
                {queue.map((item) => (
                  <article
                    key={item.id}
                    className="sp-card"
                    tabIndex={0}
                    role="button"
                    aria-label={`اقرئي قصة ${item.name}`}
                    onClick={() => openStory(item.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openStory(item.id);
                      }
                    }}
                  >
                    <div className="sp-card-top">
                      <p className="sp-card-name">{item.name}، {item.age} سنة</p>
                      <span className="sp-card-tag">{goalLabel(item.goal)}</span>
                    </div>
                    <p className="sp-card-excerpt">{item.excerpt}</p>
                    <div className="sp-card-foot">
                      <span className="sp-card-duration">{item.duration}</span>
                      <span className="sp-card-more">اقرئي قصتها <svg className="ico" aria-hidden="true"><use href="#i-arrow"></use></svg></span>
                    </div>
                  </article>
                ))}
              </div>
              <div className="sp-empty" hidden={queue.length !== 0}>
                <p>قريبًا ستجدين قصصًا ملهمة لهذا الهدف 🤍</p>
                <button className="btn btn-primary" type="button" onClick={() => setGoal('all')}>شاهدي كل القصص</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sp-modal" hidden={!story} aria-hidden={story ? 'false' : 'true'}>
        <div className="sp-modal-backdrop" tabIndex={-1} onClick={closeModal}></div>
        <div className="sp-modal-shell">
          <button className="sp-modal-nav sp-modal-prev" type="button" aria-label="القصة السابقة" disabled={modalIndex <= 0} onClick={() => go(-1)}>
            <svg className="ico" aria-hidden="true"><use href="#i-arrow"></use></svg>
          </button>
          <div className="sp-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="spModalTitle" tabIndex={-1}>
            <button className="sp-modal-close" type="button" aria-label="إغلاق" onClick={closeModal}>
              <svg className="ico" aria-hidden="true"><use href="#i-close"></use></svg>
            </button>
            <div className="sp-modal-scroll">
              {story && (
                <div className={'sp-modal-panel ' + panelClass} id="spModalPanel">
                  <p className="sp-modal-index" id="spModalTitle">{modalIndex + 1} من {queue.length} قصص</p>
                  <div className="sp-modal-media">
                    <img src={story.image} alt="" width="760" height="420" loading="lazy" />
                  </div>
                  <div className="sp-modal-nav-mobile" aria-label="التنقل بين القصص">
                    <button className="sp-modal-nav sp-modal-nav-m" type="button" aria-label="القصة السابقة" disabled={modalIndex <= 0} onClick={() => go(-1)}>
                      <svg className="ico" aria-hidden="true"><use href="#i-arrow"></use></svg>
                    </button>
                    <button className="sp-modal-nav sp-modal-nav-m" type="button" aria-label="القصة التالية" disabled={modalIndex >= queue.length - 1} onClick={() => go(1)}>
                      <svg className="ico sp-modal-nav-flip" aria-hidden="true"><use href="#i-arrow"></use></svg>
                    </button>
                  </div>
                  <header className="sp-modal-head">
                    <p className="sp-modal-name">{story.name}، {story.age} سنة</p>
                    <span className="sp-card-tag">{goalLabel(story.goal)}</span>
                  </header>
                  <div className="sp-modal-story">
                    <p>{story.story}</p>
                  </div>
                  <section className="sp-modal-metrics" aria-label="رحلتها في أرقام">
                    <h3>رحلتها في أرقام</h3>
                    <ul>
                      <li><span>المدة</span><strong>{story.metrics?.duration || story.duration}</strong></li>
                      <li><span>الجلسات</span><strong>{story.metrics?.sessions || '—'}</strong></li>
                      <li><span>المحصلة</span><strong>{story.metrics?.result || '—'}</strong></li>
                    </ul>
                  </section>
                  <button className="btn btn-primary sp-modal-cta" type="button" data-bk-open onClick={onOpenBooking} aria-haspopup="dialog" aria-controls="bookingModal">
                    ابدئي رحلتكِ المشابهة
                    <svg className="ico btn-ico" aria-hidden="true"><use href="#i-arrow"></use></svg>
                  </button>
                </div>
              )}
            </div>
          </div>
          <button className="sp-modal-nav sp-modal-next" type="button" aria-label="القصة التالية" disabled={modalIndex >= queue.length - 1} onClick={() => go(1)}>
            <svg className="ico sp-modal-nav-flip" aria-hidden="true"><use href="#i-arrow"></use></svg>
          </button>
        </div>
      </div>
    </main>
  );
}
