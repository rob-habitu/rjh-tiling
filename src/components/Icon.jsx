import {
  LayoutGrid,
  ShieldCheck,
  Home,
  Award,
  Check,
  Users,
  Wrench,
  ThumbsUp,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
} from 'lucide-react';

// Facebook SVG (removed from lucide-react)
const FacebookIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

// Instagram SVG (removed from lucide-react)
const InstagramIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const ICON_MAP = {
  'layout-grid':  LayoutGrid,
  'shield-check': ShieldCheck,
  'home':         Home,
  'award':        Award,
  'check':        Check,
  'users':        Users,
  'wrench':       Wrench,
  'thumbs-up':    ThumbsUp,
  'menu':         Menu,
  'x':            X,
  'phone':        Phone,
  'mail':         Mail,
  'map-pin':      MapPin,
  'facebook':     FacebookIcon,
  'instagram':    InstagramIcon,
  'external-link': ExternalLink,
};

export default function Icon({ name, size = 20, color, stroke = 1.5, style = {} }) {
  const LucideIcon = ICON_MAP[name];
  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found`);
    return <ExternalLink size={size} color={color} strokeWidth={stroke} style={style} />;
  }
  // FacebookIcon and InstagramIcon use fill/stroke differently
  if (name === 'facebook') {
    return <FacebookIcon size={size} color={color || 'currentColor'} />;
  }
  if (name === 'instagram') {
    return <InstagramIcon size={size} color={color || 'currentColor'} />;
  }
  return (
    <LucideIcon
      size={size}
      color={color}
      strokeWidth={stroke}
      style={{ display: 'inline-flex', ...style }}
    />
  );
}
