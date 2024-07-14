import React from 'react';
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
  

type Props = {};

export default function QuickActions({}: Props) {
  return (
    <div className='border  border-violet-950 min-w-[900px]' >
        <ResizablePanelGroup
      direction="horizontal"
      className="max-w-[900px] h-[100px] bg-violet-200"
    >
      <ResizablePanel  defaultSize={50}>
        <div className="flex h-[200px] ] items-center justify-center p-6 bg-violet-200">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6 bg-violet-200">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6 bg-violet-200">
              <span className="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>

    </div>
  );
}
