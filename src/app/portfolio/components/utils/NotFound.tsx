import Heading from '@/components/custom-ui/text/global/Heading';
import Paragraph from '@/components/custom-ui/text/global/Paragraph';
import Subheading from '@/components/custom-ui/text/global/Subheading';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div className="mx-auto flex h-screen max-w-5xl flex-col items-center justify-center">
      <Paragraph font="font-robotocondense" className="text-lg font-normal">
        OOPS!
      </Paragraph>
      <Heading font="font-khand" className="text-8xl font-bold">
        404
      </Heading>
      <Subheading font="font-khand" className="tracking-wider">
        NOT FOUND
      </Subheading>
      <Button
        className="mt-4 border border-df-light dark:bg-inherit dark:text-df-light dark:hover:bg-inherit"
        onClick={goBack}
      >
        Go Back
      </Button>
    </div>
  );
};

export default NotFound;
