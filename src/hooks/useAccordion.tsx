import { useEffect, useRef, useState } from 'react';

type AccordionAdjustment = (accordionContent: HTMLDivElement) => void;

export const useAccordion = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  useEffect(() => {
    if (isAccordionOpen && contentRef.current) {
      setAccordionMaxHeight(contentRef.current);
    } else if (!isAccordionOpen && contentRef.current?.style.maxHeight) {
      hideAccordionContent(contentRef.current);
    }
  }, [isAccordionOpen, contentRef]);

  const setAccordionMaxHeight: AccordionAdjustment = (accordionContent) => {
    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
  };

  const hideAccordionContent: AccordionAdjustment = (accordionContent) => {
    accordionContent.style.maxHeight = 0 + 'px';
  };

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return {
    contentRef,
    toggleAccordion,
  };
};
