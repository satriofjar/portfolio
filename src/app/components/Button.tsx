import React from 'react'

interface ContactButtonProps {
    buttonText: string;
    customClass?: string;
}

export default function Button ({ buttonText, customClass }: ContactButtonProps): JSX.Element {
  return (
    <button className={`bg-black/75 hover:bg-zinc-800 w-full py-2 font-semibold rounded-lg ring-1 ring-zinc-800 ${customClass}`}>
        {buttonText}
    </button>
  )
}
