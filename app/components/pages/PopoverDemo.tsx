import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="flat">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 rounded-lg bg-white shadow-md">
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-lg">Dimensions</h4>
            <p className="text-sm text-gray-600">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center">
              <Label htmlFor="width" className="text-gray-700">
                Width
              </Label>
              <Input
                id="width"
                defaultValue="100%"
                className="h-8 px-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex items-center">
              <Label htmlFor="maxWidth" className="text-gray-700">
                Max. width
              </Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="h-8 px-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex items-center">
              <Label htmlFor="height" className="text-gray-700">
                Height
              </Label>
              <Input
                id="height"
                defaultValue="25px"
                className="h-8 px-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex items-center">
              <Label htmlFor="maxHeight" className="text-gray-700">
                Max. height
              </Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="h-8 px-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
