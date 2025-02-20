import { ABOUT } from "../constants"


const About = () => {
  return (
    <section>
        <h2 className="my-10 text-center text-3xl lg:text-8xl">About Me</h2>
        <div className="flex items-center justify-center">
            <p className="m-8 max-w-6xl text-2xl lg:text-2xl font-light ">{ABOUT}</p>
        </div>
    </section>
  )
}

export default About