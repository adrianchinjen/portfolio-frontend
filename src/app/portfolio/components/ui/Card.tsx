import CardBody from './text/CardBody';
import CardSubTitle from './text/CardSubTitle';
import CardTitle from './text/CardTitle';

const Card = () => {
  return (
    <div className="m-4 rounded-md bg-inherit p-4 shadow-lg dark:bg-zinc-700">
      <div>
        <CardTitle>Card Title</CardTitle>
        <CardSubTitle>Card Sub title</CardSubTitle>
        <CardBody>
          This is a reusable card component built with TailwindCSS. You can customize it as needed!
        </CardBody>
      </div>
    </div>
  );
};

export default Card;
