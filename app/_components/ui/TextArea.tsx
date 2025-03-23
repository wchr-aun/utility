import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import LineNumber from "@/app/_components/ui/LineNumber";

export default function TextArea(props: {
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}) {
  const [lineNumbers, setLineNumbers] = useState<number>(
    props.value?.split("\n").length || 1,
  );
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const lineNumberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (props.value && props.value.split("\n").length !== lineNumbers) {
      setLineNumbers(props.value.split("\n").length);
    }
  }, [props.value, lineNumbers]);

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!props.onChange) return;
    props.onChange(e);
    setLineNumbers(e.target.value.split("\n").length);
  };

  const syncScroll = () => {
    if (lineNumberRef.current && textAreaRef.current) {
      lineNumberRef.current.scrollTop = textAreaRef.current.scrollTop;
    }
  };

  return (
    <div className="flex">
      <LineNumber
        className="max-h-[50vh] overflow-hidden"
        lineNumbers={lineNumbers}
        ref={lineNumberRef}
      />
      <textarea
        ref={textAreaRef}
        className="w-full h-[50vh] border border-emerald-950 dark:border-gray-600 font-mono text-sm no-scrollbar"
        wrap="off"
        value={props.value}
        onChange={handleOnChange}
        onScroll={syncScroll}
      />
    </div>
  );
}
