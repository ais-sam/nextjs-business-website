
const PageIntro = ({className,children}) => {
  return (
    <p className={`${className} text-xl w-3/4 mt-8 mb-6`}>
        {children}
    </p>
  )
}

export default PageIntro