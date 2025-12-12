export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Timothy Cheng',
    jobTitle: 'Frontend Developer',
    url: 'https://timothycheng.dev',
    sameAs: ['https://github.com', 'https://linkedin.com'],
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'Frontend Development',
      'Web Development',
    ],
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
