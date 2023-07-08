import { css } from '@stitches/core'
import { generateClassNames } from '@collai/auth-ui-shared'
import { Appearance, ServiceAgreement } from '../../types'

const inputDefaultStyles = css({
  fontFamily: '$inputFontFamily',
  background: '$inputBackground',
  borderRadius: '$inputBorderRadius',
  padding: '$inputPadding',
  cursor: 'text',
  borderWidth: '$inputBorderWidth',
  borderColor: '$inputBorder',
  borderStyle: 'solid',
  fontSize: '$baseInputSize',
  width: '100%',
  color: '$inputText',
  boxSizing: 'border-box',
  '&:hover': {
    borderColor: '$inputBorderHover',
    outline: 'none',
  },
  '&:focus': {
    borderColor: '$inputBorderFocus',
    outline: 'none',
  },
  '&::placeholder': {
    color: '$inputPlaceholder',
    letterSpacing: 'initial',
  },
  'a:link': {
    color: 'blue',
  },  
  transitionProperty: 'background-color, border',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '100ms',
  variants: {
    type: {
      default: {
        letterSpacing: '0px',
      },
      password: {
        letterSpacing: '6px',
      },
    },
  },
})

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
  type: 'text' | 'password' | 'email' | 'checkbox'
  appearance?: Appearance
  agreedToTos?: boolean
  serviceAgreement?: ServiceAgreement
}

const Input: React.FC<InputProps> = ({ children, appearance, ...props }) => {
  const classNames = generateClassNames(
    'input',
    inputDefaultStyles({
      type: props.type === 'password' ? 'password' : 'default',
    }),
    appearance
  )

  return (
    props.type === 'checkbox' ?
    <>
      <input      
        {...props} 
        style={appearance?.style?.input}
        type="checkbox" 
        name="checkbox" 
        id="tos_id" 
        value="choice"/>
      <label htmlFor="tos_id">{props.serviceAgreement?.prefixText}</label>
      { props.serviceAgreement?.tosText && props.serviceAgreement?.tosLink &&
        <a style={props.serviceAgreement?.linkStyle} href={props.serviceAgreement?.tosLink}>{props.serviceAgreement?.tosText}</a>
      }
      { props.serviceAgreement?.joinText && 
        <label>{props.serviceAgreement?.joinText}</label>
      }
      { props.serviceAgreement?.privacyPolicyText && props.serviceAgreement?.privacyPolicyLink &&
        <a style={props.serviceAgreement?.linkStyle} href={props.serviceAgreement?.privacyPolicyLink}>{props.serviceAgreement?.privacyPolicyText}</a>
      }
      .
    </>
    : <input
      {...props}
      style={appearance?.style?.input}
      className={classNames.join(' ')}
      disabled={!props.agreedToTos}
    >
      {children}
    </input> 
  )
}

export { Input }
