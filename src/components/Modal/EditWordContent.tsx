import React from 'react';

interface EditWordContentProps {
  closeModal: () => void;
  data: {
    _id: string;
    en: string;
    ua: string;
    category: string;
    isIrregular: boolean;
    owner?: string;
    progress?: number;
  };
}

const EditWordContent: React.FC<EditWordContentProps> = ({
  closeModal,
  data,
}) => {
  return <div>sadsa</div>;
};

export default EditWordContent;
