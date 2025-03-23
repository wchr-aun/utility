"use client";
import TextInput from "@/app/_components/TextInput";
import Button from "@/app/_components/ui/Button";
import TextOutput from "@/app/_components/TextOutput";
import { ChangeEvent, useEffect, useState } from "react";

import PLACEHOLDER_LEFT from "@/app/_resources/placeholder-left.json";
import PLACEHOLDER_RIGHT from "@/app/_resources/placeholder-right.json";

export default function ClientComponent() {
  const [leftText, setLeftText] = useState<string>(
    JSON.stringify(PLACEHOLDER_LEFT),
  );
  const [rightText, setRightText] = useState<string>(
    JSON.stringify(PLACEHOLDER_RIGHT),
  );
  const [texts, setTexts] = useState<string[]>([]);
  const [isPrettifiable, setIsPrettifiable] = useState(true);

  useEffect(() => {
    try {
      JSON.parse(leftText);
      JSON.parse(rightText);
      setIsPrettifiable(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      setIsPrettifiable(false);
    }
  }, [leftText, rightText]);

  const onLeftChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setLeftText(e.target.value);
  };

  const onRightChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setRightText(e.target.value);
  };

  const prettifyText = () => {
    setLeftText(JSON.stringify(JSON.parse(leftText), null, 2));
    setRightText(JSON.stringify(JSON.parse(rightText), null, 2));
  };

  const compare = () => {
    setTexts([leftText, rightText]);
  };

  const reset = () => {
    setTexts([]);
  };

  return (
    <div className="flex flex-col">
      <TextInput
        leftText={leftText}
        rightText={rightText}
        onLeftChange={onLeftChange}
        onRightChange={onRightChange}
      />
      <div className="flex justify-center w-full">
        <Button
          title={"Prettier"}
          onClick={prettifyText}
          disabled={!isPrettifiable}
        />
      </div>
      <div className="flex justify-center w-full">
        <Button title={"Compare"} onClick={compare} />
      </div>
      {texts.length !== 0 && (
        <div className="flex justify-center w-full">
          <Button title={"Reset"} onClick={reset} theme="danger" />
        </div>
      )}
      {texts.length !== 0 && <TextOutput texts={texts} />}
    </div>
  );
}
