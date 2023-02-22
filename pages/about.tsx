import Navbar from './navbar'

export default function About() {
  return (
    <>
      <Navbar home={false} games={false} about={true} contact={false} />
      <h1>About page</h1>
    </>
  )
}