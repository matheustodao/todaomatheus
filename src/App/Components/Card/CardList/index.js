import projects from '../projects';
import Card from '../index';

export default function CardList() {
  return (
    <>
      {projects.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          languages={item.languages}
          mockup={item.mockup}
        />
      ))}
    </>
  );
}
