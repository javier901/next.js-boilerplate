import { useEffect, useState, ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const CSRProvider = ({ children, ...delegated }: Props) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return <div {...delegated}>{children}</div>
}

export default CSRProvider
