/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { InformationCircleIcon } from '@heroicons/react/solid';

export default function Help({
  isShown,
  setIsShown,
}: {
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Transition.Root show={isShown} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setIsShown}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity backdrop-blur-sm' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6'>
                <div>
                  <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-600'>
                    <InformationCircleIcon color='white' />
                  </div>
                  <div className='mt-3 text-center sm:mt-5'>
                    <Dialog.Title
                      as='h3'
                      className='text-lg font-medium leading-6 text-gray-900'
                    >
                      How to use
                    </Dialog.Title>
                    <div className='mt-2'>
                      <p className='text-sm text-gray-700'>
                        You can enter any iLevel number but the lower bound is
                        <b> 1325</b>, upper bound is <b>1475</b>.
                        <br />
                        In-between values are rounded down to the closest
                        interval.
                        <br />
                        <b>
                          Material values are an average of resources obtainable
                          daily by the iLevel value.
                        </b>
                        <br />
                        Increase the amount of characters to account for others
                        in the roster at that iLevel interval.
                      </p>
                    </div>
                    <div className='mt-5'>
                      <p className='text-sm text-left text-gray-700'>
                        <ul>
                          <li>
                            1. Add your characters to the roster via the
                            provided form.
                          </li>
                          <li>
                            2. Select a goal target to funnel resources into.
                          </li>
                          <li>3. Select a goal or create your own.</li>
                          <li className='indent-4'>
                            3a. If you create your own goal, input your
                            currently held materials first.
                          </li>
                          <li>
                            4. App will output the estimated days it'll take to
                            complete your goal.
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-5 sm:mt-6'>
                  <button
                    type='button'
                    className='inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:text-sm'
                    onClick={() => setIsShown(false)}
                  >
                    Go back
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
