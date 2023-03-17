import PageIntro from 'components/shared/PageIntro'

const ContactText = ({className}) => {
  return (
    <section className={className}>
        <PageIntro className="lg:w-[42rem]">
            Interested in our <span className="underline-yellow z-10"> Machine & Software </span> services or need advice? Then please get in touch and we’ll be glad to help.
        </PageIntro>
    </section>
  )
}

export default ContactText