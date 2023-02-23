import Navbar from './navbar'

export default function Contact() {
  return (
    <>
      <Navbar home={false} games={false} blog={false} about={false} contact={true}/>
      <h1>Contact</h1>
    </>
  )
}