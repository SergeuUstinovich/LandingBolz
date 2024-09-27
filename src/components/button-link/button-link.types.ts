import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'

export interface IProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}
