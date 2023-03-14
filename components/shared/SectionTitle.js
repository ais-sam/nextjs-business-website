import React from 'react'

const SectionTitle = ({children,className}) => {
  return (
    <h2 className={`${className} text-4xl mb-3`}>
        {children}
    </h2>
  )
}

export default SectionTitle