import { useState } from "react";
import { Checkbox } from "./components/ui/checkbox";
import { Input } from "./components/ui/input";
import { Button, buttonVariants } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { X } from 'lucide-react';


const TodoApp = () => {
  const [notes, setNotes] = useState([]);
  const [isChecked, setIsChecked] = useState(false);


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-xl">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Todo List
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Stay organized and boost your productivity
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <form className="mb-4">
            <div className="flex gap-3">
              <Input 
                placeholder="What needs to be done?" 
                className="flex-1 focus-visible:ring-1 focus-visible:ring-indigo-600 focus-visible:ring-offset-0"
              />
              <Button 
                type="submit"
                className="bg-indigo-600 px-6 hover:bg-indigo-700 transition-colors duration-200"
              >
                Add
              </Button>
            </div>
          </form>
          
          <div className="h-64 overflow-y-auto pr-2">
            {/* Single todo item */}
            <div className="group flex items-center justify-between rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition-all duration-200 hover:border-indigo-200 hover:shadow-md">
              <div className="flex items-center gap-3">
                <Checkbox 
                  checked={isChecked}
                  onCheckedChange={() => setIsChecked(!isChecked)}
                  className="h-4 w-4 border-2 transition-colors duration-200 data-[state=checked]:border-indigo-600 data-[state=checked]:bg-indigo-600" 
                />
                <p className={`text-gray-800 transition-all duration-300 ${isChecked ? 'text-gray-400 line-through' : ''}`}>
                  Complete project documentation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;