import { PanelResizeHandle } from "react-resizable-panels";

export default function PanelResizeHandler() {
  return (
    <div className="flex items-center">
      <PanelResizeHandle className="w-1.5 h-7 m-1 rounded-xl bg-gray-500" />
    </div>
  );
}
