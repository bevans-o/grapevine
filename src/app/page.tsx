import { redirect } from 'next/navigation';

export default async function Root() {
  redirect('/dashboard')

  return (
    <main>

    </main>
  )
}
