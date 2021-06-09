import React from "react"

export interface ContactProps {
  name: string
  cellphone: string
  age: number
}

const Contact = ({
  name = "Eurico",
  cellphone = "0614483647",
  age = 28,
}: ContactProps) => {
  return (
    <>
      <h1>{name}</h1>
      <h1>{cellphone}</h1>
      <h1>{age}</h1>
    </>
  )
}

export default Contact
