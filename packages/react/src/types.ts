import { BaseAppearance, BaseAuth } from '@collai/auth-ui-shared'
import { CSSProperties, ReactNode } from 'react'

export interface Appearance extends BaseAppearance {
  style?: {
    anchor?: CSSProperties
    button?: CSSProperties
    container?: CSSProperties
    divider?: CSSProperties
    input?: CSSProperties
    label?: CSSProperties
    loader?: CSSProperties
    message?: CSSProperties
  }
}

export interface Auth extends BaseAuth {
  children?: ReactNode
  appearance?: Appearance
  serviceAgreement?: ServiceAgreement
}

export interface ServiceAgreement {
  prefixText?: string
  tosText?: string
  tosLink?: string
  joinText?: string
  privacyPolicyText?: string
  privacyPolicyLink?: string
  linkStyle?: React.CSSProperties
  labelStyle?: React.CSSProperties
}
