export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Timothy Cheng',
    jobTitle: 'Frontend Software Engineer',
    email: 'teecheng5@gmail.com',
    telephone: '+1-408-655-6059',
    url: 'https://timothycheng.dev',
    sameAs: [
      'https://github.com/timothychengg',
      'https://linkedin.com/in/timothyychengg',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'React Query',
      'Supabase',
      'Node.js',
      'Express',
      'MongoDB',
      'Frontend Development',
      'Full-Stack Development',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'University of California, Santa Barbara',
    },
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
