import { Panel, PanelGroup } from "react-resizable-panels";
import TextArea from "@/app/_components/ui/TextArea";
import PanelResizeHandler from "@/app/_components/ui/PanelResizeHandler";
import { ChangeEventHandler } from "react";

export default function TextInput(props: {
  leftText?: string;
  rightText?: string;
  onLeftChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onRightChange?: ChangeEventHandler<HTMLTextAreaElement>;
}) {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };

  return (
    <PanelGroup direction="horizontal" className="p-2" onLayout={onLayout}>
      <Panel defaultSize={50} minSize={20}>
        <TextArea value={props.leftText} onChange={props.onLeftChange} />
      </Panel>
      <PanelResizeHandler />
      <Panel defaultSize={50} minSize={20}>
        <TextArea value={props.rightText} onChange={props.onRightChange} />
      </Panel>
    </PanelGroup>
  );
}
