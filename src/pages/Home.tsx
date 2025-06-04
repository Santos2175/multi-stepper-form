import { Button } from '@/components/ui/button';
import { useMultiStepForm } from '@/hooks/useMultiStepForm';
import { FaArrowLeft } from 'react-icons/fa';

import { useForm } from 'react-hook-form';
import Stepper from '@/components/form/stepper/Stepper';
import { STEPS } from '@/utils/steps-data';

// Button Labels
const BUTTON_LABELS = {
  BACK: 'Back',
  NEXT: 'Next Step',
  SUBMIT: 'Launch Project',
};
const Home = () => {
  const { isFirstStep, back, next, isLastStep, currentStep } =
    useMultiStepForm(STEPS);

  const { handleSubmit } = useForm();

  // Function to be executed on submit

  const onSubmit = async () => {
    if (!isLastStep) return next();
    console.log('submit clicked');
    alert('submitted');
  };
  return (
    <div className='px-8'>
      <form className='p-8' onSubmit={handleSubmit(onSubmit)}>
        {/* Stepper */}
        <Stepper steps={STEPS} currentStep={currentStep} />

        {/* Steps */}
        <div className='mt-10 mx-28'>{STEPS[currentStep].content({})}</div>

        {/* Navigation buttons */}
        <div className='mx-28 mt-20 mb-8'>
          <div className='flex items-center justify-end gap-4'>
            <Button
              type='button'
              variant={'ghost'}
              className={`p-7 disabled:cursor-not-allowed`}
              disabled={isFirstStep}
              onClick={back}>
              <FaArrowLeft />
              <span>{BUTTON_LABELS.BACK}</span>
            </Button>

            {/* {isLastStep ? (
              <Button type='submit' className='p-7'>
                {BUTTON_LABELS.SUBMIT}
              </Button>
            ) : (
              <Button
                type='button'
                className='p-7'
                onClick={() => {
                  console.log('Next clicked');
                  next();
                }}>
                {BUTTON_LABELS.NEXT}
              </Button>
            )} */}

            <Button type='submit' className='p-7'>
              {isLastStep ? BUTTON_LABELS.SUBMIT : BUTTON_LABELS.NEXT}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
