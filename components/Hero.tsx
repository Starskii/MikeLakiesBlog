import React from 'react'
import siteMetadata from '../data/siteMetadata'
import PageTitle from './PageTitle'

export default function Hero() {
  return (
    <section className="hero">
      <PageTitle>{siteMetadata.heroTitle}</PageTitle>
      <p className="prose mt-4 max-w-none text-gray-500 dark:text-gray-400">
        {siteMetadata.description}
      </p>
    </section>
  )
}
