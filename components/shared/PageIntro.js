
const PageIntro = ({className,children}) => {
  return (
    <p className={`${className ? className:"lg:w-3/4"} text-xl  mt-8 mb-6`}>
        {children}
    </p>
  )
}

export default PageIntro