import React from "react"
interface ContactProps {
  name?: string
  cellphone?: string
  age: number
}

export const Contact: React.FC<ContactProps> = () => {
  return (
    <>
      <h1>Hello</h1>
    </>
  )
}
