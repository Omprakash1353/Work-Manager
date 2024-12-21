import { useState } from 'react';
import { Drawing } from '../pages/Draw/types';

export const useDrawings = () => {
  const [drawings, setDrawings] = useState<Drawing[]>([
    {
      id: "1",
      name: "File Upload",
      location: "Projects/Design",
      created: "3 weeks ago",
      edited: "21 hrs ago",
      comments: 2,
      author: "T",
    },
    {
      id: "2",
      name: "E-Commerce",
      location: "Projects/Web",
      created: "2 weeks ago",
      edited: "2 weeks ago",
      comments: 5,
      author: "T",
    },
    {
      id: "3",
      name: "Untitled File",
      created: "1 month ago",
      edited: "3 weeks ago",
      comments: 0,
      author: "T",
    },
  ]);

  const createDrawing = (fileName: string) => {
    const newDrawing: Drawing = {
      id: (drawings.length + 1).toString(),
      name: fileName,
      created: "Just now",
      edited: "Just now",
      comments: 0,
      author: "T",
    };
    
    setDrawings([newDrawing, ...drawings]);
  };

  return {
    drawings,
    createDrawing,
  };
}; 