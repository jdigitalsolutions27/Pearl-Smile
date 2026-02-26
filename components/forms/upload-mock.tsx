"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export function UploadMock() {
  const [fileName, setFileName] = useState("");
  const { toast } = useToast();

  return (
    <div className="space-y-3">
      <Input
        type="file"
        onChange={(event) => {
          const file = event.target.files?.[0];
          setFileName(file?.name ?? "");
        }}
      />
      <Button
        type="button"
        onClick={() =>
          toast({
            title: "Upload UI mock",
            description: fileName ? `${fileName} selected.` : "No file selected yet.",
          })
        }
      >
        Submit mock upload
      </Button>
      <p className="text-xs text-slate-500">This is a demonstration UI. Files are not transmitted or stored.</p>
    </div>
  );
}
