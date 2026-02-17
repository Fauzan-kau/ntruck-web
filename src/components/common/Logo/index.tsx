import React from 'react';

type LogoVariant = 'db' | 'g' | 'lb' | 'white';
type LogoType = 'full' | 'icon' | 'wordmark';

interface LogoProps {
  /** Color variant: db=dark-blue, g=green, lb=light-blue, white=white */
  variant?: LogoVariant;
  /** full = icon + wordmark, icon = icon only, wordmark = text only */
  type?: LogoType;
  /** Height in pixels (width scales proportionally) */
  height?: number;
  className?: string;
}

// Inline SVG paths from NTRUCK brand assets
// Icon paths (N + truck symbol)
const ICON_PATH_D =
  'm1727.98,779.63h-547.79c-608.3,0-786.86,187.64-786.86,711.21v929.11h450.94v-913.97c0-272.39,81.71-338.97,366.2-338.97h490.27c290.53,0,366.2,66.57,366.2,338.97v913.97h450.94v-929.11c0-523.57-178.56-711.21-789.9-711.21Z M3220.97,1417.54l-485.79-231.33c-38.65-18.4-83.27,9.77-83.27,52.57v1123.34c0,32.16,26.08,58.25,58.23,58.25l838.3-.04c32.17,0,58.23-26.06,58.23-58.23v-333.71c-.02-260.96-150.1-498.64-385.7-610.85Zm116.1,477.37c0,15.36-14.27,27.84-31.9,27.84h-459.33c-17.63,0-31.9-12.45-31.9-27.81v-445.03c0-20.44,24.44-33.9,45.62-25.11l266.18,110.55c129.08,53.61,211.33,167.2,211.33,291.89v67.68Z';

// Wordmark paths (N T R U C K letters)
const WORDMARK_PATHS = [
  'm665.28,1940.69v-287c0-85.53-23.76-106.44-114.99-106.44h-153.95c-89.33,0-114.99,20.91-114.99,106.44v287h-141.6v-291.75c0-164.4,56.07-223.32,247.08-223.32h172.01c191.96,0,248.03,58.92,248.03,223.32v291.75h-141.6Z',
  'm945.62,1940.69v-400.08h-72.22v-114.99h72.22v-145.39h144.45v145.39h162.5v114.99h-162.5v400.08h-144.45Z',
  'm1321,1940.69v-298.4c0-153.95,67.47-216.67,241.38-216.67h92.18v114.99h-88.38c-78.88,0-103.58,20.91-103.58,102.63v297.45h-141.6Z',
  'm1983.37,1940.69c-191.01,0-247.08-58.92-247.08-222.37v-292.7h142.55v288.9c0,87.43,29.46,105.49,115.94,105.49h148.25c92.18,0,115.94-18.06,115.94-105.49v-288.9h140.65v292.7c0,163.45-56.07,222.37-248.98,222.37h-167.26Z',
  'm2751.23,1940.69c-191.01,0-247.08-58.92-247.08-222.37v-69.37c0-164.4,56.07-223.32,247.08-223.32h372.52v121.64h-367.77c-89.33,0-110.24,21.86-110.24,106.44v60.82c0,81.73,21.86,106.44,110.24,106.44h368.72v119.74h-373.47Z',
  'm3669.23,1940.69l-299.35-243.28v243.28h-142.55v-681.37h142.55v404.83l297.45-238.53h184.36l-320.26,248.03,328.81,267.04h-191.01Z',
];

const VARIANT_COLORS: Record<LogoVariant, string> = {
  db:    '#002369',
  g:     '#96D228',
  lb:    '#007EFF',
  white: '#FFFFFF',
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'db',
  type = 'full',
  height = 40,
  className,
}) => {
  const fill = VARIANT_COLORS[variant];

  if (type === 'icon') {
    // Icon only (N + truck symbol), viewBox 4000x3200
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 4000 3200"
        height={height}
        width={(height * 4000) / 3200}
        className={className}
        aria-label="nTruck logo icon"
        role="img"
      >
        <path fill={fill} d={ICON_PATH_D} />
      </svg>
    );
  }

  if (type === 'wordmark') {
    // Wordmark only (NTRUCK text), viewBox 4000x3200
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 4000 3200"
        height={height}
        width={(height * 4000) / 3200}
        className={className}
        aria-label="nTruck wordmark"
        role="img"
      >
        {WORDMARK_PATHS.map((d, i) => (
          <path key={i} fill={fill} d={d} />
        ))}
      </svg>
    );
  }

  // Full: icon left, wordmark right, side by side
  const iconH = height;
  const iconW = (iconH * 4000) / 3200;
  const wordH = height;
  const wordW = (wordH * 4000) / 3200;
  const gap = height * 0.25;
  const totalW = iconW + gap + wordW;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${totalW} ${height}`}
      height={height}
      width={totalW}
      className={className}
      aria-label="nTruck"
      role="img"
    >
      {/* Icon */}
      <g transform={`scale(${iconH / 3200})`}>
        <path fill={fill} d={ICON_PATH_D} />
      </g>
      {/* Wordmark */}
      <g transform={`translate(${iconW + gap}, 0) scale(${wordH / 3200})`}>
        {WORDMARK_PATHS.map((d, i) => (
          <path key={i} fill={fill} d={d} />
        ))}
      </g>
    </svg>
  );
};

export default Logo;
