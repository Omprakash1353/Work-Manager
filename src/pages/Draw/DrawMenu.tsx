import { CreateFileDialog } from "@/components/custom/draw/CreateFileDialog";
import { DrawingsTable } from "@/components/custom/draw/DrawingsTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDrawings } from "@/hooks/useDrawings";
import { Plus, Search } from "lucide-react";
import { useState } from "react";

const DrawMenu = () => {
  const { drawings, createDrawing } = useDrawings();
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const handleCreateFile = (fileName: string) => {
    createDrawing(fileName);
  };

  return (
    <div className="flex flex-col h-auto bg-background backdrop-blur-xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/40 px-6 h-14 sticky top-0 z-10">
        {/* Search on the left */}
        <div className="flex items-center border rounded-md px-3 bg-muted/40 h-9">
          <Search className="w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search files..."
            className="border-0 focus-visible:ring-0 h-9 w-[200px] bg-transparent"
          />
        </div>

        {/* Create button on the right */}
        <Button
          variant="outline"
          onClick={() => setIsCreateDialogOpen(true)}
          className="flex items-center gap-2 h-9"
        >
          <Plus className="w-4 h-4" />
          Create New File
        </Button>
      </div>

      {/* Files Table */}
      <div className="flex-1 px-6 py-6">
        <DrawingsTable drawings={drawings} />
      </div>

      {/* Create File Dialog */}
      <CreateFileDialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
        onCreateFile={handleCreateFile}
      />
    </div>
  );
};

export default DrawMenu;
