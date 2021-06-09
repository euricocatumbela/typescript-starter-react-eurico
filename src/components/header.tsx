import * as React from "react"

interface HeaderProps {
  siteTitle: string
}

const Header = ({ siteTitle }: HeaderProps) => <>{siteTitle}</>

export default Header
