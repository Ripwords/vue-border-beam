/**
 * Size/type preset for the border beam effect
 * - 'sm': Small button-sized with compact glow
 * - 'md': Medium card-sized with full border glow
 * - 'line': Bottom-only traveling glow with breathe and spike animations
 */
export type BorderBeamSize = 'sm' | 'md' | 'line'

/**
 * Theme mode for adapting beam colors to background
 */
export type BorderBeamTheme = 'dark' | 'light' | 'auto'

/**
 * Color variant for the beam effect
 * - 'colorful': Full rainbow spectrum (default)
 * - 'mono': Monochromatic grayscale
 * - 'ocean': Blue and purple tones
 * - 'sunset': Warm orange, yellow, and red tones
 */
export type BorderBeamColorVariant = 'colorful' | 'mono' | 'ocean' | 'sunset'

/**
 * Configuration for a size preset
 */
export interface SizeConfig {
  borderRadius: number
  borderWidth: number
  width?: number
  height?: number
}

/**
 * Theme color configuration
 */
export interface ThemeColors {
  strokeOpacity: number
  innerOpacity: number
  bloomOpacity: number
  innerShadow: string
  saturation: number
}

/**
 * Props for the BorderBeam component
 */
export interface BorderBeamProps {
  /** Size/type preset @default 'md' */
  size?: BorderBeamSize
  /** Color variant @default 'colorful' */
  colorVariant?: BorderBeamColorVariant
  /** Theme mode @default 'dark' */
  theme?: BorderBeamTheme
  /** Disable hue-shift animation @default false */
  staticColors?: boolean
  /** Rotation/travel duration in seconds @default 1.96 for border, 2.4 for line */
  duration?: number
  /** Whether the animation is active @default true */
  active?: boolean
  /** Custom border radius in px. Auto-detects from child if omitted. */
  borderRadius?: number
  /** Brightness multiplier @default 1.3 */
  brightness?: number
  /** Saturation multiplier @default theme default */
  saturation?: number
  /** Hue rotation range in degrees @default 30 */
  hueRange?: number
  /** Effect strength/opacity 0-1. Only affects beam layers. @default 1 */
  strength?: number
}
