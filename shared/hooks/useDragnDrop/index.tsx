import { useCallback, useState } from 'react';
import type { FileRejection } from 'react-dropzone';
import { useDropzone } from 'react-dropzone';
import { useAuthContext } from '@/app/(auth)/shared/context/useAuthContext';

export const useDragnDrop = () => {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const { setAcceptedFiles } = useAuthContext();

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      const file = new FileReader();

      file.onload = function () {
        setPreview(file.result);
      };

      if (acceptedFiles.length > 0) {
        file.readAsDataURL(acceptedFiles[0]);
        setErrors([]);
        setAcceptedFiles(acceptedFiles);
      }

      if (fileRejections.length > 0) {
        const errorArray = fileRejections[0].errors.map((error) => {
          if (error.code === 'file-too-large') {
            return 'File is too large';
          }
          if (error.code === 'file-invalid-type') {
            return 'File type not supported';
          }
          return 'Unknown error';
        });

        setErrors(errorArray);
      }
    },
    [setAcceptedFiles],
  );

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      accept: {
        'image/gif': [],
        'image/jpeg': [],
        'image/png': [],
        'image/svg+xml': [],
      },
      maxFiles: 1,
      maxSize: 2000000, // 2MB
      onDrop,
    });

  return {
    acceptedFiles,
    errors,
    getInputProps,
    getRootProps,
    isDragActive,
    preview,
  };
};
