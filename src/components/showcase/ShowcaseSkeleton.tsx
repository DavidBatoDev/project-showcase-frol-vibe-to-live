// Heights chosen to roughly mirror real ProjectCard variance so the masonry
// columns don't visibly reflow when real data swaps in.
const SKELETON_HEIGHTS = [280, 340, 300, 380, 260, 360, 320, 290, 350];

function SkeletonCard({ mediaHeight }: { mediaHeight: number }) {
  return (
    <div
      style={{
        background: 'oklch(12% 0.04 285 / 0.85)',
        border: '1px solid oklch(38% 0.08 285 / 0.35)',
        borderRadius: '16px',
        overflow: 'hidden',
        breakInside: 'avoid',
        marginBottom: '20px',
      }}
      aria-hidden="true"
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 16px 10px' }}>
        <div className="skeleton-shimmer" style={{ width: 30, height: 30, borderRadius: '50%' }} />
        <div className="skeleton-shimmer" style={{ width: 90, height: 12, borderRadius: 4 }} />
      </div>

      <div style={{ margin: '0 12px', borderRadius: '12px', overflow: 'hidden', border: '1px solid oklch(35% 0.07 285 / 0.4)' }}>
        <div className="skeleton-shimmer" style={{ width: '100%', height: mediaHeight }} />
      </div>

      <div style={{ padding: '12px 14px' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
          <div className="skeleton-shimmer" style={{ width: 70, height: 10, borderRadius: 3 }} />
          <div className="skeleton-shimmer" style={{ width: 80, height: 18, borderRadius: 6 }} />
        </div>
        <div className="skeleton-shimmer" style={{ width: '85%', height: 16, borderRadius: 4, marginBottom: 8 }} />
        <div className="skeleton-shimmer" style={{ width: '95%', height: 11, borderRadius: 3, marginBottom: 6 }} />
        <div className="skeleton-shimmer" style={{ width: '60%', height: 11, borderRadius: 3 }} />
      </div>
    </div>
  );
}

export function ShowcaseSkeleton({ count = 6 }: { count?: number }) {
  return (
    <>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div
          className="skeleton-shimmer"
          style={{ width: 220, height: 11, borderRadius: 3, margin: '0 auto 16px' }}
          aria-hidden="true"
        />
        <div
          className="skeleton-shimmer"
          style={{
            width: 'min(420px, 70%)',
            height: 'clamp(2rem, 5vw, 3rem)',
            borderRadius: 8,
            margin: '0 auto 18px',
          }}
          aria-hidden="true"
        />
        <div
          className="skeleton-shimmer"
          style={{ width: 'min(320px, 60%)', height: 14, borderRadius: 4, margin: '0 auto' }}
          aria-hidden="true"
        />
      </div>

      <div
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--border), transparent)',
          marginBottom: '40px',
        }}
        aria-hidden="true"
      />

      <div className="masonry-grid" role="status" aria-label="Loading projects">
        {Array.from({ length: count }).map((_, i) => (
          <SkeletonCard key={i} mediaHeight={SKELETON_HEIGHTS[i % SKELETON_HEIGHTS.length]} />
        ))}
      </div>
    </>
  );
}
