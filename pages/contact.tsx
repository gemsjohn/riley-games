import Navbar from './navbar'

export default function Contact() {
  return (
    <>
      <Navbar home={false} games={false} about={false} contact={true}/>
      <h1>Contact</h1>
    </>
  )
}