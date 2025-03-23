import { Panel, PanelGroup } from "react-resizable-panels";
import PanelResizeHandler from "@/app/_components/ui/PanelResizeHandler";
import DiffMatchPatch from "diff-match-patch";
import DiffOutput from "@/app/_components/ui/DiffOutput";

export default function TextOutput(props: { texts: string[] }) {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };

  const dmp = new DiffMatchPatch();
  const diffs = dmp.diff_main(props.texts?.[0], props.texts?.[1]);
  // dmp.diff_cleanupSemantic(diffs);

  return (
    <PanelGroup direction="horizontal" className="p-2" onLayout={onLayout}>
      <Panel defaultSize={50} minSize={25}>
        <DiffOutput diffs={diffs} />
      </Panel>
      <PanelResizeHandler />
      <Panel defaultSize={50} minSize={25}>
        <DiffOutput diffs={diffs} isInsertion={true} />
      </Panel>
    </PanelGroup>
  );
}
