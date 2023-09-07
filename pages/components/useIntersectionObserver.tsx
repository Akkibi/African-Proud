import { useEffect, useRef } from 'react'

function useIntersectionObserver(options: IntersectionObserverInit) {
  useEffect(() => {
    const elements = document.querySelectorAll('.viewHide')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      })
    }, options)

    elements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [options])

  return null; // Return null instead of an empty object
}


export default useIntersectionObserver
