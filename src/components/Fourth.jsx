import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function Fourth() {
  const [codingRef, codingInView] = useInView({ triggerOnce: true });
  const [humanRef, humanInView] = useInView({ triggerOnce: true });

  return (
    <div className="bg-black-glass text-white p-6 rounded-lg max-w-4xl mx-auto main">
      <h2 className="text-center text-2xl mb-4">Languages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LanguageSection ref={codingRef} inView={codingInView} title="Coding Languages" languages={codingLanguages} />
        <LanguageSection ref={humanRef} inView={humanInView} title="Human Languages" languages={humanLanguages} />
      </div>
    </div>
  );
}

const codingLanguages = [
  { name: 'HTML', proficiency: '90%' },
  { name: 'CSS', proficiency: '95%' },
  { name: 'Javascript', proficiency: '80%' },
  { name: 'C++', proficiency: '70%' },
  { name: 'Typescript', proficiency: '45%' },
];

const humanLanguages = [
  { name: 'English', proficiency: 'Fluent' },
  { name: 'Hindi', proficiency: 'Fluent' },
  { name: 'Marathi', proficiency: 'Fluent' },
  { name: 'Sanskrit', proficiency: 'Fluent' },
  { name: 'Kannada', proficiency: 'Basic' },
  { name: 'German', proficiency: 'Basic' },
];

const LanguageSection = React.forwardRef(({ title, languages, inView }, ref) => (
  <div ref={ref}>
    <h3 className="text-xl mb-2">{title}</h3>
    {languages.map((lang, index) => (
      <div key={index} className="mb-4">
        <div className="flex justify-between">
          <span>{lang.name}</span>
          <span>{lang.proficiency}</span>
        </div>
        <div className="w-full bg-zinc-700 rounded-full h-3.0">
          <div
            className={`bg-gray-white-glass h-2.5 rounded-full transition-width duration-1000 ${
              inView ? `w-[${lang.proficiency}]` : 'w-0'
            }`}
          ></div>
        </div>
      </div>
    ))}
  </div>
));
