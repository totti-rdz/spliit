import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import Link from 'next/link'

// FIX for https://github.com/vercel/next.js/issues/58615
// export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <main>
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container flex max-w-screen-md flex-col items-center gap-4 text-center">
          <h1 className="!leading-none font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl landing-header py-2">
            Teilt <strong>Ausgaben</strong> <br /> mit <strong>Freunden</strong>{' '}
            & <strong>Familie</strong>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Erstellt Gruppen und seht, wer wem wie viel schuldet.
            <br />
          </p>
          <div className="flex gap-2">
            <Button asChild>
              <Link href="/groups">Loslegen</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="https://github.com/totti-rdz/spliit">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}