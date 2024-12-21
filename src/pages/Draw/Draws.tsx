import { Card } from "@/components/ui/card";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTheme } from "@/context/theme-provider";
import { Excalidraw } from "@excalidraw/excalidraw";

const Draws = () => {
  const { theme } = useTheme();

  return (
    <div className="h-screen w-full">
      <ResizablePanelGroup direction="horizontal">
        {/* Left Document Panel */}
        <ResizablePanel defaultSize={30} minSize={20} maxSize={50}>
          <Card className="h-full rounded-none border-0">
            <ScrollArea className="h-full">
              <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Document</h2>
                {/* Add your document content here */}
                <div className="prose">
                  <p className="mb-4">Start typing your document here...</p>
                </div>
              </div>
            </ScrollArea>
          </Card>
        </ResizablePanel>

        {/* Resizable Handle */}
        <ResizableHandle />

        {/* Right Drawing Panel */}
        <ResizablePanel defaultSize={70}>
          <div className="h-full w-full">
            <Excalidraw
              theme={theme === "dark" ? "dark" : "light"}
              viewModeEnabled={false}
            />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Draws;
