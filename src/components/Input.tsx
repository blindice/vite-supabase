import React, { FC } from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

type InputProps = {
  onChange?: () => void
}

export default function Input(props: InputProps): JSX.Element {
  const Test: FC<{ className?: string }> = ({ className }) => (
    <motion.input
      type="text"
      className={className}
      {...props}
      whileFocus={{
        outline: ['none', '3px rgba(255, 255, 255, 0.4) solid'],
        transition: {
          duration: 2,
          ease: [0.561, 0.3451, 1],
        },
      }}
    />
  )
  const StyledInput = styled(Test)`
    border: 1px transparent solid;
    border-radius: 5px;
    background: white;
    line-height: 25px;
    margin: 5px;
    position: relative;
  `
  return (
    <>
      <StyledInput />
    </>
  )
}
