import { redirect } from 'next/navigation';

export default async function Root() {
  redirect('/login')

  return (
    <main>

    </main>
  )
}
