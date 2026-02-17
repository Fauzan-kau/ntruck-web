import type { ThemeConfig } from 'antd';
import { colors } from './colors';
import { typography } from './typography';

/**
 * Ant Design v5 Token-based Theme Configuration
 * Supports light / dark switching via algorithm.
 */

const sharedTokens: ThemeConfig['token'] = {
  // Brand colors
  colorPrimary:        colors.primary[500],   // #002369 NTRUCK Dark Blue
  colorSuccess:        colors.success,
  colorWarning:        colors.warning,
  colorError:          colors.error,
  colorInfo:           colors.info,           // #007EFF NTRUCK Light Blue
  colorLink:           colors.accent[500],
  colorLinkHover:      colors.accent[400],
  colorLinkActive:     colors.accent[600],

  // Typography
  fontFamily:          typography.fontFamily.body,  // Roboto
  fontSize:            16,
  fontSizeSM:          14,
  fontSizeLG:          18,
  fontSizeXL:          20,
  fontSizeHeading1:    48,
  fontSizeHeading2:    36,
  fontSizeHeading3:    28,
  fontSizeHeading4:    22,
  fontSizeHeading5:    18,

  // Layout
  borderRadius:        8,
  borderRadiusLG:      12,
  borderRadiusSM:      6,
  borderRadiusXS:      4,

  // Sizing
  controlHeight:       42,
  controlHeightLG:     50,
  controlHeightSM:     34,

  // Spacing
  padding:             16,
  paddingLG:           24,
  paddingXL:           32,
  paddingSM:           12,
  paddingXS:           8,
  paddingXXS:          4,
  margin:              16,
  marginLG:            24,
  marginXL:            32,
  marginSM:            12,
  marginXS:            8,

  // Motion
  motionDurationSlow:  '0.4s',
  motionDurationMid:   '0.2s',
  motionDurationFast:  '0.1s',
};

export const lightTheme: ThemeConfig = {
  token: {
    ...sharedTokens,
    colorBgBase:       colors.neutral[0],
    colorTextBase:     colors.neutral[900],
    colorBgContainer:  colors.neutral[0],
    colorBgElevated:   colors.neutral[50],
    colorBgLayout:     colors.neutral[50],
    colorBorder:       colors.neutral[200],
    colorBorderSecondary: colors.neutral[100],
  },
  components: {
    Layout: {
      headerBg:        colors.neutral[0],
      siderBg:         colors.neutral[0],
      bodyBg:          colors.neutral[50],
    },
    Card: {
      borderRadiusLG:  12,
    },
    Button: {
      borderRadius:    8,
      controlHeight:   42,
      controlHeightLG: 50,
    },
    Menu: {
      itemBorderRadius: 8,
    },
    Typography: {
      fontWeightStrong: 700,
    },
  },
};

export const darkTheme: ThemeConfig = {
  token: {
    ...sharedTokens,
    colorBgBase:       colors.dark.bg,
    colorTextBase:     colors.neutral[50],
    colorBgContainer:  colors.dark.surface1,
    colorBgElevated:   colors.dark.surface2,
    colorBgLayout:     colors.dark.bg,
    colorBorder:       colors.dark.border,
    colorBorderSecondary: colors.dark.surface3,
  },
  components: {
    Layout: {
      headerBg:        colors.dark.surface1,
      siderBg:         colors.dark.surface1,
      bodyBg:          colors.dark.bg,
    },
    Card: {
      borderRadiusLG:  12,
      colorBgContainer: colors.dark.surface1,
    },
    Button: {
      borderRadius:    8,
    },
  },
};
