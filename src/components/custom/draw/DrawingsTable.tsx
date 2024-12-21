import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Calendar,
  FileText,
  FolderOpen,
  MessageSquare,
  MoreVertical,
  User2,
} from "lucide-react";
import { Drawing } from "../../../pages/Draw/types";

interface DrawingsTableProps {
  drawings: Drawing[];
}

export const DrawingsTable = ({ drawings }: DrawingsTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-border/40">
          <TableHead className="w-[300px]">NAME</TableHead>
          <TableHead className="w-[200px]">LOCATION</TableHead>
          <TableHead>CREATED</TableHead>
          <TableHead>EDITED</TableHead>
          <TableHead className="text-center">COMMENTS</TableHead>
          <TableHead>AUTHOR</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {drawings.map((drawing) => (
          <TableRow
            key={drawing.id}
            className="group border-border/40 hover:bg-muted/40"
          >
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-muted-foreground" />
                <span>{drawing.name}</span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-muted-foreground" />
                {drawing.location || "-"}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                {drawing.created}
              </div>
            </TableCell>
            <TableCell>{drawing.edited}</TableCell>
            <TableCell>
              <div className="flex items-center justify-center gap-1">
                <MessageSquare className="w-4 h-4 text-muted-foreground" />
                {drawing.comments}
              </div>
            </TableCell>
            <TableCell>
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <User2 className="w-4 h-4" />
              </div>
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="opacity-0 group-hover:opacity-100 transition-opacity hover:bg-muted/60 rounded-full"
                  >
                    <MoreVertical className="w-4 h-4 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-background/95 backdrop-blur-xl backdrop-saturate-150 border-border/40"
                >
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
