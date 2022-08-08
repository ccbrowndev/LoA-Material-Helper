/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";

export default function Settings() {
  return (
    <Disclosure as='nav' className=''>
      {({ open }) => (
        <>
          <div className=' pb-6 sm:px-6 lg:px-8'>
            <div className='h-auto text-white text-center'>
              <details open>
                <summary className='text-2xl font-bold tracking-tight'>
                  Info & Settings
                </summary>
                <p className=' text-lg text-white'>
                  This app allows you to enter information about your roster and
                  provide ETAs for goals you set.
                  <br />
                  There are a few important things to note:
                </p>
                <ul className='list-disc list-inside text-white text-sm'>
                  <li>
                    The app uses local storage for saving settings and custom
                    goals.
                  </li>
                  <li>
                    By default, it is assumed you run the highest guardian raids
                    possible.
                  </li>
                  <li>
                    Link at bottom to source code on GitHub. License is GNU GPL
                    v3.0
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
