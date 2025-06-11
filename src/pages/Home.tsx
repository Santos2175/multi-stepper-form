import { Button } from '@/components/ui/button';
import {
  useMultiStepForm,
  type CombinedFormData,
} from '@/hooks/useMultiStepForm';
import { FaArrowLeft } from 'react-icons/fa';

import { FormProvider } from 'react-hook-form';
import Stepper from '@/components/form/stepper/Stepper';
import { STEPS } from '@/utils/steps-data';
import { useEffect } from 'react';

// Button Labels
const BUTTON_LABELS = {
  BACK: 'Back',
  NEXT: 'Next Step',
  SUBMIT: 'Launch Project',
};
const Home = () => {
  const {
    isFirstStep,
    back,
    next,
    isLastStep,
    currentStep,
    methods,
    users,
    setUsers,
    tasks,
    setTasks,
    allFormData,
  } = useMultiStepForm(STEPS);

  // Handler to submit form
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await next();
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  return (
    <div className='container min-h-screen mx-auto bg-gradient-to-br from-white/90 via-gray-100/80 to-gray-200/90'>
      <FormProvider {...methods}>
        <form className='p-8' onSubmit={handleFormSubmit}>
          {/* Stepper */}
          <Stepper steps={STEPS} currentStep={currentStep} />

          {/* Steps */}
          <div className='mt-16 md:mt-24 lg:mx-28'>
            {STEPS[currentStep].content({
              users: currentStep === 1 ? users : undefined,
              setUsers: currentStep === 1 ? setUsers : undefined,
              tasks: currentStep === 2 ? tasks : undefined,
              setTasks: currentStep === 2 ? setTasks : undefined,
              combinedFormData:
                currentStep === 4
                  ? (allFormData as CombinedFormData)
                  : undefined,
            })}
          </div>

          {/* Navigation buttons */}
          <div className='lg:mx-28 mt-8 lg:mt-20 mb-8'>
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

              <Button type='submit' className='p-7'>
                {isLastStep ? BUTTON_LABELS.SUBMIT : BUTTON_LABELS.NEXT}
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Home;
