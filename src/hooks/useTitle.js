import { useEffect } from 'react'

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | LogaXP Shopping`

  }, [title]);


  return null;
}
