import Link from 'next/link';
import React from 'react'

interface ContactButtonProps {
    buttonText: string;
    customClass?: string;
    link: string;
}

export default function Button ({ buttonText, customClass, link }: ContactButtonProps): JSX.Element {
  return (
      <Link href={link} className={`bg-black/75 hover:bg-zinc-800 py-2 w-full text-center inline-block font-semibold rounded-lg ring-1 ring-zinc-800 ${customClass}`}>
        {buttonText}
      </Link>
  )
}
