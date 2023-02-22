import Navbar from './navbar'

export default function Games() {
  return (
    <>
      <Navbar home={false} games={true} about={false} contact={false} />
      <h1>Games</h1>
    </>
  )
}