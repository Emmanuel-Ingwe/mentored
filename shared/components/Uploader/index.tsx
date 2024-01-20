import { useDragnDrop } from '@/shared/hooks/useDragnDrop';
import { cn } from '@/shared/lib/utils';
import { UploadIcon } from '../Icons/UploadIcon';

export const Uploader = () => {
  const { acceptedFiles, getRootProps, getInputProps, isDragActive, errors } =
    useDragnDrop();

  return (
    <div
      {...getRootProps({
        className:
          'flex flex-col items-center justify-center text-center w-full h-full p-4 text-xs md:text-sm rounded-md text-gray-700 border border-gray-300',
      })}
    >
      <input {...getInputProps()} />
      <div
        className={cn(
          'mb-3 rounded-full border-[6px] border-gray-50 bg-gray-100 p-2.5',
          isDragActive ? 'border-primaryx-600' : '',
        )}
      >
        <UploadIcon className="stroke-gray-600" />
      </div>
      <p>
        <span className="font-semibold text-primaryx-600">Click to upload</span>{' '}
        or drag and drop
      </p>
      <p>
        {acceptedFiles[0]?.name
          ? acceptedFiles[0].name
          : 'SVG, PNG, JPG or GIF (max. 800x400px)'}
      </p>
      {errors.map((error, index) => {
        return (
          <p key={index} className="text-red-500">
            {error}
          </p>
        );
      })}
    </div>
  );
};
